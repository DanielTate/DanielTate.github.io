<template>
    <div class="appearance">
        <section class="section">
            <p class="section-title">Window decorations</p>
            <div class="section-area">
                <Toggle
                    id="decorations"
                    :checked="$store.state.config.window.decorations.labels"
                    label="Enable window decoration labels"
                    :action="toggleWindowDecorationLabels"
                >
                </Toggle>
            </div>
        </section>
        <section class="section">
            <p class="section-title">Show tcon titles</p>
            <div class="section-area">
                <Toggle
                    id="titles"
                    :checked="$store.state.config.icon.titles"
                    label="Show icon titles"
                    :action="toggleIconTitles"
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
        },
        toggleIconTitles() {
            this.$store.commit('toggleIconTitles')
        }
    }
}
</script>
