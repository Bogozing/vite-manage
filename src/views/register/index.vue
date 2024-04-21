<template>
  <div class="container">
    <div class="box">
      <div class="inner-box">
        <div class="forms-wrap">
          <RegisterForm></RegisterForm>
        </div>
        <div class="carousel">图片</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="Register">
import RegisterForm from "./component/RegisterForm.vue";
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  background-color: #ff8c6b;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  position: relative;
  width: 100%;
  max-width: 1020px;
  height: 640px;
  background-color: #fff;
  border-radius: 3.3rem;
  box-shadow: 0 60px 40px -30px rgba(0, 0, 0, 0.27);
  .inner-box {
    position: absolute;
    width: calc(100% - 4.1rem);
    height: calc(100% - 4.1rem);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: aliceblue;
    .forms-wrap {
      position: absolute;
      height: 100%;
      width: 45%;
      top: 0;
      left: 0;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      transition: 0.8s ease-in-out;
    }
    .carousel {
      position: revert;
      height: auto;
      width: 100%;
      padding: 3rem 2rem;
      display: flex;
      position: absolute;
      height: 100%;
      width: 55%;
      left: 45%;
      top: 0;
      background-color: #ffe0d2;
      border-radius: 2rem;
      display: grid;
      grid-template-rows: auto 1fr;
      padding-bottom: 2rem;
      overflow: hidden;
      transition: 0.8s ease-in-out;
    }
  }
}

@media (max-width: 850px) {
  .box {
    height: auto;
    max-width: 550px;
    overflow: hidden;
    .inner-box {
      position: static;
      transform: none;
      width: revert;
      height: revert;
      padding: 2rem;
      background-color: aliceblue;
    }
  }
}

@media (max-width: 530px) {
  .box {
    border-radius: 2rem;
    .inner-box {
      padding: 1rem;
    }
  }
}
</style>
