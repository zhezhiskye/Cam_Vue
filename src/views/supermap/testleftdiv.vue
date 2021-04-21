<template>
  <div>
    <el-drawer
      title="测试信息"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <img class="imgurl" :src="pot">
      <el-table
        :data="tabData"
        stripe
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="日期"
          width="auto"
        />
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        />
        <el-table-column
          prop="address"
          label="地址"
        />
      </el-table>

    </el-drawer>
  </div>
</template>
<script>
export default {
  props: ['pot', 'tabData', 'drawer'],
  data() {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      drawer: false,
      direction: 'rtl'
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
      this.$emit('tmpimshow', this.drawer)
    }
  }

}
</script>
<style>

.datadiv1 {
  visibility:hidden;
  width: 100%;
  height: 200px;
  background: #f2f2f2;
  display: flex;
  justify-content: left;
  align-items: center;
}
.imgurl {
  max-width: 100%;
  max-height: 100%;
}
.datadiv {
  visibility: hidden;
}
.el-row {
  margin-bottom: 0px;
}
.el-col {
  border-radius: 0px;
}
</style>
