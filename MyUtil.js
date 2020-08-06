constrp=require('request-promise');
 
functionmake_api_call(UUURL){
returnrp({
uri: `${UUURL}`,
method: 'GET',
auth: {
user: `DK2WEBPURREQ`,
pass: `shoal-3HkbHON`,
        },  
timeout: 99999999,  
rejectUnauthorized: false
    })
}
 
asyncfunctionprocessUsers(){
letresult;
varskipCount=0;
vartopCount=1;
var_topCount=1;
 
for(leti=1; i<3; i++){
constrest=`https://10.148.23.42:22008/sap/opu/odata/sap/YMM_MATERIALS_CDS/YMM_MATERIALS?$format=json`;
letappender=`&$top=${topCount}&$skip=${skipCount}`;
varmyURL=``;
myURL=rest;
myURL=myURL+appender;

console.log("FInal URL ===> " , myURL);

result=awaitmake_api_call(myURL); 
//console.log(result);
 
letjson=JSON.parse(result);  
console.log(json.d.results);
 
skipCount=topCount;
topCount=topCount+_topCount;
    }
// return user_list;
}
asyncfunctiondoTask(){
letresult=awaitprocessUsers();
   }
 
doTask();
 
// var apiOptions = {
//     uri: "https://10.148.23.42:22008/sap/opu/odata/sap/YMM_MATERIALS_CDS/YMM_MATERIALS?$format=json",
//     method: 'GET',
//     auth: {
//         user: `DK2WEBPURREQ`,
//         pass: `shoal-3HkbHON`,
//     },  
//     timeout: 99999999, // Miliseconds  
//     rejectUnauthorized: false
// }; 




 
// var skipCount = 0;
// var topCount = 1;
// var _topCount = 1;
 
// for (i = 1; i <= 3; i++) {
//         let appender = `&$top=${topCount}&$skip=${skipCount}`;
//         myURL = ``;
//         var myURL = apiOptions.uri;
 
//         //apiOptions.uri = ""; 
//         myURL = myURL + appender;

//         skipCount = topCount;
//         topCount = topCount + _topCount;

//     console.log(myURL);

// }

 

