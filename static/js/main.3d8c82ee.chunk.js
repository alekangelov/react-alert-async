(this["webpackJsonpreact-alert-async-example"]=this["webpackJsonpreact-alert-async-example"]||[]).push([[0],{280:function(e,t,n){"use strict";n.r(t);n(40);var a=n(0),r=n.n(a),l=n(19),c=n.n(l),o=n(1),i=n.n(o),u=n(4),s=n(3),m={alertProvider:"_alert__alertProvider__2JDDD",alert:"_alert__alert__xDKrr","alert-inner":"_alert__alert-inner__3DSUu",animationIn:"_alert__animationIn__ER1aa",baseAnimation:"_alert__baseAnimation__1RF2u",animationOut:"_alert__animationOut__1L1pl",baseAnimationOut:"_alert__baseAnimationOut__6gnCy",animationHold:"_alert__animationHold__3JSRo",buttons:"_alert__buttons__1pedB",ok:"_alert__ok__1iZji",cancel:"_alert__cancel__tMObY",prompt:"_alert__prompt__3W6tz",input:"_alert__input__2myky"};var p=n(19),f=p.render,h=p.unmountComponentAtNode,d=function(e){var t=Object(a.useState)(m.animationIn),n=Object(s.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),u=i[0],p=i[1],f=function(t){var n=document.getElementById(m.alertProvider);e.prompt&&t?e.onClick(u):e.onClick(t),c(m.animationOut),setTimeout((function(){h(n)}),(e.duration||500)-50)};return r.a.useEffect((function(){setTimeout((function(){return c(m.animationHold)}),e.duration||500)}),[]),console.log(e),r.a.createElement("div",{className:[m.alert,"alert"].join(" ")},r.a.createElement("div",{style:{animationDuration:"".concat((e.duration||500)/1e3,"s")},className:[m["alert-inner"],"alert-inner",l].join(" ")},e.title?r.a.createElement("h4",{className:"alert-title"},e.title):r.a.createElement("h4",{className:"alert-title"},r.a.createElement(r.a.Fragment,null,e.prompt&&"Please fill in the input",e.confirm&&"Please confirm",!e.prompt&&!e.confirm&&"Alert")),r.a.createElement("p",{className:"alert-text"},e.text),e.prompt&&r.a.createElement("div",{className:m.prompt},r.a.createElement("input",{value:u,onChange:function(e){return p(e.target.value)},className:[m.input,"alert-input"].join(" "),type:"text"})),r.a.createElement("div",{className:[m.buttons,"alert-buttons"].join(" ")},r.a.createElement("button",{className:[m.ok,"alert-buttons_ok"].join(" "),onClick:function(){return f(!0)}},"OK"),(e.confirm||e.prompt)&&r.a.createElement("button",{className:[m.cancel,"alert-buttons_cancel"].join(" "),onClick:function(){return f(!1)}},"Cancel"))))};function b(e,t){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.getElementById(m.alertProvider),e.abrupt("return",new Promise((function(e,l){f(r.a.createElement(d,Object.assign({onClick:function(t){return t?e(t):l(t)},text:t,prompt:!1},n)),a)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.getElementById(m.alertProvider),e.abrupt("return",new Promise((function(e,l){f(r.a.createElement(d,Object.assign({onClick:function(t){return t?e(t):l(t)},text:t,confirm:!0},n)),a)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.getElementById(m.alertProvider),e.abrupt("return",new Promise((function(e,l){f(r.a.createElement(d,Object.assign({onClick:function(t){return t?e(t):l()},text:t,prompt:!0},n)),a)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=function(){return r.a.createElement("div",{id:m.alertProvider,className:"Alert-provider"})},k=(n(46),n(284)),O=n(283);function j(){var e=Object(a.useState)("Nothing's been alerted"),t=Object(s.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),o=Object(s.a)(c,2),m=o[0],p=o[1];return r.a.createElement("section",null,r.a.createElement("h2",null,"Alerts"),r.a.createElement("p",null,"Alerts are simple, you have to click yes on them"),r.a.createElement("div",{className:"state"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b("Idk write something meaningful here",{duration:500});case 3:t=e.sent,console.log(t),l("Yay, so you read all that"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("here2"),l("Oh, we're sorry about that :(");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))},"Make an alert"),r.a.createElement("button",{onClick:function(){return p((function(e){return!e}))}},m?"Hide":"Show"," Code")),m&&r.a.createElement(k.a,{showLineNumbers:!0,style:O.a,language:"javascript"},"async () => {\n    try {\n      const x = await alert('Something')\n      console.log(x)\n      setState('Yay, so you read all that')\n    } catch (e) {\n      // won't actually get here\n    }\n    // now that was simple?\n  }"))}function x(){var e=Object(a.useState)("Nothing's been prompted"),t=Object(s.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),o=Object(s.a)(c,2),m=o[0],p=o[1];return r.a.createElement("section",null,r.a.createElement("h2",null,"Prompts"),r.a.createElement("p",null,"Prompts are like confirms, but you get what the user typed in the box. Or the user can deny them."),r.a.createElement("div",{className:"state"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("What's your name?");case 3:t=e.sent,l("Your name is: "+t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l("Oh dang, we didnt get your name :(");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))},"Make a prompt"),r.a.createElement("button",{onClick:function(){return p((function(e){return!e}))}},m?"Hide":"Show"," Code")),m&&r.a.createElement(k.a,{showLineNumbers:!0,style:O.a,language:"javascript"},"async () => {\n    try {\n      const x = await prompt(\"What's your name?\")\n      setState('Your name is: ' + x)\n    } catch (e) {\n      setState('Oh dang, we didnt get your name :(')\n    }\n  }"))}function N(){var e=Object(a.useState)("Nothing's been confirmed, nor denied"),t=Object(s.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),o=Object(s.a)(c,2),m=o[0],p=o[1];return r.a.createElement("section",null,r.a.createElement("h2",null,"Confirms"),r.a.createElement("p",null,"Confirms are pretty self explanatory. You can confirm or deny them."),r.a.createElement("div",{className:"state"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_("Read some of the things we've written");case 3:l("Yay, so you read all that"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),l("Oh, we're sorry about that :(");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))},"Make a confirm"),r.a.createElement("button",{onClick:function(){return p((function(e){return!e}))}},m?"Hide":"Show"," Code")),m&&r.a.createElement(k.a,{showLineNumbers:!0,style:O.a,language:"javascript"},"async () => {\n    try {\n      await confirm(\"Read some of the things we've written\")\n      setState('Yay, so you read all that')\n    } catch (e) {\n      setState(\"Oh, we're sorry about that :(\")\n    }\n  }"))}function C(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"first"},r.a.createElement("p",null,"Developed and Maintained by Alek Angelov")),r.a.createElement("ul",{className:"second"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"NPM")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"GITHUB")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://alekangelov.com"},"WEBSITE"))))}function S(){return r.a.createElement("section",null,r.a.createElement("h2",null,"Styling"),r.a.createElement("p",null,"It's pretty easy to style the components, they follow simple naming structures and it's encouraged to write your own styles"),r.a.createElement(k.a,{language:"css",style:O.a},".alert {\n  /* this is the background of the alert */\n  &-inner {\n    /* body wrapper of the alert */\n  }\n  &-title {\n    /* title of the alert */\n  }\n  &-text {\n    /* text describer of the alert */\n  }\n  &-input {\n    /* the prompt input field */\n  }\n  &-buttons {\n    /* button wrapper of the alert */\n    &_ok {\n      /* ok button of the alert */\n    }\n    &_cancel {\n      /* cancel button of the alert */\n    }\n  }\n}"))}var P=function(){var e=Object(a.useState)("Nothing's been prompted"),t=Object(s.a)(e,2);t[0],t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,r.a.createElement("span",{role:"icon"},"\u2728")," React-Alert-Async"),r.a.createElement("h2",null,"A simple way of managing your alerts, prompts and confirms without defaulting to the browsers ugly implementations"),r.a.createElement("div",{className:"sections"},r.a.createElement(j,null),r.a.createElement(N,null),r.a.createElement(x,null),r.a.createElement(S,null)),r.a.createElement(C,null)))};c.a.render(r.a.createElement(P,null),document.getElementById("root"))},39:function(e,t,n){e.exports=n(280)},40:function(e,t,n){},46:function(e,t,n){}},[[39,1,2]]]);
//# sourceMappingURL=main.3d8c82ee.chunk.js.map