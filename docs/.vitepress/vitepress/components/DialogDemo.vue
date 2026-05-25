<template>
  <div class="flex flex-col gap-6">
    <!-- 基础用法 -->
    <div class="flex gap-4 flex-wrap items-center">
      <span class="text-sm text-gray-500">基础用法：</span>
      <JffButton type="primary" @click="visible1 = true">打开对话框</JffButton>
      <JffDialog v-model:visible="visible1" title="提示">
        <p>这是一段信息</p>
      </JffDialog>
    </div>

    <!-- 自定义内容 -->
    <div class="flex gap-4 flex-wrap items-center">
      <span class="text-sm text-gray-500">嵌套表单：</span>
      <JffButton type="primary" @click="visible2 = true">打开嵌套表单的对话框</JffButton>
      <JffDialog v-model:visible="visible2" title="收货地址" width="500px">
        <JffForm :model="form" label-width="80px">
          <JffFormItem label="活动名称">
            <JffInput v-model="form.name" />
          </JffFormItem>
          <JffFormItem label="活动区域">
            <JffSelect v-model="form.region">
              <JffOption label="区域一" value="shanghai" />
              <JffOption label="区域二" value="beijing" />
            </JffSelect>
          </JffFormItem>
        </JffForm>
        <template #footer>
          <span class="dialog-footer">
            <JffButton @click="visible2 = false">取消</JffButton>
            <JffButton type="primary" @click="visible2 = false">确定</JffButton>
          </span>
        </template>
      </JffDialog>
    </div>

    <!-- 自定义头部 -->
    <div class="flex gap-4 flex-wrap items-center">
      <span class="text-sm text-gray-500">自定义头部：</span>
      <JffButton type="primary" @click="visible3 = true">自定义头部</JffButton>
      <JffDialog v-model:visible="visible3">
        <template #header>
          <div class="custom-header">
            <span class="i-ri-information-line text-xl" />
            <span>自定义标题</span>
          </div>
        </template>
        <p>这是自定义头部的对话框内容</p>
      </JffDialog>
    </div>

    <!-- 居中布局 -->
    <div class="flex gap-4 flex-wrap items-center">
      <span class="text-sm text-gray-500">居中布局：</span>
      <JffButton type="primary" @click="visible4 = true">居中对话框</JffButton>
      <JffDialog v-model:visible="visible4" title="提示" align-center width="400px">
        <div style="text-align: center;">
          <span class="i-ri-question-line text-4xl" style="color: #e6a23c;" />
          <p style="margin-top: 16px;">确定要删除这条记录吗？</p>
        </div>
        <template #footer>
          <div style="display: flex; justify-content: center; gap: 12px;">
            <JffButton @click="visible4 = false">取消</JffButton>
            <JffButton type="primary" @click="visible4 = false">确定</JffButton>
          </div>
        </template>
      </JffDialog>
    </div>

    <!-- 全屏对话框 -->
    <div class="flex gap-4 flex-wrap items-center">
      <span class="text-sm text-gray-500">全屏对话框：</span>
      <JffButton type="primary" @click="visible5 = true">全屏对话框</JffButton>
      <JffDialog v-model:visible="visible5" title="全屏对话框" fullscreen>
        <p>这是全屏对话框的内容</p>
        <template #footer>
          <JffButton @click="visible5 = false">关闭</JffButton>
        </template>
      </JffDialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
const visible5 = ref(false)

const form = reactive({
  name: '',
  region: ''
})
</script>

<style scoped>
.dialog-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.custom-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
}
</style>
