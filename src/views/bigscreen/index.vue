<template>
  <el-container>

    <el-main :style="logo">
      <el-row>
        <el-col :span="24"><dv-border-box-11 title="智慧大屏" class="Logoborder"><dv-decoration-5 class="dec" />"</dv-border-box-11></el-col>
      </el-row>
      <el-row>
        <el-col :span="7"><dv-border-box-1><ve-gauge :data="chartData" :settings="chartSettings" /></dv-border-box-1></el-col>
        <el-col :span="10"><dv-border-box-1 class="mapBorder">
          测试
        </dv-border-box-1></el-col>
        <el-col :span="7"><dv-border-box-1>dv-border-box-1</dv-border-box-1></el-col>
      </el-row>

    </el-main>
  </el-container>
</template>

<script>

export default {
  data() {
    this.chartSettings = {
      labelMap: {
        'speed': '内存'
      },
      dataName: {
        'speed': '内存'
      }
    }
    return {
      chartData: {
        columns: ['type', 'value'],
        rows: [
          { type: 'speed', value: 60 }
        ]
      }
    }
  }
}
</script>

<style>
body{
    margin-top: 0px;
    margin-left: 2px;
    margin-right: 10px;
  }

  .el-main {
    background-color: #5566c4e0;
    color: #333;
    text-align: center;
    line-height: 160px;

    background: url("../../assets/logo/index_bg.png");
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 98%;

  }
    .el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .Logoborder{
      height:100px;
      margin-top: 1px;
      width: 100%;
  }
  .dv-decoration-5{
  width:300px;
  height:40px;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  }

.ve-map{

}
</style>
