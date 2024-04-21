<template>
  <div class="logo">
    <img src="@/assets/logo.svg" alt="" />
    <p>{{ TITLE }}</p>
  </div>
</template>

<script lang="ts" setup name="Logo">
//引入设置标题与logo这配置文件
import { TITLE } from "@/config";
</script>

<style lang="scss">
@import "./index.scss";
</style>
