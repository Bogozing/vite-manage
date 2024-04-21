<template>
  <div @click="fullScreen">
    <SvgIcon name="setting" color="#333333" />
  </div>
</template>

<script lang="ts" setup name="Search">
const fullScreen = () => {
  const full = document.fullscreenElement;
  if (!full) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
</script>
