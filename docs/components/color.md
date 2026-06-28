# Color

JustForFun-UI provides a complete color system to maintain design consistency.

## Basic Usage

::: demo color/basic :::

## Theme Colors

### Primary Colors

Primary colors are the core brand colors, used for important buttons, links, and highlighted elements.

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

### Secondary Colors

Secondary colors are used for charts, tags, and status indicators.

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

## Semantic Colors

### Status Colors

Used to represent different operation states.

| Color                                                                | Usage                              |
| -------------------------------------------------------------------- | ---------------------------------- |
| <span class="color-dot" style="background: #6BCB77;"></span> Success | Success state, completed operation |
| <span class="color-dot" style="background: #FFE66D;"></span> Warning | Warning state, needs attention     |
| <span class="color-dot" style="background: #FF6B6B;"></span> Error   | Error state, failed operation      |
| <span class="color-dot" style="background: #4D96FF;"></span> Info    | Information, description text      |

### Text Colors

Used for text at different hierarchy levels.

| Color                                         | Usage                        |
| --------------------------------------------- | ---------------------------- |
| <span style="color: #1A1A1A;">#1A1A1A</span> | Main title, important text   |
| <span style="color: #666666;">#666666</span> | Secondary text, body content |
| <span style="color: #999999;">#999999</span> | Auxiliary text, hints        |

## CSS Variables

You can customize theme colors using CSS variables:

```css
:root {
  --jff-color-primary: #845ec2;
  --jff-color-primary-light: #be93fd;
  --jff-color-primary-dark: #593796;
  --jff-color-success: #6bcb77;
  --jff-color-warning: #ffe66d;
  --jff-color-error: #ff6b6b;
  --jff-color-info: #4d96ff;
}
```

## Usage Example

Using theme colors in components:

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
