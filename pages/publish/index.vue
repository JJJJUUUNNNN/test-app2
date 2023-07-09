<template>
	<view class="container">
		<uni-nav-bar height="3.75rem" :border="false" dark color="#000" backgroundColor="#74D1FF" left-icon="left" title="发布公告" />
    <view class="img">
      <view class="left">32° 晴天</view>
      <view class="right">
        <image class="image" src="../../static/weather/SunnyDay.png"></image>
      </view>
    </view>
    <uni-card :is-shadow="false" :border="false" class="all"  margin="0.75rem" padding="0.75rem 0">
      标题：
	  </uni-card>
    <uni-card :is-shadow="false" :border="false" class="all"  margin="0.75rem" padding="0.75rem 0">
      内容：
	  </uni-card>
    <uni-card :is-shadow="false" :border="false" class="all"  margin="0.75rem" padding="0.75rem 0">
      添加图片：
      <view class="upload-file" @click="uploadFile">
				<view class="upload-icon">
					<uni-icons custom-prefix="custom-icon" type="cloud-upload" size="20" color="#0163F5"></uni-icons>
				</view>
				<view class="upload-text">
					<text class="tips">选择并添加图片</text>
					<text class="remarks">支持文件格式：png、jpg、jpeg、gif</text>
				</view>
			</view>
	  </uni-card>

    <view class="submit-box">
			<button class="btn" @click="handleSubmit">发布</button>
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
				
			}
		},
		methods: {
			uploadFile(){
				uni.chooseImage({
						count: 6, 
						sizeType: ['original', 'compressed'], 
						sourceType: ['album'], 
						success: function (res) {
								console.log(JSON.stringify(res.tempFilePaths));
								const url=JSON.stringify(res.tempFilePaths)
								this.src=url[0]
						}
				});
			},
      handleSubmit(){
        uni.navigateTo({
						url:'/pages/toDo/index'
					})
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

.upload-file{
		border: 0.06rem dashed #e1e6f5ff;
		border-radius: 0.25rem;
		background-color: #FAFBFF;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.75rem;
	}
	.upload-icon{
		width: 2.5rem;
		height: 2.5rem;
		background-color: #EBF0FF;
		border-radius: 2.5rem;
		border: 0.38rem solid #fafbffff;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.upload-text{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.tips{
		color:#0163F5;
	}
	.remarks{
		font-size: 0.75rem;
		color: #939db8ff;
		line-height: 1.25rem;
	}
  .submit-box{
		width: 100%;
		height: 4rem;
		position: fixed;
		bottom: 0;
		margin-top: 2.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		padding: 0.75rem;
		box-sizing: border-box;
	}
	.btn{
		width: 22rem;
		border-radius: 0.5rem;
		background-color: #0163F5;
		color:#FAFBFF
	}
.img{
  height: 8rem;
  /* background-color: #74D1FF; */
  background-image: linear-gradient(to right, #fff , #74D1FF);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
}
  .img .left{
    background-color: pink;
  }
   .img .right .image{
    /* background-color: yellow; */
    width: 8.5rem;
    height: 7.5rem;
  }
</style>
