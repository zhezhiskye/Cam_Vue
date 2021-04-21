<template>
  <el-form
    ref="form"
    :model="article"
    label-width="120px"
    @submit.native.prevent="onSubmit"
  >
    <el-form-item label="文章名称" class="paperNameInput1" required style="width: 100%; margin-top: 10px">
      <el-col :span="12">
        <el-input v-model="article.title" class="paperNameInput" />
      </el-col>
    </el-form-item>

    <el-form-item label="机构单位" required style="width: 100%; margin-top: 10px">
      <el-col :span="12">
        <el-input v-model="article.school" />
      </el-col>
    </el-form-item>

    <el-form-item label="期刊名称" required style="width: 100%; margin-top: 10px">
      <el-col :span="12">
        <el-input v-model="article.papername" />
      </el-col>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      article: {
        title: '',
        content: '',
        papertime: '',
        school: '',
        papername: ''
      }
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.$http.get(`/articles/${this.$route.params.id}`).then((res) => {
        this.article = res.data
      })
    },
    onSubmit() {
      this.$http
        .put(`/articles/${this.$route.params.id}`, this.article)
        .then(() => {
          this.$message({
            message: '文章修改成功',
            type: 'success'
          })

          this.$router.push('/articles/index')
        })
    }
  }
}
</script>
