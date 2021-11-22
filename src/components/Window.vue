<template>
<div :class="`window ${classList}`" >
    <div v-if="decorations" class="decorations">
        <button @click="close">close</button>
    </div>
    <div class="application">
        <slot />
    </div>
</div>
</template>

<script>
import { toRaw } from 'vue';
export default {
    props: {
        id: String,
        classList: String,
        decorations: Boolean
    },
    data() {
        console.log(this.id)
        console.log(this.classList)
        return {
            commands: ['close']
        }
    },
    methods: {
        close() {
            this.$bus.emit('close', this.id)
        }
    }
}
</script>

<style scoped>

.window {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
}

.decorations {
    background: #414141;
    padding: 5px 20px;
}

.application {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-grow: 1;
}

.tty1 {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
}

.desktop {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
}

</style>
