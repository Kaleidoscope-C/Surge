/*
脚本功能：WolframAlpha Pro 解锁
软件版本：最新
下载地址：
脚本作者：Kaleidoscope-C
更新时间：2023.07.16
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

********************************

[rewrite_local]
# WolframAlpha Pro 解锁
^https:\/\/www\.wolframalpha\.com\/users\/me\/account\?appid=*$ url script-response-body https://raw.githubusercontent.com/Kaleidoscope-C/Surge/main/WolframAlpha.js

[mitm] 
hostname = www.wolframalpha.com
*
*
*/

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (obj.vip){
  obj.vip.pro = true;
}

$done({ body: JSON.stringify(obj) });
