<template>
  <div class="classic_container">
    <div class="classic_slider">
      <Logo></Logo>
    </div>
    <div class="classic_main">
      <div class="header">
        <ToolBarLeft class="bar-left"></ToolBarLeft>
        <ToolBarRight class="bar-eight"></ToolBarRight>
      </div>
      <section>
        <Main></Main>
      </section>
      <Footer></Footer>
    </div>
  </div>
</template>

<script lang="ts" name="classic" setup>
import Logo from "../components/Logo/index.vue";
import ToolBarLeft from "@/layouts/components/Header/ToolBarLeft.vue";
import ToolBarRight from "@/layouts/components/Header/ToolBarRight.vue";
import Footer from "@/layouts/components/Footer/index.vue";
import Main from "../components/Main/index.vue";
</script>

<style lang="scss">
@import "./index.scss";
</style>
