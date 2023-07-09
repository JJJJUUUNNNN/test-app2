<template>
	<view class="container">
		<ToDoCard :all-list="dataList"></ToDoCard>
		<uni-card :is-shadow="false" :border="false" margin="0.75rem" padding="0.75rem 0">
			<view class="title">图片</view>
			<view class="image-list">
				<view class="image-box" v-for="(item,index) in 2" :key="index">
					<image class="image" src="../../../../static/testImg.png"></image>
					<text class="fileName">文件名称.png</text>
				</view>
			</view>
		</uni-card>
		<uni-card :is-shadow="false" :border="false" margin="0.75rem" padding="0.75rem 0">
			<view class="title">文件</view>
			<view class="file-list">
				<view class="file-box" v-for="(item,index) in fileLists" :key="index" @click="checkFile(item.isActive)">
					<view class="cover-box">
						<image class="file-image" src="../../../../static/fileType/DOC.png"></image>
						<view class="image-cover" v-if="item.isActive" @click="downloadFile">
							<uni-icons custom-prefix="custom-icon" type="cloud-download" size="20" color="#fff"></uni-icons>
							<text>下载查看</text>
						</view>
					</view>
					<text class="file-name">文件名称.png</text>
					<uni-icons v-if="!item.isActive" class="complete-icon" custom-prefix="custom-icon" type="checkbox" size="20" color="#0163F5"></uni-icons>
				</view>
			</view>
		</uni-card>
		<uni-card class="result-card" :is-shadow="false" :border="false" margin="0.75rem" padding="0.75rem 0">
			<view class="title">处理结果</view>
				<view class="list" v-for="(item,index) in listData" :key="index">
					<view class="list-info">
						<view class="user-info">
							<image style="width: 2rem; height: 2rem;" src="/static/head.png"/>
							<text class="name">{{ item.name }}</text>
						</view>
							
						<view class="tag">
							<view class="example-body">
								<view v-if="item.status==='0'" class="tag-view">
									<uni-tag text="未处理"
										custom-style="background-color: #FFE9E8; border: none; color: #EB1C38;">
									</uni-tag>
								</view>
								<view v-if="item.status==='1'" class="tag-view">
									<uni-tag text="已处理"
										custom-style="background-color: #E8FFF6; border: none; color: #08C296;">
									</uni-tag>
								</view>
						</view>
					</view>
					</view>
					<view v-if="item.status==='1'" class="list-remark">处理结果说明</view>
				</view>
					
				<view class="file-list">
				<view class="file-box">
					<view class="cover-box">
						<image class="file-image" src="../../../../static/fileType/PNG.png"></image>
					</view>
					<text class="file-name">文件名称.png</text>
				</view>
			</view>
					
		</uni-card>
	</view>
</template>

<script>
import ToDoCard from '../../component/toDoCard/index.vue'

export default {
	components:{
			ToDoCard,
		},
		data() {
			return {
				dataList:[
					{
						title:'待办事项标题',
						time:'2023-06-14 15:00 发布',
						status:'3',
						person:'藤桑、藤桑2、藤桑3',
						info:'待办事项内容待办事项内容待办事项内容待办事项内容待办事项内容待办事项内容待办事'
					},
				],
				fileLists:[
					{
						name:"file.txt",
						extname:"txt",
						isActive:false
					},
					{
						name:"file.txt",
						extname:"txt",
						isActive:false
					},
					{
						name:"file.txt",
						extname:"txt",
						isActive:true
					}
				],
				listData:[
					{
						name:'处理人A',
						status:'0'
					},
					{
						name:'处理人A',
						status:'1'
					},
					{
						name:'处理人A',
						status:'1'
					}
				]
			}
		},
		methods: {
			checkFile(isActive){
				console.log(isActive)
				isActive=!isActive
			},
			downloadFile(){
				uni.chooseImage({
						count: 6, 
						sizeType: ['original', 'compressed'], 
						sourceType: ['album'], 
						success: function (res) {
								console.log(JSON.stringify(res.tempFilePaths));
						}
				});
			},
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
	.title{
		height: 20px;
		padding: 9px 0;
		font-size: 14px;
		font-weight: 500;
		line-height: 18px;
		color: #293452ff;
	}
	.image{
		width: 80px;
		height: 80px;
		border-radius: 4px;
	}
	.image-list{
		display: flex;
	}
	.file-name{
		font-size: 14px;
		color:#4c587aff;
		line-height: 2rem;
	}
	.image-box{
		width: 92px;
		padding: 8px 0 8px 13px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.textarea{
		background-color:#f5f7fcff;
		border-radius: 4px;
		padding: 0.5rem;
		height: 7.88rem;
		box-sizing: border-box;
		width: 100%;
	}
	.number{
		position: absolute;
		right: 0.5rem;
		bottom: 0;
		color:#7985A4
	}
	.list{
		border-bottom: 2px solid #f9f9fb;
	}
	.list:last-child{
		background-color: yellow !important;
	}
	.user-info{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.user-info .name{
		margin-left: 1.25rem;
	}
	.list-info{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem 0;
	}
	.list-remark{
		color:#4C587A;
		font-size:0.88rem;
		line-height: 1.38rem;
	}
	.upload-file{
		margin: 0.5rem;
	}
	.file-list{
		display: flex;
	}
	.file-box{
		display: flex;
		flex-direction: column;
		background-color: #FAFBFF;
		margin: 0.45rem;
		justify-content: center;
		align-items: center;
		padding: 1.25rem 0.39rem 0.25rem;
		position: relative;
	}
	.file-image{
		width: 2.91rem;
		height: 3.5rem;
	}
	.cover-box{
		position: relative;
	}
	.image-cover{
		width: 5rem;
		height: 5rem;
		background-color: #1B243D;
		opacity: 0.5;
		position: absolute;
		top: -0.9rem;
		left: -0.9rem;
		border-radius: 0.5rem;
		z-index: 10;
		color:#fff;
		font-size: 0.75rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.complete-icon{
		position: absolute;
		top: 0.25rem;
		left: 0.25rem;
	}
</style>
