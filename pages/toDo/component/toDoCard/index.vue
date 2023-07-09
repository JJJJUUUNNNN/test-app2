<template>
	<uni-card :is-shadow="false" :border="false" class="all" v-for="(item,index) in allList" :key="index" margin="0.75rem" padding="0.75rem 0" >
			<view class="title item">{{ item.title }}</view>
			<view class="time item">{{ item.time }}</view>
			<view class="info item">{{ item.info }}</view>
			<view class="person item">指派处理人：</view>
			<view class="name item">{{ item.person }}</view>
	</uni-card>
</template>

<script>
	export default {
    props:{
      allList:{
        type:Array,
        default:()=>[]
      }
    },
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}

	.all .item{
		padding: 4px 0;
	}

	.title{
		font-size: 1rem;
		font-weight: 500;
		color:#293452;
		line-height: 1.5rem;
	}

	.time{
		font-size: 0.75rem;
		color:#7985A4;
		line-height: 1.25rem;
	}

	.person{
		font-size: 0.88rem;
		color:#293452;
		line-height: 1.38rem;
	}

	.info{
		font-size: 0.88rem;
		color:#4C587A;
		line-height: 1.38rem;
	}

	.name{
		color:#4C587A;
		font-size: 0.88rem;
		line-height: 1.38rem;
	}
</style>
