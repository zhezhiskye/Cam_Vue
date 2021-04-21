/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="19">
        <div class="viewer">
          <vc-viewer @ready="ready" @layerAdded="layerAdded">
            <vc-layer-imagery
              ref="layerText"
              :alpha="alpha"
              :brightness="brightness"
              :contrast="contrast"
            >
              <vc-provider-imagery-tianditu
                map-style="cva_c"
                token="436ce7e50d27eede2f2929307e6b33c0"
              />
            </vc-layer-imagery>
            <vc-layer-imagery
              :alpha="alpha"
              :brightness="brightness"
              :contrast="contrast"
            >
              <vc-provider-imagery-tianditu
                :map-style="mapStyle"
                token="436ce7e50d27eede2f2929307e6b33c0"
              /> </vc-layer-imagery></vc-viewer></div></el-col>
      <el-col :span="5">
        <el-row>
          <div class="datadiv1"><img class="imgurl" :src="pot"></div>
        </el-row>
        <el-row>
          <div class="datadiv"> <el-table
            :data="tableData"
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import $ from 'jquery' // 在需要使用的页面中
import poturl from '@/assets/test/test.jpg'
import camimg from '@/assets/test/webcam.png'
export default {
  data() {
    return {
      pot: poturl,
      protocol: 'http',
      mapStyle: 'img_c',
      alpha: 1,
      brightness: 1,
      contrast: 1,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    ready({ Cesium, viewer }) {
      this.Cesium = Cesium
      this.viewer = viewer

      // entities.add(entity)
      this.viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(120.9677706, 30.7985748),

        id: 2,

        billboard: {
          image: camimg,
          width: 32,
          height: 32
        },
        label: {
          text: 'cam-1',
          font: '6pt Source Han Sans CN', // 字体样式
          fillColor: Cesium.Color.RED, // 字体颜色
          backgroundColor: Cesium.Color.AQUA, // 背景颜色
          showBackground: false, // 是否显示背景颜色
          style: Cesium.LabelStyle.FILL, // label样式
          outlineWidth: 2,
          outline: false, // 是否显示轮廓
          verticalOrigin: Cesium.VerticalOrigin.CENTER, // 垂直位置
          horizontalOrigin: Cesium.HorizontalOrigin.LEFT, // 水平位置
          pixelOffset: new Cesium.Cartesian2(20, 0) // 偏移
        }
      })
      // viewer.zoomTo(entity) // 居中到该点

      console.log(this.viewer.entities)
      tes1t2()
      var handler = new Cesium.ScreenSpaceEventHandler(
        this.viewer.scene.canvas
      )
      handler.setInputAction(function(click) {
        console.log('点击')
        // eslint-disable-next-line no-undef
        var pick = viewer.scene.pick(click.position)
        // 选中某模型   pick选中的对象

        if (pick && pick.id) {
          var pointEntity = pick.id
          console.log(pointEntity.id)
          $('.datadiv1').attr('style', 'visibility:visible')// 隐藏div
          $('.datadiv').attr('style', 'visibility:visible')// 隐藏div
        }
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    },
    layerAdded() {
      if (this.$refs.layerText.imageryLayer) {
        const { viewer } = this
        viewer.imageryLayers.raiseToTop(this.$refs.layerText.imageryLayer)
      }
    }
  }
}
function tes1t2() {
  console.log('测试')
}
</script>
<style>
.viewer {
  width: 100%;
  height: 100%;
}
.el-row {
  margin-bottom: 0px;
}
.el-col {
  border-radius: 0px;
}
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
