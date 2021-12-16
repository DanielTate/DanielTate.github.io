<template>
    <div class="terminal" @click="focus">
        <div ref="output" class="output">
            <div class="history" v-for="(item, i) in history" :key="i" v-html="item"></div>
        </div>
        <div class="input">
            <div ref="prompt" class="prompt" v-html="prompt"></div>
            <input spellcheck="false" ref="input" type="text" v-model="value" @keydown="keydown" />
        </div>
    </div>
</template>

<script>
import get_by_id from '@/filesystem/get_by_id'
import get_by_path from '@/filesystem/get_by_path'
import argparse from '@/methods/argparse'
import cat from '@/commands/cat'
import cd from '@/commands/cd'

export default {
    data() {

        return {
            name: 'Terminal',
            icon: 'https://via.placeholder.com/128x128',
            value: '',
            commandHistory: [],
            history: [],
            commands: ['clear', 'help', 'ls', 'cd', 'cat'],
            applications: ['Terminal'],
            user: 'guest',
            host: 'website',
            cwd: 'root/home/dan',
        }
    },
    computed: {
        dir() {
            return get_by_path(this.$store.state.fs, this.cwd)
        },
        prompt() {
            return `<span class="user">${this.user}</span>@<span class="hostname">${this.host}</span><span class="cwd">${this.cwd}</span><span>$</span>`
        }
    },
    mounted() {
        this.focus()
    },
    methods: {
        focus() {
            this.$refs.input.focus()
        },
        keydown(e) {
            if(e.keyCode === 13) this.input(this)
            if(e.keyCode === 38) this.previous()
        },
        input() {
            this.commandHistory.push(this.value)
            this.history.push(`${this.prompt} ${this.value}`)

            let { command, args, opts } = argparse(this.value)

            let response = `${this.prompt} That command does not exist, type help for more info.`

            if(this.commands.indexOf(command) > -1) {
                response = this[command](this.dir.children, args, opts)
                this.output(response)
            }

            if(this.applications.indexOf(command) > -1) {
                this.$bus.emit('launch', command)
            }

            // this.output(response)
        },
        output(value) {
            this.history.push(value)
            this.value = ''
        },
        previous() {
            this.value = this.commandHistory[this.commandHistory.length - 1]
        },
        clear() {
            this.history = []
            this.output()
        },
        help() {
            this.history.push(`You can try typing ${this.commands.join(', ')}. Good luck.`)
            this.value = ''
        },
        ls() {
            // list the contents of the current or a directory passed
            const dir = get_by_path(this.$store.state.fs, this.pwd)
            const names = dir.children.map( child => (child.name)).join(' ')
            this.output(names)
        },
        cd(dir, args, opts) {

            let result = dir.find(({name}) => name === args[0])

            if(!result) {
                try {
                    result = cd(this.$store.state.fs, args[0])
                    this.pwd = result.path
                } catch (e) {
                    this.output(e.message)
                }
            } else {
                this.pwd = result.path
            }
        },
        cat,
    }
}
</script>

<style>

    .terminal, input {
        font-family: monospace;
    }

    .output, .input, input {
        font-size: 18px;
        line-height: 1.8;
    }

    .terminal {
        width: 100%;
        padding: var(--spacing);
    }

    .input {
        display: flex;
        align-items: center;
    }

    .prompt {
        flex: 1;
        margin-right: 11px;
    }

    .cwd {
        margin: 0 10px;
    }

    .history {
        margin-bottom: 10px;
    }

    input {
        flex-shrink: 1;
        width: 100%;
        padding: 0;
        border: none;
        outline: none;
    }

    table td {
        padding-right: 2em;
    }

</style>
