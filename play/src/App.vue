<template>
  <div class="container">
    <h1>JustForFun UI 组件测试</h1>

    <!-- 基础组件 -->
    <section>
      <h2>基础组件</h2>

      <h3>Button 按钮</h3>
      <div class="demo-row">
        <JffButton>默认按钮</JffButton>
        <JffButton type="primary">主要按钮</JffButton>
        <JffButton type="success">成功按钮</JffButton>
        <JffButton type="warning">警告按钮</JffButton>
        <JffButton type="danger">危险按钮</JffButton>
        <JffButton type="info">信息按钮</JffButton>
      </div>

      <h3>Input 输入框</h3>
      <div class="demo-row">
        <JffInput v-model="inputValue" placeholder="请输入内容" />
        <JffInput v-model="inputValue" disabled placeholder="禁用状态" />
        <JffInput v-model="inputValue" type="password" placeholder="密码输入" />
      </div>

      <h3>Icon 图标</h3>
      <div class="demo-row">
        <JffIcon :size="24"><Search /></JffIcon>
        <JffIcon :size="24"><User /></JffIcon>
        <JffIcon :size="24"><Setting /></JffIcon>
        <JffIcon :size="24"><Delete /></JffIcon>
        <JffIcon :size="24"><Edit /></JffIcon>
        <JffIcon :size="24"><ArrowLeft /></JffIcon>
        <JffIcon :size="24"><ArrowRight /></JffIcon>
      </div>

      <h3>Badge 徽章</h3>
      <div class="demo-row">
        <JffBadge :value="12">
          <JffButton>消息</JffButton>
        </JffBadge>
        <JffBadge :value="100" type="danger">
          <JffButton>通知</JffButton>
        </JffBadge>
        <JffBadge dot>
          <JffButton>提示</JffButton>
        </JffBadge>
      </div>
    </section>

    <!-- 布局组件 -->
    <section>
      <h2>布局组件</h2>

      <h3>Container 布局容器</h3>
      <JffContainer class="demo-container" direction="ltr">
        <JffHeader class="demo-header">Header</JffHeader>
        <JffMain class="demo-main">
          <h4>水平对齐方式</h4>
          <JffRow justify="start" class="demo-row-box">
            <JffCol :span="4"><div class="grid-content">start</div></JffCol>
            <JffCol :span="4"><div class="grid-content">start</div></JffCol>
            <JffCol :span="4"><div class="grid-content">start</div></JffCol>
          </JffRow>
          <JffRow justify="center" class="demo-row-box">
            <JffCol :span="4"><div class="grid-content">center</div></JffCol>
            <JffCol :span="4"><div class="grid-content">center</div></JffCol>
            <JffCol :span="4"><div class="grid-content">center</div></JffCol>
          </JffRow>
          <JffRow justify="end" class="demo-row-box">
            <JffCol :span="4"><div class="grid-content">end</div></JffCol>
            <JffCol :span="4"><div class="grid-content">end</div></JffCol>
            <JffCol :span="4"><div class="grid-content">end</div></JffCol>
          </JffRow>
          <JffRow justify="space-between" class="demo-row-box">
            <JffCol :span="4"
              ><div class="grid-content">space-between</div></JffCol
            >
            <JffCol :span="4"
              ><div class="grid-content">space-between</div></JffCol
            >
            <JffCol :span="4"
              ><div class="grid-content">space-between</div></JffCol
            >
          </JffRow>
          <JffRow justify="space-around" class="demo-row-box">
            <JffCol :span="4"
              ><div class="grid-content">space-around</div></JffCol
            >
            <JffCol :span="4"
              ><div class="grid-content">space-around</div></JffCol
            >
            <JffCol :span="4"
              ><div class="grid-content">space-around</div></JffCol
            >
          </JffRow>

          <h4>垂直对齐方式</h4>
          <JffRow class="demo-row-box demo-row-tall" align="top">
            <JffCol :span="6"><div class="grid-content">top</div></JffCol>
            <JffCol :span="6"><div class="grid-content">top</div></JffCol>
            <JffCol :span="6"><div class="grid-content">top</div></JffCol>
          </JffRow>
          <JffRow class="demo-row-box demo-row-tall" align="middle">
            <JffCol :span="6"><div class="grid-content">middle</div></JffCol>
            <JffCol :span="6"><div class="grid-content">middle</div></JffCol>
            <JffCol :span="6"><div class="grid-content">middle</div></JffCol>
          </JffRow>
          <JffRow class="demo-row-box demo-row-tall" align="bottom">
            <JffCol :span="6"><div class="grid-content">bottom</div></JffCol>
            <JffCol :span="6"><div class="grid-content">bottom</div></JffCol>
            <JffCol :span="6"><div class="grid-content">bottom</div></JffCol>
          </JffRow>
        </JffMain>
        <JffFooter class="demo-footer">Footer</JffFooter>
      </JffContainer>
    </section>

    <!-- 表单组件 -->
    <section>
      <h2>表单组件</h2>

      <h3>Checkbox 复选框</h3>
      <div class="demo-row">
        <JffCheckbox v-model="checkboxValue1">选项1</JffCheckbox>
        <JffCheckbox v-model="checkboxValue2" disabled>禁用选项</JffCheckbox>
        <JffCheckbox v-model="checkboxValue3" indeterminate
          >半选状态</JffCheckbox
        >
      </div>

      <h3>CheckboxGroup 复选框组</h3>
      <JffCheckboxGroup v-model="checkboxGroupValue">
        <JffCheckbox label="选项A">选项A</JffCheckbox>
        <JffCheckbox label="选项B">选项B</JffCheckbox>
        <JffCheckbox label="选项C">选项C</JffCheckbox>
      </JffCheckboxGroup>

      <h3>Radio 单选框</h3>
      <div class="demo-row">
        <JffRadio v-model="radioValue1" label="1">选项1</JffRadio>
        <JffRadio v-model="radioValue1" label="2">选项2</JffRadio>
      </div>

      <h3>RadioGroup 单选框组</h3>
      <JffRadioGroup v-model="radioValue2">
        <JffRadio label="A">选项A</JffRadio>
        <JffRadio label="B">选项B</JffRadio>
        <JffRadio label="C">选项C</JffRadio>
      </JffRadioGroup>

      <h3>Select 选择器</h3>
      <div class="demo-row">
        <JffSelect v-model="selectValue" placeholder="请选择">
          <JffOption label="选项1" value="1" />
          <JffOption label="选项2" value="2" />
          <JffOption label="选项3" value="3" />
        </JffSelect>
      </div>

      <h3>Switch 开关</h3>
      <div class="demo-row">
        <JffSwitch v-model="switchValue" />
        <JffSwitch v-model="switchValue2" disabled />
        <JffSwitch
          v-model="switchValue3"
          active-text="开启"
          inactive-text="关闭"
        />
      </div>
    </section>

    <!-- 数据展示组件 -->
    <section>
      <h2>数据展示组件</h2>

      <h3>Avatar 头像</h3>
      <div class="demo-row">
        <JffAvatar size="large">JD</JffAvatar>
        <JffAvatar>默认</JffAvatar>
        <JffAvatar size="small">小</JffAvatar>
        <JffAvatar shape="circle">圆</JffAvatar>
      </div>

      <h3>Card 卡片</h3>
      <div class="demo-row card-row">
        <JffCard header="卡片标题" shadow="hover"> 卡片内容 </JffCard>
        <JffCard header="带边框" bordered> 带边框的卡片 </JffCard>
      </div>

      <h3>Tag 标签</h3>
      <div class="demo-row">
        <JffTag>默认标签</JffTag>
        <JffTag type="primary">主要标签</JffTag>
        <JffTag type="success">成功标签</JffTag>
        <JffTag type="warning">警告标签</JffTag>
        <JffTag type="danger">危险标签</JffTag>
        <JffTag closable>可关闭标签</JffTag>
      </div>
    </section>

    <!-- 导航组件 -->
    <section>
      <h2>导航组件</h2>

      <h3>Tabs 标签页</h3>
      <JffTabs v-model="tabsValue" closable @tab-remove="handleTabRemove">
        <JffTabPane label="Tab 1" name="1">Content of Tab 1</JffTabPane>
        <JffTabPane label="Tab 2" name="2">Content of Tab 2</JffTabPane>
        <JffTabPane label="Tab 3" name="3">Content of Tab 3</JffTabPane>
        <JffTabPane label="Tab 4" name="4">Content of Tab 4</JffTabPane>
        <JffTabPane label="Tab 5" name="5">Content of Tab 5</JffTabPane>
      </JffTabs>

      <h3>Dropdown 下拉菜单</h3>
      <div class="demo-row">
        <JffDropdown>
          <template #trigger>
            <JffButton>下拉菜单</JffButton>
          </template>
          <JffDropdownItem>选项1</JffDropdownItem>
          <JffDropdownItem>选项2</JffDropdownItem>
          <JffDropdownItem disabled>禁用选项</JffDropdownItem>
          <JffDropdownItem divided>分割线后选项</JffDropdownItem>
        </JffDropdown>
      </div>
    </section>

    <!-- 反馈组件 -->
    <section>
      <h2>反馈组件</h2>

      <h3>Alert 警告</h3>
      <JffAlert
        v-for="(alert, index) in alerts"
        :key="index"
        :title="alert.title"
        :type="alert.type"
        closable
        @close="handleAlertClose(index)"
      >
        {{ alert.message }}
      </JffAlert>

      <h3>Dialog 对话框</h3>
      <div class="demo-row">
        <JffButton type="primary" @click="showDialog = true"
          >打开对话框</JffButton
        >
        <JffDialog v-model="showDialog" title="对话框标题">
          这是对话框的内容。
          <template #footer>
            <JffButton @click="showDialog = false">取消</JffButton>
            <JffButton type="primary" @click="showDialog = false"
              >确认</JffButton
            >
          </template>
        </JffDialog>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffButton from '@justforfun-ui/components/button'
