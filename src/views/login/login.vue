<template>
  <div class="login">
    <BaseHeader/>
    <div class="login-part">
      <div class="login-part__account">
        <div class="login-part__account-icon iconfont icon-phone"></div>
        <input type="text" class="login-part__account-input" placeholder="请输入手机号">
      </div>
      <div class="login-part__password">
        <div class="login-part__password-icon iconfont icon-lock"></div>
        <input type="password" class="login-part__password-input" placeholder="请输入密码">
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from '@/components/base-header/base-header'

export default {
  components: {
    BaseHeader
  }
}
</script>

<style lang="scss">
.login-part {
  font-size: 46px;
  color: #333;
  .iconfont {
    font-size: 54px;
    color: #999;
  }
  &__account, &__password {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 auto;
    box-sizing: border-box;
    border-bottom: 3px solid #d9d9d9;
    padding-bottom: 24px;
    width: 984px;
    height: 168px;
  }
  &__account-input, &__password-input {
    flex-grow: 1;
    margin-left: 24px;
    border: 0;
    outline: 0;
  }
}
</style>
