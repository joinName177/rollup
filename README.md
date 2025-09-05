# My React Components

基于Antd5+TypeScript+React的组件库

## 安装

```bash
npm i @npmiboy/cool-ui-button
```

## 使用

```tsx
import React from 'react';
import { MyButton } from '@your-username/my-react-components';

function App() {
  return (
    <div>
      <MyButton onClick={() => console.log('clicked')}>
        点击我
      </MyButton>
    </div>
  );
}

export default App;
```

## 组件列表

- MyButton - 基于Antd Button的增强组件

## 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 类型检查
npm run type-check
```

## 许可证

MIT