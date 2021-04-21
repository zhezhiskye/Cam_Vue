
<template>

  <div class="viewer">
    <div class="demo-tool">
      <el-button class="md-raised md-accent" type="primary" @click="toggle('handlerPoint')">{{ pointDrawing ? '停止' : '点' }}</el-button>
      <el-button class="md-raised md-accent" type="success" @click="toggle('handlerLine')">{{ polylineDrawing ? '停止' : '线' }}</el-button>
      <el-button class="md-raised md-accent" type="warning" @click="toggle('handlerPolygon')">{{ polygonDrawing ? '停止' : '面' }}</el-button>
      <el-button class="md-raised md-accent" type="info" @click="clampToGround = !clampToGround">贴地</el-button>
      <el-button class="md-raised md-accent" type="danger" @click="clear">清除</el-button>

    </div>
    <vc-viewer scene3d-only @ready="ready">
      <vc-handler-draw-point
        ref="handlerPoint"
        @activeEvt="activeEvt"
        @movingEvt="movingEvt"
        @drawEvt="drawEvt"
      />
      <vc-handler-draw-polyline
        ref="handlerLine"
        :clamp-to-ground="clampToGround"
        @activeEvt="activeEvt"
        @movingEvt="movingEvt"
        @drawEvt="drawEvt"
      />
      <vc-handler-draw-polygon
        ref="handlerPolygon"
        :clamp-to-ground="clampToGround"
        @activeEvt="activeEvt"
        @movingEvt="movingEvt"
        @drawEvt="drawEvt"
      />
      <vc-primitive-tileset :url="modelUrl" @readyPromise="readyPromise" />
    </vc-viewer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      modelUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json',
      pointDrawing: false,
      polylineDrawing: false,
      polygonDrawing: false,
      clampToGround: false
    }
  },
  methods: {
    ready(cesiumInstance) {
      const { Cesium, viewer } = cesiumInstance
      this.cesiumInstance = cesiumInstance
      var scene = viewer.scene
      scene.debugShowFramesPerSecond = true
      this.cesiumInstance = cesiumInstance
      this.tooltip = createTooltip(viewer.cesiumWidget.container)
      viewer.scene.globe.depthTestAgainstTerrain = true
    },
    toggle(type) {
      console.log(type)
      this.$refs[type].drawing = !this.$refs[type].drawing
    },
    clear() {
      this.$refs.handlerPoint.clear()
      this.$refs.handlerLine.clear()
      this.$refs.handlerPolygon.clear()
    },
    activeEvt(_) {
      this[_.type] = _.isActive
    },
    movingEvt(windowPosition) {
      this.tooltip.showAt(windowPosition, '<p>左键绘制, 右键结束绘制.</p>')
    },
    drawEvt(result) {
      result.finished && this.tooltip.setVisible(false)
      console.log(result)
    },
    readyPromise(tileset) {
      const { viewer } = this.cesiumInstance
      viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0))
    }
  }
}
</script>
<style>
 .viewer {
    height: calc(100vh-10px);
  }
  .twipsy {
    display: block;
    position: absolute;
    visibility: visible;
    max-width: 200px;
    min-width: 100px;
    padding: 5px;
    font-size: 11px;
    z-index: 1000;
    opacity: 0.8;
    -khtml-opacity: 0.8;
    -moz-opacity: 0.8;
    filter: alpha(opacity=80);
  }
  .twipsy.left .twipsy-arrow {
    top: 50%;
    right: 0;
    margin-top: -5px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid #000000;
  }
  .twipsy.right .twipsy-arrow {
    top: 50%;
    left: 0;
    margin-top: -5px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid #000000;
  }
  .twipsy-inner {
    padding: 3px 8px;
    background-color: #000000;
    color: white;
    text-align: center;
    max-width: 200px;
    text-decoration: none;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .twipsy-arrow {
    position: absolute;
    width: 0;
    height: 0;
  }
</style>
