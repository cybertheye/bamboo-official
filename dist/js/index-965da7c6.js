import{l as d,m as g,r as _,d as y,b as v,k as E,i as A,o as b,q as I,s as P,x as w,y as L,z as T,A as C,N as H}from"./vendor-d62fb986.js";import{e as O}from"./common-79004273.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const R=()=>({isChinaIpAddress:async o=>{const t=`https://opendata.baidu.com/api.php?query=${o}&co=&resource_id=6006&oe=utf8`;try{const s=(await d.get(t)).data;if(console.log(s.data),s.code===0&&["CN","HK","TW"].includes(s.data.country_id))return!0}catch(e){console.error("Error fetching IP information:",e)}return!1},getCurrentIp:async()=>{const o="https://api.ipify.org/?format=json";try{return(await d.get(o)).data.ip}catch{return null}},canAccessYouTube:async()=>{try{const o=await fetch("https://www.youtube.com/favicon.ico",{method:"HEAD",mode:"no-cors"});return console.log(`response-${o}`),o.ok}catch(o){return console.log(`e-${o}`),!1}}}),{canAccessYouTube:N}=R(),k=g("ipAddress",()=>{const r=_(!1);return{reloadIpInfo:async()=>{try{r.value=await N(),console.log(`是否可以访问youtube ${r.value}`)}catch(a){console.log(`e-${a}`),r.value=!1,console.log(`是否可以访问youtube ${r.value}`)}},canAccessYouTubeVideo:r}}),D={class:"container"},$=y({__name:"App",setup(r){return k(),(n,a)=>{const o=A("router-view");return b(),v("div",D,[E(o)])}}}),S="modulepreload",V=function(r){return"/"+r},m={},i=function(n,a,o){if(!a||a.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(a.map(e=>{if(e=V(e),e in m)return;m[e]=!0;const s=e.endsWith(".css"),f=s?'[rel="stylesheet"]':"";if(!!o)for(let l=t.length-1;l>=0;l--){const u=t[l];if(u.href===e&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":S,s||(c.as="script",c.crossOrigin=""),c.href=e,document.head.appendChild(c),s)return new Promise((l,u)=>{c.addEventListener("load",l),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n()).catch(e=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=e,window.dispatchEvent(s),!s.defaultPrevented)throw e})},p=/Mobi|Android|iPhone/i.test(navigator.userAgent),B=[{path:"/",redirect:{path:"/home"},children:[{path:"/:pathMatch(.*)*",component:()=>i(p?()=>import("./CompanyHomeMobile-a71446b4.js"):()=>import("./CompanyHome-d120a558.js"),["js/CompanyHome-d120a558.js","js/common-79004273.js","js/vendor-d62fb986.js","css/vendor-0705b292.css","css/common-4c4d6c5c.css","js/series_border-d07b2448.js","js/useTechProcessDataHook-724cc33a.js","css/CompanyHome-ce0a0f69.css"])}]},{path:"/home",name:"home",component:()=>i(p?()=>import("./CompanyHomeMobile-a71446b4.js"):()=>import("./CompanyHome-d120a558.js"),["js/CompanyHome-d120a558.js","js/common-79004273.js","js/vendor-d62fb986.js","css/vendor-0705b292.css","css/common-4c4d6c5c.css","js/series_border-d07b2448.js","js/useTechProcessDataHook-724cc33a.js","css/CompanyHome-ce0a0f69.css"])},{path:"/about_us",name:"about_us",component:()=>i(p?()=>import("./AboutUsMobile-09598b4c.js"):()=>import("./AboutUs-e357e8ed.js"),["js/AboutUs-e357e8ed.js","js/vendor-d62fb986.js","css/vendor-0705b292.css","js/common-79004273.js","css/common-4c4d6c5c.css","js/useTechProcessDataHook-724cc33a.js","css/AboutUs-2484cd1a.css"])}],U=I({history:P("/"),routes:[...B]}),W={aboutUs:"关于我们",interest:"感兴趣",techIntro:"技术介绍",companyName:"公司名称",address:"公司地址",phone:"公司电话",email:"公司邮箱",send:"发送",emailPlaceholder:"请编辑您的电子邮件…",addWechat:"添加微信",emailTitlePlaceholder:"询问并结交朋友…",wechat:"公司微信",clickDetail:"查看详情"},q={name:"台州斑驳机电有限公司",address:"浙江省台州市温岭市大溪镇曹岙村（温岭市大溪镇曹岙村股份经济合作社内5幢1楼）",mobile:"+86 187 6812 4695"},z={titleUppercase:"HIGH ACCURACY, NO LEAKAGE",high:"高",accuracy:"精度",no:"不",leakage:"泄漏",best:"支持",quality:"定制"},Y={title:"主要加工工艺",process1:"箱体加工",process1Html:"为<span class='highlight'>保证精度</span>，所有箱体均使用<span class='highlight'>卧式加工中心</span>进行精加工，加工完成后测量每个箱体的同心度，以及轴承位置公差，<span class='highlight'>淘汰残次品</span>",process2:"气密性测试",process2Html:"经过加工中心加工后，为保证后续使用过程<span class='highlight'>不漏油、不漏水</span>，每个箱体通过专门设备打压试水，进行<span class='highlight'>气密性测试</span>，所有半成品<span class='highlight'>全检，</span><span class='highlight'>淘</span><span class='highlight'>汰</span><span class='highlight'>残</span><span class='highlight'>次</span><span class='highlight'>品</span>",process3:"端盖加工",process3Html:"为了防止机油从两边溢出，端盖使用骨架油封+回油槽+甩油环的结构，详见图解",process4:"主轴加工",process4Html:"主轴材质默认为45#钢，先用车床初步加工，然后再进-步用磨床加工以达到精度要求",process5:"整体组装"},x={title:"现有产品线",series1:"H系列水冷",series2:"H系列油冷",series3:"GH系列水冷",series4:"LK系列油冷",series5:"JZ系列油冷"},K={title:"公司简介",subTitle:"我们只专注生产风机轴承箱",content1:'台州斑驳机电有限公司是一家专业生产风机轴承箱的企业,公司位于有“中国水泵之乡”称号的工业强镇--大溪镇。长期以来,公司潜心研究,以更专业的技术,更巨大的投入及不断的创新来面对市场的竞争。本公司一直坚持"以质量求生存,以科技求发展”的经营方针,诚信的经营理念是斑驳机电的目标，本公司研发的一种节油型轴承箱荣获实用新型专利证书。',content2:"我工厂与多家台州公司建立了长期稳定的合作关系,重信用、守合同、保证产品质量,赢得了广大客户的信任，工厂全力跟随客户需求,不断进行产品创新和服务改进。",content3:"为了尽量延长轴承箱的使用寿命，需要在其内部加注机械油以润滑轴承，但我们发现，加注机油的过程其实相当漫长，且使用的机油量也很大，于是针对这一方面我司研发出了一种节油型的轴承箱构造，并已申请实用专利，该技术是通过改变箱体构造（在箱体底部增设台阶，将所加注的机油锁定在两端轴承附近；同时增加注油孔，将其位置移至两端），来达到减少机油使用量以及注油时间的目的，最终预计能减少50%的机油使用量和75%的注油时间。"},G={title:"资质证书",subTitle:"为了尽量延长轴承箱的使用寿命，需要在其内部加注机械油以润滑轴承，但我们发现，加注机油的过程其实相当漫长，且使用的机油量也很大，于是针对这一方面我司研发出了一种节油型的轴承箱构造，并已申请实用专利，该技术是通过改变箱体构造（在箱体底部增设台阶，将所加注的机油锁定在两端轴承附近；同时增加注油孔，将其位置移至两端），来达到减少机油使用量以及注油时间的目的，最终预计能减少50%的机油使用量和75%的注油时间。",cert1:"外观设计专利证书",cert2:"商标注册证",cert3:"实用新型专利证书"},M={common:W,company:q,product:z,tech:Y,series:x,introduce:K,cert:G},j=()=>{const n=(navigator.language||"en").split("-")[0];return n.startsWith("en")||n.startsWith("EN")?"en":"zh"},F=w({locale:j(),fallbackLocale:"zh",legacy:!1,messages:{en:O,zh:M}});L();const J=T(),h=C($);h.use(U).use(F).use(J);h.use(H);h.mount("#app");export{k as u};
