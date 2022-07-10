<template>
  <router-view></router-view>
</template>

<style>
*{
  border: 0;
  margin: 0;
}
::-webkit-scrollbar
{
    width:6px;
    height:0px;
    background-color:#F5F5F5;
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track
{
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);
    border-radius:10px;
    background-color:#F5F5F5;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
    border-radius:10px;
    -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.08);
    background-color:rgb(83, 129, 255,0.5);
}
body{
  width: 100%;
  background: rgba(199, 221, 255, 0.2);
}
@font-face { font-family:myh3; src: url('@/assets/fonts/myh3fonts.ttf'); }
h3{
  font-family:myh3 ;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  color: rgb(6, 28, 75);
}
#app {
  width:1140px;
  margin:0 auto;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.pointer-box{
  cursor:pointer
}
</style>
