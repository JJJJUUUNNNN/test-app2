<template>
	<view class="container">
			<view class="uni-padding-wrap uni-common-mt">
				<view class="nav-box">
					<view v-for="(item,index) in items" :key="index" @click="toggleNav(item.id)" :class="current===item.id?'nav-item-active':'nav-item'">{{ item.title }}</view>
				</view>
			</view>
			<view class="content">
				<view v-if="current === 0">
					<ToDoCard :all-list="allList"></ToDoCard>
				</view>
				<view v-if="current === 1">
					<empty></empty>
				</view>
				<view v-if="current === 2">
					<empty></empty>
				</view>
			</view>
	</view>
</template>

<script>
import ToDoCard from '../component/toDoCard/index.vue'
import empty from '../component/empty/index.vue'

	export default {
		components:{
			ToDoCard,
			empty
		},
		data() {
			return {
				current:0,
				items:[
					{
						title:'全部',
						id:0
					},
					{
						title:'待处理',
						id:1
					},
					{
						title:'已处理',
						id:2
					}
				],
				allList:[
					{
						title:'待办事项标题',
						time:'2023-06-14 15:00 发布',
						status:'1',
						person:'藤桑、藤桑2、藤桑3',
						info:'待办事项内容待办事项内容待办事项内容待办事项内容待办事项内容待办事项内容待办事',
					},
					{
						title:'待办事项标题',
						time:'2023-06-14 15:00 发布',
						status:'0',
						person:'藤桑、藤桑2、藤桑3',
						info:'待办事项内容待办事项内容待办事项内容待办事项内容待办事项内容待办事项内容待办事',
					}
				]
			}
		},
		methods: {
			onClickItem(e){
				if(this.current!=e.currentIndex){
					this.current=e.currentIndex
				}
			},
			toggleNav(e){
				this.current=e
			}
		}
	}
</script>

<style>
page{
  position: relative;
  padding-top: 10rpx;
  padding-bottom: 6.5rem;
}

	.container {
		font-size: 14px;
		line-height: 24px;
	}

	.all .item{
		padding: 4px 0;
	}

	.content .title{
		font-size: 16px;
		font-weight: 500;
		color:#293452
	}

	.content .msg{
		display: flex;
		justify-content: space-between;
	}

	.content .msg .time{
		font-size: 12px;
		color:#7985A4
	}

	.content .person{
		font-size: 14px;
		color:#293452
	}

	.content .info{
		font-size: 14px;
		color:#4C587A
	}

	.nav-box{
		background-color: #E1E6F5;
		height: 2.75rem;
		margin: 0.75rem;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		border-radius: 0.25rem;
		box-sizing: border-box;
	}
	.nav-item-active{
		background-color: #fff;
		width: 7.46rem;
		margin: 0.25rem;
		box-sizing: border-box;
		text-align: center;
		box-shadow: 0 0 0.06rem 0 #000d6114, 0 0.13rem 0.5rem 0 #000d611f;
		border-radius: 0.25rem;
		height: 2.25rem;
		line-height: 2.25rem;
		font-weight: 500;
		color:#0163F5
	}
	.nav-item{
		width: 7.46rem;
		margin: 0.25rem;
		box-sizing: border-box;
		text-align: center;
		border-radius: 0.25rem;
		height: 2.25rem;
		line-height: 2.25rem;
		font-weight: 500;
		color:#4C587A;
	}
</style>
