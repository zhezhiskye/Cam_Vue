<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
        <el-card>
          <h4>{{ item.title1 }}</h4>
          <h4>{{ item.title2 }}</h4>
          <h4>{{ item.title3 }}</h4>

          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          // timestamp: '2019/4/20',
          title1: 'SuperMap比赛武汉区二等奖---全国组二等奖',
        },
        {
          title1: '发明专利：基于经纬度识别的纸质地图快速矢量化',
          content: '发明专利：结合局部网格约束和几何约束下的直线快速匹配'
        },
        {
          title1: '2018年一等新生奖学金',
          title2: '2019年二等学业奖学金',
          title3: '2020年二等学业奖学金',
        },
        {
          title: '--------',
          content: '-------'
        }
      ]
    }
  }
}
</script>
