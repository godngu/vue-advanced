<template>
    <div>
        <ul>
<!--            <item v-for="item in items" v-bind:key="item">{{ item }}</item>-->
            <item>아이템 1</item>
            <item>
                아이템 2 <button>click me</button>
            </item>
            <item>
                <div>아이템 3</div>
                <img src="./assets/endgame.png" alt="어벤져스 엔드게임">
            </item>
            <item>
                <div style="color: blue; font-size: 20px;">아이템4</div>
            </item>
        </ul>
    </div>
</template>

<script>
import Item from "@/Item";

export default {
    name: 'App',
    components: {Item},
    data() {
        return {
            items: ['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5']
        }
    }
}
</script>

<style>
</style>
