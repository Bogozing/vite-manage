<template>
  <div class="right">
    <Search></Search>
    <Bell class="tool-tip"></Bell>
    <FullScreen class="tool-tip"></FullScreen>
    <Setting class="tool-tip"></Setting>
    <Avatar></Avatar>
  </div>
</template>

<script lang="ts" name="ToolBarRight" setup>
import Avatar from "./components/Avatar.vue";
import FullScreen from "./components/FullScreen.vue";
import Search from "./components/Search.vue";
import Bell from "./components/Bell.vue";
import Setting from "./components/Setting.vue";
</script>

<style lang="scss" scoped>
.right {
  display: flex;
  align-items: center;
}
</style>
