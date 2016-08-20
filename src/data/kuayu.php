<?php
header('Content-type: application/json');
//获取回调函数名
$jsoncallback = htmlspecialchars($_REQUEST ['jsoncallback']);
//json数据
$json_data = '[

{
    "title":"轻轻地我来了",
            "price":"100",

            "url":"http://p9.qhimg.com/dr/180_180_/t01e8955fa90a996e82.png",

            "date":" 07-20上新"
},
{
    "title":"正如我轻轻地走",
            "price":"100",
            "url":"http://img.zcool.cn/community/031e72e57735ccf0000012e7e4fa9fe.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"我轻轻地招手",
            "price":"100",
            "url":"http://img.zcool.cn/community/03118ee5773285b0000012e7e13e7cc.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
}
,
{
    "title":"作别西天的云彩",
            "price":"100",
            "url":"http://img.zcool.cn/community/0314f9d577372cc0000012e7e8477eb.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品12",
            "price":"100",
            "url":"http://img.zcool.cn/community/031ff3a5773ef150000012e7e56a5a0.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
}
,
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/03181ba5774b5820000018c1bb97d3e.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品10",
            "price":"100",

            "url":"http://img.zcool.cn/community/031e2bb57736c140000012e7e132431.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/031e72e57735ccf0000012e7e4fa9fe.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品12",
            "price":"100",
            "url":"http://img.zcool.cn/community/03118ee5773285b0000012e7e13e7cc.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
}
,
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/0314f9d577372cc0000012e7e8477eb.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品12",
            "price":"100",
            "url":"http://img.zcool.cn/community/031ff3a5773ef150000012e7e56a5a0.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
}
,
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/03181ba5774b5820000018c1bb97d3e.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
}
,
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/0314f9d577372cc0000012e7e8477eb.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品12",
            "price":"100",
            "url":"http://img.zcool.cn/community/031ff3a5773ef150000012e7e56a5a0.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
}
,
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/03181ba5774b5820000018c1bb97d3e.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/0314f9d577372cc0000012e7e8477eb.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品12",
            "price":"100",
            "url":"http://img.zcool.cn/community/031ff3a5773ef150000012e7e56a5a0.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
}
,
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/03181ba5774b5820000018c1bb97d3e.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
}
,
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/0314f9d577372cc0000012e7e8477eb.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品12",
            "price":"100",
            "url":"http://img.zcool.cn/community/031ff3a5773ef150000012e7e56a5a0.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
}
,
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/03181ba5774b5820000018c1bb97d3e.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/0314f9d577372cc0000012e7e8477eb.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品12",
            "price":"100",
            "url":"http://img.zcool.cn/community/031ff3a5773ef150000012e7e56a5a0.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
}
,
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/03181ba5774b5820000018c1bb97d3e.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/0314f9d577372cc0000012e7e8477eb.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品12",
            "price":"100",
            "url":"http://img.zcool.cn/community/031ff3a5773ef150000012e7e56a5a0.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
}
,
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/03181ba5774b5820000018c1bb97d3e.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/0314f9d577372cc0000012e7e8477eb.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
},
{
    "title":"商品12",
            "price":"100",
            "url":"http://img.zcool.cn/community/031ff3a5773ef150000012e7e56a5a0.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
}
,
{
    "title":"商品11",
            "price":"100",
            "url":"http://img.zcool.cn/community/03181ba5774b5820000018c1bb97d3e.jpg@250w_188h_1c_1e_2o",

            "date":" 07-20上新"
}

]';
//输出jsonp格式的数据
echo $jsoncallback . "(" . $json_data . ")";
?>

