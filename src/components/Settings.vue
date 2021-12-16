
<template>
    <div class="settings">
        <div class="sidebar">
            <div
                class="sidebar-section"
                v-for="(item, i) in settings"
                :key="i"
            >
                <p
                    class="sidebar-item-title"
                    @click="toggleSetting(item.component)"
                >
                {{ item.title }}
                </p>
            </div>
        </div>
        <div class="main">
        <component :is="activeSetting"></component>
        </div>
    </div>
</template>

<script>

import Appearance from '@/components/settings/Appearance.vue'
import Colors from '@/components/settings/Colors.vue'
import Wallpaper from '@/components/settings/Wallpaper.vue'

export default {
    components: {
        Appearance,
        Colors,
        Wallpaper,
    },
    data() {
        return {
            activeSetting: Appearance,
            name: 'Settings',
            icon: 'https://via.placeholder.com/128x128',
            settings: [
                {
                    title: 'Appearance',
                    component: Appearance
                },
                {
                    title: 'Color scheme',
                    component: Colors
                },
                {
                    title: 'Wallpaper',
                    component: Wallpaper
                }
            ]
        }
    },
    methods: {
        toggleSetting(setting) {
            this.activeSetting = setting
        }
    }
}
</script>

<style>

    .settings {
        width: 100%;
        display: grid;
        grid-template-columns: 200px 1fr;
        grid-template-areas:"sidebar main";
    }

    .sidebar {
        grid-area: sidebar;
        padding: var(--spacing);
    }

    .sidebar-section + .sidebar-section {
        margin-top: var(--spacing);
        padding-top: var(--spacing);
        border-top: 1px solid var(--color-dark);
    }

    .sidebar-item-title {
        margin: 0;
    }

    .main {
        grid-area: main;
        width: calc(100% - calc(var(--spacing) * 2));
        padding: var(--spacing);
    }

    .section + .section {
        margin-top: var(--spacing);
        padding-top: var(--spacing);
        border-top: 1px solid var(--color-dark);
    }

    .section-title {
        margin: 0;
    }

    .section-area {
        margin-top: var(--spacing);
        }

</style>
