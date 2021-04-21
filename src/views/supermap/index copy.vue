<template>
  <div class="viewer">
    <div class="demo-tool">
      <span>切换服务</span>
      <el-select v-model="url" placeholder="请选择服务">
        <el-option v-for="item in options" :key="item.value" :value="item.value">
          {{ item.label }}
        </el-option>
      </el-select>
    </div>
    <vc-viewer @ready="ready">
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-supermap
          ref="imageryProvider"
          :url="url"
          @readyPromise="readyPromise"
        />
      </vc-layer-imagery>
    </vc-viewer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: 'https://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
          label: '四川'
        },
        {
          value: 'https://www.supermapol.com/realspace/services/map-World/rest/maps/World_Google',
          label: '谷歌'
        }
      ],
      url: 'https://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult'
    }
  },
  methods: {
    ready(cesiumInstance) {
      const { Cesium, viewer } = cesiumInstance
      this.cesiumInstance = cesiumInstance
    },
    readyPromise() {
      const { Cesium, viewer } = this.cesiumInstance
      viewer.zoomTo(this.$refs.imageryProvider.providerContainer.imageryLayer)
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
