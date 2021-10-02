<template>
    <Window v-for="app in windows">
        <component :is="app"></component>
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
        this.windows.push(Terminal)
        this.$bus.on('launch', (data) => {
            this.windows.push(data)
        })
    }
}

</script>
