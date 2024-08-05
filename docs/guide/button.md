---
title: 按钮
nav:
  title: 指南
  path: /guide/button
---

# 按钮

`Button` 组件是一个可定制的按钮组件，可用于应用程序的各个部分。

## 属性

| 名称             | 类型                      | 默认值        | 描述                                          |
| ---------------- | ------------------------- | ------------- | --------------------------------------------- |
| `href`           | `string`                  | -             | 如果提供，按钮将作为链接渲染。                  |
| `text`           | `string`                  | -             | 按钮上显示的文本。                             |
| `icon`           | `React.ReactNode`         | -             | 可选的，与文本一起显示的图标。                  |
| `onClick`        | `() => void`              | -             | 点击处理函数。                                 |
| `loading`        | `boolean`                 | `false`       | 如果为 `true`，显示加载状态。                   |
| `className`      | `string`                  | -             | 用于样式的额外类名。                            |
| `border`         | `boolean`                 | `false`       | 是否显示边框。                                  |
| `borderColor`    | `string`                  | -             | 如果显示，边框的颜色。                          |
| `textColor`      | `string`                  | -             | 文字颜色。                                      |
| `backgroundColor`| `string`                  | 'bg-primary'  | 按钮的背景颜色。                                |
| `borderRadius`   | `string`                  | -             | 按钮边角的圆角大小。                            |

## 使用方法

以下是如何使用 `Button` 组件的示例：

```tsx
import React from 'react';
import Button from '@/components/Button';
const Example: React.FC = () => {
    return (
      <div>
              <span className="bg-red">231312</span>
   <Button text="Button" backgroundColor="bg-primary" border borderColor="border-primary" />
        </div>

    )
}

export default Example;
