<template>
    <WindowManager />
</template>

<script>
    import WindowManager from './components/WindowManager.vue'

    export default {
        components: { WindowManager },
    }
</script>

<style>
body {
    display: flex;
    min-height: 100vh;
    padding: 0;
    margin: 0;
}

#app {
    width: 100%;
    display: flex;
}
</style>