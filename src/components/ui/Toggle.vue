<template>
    <div class="toggle-wrapper">
        <span>{{ label }}</span>
        <label class="switch">
            <input type="checkbox" :checked="checked" @change="action">
            <span class="switch-toggle"></span>
        </label>
    </div>
</template>

<script>

export default {
    props: {
        checked: Boolean,
        label: String,
        action: Function
    },
    data() {
        return {
        }
    },
    mounted() {
    }
}
</script>

<style>

.toggle-wrapper {
    display: flex;
    align-items: center;
}

.toggle-wrapper > span {
    margin-right: var(--spacing);
}

.switch {
    position: relative;
    display: flex;
    width: var(--switch-width);
    height: var(--switch-height);
}

/*
 *.switch input {
 *    opacity: 0;
 *    width: 0;
 *    height: 0;
 *}
 */

 .switch-toggle {
     position: absolute;
     cursor: pointer;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background-color: var(--switch-color-background);
     border-radius: var(--switch-radius);
     transition: background-color var(--transition-timing) var(--easing),
         transform var(--transition-timing) var(--easing);
 }

 .switch-toggle:before {
     position: absolute;
     content: "";
     width: calc(var(--switch-height) - var(--switch-gap));
     height: calc(var(--switch-height) - var(--switch-gap));
     left: calc(var(--switch-gap) / 2);
     bottom: calc(var(--switch-gap) / 2);
     border-radius: calc(var(--switch-height) - var(--switch-gap));
     background-color: white;
     transition: background-color var(--transition-timing) var(--easing),
         transform var(--transition-timing) var(--easing);
 }

 input:checked + .switch-toggle {
     background-color: var(--switch-color-active);
 }

 input:checked + .switch-toggle:before {
     transform: translateX(calc(var(--switch-height) - var(--switch-gap)));
 }

 input:focus + .switch-toggle {
     box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
 }


</style>
