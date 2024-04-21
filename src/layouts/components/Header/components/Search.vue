<template>
  <div class="search-box">
    <div class="tool-tip btn" @click="handleClick" ref="search">
      <SvgIcon name="search" />
    </div>
    <input type="text" name="" class="text" ref="text" placeholder="站内搜索" @blur="handleBlur" />
  </div>
</template>

<script lang="ts" setup name="Search">
import { ref } from "vue";
const text = ref(null);
const handleClick = () => {
  console.log(text.value.style);
  text.value.style.width = "200px";
  text.value.style.background = "#f5f6f7";
  text.value.style.borderWidth = "1px";
  text.value.focus();
};
const handleBlur = () => {
  text.value.style.width = "0px";
  text.value.style.background = "none";
  text.value.style.borderWidth = "0px";
};
</script>

<style scoped>
.search-box {
  display: flex;
  align-items: center;
}
/* 文本输入框样式 */
.text {
  border: 0;
  outline: none;
  height: 32px;
  padding: 0px;
  border-radius: 4px;
  border: 0px solid #e8e8ed;
  font-size: 16px;
  line-height: 40px;
  width: 0;
  background: none;
  transition: all 0.3s;
}
/* 文本输入框提示语 */
.text::placeholder {
  color: #001529;
  opacity: 0.5;
}
</style>
