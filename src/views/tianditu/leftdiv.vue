<template>
  <div>
    <el-row>
      <div class="datadiv1"><img class="imgurl" :src="pot"></div>
    </el-row>
    <el-row>
      <div class="datadiv"> <el-table
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
      </el-table></div>
    </el-row>
  </div>
</template>
<script>
export default {
  props: ['pot', 'tabData']

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
</style>
