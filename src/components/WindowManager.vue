<template>
    <Window :id="app.id" :decorations="app.decorations" v-for="app in windows">
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
        this.launch({ application: Terminal })
        this.$bus.on('launch', (application) => {
            // Probably should do a check if this application exists here
            this.launch({ application, decorations: true })
        })

        this.$bus.on('close', (id) => {
            const index = this.windows.findIndex(app => app.id === id)
            if(index > -1) {
                this.windows.splice(index, 1)
            }
        })
    },
    methods: {
        launch({ application, decorations }) {
            this.windows.push({
                id: this.windows.length,
                application,
                decorations,
            })
        }
    }
}

</script>
