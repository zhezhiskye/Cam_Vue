<template>
  <el-table
    :data="articles"
    border
    style="width: 100%"
  >
    <el-table-column
      fixed
      prop="papertime"
      label="发表时间"
    />
    <el-table-column
      prop="title"
      label="标题"
    />
    <el-table-column
      prop="school"
      label="机构单位"
    />
    <el-table-column
      prop="papername"
      label="期刊名称"
    />
    <el-table-column
      fixed="right"
      label="操作"
    >
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" circle @click="edit(scope.row._id)" />
        <el-button type="danger" icon="el-icon-delete" circle @click="del(scope.row._id)" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.$http.get('/articles').then((res) => {
        this.articles = res.data
      })
    },

    edit(id) {
      this.$router.push(`/articles/edit/${id}`)
    },

    del(id) {
      this.$http.delete(`/articles/${id}`).then(() => {
        this.$message({
          message: '文章删除成功',
          type: 'success'
        })

        this.fetch()
      })
    }
  }
}
</script>
