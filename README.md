# Railgun Media Encoder

![](doc/imgs/app.png)

[中文文档](doc/readme_zh.md)

[![Azure DevOps builds](https://img.shields.io/azure-devops/build/sakuratrak/9de96728-a083-4b00-9853-dda6cd7d8f3c/3.svg?logo=azure-devops&style=flat-square)](https://sakuratrak.visualstudio.com/RailgunMediaEncoder/_build?definitionId=3)

Railgun Media Encoder is a cross-platform Media Encoder GUI built with Angular and Electron.

## <del>Releases</del>

Railgun Media Encoder is still under development! Star the project or Watch Releases to be notified when the BETA Release is avaliable.

PRs welcome ^_^

## Developing

### Prepare and build

#### Tools required:

* git
* Node.js and npm
* Visual Studio Code(Strongly suggested) or other code editor

1. Get a copy of RailgunMediaEncoder. (Use git clone)
2. run command below to install required package  
`npm install`
3. run command below to run the project  
`npm start`

### Publish

 Run the following command to publish as Electron project.
 ```sh
 npm run clean # Clean the existing debug build
 npm run build-prod # Build the project in production level
 npm run publish # Build Electron Installer with electron-builder
 ```

### Lint

Run the following command run lint.
```sh
npm run lint
```

## About
![](doc/imgs/studio.png)
Build with ❤ By EdgeNeko in SakuraTrak Studio
