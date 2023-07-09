<template>
  <view class="empty-box">
    <view class="image-content">
      <image class="image" src="../../../static/noInfo.png"></image>
    </view>
    <view class="image-title">暂无待办事项</view>
  </view>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.image{
  width: 200px; 
  height: 200px; 
  background-color: #F5F7FC;
}
.empty-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
}
</style>