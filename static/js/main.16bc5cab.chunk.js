(this.webpackJsonpmyblog=this.webpackJsonpmyblog||[]).push([[0],{560:function(e,t,a){},565:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(12),r=a.n(c),o=a(17),s=a(24),l=a(613),d=function(e,t){return"/post-"+e+"-"+t},j=function(e){return e+"?timestamp="+(new Date).getTime()};function p(e,t){return new Date(t.created).getTime()-new Date(e.created).getTime()}var b=a(42),h=a(645),g=a(640),m=a(644),u=a(77),O=a(618),x=a(167),f=a.n(x),v=a(617),y=a(616),N=a(15),w=a(58),S=Object(w.b)({name:"sidebarState",initialState:{mobileVisible:!1},reducers:{updateVisiblity:function(e,t){e.mobileVisible=t.payload}}}),T=S.actions.updateVisiblity,k=function(e){return e.sidebarState.mobileVisible},D=S.reducer,B=a(26),P={blogRoot:"/Blog",blogName:"My First Blog",blogDescription:"This blog deals with my research progress at I.I.T Mandi M.S program, expect content related to compilers, react, books, etc...",authorName:"Meetesh Mehta",authorEmail:"meeteshmehta4@gmail.com",authorImage:"/Blog/blog-pic.jpg",authorDescription:"I am interested in music, long walks and computers. I don't really use any social media, better to drop me ten emails than to get an answer elsewhere.",URI_POSTS:"/blog/posts.json",URI_POST_FILES:"/blog/posts",sidebarTheme:{blogLeftDrawerBackground:"#2a2a2a",blogLogo:"#fff",blogDescription:"#a0a0a0",authorName:"#fefefe",authorDescription:"#e0e0e0",textTitle:"#a1a1a1",textDesc:"#e0e0e0",textDate:"#a1a1a1"},dark:{},light:{primary:{light:"#7986cb",main:"#3f51b5",dark:"#303f9f",contrastText:"#fff"},secondary:{light:"#ff4081",main:"#f50057",dark:"#c51162",contrastText:"#fff"}}},R=a(2);console.log();var W=240,C=Object(l.a)((function(e){return{drawer:Object(b.a)({},e.breakpoints.up("md"),{width:W,flexShrink:0}),drawerPaper:{width:W},leftSide:{backgroundColor:e.blogLeftDrawerBackground,flexGrow:1,padding:e.spacing(2),display:"flex",flexDirection:"column"},leftTop:{flex:1},siteName:{fontWeight:e.typography.fontWeightLight,color:e.blogLogo,fontSize:"3rem",cursor:"pointer",marginTop:e.spacing(1),marginBottom:e.spacing(3),textDecoration:"none"},siteDescription:Object(o.a)(Object(o.a)({},e.typography.body2),{},{color:e.blogDescription,fontSize:"0.8rem"}),avatarContainer:{display:"flex",flexDirection:"column"},largeAvatar:{width:90,height:90},authorName:{marginTop:e.spacing(1),marginBottom:e.spacing(1),color:e.authorName,fontWeight:e.typography.fontWeightRegular},authorDes:Object(o.a)(Object(o.a)({},e.typography.caption),{},{color:e.authorDescription,fontWeight:e.typography.fontWeightMedium,padding:e.spacing(),borderLeft:"2px solid ".concat(e.palette.primary.main)})}}));var I=function(e){var t=e.window,a=C(),n=void 0!==t?function(){return t().document.body}:void 0,i=Object(N.c)(k),c=Object(N.b)(),r=Object(R.jsxs)("div",{className:a.leftSide,children:[Object(R.jsx)(u.a,{component:B.b,to:"/",align:"left",variant:"h4",className:a.siteName,children:P.blogName}),Object(R.jsx)("div",{className:a.leftTop,children:Object(R.jsxs)(u.a,{paragraph:!0,className:a.siteDescription,children:[P.blogDescription,Object(R.jsx)("br",{}),Object(R.jsx)("br",{})]})}),Object(R.jsx)("div",{children:Object(R.jsxs)("div",{className:a.avatarContainer,children:[Object(R.jsx)(m.a,{alt:P.authorName+"'s picture",src:P.authorImage,className:a.largeAvatar}),Object(R.jsx)(u.a,{align:"left",variant:"h6",className:a.authorName,children:P.authorName}),Object(R.jsx)(u.a,{paragraph:!0,align:"left",className:a.authorDes,children:P.authorDescription}),Object(R.jsx)(y.a,{title:P.authorEmail,"aria-label":"email",arrow:!0,children:Object(R.jsx)(v.a,{href:"mailto:"+P.authorEmail,children:Object(R.jsx)(O.a,{color:"primary","aria-label":"author-email",children:Object(R.jsx)(f.a,{})})})})]})})]});return Object(R.jsxs)("nav",{className:a.drawer,"aria-label":"blog details",children:[Object(R.jsx)(g.a,{smUp:!0,implementation:"css",children:Object(R.jsx)(h.a,{container:n,variant:"temporary",open:i,onClose:function(){c(T(!i))},classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0},children:r})}),Object(R.jsx)(g.a,{smDown:!0,implementation:"css",children:Object(R.jsx)(h.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0,children:r})})]})},L=a(619),M=a(620),z=a(625),E=a(621),H=a(626),J=a(622),U=a(623),A=a(168),_=a.n(A),G=a(169),V=a.n(G),F=a(170),$=a.n(F),q=a(171),K=a.n(q),Q=a(624),X=a(65),Y=Object(w.b)({name:"currentPost",initialState:{currentPost:null},reducers:{updateCurrentPost:function(e,t){e.currentPost=t.payload}}}),Z=Y.actions.updateCurrentPost,ee=function(e){return e.currentPost.currentPost},te=Y.reducer,ae=Object(w.b)({name:"postsJson",initialState:{postsJson:{}},reducers:{updatePostsJson:function(e,t){e.postsJson=t.payload}}}),ne=ae.actions.updatePostsJson,ie=function(e){return e.postsJson.postsJson},ce=ae.reducer,re=300,oe=Object(l.a)((function(e){return{rightAside:{width:re,padding:e.spacing(1),paddingTop:e.spacing(3)},lineageHolder:{marginTop:e.spacing(3)},lineageList:{maxHeight:300,overflow:"scroll"}}}));var se=function(e){var t=oe(),a=Object(N.c)(ie),n=Object(N.c)(ee),c=i.a.useState(!0),r=Object(s.a)(c,2),o=r[0],l=r[1],j=function(){if(console.log("RIGHT: ",n),null!==n&&void 0!==n&&void 0!==n.lineage){var e=Object(X.a)({path:"$.posts[?(@.lineage === '".concat(n.lineage,"')]"),json:a});return e.sort(p),{list:e,id:n.id,name:n.lineage}}return{}}();return Object(R.jsx)(g.a,{smDown:!0,implementation:"css",children:Object(R.jsxs)("div",{className:t.rightAside,children:[Object(R.jsx)(L.a,{className:t.root,children:Object(R.jsx)(M.a,{children:Object(R.jsx)(u.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:"Site is still under development, if you find any bugs please drop an email. Thank you."})})}),void 0===j.name?Object(R.jsx)("br",{}):Object(R.jsxs)("div",{className:t.lineageHolder,children:[Object(R.jsxs)(E.a,{button:!0,onClick:function(){l(!o)},children:[Object(R.jsx)(J.a,{children:Object(R.jsx)(_.a,{})}),Object(R.jsx)(U.a,{primary:j.name,secondary:"post lineage shows all the posts in this series."}),o?Object(R.jsx)(V.a,{}):Object(R.jsx)($.a,{})]}),Object(R.jsx)(Q.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(R.jsx)(z.a,{className:t.lineageList,dense:!0,children:j.list.map((function(e,t){return Object(R.jsxs)(E.a,{component:B.b,to:d(e.id,e.title),selected:e.id===j.id,button:!0,children:[Object(R.jsx)(H.a,{children:Object(R.jsx)(m.a,{children:Object(R.jsx)(K.a,{style:{color:e.id===j.id?"green":"gray"}})})}),Object(R.jsx)(U.a,{primary:e.title,secondary:e.created})]},"lineage-"+t)}))})})]})]})})},le=a(627),de=Object(l.a)((function(e){return{root:{marginLeft:e.spacing(3),marginRight:e.spacing(3),marginTop:e.spacing(2)},date:{fontWeight:e.typography.fontWeightBold,fontSize:e.typography.pxToRem(12),color:e.textDate,marginTop:e.spacing(2)},postContainer:{marginTop:e.spacing(2),width:"100%"},skeletonContainer:{marginTop:e.spacing(2)},cardPostTitle:{fontWeight:e.typography.fontWeightBold},cardPostDesc:{fontWeight:e.typography.fontWeightRegular,fontSize:e.typography.pxToRem(13)},heading:{fontWeight:e.typography.fontWeightBold,fontSize:e.typography.pxToRem(25)}}}));var je=function(e){var t=de(),a=Object(N.c)(ee),n=Object(N.c)(ie).posts[0];return null===a&&(a=n),Object(R.jsx)("div",{className:t.root,children:Object(R.jsxs)("div",{children:[Object(R.jsx)(u.a,{className:t.heading,variant:"h6",component:"h2",children:"Read Next"}),Object(R.jsx)(L.a,{className:t.postContainer,children:Object(R.jsx)(le.a,{component:B.b,to:d(a.id,a.title),children:Object(R.jsxs)(M.a,{children:[Object(R.jsx)(u.a,{className:t.cardPostTitle,gutterBottom:!0,variant:"h5",component:"h2",children:a.title}),Object(R.jsx)(u.a,{className:t.cardPostDesc,variant:"body2",component:"p",children:a.description}),Object(R.jsx)(u.a,{className:t.date,children:a.created})]})})})]})})},pe=a(181),be=a(638),he=a(628),ge=a(637),me=a(629),ue=Object(l.a)((function(e){return{date:{fontWeight:e.typography.fontWeightBold,fontSize:e.typography.pxToRem(12),color:e.textDate,marginTop:e.spacing(2)},postContainer:{margin:e.spacing(1)},cardPostTitle:{fontWeight:e.typography.fontWeightBold,fontSize:e.typography.pxToRem(16),overflow:"hidden"},cardPostDesc:{fontWeight:e.typography.fontWeightRegular,fontSize:e.typography.pxToRem(16)}}}));var Oe=function(e){var t=ue(),a=e.post;return Object(R.jsx)(L.a,{className:t.postContainer,children:Object(R.jsx)(le.a,{className:t.clickableArea,component:B.b,to:d(a.id,a.title),children:Object(R.jsxs)(M.a,{children:[Object(R.jsx)(u.a,{className:t.cardPostTitle,gutterBottom:!0,variant:"h5",component:"h2",children:a.title}),Object(R.jsx)(u.a,{className:t.cardPostDesc,variant:"body2",color:"textSecondary",component:"p",children:a.description}),Object(R.jsx)(u.a,{className:t.date,children:a.created})]})})})},xe=Object(l.a)((function(e){var t;return{root:Object(b.a)({marginTop:e.spacing(2),overflow:"hidden"},e.breakpoints.down("md"),{marginLeft:e.spacing(1),marginRight:e.spacing(1),marginTop:e.spacing(2)}),tabContainer:(t={},Object(b.a)(t,e.breakpoints.down("md"),{maxWidth:"60vw"}),Object(b.a)(t,"maxWidth","40vw"),t)}}));function fe(e){var t=e.children,a=e.value,n=e.index,i=Object(pe.a)(e,["children","value","index"]);return Object(R.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},i),{},{children:a===n&&Object(R.jsx)(ge.a,{p:3,children:t})}))}var ve=function(e){var t=xe(),a=i.a.useState(0),n=Object(s.a)(a,2),c=n[0],r=n[1],l=Object(N.c)(ie);return Object(R.jsx)("div",{className:t.root,children:Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{className:t.tabContainer,children:Object(R.jsx)(be.a,{variant:"scrollable",scrollButtons:"on",value:c,onChange:function(e,t){r(t)},"aria-label":"lineage selector",children:l.categories.map((function(e,t){return Object(R.jsx)(he.a,Object(o.a)({label:e},function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(t)),t+"tab-section")}))})}),l.categories.map((function(e,t){return Object(R.jsx)(fe,{value:c,index:t,children:Object(R.jsx)(me.a,{container:!0,spacing:0,children:Object(X.a)({path:"$.posts[?(@.category === '".concat(e,"')]"),json:l}).map((function(e){return Object(R.jsx)(me.a,{item:!0,xs:12,sm:4,children:Object(R.jsx)(Oe,{post:e})},e.id)}))})},t+"tab")}))]})})},ye=a(172),Ne=a.n(ye),we=a(636),Se=a(641),Te=Object(l.a)((function(e){return{actionBar:{marginTop:e.spacing(1),marginLeft:e.spacing(3),marginRight:e.spacing(3)}}}));var ke=function(e){var t=Te(),a=Object(N.c)(ie).posts,n=Object(N.c)(k),i=Object(N.b)();return Object(R.jsxs)("div",{className:t.actionBar,children:[Object(R.jsx)(g.a,{mdUp:!0,implementation:"css",children:Object(R.jsx)(O.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(){i(T(!n))},children:Object(R.jsx)(Ne.a,{})})}),Object(R.jsx)(Se.a,{freeSolo:!0,onChange:function(e,t){if(null!==t){var n=parseInt(t.split(" >")[0]);i(Z(a[n]))}},options:a.map((function(e,t){return t+" > "+e.title})),renderInput:function(e){return Object(R.jsx)(we.a,Object(o.a)(Object(o.a)({},e),{},{label:"Search Posts",margin:"normal",variant:"outlined"}))}})]})},De=a(66);var Be=function(e){return Object(R.jsxs)(De.b.div,{initial:"out",animate:"in",exit:"out",variants:{in:{opacity:1,scale:1},out:{opacity:0,scale:.8}},transition:{duration:.3,type:"backInOut"},children:[Object(R.jsx)(ke,{}),Object(R.jsx)(je,{}),Object(R.jsx)(ve,{})]})},Pe=a(570),Re=a(173),We=a.n(Re),Ce=a(120),Ie=a(174),Le=a.n(Ie),Me=(a(296),a(632)),ze=a(16),Ee=a(96),He=a.n(Ee),Je=a(630),Ue=a(639),Ae=a(631),_e=a(646),Ge=a(633),Ve=a(179),Fe=a.n(Ve),$e=Object(l.a)((function(e){return{actionBar:{marginLeft:e.spacing(3),marginTop:e.spacing(3)},paper:Object(b.a)({marginLeft:e.spacing(10),marginRight:e.spacing(10),marginTop:e.spacing(2),marginBottom:e.spacing(2),padding:e.spacing(6),minHeight:"50vh",fontFamily:"Roboto","& a":{textDecoration:"none"}},e.breakpoints.down("md"),{marginLeft:e.spacing(2),marginRight:e.spacing(2),marginTop:e.spacing(1),padding:e.spacing(2)}),heading:{fontSize:e.typography.pxToRem(40),fontWeight:e.typography.fontWeightBold},divider:{marginTop:e.spacing(4)},categoryName:{marginRight:e.spacing(1)},dateHolder:{display:"flex",alignItems:"center",marginTop:e.spacing(2)},dateStyle:{fontWeight:e.typography.fontWeightLight,fontSize:e.typography.pxToRem(13)},markdownHolder:{},markdownImage:{maxWidth:"100%"},loader:{alignSelf:"center"}}}));var qe=function(e){var t=$e(),a=Object(ze.g)().idRaw.split("-")[0],n=Object(N.b)(),c=Object(N.c)(ie),r=i.a.useState(!0),l=Object(s.a)(r,2),d=l[0],p=l[1],b=i.a.useState(null),h=Object(s.a)(b,2),g=h[0],m=h[1],x=i.a.useState(""),f=Object(s.a)(x,2),v=f[0],w=f[1],S=i.a.useState(!1),T=Object(s.a)(S,2),k=T[0],D=T[1],W=i.a.useState(!1),C=Object(s.a)(W,2),I=C[0],L=C[1],M=i.a.useState(null),z=Object(s.a)(M,2),E=z[0],H=z[1],J=i.a.useState(50),U=Object(s.a)(J,2),A=U[0];U[1],i.a.useEffect((function(){I&&(w(E),p(!1))}),[I]),i.a.useEffect((function(){var e,t=Object(X.a)({path:"$.posts[?(@.id === '".concat(a,"')]"),json:c});t.length<1?(p(!1),D(!1)):(D(!0),n(Z(t[0])),m(t[0]),e=t[0].link,He.a.get(j(P.URI_POST_FILES+"/"+e)).then((function(e){I?(w(e.data),p(!1)):H(e.data)})).catch((function(e){p(!1),D(!1)})))}),[]);var _,G={math:function(e){var t=e.value;return Object(R.jsx)(Ce.a,{block:!0,math:t})},inlineMath:function(e){var t=e.value;return Object(R.jsx)(Ce.a,{math:t})},code:function(e){var t=e.language,a=e.value;return Object(R.jsx)(Ue.a,{wrapLongLines:!0,wrapLines:!0,style:Ae.a,language:t,children:a})},image:function(e){return Object(R.jsx)("img",Object(o.a)(Object(o.a)({},e),{},{className:t.markdownImage}))}};return Object(R.jsxs)(De.b.div,{initial:"out",animate:"in",exit:"out",variants:{in:{y:0},out:{y:"100vh"}},transition:{duration:.5,type:"backInOut"},onAnimationComplete:function(){return L(!0)},children:[Object(R.jsx)("div",{className:t.actionBar,children:Object(R.jsx)(y.a,{title:"Go Back","aria-label":"go-home",arrow:!0,children:Object(R.jsx)(B.b,{to:"/",children:Object(R.jsx)(O.a,{color:"primary","aria-label":"go-home",children:Object(R.jsx)(Fe.a,{})})})})}),Object(R.jsx)(Pe.a,{className:t.paper,elevation:3,children:d||k?d?k?Object(R.jsxs)("div",{children:[Object(R.jsx)(u.a,{className:t.heading,variant:"h2",component:"h1",children:g.title}),Object(R.jsxs)("span",{className:t.dateHolder,children:[Object(R.jsx)(_e.a,{className:t.categoryName,label:g.category}),Object(R.jsxs)(u.a,{className:t.dateStyle,variant:"body2",component:"p",children:["created on ",g.created]})]}),Object(R.jsx)(Me.a,{className:t.divider,variant:"middle"}),A<100?Object(R.jsx)(Ge.a,{variant:"determinate",value:A}):Object(R.jsx)("br",{})]}):A<100?Object(R.jsx)(Ge.a,{variant:"determinate",value:A}):Object(R.jsx)("br",{}):Object(R.jsxs)("div",{children:[Object(R.jsx)(u.a,{className:t.heading,variant:"h2",component:"h1",children:g.title}),Object(R.jsxs)("span",{className:t.dateHolder,children:[Object(R.jsx)(_e.a,{className:t.categoryName,label:g.category}),Object(R.jsxs)(u.a,{className:t.dateStyle,variant:"body2",component:"p",children:["created on ",g.created]})]}),Object(R.jsx)(Me.a,{className:t.divider,variant:"middle"}),Object(R.jsx)(We.a,{className:t.markdownHolder,plugins:[Le.a],renderers:G,children:v})]}):(_="post not found...",Object(R.jsxs)("div",{children:[Object(R.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h2",children:_}),Object(R.jsx)(Je.a,{variant:"rect",width:"100%",height:"60vh"})]}))})]})},Ke=a(634);var Qe=function(e){return Object(R.jsxs)(ge.a,{position:"relative",display:"inline-flex",children:[Object(R.jsx)(Ke.a,Object(o.a)({variant:"determinate"},e)),Object(R.jsx)(ge.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(R.jsx)(u.a,{variant:"caption",component:"div",color:"textSecondary",children:"".concat(Math.round(e.value),"%")})})]})},Xe=a(635),Ye=a(180),Ze=a(643),et=(a(560),a(561),a(562),a(563),a(564),Object(l.a)((function(e){return{root:{display:"flex"},content:{flexGrow:1,display:"flex",flexDirection:"row"},noPostContainer:{flexGrow:1,display:"flex",flexDirection:"column",margin:e.spacing(3)},mainContent:{flex:1,height:"100vh",overflow:"scroll"},actionBar:{marginTop:e.spacing(1),marginLeft:e.spacing(3),marginRight:e.spacing(3)},skeletonContainer:{marginTop:e.spacing(2)},heading:{fontWeight:e.typography.fontWeightBold,fontSize:e.typography.pxToRem(25)}}})));var tt=function(e){var t=i.a.useState(!0),a=Object(s.a)(t,2),n=a[0],c=a[1],r=i.a.useState(50),l=Object(s.a)(r,2),d=l[0],b=l[1],h=i.a.useState(!1),g=Object(s.a)(h,2),m=g[0],O=g[1],x=Object(Ye.a)(Object(o.a)(Object(o.a)({},P.sidebarTheme),{},{palette:Object(o.a)({},P.light)})),f=et(),v=Object(ze.f)(),y=Object(N.b)();return i.a.useEffect((function(){He.a.get(j(P.URI_POSTS),{onDownloadProgress:function(e){if(e.lengthComputable){var t=Math.round(100*e.loaded/e.total);b(t)}}}).then((function(e){0===e.data.posts.length?O(!0):(e.data.posts.sort(p),y(ne(e.data)),b(100),c(!1))})).catch((function(e){console.log(e)}))}),[]),Object(R.jsx)(Xe.a,{theme:x,children:Object(R.jsxs)("div",{className:f.root,children:[Object(R.jsx)(Ze.a,{invisible:!0,open:n,children:Object(R.jsx)(Qe,{value:d})}),Object(R.jsx)(I,{}),n?Object(R.jsx)("div",{}):m?Object(R.jsxs)("div",{className:f.noPostContainer,children:[Object(R.jsx)(u.a,{className:f.heading,variant:"h6",component:"h2",children:"Blog Under Maintenance, check back later..."}),Object(R.jsx)(Je.a,{className:f.skeletonContainer,variant:"rect",width:"100%",height:150})]}):Object(R.jsxs)("main",{className:f.content,children:[Object(R.jsx)("div",{className:f.mainContent,children:Object(R.jsx)(De.a,{exitBeforeEnter:!0,children:Object(R.jsxs)(ze.c,{location:v,children:[Object(R.jsx)(ze.a,{path:"/post-:idRaw",children:Object(R.jsx)(qe,{})}),Object(R.jsx)(ze.a,{path:"/",children:Object(R.jsx)(Be,{})})]},v.pathname)})}),Object(R.jsx)(se,{})]})]})})},at=Object(w.a)({reducer:{postsJson:ce,currentPost:te,sidebarState:D}});r.a.render(Object(R.jsx)(N.a,{store:at,children:Object(R.jsx)(B.a,{basename:"/Blog",children:Object(R.jsx)(tt,{})})}),document.getElementById("root"))}},[[565,1,2]]]);
//# sourceMappingURL=main.16bc5cab.chunk.js.map