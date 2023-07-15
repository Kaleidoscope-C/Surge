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


let obj = JSON.parse($response.body);

obj= {
  "account" : {
    "status" : {
      "proLevel" : 1,
      "proForEducators" : false,
      "proForStudents" : false,
      "signedIn" : true,
      "hasError" : false,
      "error" : null,
      "pro" : true
    },
    "error" : null,
    "preferences" : {
      "dateFormat" : "Automatic",
      "location" : "Automatic",
      "dataFormat" : "Excel 97-2004",
      "contrast" : 0,
      "homepageShortcuts" : false,
      "resultsWidth" : 4,
      "country" : "Automatic",
      "soundFormat" : "mp3",
      "currency" : "Automatic",
      "updatedDate" : 1596536830000,
      "homepageHints" : 0,
      "imageFormat2d" : "gif",
      "id" : 6668195,
      "querySuggestion" : false,
      "homepageFavorites" : false,
      "createdDate" : 1596536830000,
      "error" : null,
      "hasError" : false,
      "updatedBy" : 0,
      "timezone" : "Automatic",
      "unitFormat" : 0,
      "queryHistory" : false,
      "keyboard" : 0,
      "imageFormat3d" : "format 1",
      "fontSize" : 0,
      "homepageBackground" : "blue-circles",
      "homepageHistory" : false,
      "homepageData" : false,
      "userId" : 9427751
    },
    "profilingSet" : null,
    "subscriptions" : {
      "billingDetails" : null,
      "primarySubscription" : null,
      "nextPaidSubscription" : null,
      "hasSubscriptions" : false,
      "nextSubscription" : null,
      "allSubscriptions" : [

      ],
      "hasError" : false,
      "error" : null
    },
    "links" : {
      "facebook" : null
    },
    "persona" : {
      "classification" : "Student",
      "resourceId" : {
        "userId" : 9427751,
        "productId" : 9
      },
      "source" : null
    },
    "permissions" : {
      "error" : null,
      "hasError" : false,
      "features" : {

      }
    },
    "hasError" : false,
    "info" : {
      "email" : "t906777942@gmail.com",
      "name" : "Jacky Chan",
      "hasError" : false,
      "error" : null
    }
  },
  "profilingSet" : null,
  "hasError" : false,
  "error" : null
}

$done({body: JSON.stringify(obj)});
