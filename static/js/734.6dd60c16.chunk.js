"use strict";(self.webpackChunkart_project=self.webpackChunkart_project||[]).push([[734],{3734:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var n=s(9439),o=s(2791),l=s(3118),r=s(1015),i=s(7689),a=s(7472),c=s(9372),u=s(184),d=function(){var e=(0,o.useState)(!0),t=(0,n.Z)(e,2),s=t[0],l=t[1],r=(0,o.useState)(0),i=(0,n.Z)(r,2),d=i[0],p=i[1];return(0,o.useEffect)((function(){p(0);var e=setInterval((function(){p((function(e){return e-1}))}),50);return function(){return clearInterval(e)}}),[s]),(0,u.jsx)("div",{className:"middle flex_c_s",children:(0,u.jsxs)("div",{className:" notice ",style:{margin:"16px",paddingLeft:"16px",fontSize:"18px",borderRadius:"8px",border:"2px solid rgba(0,0,0,0.2)",width:"50%"},children:[(0,u.jsx)("div",{children:"\u6700\u65b0\u516c\u544a\xa0|\xa0"}),(0,u.jsx)("div",{style:{height:"30px",overflow:"scroll",whiteSpace:s?"nowrap":""},children:(0,u.jsx)("div",{style:{transform:"translate".concat(s?"X":"Y","(").concat(d,"px)")},children:["\u8fd9\u662f\u7b2c\u4e00\u6761\u516c\u544a\u4fe1\u606f\uff01\uff01","\u8fd9\u662f\u7b2c\u4e8c\u6761\u516c\u544a\u4fe1\u606f\uff01\uff01","\u8fd9\u662f\u7b2c\u4e09\u6761\u516c\u544a\u4fe1\u606f\uff01\uff01","\u8fd9\u662f\u7b2c\u56db\u6761\u516c\u544a\u4fe1\u606f\uff01\uff01","\u8fd9\u662f\u7b2c\u4e94\u6761\u516c\u544a\u4fe1\u606f\uff01\uff01","\u8fd9\u662f\u7b2c\u516d\u6761\u516c\u544a\u4fe1\u606f\uff01\uff01"].map((function(e){return(0,u.jsxs)("span",{children:[(0,u.jsx)("span",{children:e}),s?" ":(0,u.jsx)("br",{})]})}))})}),(0,u.jsx)("div",{onClick:function(){return l((function(e){return!e}))},children:s?(0,u.jsx)(a.Z,{}):(0,u.jsx)(c.Z,{})})]})})},p=function(e,t,s,n,o){return{key:t,icon:s,children:n,label:e,type:o}},m=[p("Navigation One","sub1",null,[p("Item 1","g1",null,[p("Option 1","1"),p("Option 2","2")],"group"),p("Item 2","g2",null,[p("Option 3","3"),p("Option 4","4")],"group")]),p("Navigation Two","sub2",null,[p("Option 5","5"),p("Option 6","6"),p("Submenu","sub3",null,[p("Option 7","7"),p("Option 8","8")])]),p("Navigation Three","sub4",null,[p("Option 9","9"),p("Option 10","10"),p("Option 11","11"),p("Option 12","12")])],g=function(){var e=(0,i.UO)(),t=(0,i.s0)(),s=(0,i.TH)();return(0,u.jsxs)("div",{className:"middle",children:[(0,u.jsx)("div",{className:"left",style:{overflowY:"scroll"},children:(0,u.jsx)(r.Z,{onClick:function(s){if(localStorage.getItem("user_token")){var n=JSON.parse(JSON.stringify(s.keyPath));n.shift(),t("/test/".concat(e.page,"/").concat(s.key),{state:{defaultOpenKeys:n}})}else l.ZP.error("\u8bf7\u5148\u767b\u5f55"),t("/test/login/1")},defaultSelectedKeys:[e.id],defaultOpenKeys:s.state&&s.state.defaultOpenKeys?s.state.defaultOpenKeys:["sub1"],mode:"inline",items:m})}),(0,u.jsx)("div",{className:"right flex_c_c",style:{fontSize:"22px"},children:1==e.id?(0,u.jsx)(d,{}):"\u8fd9\u662f\u7b2c".concat(e.id,"\u4e2a\u9009\u9879")})]})},f=s(2409),x=s(5885),h=s(4587),j=s(435),v=function(e){var t=e.setLogin,s={username:localStorage.getItem("username")?localStorage.getItem("username"):"",password:localStorage.getItem("password")?localStorage.getItem("password"):""},n=localStorage.getItem("username")&&localStorage.getItem("password");(0,o.useEffect)((function(){console.log(s)}),[s]);return(0,u.jsxs)(f.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{username:s.username,password:s.password,remember:n},onFinish:function(e){console.log("Success:",e),l.ZP.success("\u767b\u5f55\u6210\u529f\uff01"),localStorage.setItem("user_token",!0),t(!0),e.remember?(localStorage.setItem("username",e.username),localStorage.setItem("password",e.password)):(localStorage.removeItem("username"),localStorage.removeItem("password"))},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[(0,u.jsx)("div",{className:"welcome",children:"\u6b22\u8fce\u767b\u5f55"}),(0,u.jsx)(f.Z.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"\u672a\u8f93\u5165\u7528\u6237\u540d\uff01"}],children:(0,u.jsx)(x.Z,{style:{fontSize:"18px",fontWeight:400,borderRadius:"4px"}})}),(0,u.jsx)(f.Z.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u672a\u8f93\u5165\u5bc6\u7801!"}],children:(0,u.jsx)(x.Z.Password,{style:{fontSize:"18px",fontWeight:400,borderRadius:"4px"}})}),(0,u.jsx)(f.Z.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16},children:(0,u.jsx)(h.Z,{children:"Remember me"})}),(0,u.jsx)(f.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,u.jsx)(j.Z,{type:"primary",htmlType:"submit",style:{borderRadius:"6px"},children:"Submit"})})]})},w=s(9214),y=s(8961),b=[{label:"\u767b\u5f55\u754c\u9762",key:"login",icon:(0,u.jsx)(w.Z,{}),step:0},{label:"\u83dc\u5355\u529f\u80fd",key:"menu",icon:(0,u.jsx)(y.Z,{}),step:1}],S=function(e){var t=e.current,s=(e.login,(0,i.s0)());return(0,u.jsx)(r.Z,{onClick:function(e){if("login"!==e.key&&!localStorage.getItem("user_token"))return l.ZP.error("\u8bf7\u5148\u767b\u5f55\uff01\uff01\uff01"),void s("/test/login/1");s("/test/".concat(e.key,"/1"))},selectedKeys:[t],mode:"horizontal",items:b,style:{height:"100%",fontSize:"20px"}})},k=s(7063),_=function(){var e=["/","/test/login/1","/test/menu/1","logout"],t=(0,i.s0)(),s=localStorage.getItem("user_token"),r=(0,o.useState)(s),a=(0,n.Z)(r,2),c=a[0],d=a[1],p=(0,i.UO)(),m=function(s){if("logout"===e[s])localStorage.removeItem("user_token"),t("/test/login/1");else if("/test/menu/1"===e[s]){if(!localStorage.getItem("user_token"))return l.ZP.error("\u8bf7\u5148\u767b\u5f55\uff01\uff01\uff01"),void t("/test/login/1");t(e[s])}else t(e[s])};return(0,o.useEffect)((function(){d(s)}),[s]),(0,u.jsxs)("div",{className:"w-100 h-100 test_page",style:{overflowY:"scroll"},children:[(0,u.jsxs)("ul",{className:"show_card",id:"show_card",children:[(0,u.jsx)("li",{className:"card_opstions",onClick:function(){return m(0)},children:"\u9996\u9875"}),(0,u.jsx)("li",{className:"card_opstions",onClick:function(){return m(1)},children:"\u767b\u5f55\u754c\u9762"}),(0,u.jsx)("li",{className:"card_opstions",onClick:function(){return m(2)},children:"\u83dc\u5355\u754c\u9762"}),(0,u.jsx)("li",{className:"card_opstions",onClick:function(){return m(3)},children:"\u9000\u51fa\u767b\u5f55"})]}),(0,u.jsxs)("div",{className:"wrap",children:[(0,u.jsx)("div",{className:"top",children:(0,u.jsx)(S,{current:p.page,login:c})}),(0,u.jsxs)("div",{className:"center",children:["login"===p.page?c?(0,u.jsx)(k.ZP,{status:"success",title:"\u767b\u5f55\u6210\u529f",subTitle:"\u73b0\u5728\u4f60\u53ef\u4ee5\u9009\u62e9\u8bbf\u95ee\u5176\u4ed6\u9875\u9762\uff0c\u6216\u8005\u9000\u51fa\u767b\u5f55",extra:[(0,u.jsx)(j.Z,{type:"primary",onClick:function(){d(!1),localStorage.removeItem("user_token")},children:"\u9000\u51fa\u767b\u5f55"},"console"),(0,u.jsx)(j.Z,{onClick:function(){localStorage.getItem("user_token")?window.open("http://".concat(window.location.host,"/test/menu/1"),"_blank"):(l.ZP.error("\u8bf7\u5148\u767b\u5f55\uff01\uff01\uff01"),window.location.reload())},children:"\u5728\u65b0\u7684\u6807\u7b7e\u9875\u6253\u5f00\u83dc\u5355"},"buy")]}):(0,u.jsxs)("div",{className:"w-100 h-100 flex_c_c",style:"login"!==p.page||c?{}:{position:"relative"},children:["login"!==p.page||c?null:(0,u.jsx)("div",{class:"w-100 h-100 video-wrap",children:(0,u.jsx)("video",{class:"video-wrap__video",poster:"https://qq-web.cdn-go.cn/zc.qq.com/f59c7d00/v3/img/img-bg@2x.png",src:"https://qq-web.cdn-go.cn/zc.qq.com/f59c7d00/v3/img/bg-video.mp4",tabindex:"-1",airplay:"allow",height:"100% ","x-webkit-airplay":"true",playsinline:"true","webkit-playsinline":"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true",autoplay:"",muted:""})}),(0,u.jsx)("div",{className:"flex_c_c",style:{width:"400px",padding:"16px",borderRadius:"4px",fontSize:"14px",fontWeight:400},children:(0,u.jsx)(v,{setLogin:d})})]}):null,"menu"===p.page?(0,u.jsx)(g,{}):null]})]})]})}}}]);
//# sourceMappingURL=734.6dd60c16.chunk.js.map