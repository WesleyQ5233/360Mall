/*
* p11 jsonp
* */
function call(data) {

    var json = eval(data);
    //alert (json);
    var html = '';
    for (var i = 0; i < 15;i ++) {
        if(i<json.length){
            //console.log(i)
            html+='<li><a href="detail.html" target="_blank"><dl class="p11-dl"><dt><img src="'+json[i].url+'" alt=""></dt> ';
            html += '<dd class="title">'
            html += json[i].title;
            html += '</dd><dd class="price"><span><i>¥</i>';
            html += json[i].price;
            html += '</span>';
            html += json[i].date;
            html += '</dd></di></a></li>';
        }
    }
    //console.log(html);
    document.getElementById('p11-list').innerHTML=html;
}

/**
 * Created by my on 2016/7/19.
 */
window.onload = function () {
    /*
    * ajax 加载
    * */
    $(".index-header").load('../html/header.html');
    $(".index-footer").load('../html/footer.html');


    $(".cart-header").load('../html/header.html');
    $(".cart-footer").load('../html/footer.html');


    $(".list-header").load('../html/header.html');
    $(".list-footer").load('../html/footer.html');

    $(".detail-header").load('../html/header.html');
    $(".detail-footer").load('../html/footer.html');

    $(".pay-header").load('../html/header.html');
    $(".pay-footer").load('../html/footer.html');

/*
    $(".register-header").load('../html/header.html');
    $(".register-footer").load('../html/footer.html');

    $(".login-header").load('../html/header.html');
    $(".login-footer").load('../html/footer.html');
*/

}
