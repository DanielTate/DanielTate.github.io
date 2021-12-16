
<template>
    <div class="desktop">
        <div class="desktop-icons">
            <div v-for="app in applications" class="icon" @click="() => launch(app)">
                <img :src="app.data().icon" />
                <p>{{ app.data().name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Terminal from '@/components/Terminal.vue'
import Settings from '@/components/Settings.vue'

export default {
    components: {
        Terminal,
        Settings
    },
    data() {
        return {
            applications: [
                Terminal,
                Settings
            ]
        }
    },
    methods: {
        launch(app) {
            this.$bus.emit('launch', app)
        }
    }
}
</script>

<style>

    .desktop {
        width: 100%;
        height: 100%;
        background-color: black;
    }

    .desktop-icons {
        display: flex;
        flex-wrap: wrap;
    }

    .icon {
        text-align: center;
        margin: 1em;
        cursor: pointer;
    }

    .icon img {
        width: 64px;
        border: 1px solid transparent;
    }

    .icon p {
        color: white;
        text-shadow: 0px 1px black;
        margin: .5em 0;
    }

    .icon:hover img {
        border: 1px solid blue;
    }

    .icon:hover p {
        text-shadow: 0px 1px blue;
    }

</style>
