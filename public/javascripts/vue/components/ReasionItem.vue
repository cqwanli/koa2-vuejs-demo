<template>
    <svg  @load="startTheAnimation()" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 222 280" style="enable-background:new 0 0 222 280;" xml:space="preserve">
<g>
	<g>
		<path class="item-outline" d="M119.4,224.3c-4.8,2.8-12.6,2.8-17.3,0l-77.8-44.8c-4.8-2.7-8.7-9.5-8.7-15l0.1-89.8
			c0-5.5,3.9-12.2,8.7-15l77.9-45c4.8-2.8,12.6-2.8,17.3,0l77.8,44.8c4.8,2.7,8.7,9.5,8.7,15l-0.1,89.8c0,5.5-3.9,12.2-8.7,15
			L119.4,224.3z"/>
	</g>
	<g>
		<path class="item-inner-fill" d="M117.7,207.3c-3.8,2.2-10,2.2-13.9,0l-65.7-37.9c-3.8-2.2-6.9-7.6-6.9-12l0.1-75.8
			c0-4.4,3.1-9.8,6.9-12l65.8-38c3.8-2.2,10-2.2,13.9,0l65.7,37.9c3.8,2.2,6.9,7.6,6.9,12l-0.1,75.8c0,4.4-3.1,9.8-6.9,12
			L117.7,207.3z"/>
		<path class="item-inner-stroke" d="M117.7,207.3c-3.8,2.2-10,2.2-13.9,0l-65.7-37.9c-3.8-2.2-6.9-7.6-6.9-12l0.1-75.8
			c0-4.4,3.1-9.8,6.9-12l65.8-38c3.8-2.2,10-2.2,13.9,0l65.7,37.9c3.8,2.2,6.9,7.6,6.9,12l-0.1,75.8c0,4.4-3.1,9.8-6.9,12
			L117.7,207.3z"/>
	</g>
	<g>
		<path v-bind:class="['stroke-ani',step1?'stroke-step1':'',step2?'stroke-step2':'']" d="M117.5,205.1c-3.8,2.2-10.1,2.2-13.9,0l-63.8-36.7c-3.8-2.2-6.9-7.6-6.9-12l0.2-73.6
			c0-4.4,3.1-9.8,6.9-12l64.1-37c3.8-2.2,10.1-2.2,13.9,0l63.8,36.7c3.8,2.2,6.9,7.6,6.9,12l-0.2,73.6c0,4.4-3.1,9.8-6.9,12
			L117.5,205.1z"/>
	</g>
</g>
<g id="circles">
	<circle  class="circle-1" cx="110.8" cy="38.1" r="8"/>
	<circle  class="circle-1" cx="110.8" cy="201.1" r="8"/>
</g>

	<g>
		<path  class="quxian" d="M154.2,139.2c0,0,0,1.2,0,2.7c0,1.5-2.3,4.1-5.2,5.7l-32.9,19c-2.9,1.6-7.5,1.6-10.4,0
			l-33-19.2c-2.9-1.7-5.2-4-5.2-5.3c0-1.2,0-2.3,0-2.3"/>
	</g>

<g>
	<path  class="r-icon" d="M128.6,88.6c-4.5-2.2-11-3.3-18.1-3.3c-7.1,0-13.6,1.1-18.1,3.3c-5.2,2.6-7.8,5.5-7.8,9.2v34.3
		c0,3.3,2.6,6.6,7.8,8.8c4.5,2.2,11,3.3,18.1,3.3c7.1,0,13.6-1.1,18.1-3.3c4.8-2.2,7.8-5.5,7.8-8.8V97.8
		C136.3,94.1,133.7,91.2,128.6,88.6L128.6,88.6z M125.6,103.7c-4.2,1.8-10,2.6-15.2,2.6c-5.5,0-11-0.7-15.2-2.6
		c-4.9-1.5-7.1-3.7-7.1-5.9c0-2.2,2.6-4.4,7.1-6.3c4.2-1.8,9.7-2.6,15.2-2.6c5.2,0,11,1.1,15.2,2.6c4.5,1.8,7.1,4.1,7.1,6.3
		C132.8,100,130.5,102.2,125.6,103.7L125.6,103.7z M126,114.4c-4.2,1.5-10,2.6-15.5,2.6c-5.5,0-11-1.1-15.5-2.6
		c-4.5-1.8-7.1-4.1-7.1-6.3v-4.1c3.2,1.5,5.5,3.3,9.1,4.1c4.2,1.1,8.7,1.8,13.6,1.8c4.8,0,9.4-0.7,13.6-1.8c3.6-0.7,5.8-2.6,9.1-4.1
		v4.4C133.1,110.3,130.5,112.5,126,114.4L126,114.4z M126,126.2c-4.2,1.5-10,2.6-15.5,2.6c-5.5,0-11-1.1-15.5-2.6
		c-4.5-1.5-7.1-3.7-7.1-6.3v-5.5c3.2,1.8,5.5,3.3,9.1,4.4c4.2,1.1,8.7,1.8,13.6,1.8c4.8,0,9.4-0.7,13.6-1.8c3.6-1.1,5.8-2.6,9.1-4.4
		v5.5C133.1,122.5,130.5,124.7,126,126.2L126,126.2z M110.4,140.5c-5.5,0-11-1.1-15.5-2.6c-4.5-1.5-7.1-3.7-7.1-6.3v-5.5
		c3.2,1.8,5.5,3.3,9.1,4.4c3.9,1.1,8.7,1.8,13.3,1.8c4.9,0,9.4-0.7,13.6-1.8c3.9-1.1,6.1-2.6,9.4-4.4v5.5c0,2.2-2.6,4.4-7.1,6.3
		C121.8,139.8,115.6,140.5,110.4,140.5L110.4,140.5z M110.4,140.5"/>
