<template>
  <div class="login">
    <BaseHeader/>
    <div class="login-part">
      <div class="login-part__account">
        <i class="login-part__account-icon iconfont icon-cellphone"></i>
        <input
          type="text"
          class="login-part__account-input"
          v-model="account"
          placeholder="请输入手机号"
        >
        <i class="login-part__account-cross iconfont icon-cross"></i>
      </div>
      <div class="login-part__password">
        <i class="login-part__password-icon iconfont icon-lock"></i>
        <input
          type="password"
          class="login-part__password-input"
          v-model="password"
          placeholder="请输入密码"
        >
        <span class="login-part__password-forget">忘记密码？</span>
      </div>
      <button class="login-part__btn" @click="handelLogin">登录</button>
    </div>
  </div>
</template>

<script>
import BaseHeader from '@/components/base-header/base-header'

export default {
  components: {
    BaseHeader
  },
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    handelLogin () {
      const account = this.account
      const password = this.password

      if (!account) {
        return this.$toast('请输入手机号')
      }
      if (!password) {
        return this.$toast('请输入密码')
      }
    }
  }
}
</script>

<style lang="scss">
.login-part {
  padding: 0 48px;
  .iconfont {
    color: #999;
  }
  &__account, &__password {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 auto;
    box-sizing: border-box;
    border-bottom: 3px solid #d9d9d9;
    padding: 0 16px 24px 8px;
    width: 984px;
    height: 168px;
  }
  &__account-icon, &__password-icon {
    padding-bottom: 6px;
    height: 54px;
    line-height: 54px;
    font-size: 54px;
  }
  &__account-input, &__password-input {
    flex-grow: 1;
    margin-left: 24px;
    border: 0;
    height: 54px;
    line-height: 54px;
    font-size: 46px;
    color: #333;
    outline: 0;
    &::placeholder {
      color: #ccc;
    }
  }
  &__account-cross {
    font-size: 36px;
  }
  &__password-forget {
    font-size: 36px;
    color: #0c50db;
  }
  &__btn {
    margin-top: 90px;
    border-radius: 62px;
    height: 124px;
    line-height: 124px;
    font-size: 46px;
    text-align: center;
    color: #fff;
    background: linear-gradient(to right, $lightTheme 0%, $deepTheme 100%);
    &:active {
      background: $deepTheme;
    }
  }
}
</style>
