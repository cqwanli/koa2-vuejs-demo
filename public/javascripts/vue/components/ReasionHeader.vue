<template>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 360 76" style="enable-background:new 0 0 360 76;" xml:space="preserve">
<g>
    <path id="XMLID_22_" class="sexangle1" d="M24.1,40.9c-0.5,0.3-1.3,0.3-1.7,0L8.5,33c-0.5-0.3-0.9-0.9-0.9-1.5l0-15.9
			c0-0.5,0.4-1.2,0.9-1.5l13.9-8c0.5-0.3,1.3-0.3,1.7,0L38,14c0.5,0.3,0.9,0.9,0.9,1.5l0,15.9c0,0.5-0.4,1.2-0.9,1.5L24.1,40.9z"/>
    <path id="XMLID_23_" class="sexangle2" d="M24.2,45.7c-0.5,0.3-1.3,0.3-1.7,0L5.1,35.5c-0.5-0.3-0.9-1-0.9-1.5L4.1,13.8
			c0-0.5,0.4-1.2,0.9-1.5l17.3-10c0.5-0.3,1.3-0.3,1.7,0l17.4,10.2c0.5,0.3,0.9,1,0.9,1.5l0.1,20.2c0,0.5-0.4,1.2-0.9,1.5L24.2,45.7
			z"/>
	<text  transform="matrix(1 0 0 1 11.6665 33)" class="six-text">？</text>
</g>
<g>
	<text  transform="matrix(1 0 0 1 47.0959 32.7096)" class="rea-title">选择云存储的4大理由</text>
</g>
<g>
	<line  class="first-line" x1="6" y1="47.5" x2="353" y2="47.5"/>
    <polyline id="st8" class="poly-line" points="124,53.5 165,53.5 174,63.5 183,53.5 224,53.5 	"/>
</g>
</svg>
</template>

<script>
    export default {
        name: "reasion-header"
    }
//    document.querySelector("#st8").getTotalLength();
</script>

<style lang="less" rel="stylesheet/less">
    @width: 0.01rem;
    @height: 0.01rem;
    .sexangle1 {
        fill: #FFFFFF;
        transform-origin:50% 50%;
        animation:sexangleLogo 1s ease-in-out .5s forwards;
        opacity: 0;
    }

    .sexangle2 {
        fill: none;
        stroke: #dddddd;
        stroke-miterlimit: 10;
        stroke-dasharray: 22 109.5;
        stroke-width:2;
        transform-origin:50% 50%;
        animation:sexangleLogoOutline 1s ease-in-out .5s forwards;
        opacity: 0;
    }
    .six-text{
        font-family: 'MicrosoftYaHei';
        font-size: 24px;
        letter-spacing: 2*@width;
        opacity: 0;
        animation:opacityAnimation 1s ease-in-out .5s forwards;
    }
    .rea-title{
        opacity: 0;
        font-family: 'MicrosoftYaHei';
        fill: #FFFFFF;
        font-size: 28px;
        letter-spacing: 3px;
        animation:opacityAnimation 1s ease-in-out .5s forwards;
    }

    .first-line {
        fill: #3BF3FF;
        stroke: #00FFFF;
        stroke-miterlimit: 10;
        stroke-dasharray: 0 347;
        animation:firstLineAnimation .5s ease-in-out 1.5s forwards;
    }

    .poly-line {
        fill: none;
        stroke: #00FFFF;
        stroke-miterlimit: 10;
        stroke-dasharray: 0 109;
        animation: secondLineAnimation .2s ease-in-out 2s forwards ;
    }
    @keyframes opacityAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes sexangleLogo {
        0% {
           transform: rotate(0);
            opacity: 0;
        }
        10%{
            transform: rotate(6deg);
            opacity: 1;
        }
        100% {
            transform: rotate(60deg);
            opacity: 1;
        }
    }
    @keyframes sexangleLogoOutline {
        0% {
            opacity: 0;
            transform: rotate(0);
            stroke-dashoffset:0;
        }
        99% {
            transform: rotate(60deg);
            stroke-dashoffset:-263;
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
    @keyframes firstLineAnimation {
        0%{
            stroke-dasharray: 0 347;
        }
        100%{
            stroke-dasharray: 347 0;
        }
    }
    @keyframes secondLineAnimation {
        0%{
            stroke-dasharray: 0 109;
        }
        100%{
            stroke-dasharray: 109 0;
        }
    }
</style>