</g>
<g id="content">
    <text transform="matrix(1 0 0 1 33 265.667)" class="item-title">存储更方便</text>
	<line id="XMLID_31_" class="st11" x1="0" y1="275.5" x2="220" y2="275.5"/>
	<circle id="XMLID_32_" class="circle-2" cx="218" cy="275.5" r="4"/>
</g>
</svg>
</template>
<script type="text/ecmascript-6">
    export default {
        name: "reasion-item",
        props: ['addTurns'],
        data: function () {
            return {
                step1: false,
                step2: false
            }
        },
        methods: {
            startTheAnimation(){
                this.step1 = true;
                setTimeout(()=> {
                    this.step1 = false;
                    this.step2 = true;
                }, 3500 + 200 * parseInt(this.addTurns));
            }
        }
    }

    //    document.querySelector('.st11').getTotalLength()
</script>
<style lang="less" rel="stylesheet/less">
    @width: 0.01rem;
    @height: 0.01rem;
    .item-outline {
        opacity: 0.4;
        fill: none;
        stroke: #40D5D7;
        stroke-width: 2;
        stroke-miterlimit: 10;
        opacity: 0;
    }

    .itemOutlineMaker(@counter) when (@counter < 5) {
        .svg-item-@{counter} {
            .item-outline {
                animation: itemOutlineAnimation 1s ease-in-out (2s+0.2*@counter) forwards;
            }
        }
        .itemOutlineMaker(@counter+1);
    }

    .itemOutlineMaker(1);

    @keyframes itemOutlineAnimation {
        0% {
            opacity: 1;
            stroke-dasharray: 108 108;
            stroke-dashoffset: 0;
        }
        99% {
            opacity: 1;
            stroke-dasharray: 108 108;
            stroke-dashoffset: -1294;
        }
        100% {
            opacity: 1;
        }
    }



    .item-inner-fill {
        opacity: 0.3;
        fill: #40D5D7;
    }

    .item-inner-stroke {
        opacity: 0.8;
        fill: none;
        stroke: #3BB7B9;
        stroke-miterlimit: 10;
    }

    .stroke-ani {
        fill: none;
        stroke: #40D5D7;
        stroke-width: 4;
        stroke-miterlimit: 10;
        stroke-dasharray: 0 529;
        stroke-dashoffset: 88;
    }

    .stroke-step1 {

    }

    @keyframes strokeStep1Animation {
        0% {
            stroke-dasharray: 0 529;
            stroke-dashoffset: 88;
        }
        30% {
            stroke-dasharray: 88 441;
            stroke-dashoffset: 132;
        }
        100% {
            stroke-dashoffset: -926;
            stroke-dasharray: 88 441;
        }

    }

    @keyframes strokeStep2Animation {
        from {
            stroke-dasharray: 88 441;
            stroke-dashoffset: 132;
        }
        to {
            stroke-dasharray: 88 441;
            stroke-dashoffset: -397;
        }
    }

    .strokeStep1Builder(@counter) when (@counter <5) {
        .svg-item-@{counter} {
            .stroke-step1 {
                animation: strokeStep1Animation 1.5s linear (2s+0.2*@counter) forwards;
            }
        }
        .strokeStep1Builder(@counter+1);
    }

    .strokeStep1Builder(1);
    .stroke-step2 {
        animation: strokeStep2Animation 2s linear infinite;
    }

    .circle-1 {
        fill: #40D5D7;
        animation: shineAnimation 1s ease-in-out 2.5s forwards;
    }

    .quxian {
        fill: none;
        stroke: #39E1EB;
        stroke-miterlimit: 10;
    }

    .r-icon {
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: #3BF3FF;
    }

    .item-title {
        fill: #3BF3FF;
        font-family: 'AdobeHeitiStd-Regular-GBpc-EUC-H';
        font-size: 32px;
        opacity: 0;
        animation: opacityInAnimation .3s ease-in 3.5s forwards;
    }

    @keyframes opacityInAnimation {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes lineDashAnimation {
        from {
            stroke-dasharray: 0 220;
        }
        to {
            stroke-dasharray: 220 0;
        }
    }
    .st11 {
        fill: none;
        stroke: #40D5D7;
        stroke-miterlimit: 10;
        stroke-dasharray: 0 220;
        animation: lineDashAnimation .5s linear 3.8s forwards;
    }

    .circle-2 {
        fill: #40D5D7;
        opacity: 0;
        animation: opacityInAnimation .5s linear 4.3s forwards;
    }
</style>