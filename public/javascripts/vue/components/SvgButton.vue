<template>
    <div class="svg-btn">
        <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 250 66" style="enable-background:new 0 0 250 66;" xml:space="preserve">
            <path  class="btn-path" d="M240,64H10c-4.4,0-8-3.6-8-8V10c0-4.4,3.6-8,8-8h230c4.4,0,8,3.6,8,8v46
                C248,60.4,244.4,64,240,64z"/>
        </svg>
        <a href="#">免费领取体验包</a>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: "svg-button"
    }

    //    document.querySelector('.btn-path').getTotalLength()
</script>
<style lang="less" rel="stylesheet/less">
    @width: 0.01rem;
    @height: 0.01rem;
    .btn-path {
        fill: none;
        stroke: #40D5D7;
        stroke-width: 2;
        stroke-miterlimit: 10;
        stroke-dasharray: 0 602;
        stroke-dashoffset: 301;
        animation: svgButtonStrokeAnimation .5s linear 4s forwards;
    }
    @keyframes svgButtonStrokeAnimation {
        from{
            stroke-dasharray: 0 602;
            stroke-dashoffset: 301;
        }
        to{
            stroke-dasharray: 602 0;
            stroke-dashoffset: 602;
        }
    }
    .svg-btn{
        display: block;
        width: 250*@width;
        height: 66*@height;
        position: relative;
        svg{
            position: absolute;
            top:0;
            left: 0;
            width: 250*@width;
            height: 66*@height;
        }
        a{
            color: white;
            font-size: 30*@width;
            line-height: 66*@height;
            position: absolute;
            display: block;
            margin-left: 20*@width;
            text-decoration: none;
            outline: none;
            opacity: 0;
            animation: opacityInAnimation .5s linear 4s forwards;
        }
    }
</style>