<template>
  <div id="userLayout" :class="['user-layout-wrapper', isMobile && 'mobile']">
    <a-row class="login_bg">
      <a-col :span="14" style="min-height: 100%">
        <div class="copyright"> Copyright &copy; 2022 信息技术有限公司 </div>
      </a-col>
      <a-col :span="10">
        <div class="container">
          <div class="top">
            <div class="header">
              <!-- <img src="@/assets/login-text.png" class="logo" alt="logo" /> -->
              <div class="title"> XXXXXXCC </div>
            </div>
          </div>
          <router-view /> </div
      ></a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'UserLayout',
  mounted() {
    document.body.classList.add('userLayout');
  },
  beforeUnmount() {
    document.body.classList.remove('userLayout');
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>
<style lang="less" scoped>
.login_bg {
  position: relative;
  background: url(../assets/login/login-background.png) #f1f6fc;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100%;
  // background-size: 20%;
  // background-position: 50px 50px;
}
#userLayout.user-layout-wrapper {
  height: 100%;

  :deep(.ant-form-item) {
    padding-bottom: 10px;
  }
  &.mobile {
    .container {
      .main {
        max-width: 368px;
        width: 98%;
      }
    }
  }

  .container {
    width: 100%;
    min-height: 100%;
    background: white;
    background-size: 100%;
    padding: 17% 0 0;
    position: relative;

    a {
      text-decoration: none;
    }

    .top {
      text-align: center;

      .header {
        .title {
          font-size: 48px;
          color: rgba(56, 56, 56, 0.85);
          font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
          margin-bottom: 60px;
        }
      }
    }

    .main {
      min-width: 260px;
      width: 60%;
      margin: 0 auto;
    }

    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 0 16px;
      margin: 48px 0 24px;
      text-align: center;
    }
  }
  .copyright {
    width: 100%;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #000;
    text-align: center;
    position: absolute;
    bottom: 10px;
  }
}
</style>
