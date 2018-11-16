<template>
    <div class="searchBox">
        <div class="search_c">
            <input type="text" class="sf" value="找找TA吧...">
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
.searchBox{
    z-index: 10;
    width: 100%;
    height: 1.2rem;
    background: #faf7f9;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0.88rem;
    left: 0;
}
.searchBox .search_c .sf{
    display: flex;
    width: 7.02rem;
    height: .82rem;
    line-height: .82rem;
    font-size:.32rem;
    text-indent: 13%; 
    border-radius: 84px;
    background-color:#27d1d0; 
    background-image:url('../../../static/icon/-tong-icon_search@2x.png');
    background-size:  .44rem .44rem;
    background-position: .3rem .2rem;
    background-repeat: no-repeat; 
    color: #fff;
}
</style>
