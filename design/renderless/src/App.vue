<template>
    <div>
        <fetch-data url="https://jsonplaceholder.typicode.com/users/1" v-slot="{response, loading}">
            <div v-if="!loading">
                <p>name: {{ response.name }}</p>
                <p>email: {{ response.email }}</p>
            </div>
            <div v-if="loading">
                Loading...
            </div>
        </fetch-data>
    </div>
</template>

<script>
import FetchData from "@/components/FetchData";

export default {
  name: 'App',
  components: {
      FetchData
  }
}
</script>

<style>
</style>
