<template>
  <div>
    <baidu-map class="map" ak="ocjtpCpd3HusX9VUmkfc49P9jxRV5Vch" center="北京">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" />
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :show-address-bar="true" :auto-location="true" />
      <bm-control :offset="{width:'10px',height:'10px'}">
        <bm-auto-complete v-model="keyword" :sug-style="{zIndex: 1}">
          <search-field placeholder="请输入地名关键字" /> <!-- 这里指代一个自定义搜索框组件 -->
        </bm-auto-complete>
      </bm-control>
      <bm-local-search :keyword="keyword" :auto-viewport="true" />
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmNavigation from 'vue-baidu-map/components/controls/Navigation.vue'
import BmGeolocation from 'vue-baidu-map/components/controls/Geolocation.vue'
import BmControl from 'vue-baidu-map/components/controls/Control.vue'
import BmAutoComplete from 'vue-baidu-map/components/others/AutoComplete.vue'

import BmLocalSearch from 'vue-baidu-map/components/search/LocalSearch.vue'
export default {
  components: {
    BaiduMap,
    BmNavigation,
    BmGeolocation,
    BmControl,
    BmAutoComplete,
    BmLocalSearch

  },
  data() {
    return {
      keyword: ''
    }
  }

}
</script>

<style>
.map {
  width: 100%;
  height: 650px;
}
</style>
