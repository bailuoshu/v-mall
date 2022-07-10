<template>
  <div class="shop-main-box">
    <div class="banner-box division-box">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in banner" :key="item">
          <img :src="item" style="height:414px" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 今日推荐  -->
    <div class="recommend-box">
      <div class="clothes-recommend  division-box">
        <div>
          <h3 style="float:left;margin-left:10px">今日推荐</h3>
          <span class="pointer-box" style="float:right;margin:10px 10px 0 0 ;font-size:12px">更多<el-icon size="10px"><ArrowRightBold /></el-icon></span>
          <div style="clear:both;"></div>
        </div>
        
        <div class="recommend-goods-box">
          <div class="recommend-goods-left">
            <div>
              <el-image class="pointer-box" style="width: 140px; height: 210px" :src="recommend.clothes[0].url" fit="cover">
                <template #error>
                  <div class="image-slot">
                    <el-icon>
                      <icon-picture />
                    </el-icon>
                  </div>
                </template>
              </el-image>
            </div>
            <div>
              <span style="font-size:14px;">{{ recommend.clothes[0].title }}</span></div>
            <div style="font-size:24px;margin-left:20px;margin-top:10px;color:red;text-align:left">{{ recommend.clothes[0].price }}</div>
          </div>
          <div class="recommend-goods-right">
            <div>
              <span class="recommend-goods-right-span">
                <el-image class="pointer-box" style="width: 160px; height: 120px" :src="recommend.clothes[1].url" fit="cover"><template
                    #error>
                    <div class="image-slot">
                      <el-icon>
                        <icon-picture />
                      </el-icon>
                    </div>
                  </template></el-image>
              </span>
              <span class="recommend-goods-right-span">
                <el-image class="pointer-box" style="width: 160px; height: 120px" :src="recommend.clothes[2].url" fit="cover"><template
                    #error>
                    <div class="image-slot">
                      <el-icon>
                        <icon-picture />
                      </el-icon>
                    </div>
                  </template></el-image>
              </span>
            </div>
            <div style="margin:16px 0">
              <span class="recommend-goods-right-span">
                <el-image class="pointer-box" style="width: 160px; height: 120px" :src="recommend.clothes[3].url" fit="cover"><template
                    #error>
                    <div class="image-slot">
                      <el-icon>
                        <icon-picture />
                      </el-icon>
                    </div>
                  </template></el-image>
              </span>
              <span class="recommend-goods-right-span">
                <el-image class="pointer-box" style="width: 160px; height: 120px" :src="recommend.clothes[4].url" fit="cover"><template
                    #error>
                    <div class="image-slot">
                      <el-icon>
                        <icon-picture />
                      </el-icon>
                    </div>
                  </template></el-image>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style="flex:1">
      </div>
      <div class="sketches-recommend  division-box">
        <div>
          <h3 style="float:left;margin:0 0 0 10px">热销设计</h3>
          <span class="pointer-box" style="float:right;margin:10px 10px 0 0 ;font-size:12px">更多<el-icon size="10px"><ArrowRightBold /></el-icon></span>
          <div style="clear:both;"></div>
        </div>
        <div class="recommend-goods-box">
          <div class="recommend-goods-left">
            <div>
              <el-image class="pointer-box" style="width: 140px; height: 210px" :src="recommend.sketches[0].url" fit="cover">
                <template #error>
                  <div class="image-slot">
                    <el-icon>
                      <icon-picture />
                    </el-icon>
                  </div>
                </template>
              </el-image>
            </div>
            <div>
              <span style="font-size:14px;">{{ recommend.sketches[0].title }}</span></div>
            <div style="font-size:24px;margin-left:20px;margin-top:10px;color:red;text-align:left">{{ recommend.clothes[0].price }}</div>
          
          </div>
          <div class="recommend-goods-right">
            <div>
              <span class="recommend-goods-right-span">
                <el-image class="pointer-box" style="width: 160px; height: 120px" :src="recommend.sketches[1].url" fit="cover"><template
                    #error>
                    <div class="image-slot">
                      <el-icon>
                        <icon-picture />
                      </el-icon>
                    </div>
                  </template></el-image>
              </span>
              <span class="recommend-goods-right-span">
                <el-image class="pointer-box" style="width: 160px; height: 120px" :src="recommend.sketches[2].url" fit="cover"><template
                    #error>
                    <div class="image-slot">
                      <el-icon>
                        <icon-picture />
                      </el-icon>
                    </div>
                  </template></el-image>
              </span>
            </div>
            <div style="margin:16px 0">
              <span class="recommend-goods-right-span">
                <el-image class="pointer-box" style="width: 160px; height: 120px" :src="recommend.sketches[3].url" fit="cover"><template
                    #error>
                    <div class="image-slot">
                      <el-icon>
                        <icon-picture />
                      </el-icon>
                    </div>
                  </template></el-image>
              </span>
              <span class="recommend-goods-right-span">
                <el-image class="pointer-box" style="width: 160px; height: 120px" :src="recommend.clothes[4].url" fit="cover"><template
                    #error>
                    <div class="image-slot">
                      <el-icon>
                        <icon-picture />
                      </el-icon>
                    </div>
                  </template></el-image>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    <!-- 热销商品 -->
    <div>
      <goods-list></goods-list>
    </div>
  </div>
