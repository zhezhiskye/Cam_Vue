<template>
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
        />
      </vc-layer-imagery>
    </vc-viewer>
    <test-leftdiv :pot="mying" :tabData="mydata" :drawer="imshow" @tmpimshow = "qaz"/>
  </div>
</template>
<script>
import $ from 'jquery' // 在需要使用的页面中
import poturl from '@/assets/test/test.jpg'
import camimg from '@/assets/test/webcam.png'
import LeftDiv from '@/views/supermap/testleftdiv'
export default {
  components:
  {
    'test-leftdiv': LeftDiv
  },
  data() {
    return {
      imshow: false,
      mying: poturl,
      protocol: 'http',
      mapStyle: 'img_c',
      alpha: 1,
      brightness: 1,
      contrast: 1,
      mydata: [{
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
      console.log(this)
      // entities.add(entity)
      var mythis = this
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

        console.log(mythis.imshow)
        mythis.imshow = true
        // console.log(_this.data.imshow)
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
    },
    qaz(data) {
      console.log(data)
      this.imshow = false
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
</style>
