<template>
  <div class="avatar">
    <img src="@/assets/images/avatar.gif" alt="avatar" @click="openMenu" />
    <div class="drop-down" v-if="isShow">
      <div class="menu-bar">个人中心</div>
      <div class="menu-bar">退出登录</div>
    </div>
  </div>
</template>

<script lang="ts" name="Avatar" setup>
import { ref } from "vue";
const isShow = ref(false);
const openMenu = () => {
  isShow.value = !isShow.value;
};
</script>

<style lang="scss">
.avatar {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
}
.drop-down {
  box-shadow: 0 0 24px rgba(81, 87, 103, 0.16);
  background: #fff;
  border: 1px solid #e4e6eb;
  border-radius: 4px;
  padding: 10px 0;
  position: absolute;
  z-index: 999;
  right: 0px;
  top: 48px;
  box-sizing: border-box;
  cursor: auto;
  .menu-bar {
    width: 100px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    &:hover {
      background-color: #e4e6eb;
    }
  }
}
</style>
