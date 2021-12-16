<template>
    <Window :id="String(app.id)" :decorations="app.decorations" :classList="app.classList" v-for="app in windows">
        <component :id="String(app.id)" :is="app.application"></component>
    </Window>
</template>

<script>
import Window from '@/components/Window.vue'
import Terminal from '@/components/Terminal.vue'
import Desktop from '@/components/Desktop.vue'
import Settings from '@/components/Settings.vue'

export default {
    components: {
        Window,
        Terminal,
        Settings
    },
    data() {
        return {
            windows: []
        }
    },
    mounted() {
        this.launch({ application: Terminal, classList: 'tty1' })
        this.launch({ application: Desktop, classList: 'desktop' })

        this.$bus.on('launch', (application) => {
            // Probably should do a check if this application exists here
            this.launch({ application, decorations: true, classList: application.name })
        })

        this.$bus.on('close', (id) => {
            const index = this.windows.findIndex(app => String(app.id) === String(id))
            if(index > -1) {
                this.windows.splice(index, 1)
            }
        })
    },
    methods: {
        launch({ application, decorations, classList }) {
            this.windows.push({
                id: this.windows.length,
                application,
                decorations,
                classList,
            })
        }
    }
}

</script>
