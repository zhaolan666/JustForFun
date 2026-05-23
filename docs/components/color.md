# Color 颜色

JustForFun-UI 提供了一套完整的颜色系统，用于保持设计的一致性。

## 主题色

### 主色调

主色调是品牌的核心颜色，用于重要的按钮、链接和高亮元素。

<div class="color-palette">
  <div class="color-item">
    <div class="color-block" style="background: #845EC2;"></div>
    <div class="color-info">
      <span class="color-name">Primary</span>
      <span class="color-value">#845EC2</span>
    </div>
  </div>
  <div class="color-item">
    <div class="color-block" style="background: #BE93FD;"></div>
    <div class="color-info">
      <span class="color-name">Light</span>
      <span class="color-value">#BE93FD</span>
    </div>
  </div>
  <div class="color-item">
    <div class="color-block" style="background: #593796;"></div>
    <div class="color-info">
      <span class="color-name">Dark</span>
      <span class="color-value">#593796</span>
    </div>
  </div>
</div>

### 辅助色

辅助色用于图表、标签和状态指示等场景。

<div class="color-palette">
  <div class="color-item">
    <div class="color-block" style="background: #4FFBDF;"></div>
    <div class="color-info">
      <span class="color-name">Teal</span>
      <span class="color-value">#4FFBDF</span>
    </div>
  </div>
  <div class="color-item">
    <div class="color-block" style="background: #FF6B6B;"></div>
    <div class="color-info">
      <span class="color-name">Red</span>
      <span class="color-value">#FF6B6B</span>
    </div>
  </div>
  <div class="color-item">
    <div class="color-block" style="background: #FFE66D;"></div>
    <div class="color-info">
      <span class="color-name">Yellow</span>
      <span class="color-value">#FFE66D</span>
    </div>
  </div>
  <div class="color-item">
    <div class="color-block" style="background: #6BCB77;"></div>
    <div class="color-info">
      <span class="color-name">Green</span>
      <span class="color-value">#6BCB77</span>
    </div>
  </div>
</div>

## 语义化颜色

### 状态色

用于表示不同的操作状态。

| 颜色 | 用途 |
|------|------|
| <span class="color-dot" style="background: #6BCB77;"></span> Success | 成功状态、完成操作 |
| <span class="color-dot" style="background: #FFE66D;"></span> Warning | 警告状态、需要注意 |
| <span class="color-dot" style="background: #FF6B6B;"></span> Error | 错误状态、失败操作 |
| <span class="color-dot" style="background: #4D96FF;"></span> Info | 信息提示、说明文字 |

### 文字颜色

用于不同层级的文字。

| 颜色 | 用途 |
|------|------|
| <span style="color: #1A1A1A;">#1A1A1A</span> | 主标题、重要文字 |
| <span style="color: #666666;">#666666</span> | 次要文字、正文 |
| <span style="color: #999999;">#999999</span> | 辅助文字、提示 |

## CSS 变量

可以通过 CSS 变量自定义主题颜色：

```css
:root {
  --jff-color-primary: #845EC2;
  --jff-color-primary-light: #BE93FD;
  --jff-color-primary-dark: #593796;
  --jff-color-success: #6BCB77;
  --jff-color-warning: #FFE66D;
  --jff-color-error: #FF6B6B;
  --jff-color-info: #4D96FF;
}
```

## 使用示例

在组件中使用主题色：

```vue
<template>
  <div class="custom-component">
    <JffButton color="primary">Primary Button</JffButton>
    <JffButton color="success">Success Button</JffButton>
    <JffButton color="warning">Warning Button</JffButton>
    <JffButton color="error">Error Button</JffButton>
  </div>
</template>
```

<style>
.color-palette {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.color-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.color-block {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.color-info {
  display: flex;
  flex-direction: column;
  font-size: 12px;
}

.color-name {
  font-weight: 600;
  color: #333;
}

.color-value {
  color: #999;
}

.color-dot {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 8px;
  vertical-align: middle;
}
</style>
