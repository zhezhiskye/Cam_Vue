<template>
  <div class="viewer">
    <div class="demo-tool">
      <span>切换服务</span>
      <el-select v-model="mapStyle" placeholder="请选择地图服务类型">
        <el-option v-for="item in options" :key="item.value" :value="item.value">
          {{ item.label }}
        </el-option>
      </el-select>
    </div>

    <vc-viewer @ready="ready" @layerAdded="layerAdded">
      <vc-layer-imagery ref="layerText" :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0" />
      </vc-layer-imagery>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-tianditu
          :map-style="mapStyle"
          token="436ce7e50d27eede2f2929307e6b33c0"
        />
      </vc-layer-imagery>
    </vc-viewer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      protocol: 'http',
      options: [
        {
          value: 'img_c',
          label: '全球影像地图服务(经纬度)'
        },
        {
          value: 'img_w',
          label: '全球影像地图服务(墨卡托)'
        },
        {
          value: 'vec_c',
          label: '全球矢量地图服务(经纬度)'
        },
        {
          value: 'vec_w',
          label: '全球矢量地图服务(墨卡托)'
        },
        {
          value: 'ter_c',
          label: '全球地形晕渲服务(经纬度)'
        },
        {
          value: 'ter_w',
          label: '全球地形晕渲服务(墨卡托)'
        }
      ],
      mapStyle: 'img_c',
      alpha: 1,
      brightness: 1,
      contrast: 1
    }
  },
  methods: {
    ready({ Cesium, viewer }) {
      this.Cesium = Cesium
      this.viewer = viewer
    },
    layerAdded() {
      if (this.$refs.layerText.imageryLayer) {
        const { viewer } = this
        viewer.imageryLayers.raiseToTop(this.$refs.layerText.imageryLayer)
      }
    }
  }
}
</script>
<style>
  .viewer {
    width: 100%;
    height: 100%;
  }
</style>
