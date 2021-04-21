<template>
  <el-form
    ref="form"
    :model="article"
    label-width="120px"
    @submit.native.prevent="onSubmit"
  >
    <el-form-item label="文章标题">
      <el-input v-model="article.title" />
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input v-model="article.content" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
    </el-form-item>
  </el-form>
</template>
