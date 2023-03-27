<template>
	<div class="login">
		<div class="login-title">
			<div class="title-left">
				<div class="logo-img"><img :src="imgData.logo" alt="#" /></div>
			</div>
			<title-right :list="list"></title-right>
		</div>
		<div class="center">
			<div class="system-login">
				<span
					>系统登录
					<div class="sub-line"></div
				></span>
			</div>
			<form id="login-form" action="#">
				<div class="input-row">
					<label for="username"><span class="big-iconfont icon-user"></span></label>
					<input
						type="text"
						v-model="username"
						id="username"
						name="username"
						autocomplete="new-password"
						:maxlength="16"
					/>
				</div>
				<div class="input-row">
					<label for="password"><span class="big-iconfont icon-password"></span></label>
					<input
						type="password"
						v-model="password"
						name="password"
						id="password"
						autocomplete="new-password"
						:maxlength="16"
					/>
				</div>
				<input class="login_btn" type="button" value="立即登录" @click="submitForm" />
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import router from '@/router'
import { DateFormat } from '@/selfTools/DateTools.js'
import titleRight from '@/components/login/TitleRight.vue'
import { loginUser, getToken } from '@/api/login/login'
import { getWep } from '@/api/monitor/monitor'
import logo from '@/assets/images/logo.png'
import { ref, reactive, getCurrentInstance } from 'vue'
import { useAppStore } from '@/store/app'
import { useLoginStore } from '@/store/login'
const imgData = reactive({ logo })
const username = ref('')
const password = ref('')
const list: any[] = [
	{
		id: 'location',
		// img: import("@/assets/images/dingwei.png"),
		mainText: '双流区',
		subText: '定位'
	},
	{
		id: 'weather',
		// img: require("@/assets/images/duoyun.png"),
		mainText: '10°',
		subText: '晴'
	},
	{
		id: 'realtime',
		img: '',
		mainText: '21:05:45',
		subText: '2022-01-03'
	}
]
const appStore = useAppStore()
const loginStore = useLoginStore()

function submitForm() {
	loginUser({
		loginname: username.value,
		password: password.value
	})
		.then((res) => {
			const { code, msg, data } = res
			if (code == 200) {
				getToken({
					loginname: username.value,
					password: password.value
				}).then((res) => {
					appStore.UP_ACTIVE_ROUTER(0)
					appStore.UP_TOKEN(res.data)
					loginStore.UP_USER_NAME(data.name)
					loginStore.UP_USER_GRADE(data.permissionLevelName)

					ElMessage.success('登陆成功')
					router.push('/monitor')
				})
			} else if (code == 900) {
				ElMessage.warning(msg)
				return false
			}
		})
		.catch((error) => {
			ElMessage.warning('网络异常')
			return false
		})
}
</script>

<style scoped>
.login {
	height: 100%;
	width: 100%;
	position: relative;
	overflow: hidden;
}
.login-title {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 6rem;
	padding: 1rem 1rem 0 1rem;
}
.title-left,
.title-right {
	flex: 1;
}
.logo-img {
	width: 33.3125rem;
	height: 5.375rem;
}
.logo-img img {
	height: 100%;
	width: 100%;
}
#login-form {
	display: flex;
	flex-direction: column;
	padding: 0 2rem;
}

input {
	outline: none;
	border: 0;
	height: 2rem;
	background: transparent;
	color: #fff;
	border-bottom: 0.1rem solid rgba(255, 255, 255, 0.65);
}
.input-row {
	position: relative;
	margin: 2rem 0;
	overflow: hidden;
}
label > span {
	position: fixed;
	width: 1.5625rem;
	height: 1.5625rem;
}
input[type='text'],
input[type='password'] {
	padding: 0 0 1rem 2.8rem;
	font-size: 1rem;
}
.center {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 30rem;
	height: 33.75rem;
	padding: 3rem;
	margin: 6% auto;
	color: #fff;
	border-radius: 1rem;
	background: rgba(0, 0, 0, 0.65);
}
/* .center {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 43.75rem;
  height: 37.5rem;
  padding: 3rem;
  margin: 8% auto;
  border-radius: 0.5rem;
  color: #fff;
  background: url(../../assets/images/login_bg2.png);
  background-size: 100% 100%;
  background-position: center center;
  overflow: hidden;
} */
.system-login {
	text-align: center;
	margin-bottom: 3rem;
}
.system-login > span {
	display: inline-block;
	font-size: 2rem;
	font-weight: 700;
	font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
}
.sub-line {
	width: 100%;
	height: 0.2rem;
	margin-top: 0.5rem;
	border-radius: 0.1rem;
	background-color: #ffffff;
}

.login_btn {
	margin-top: 2rem;
	font-weight: 700;
	font-size: 1.25rem;
	color: #fff;
	border-radius: 1rem;
	border-bottom: none;
	background: #8f8f8f80;
	transition: all 0.4s;
}
.login_btn:hover {
	/* background: #3990ba; */
	background: #0083b6;
}
</style>
