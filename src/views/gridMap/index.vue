<template>
  <div class="viewer">
    <div class="demo-tool">
      <span>切换服务</span>
      <el-select v-model="url" placeholder="切换影像">
        <el-option v-for="item in options" :key="item.value" :value="item.value">
          {{ item.label }}
        </el-option>
      </el-select>
    </div>
    <vc-viewer @ready="ready">
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-openstreetmap :url="url" />
      </vc-layer-imagery>
    </vc-viewer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://a.tile.openstreetmap.org',
      options: [
        {
          value: 'https://a.tile.openstreetmap.org',
          label: 'openstreetmap1'
        },
        {
          value: 'https://stamen-tiles.a.ssl.fastly.net/toner/',
          label: 'openstreetmap2'
        }
      ],
      alpha: 1,
      brightness: 1,
      contrast: 1
    }
  },
  methods: {
    ready(cesiumInstance) {
      const { Cesium, viewer } = cesiumInstance
      // ..
    }
  }
}
</script>
