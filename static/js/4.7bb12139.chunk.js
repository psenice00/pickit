(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(e,t,a){e.exports=a.p+"static/media/map.9ee71bc0.png"},136:function(e,t,a){e.exports=a.p+"static/media/envelope.18815699.svg"},166:function(e,t,a){e.exports=a.p+"static/media/team.e3637226.svg"},167:function(e,t,a){e.exports=a.p+"static/media/bottom_bg.6835e221.svg"},168:function(e,t,a){e.exports=a.p+"static/media/top_bg.cfd4bd8d.svg"},169:function(e,t,a){e.exports=a.p+"static/media/snowCap.0b1d4beb.svg"},170:function(e,t,a){e.exports=a.p+"static/media/tablet.edf050b4.webp"},171:function(e,t,a){e.exports=a.p+"static/media/fridge.91382bd5.webp"},172:function(e,t,a){e.exports=a.p+"static/media/mesh.212cf13f.svg"},173:function(e,t,a){e.exports=a.p+"static/media/advantages1.dff390c9.svg"},174:function(e,t,a){e.exports=a.p+"static/media/advantages2.f9fce27c.svg"},175:function(e,t,a){e.exports=a.p+"static/media/advantages3.0b82fb0e.svg"},176:function(e,t,a){e.exports=a.p+"static/media/advantages4.995c721f.svg"},177:function(e,t,a){e.exports=a.p+"static/media/howItWorks1.7844caca.svg"},178:function(e,t,a){e.exports=a.p+"static/media/howItWorks2.cb80a785.svg"},179:function(e,t,a){e.exports=a.p+"static/media/howItWorks3.d9115791.svg"},224:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(135),o=a.n(c),m=a(136),r=a.n(m),i=a(6),s=a(222),d=a(226),p=a(223),u=a(137),g=a.n(u),h=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(void 0),m=Object(i.a)(o,2),r=m[0],u=m[1],h=Object(n.useState)(""),f=Object(i.a)(h,2),b=f[0],v=f[1],x=Object(n.useState)(""),E=Object(i.a)(x,2),y=E[0],N=E[1],k=Object(n.useState)(""),j=Object(i.a)(k,2),z=j[0],w=j[1],O=Object(n.useState)(""),S=Object(i.a)(O,2),M=S[0],T=S[1],A=Object(n.useState)(""),P=Object(i.a)(A,2),C=P[0],Z=P[1],J=Object(n.useState)(""),Y=Object(i.a)(J,2),D=Y[0],I=Y[1],W=Object(n.useState)(""),F=Object(i.a)(W,2),V=F[0],G=F[1],H=Object(n.useState)(""),U=Object(i.a)(H,2),_=U[0],B=U[1],Q=function(e){var t=e.replace(/\D/g,"");return/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im.test(t)},R=function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)},$=function(e){setTimeout(function(){c(!1),u(void 0),e&&(v(""),Z(""),w(""),G(""))},8e3)};return l.a.createElement("section",{className:"light-background col-10 col-md-9 custom-form text-center flex-column py-1 py-md-4"},l.a.createElement("h2",{className:"mt-3"},"Kontaktujte n\xe1s"),l.a.createElement(s.a,{error:y.length>0,helperText:y,label:"Jm\xe9no*",variant:"outlined",value:b,onChange:function(e){N(""),v(e.target.value)},className:"custom-form col-11 col-md-9 mx-3"}),l.a.createElement(s.a,{error:D.length>0,helperText:D,label:"Telefon",variant:"outlined",value:C,onChange:function(e){I(""),Z(e.target.value)},className:"custom-form col-11 col-md-9 mx-3 my-3"}),l.a.createElement(s.a,{error:_.length>0,helperText:_,label:"Va\u0161e e-mailov\xe1 adresa*",variant:"outlined",value:V,onChange:function(e){B(""),G(e.target.value)},type:"email",className:"custom-form col-11 col-md-9 mx-3"}),l.a.createElement(s.a,{multiline:!0,rows:4,error:M.length>0,helperText:M,label:"Dotaz*",variant:"outlined",value:z,onChange:function(e){T(""),w(e.target.value)},className:"custom-form col-11 col-md-9 mx-3 my-3"}),l.a.createElement(p.a,{size:"small",onClick:function(){return function(){if(b.length<1&&N("Pros\xedm zadejte sv\xe9 jm\xe9no a p\u0159\xedjmen\xed"),C.length>0&&!Q(C)&&I("Pros\xedm zadejte telefon ve spr\xe1vn\xe9m form\xe1tu"),R(V)||B("Pros\xedm zadejte email ve spr\xe1vn\xe9m form\xe1tu"),z.length<1&&T("Pros\xedm vypln\u011b v\xe1\u0161 dotaz"),b.length>1&&z.length>1&&Q(C)&&R(V)){c(!0),u(void 0);var e={method:"post",url:"https://api.mailjet.com/v3.1/send",headers:{"Content-Type":"application/json",Authorization:"Basic MjljOWU1NTZiMzYxMzJlMzg5M2U1NzRjY2YxMzk3NmI6ODE4ZjkwYThlOGQ3ZGZiMTQwYWY5YzNkYWFlOTY5ZDA="},data:JSON.stringify({Messages:[{From:{Email:"jakub.psenicka@devcity.tech",Name:"Jakub"},To:[{Email:"jan.chocholac@devcity.tech",Name:"Jan"}],Subject:"Zpr\xe1va z webu PickIt",TextPart:"Na str\xe1nce Pickit.cz n\u011bkdo vyplnil formul\xe1\u0159 s dotazem!",HTMLPart:"<h3>".concat(b,"</h3><br />telefon: ").concat(C,"<br/> email: ").concat(V)}]})};g.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",g()(e).then(function(e){console.log(JSON.stringify(e.data)),c(!1),u(!0),$(!0)}).catch(function(e){console.log(e),setTimeout(function(){c(!1),u(!1)},3e3),$(!1)})}}()},loading:a,color:a?"primary":void 0===r?"primary":!0===r?"success":"error",loadingIndicator:l.a.createElement(d.a,{color:"primary",size:26,thickness:5}),variant:"contained",className:"order-button custom-button  text-white py-3 px-5 w-75 w-md-50 mb-3"},a?l.a.createElement("div",{style:{color:"rgba(0, 0, 0, 0.12)"}},"\u200c  "):void 0===r?"Odeslat":!0===r?"Odesl\xe1no":"Nepoda\u0159ilo se odeslat"))},f=a(55),b=function(){return l.a.createElement("section",{className:"mb-5 container"},l.a.createElement("div",{id:"fifthSection",className:"row mt-0 mt-md-5 pt-5 d-flex align-items-center position-relative"},l.a.createElement(f.d,null),l.a.createElement(f.c,null),l.a.createElement("a",{href:"https://goo.gl/maps/2sr3DHeoDGdW7X4o8",target:"_blank","data-aos":"fade-right",className:"col-12 col-lg-6 d-flex justify-content-center"},l.a.createElement("img",{src:o.a,className:"w-75 map",alt:"kde n\xe1s najdete - mapa"})),l.a.createElement("div",{"data-aos":"fade-up",className:"col-12 col-lg-6 flex-column text-center"},l.a.createElement("h1",{className:"text-white mb-2 mb-lg-5 mt-5 mt-lg-0"}," Na\u0161e kontakty"),l.a.createElement("p",{className:"text-white opacity-75 "},l.a.createElement("i",{className:"fa fa-phone fa-2x opacity-100 icon-color align-middle pe-2"})," +420 605 387 212"),l.a.createElement("p",{className:"text-white opacity-75 py-0 py-md-3"},l.a.createElement("i",{className:"fa fa-envelope fa-2x opacity-100 icon-color align-middle pe-2"}),"jan.chocholac@devcity.tech"),l.a.createElement("p",{className:"text-white opacity-75 "},l.a.createElement("i",{className:"fa fa-map fa-2x opacity-100 icon-color align-middle pe-2"}),"D\u011blnick\xe1 776/5 Praha 7 Hole\u0161ovice 170 00"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-lg-6"}),l.a.createElement("div",{className:"col-12 col-lg-6"},l.a.createElement("hr",{className:"hr-gradient-light mx-5"}))),l.a.createElement("div",{id:"contactForm",className:"row mt-0 mt-md-5 pt-5 d-flex align-items-center"},l.a.createElement("div",{"data-aos":"fade-right","data-aos-delay":"300",className:"col-12 col-lg-6 d-flex justify-content-center"},l.a.createElement(h,null)),l.a.createElement("div",{"data-aos":"fade-up","data-aos-delay":"300",className:"col-12 col-lg-6 flex-column text-center mt-5 mt-lg-0"},l.a.createElement("h1",{className:"text-white mb-5"}," M\xe1te je\u0161t\u011b ",l.a.createElement("br",null)," n\u011bjak\xe9 ot\xe1zky?"),l.a.createElement("p",{className:"text-white opacity-75 "},"Vypl\u0148te kr\xe1tk\xfd formul\xe1\u0159 pro ",l.a.createElement("br",null)," zp\u011btnou vazbu a my se v\xe1m ",l.a.createElement("br",null),"ozveme."),l.a.createElement("img",{src:r.a,className:"w-50",alt:"ilustrace - dotazy"}))))},v=a(166),x=a.n(v),E=a(167),y=a.n(E),N=a(168),k=a.n(N),j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:k.a,alt:"pozad\xed",className:"w-100"}),l.a.createElement("section",{id:"firstSection",className:"light-background position-relative pt-1"},l.a.createElement(f.b,null),l.a.createElement("div",{className:"container row mx-auto d-flex align-items-center  p-0 py-1"},l.a.createElement("div",{"data-aos":"fade-right",className:"col-12 col-lg-5 p-0 mx-auto text-center text-md-start"},l.a.createElement("img",{className:"w-75",src:x.a,alt:"ilustrace"})),l.a.createElement("div",{className:"col-12 col-lg-7 text-center text-md-start"},l.a.createElement("div",null,l.a.createElement("h2",{"data-aos":"fade-up",className:"bold-text increase-headline-size dark-color"},"Benefit pro zam\u011bstnance"),l.a.createElement("p",{"data-aos":"fade-up",className:"grey-color pe-0 pe-lg-5  mt-4"},"Nab\xeddn\u011bte sv\xfdm zam\u011bstnanc\u016fm chlazen\xe9 n\xe1poje, sva\u010diny, ovoce nebo jin\xe9 produkty z lednice, kter\xe9 jim zp\u0159\xedjemn\xed pracovn\xed prost\u0159ed\xed. Zam\u011bstnavateli naopak uleh\u010d\xed pr\xe1ci on-line p\u0159ehled skladov\xfdch z\xe1sob\xe1ch a odb\u011brech."),l.a.createElement("hr",{className:"hr-gradient"}),l.a.createElement("h2",{"data-aos":"fade-up",className:"bold-text increase-headline-size mt-4 dark-color"},"Automatizovan\xfd v\xfddej/prodej produkt\u016f 24/7"),l.a.createElement("p",{"data-aos":"fade-up",className:"grey-color pe-0 pe-lg-5 mt-4"},"Umo\u017en\u011bte \u0159\xedzen\xfd v\xfddej nebo prodej produkt\u016f kdykoli a kdekoli, a\u0165 jste farm\xe1\u0159, lok\xe1ln\xed v\xfdrobce potravin nebo firma."))))),l.a.createElement("img",{src:y.a,className:"w-100",alt:"pozad\xed"}))},z=a(169),w=a.n(z),O=a(170),S=a.n(O),M=function(){return l.a.createElement("section",{id:"fourthSection",className:"light-background pt-4 pb-lg-5 pt-xl-5 pb-5 hide-overflow"},l.a.createElement("img",{src:w.a,alt:"pozad\xed",className:"snow-cap-transform pt-0 pt-md-2 pt-md-5 mt-0 mt-xl-1 mt-xxl-3 w-100"}),l.a.createElement("div",{className:"container mx-auto mt-5 pt-5"},l.a.createElement("h1",{"data-aos":"fade-up",className:"text-center bold-text"},"Chytr\xfd displej"),l.a.createElement("p",{"data-aos":"fade-up","data-aos-delay":"100",className:"text-center my-5"},"Na displeji lednice vid\xedte ve\u0161ker\xfd sortiment s ",l.a.createElement("br",null),"mo\u017enost\xed zobrazen\xed detailn\xedho popisu produktu."),l.a.createElement("div",{"data-aos":"fade-up","data-aos-delay":"200",className:"text-center mb-5 pb-5"},l.a.createElement("img",{src:S.a,alt:"integrovan\xfd tablet chytr\xe9 lednice pickit",className:" col-12 col-md-8 col-lg-8"}))))},T=a(171),A=a.n(T),P=a(172),C=a.n(P),Z=a(28),J=function(){return l.a.createElement("main",{className:"container row mx-auto d-flex align-items-center  extra-margin  p-0"},l.a.createElement("div",{"data-aos":"fade-up",className:"col-12 col-lg-6 p-0 text-center text-lg-start"},l.a.createElement("h1",{className:"intro-text-color display-3"},"Chytr\xe1 lednice"),l.a.createElement("p",{className:"text-white opacity-75 my-3 intro-desc"},"s \u0159\xedzen\xfdm odb\u011brem produkt\u016fm, online",l.a.createElement("br",null),"  skladov\xfdm syst\xe9mem  a automatizovan\xfdm ",l.a.createElement("br",null),"  prodejem 24/7."),l.a.createElement("div",{className:"extra-bottom-margin"},l.a.createElement("button",{onClick:function(){return Object(Z.a)("firstSection")},id:"send-button",className:"mx-auto mx-lg-0"},l.a.createElement("span",null,"Zjistit v\xedce"),l.a.createElement("div",{className:"liquid"})))),l.a.createElement("div",{className:"col-12 col-lg-6 "},l.a.createElement("div",{style:{backgroundImage:"url(".concat(C.a,")")},"data-aos":"fade-left",className:"fridge-circle rounded-circle mx-auto"},l.a.createElement("img",{src:A.a,alt:"chytr\xe1 lednice pickit"}))))},Y=a(173),D=a.n(Y),I=a(174),W=a.n(I),F=a(175),V=a.n(F),G=a(176),H=a.n(G),U=function(e){return l.a.createElement("div",{"data-aos":"fade-up",className:"col-12 col-lg-6 px-2 px-md-5 py-3 py-md-0"},l.a.createElement("div",{className:"d-inline-block d-md-none d-flex  justify-content-center"},l.a.createElement("div",{className:"d-flex flex-row justify-content-center align-items-center flex-nowrap"},l.a.createElement("div",{className:"col-2 m-0 ms-4 ms-sm-2"},l.a.createElement("img",{className:"advantages-icon",src:e.imgSrc,alt:e.imgAlt})),l.a.createElement("div",{className:e.isMultiline?"col-7 m-0 text-start":"col-10 m-0 text-start"},l.a.createElement("h3",{className:e.extraMargin?"  m-0 ms-3 bold-text  text-white":" m-0 bold-text  text-white"},e.headline)))),l.a.createElement("img",{className:"d-none d-md-block",src:e.imgSrc,alt:e.imgAlt}),l.a.createElement("h3",{className:"bold-text  text-white mt-3 d-none d-md-block"},e.headline),l.a.createElement("p",{className:"text-white opacity-75 mt-3 text-center text-md-start"},e.text))},_=function(){return l.a.createElement("section",{id:"secondSection",className:"container position-relative"},l.a.createElement(f.f,null),l.a.createElement("h1",{className:"intro-text-color text-center"},"V\xfdhody \u0159e\u0161en\xed"),l.a.createElement("div",{className:"row mx-auto d-flex align-items-start  p-0 py-0 py-md-5"},l.a.createElement(U,{imgSrc:D.a,headline:"Automatizace",text:"D\xedky aplikaci se automaticky hl\xeddaj\xed z\xe1soby a dostupnost zbo\u017e\xed s mo\u017enost\xed notifikac\xed. M\xe1te okam\u017eit\xfd p\u0159ehled o odb\u011brech a prodej\xedch. Pomoc\xed nabit\xed kredit\u016f na u\u017eivatelsk\xe9m \xfa\u010dtu je \u0159e\u0161en\xed ide\xe1ln\xed pro rychl\xfd odb\u011br na akc\xedch, trz\xedch a jin\xfdch ve\u0159ejn\xfdch m\xedstech.",extraMargin:!0,isMultiline:!1,imgAlt:"v\xfdhoda chytr\xe9 lednice - automatizace"}),l.a.createElement(U,{imgSrc:W.a,headline:"\u0158\xedzen\xfd odb\u011br a zabezpe\u010den\xed",text:"Zabezpe\u010den\xfd p\u0159\xedstup pomoc\xed elektronick\xe9ho z\xe1mku s rychlou a intuitivn\xed identifikac\xed a ov\u011b\u0159en\xedm u\u017eivatele.",extraMargin:!1,isMultiline:!0,imgAlt:"v\xfdhoda chytr\xe9 lednice - \u0159\xedzen\xfd p\u0159\xedstup a zabezpe\u010den\xed"})),l.a.createElement("div",{className:"row mx-auto d-flex align-items-start  p-0 py-0 py-md-5"},l.a.createElement(U,{imgSrc:V.a,headline:"Chytr\xe9 firemn\xed benefity",text:"Zp\u0159\xedjemn\u011bte den sv\xfdm zam\u011bstnanc\u016fm chlazen\xfdmi n\xe1poji nebo ob\u010derstven\xedm s mo\u017enost\xed nastaven\xed ceny \u010di v\xfd\u0161e slevy. V kancel\xe1\u0159\xedch, v\xfdrobn\xedch hal\xe1ch, nemocnic\xedch nebo hotelech m\u016f\u017eete odm\u011bnit sv\xe9 zam\u011bstnance \u010derstv\xfdmi produkty a zv\xfd\u0161it jejich v\xfdkon a spokojenost.",extraMargin:!1,isMultiline:!1,imgAlt:"v\xfdhoda chytr\xe9 lednice - chytr\xe9 firemn\xed benefity"}),l.a.createElement(U,{imgSrc:H.a,headline:"Finance",text:"Rychl\xfd n\xe1kup pomoc\xed p\u0159ed nabit\xfdch kredit\u016f nebo online platby. P\u0159ehledy prodej\u016f a jin\xe9 reporty usnadn\xed pr\xe1ci.",extraMargin:!1,isMultiline:!1,imgAlt:"v\xfdhoda chytr\xe9 lednice - rychl\xfd n\xe1kup a finance"})),l.a.createElement("hr",{className:"hr-gradient-light"}))},B=function(e){return l.a.createElement("div",{"data-aos":"fade-up","data-aos-delay":e.delay,className:"col-12 col-lg-4 my-5 my-md-5 my-lg-0 px-0"},l.a.createElement("div",{className:" m-0 mx-lg-4 mx-xl-5 card text-center border-0 "},l.a.createElement("div",{className:"card-number text-white display-3 bold-text "},e.number),l.a.createElement("div",{className:"card-img"},l.a.createElement("img",{src:e.imgSrc,alt:e.imgAlt})),l.a.createElement("h3",{className:"text-white mt-auto display-6 bold-text"},e.headline),l.a.createElement("p",{className:"text-white opacity-75 mb-5 mt-3 mx-4"},e.text)))},Q=a(177),R=a.n(Q),$=a(178),q=a.n($),K=a(179),L=a.n(K),X=function(){return l.a.createElement("section",{id:"thirdSection",className:"mt-5 container pt-5 mb-5 pb-5 position-relative"},l.a.createElement("div",{className:"mb-xxl-5 pb-5"},l.a.createElement(f.e,null),l.a.createElement("h1",{className:"intro-text-color text-center"},"Jak chytr\xe1 lednice funguje"),l.a.createElement("div",{className:"row mx-4 d-flex align-items-start  p-0 py-5 my-0 my-xl-5"},l.a.createElement(B,{number:"1",imgSrc:R.a,headline:"V\xfdb\u011br",delay:0,text:"Na displeji lednice si vyberete z nab\xeddky dostupn\xfdch produkt\u016f",imgAlt:"jak to funguje - v\xfdber"}),l.a.createElement(B,{number:"2",imgSrc:q.a,headline:"Platba",delay:200,text:"Online kartou nebo pomoc\xed kredit\u016f",imgAlt:"jak to funguje - platba"}),l.a.createElement(B,{number:"3",imgSrc:L.a,headline:"Odb\u011br",delay:400,text:"Po zaplacen\xed nebo str\u017een\xed kredit\u016f se lednice otev\u0159ete",imgAlt:"jak to funguje - odb\u011br"}))))};t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(J,null),l.a.createElement(j,null),l.a.createElement(_,null),l.a.createElement(X,null),l.a.createElement(M,null),l.a.createElement(b,null))}}}]);
//# sourceMappingURL=4.7bb12139.chunk.js.map