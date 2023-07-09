<template>
	<uni-card :is-shadow="false" :border="false" class="all" v-for="(item,index) in allList" :key="index" margin="0.75rem" padding="0.75rem 0" @click="handleClick(item.status)" >
		<view class="title item">{{ item.title }}</view>
			<view class="msg item">
				<view class="time">{{ item.time }}</view>
				<view class="tag">
          <view class="example-body">
            <view v-if="item.status==='1'" class="tag-view">
              <uni-tag text="已处理"
                custom-style="background-color: #E8FFF6; border: none; color: #08C296;">
              </uni-tag>
            </view>
            <view v-if="item.status==='0'" class="tag-view">
              <uni-tag text="未处理"
                custom-style="background-color: #FFE9E8; border: none; color: #EB1C38;">
              </uni-tag>
            </view>
				</view>
				</view>
			</view>
				<view class="person item">指派人员：{{ item.person }}</view>
		    <view class="info item">{{ item.info }}</view>
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
			handleClick(status){
				if(status==='0'){
						uni.navigateTo({
						url:'/pages/toDo/details/pending/index'
					})
				}else if(status==='1'){
						uni.navigateTo({
						url:'/pages/toDo/details/finish/index'
					})
				}
			},
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
</style>
