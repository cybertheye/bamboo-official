import{u as E}from"./useTechProcessDataHook-724cc33a.js";import{d as y,u as k,c as x,o,b as i,e as s,f as e,t as c,g as C,p as F,h as N,r as f,B as Y,i as O,F as R,j as L,n as P,C as T,k as g,D as A,S as Z,E as q}from"./vendor-d62fb986.js";import{_ as G,a as H,H as J,b as K}from"./common-79004273.js";import{_ as Q,a as W,b as X,c as ee,d as se,e as te,f as oe,g as ie,h as ae,i as ce,j as ne,k as le,l as _e,m as de,n as re,o as ve,p as ue}from"./series_border-d07b2448.js";import{u as me}from"./index-965da7c6.js";const D=n=>(F("data-v-a9ae244a"),n=n(),N(),n),pe={class:"main-product"},he=D(()=>s("div",{class:"product-img-container"},[s("img",{class:"product-img",src:G,alt:"主图"})],-1)),ge={class:"product-text"},be={key:0,class:"title-zh-text"},xe={key:1,class:"title-rich-text"},fe={class:"title-text text-highlight"},ye={class:"title-text"},$e=D(()=>s("div",{class:"title-text"},"，",-1)),we={class:"title-text text-highlight"},Ie={class:"title-text"},ke={key:2,class:"title-en-text-container"},Me={class:"title-rich-text"},Se={class:"title-text text-highlight"},Ce={class:"title-text"},Pe={class:"title-rich-text"},Te={class:"title-text text-highlight"},He={class:"title-text"},Be=D(()=>s("div",{class:"divider"},null,-1)),je={class:"title-rich-text"},Ve={class:"sub-title-text"},Re={class:"sub-title-text text-highlight"},Le=y({__name:"MainProductImageMobile",setup(n){const{t,locale:l}=k(),_=x(()=>l.value=="zh");return(u,m)=>(o(),i("div",pe,[he,s("div",ge,[e(_)?(o(),i("div",be,c(e(t)("product.titleUppercase")),1)):C("",!0),e(_)?(o(),i("div",xe,[s("div",fe,c(e(t)("product.high")),1),s("div",ye,c(e(t)("product.accuracy")),1),$e,s("div",we,c(e(t)("product.no")),1),s("div",Ie,c(e(t)("product.leakage")),1)])):(o(),i("div",ke,[s("div",Me,[s("div",Se,c(e(t)("product.high")),1),s("div",Ce,c(e(t)("product.accuracy")),1)]),s("div",Pe,[s("div",Te,c(e(t)("product.no")),1),s("div",He,c(e(t)("product.leakage")),1)])])),Be,s("div",je,[s("div",Ve,c(e(t)("product.best")),1),s("div",Re,c(e(t)("product.quality")),1)])])]))}});const De=H(Le,[["__scopeId","data-v-a9ae244a"]]),ze={class:"preview-text"},Ae={class:"title"},Ee=["innerHTML"],Fe={class:"tag-img-container"},Ne=["src"],Oe=y({__name:"TechProcessTextMobile",props:{title:{},bodyHtml:{},tagSrc:{}},setup(n){const t=n;return(l,_)=>(o(),i("div",ze,[s("div",Ae,c(t.title),1),t.bodyHtml!=null?(o(),i("div",{key:0,class:"body-html",innerHTML:t.bodyHtml},null,8,Ee)):C("",!0),s("div",Fe,[s("img",{class:"tag-img",src:t.tagSrc,alt:"tag"},null,8,Ne)])]))}});const Ue={key:0,class:"preview-container-1"},Ye=["src"],Ze={key:1},qe=["src"],Ge=["src"],Je={class:"tabs"},Ke=["onClick"],Qe=["src"],We={key:0,class:"tag"},Xe={key:0,class:"video-tag",src:Q,alt:"tab-video-tag"},es={key:1,class:"video-tag",src:W,alt:"tab-video-tag"},ss=y({__name:"TechVideoIntroduceMobile",props:{model:{}},setup(n){const t=n,{locale:l}=k(),_=x(()=>l.value=="zh"),u=f(!1),m=()=>{u.value=!1},p=[],$=[];for(let a=0;a<t.model.medias.length;a++){const d=t.model.medias[a];d.video==null&&(p.push(d.img),$.push(d.enImg??d.img))}const w=x(()=>_?p:$),M=x(()=>{var a,d;return((a=v.value)==null?void 0:a.video)!==null?-1:w.value.indexOf((d=v.value)==null?void 0:d.img)}),b=f(0),v=x(()=>t.model.medias.length>0?t.model.medias[b.value]:null),B=()=>{u.value=!0},j=a=>{b.value=a},r=a=>new URL(Object.assign({"../assets/images/tech/01.png":X,"../assets/images/tech/02.png":ee,"../assets/images/tech/03.png":se,"../assets/images/tech/04.png":te,"../assets/images/tech/04_en.png":oe,"../assets/images/tech/05.jpg":ie,"../assets/images/tech/video_01.jpg":ae,"../assets/images/tech/video_02.jpg":ce,"../assets/images/tech/video_03.jpg":ne,"../assets/images/tech/video_04.jpg":le})[`../assets/images/tech/${a}`],self.location).href,z=a=>new URL(Object.assign({"../assets/videos/01.mp4":_e,"../assets/videos/02.mp4":de,"../assets/videos/03.mp4":re,"../assets/videos/04.mp4":ve})[`../assets/videos/${a}`],self.location).href,S=me();return Y(()=>{S.reloadIpInfo()}),(a,d)=>{const I=O("vue-easy-lightbox");return o(),i("div",{class:P(t.model.textAlignmentStart?"preview-media-container":"preview-media-container preview-media-container-alignment-end")},[e(v)!==null?(o(),i("div",Ue,[e(v).video?(o(),i("div",Ze,[e(S).canAccessYouTubeVideo?(o(),i("iframe",{key:1,class:"preview-video",src:e(v).embedYoutubeVideo,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,Ge)):(o(),i("video",{key:0,class:"preview-video",src:z(e(v).video),controls:""},null,8,qe))])):(o(),i("img",{key:0,onClick:B,class:"preview-img",src:r(e(_)?e(v).img:e(v).enImg??e(v).img),alt:"预览图片"},null,8,Ye))])):C("",!0),s("div",Je,[(o(!0),i(R,null,L(t.model.medias,(h,V)=>(o(),i("div",{class:P(V==e(b)?"tab-item tab-item-active":"tab-item"),onClick:ws=>j(V)},[s("img",{class:"tab-img",src:r(e(_)?h.img:h.enImg??h.img),alt:"tab"},null,8,Qe),h.video?(o(),i("div",We,[V==e(b)?(o(),i("img",Xe)):(o(),i("img",es))])):C("",!0)],10,Ke))),256))]),e(_)?(o(),T(I,{key:1,visible:e(u),imgs:p.map(h=>r(h)),index:e(M),onHide:m},null,8,["visible","imgs","index"])):(o(),T(I,{key:2,visible:e(u),imgs:$.map(h=>r(h)),index:e(M),onHide:m},null,8,["visible","imgs","index"]))],2)}}});const ts=H(ss,[["__scopeId","data-v-4404f1c3"]]),os={class:"preview-container"},is={class:"step-container"},as=["src"],cs={class:"preview-right"},ns=y({__name:"TechProcessPreviewMobile",props:{model:{}},setup(n){const t=n;return k(),(l,_)=>(o(),i("div",os,[s("div",is,[s("img",{class:"step-img",src:l.model.stepSrc,alt:"步骤"},null,8,as)]),s("div",{class:P(l.model.isLast?"divider hidden":"divider")},null,2),s("div",cs,[g(ts,{model:l.model},null,8,["model"]),g(Oe,{title:t.model.title,"body-html":t.model.content,"tag-src":t.model.tagSrc},null,8,["title","body-html","tag-src"])])]))}});const ls=H(ns,[["__scopeId","data-v-45010e94"]]),U=n=>(F("data-v-8ea007d0"),n=n(),N(),n),_s={class:"series-banner-container"},ds={class:"title-text"},rs=U(()=>s("div",{class:"bottom-border"},null,-1)),vs=U(()=>s("img",{class:"border-img stack-child",src:ue,alt:"边框"},null,-1)),us={class:"stack-child banner-img-container"},ms=["src"],ps={class:"text"},hs={class:"page-control"},gs=y({__name:"SeriesBannerMobile",setup(n){const{t}=k(),l=f(null),_=x(()=>l.value==null?0:l.value.activeIndex),{seriesProductData:u}=E(),m=f(-1),p=f(-1),$=r=>{w.value=!0,p.value=r},w=f(!1),M=()=>{w.value=!1},b=r=>{m.value=r},v=r=>{m.value=-1},B=r=>{l.value=r},j=()=>{console.log("slide change")};return(r,z)=>{const S=O("vue-easy-lightbox");return o(),i("div",_s,[s("div",ds,[s("span",null,c(e(t)("series.title")),1),rs]),g(e(Z),{"slides-per-view":1,"space-between":20,class:"series-banner-swiper-container",onSwiper:B,onSlideChange:j},{default:A(()=>[(o(!0),i(R,null,L(e(u),(a,d)=>(o(),T(e(q),{class:P(d==e(m)?"series-banner-item series-banner-item-highlight":"series-banner-item"),onClick:I=>$(d),onMouseenter:I=>b(d),onMouseleave:I=>v(d)},{default:A(()=>[vs,s("div",us,[s("img",{class:"banner-img",src:a.img,alt:"产品系列图片"},null,8,ms)]),s("div",ps,c(a.name),1)]),_:2},1032,["class","onClick","onMouseenter","onMouseleave"]))),256))]),_:1}),s("div",hs,c(e(_)+1)+" / "+c(e(u).length),1),g(S,{visible:e(w),imgs:e(u).map(a=>a.detailImg),index:e(p),onHide:M},null,8,["visible","imgs","index"])])}}});const bs=H(gs,[["__scopeId","data-v-8ea007d0"]]),xs={class:"home-page"},fs={class:"content"},ys={class:"tech-preview-timeline"},$s={class:"timeline-title"},Ps=y({__name:"CompanyHomeMobile",setup(n){const{t,locale:l}=k(),{techProcessData:_}=E();return(u,m)=>(o(),i("div",xs,[g(J,{"show-about-us":!0,"show-tech-intro":!1}),s("div",fs,[g(De)]),s("div",ys,[s("div",$s,c(e(t)("tech.title")),1),(o(!0),i(R,null,L(e(_),p=>(o(),T(ls,{model:p},null,8,["model"]))),256))]),g(bs),g(K)]))}});export{Ps as default};
