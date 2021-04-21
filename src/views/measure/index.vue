<template>
  <div class="viewer">
    <div class="demo-tool">
      <el-button class="md-raised md-accent" type="primary" @click="toggle('measureDistance')">{{ distanceMeasuring ? '停止' : '距离' }}</el-button>
      <el-button class="md-raised md-accent" type="primary" @click="toggle('measureArea')">{{ areaMeasuring ? '停止' : '面积' }}</el-button>
      <el-button class="md-raised md-accent" type="primary" @click="toggle('measureHeight')">{{ heightMeasuring ? '停止' : '高度' }}</el-button>
      <el-button class="md-raised md-accent" type="primary" @click="clampToGround=!clampToGround">贴地</el-button>
      <el-button class="md-raised md-accent" type="primary" @click="clear">清除</el-button>
    </div>
    <vc-viewer scene3d-only @ready="ready">
      <vc-measure-distance
        ref="measureDistance"
        :clamp-to-ground="clampToGround"
        @activeEvt="activeEvt"
        @measureEvt="measureEvt"
        @movingEvt="movingEvt"
      />
      <vc-measure-area
        ref="measureArea"
        :clamp-to-ground="clampToGround"
        @activeEvt="activeEvt"
        @measureEvt="measureEvt"
        @movingEvt="movingEvt"
      />
      <vc-measure-height
        ref="measureHeight"
        @activeEvt="activeEvt"
        @measureEvt="measureEvt"
        @movingEvt="movingEvt"
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
      distanceMeasuring: false,
      areaMeasuring: false,
      heightMeasuring: false,
      clampToGround: false
    }
  },
  methods: {
    ready(cesiumInstance) {
      const { Cesium, viewer } = cesiumInstance
      var scene = viewer.scene
      scene.debugShowFramesPerSecond = true
      this.cesiumInstance = cesiumInstance
      viewer.scene.globe.depthTestAgainstTerrain = true
    },
    toggle(type) {
      this.$refs[type].measuring = !this.$refs[type].measuring
    },
    clear() {
      this.$refs.measureDistance.clear()
      this.$refs.measureArea.clear()
      this.$refs.measureHeight.clear()
    },
    activeEvt(_) {
      this[_.type] = _.isActive
    },
    measureEvt(result) {
      console.log(result)
    },
    movingEvt(position) {
      console.log(position)
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
    height: 90%;
  }
</style>
