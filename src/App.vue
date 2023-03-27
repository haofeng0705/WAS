<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script setup></script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

html,
body {
	width: 100%;
	height: 100%;
}

body {
	background: url(./assets/images/planetearth.jpeg);
	/* background: url(./assets/images/login_bg.png); */
	background-size: 100% 100%;
	background-position: center center;
	overflow: hidden;
	user-select: none;
}
a {
	text-decoration: none;
	color: rgb(255, 255, 255);
	border: 0;
}
li {
	list-style: none;
}
#app {
	height: 100%;
}
</style>
