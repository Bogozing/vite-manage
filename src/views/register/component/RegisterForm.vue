<template>
  <el-form ref="loginFormRef" :model="loginForm" size="large" class="login-form">
    <div class="logo">
      <img src="@/assets/vue.svg" alt="easyclass" />
      <h4>{{ TITLE }}</h4>
    </div>
    <div class="heading">
      <h2>Welcome Back</h2>
      <h6>Not registred yet?</h6>
      <span class="toggle" @click="switchRegister">Sign up</span>
    </div>
    <div class="actual-form">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="用户名：admin / user">
          <template #prefix>
            <el-icon class="el-input__icon">
              <lock />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="密码：123456" show-password>
          <template #prefix>
            <el-icon class="el-input__icon">
              <lock />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-button type="primary" class="sign-btn">登录</el-button>
      <p class="text">
        Forgotten your password or you login datails?
        <a href="#">Get help</a> signing in
      </p>
    </div>
  </el-form>
</template>

<script lang="ts" setup name="RegisterForm">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { Login } from "@/api/user/type";
import { TITLE, REGISTER_URL } from "@/config";
import type { ElForm } from "element-plus";
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
console.log(loginFormRef);
const loginForm = reactive<Login.ReqLoginForm>({
  username: "",
  password: ""
});
const router = useRouter();
// 切换到注册页面
const switchRegister = () => {
  router.push(REGISTER_URL);
};
</script>

<style scoped lang="scss">
.login-form {
  max-width: 260px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: opacity 0.02s 0.4s;
}
.logo {
  display: flex;
  align-items: center;
  img {
    width: 27px;
    margin-right: 0.3rem;
  }
  h4 {
    font-size: 1.1rem;
    margin-top: -9px;
    letter-spacing: -0.5px;
    color: #151111;
  }
}
.heading {
  h2 {
    font-size: 2.1rem;
    font-weight: 600;
    color: #151111;
  }
  h6 {
    color: #bababa;
    font-weight: 400;
    font-size: 0.75rem;
    display: inline;
  }
  .toggle {
    color: #151111;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 500;
    transition: 0.3s;
  }
  .toggle:hover {
    color: #8371fd;
  }
}

.sign-btn {
  display: inline-block;
  width: 100%;
  height: 43px;
  background-color: #151111;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 0.8rem;
  font-size: 0.8rem;
  margin-bottom: 2rem;
  transition: 0.3s;
}
</style>
