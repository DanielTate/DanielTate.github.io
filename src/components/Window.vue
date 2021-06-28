<template>
<div class="window">
    <div class="decorations">
        <button>close</button>
    </div>
    <div class="application">
        <slot />
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            commands: ['close']
        } 
    },
}
</script>

<style scoped>
.window {
    display: flex;
    flex-direction: column;
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
    padding: 20px;
    flex-grow: 1;
}
</style>