</template>
<script>
import goodsList from '@/components/goodsList.vue'
export default {
  name: "shopmain",
  components: { goodsList },
  data() {
    return {
      //banner
      banner:[
        'https://gdp.alicdn.com/imgextra/i2/26107146/O1CN01cItmrq22ev3CrXgFK_!!26107146.jpg',
        'https://gdp.alicdn.com/imgextra/i2/26107146/O1CN01x0f14t22ev3B2NviW_!!26107146.jpg',
        'https://gdp.alicdn.com/imgextra/i2/26107146/O1CN01pkS8fL22ev2zZjpbL_!!26107146.jpg',
        'https://gdp.alicdn.com/imgextra/i3/26107146/O1CN01RwMnav22ev31PW2Or_!!26107146.jpg'
      ],
      //今日推荐
      recommend: {
        clothes: [
          {
            url: "http://img.alicdn.com/bao/uploaded/i1/2249888649/O1CN01AYQENI2DlIF1DoGlD_!!2249888649.jpg_468x468q75.jpg_.webp",
            title: "【现货】审判者誓约lo",
            price: "¥318",
          },
          {
            url: "http://img.alicdn.com/bao/uploaded/i6/TB1.liCQVXXXXaPXFXXYXGcGpXX_M2.SS2_468x468q75.jpg_.webp",
            title: "原创伊丽娅春夏新款洋装",
            price: "¥146",
          },
          {
            url: "http://img.alicdn.com/bao/uploaded/i1/852989671/O1CN012LJMojKaIkfDNfR_!!852989671.jpg_468x468q75.jpg_.webp",
            title: "【现货3天内发货】梦幻比巴卜 星辰皇冠原创正品",
            price: "¥218",
          },
          {
            url: "http://img.alicdn.com/bao/uploaded/i1/359566956/O1CN01Ww5sQM21FteSwZ5xE_!!359566956.jpg_468x468q75.jpg_.webp",
            title: "原创正版莉莉安洛丽塔日常少女纯色优雅甜美长袖",
            price: "¥159",
          },
          {
            url: "http://img.alicdn.com/bao/uploaded/i3/386825703/O1CN019tuAfZ1s01SQPGnHO_!!386825703.jpg_468x468q75.jpg_.webp",
            title: "唤初春装",
            price: "¥128",
          },
        ],
        sketches: [
          {
            url: "http://img.alicdn.com/bao/uploaded/i4/865286530/O1CN01Wlweb01y6mseGWP1q_!!865286530.jpg_468x468q75.jpg_.webp",
            title: "鱼骨小姐3.0◆",
            price: "¥168",
          },
          {
            url: "http://img.alicdn.com/bao/uploaded/i2/35517146/O1CN01wOmeOT22eutGnMlNN_!!35517146-0-lubanu-s.jpg_468x468q75.jpg_.webp",
            title: "春之祭原创小众少女风日系连衣裙",
            price: "¥160",
          },
          {
            url: "http://img.alicdn.com/bao/uploaded/i4/373645371/O1CN015LEODb1pXxuDKrJp5_!!373645371.jpg_468x468q75.jpg_.webp",
            title: "公主戎装 左轮枪模型",
            price: "¥79",
          },
          {
            url: "http://img.alicdn.com/bao/uploaded/i1/830055817/O1CN01aJIWK91sqEWQCrJaL_!!830055817-0-lubanu-s.jpg_468x468q75.jpg_.webp",
            title: "【现货】魔法茶会【心愿】原创可爱洛丽塔洋装",
            price: "¥160",
          },
          {
            url: "http://img.alicdn.com/bao/uploaded/i2/1629657110/O1CN01zOZS8X22OQd1TpzC3_!!1629657110-0-lubanu-s.jpg_468x468q75.jpg_.webp",
            title: "海军JK制服水手服宽松收腰夏",
            price: "¥158",
          },
        ],
      },
    };
  },
  created() { },
};
</script>

<style scoped>
/* .shop-main-box {
} */
.division-box {
  background: #fff;
  border-radius: 4px;
  margin-bottom: 30px;
  border:1px solid #ececec;
}

.recommend-box {
  display: flex;
}

.clothes-recommend {
  flex: 15;
}

.sketches-recommend {
  flex: 15;
}

.recommend-goods-box {
  display: flex;
}

.recommend-goods-left {
  flex: 3;
}

.recommend-goods-right {
  flex: 7;
}
.recommend-goods-right-span{
  margin: 10px;
}
</style>