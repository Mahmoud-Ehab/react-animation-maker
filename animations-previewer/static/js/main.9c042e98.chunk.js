(this["webpackJsonpreact-animation-maker-previewer"]=this["webpackJsonpreact-animation-maker-previewer"]||[]).push([[0],{10:function(t,e,r){},12:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),a=r(5),i=r.n(a),s=(r(10),r(2)),c=r(3),l=r(0),f=function(t){var e=Object(n.useState)(t.from),r=Object(s.a)(e,2),o=r[0],a=r[1],i=Object(n.useState)(!0),f=Object(s.a)(i,2),d=f[0],m=f[1];return d&&(m(!1),setTimeout((function e(){for(var r=function(t){if("string"!==typeof t)return 0;for(var e=parseInt(t),r="",n=0;n<t.length;n++)parseInt(t[n])>=0||(r+=t[n]);return"s"===r?1e3*e:"ms"===r?e:0}(t.duration||"1s"),n=function(n){var o=n*r;setTimeout((function(){return a(t.to[n])}),o),t.loop&&n===t.to.length-1&&(setTimeout((function(){return a(t.from)}),o+r),setTimeout(e,o+2*r))},o=0;o<t.to.length;o++)n(o)}),t.delay||100)),Object(l.jsx)("div",{style:Object(c.a)(Object(c.a)(Object(c.a)({},t.style),o),{},{transition:t.duration||"1s"}),children:t.children})},d={Fade_Animations:{FadeIn:{from:{opacity:0},to:[{opacity:1}]},FadeOut:{from:{opacity:1},to:[{opacity:0}]}},Slide_Animations:{SlideInTop:{from:{transform:"translate(0, -200%)"},to:[{transform:"translate(0, 0)"}]},SlideOutTop:{from:{transform:"translate(0, 0)"},to:[{transform:"translate(0, -200%)"}]},SlideInRight:{from:{transform:"translate(-200%, 0)"},to:[{transform:"translate(0, 0)"}]},SlideOutRight:{from:{transform:"translate(0, 0)"},to:[{transform:"translate(-200%, 0)"}]},SlideInDown:{from:{transform:"translate(0, 200%)"},to:[{transform:"translate(0, 0)"}]},SlideOutDown:{from:{transform:"translate(0, 0)"},to:[{transform:"translate(0, 200%)"}]},SlideInLeft:{from:{transform:"translate(200%, 0)"},to:[{transform:"translate(0, 0)"}]},SlideOutLeft:{from:{transform:"translate(0, 0)"},to:[{transform:"translate(200%, 0)"}]}},Zoom_Animations:{ZoomIn:{from:{scale:0},to:[{}]},ZoomOut:{from:{},to:[{scale:0}]}},Bounce_Animations:{BounceIn:{from:{scale:"0"},to:[{scale:"1.15"},{scale:"1"}]},BounceOut:{from:{scale:"1"},to:[{scale:"1.2"},{scale:"0"}]}},Other:{FancyPopIn:{from:{transform:"rotate(20deg)",scale:0},to:[{transform:"rotate(-5deg)"},{transform:"rotate(0deg)"}]}}};var m=function(){var t=u(),e=Object(n.useState)(0),r=Object(s.a)(e,2),o=r[0],a=r[1],i=Object(n.useState)({from:{opacity:0},to:[{opacity:1}]}),c=Object(s.a)(i,2),m=c[0],b=c[1];return Object(l.jsxs)("div",{style:t.mainDiv,children:[Object(l.jsx)("div",{style:t.leftDiv,children:Object(l.jsx)(f,{style:t.leftDiv.div,from:m.from,to:m.to,children:Object(l.jsx)("a",{style:{color:"#12e1f3",textDecoration:"none"},href:"https://www.npmjs.com/react-animation-maker",target:"blank",children:"See Documentations"})})},o),Object(l.jsx)("div",{style:t.rightDiv,children:Object.entries(d).map((function(e){var r=Object(s.a)(e,2),n=r[0],o=r[1];return Object(l.jsxs)("div",{style:t.rightDiv.listDiv,children:[Object(l.jsx)("label",{style:t.rightDiv.header,children:n}),Object(l.jsx)("div",{style:t.rightDiv.btnsDiv,children:Object.entries(o).map((function(e){var r=Object(s.a)(e,2),n=r[0],o=r[1];return Object(l.jsx)("button",{style:t.rightDiv.btn,onClick:function(){b(o),a((function(t){return t+1}))},children:n})}))})]})}))})]})},u=function(){return{mainDiv:{display:"flex",flexDirection:document.body.clientWidth>=720?"row":"column",height:"100vh",overflow:"hidden",fontFamily:"cursive"},leftDiv:{flex:document.body.clientWidth>=1150?2:1,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#f6f6f6",div:{padding:"5em",borderRadius:"20px",backgroundColor:"#12a1a3",fontFamily:"Arial"}},rightDiv:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#dedede",overflow:"auto",listDiv:{display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"20px"},header:{padding:10,borderRadius:10,color:"#333",backgroundColor:"#ccc"},btnsDiv:{width:300,padding:10},btn:{width:"100%",padding:20,margin:2,border:0,color:"#111",borderRadius:5,boxShadow:"0 0 4px #00000022",backgroundColor:"#eee",cursor:"pointer",fontFamily:"Arial"}}}},b=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,13)).then((function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)}))};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.9c042e98.chunk.js.map