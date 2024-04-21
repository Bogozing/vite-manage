import { defineConfig, loadEnv } from "vite";
import path from "path";
import { createVitePlugins } from "./build/plugins";

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // 获取`.env`环境配置文件
  const root = process.cwd();
  const env = loadEnv(mode, root);
  console.log(env.VITE_APP_SERVE);
  return {
    plugins: createVitePlugins(),
    resolve: {
      alias: {
        "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
      }
    },
    //代理跨域
    server: {
      port: env.VITE_APP_PORT,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          //获取数据的服务器地址设置
          target: env.VITE_APP_SERVE,
          //需要代理跨域
          changeOrigin: true,
          //路径重写
          rewrite: path => path.replace(/^\/api/, "")
        }
      }
    }
  };
});
