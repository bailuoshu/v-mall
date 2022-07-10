<template>
  <div class="info">
    <div>
      <header-box />
    </div>
    <aside class="aside">
            <div class="aside-box">
                <div class="aside-item pointer-box"><el-icon color="#fff" size="30px"><HomeFilled /></el-icon><div>主页</div></div>
                <div class="aside-item pointer-box"><el-icon color="#fff" size="30px"><Search /></el-icon><div>搜索</div></div>
                <div class="aside-item pointer-box"><el-icon color="#fff" size="30px"><GoodsFilled /></el-icon><div>购物车</div></div>
                <div class="aside-item pointer-box"><el-icon color="#fff" size="30px"><Avatar /></el-icon><div>我的</div></div>
            </div>
        </aside>
    <el-divider content-position="left" border-style="dotted" style="width:1080px;font-size:8px;margin:0 auto;margin-top:10px"><span class="pointer-box" style="color:#aaa;">举报</span></el-divider>
    <div class="info-box">
      <div class="info-img-box">
        <div>
          <el-image style="width:460px;height:440px" fit="cover" :src="imgSrc" />
        </div>
        <div style="text-align:left;margin-top:20px">
          <el-image style="width:60px;height:60px;margin:6px;" fit="cover" v-for="index in info.url.length" :key="index"
            :src="info.url[index - 1]" 
            class="pointer-box"
            :class="checkedImg==index?'img-hover':''"
            :id="'img' + index" 
            @click="imgOver(index)" 
            />
        </div>
      </div>
      <div class="info-data-box"></div>
    </div>
  </div>
</template>
<script>
import headerBox from '@/components/HeaderBox.vue'
export default {
  components: { headerBox },
  data() {
    return {
      checkedImg:1,
      info: {
        url: [
          "http://img.alicdn.com/bao/uploaded/i1/2249888649/O1CN01AYQENI2DlIF1DoGlD_!!2249888649.jpg_468x468q75.jpg_.webp",
          "http://img.alicdn.com/bao/uploaded/i1/899354097/O1CN01xjP1j81g8TOy5RYdy_!!899354097.jpg_468x468q75.jpg_.webp",
          "http://img.alicdn.com/bao/uploaded/i3/3359575732/TB2epVHb8jTBKNjSZFuXXb0HFXa_!!3359575732.jpg_468x468q75.jpg_.webp",
          "http://img.alicdn.com/bao/uploaded/i1/694608148/O1CN01oqwB882A3pd8RTi4I_!!694608148.jpg_468x468q75.jpg_.webp",
          "http://img.alicdn.com/bao/uploaded/i1/431688516/O1CN01plGlw22CmNTrON3Zh_!!431688516.jpg_468x468q75.jpg_.webp",
          "http://img.alicdn.com/bao/uploaded/i1/1790657892/TB26X7nibGYBuNjy0FoXXciBFXa_!!1790657892.jpg_468x468q75.jpg_.webp",
        ],
        title: "【现货】审判者誓约lo",
        price: "¥318",
      },
      imgSrc: '',
    };
  },
  created() {
    this.imgSrc = this.info.url[0];
    let goodsId = this.$route.query.goodsId;
  },
  methods: {
    imgOver(id) {
      this.checkedImg = id;
      let that = this
      let urls = this.info.url
      this.throttle(function(){
        that.imgSrc = urls[id-1]
      },80)
    },
    //节流方法
    throttle(fn, wait) {
      let _this = this;
      if (!this.timerOut) {
        this.timerOut = setTimeout(function () {
          fn.apply(this, arguments);
          _this.timerOut = null;   //执行完把timerOut置为null
        }, wait);
      }
    },
  }
};
</script>

<style scoped>
.aside{
    position: fixed;
    bottom:80px;
    right:0;
    z-index: 999;
}
.aside-box{
    background: rgba(72, 59, 161,0.5);
}
.aside-item{
    font-size: 10px;
    padding:6px 10px;
    margin:20px 0;
    color:#fefefe;
}
.info{
 background: #fff;
}
.info-box {
  display: flex;
  width: 100%;
}

.info-img-box {
  padding: 30px;
}

.info-data-box {
  padding: 10px
}

.img-hover {
  border: 2px solid #250f86;
}
</style>
