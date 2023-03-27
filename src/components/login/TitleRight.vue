<template>
	<div class="title-right">
		<div v-for="(item, index) in list" :key="index" class="title-func" :id="item.id">
			<div class="slash">
				<img :src="imgData.slash" alt="#" />
			</div>
			<div v-show="item.img" class="title-img" @click="item.btn_func ? btnFunc(item) : ''">
				<img :src="item.img" alt="pic" />
			</div>
			<div v-show="item.mainText" class="title-text">
				<div class="main-text">{{ item.mainText }}</div>
				<div class="sub-text">{{ item.subText }}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import slash from '@/assets/images/slash.png'

interface Item {
	id: string
	img: string
	mainText: string
	subText: string
	btn_func: boolean
	isSelect: boolean
}
const imgData = ref({
	slash
})

const props = defineProps({
	list: {
		type: Array as () => Item[],
		default: () => []
	}
})

const emit = defineEmits<{
	(event: string, bool: boolean): void
}>()

const btnFunc = async (item: Item) => {

	if (item.isSelect) {
		item.img = await import(`@/assets/images/${item.id}.png`)
		emit(item.id, false)
		return
	}
	item.img = await import(`@/assets/images/${item.id}-slt.png`)
	item.isSelect = true
	emit(item.id, true)
	console.log('item.img->', item.img)
}
// console.log('list->',{...props})
</script>

<style scoped>
.title-right {
	z-index: 2;
	display: flex;
	justify-content: flex-end;
	padding-top: 1rem;
	color: #fff;
}
.title-func {
	display: flex;
}
.slash {
	height: 60%;
	max-width: 100%;
	margin: 0 1rem;
}
.slash img {
	height: 100%;
	width: 100%;
}
.title-img {
	height: 50%;
	max-width: 100%;
	padding: 0.5rem 1rem 0 0;
}
.title-img img {
	width: 100%;
	height: 100%;
}
.main-text {
	font-size: 1.5rem;
	white-space: nowrap;
}
.sub-text {
	font-size: 0.75rem;
	white-space: nowrap;
}
</style>