import JffInput from '@justforfun-ui/components/input'
import JffIcon from '@justforfun-ui/components/icon'
import { Search, User, Setting, Delete, Edit, ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
import JffBadge from '@justforfun-ui/components/badge'
import {
  JffContainer,
  JffHeader,
  JffMain,
  JffFooter,
  JffRow,
  JffCol,
} from '@justforfun-ui/components/layout'
import JffCheckbox, {
  JffCheckboxGroup,
} from '@justforfun-ui/components/checkbox'
import JffRadio, { JffRadioGroup } from '@justforfun-ui/components/radio'
import JffSelect, { JffOption } from '@justforfun-ui/components/select'
import JffSwitch from '@justforfun-ui/components/switch'
import JffAvatar from '@justforfun-ui/components/avatar'
import JffCard from '@justforfun-ui/components/card'
import JffTag from '@justforfun-ui/components/tag'
import JffTabs from '@justforfun-ui/components/tabs'
import JffTabPane from '@justforfun-ui/components/tabs'
import JffDropdown from '@justforfun-ui/components/dropdown'
import JffDropdownItem from '@justforfun-ui/components/dropdown'
import JffAlert from '@justforfun-ui/components/alert'
import JffDialog from '@justforfun-ui/components/dialog'

const inputValue = ref('')
const checkboxValue1 = ref(false)
const checkboxValue2 = ref(false)
const checkboxValue3 = ref(false)
const checkboxGroupValue = ref(['A'])
const radioValue1 = ref('1')
const radioValue2 = ref('A')
const selectValue = ref('')
const switchValue = ref(true)
const switchValue2 = ref(false)
const switchValue3 = ref(true)
const tabsValue = ref('1')
const tabsList = ref([
  { label: 'Tab 1', name: '1', content: 'Content of Tab 1' },
  { label: 'Tab 2', name: '2', content: 'Content of Tab 2' },
  { label: 'Tab 3', name: '3', content: 'Content of Tab 3' },
  { label: 'Tab 4', name: '4', content: 'Content of Tab 4' },
  { label: 'Tab 5', name: '5', content: 'Content of Tab 5' },
])

const handleTabRemove = (name: string) => {
  const index = tabsList.value.findIndex((tab) => tab.name === name)
  if (index !== -1) {
    tabsList.value.splice(index, 1)
    // Switch to another tab if the removed tab was active
    if (tabsValue.value === name && tabsList.value.length > 0) {
      tabsValue.value =
        tabsList.value[Math.min(index, tabsList.value.length - 1)].name
    }
  }
}

const alerts = ref([
  { title: 'Success', type: 'success', message: 'Operation successful!' },
  {
    title: 'Warning',
    type: 'warning',
    message: 'Please pay attention to this matter.',
  },
  {
    title: 'Error',
    type: 'danger',
    message: 'Operation failed, please try again.',
  },
  { title: 'Info', type: 'info', message: 'This is an information message.' },
])

const handleAlertClose = (index: number) => {
  console.log(`Alert ${index} closed`)
  alerts.value.splice(index, 1)
}

const showDialog = ref(false)
</script>

<style scoped>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
}

h2 {
  margin-bottom: 20px;
  color: #333;
  border-bottom: 2px solid #845ec2;
  padding-bottom: 10px;
}

h3 {
  margin: 16px 0;
  color: #666;
}

.demo-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 16px;
}

.card-row {
  justify-content: flex-start;
}

.card-row :deep(.jff-card) {
  width: 300px;
}

.demo-container {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  overflow: hidden;
}

.demo-header,
.demo-footer {
  text-align: center;
  background-color: #f5f7fa;
}

.demo-main {
  padding: 20px;
}

.demo-main h4 {
  margin: 16px 0 8px;
  color: #666;
  font-size: 14px;
}

.demo-row-box {
  margin-bottom: 12px;
  padding: 10px;
  background-color: #f5f7fa;
  border-radius: 4px;
  border: 1px dashed #dcdfe6;
}

.demo-row-tall {
  min-height: 80px;
}

.grid-content {
  padding: 10px;
  background-color: #409eff;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  font-size: 12px;
}
</style>
