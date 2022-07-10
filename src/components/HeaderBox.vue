<template>
  <div>
    <!-- 搜索框 -->
    <div style=" width:1140px;margin:0 auto;height:80px;background:#fff">
      <img style="width:140px;margin-left:10px;float:left;margin-top:6px;padding:2px 30px;background:rgba(66,117,138,0)" src="@/assets/logo-header.png"/>
      <div style="float:right;margin-right:20px">
        <el-input
        v-model="input"
        size="large"
        style="width:540px;height:45px;margin-top:18px"
        placeholder="Lolita 夏装"
      />
      <el-button type="primary" style="height:44px;width:80px;font-size:18px;background:rgb(72, 59, 161)"><el-icon size="20px"><Search /></el-icon>搜索</el-button>
      </div>
    </div>
    <!-- 菜单栏  -->
    <!-- <div style=" width:1140px;margin:0 auto;height:40px;background:#fff">菜单栏占位</div> -->
  </div>
</template>
<script>
export default {
  name: "headerbox",
  data() {
    return {
      input:''
    };
  },
  created() {},
};
</script>