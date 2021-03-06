# Railgun Media Encoder

![](imgs/app.png)

[English](../README.md)

[![Azure DevOps builds](https://img.shields.io/azure-devops/build/sakuratrak/9de96728-a083-4b00-9853-dda6cd7d8f3c/3.svg?logo=azure-devops&style=flat-square)](https://sakuratrak.visualstudio.com/RailgunMediaEncoder/_build?definitionId=3)

> 你指尖跃动的电光,是我此生永恒不变的信仰

Railgun Media Encoder 是一个跨平台的视频编码工具,提供视频编码、压制、抽取等多个功能。 使用Angular和Electron构建。

## 发布

Railgun Media Encoder 还在开发中。。。 您可以Star本项目或者在Watch中选择`Release Only`来在应用发布首个beta版本时收到通知.

您也可以参与到本项目的开发中 PRs are welcomed ^_^

## 开发
#### 所需工具: 
* git
* Node.js 和 npm
* Visual Studio Code(强烈建议) 或其它代码编辑器

1. 首先将本仓库克隆到您的开发环境中.  
2. 运行以下命令来安装所有必须的依赖项  
`npm install`
3. 运行以下命令即可构建并运行项目  
`npm start`

### 发布

 运行以下命令来发布Electron项目
 ```sh
 npm run clean # 清除debug编译文件
 npm run build-prod # 以生产级别生成项目
 npm run publish # 用electron-builder生成electron安装包
 ```

### 代码分析

运行以下命令
```sh
npm run lint
```

## 关于
![](imgs/studio.png)

作者: EdgeNeko
