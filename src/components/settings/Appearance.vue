<template>
    <div class="appearance">
        <section class="section">
            <p class="section-title">Window decorations</p>
            <div class="section-area">
                <Toggle
                    id="test"
                    :checked="$store.state.config.window.decorations.labels"
                    label="Enable window decoration labels"
                    :action="toggleWindowDecorationLabels"
                >
                </Toggle>
            </div>
        </section>
    </div>
</template>

<script>
import Toggle from '@/components/ui/Toggle.vue'
export default {
    components: {
        Toggle
    },
    data() {
        return {}
    },
    methods: {
        toggleWindowDecorationLabels() {
            this.$store.commit('toggleWindowDecorationLabels')
        }
    }
}
</script>
