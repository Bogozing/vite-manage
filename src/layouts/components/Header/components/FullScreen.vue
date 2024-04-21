<template>
  <div @click="fullScreen">
    <SvgIcon :name="name" />
  </div>
</template>

<script lang="ts" setup name="FullScreen">
import { ref } from "vue";
const name = ref("fullscreen-expand");
const fullScreen = () => {
  const full = document.fullscreenElement;
  if (!full) {
    document.documentElement.requestFullscreen();
    name.value = "fullscreen-exit";
  } else {
    document.exitFullscreen();
    name.value = "fullscreen-expand";
  }
};
</script>
