<template>
  <div id="userLayout" :class="['user-layout-wrapper', isMobile && 'mobile']">
    <a-row style="width: 100%; height: 100%">
      <a-col :span="14" style="height: 100%">
        <div class="login_left">
          <div>&nbsp;</div>
          <div class="login_img">
            <img src="@/assets/login/login-background.png" style="width: 50%" />
          </div>
          <div class="copyright"> Copyright &copy; 2022 信息技术有限公司 </div>
        </div>
      </a-col>
      <a-col :span="10">
        <div class="container">
          <div class="top">
            <div class="header">
              <img src="@/assets/login-text.png" class="logo" alt="logo" />
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
.login_left {
  background: url(../assets/login/login-background.png) #f1f6fc;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100%;
  background-size: 20%;
  background-position: 50px 50px;
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
        .badge {
          position: absolute;
          display: inline-block;
          line-height: 1;
          vertical-align: middle;
          margin-left: -12px;
          margin-top: -10px;
          opacity: 0.8;
        }

        .logo {
          width: 60%;
          vertical-align: top;
          margin-right: 16px;
          border-style: none;
          margin-bottom: 20px;
        }

        .title {
          font-size: 33px;
          color: rgba(0, 0, 0, 0.85);
          font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
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
    height: 18px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    line-height: 27px;
    color: #a5bad5;
    opacity: 0.7;
    text-align: center;
    position: absolute;
    bottom: 30px;
  }
  .login_img {
    text-align: center;
    vertical-align: middle;
    padding-top: 150px;
  }
}
</style>
