<template>
  <el-row :gutter="30">
    <el-col
      style="margin-bottom: 20px"
      v-for="data in clothes"
      :key="data"
      :span="6"
    >
      <el-card class="pointer-box" @click="goInfo('123')" shadow="hover" :body-style="{ padding: '10px' }">
        <el-image
          style="width: 100%; height: 200px"
          fit="cover"
          :src="data.url"
        />
        <div style="padding: 10px;text-align:left">
          <div style="overflow: hidden;" class="overflow" >{{ data.title }}</div>
        </div>
        <div style="text-align:left;font-size:10px;color:#aaa"><span>销量: 1890</span><span style="margin-left:14px">评价: 3144</span></div>
        <div style="text-align:right;font-size:24px;color:red;padding-right:6px">{{ data.price }}</div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
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
    };
  },
  created() {},
  methods:{
    goInfo(goodsId){
      this.$router.push({path: '/goodsInfo', query: { goodsId: goodsId }})
    }
  }
};
</script>

<style>
.overflow {
  width: 210px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
}
</style>
