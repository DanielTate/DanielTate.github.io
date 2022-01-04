<template>
<div :class="`window ${classList}`" >
    <div v-if="decorations" class="decorations">
        <button class="action" @click="close" :style="closeStyle">
            <i class="gg-close"></i>
            <label v-if="$store.state.config.window.decorations.labels">close</label>
        </button>
    </div>
    <div class="application">
        <slot />
    </div>
</div>
</template>

<script>
export default {
    props: {
        id: String, // Need to make sure this is a unique string
        classList: String,
        decorations: Boolean
    },
    data() {
        return {
            commands: ['close'],
        }
    },
    computed: {
        closeStyle() {
            const { style } = this.$store.state.config.window.decorations.close
            const { background, color } = style
            return `
                background: ${background};
                color: ${color};
            `
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
    height: 100%;
}

.decorations {
    background: #414141;
    padding: calc(var(--spacing) / 4) var(--spacing);
}

.application {
    display: flex;
    width: 100%;
    height: 100%;
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

.action {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    padding: calc(var(--spacing) / 4) calc(var(--spacing) / 4);
    margin: 0;
}

.action label {
    pointer-events: none;
    line-height: 0;
    margin-left: calc(var(--spacing) / 4);
}

.gg-close {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 40px;
}

.gg-close::after,
.gg-close::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 16px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 1px;
}

.gg-close::after {
    transform: rotate(-45deg)
}

</style>
