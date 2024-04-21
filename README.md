# vite-manage

## 项目介绍

## 快速启动

```
# 克隆项目
git clone https://github.com/zhguzibo/vue-manage.git
or
git clone git@github.com:zhguzibo/vue-manage.git


# 进入项目目录
cd vue-manage

# 安装依赖 （推荐pnpm）
npm install

# 启动服务
npm run dev

```

## Git 提交

```
 git add *  // add everything

 git status  // check status

 git cz  // commit change

 git push // push stage commit

// 如果cz 命令无法找到，全局安全commitize
 npm install -g commitizen
```

也可执行

```node
npm run commit
```

Select the type of change that you're committing:(选择你要提交的类型 :)

```
feat(特性)   🚀  新增功能
fix(修复)   🧩  修复缺陷
docs(文档)   📚  文档变更
style(格式)   🎨  代码格式（不影响功能，例如空格、分号等格式修正）
refactor(重构)   ♻️  代码重构（不包括 bug 修复、功能新增）
perf(性能)    ⚡️  性能优化
test(测试)   ✅  添加疏漏测试或已有测试改动
build(构建)   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
ci(集成)   🎡  修改 CI 配置、脚本
chore(回退)   ⏪️  回滚 commit
revert(其他)   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
wip(开发)   🕔  正在开发中
workflow(工作流)   📋  工作流程改进
types(类型)   🔰  类型定义文件修改
```

Denote the SCOPE of this change (optional):(选择一个提交范围（可选）:)

Denote the SCOPE of this change:(请输入自定义的提交范围 :)

Write a SHORT, IMPERATIVE tense description of the change:(填写简短精炼的变更描述 :)

Provide a LONGER description of the change (optional). Use "|" to break new line:(填写更加详细的变更描述（可选）。使用 "|" 换行 :)

List any BREAKING CHANGES (optional). Use "|" to break new line:(列举非兼容性重大的变更（可选）。使用 "|" 换行 :)

Select the ISSUES type of changeList by this change (optional):(选择关联 issue 前缀（可选）:)

Input ISSUES prefix:(输入自定义 issue 前缀 :)

List any ISSUES by this change. E.g.: #31, #34:(列举关联 issue (可选) 例如: #31, #I3244 :)

Are you sure you want to proceed with the commit above?(是否提交或修改 commit ?)
