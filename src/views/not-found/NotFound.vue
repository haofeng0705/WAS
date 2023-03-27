<template>
	<div class="not-found">
		<h1>404 NOT FOUND...</h1>
		<el-button @click="goback">点我返回</el-button>
	</div>
</template>

<script setup lang="ts">
import router from '@/router'
function goback() {
	router.push('/')
}
</script>

<style lang="less" scoped>
.not-found {
	color: red;
}
</style>
