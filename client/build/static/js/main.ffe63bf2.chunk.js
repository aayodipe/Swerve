(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){e.exports=a.p+"static/media/bad-potehole.1ba29c9d.jpg"},135:function(e,t,a){e.exports=a(257)},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){},254:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},257:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(64),c=a.n(o),l=a(266),s=a(125),i=a(262),u=a(261),m=a(13),p=a.n(m),d=a(31),f=a(29),h=a(32),E=a(69),g=a(15),b=a(259),v=a(260),N=a(9),O=a.n(N),y=function(e){e?O.a.defaults.headers.common["x-auth-token"]=e:delete O.a.defaults.headers.common["x-auth-token"]},k=function(){return function(){var e=Object(d.a)(p.a.mark(function e(t){var a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&y(localStorage.token),e.prev=1,e.next=4,O.a.get("/api/auth");case 4:a=e.sent,console.log(a),t({type:"USER_LOADED",payload:a.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"AUTH_ERROR"});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}()},C=(a(246),Object(g.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}},{register:function(e){var t=e.name,a=e.email,n=e.password;return function(){var e=Object(d.a)(p.a.mark(function e(r){var o,c,l;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o={headers:{"Content-Type":"application/json"}},c=JSON.stringify({name:t,email:a,password:n}),e.prev=2,e.next=5,O.a.post("/api/user",c,o);case 5:l=e.sent,r({type:"REGISTER_SUCCESS",payload:l.data}),r(k()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),r({type:"REGISTER_FAIL"});case 13:case"end":return e.stop()}},e,null,[[2,10]])}));return function(t){return e.apply(this,arguments)}}()}})(function(e){var t=e.register,a=e.isAuthenticated,o=Object(n.useState)({name:"",email:"",password:"",password2:""}),c=Object(E.a)(o,2),l=c[0],s=c[1],i=l.name,u=l.email,m=l.password,g=l.password2,N=function(e){return s(Object(h.a)({},l,Object(f.a)({},e.target.name,e.target.value)))},O=function(){var e=Object(d.a)(p.a.mark(function e(a){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),m!==g?alert("Passwords do not match"):t({name:i,email:u,password:m});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a?r.a.createElement(b.a,{to:"/dashboard"}):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"headerWaves"}),r.a.createElement("h1",{className:"headerFont"},"SWERVE")),r.a.createElement("div",{className:"login-form normal-font"},r.a.createElement("p",{className:"lead normal-font"},r.a.createElement("i",{className:"fas fa-user"})," Create Your Account"),r.a.createElement("form",{className:"form",onSubmit:function(e){return O(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",placeholder:"Userame",name:"name",value:i,onChange:function(e){return N(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",value:u,onChange:function(e){return N(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:m,onChange:function(e){return N(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Confirm Password",name:"password2",value:g,onChange:function(e){return N(e)}})),r.a.createElement("input",{type:"submit",className:"btn btn-container2 btn-primary custom-btn",value:"Register"}))),r.a.createElement("p",{className:"my-1 sign-up"},"Already have an account? ",r.a.createElement(v.a,{to:"/login"},"Login")))})),j=(a(247),Object(g.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated}},{login:function(e,t){return function(){var a=Object(d.a)(p.a.mark(function a(n){var r,o,c;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},o=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,O.a.post("/api/auth",o,r);case 5:c=a.sent,n({type:"LOGIN_SUCCESS",payload:c.data}),n(k()),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),n({type:"LOGIN_FAIL"});case 13:case"end":return a.stop()}},a,null,[[2,10]])}));return function(e){return a.apply(this,arguments)}}()}})(function(e){var t=e.login,a=e.isAuthenticated,o=Object(n.useState)({email:"",password:""}),c=Object(E.a)(o,2),l=c[0],s=c[1],i=l.email,u=l.password,m=function(e){return s(Object(h.a)({},l,Object(f.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(d.a)(p.a.mark(function e(a){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t(i,u);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a?r.a.createElement(b.a,{to:"/dashboard"}):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"headerWaves"}),r.a.createElement("h1",{className:"headerFont"},"SWERVE")),r.a.createElement("div",{className:"login-form normal-font"},r.a.createElement("p",{className:"normal-font"},r.a.createElement("i",{className:"fas fa-user"})," Sign Into Your Account"),r.a.createElement("form",{className:"form",onSubmit:function(e){return g(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",placeholder:"Email Address",name:"email",value:i,onChange:function(e){return m(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",value:u,onChange:function(e){return m(e)},minLength:"6"})),r.a.createElement("input",{type:"submit",className:"btn btn-container btn-primary custom-btn normal-font",value:"Login"}))),r.a.createElement("p",{className:"my-1 sign-up"},"Don't have an account? ",r.a.createElement(v.a,{to:"/register",className:"sign-up-link"},"Sign Up")))})),S=a(19),w=a(20),A=a(22),L=a(21),x=a(23),I=(a(248),Object(g.b)(function(e){return{auth:e.auth}},{logout:function(){return function(e){e({type:"LOGOUT"})}}})(function(e){var t=e.auth,a=t.isAuthenticated,o=t.loading,c=e.logout,l=r.a.createElement("div",null,r.a.createElement("a",{className:"logout-button",onClick:function(){c(),console.log("hit")}},r.a.createElement("i",{className:"fas fa-sign-out-alt"})," ",r.a.createElement("span",null,"Logout"))),s=r.a.createElement("div",{className:"loggedout-nav"},r.a.createElement("div",{className:"loggedout-header"},r.a.createElement("h2",{className:"loggedout-header-font"},"You are logged out. To view the dashboard and post please login or sign up.")),r.a.createElement("a",{className:"loggedout-links"},r.a.createElement(v.a,{to:"/register"},"Register")),r.a.createElement("a",{className:"loggedout-links"},r.a.createElement(v.a,{to:"/login"},"Login")));return r.a.createElement("div",{className:"navbar-header"},r.a.createElement("div",{className:"navbar-background"}),r.a.createElement("nav",{className:"navbar "},!o&&r.a.createElement(n.Fragment,null,a?l:s)),r.a.createElement("div",{className:"svg-container"},r.a.createElement("svg",{viewBox:"0 0 3500 500",className:"svg1"},r.a.createElement("path",{d:"M0,100 C150,200 350,0 500,100 C650,200 700,0 850,50 C1000,100 1150,200 1300,100 C1450,0 1600,100 1750,150 C1900,200 2050,0 2200,100 C2350,200 2500,100 2650,100 C2800,100 2950,200 3100,100 C3250,0 3400,200 3550,150 L3500,00 L0,0 Z"}))),r.a.createElement("div",null,r.a.createElement("svg",{viewBox:"0 0 3500 500",className:"svg2"},r.a.createElement("path",{d:"M0,300 C125,400 250,50 375,250 C500,400 625,450 750,250 C875,100 1000,50 1125,150 C1250,300 1375,400 1500,250 C1625,100 1750,200 1875,275 C2000,350 2125,400 2250,300 C2375,200 2500,100 2625,200 C2750,300 2875,400 3000,300 C3125,200 3250,150 3375,200 C3425,250 3475,300 3500,350 L3500,00 L0,0 Z"}))))})),R=(a(249),function(e){function t(){return Object(S.a)(this,t),Object(A.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer-links"},r.a.createElement("h1",null,r.a.createElement("a",{href:"/post",className:"link-text"},"Post"))))}}]),t}(n.Component)),P=(a(250),{getAllPosts:function(){return O.a.get("/api/posts")},getPostById:function(e){return O.a.get("/api/posts/"+e)},deletePost:function(e){return O.a.delete("/api/posts/"+e)},savePost:function(e){return O.a.post("/api/posts",e)},saveUser:function(e){return O.a.post("/api/user",e)},getUserById:function(e){return O.a.get("/api/posts/"+e)},addLikes:function(e){return O.a.put("/api/posts/like/".concat(e))},unLike:function(e){return O.a.put("/api/posts/unlike/".concat(e))}}),U=a(263),_=a(265),F=(a(251),a(128)),T=a.n(F),D=function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(A.a)(this,Object(L.a)(t).call(this,e))).loadAllPost=function(){P.getAllPosts().then(function(e){console.log(e),a.setState({posts:e.data,location:"",description:"",title:"",image:null})}).catch(function(e){return console.log(e)})},a.fileSelectedHandler=function(e){console.log(e.target.files[0]),a.setState({image:T.a})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.location&&a.state.description&&P.savePost({location:a.state.location,description:a.state.description,image:a.state.image,title:a.state.title}).then(function(e){a.props.history.push("/dashboard")}).catch(function(e){return console.log(e)})},a.state={posts:[],location:"",description:"",title:"",image:null},a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.loadAllPost()}},{key:"render",value:function(){return r.a.createElement("div",{className:"Register"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"headerWaves"}),r.a.createElement("h1",{className:"headerFont"},"SWERVE")),r.a.createElement("form",{onSubmit:this.handleFormSubmit,enctype:"multipart/form-data"},r.a.createElement(U.a.Group,{controlId:"location"},r.a.createElement(U.a.Label,{className:"normal-font"}," Street Name "),r.a.createElement(U.a.Control,{autoFocus:!0,type:"text",name:"location",value:this.state.location,onChange:this.handleInputChange,placeholder:"Example: Ward Parkway"})),r.a.createElement(U.a.Group,{controlId:"description"},r.a.createElement(U.a.Label,{className:"normal-font"}," Please enter the description of the issue "),r.a.createElement(U.a.Control,{autoFocus:!0,as:"textarea",rows:"5",type:"textarea",name:"description",value:this.state.description,onChange:this.handleInputChange})),r.a.createElement(U.a.Group,{controlId:"image"},r.a.createElement(U.a.Label,{className:"normal-font"},"Image (Required)"),r.a.createElement(U.a.Control,{onChange:this.fileSelectedHandler,type:"file",name:"image"})),r.a.createElement(_.a,{block:!0,className:"custom-btn",onClick:this.handleFormSubmit},"Submit")))}}]),t}(n.Component),G=a(131),W=a.n(G),B=a(264),M=(a(254),a(68)),Y=a.n(M);var H=function(e){console.log(e);var t=e.post;return r.a.createElement(B.a,null,r.a.createElement(B.a.Title,{className:"post-header"},r.a.createElement("img",{src:Y.a,alt:"user icon",className:"post-logo"})," ",r.a.createElement("h1",{className:"location-name"},"@",t.location)),r.a.createElement(B.a.Img,{className:"post-image",variant:"top",src:t.image,onChange:e.uploadFile}),r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,null,r.a.createElement("h3",{className:"text-info"},t.title)),r.a.createElement(B.a.Text,null,r.a.createElement("h3",{className:"post-info"},t.description))),r.a.createElement("footer",{className:"blockquote-footer footer-date"},"Posted on ",r.a.createElement(W.a,{format:"YYYY/MM/DD"},t.date)," ","  ","by ",r.a.createElement("cite",{title:"Source Title"},t.name),"    ",r.a.createElement(_.a,{className:"float-right notes-button"},"View Discussion ",r.a.createElement("span",{className:"comment-count"},t.comments.length)),r.a.createElement("button",{type:"button",className:"btn btn-light ml-4 middle-buttons",onClick:function(){return e.addLikes(t._id)}},r.a.createElement("i",{class:"fas fa-thumbs-up"}),r.a.createElement("span",{className:"ml-1"},t.likes.length)),r.a.createElement("button",{type:"button",className:"btn btn-light ml-4 middle-buttons",onClick:function(){return e.unLike(t._id)}},r.a.createElement("i",{class:"fas fa-thumbs-down"})),"  ",r.a.createElement("button",{type:"button",className:"btn btn-danger ml-4 middle-buttons",onClick:function(){return e.deletePost(t._id)}},r.a.createElement("i",{class:"fas fa-times"}))))},V=function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(A.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[]},a.UploadAll=function(){P.getAllPosts().then(function(e){console.log(e.data),a.setState({posts:e.data})})},a.deletePost=function(e){console.log(a.state.posts),P.deletePost(e).then(function(e){return a.UploadAll()}).catch(function(e){return console.log(e)})},a.addLikes=function(e){P.addLikes(e).then(function(e){return a.UploadAll()}).catch(function(e){return console.log(e)})},a.unLike=function(e){P.unLike(e).then(function(e){return a.UploadAll()}).catch(function(e){return console.log(e)})},a}return Object(x.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.UploadAll()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"PostContainer"},r.a.createElement("div",{className:"post-top"},this.state.posts.map(function(t){return r.a.createElement("div",{style:{marginBottom:20}},r.a.createElement(H,{post:t,deletePost:e.deletePost,addLikes:e.addLikes,unLike:e.unLike}))})))}}]),t}(n.Component),q=(a(255),function(e){function t(){return Object(S.a)(this,t),Object(A.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"swerve-header"},r.a.createElement("h1",{className:"header-text"},"SWERVE"),r.a.createElement("div",{className:"username-logo"},r.a.createElement("img",{src:Y.a,alt:"user icon",className:"logo"}),this.props.auth.user&&r.a.createElement("h1",{className:"username-text"},"Hello, ",this.props.auth.user.name,"!")))}}]),t}(n.Component));var J=Object(g.b)(function(e){return console.log(e),{auth:e.auth}})(q),Z=function(e){function t(){return Object(S.a)(this,t),Object(A.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(J,null),r.a.createElement(V,null),r.a.createElement(R,null))}}]),t}(n.Component),z=a(134),K=Object(g.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=a.isAuthenticated,o=a.loading,c=Object(z.a)(e,["component","auth"]);return r.a.createElement(u.a,Object.assign({},c,{render:function(e){return n||o?r.a.createElement(t,e):r.a.createElement(b.a,{to:"/login"})}}))}),Q=function(){return r.a.createElement("section",{className:"main-container"},r.a.createElement(i.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:Z}),r.a.createElement(u.a,{exact:!0,path:"/register",component:C}),r.a.createElement(u.a,{exact:!0,path:"/login",component:j}),r.a.createElement(u.a,{exact:!0,path:"/dashboard",component:Z}),r.a.createElement(K,{exact:!0,path:"/post",component:D})))},X=a(30),$=a(132),ee=a(133),te={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null},ae=Object(X.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"USER_LOADED":return Object(h.a)({},e,{isAuthenticated:!0,loading:!1,user:n});case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",n.token),Object(h.a)({},e,n,{isAuthenticated:!0,loading:!1});case"REGISTER_FAIL":case"AUTH_ERROR":case"LOGIN_FAIL":case"LOGOUT":return localStorage.removeItem("token"),Object(h.a)({},e,{token:null,isAuthenticated:!1,loading:!1});default:return e}}}),ne=[ee.a],re=Object(X.createStore)(ae,{},Object($.composeWithDevTools)(X.applyMiddleware.apply(void 0,ne)));a(256);localStorage.token&&y(localStorage.token);var oe=function(){return Object(n.useEffect)(function(){re.dispatch(k())},[]),r.a.createElement(g.a,{store:re},r.a.createElement(l.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(u.a,{component:Q})))))},ce={issuer:"".concat("https://dev-374300.okta.com","/oauth2/default"),redirect_uri:"".concat(window.location.origin,"/implicit/callback"),client_id:"0oaiqkwiy4SgTlGx2356"};c.a.render(r.a.createElement(l.a,null,r.a.createElement(s.Security,ce,r.a.createElement(oe,null))),document.getElementById("root"))},68:function(e,t,a){e.exports=a.p+"static/media/icon_logo.1fd59a20.png"}},[[135,1,2]]]);
//# sourceMappingURL=main.ffe63bf2.chunk.js.map