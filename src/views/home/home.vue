<template>
    <div class="home-box">
        <div class="home-header-box">
            <headerbox></headerbox>
        </div>
        <aside class="aside">
            <div class="aside-box">
                <div class="aside-item pointer-box"><el-icon color="#fff" size="30px"><HomeFilled /></el-icon><div>主页</div></div>
                <div class="aside-item pointer-box"><el-icon color="#fff" size="30px"><Search /></el-icon><div>搜索</div></div>
                <div class="aside-item pointer-box"><el-icon color="#fff" size="30px"><GoodsFilled /></el-icon><div>购物车</div></div>
                <div class="aside-item pointer-box"><el-icon color="#fff" size="30px"><Avatar /></el-icon><div>我的</div></div>
            </div>
        </aside>
        <main>
            <component :is="homePage"></component>
        </main>
        <footer class="footer"> @2022-6-20 </footer>
    </div>
</template>
<script>
import headerbox from '@/components/HeaderBox.vue'
import shopMain from './shopMain.vue'
export default ({
    name: "home",
    components: {
        headerbox,
        shopMain,
    },
    data() {
        return {
            homePage:shopMain,
        }
    },
    created() {
    },
    methods: {
    },
    computed:{
    }
})
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
.footer{
    height: 40px;
    color: #aaa;
}
.home-box{
    display: -webkit-flex;
    display: flex;
    flex-direction:column;
    -webkit-align-items:center;
    align-items:center;
}
.home-box .home-header-box{
    width: 100%;
}
.home-box main{
    width:1140px;
    text-align: center;
}
</style>