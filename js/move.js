/**
 * Created by Administrator on 2016/7/5.
 */

function move(dom, property, target, fn){
    clearInterval(dom[property + "Timer"]);
    dom[property + "Timer"] = setInterval(function (){

        // if区分透明度和其他定位和宽高等px为单位的属性， 获取方式略有差异
        if(property == "opacity"){
            // 如果是透明度，则根据现有值转换成一个100以内的整数
            var current = Math.round(parseFloat(getStyle(dom, property))*100);
        } else {
            // px为单位的属性直接转换为一个整数
            var current = parseInt(getStyle(dom, property));
        }

        if (current === target){
            clearInterval(dom[property + "Timer"]);
            if(fn){
                fn();
            }
            //console.log(fn == true);
            return;
        }

        var dis = target - current;
        var speed = dis > 0? Math.ceil(dis/10) : Math.floor(dis/10);
        //console.log('speed: ' + speed);

        // 透明度和其他属性的设置方式不同
        if(property == "opacity"){
            // 透明度需要做一个兼容处理
            dom.style[property] = (current + speed) / 100;
            dom.style.filter = "alpha(opacity=" + (current + speed) + ")";
        } else {
            dom.style[property] = current + speed + 'px';
        }
    }, 30);
}

function getStyle(dom, property){
    if(dom.currentStyle){
        return dom.currentStyle[property];
        //console.log(dom.currentStyle[property]);
    } else {
        return getComputedStyle(dom)[property];
        //console.log(getComputedStyle(dom, false)[property]);
    }
}