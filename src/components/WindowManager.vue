<template>
    <Window :id="app.id" v-for="app in windows">
        <component id="app.id" :is="app.application"></component>
    </Window>
</template>

<script>
import Window from '@/components/Window.vue'
import Terminal from '@/components/Terminal.vue'

export default {
    components: { Window, Terminal },
    data() {
        return {
            windows: []
        }
    },
    mounted() {
        this.launch(Terminal)
        this.$bus.on('launch', (data) => {
            // Probably should do a check if this application exists here
            this.launch(data)
        })

        this.$bus.on('close', (id) => {
            const index = this.windows.findIndex(app => app.id === id)
            if(index > -1) {
                this.windows.splice(index, 1)
            }
        })
    },
    methods: {
        launch(application) {
            this.windows.push({
                id: this.windows.length,
                application
            })
        }
    }
}

</script>
