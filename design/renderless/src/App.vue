<template>
    <div>
        <fetch-data url="https://jsonplaceholder.typicode.com/users/1"></fetch-data>
        <tempate slot-scope="{ response, loading }">
            <div v-if="!loading">
                {{ response }}
            </div>
            {{ response }}
            <div v-if="loading">
                Loading...
            </div>
        </tempate>
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
