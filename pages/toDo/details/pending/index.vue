<template>
	<view class="container">
		<!-- <uni-nav-bar :border="false" dark color="#000" backgroundColor="#f5f5f5" left-icon="left" title="待办事项标题" /> -->
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
			<view class="title">提交处理结果</view>
			<uni-forms ref="baseForm" :modelValue="formData" label-position="top" :rules="rules">
					<uni-forms-item label="处理结果" name="result" required>
						<textarea :maxlength="300" v-model="formData.result" class="textarea" placeholder="请输入处理结果" @input="count" placeholder-style="color:#7985A4"></textarea>
						<view class="number"><text>{{ textNum }}</text>/300</view>
					</uni-forms-item>
					<uni-forms-item label="添加图片">
						<!-- <uni-file-picker file-mediatype="image"></uni-file-picker> -->
						<view class="upload-file" @click="uploadFile">
							<view class="upload-icon">
								<uni-icons custom-prefix="custom-icon" type="cloud-upload" size="20" color="#0163F5"></uni-icons>
							</view>
							<view class="upload-text">
								<text class="tips">选择并添加图片</text>
								<text class="remarks">支持文件格式：png、jpg、jpeg、gif</text>
							</view>
						</view>
						<!-- <image :src="src"></image>	 -->
					</uni-forms-item>
				</uni-forms>
		</uni-card>
		<view class="submit-box">
			<button class="btn">提交</button>
		</view>
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
						info:'待办事项内容待办事项内容待办事项内容待办事项内容待办事项内容待办事项内容待办事',
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
				imageStyles:{
					height: 60,	
					width: 60,	
					border:{ 
						color:"#eee",		
						width:"1px",		
						style:"solid", 	
						radius:"50%" 		
					}
				},
				rules:{
					result: {
						rules:[
							{
								required: true,
								errorMessage: '请填写处理结果',
							},
						],
					}
				},
				formData:{
					result:''
				},
				textNum:0,
				src:''
			}
		},
		methods: {
			count(e){
				this.textNum=e.detail.value.length
			},
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
		background-color: #CAD1E5;
		color:#FAFBFF
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
</style>
