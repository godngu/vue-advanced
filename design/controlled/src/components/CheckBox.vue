<template>
    <input type="checkbox" :value="modelValue" @click="toggleCheckBox">
</template>

<script>
export default {
    name: "CheckBox",
    props: ['modelValue'],
    emits: ['update:modelValue'],
    methods: {
        toggleCheckBox() {
            console.log('toggleCheckBox', this.modelValue);
            this.$emit('update:modelValue', !this.modelValue);
        }
    }
}
</script>

<style scoped>

</style>