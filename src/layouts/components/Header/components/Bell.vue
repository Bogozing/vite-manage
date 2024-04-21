<template>
  <div @click="fullScreen">
    <SvgIcon name="bell" />
  </div>
</template>

<script lang="ts" setup name="Bell">
const fullScreen = () => {
  const full = document.fullscreenElement;
  if (!full) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
</script>
