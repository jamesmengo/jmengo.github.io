(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,t,a){e.exports={projectContainer:"Projects_projectContainer__2bgjf",carouselContainer:"Projects_carouselContainer__1AQBz",carouselBody:"Projects_carouselBody__1tqOh",carouselPage:"Projects_carouselPage__2JVAX"}},25:function(e,t,a){e.exports={pageContainer:"Page_pageContainer__1B3AC",pageBody:"Page_pageBody__2-Q30"}},31:function(e,t,a){e.exports={App:"styles_App__1vQfL",scrollContainer:"styles_scrollContainer__1nxLC",scrollIndicator:"styles_scrollIndicator__2TX3I"}},32:function(e,t,a){e.exports={landingContainer:"LandingContainer_landingContainer__2m6mR",titleContainer:"LandingContainer_titleContainer__3hzmN",titleBold:"LandingContainer_titleBold__1PGji"}},46:function(e,t,a){e.exports=a.p+"static/media/chevronDown.0723c71a.svg"},47:function(e,t,a){e.exports={chevronImage:"ChevronDown_chevronImage__20spi"}},53:function(e,t,a){e.exports=a(80)},58:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),c=a(11),i=a(6),s=a(12),m=a(13),u=a(14),d=(a(58),a(50)),p=a(103),h=a(101),g=a(31),E=a.n(g),v=a(32),y=a.n(v),b=a(15),f=a(26),j=a.n(f),C=a(95),_=a(97),w=a(45),O=a(46),k=a.n(O),B=a(47),F=a.n(B);function x(e){var t=e.to,a=e.duration;return r.a.createElement(w.Link,{to:t,spy:!0,smooth:!0,duration:a},r.a.createElement("img",{className:F.a.chevronImage,src:k.a,alt:"view About Me"}))}x.defaultProps={duration:1e3};var I=x,P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{container:!0,className:y.a.landingContainer},r.a.createElement("div",{className:y.a.titleContainer},r.a.createElement(_.a,{variant:"h1"},"James  ",r.a.createElement("span",{className:y.a.titleBold}," Meng"))),r.a.createElement("div",null,r.a.createElement(j.a,null,r.a.createElement(j.a.Delay,{ms:1e3}),r.a.createElement("span",null,"Developer."),r.a.createElement(j.a.Delay,{ms:1e3}),r.a.createElement("span",null," Student Leader."),r.a.createElement(j.a.Delay,{ms:1e3}),r.a.createElement("span",null," Tech Enthusiast."))),r.a.createElement(b.Fade,{timeout:2e3},r.a.createElement(I,{to:"AboutMe"})))}}]),t}(n.Component),N=a(102),A=a(5),L=a(22),S=a.n(L),z=a(25),D=a.n(z),M=(n.Component,Object(A.a)((function(e){return{root:{position:"absolute",height:"calc(100vh - 98px)"}}}))(N.a)),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleCarouselClick=function(e){var t=a.state,n=t.activeSlide,r=t.carouselLength,o=n+e;a.setState({activeSlide:(o%r+r)%r})},a.state={activeSlide:0,carouselLength:3},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.activeSlide;return r.a.createElement("div",{className:D.a.pageContainer,id:"Projects"},r.a.createElement(b.Fade,{left:!0,delay:400,timeout:2e3},r.a.createElement("h1",null,"My Projects"),r.a.createElement("hr",null)),r.a.createElement("div",{className:S.a.carouselContainer},r.a.createElement(M,{variant:"text",color:"primary",size:"large",style:{left:0},onClick:function(){return e.handleCarouselClick(-1)}},r.a.createElement("h1",null,"<")),r.a.createElement("div",{style:{transform:"translateX(calc((100vw - 98px) * -".concat(t,"))")},className:S.a.carouselBody},r.a.createElement("div",{className:S.a.carouselPage},"hello1"),r.a.createElement("div",{className:S.a.carouselPage},"hello2"),r.a.createElement("div",{className:S.a.carouselPage},"hello3")),r.a.createElement(M,{variant:"text",color:"primary",size:"large",style:{right:0},onClick:function(){return e.handleCarouselClick(1)}},r.a.createElement("h1",null,">"))))}}]),t}(n.Component),J=a(8),Q=a(104),X=a(98),H=a(99),R=a(100),W=Object(A.a)((function(e){var t;return{root:(t={backgroundColor:"unset",border:"2px solid #FFFFFF",borderRadius:"50%"},Object(J.a)(t,e.breakpoints.down("sm"),{height:"5rem",width:"5rem",marginBottom:"1rem",marginTop:"1rem"}),Object(J.a)(t,e.breakpoints.up("md"),{height:"5rem",width:"5rem",marginBottom:"1rem",marginTop:"1rem"}),Object(J.a)(t,e.breakpoints.up("lg"),{height:"7.5rem",width:"7.5rem"}),t)}}))(Q.a),q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).renderAvatar=function(e){return r.a.createElement(W,null,r.a.createElement(e,{style:{fontSize:"4.0rem"}}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:D.a.pageContainer,id:"AboutMe"},r.a.createElement(b.Fade,{left:!0,delay:400,timeout:2e3},r.a.createElement("h1",null,"About Me"),r.a.createElement("hr",null)),r.a.createElement("div",{className:D.a.pageBody},r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{item:!0,align:"center",xs:12,md:4},r.a.createElement(b.Fade,{right:!0,delay:800,timeout:2e3,distance:"3.0rem"},this.renderAvatar(X.a),r.a.createElement("hr",null),r.a.createElement(_.a,{variant:"h6",gutterBottom:!0},"I'm currently pursuing a combined major in Business and Computer Science at the University of British Columbia."))),r.a.createElement(C.a,{item:!0,align:"center",xs:12,md:4},r.a.createElement(b.Fade,{right:!0,delay:1200,timeout:2e3,distance:"3.0rem"},this.renderAvatar(H.a),r.a.createElement("hr",null),r.a.createElement(_.a,{variant:"h6",gutterBottom:!0},"I look for simple solutions to complex problems and prioritize writing readable and reusable code. I build most of my personal projects in JavaScript, but I'm always picking up new frameworks and languages."),r.a.createElement(b.Fade,{delay:1200,timeout:2e3},r.a.createElement(I,{to:"Projects"})))),r.a.createElement(C.a,{item:!0,align:"center",xs:12,md:4},r.a.createElement(b.Fade,{right:!0,delay:1600,timeout:2e3,distance:"3.0rem"},this.renderAvatar(R.a),r.a.createElement("hr",null),r.a.createElement(_.a,{variant:"h6",gutterBottom:!0},"I enjoy collaborating with others and understand the importance of communication skills. I'm continually trying to improve this skill by exposing myself to new experiences and group dynamics."))))))}}]),t}(n.Component),G=Object(d.a)({typography:{fontFamily:["Poppins"]},palette:{primary:{main:"#FFFFFF"}}});G=Object(p.a)(G),"undefined"!==typeof window&&(window.onscroll=function(){U()});var U=function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById("scrollIndicator").style.width=e+"%"},V=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{theme:G},r.a.createElement("div",{className:E.a.App},r.a.createElement("div",{className:E.a.scrollContainer},r.a.createElement("div",{className:E.a.scrollIndicator,id:"scrollIndicator"})),r.a.createElement(P,null),r.a.createElement(q,null),r.a.createElement(T,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.fcde7aa9.chunk.js.map