# TypeScript library starter

## 소개

- TypeScript를 사용하여 라이브러리를 만들기 위한 보일러플레이트입니다.
- Vite를 사용하여 빌드하며, Prettier, ESLint, Jest, GitHub Action 설정이 내장되어 있습니다.
- [Semantic Release](https://semantic-release.gitbook.io/semantic-release/)와 [Conventional Commits](https://www.conventionalcommits.org/)을 사용하여 버저닝, 릴리즈 노트, 체인지 로그를 생성하며 NPM 레지스트리에 배포합니다.

### 활용 방법

- [Creating a template repository](https://docs.github.com/ko/repositories/creating-and-managing-repositories/creating-a-template-repository)
- [About Forks](https://docs.github.com/ko/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)

## 설치 방법

공개된 패키지인 경우 일반적인 방법으로 다운로드 받을 수 있습니다.

```bash
# 설명을 위한 예제 패키지입니다.
npm i @divlook/library-starter-example
yarn @divlook/library-starter-example
pnpm i @divlook/library-starter-example
```

비공개 패키지이거나 레지스트리가 다른 경우 레지스트리 설정과 레지스트리의 엑세스토큰이 필요합니다.
예를들어 @divlook scope의 패키지를 GitHub에서 다운받고 싶다면 아래 명령어를 입력하면 됩니다.

```bash
npm login --scope=@divlook --registry=https://npm.pkg.github.com
```

## 사용 방법

- 모듈 방식

    ```ts
    // ES 모듈
    import { HelloWorld } from '@divlook/library-starter-example'

    // CommonJs
    const { HelloWorld } = require('@divlook/library-starter-example')
    ```

- 인라인 스크립트 방식

    ```html
    <!-- ES 모듈 -->
    <script type="module">
        // 지원되지 않는 브라우저가 있을 수 있습니다.
        import { HelloWorld } from './dist/lib.mjs'

        // 이렇게 사용할 수도 있습니다.
        import './dist/lib.umd.js'
        LibraryStarterExample.HelloWorld()
    </script>

    <!-- UMD -->
    <script src="./dist/lib.umd.js"></script>
    <script>
        LibraryStarterExample.HelloWorld()
    </script>
    ```

## 환경 설정

### 개발 환경

```bash
# https://github.com/nvm-sh/nvm
nvm use
npm i -g pnpm
pnpm i
```

### 패키지 설정

scope 관련 설명은 [여기](https://docs.npmjs.com/cli/v9/using-npm/scope)를 참고해주세요.

```jsonc
// package.json
{
    "name": "@divlook/library-starter-example", // 패키지명을 설정합니다. script tag로 로드하는 경우 window.LibraryStarterExample으로 선언됩니다.
    "version": "0.0.0", // 시작 버전을 입력해주세요. Fork를 사용한 경우 git tag가 존재할 수 있습니다. git tag도 모두 삭제해주세요.
    "description": "이 라이브러리의 설명을 입력해주세요.",
    "repository": {
        "type": "git",
        "url": "https://github.com/divlook/ts-library-starter.git" // git 주소를 입력해주세요.
    },
    "license": "MIT", // 사용할 라이센스를 입력해주세요. 없으면 삭제해주세요.
}
```

### 브라우저 호환성

브라우저 호환성은 [이 문서](https://vitejs.dev/guide/build.html#browser-compatibility)를 참고해주세요. 레거시 브라우저는 [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) 플러그인을 사용하여 설정할 수 있습니다.

```ts
// vite.config.js
import legacy from '@vitejs/plugin-legacy'

export default {
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
}
```

## 개발 및 배포

### 빌드

dist 디렉토리에 컴파일된 파일이 생성됩니다.

```bash
pnpm build
```

### 테스트

`**/*.test.ts` 패턴의 파일을 찾아 테스트를 실행합니다.

```bash
pnpm test
pnpm test -- --watch
```

### 릴리즈 생성

develop branch에 커밋이 푸시되면 릴리즈, 체인지로그, 버전태그가 생성되고 package.json의 version이 업데이트됩니다.
이 설정을 변경하고 싶은 경우 아래 파일을 수정해주세요.

- .github/workflows/auto-release.yml
- conventionalcommits.config.js

### 배포

릴리즈가 생성되면 배포가 자동으로 실행됩니다. 패키지를 비공개로 관리하고 싶은 경우 아래와 같이 수정해주세요.

```diff
# .github/workflows/npm-publish.yml
- npm publish --access public
+ npm publish --access restricted
```
