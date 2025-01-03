## 个人能力

前端基础：计算机网络、HTML、CSS、JS 、数据结构和算法（leedcode 100+题）
前端框架：熟练使用 react、vue
UI 组件库：熟练 antd-design、element-plus
前端工程化：熟悉使用 webpack、vite、了解 bable、eslint、prettier、husky 等工具
部署能力：了解前端的容器化部署技术，Docker，kubernetes 等，会部署 doceker 以及使用简单的 shell 脚本
微前端：了解 pnpm 、monorepo、无界。
跨端: 了解 uni-app、taro、flutter、react-native、electron、小程序、谷歌拓展
后端基础：熟练 node.js 了解 java、go、mysql、nginx、tomcat、微服务
网站运营：ddsister.com
github: denghongjian233

## 项目经验

### 智能助手谷歌插件

项目背景：基于谷歌浏览器开发的智能助手插件，用户可以在浏览器中快速访问和使用智能助手功能，包括消息查看、回复以及大模型对话等功能。

技术栈：react、webpack、typescript、chrome-extension
主要职责：

1. 负责插件主体架构设计和开发，包括 side-panel、content-script 和 background 等核心模块
2. 实现 oauth 登录认证和 token 自动刷新机制
3. 开发消息流式读取功能，优化用户体验
4. 进行插件性能优化，提升启动速度和内存使用效率

### 仿真计算平台

项目背景：基于 Web 的云计算仿真平台，支持多种仿真软件(Dymola、Simulink 等)的数据处理和参数优化。

技术栈：react、redux、webpack、antd
主要职责：

1. 负责数据管理和后处理模块的开发维护
2. 实现仿真结果可视化、产品对比和画布渲染等功能
3. 优化数据渲染性能，解决画布展示问题
4. 编写单元测试，负责 Docker 容器化部署

### 物资管理系统重构

项目背景：快递和仓储人员使用的物资管理系统，原系统维护困难，需要进行重构优化。

技术栈：react、webpack5、typescript、vant
主要职责：

1. 主导前端重构，梳理系统架构和业务逻辑
2. 搭建新系统基础架构，完善登录和数据管理
3. 负责代码审查和团队协作
4. 开发 mock 数据工具，提升开发效率

### 量化交易系统

项目背景：面向投资研究的量化交易平台，包含算法交易、资产管理、策略回测和因子分析等功能。

技术栈：vue3、element-plus、pinia
主要职责：

1. 负责项目从 0 到 1 的搭建和云端部署
2. 实现登录权限、数据可视化等核心功能
3. 进行性能优化，减少首页白屏时间
4. 封装通用组件，实现配置化开发
5. 使用 pinia 管理状态，优化代码架构

### 飞书智能助手谷歌插件

项目背景：飞书智能助手谷歌插件，用户在谷歌浏览器上使用飞书时，可以方便的查看飞书消息，并且可以方便的回复飞书消息，同时也可以方便的查看飞书群聊消息。同时飞书智能助手继承了大模型能力

技术栈：react、webpack、typescript、electron、chrome-extension
主要职责：主要 side-panel 主工程，content-script 插件内容脚本，background 谷歌插件后台开发，组件工程开发维护迭代

1. 项目从 0-1 搭建 组件库工程发版维护。
2. 对接集团 oauth 登陆，实现 token 无感刷新。
3. 实现对话消息流式读取。
4. 负责插件的性能优化，包括插件的启动速度、插件的内存占用等。

### Cosim 仿真平台

Cosim 是基于 WEB 技术开发的云计算平台，平台基于 FMI 标准协议，可以计算
Dymola、simulink、Amesim 等，将仿真工程师设置的一系列参数在 Dymola 环境下
进行数据处理，将数据处理结果对比从而进一步完善仿真参数。主要分为数据管理、参数设置、仿真、后处理四个模块。我负责数据管理和后处理模块的开发。

技术栈：react + redux + webpack + react-router + Ant Design
(1) 负责数据管理、后处理两大模块的开发和迭代，仿真结果曲线，产品对比，画布渲染，组件表单配置等
(2) 优化项目数据渲染缓慢，画布上数据展示拖动对其问题展示等问题
(3) 负责项目的上线和单元测试的编写，增强项目的可维护性
(4) 负责项目的部署和运维，使用 docker 容器化部署，使用 kubernetes 进行容器管理
(5) 帮组组内完成参数设置工况设置等部分业务需求

## e+重构

项目背景：快递小哥和仓管使用的领取公司物资的微服务（类似小程序），经手人数太多，页
面多达 79 个，缺少需求文档和项目文档，维护困难

技术栈：react，webpack5，vant，typescript，babel
负责模块：
（1）主导前端重构，梳理老系统架构和业务代码，分配任务和时间
（2）搭建新系统，完善基础的登录，axios 封装和数据管理
（3）和同事配合一起迁移老业务代码，探讨接口制定规范
（4）开发过程中负责 codereview 和合并同事的代码，解决各种 bug 和报错
（5）搭建前端数据 mock 工具,提高开发效率 30%,减少冗余代码

## 量化交易平台

项目背景：整合投研需求，开发迭代量化交易产品。量化交易系统分四个部分,分别是算法下
单，股票资产管理，策略回测，因子库；

技术栈：vue3，element-plus，axios，pinia
（1）负责整个项目从 0 到 1 的搭建，以及其部署到阿里云的打包。主导该项目的前端开发，主导 git 分支和 eslint 代码规范，把控研发质量。
（2）登录及路由权限，cas 对接，首页开发，使用 antv 展示地图上的大数据，基于公司规范完善接口封装。
（3）使用 gzip ,懒加载,防抖节流等技术进行性能优化，交互优化,首页白屏时间减少 50%,二次构建时间减少 55%。
（4）封装页签配合产品的多页面点击的需求，缓存查询数据,封装表格组件,方便配置化开发新页面。
（5）使用 pinia 统一数据的查询和缓存，架构上分 service 接口管理，model 函数管理，增强代码后续的可维护性

## 极强的抗压能力，可以接受全年无休
