
<template>
    <div class="desktop">
        <div class="desktop-icons">
            <div v-for="icon in icons" class="icon" @click="launch(icon.application)">
                <img :src="icon.image" />
                <p>{{ icon.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Terminal from '@/components/Terminal.vue'

export default {
    components: { Terminal },
    data() {
        return {
            icons: [
                {
                    application: Terminal,
                    image: 'https://via.placeholder.com/128x128',
                    name: 'Terminal'
                }
            ]
        }
    },
    methods: {
        launch(application) {
            this.$bus.emit('launch', 'Terminal')
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
