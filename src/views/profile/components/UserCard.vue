<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>杨洋</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
          <div>Hello</div>
          {{ user.role }}
        </pan-thumb>
      </div>
      <div class="box-center">
        <div class="user-name text-center">{{ user.name }}</div>
        <!-- <div class="user-role text-center text-muted">{{ user.role | uppercaseFirst }}</div> -->
      </div>
    </div>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>教育</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            <p>湖北大学资源环境学院2018级研究生</p>
            <p>专业：地理信息系统</p>
            <p>研究方向：数字影像匹配及其应用</p>
          </div>
        </div>
      </div>
      <div class="user-personalInfo user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="people" /><span>联系方式</span></div>
        <div class="user-bio-section-body">
          <div class="text-muted">
            <p>手机：17671702755</p>
            <p>邮箱：1114809057@qq.com</p>
          </div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="skill" /><span>能力</span></div>
        <div class="user-bio-section-body">
          <div class="progress-item">
            <span>GET-6</span>
            <el-progress :percentage="100" status="success" />
          </div>
          <div class="progress-item">
            <span>C++</span>
            <el-progress :percentage="100" status="success" />
          </div>
          <div class="progress-item">
            <span>C#</span>
            <el-progress :percentage="100" status="success" />
          </div>

        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'

export default {
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          avatar: '',
          role: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
