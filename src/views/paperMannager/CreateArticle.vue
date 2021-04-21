<template>
  <el-form
    ref="form"
    :model="article"
    label-width="120px"
    @submit.native.prevent="onSubmit"
  >
    <el-form-item label="文章名称" class="paperNameInput1" required style="width: 100%; margin-top: 10px">
      <el-col :span="12">
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false"
        >
          <i slot="default" class="el-icon-plus" />
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            >
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in" />
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download" />
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete" />
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-col>
    </el-form-item>
    <el-form-item label="发表时间" required>
      <el-col :span="12">
        <el-form-item prop="papertime">
          <el-date-picker
            v-model="article.papertime"
            type="date"
            placeholder="选择日期时间"
          />
        </el-form-item>
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
      <el-button type="primary" native-type="submit">创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
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
  methods: {
    onSubmit() {
      this.$http.post('articles', this.article).then(() => {
        this.$message({
          message: '文章创建成功',
          type: 'success'
        })

        this.$router.push('/articles/index')
      })
    }
  }
}
</script>
<style scoped>
/* .paperNameInput1{
  margin-top: 50px;
  width: 500px;
} */

</style>
