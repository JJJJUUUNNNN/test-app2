<template>
	<view class="container">
		<uni-nav-bar :border="false" dark color="#000" backgroundColor="#f5f5f5" left-icon="left" title="待办事项" />
			<uni-grid :column="4" :highlight="true">
				<uni-grid-item v-for="(item, index) in navList" :index="index" :key="index" @change="handleRedirect(item.to)">
					<view class="grid-item-box" style="font-size: 12px; text-align: center;">
						<text class="text">{{ item.title }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList:[
					{
						title:'待办事项',
						to:'/pages/toDo/index'
					},
					{
						title:'待办事项-发布-晴天',
						to:'/pages/toDo/publish/sunny'
					},
					{
						title:'待办事项-发布-多云',
						to:'/pages/toDo/publish/partlyCloudy'
					},
					{
						title:'待办事项-发布-阴天',
						to:'/pages/toDo/publish/cloudy'
					},
					{
						title:'待办事项-发布-雨天',
						to:'/pages/toDo/publish/rain'
					},
					{
						title:'待办-详情',
						to:'/pages/toDo/details/index'
					}
				]
			}
		},
		methods: {
			handleRedirect(url){
				console.log(url)
				uni.navigateTo({
					url,
				})
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
