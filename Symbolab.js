/*
脚本功能：Symbolab Pro 解锁
软件版本：最新
下载地址：https://apps.apple.com/cn/app/symbolab%E8%AE%A1%E7%AE%97%E5%99%A8/id876942533
脚本作者：Kaleidoscope-C
更新时间：2023.07.16
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

********************************

[rewrite_local]

# Symbolab 解锁订阅
^https?:\/\/scibug\.com\/appleSubscriptionValidate$ url script-response-body https://raw.githubusercontent.com/Kaleidoscope-C/Surge/main/Symbolab.js

[mitm] 

hostname = scibug.com
*
*
*/


let obj = JSON.parse($response.body);

obj= {
       "valid":true,
       "hasUserConsumedAppleFreeTrial":false,
       "isCurrentlyInFreeTrial":false,
       "newlyAssociated":false
}

$done({body: JSON.stringify(obj)});
