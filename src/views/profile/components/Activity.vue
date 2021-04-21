<template>
  <div class="user-activity">
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg'+avatarPrefix">
        <span class="username text-muted">黑河水利数据管理系统</span>
        <p>
          C#开发：基于ArcGIS利用二次开发
        </p>
        <div class="Pro01-images">
          <el-carousel :interval="6000" type="card" height="220px">
            <el-carousel-item v-for="item in carouselImages_Pro01" :key="item">
              <img :src="item+carouselPrefix" class="image">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'https://wpimg.wallstcn.com/9e2a5d0a-bd5b-457f-ac8e-86554616c87b.jpg'+avatarPrefix">
        <span class="username text-muted">山东生态保护红线自动矢量化</span>
      </div>
      <p>
        C++开发：从地图集中获取高清图像，完成图像中两种红线区域的矢量化
      </p>
      <div class="Pro01-images">
        <el-carousel :interval="6000" type="card" height="220px">
          <el-carousel-item v-for="item in carouselImages_Pro02" :key="item">
            <img :src="item+carouselPrefix" class="image">
          </el-carousel-item>
        </el-carousel>
      </div>

    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'https://wpimg.wallstcn.com/fb57f689-e1ab-443c-af12-8d4066e202e2.jpg'+avatarPrefix">
        <span class="username">武汉昂格瑞景科技有限公司实习</span>
        <p>
          从事C++开发，涉及图像匹配、拼接
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const avatarPrefix = '?imageView2/1/w/80/h/80'
const carouselPrefix = '?imageView2/2/h/440'

export default {
  data() {
    return {
      carouselImages_Pro01: [
        require('@/assets/Pro01/1.png'),
        require('@/assets/Pro01/2.png'),
        require('@/assets/Pro01/3.png'),
        require('@/assets/Pro01/4.png')
      ],
      carouselImages_Pro02: [
        require('@/assets/Pro02/1.png'),
        require('@/assets/Pro02/2.png'),
        require('@/assets/Pro02/3.png')
      ],
      carouselImages: [
        require('@/assets/Pro01/2.png'),
        require('@/assets/Pro01/3.png'),
        require('@/assets/Pro01/4.png')
      ],
      avatarPrefix,
      carouselPrefix
    }
  }
}
</script>

<style lang="scss" scoped>
.user-activity {
  .user-block {

    .username,
    .description {
      display: block;
      margin-left: 50px;
      padding: 2px 0;
    }

    .username{
      font-size: 16px;
      color: #000;
    }

    :after {
      clear: both;
    }

    .img-circle {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      float: left;
    }

    span {
      font-weight: 500;
      font-size: 12px;
    }
  }

  .post {
    font-size: 14px;
    border-bottom: 1px solid #d2d6de;
    margin-bottom: 15px;
    padding-bottom: 15px;
    color: #666;

    .image {
      width: 100%;
      height: 100%;

    }

    .user-images {
      padding-top: 20px;
    }
  }

  .list-inline {
    padding-left: 0;
    margin-left: -5px;
    list-style: none;

    li {
      display: inline-block;
      padding-right: 5px;
      padding-left: 5px;
      font-size: 13px;
    }

    .link-black {

      &:hover,
      &:focus {
        color: #999;
      }
    }
  }

}

.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}
</style>
