<!--
 * @Author: qh
 * @Date: 2023-04-07 17:00:08
 * @LastEditors: qh
 * @LastEditTime: 2023-04-08 17:39:50
 * @Description: 登录页面
-->
<script setup lang="ts">
  import { mobileRules, passwordRules } from '@/utils/rules'
  const mobile = ''
  const password = ''
  const show = false
  const checked = false

  // 表单提交
  const login = () => {
    console.log(this)

    // if (!checked) return this.Toast('请勾选我已同意')
    // 验证完毕，进行登录
  }
</script>

<template>
  <div class="login-page">
    <cp-nav-bar
      right-text="注册"
      @click-right="$router.push('/register')"
    ></cp-nav-bar>
    <!-- 头部 -->
    <div class="login-head">
      <h3>密码登录</h3>
      <a href="javascript:;">
        <span>短信验证码登录</span>
        <van-icon name="arrow"></van-icon>
      </a>
    </div>
    <!-- 表单 -->
    <van-form autocomplete="off" @submit="login">
      <van-field
        v-model="mobile"
        :rules="mobileRules"
        placeholder="请输入手机号"
        type="tel"
      ></van-field>
      <van-field
        v-model="password"
        :rules="passwordRules"
        placeholder="请输入密码"
        :type="show ? 'text' : 'password'"
      >
      </van-field>
      <div class="cp-cell">
        <van-checkbox v-model="checked">
          <span>我已同意</span>
          <a href="javascript:;">用户协议</a>
          <span>及</span>
          <a href="javascript:;">隐私条款</a>
        </van-checkbox>
      </div>
      <div class="cp-cell">
        <van-button block round type="primary" native-type="submit">
          登 录
        </van-button>
      </div>
      <div class="cp-cell">
        <a href="javascript:;">忘记密码？</a>
      </div>
    </van-form>
    <!-- 底部 -->
    <div class="login-other">
      <van-divider>第三方登录</van-divider>
      <div class="icon">
        <img src="@/assets/qq.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped src="@/styles/Login/index.scss" lang="scss"></style>
