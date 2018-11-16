<template>
    <div id="b_button-com">
        <slot name="title"></slot>
    </div>
</template>


<style scoped>
    #b_button-com{
        position: fixed;
        bottom: .99rem;
        left: 1.25rem;
    }
    #b_button-com .btn{
        width:5rem;
        height:.8rem;
        line-height: .8rem;
        text-align: center;
        background:rgba(39,209,208,1);
        border-radius:.4rem;
        font-size:.3rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
    }
</style>



<script>
export default {

}
</script>