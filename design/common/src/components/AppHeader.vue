<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    name: "AppHeader",
    props: {
        title: String,
    }
}
</script>

<style scoped>

</style>