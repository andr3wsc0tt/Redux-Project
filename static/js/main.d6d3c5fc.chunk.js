(this.webpackJsonpreduxproject=this.webpackJsonpreduxproject||[]).push([[0],{186:function(e,t,a){e.exports=a.p+"static/media/profile.f45e432e.gif"},199:function(e,t,a){e.exports=a(336)},336:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(38),o=a.n(r),s=a(24),c=a(25),i=a(28),m=a(27),u=a(30),g=a(44),p=(a(96),a(355)),d=a(356),h=a(358),f=a(351),E=a(338),v=a(350),b=a(347),C=a(357),I=a(54);function y(e){return{type:"LOG_OUT",payload:e}}var k=a(26),O=a(354),S=a(352),w=a(346),P=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).loggedOut=function(){var t=e.props;(0,t.logOut)(t.profiles.filter((function(e){return!0===e.loggedIn}))[0]),sessionStorage.setItem("loggedIn","false"),sessionStorage.setItem("userName",""),window.location.href="/"},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.goto;return n.createElement(O.a,{stackable:!0,className:"NavBar"},n.createElement(O.a.Item,null,n.createElement(S.a,{text:"Groups",className:"item1"},n.createElement(S.a.Menu,null,n.createElement(S.a.Item,{text:"Group 1"}),n.createElement(S.a.Item,{text:"Group 2"}),n.createElement(S.a.Item,{text:"Group 3"})))),n.createElement(O.a.Item,null,n.createElement(S.a,{text:"Class Mates",className:"item2"},n.createElement(S.a.Menu,null,n.createElement(S.a.Item,{text:"Andrew"}),n.createElement(S.a.Item,{text:"Charles"}),n.createElement(S.a.Item,{text:"Cai"}),n.createElement(S.a.Item,{text:"Trina"}),n.createElement(S.a.Item,{text:"Mohammad"})))),n.createElement(O.a.Menu,{position:"right"},n.createElement(O.a.Item,{className:"item3"},n.createElement(w.a,{className:"icon",icon:"search",placeholder:"Search..."})),n.createElement(O.a.Item,null,n.createElement(E.a.Group,{className:"item4"},n.createElement(E.a,{color:"green",onClick:this.props.redirect},e),n.createElement(E.a.Or,null),n.createElement(E.a,{color:"yellow",onClick:this.loggedOut},"Log Out")))))}}]),a}(n.Component),j=Object(k.b)((function(e){return{profiles:e.profile.profiles,loggedIn:e.profile.loggedIn}}),{logOut:y})(P),N=a(349),U=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleCityChange=function(e){n.setState({city:e.currentTarget.value})},n.handleCohortChange=function(e){n.setState({cohort:e.currentTarget.value})},n.handleSpokenChange=function(e){n.setState({spoken:e.currentTarget.value})},n.handleProgrammingChange=function(e){n.setState({programming:e.currentTarget.value})},n.handleAboutMeChange=function(e){n.setState({aboutMe:e.currentTarget.value})},n.handleClick=function(e){e.preventDefault();var t=n.state,a=t.city,l=t.cohort,r=t.spoken,o=t.programming,s=t.aboutMe,c=n.props,i=c.updateProfile,m=c.profiles.filter((function(e){return!0===e.loggedIn}));null!=m[0].name&&i([m[0].name,a,l,r,o,s]);n.setState({redirect:!0})},n.handleRedirect=function(){n.setState({redirect:!0})},n.loggedOut=function(){var e=n.props,t=e.logOut,a=e.profiles;t(a.filter((function(e){return!0===e.loggedIn}))[0]),sessionStorage.setItem("profiles",JSON.stringify(a)),sessionStorage.setItem("loggedIn","false")},n.state={city:"",cohort:"",spoken:"",programming:"",aboutMe:"",redirect:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.profiles.filter((function(e){return!0===e.loggedIn}))[0],t=e.aboutMe,a=e.name,l=e.cohort,r=e.programming,o=e.spoken,s=e.city;return!0===this.state.redirect?n.createElement(u.a,null,n.createElement(u.b,{to:"",component:L}),n.createElement(g.a,{to:"/profile/".concat(a)})):n.createElement(n.Fragment,null,n.createElement(j,{redirect:this.handleRedirect,goto:"Profile"}),n.createElement(b.a,null,n.createElement(p.a,null,n.createElement(d.a,{stackable:!0,columns:"equal"},n.createElement(d.a.Row,null,n.createElement(d.a.Column,null,n.createElement(b.a,{style:{marginTop:70},className:"edit-profile"},n.createElement("h5",null,"Current city:"," ",s),n.createElement("h5",null,"Cohort:"," ",l),n.createElement("h5",null,"Spoken languages:"," ",o),n.createElement("h5",null,"Programming languages interested in:"," ",r),n.createElement("h5",null,"About Me:"," ",t))),n.createElement(d.a.Column,null,n.createElement(C.a,{as:"h2",color:"green",textAlign:"center"},"Edit profile"),n.createElement(f.a,{size:"large"},n.createElement(p.a,{stacked:!0},n.createElement(f.a.Input,{fluid:!0,icon:"home",iconPosition:"left",placeholder:"Current City",value:this.state.city,onChange:this.handleCityChange}),n.createElement(f.a.Input,{fluid:!0,icon:"users",iconPosition:"left",placeholder:"Cohort",type:"text",value:this.state.cohort,onChange:this.handleCohortChange}),n.createElement(f.a.Input,{fluid:!0,icon:"language",iconPosition:"left",placeholder:"Spoken Languages",type:"text",value:this.state.spoken,onChange:this.handleSpokenChange}),n.createElement(f.a.Input,{fluid:!0,icon:"code",iconPosition:"left",placeholder:"Programming Languages",type:"text",value:this.state.programming,onChange:this.handleProgrammingChange}),n.createElement(f.a.Field,{control:N.a,label:"About",placeholder:"Tell us more about you...",value:this.state.aboutMe,onChange:this.handleAboutMeChange}),n.createElement(E.a,{onClick:this.handleClick,color:"green"},"Save Changes")))),n.createElement(d.a.Column,null))))))}}]),a}(n.Component),M=Object(k.b)((function(e,t){return{profiles:e.profile.profiles,loggedIn:e.profile.loggedIn}}),{updateProfile:function(e){return{type:"UPDATE_PROFILE",payload:e}},logOut:y})(U),x=a(353),T=a(189),A=a(348),R=a(188),D=(a(335),a(186)),W=a.n(D),F=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).loggedOut=function(){var e=n.props;(0,e.logOut)(e.profiles.filter((function(e){return!0===e.loggedIn}))[0]),sessionStorage.setItem("loggedIn","false"),sessionStorage.setItem("userName",""),window.location.href="/"},n.handleRedirect=function(){n.setState({redirect:!0})},n.state={redirect:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.profiles.filter((function(e){return!0===e.loggedIn}))[0],t=e.aboutMe,a=e.name,l=e.cohort,r=e.programming,o=e.city,s=e.spoken;return!0===this.state.redirect?n.createElement(u.a,null,n.createElement(u.b,{to:"",component:M}),n.createElement(g.a,{to:"/edit-profile/".concat(a)})):n.createElement(n.Fragment,null,n.createElement(j,{redirect:this.handleRedirect,goto:"Edit Profile"}),n.createElement(b.a,null,n.createElement(p.a,null,n.createElement(d.a,{stackable:!0,divided:"vertically"},n.createElement(d.a.Row,{columns:8},n.createElement(d.a.Column,null)),n.createElement(d.a.Row,{columns:3},n.createElement(d.a.Column,null,n.createElement(x.a,null,n.createElement(T.a,{src:W.a,wrapped:!0,ui:!1}),n.createElement(x.a.Content,null,n.createElement(x.a.Header,null,a),n.createElement(x.a.Meta,null,n.createElement("span",{className:"date"},n.createElement("h5",null,"Cohort:"," ",l))),n.createElement("br",null),n.createElement(x.a.Description,null,n.createElement("h5",null,"Current city:"," ",o),n.createElement("h5",null,"Spoken languages:"," ",s),n.createElement("h5",null,"Programming languages interested in:"," ",r),n.createElement("h5",null,"About Me:"," ",t))),n.createElement(x.a.Content,{extra:!0}))),n.createElement(d.a.Column,null,n.createElement("h2",null,"Welcome ",a,"!"),n.createElement(f.a,null,n.createElement(p.a,null,n.createElement(N.a,{placeholder:"Create a Post",style:{minHeight:150}}),n.createElement(p.a,null," ",n.createElement(E.a,{icon:!0},n.createElement(I.a,{name:"photo",color:"green"}),"Photo"),n.createElement(E.a,{icon:!0},n.createElement(I.a,{name:"user outline",color:"green"}),"Tag a Class Mate"))))," ",n.createElement("br",null),n.createElement(f.a,null,n.createElement(p.a,null,n.createElement(N.a,{placeholder:"Ask a question",style:{minHeight:150}}),n.createElement(p.a,null," ",n.createElement(E.a,{icon:!0},n.createElement(I.a,{name:"image outline",color:"green"}),"Screen Shot"),n.createElement(E.a,{icon:!0},n.createElement(I.a,{name:"file code outline",color:"green"}),"Group"))))),n.createElement(d.a.Column,null,n.createElement(b.a,null,n.createElement(h.a,{as:b.a,minWidth:768},n.createElement(R.a,null))),n.createElement("br",null),n.createElement("br",null),n.createElement(b.a,null,n.createElement(h.a,{as:b.a,minWidth:768},n.createElement(C.a,{as:"h3"}," Explore "),n.createElement(A.a,{as:"h4",label:"Networking Events",defaultChecked:!0}),n.createElement("br",null),n.createElement(A.a,{as:"h2",label:"Previous Cohorts",defaultChecked:!0}),n.createElement("br",null),n.createElement(A.a,{as:"h2",label:"Groups",defaultChecked:!0}),n.createElement("br",null),n.createElement(A.a,{as:"h2",label:"Additional Resources",defaultChecked:!0}),n.createElement("br",null),n.createElement(A.a,{as:"h2",label:"Linkedin",defaultChecked:!0})))))))))}}]),a}(n.Component),L=Object(k.b)((function(e){return{profiles:e.profile.profiles,loggedIn:e.profile.loggedIn}}),{logOut:y})(F),G=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleUserChange=function(e){n.setState({userName:e.currentTarget.value})},n.handlePassChange=function(e){n.setState({passWord:e.currentTarget.value})},n.handleSignUserChange=function(e){n.setState({signUpUser:e.currentTarget.value})},n.handleConfirmSignPassChange=function(e){n.setState({confirmSignUpPass:e.currentTarget.value})},n.handleSignPassChange=function(e){n.setState({signUpPass:e.currentTarget.value})},n.handleOnClick=function(e){e.preventDefault();var t=n.state,a=t.userName,l=t.passWord,r=n.props,o=r.checkPass,s=r.profiles,c=[a,l],i=s.filter((function(e){return e.name===a}));0===i.length&&n.setState({loginMessage:"Incorrect Username or Password"}),i.length>0&&i[0].password!==l&&n.setState({loginMessage:"Incorrect Username or Password"}),o(c),n.setState({userName:"",passWord:""})},n.handleSignUp=function(e){e.preventDefault();var t=n.state,a=t.signUpPass,l=t.signUpUser,r=t.confirmSignUpPass,o=n.props,s=o.addProfile,c=o.profiles,i=!1;c.forEach((function(e,t){e.name===l&&(i=!0)})),r!==a&&!1===i?n.setState({signupMessage:"Passwords don't match"}):!1===i?s({id:2,name:l,password:a,aboutMe:"",loggedIn:!0,city:"",cohort:"",programming:"",spoken:""}):n.setState({signupMessage:"Username already exists"}),n.setState({signUpUser:"",signUpPass:"",confirmSignUpPass:""})},n.state={userName:"",passWord:"",signUpPass:"",signUpUser:"",loginMessage:"",signupMessage:"",confirmSignUpPass:""},n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.loggedIn,a=e.profiles;if(!0===t||"true"===sessionStorage.getItem("loggedIn")){sessionStorage.setItem("profiles",JSON.stringify(a));var n=sessionStorage.getItem("userName"),l=a.filter((function(e){return!0===e.loggedIn}));!0===t?(sessionStorage.setItem("userName",l[0].name),sessionStorage.setItem("loggedIn","true")):null!==n&&sessionStorage.setItem("userName",n)}else sessionStorage.setItem("profiles",JSON.stringify(a))}},{key:"render",value:function(){var e=this.props,t=e.loggedIn,a=e.profiles,l=this.state,r=l.loginMessage,o=l.signupMessage;if(!0===t||"true"===sessionStorage.getItem("loggedIn")){var s=a.filter((function(e){return!0===e.loggedIn})),c=sessionStorage.getItem("userName")?sessionStorage.getItem("userName"):s[0].name;return n.createElement(n.Fragment,null,n.createElement(u.a,null,n.createElement(g.a,{to:"/profile/".concat(c)}),n.createElement(u.b,{to:"",component:L})))}return n.createElement(p.a,null,n.createElement(d.a,{stackable:!0,columns:"equal"},n.createElement(d.a.Row,null,n.createElement("div",{className:"thumb"},n.createElement("button",null,n.createElement("span",null,"TechCareers Hive"))),n.createElement(h.a,{as:d.a.Column,minWidth:768}),n.createElement(d.a.Column,{floated:"right",className:"floated-dissapear"},n.createElement("br",null),n.createElement("br",null),n.createElement(f.a,null,n.createElement(f.a.Group,null,n.createElement(f.a.Input,{icon:"user",iconPosition:"left",className:"login-name",placeholder:"Username",width:5,value:this.state.userName,onChange:this.handleUserChange}),n.createElement(f.a.Input,{icon:"lock",width:5,className:"login-pass",iconPosition:"left",placeholder:"Password",type:"password",value:this.state.passWord,onChange:this.handlePassChange}),n.createElement(E.a,{type:"submit",color:"yellow",size:"large",className:"login-button",onClick:this.handleOnClick},"Login")))),n.createElement("span",null,r)),n.createElement(v.a,{horizontal:!0}," ",n.createElement("div",{className:"sk-wave"},n.createElement("div",{className:"sk-wave-rect"},"T"),n.createElement("div",{className:"sk-wave-rect"},"e"),n.createElement("div",{className:"sk-wave-rect"},"c"),n.createElement("div",{className:"sk-wave-rect"},"h"),n.createElement("div",{className:"sk-wave-rect"},"C"),n.createElement("div",{className:"sk-wave-rect"},"a"),n.createElement("div",{className:"sk-wave-rect"},"r"),n.createElement("div",{className:"sk-wave-rect"},"e"),n.createElement("div",{className:"sk-wave-rect"},"e"),n.createElement("div",{className:"sk-wave-rect"},"r"),n.createElement("div",{className:"sk-wave-rect"},"s"),n.createElement("div",{className:"sk-wave-rect"},"H"),n.createElement("div",{className:"sk-wave-rect"},"I"),n.createElement("div",{className:"sk-wave-rect"},"V"),n.createElement("div",{className:"sk-wave-rect"},"E"))),n.createElement(d.a.Row,null,n.createElement(h.a,{as:d.a.Column,minWidth:768},n.createElement(b.a,{fluid:!0},n.createElement(C.a,{as:"h2"},"TECHCareers Hive"),n.createElement("br",null),n.createElement("p",null,"Connect with classmates and techcareers alumni."),n.createElement("p",null,"Join groups of your interest."),n.createElement("p",null,"Check networking events."),n.createElement("p",null,"AND More!!!!!!!."))),n.createElement(d.a.Column,null," ",n.createElement(v.a,{vertical:!0}," ",n.createElement(I.a,{loading:!0,name:"forumbee",size:"massive",color:"yellow"})," ")),n.createElement(d.a.Column,null,n.createElement(C.a,{as:"h2",color:"green",textAlign:"center"},"Sign -Up"),n.createElement("span",null,o),n.createElement(f.a,{size:"large"},n.createElement(p.a,{stacked:!0},n.createElement(f.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"username",value:this.state.signUpUser,onChange:this.handleSignUserChange}),n.createElement(f.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",value:this.state.confirmSignUpPass,onChange:this.handleConfirmSignPassChange}),n.createElement(f.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"confirm-Password",type:"password",value:this.state.signUpPass,onChange:this.handleSignPassChange}),n.createElement(E.a,{color:"green",fluid:!0,size:"large",onClick:this.handleSignUp},"SignUp")))))))}}]),a}(n.Component),H=Object(k.b)((function(e,t){return{profiles:e.profile.profiles,loggedIn:e.profile.loggedIn}}),{checkPass:function(e){return{type:"CHECK_PASS",payload:e}},addProfile:function(e){return{type:"ADD_PROFILE",payload:e}}})(G),_=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.createElement("h2",null,"Error Page!!!")}}]),a}(n.Component),J=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return"true"===sessionStorage.getItem("loggedIn")?l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(n.Fragment,null,l.a.createElement(g.d,null,l.a.createElement(g.b,{exact:!0,path:"/",component:H}),l.a.createElement(g.b,{path:"/profile",component:L}),l.a.createElement(g.b,{path:"/edit-profile/",component:M}),l.a.createElement(g.b,{component:_}))))):l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(g.d,null,l.a.createElement(g.b,null,l.a.createElement(g.a,{from:"/*",to:"/"}),l.a.createElement(g.b,{exact:!0,path:"/",component:H})),l.a.createElement(g.b,{component:_}))))}}]),a}(l.a.Component),z=Object(k.b)((function(e){return{loggedIn:e.profile.loggedIn,profiles:e.profile.profiles}}))(J);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q,B=a(51),K=a(187),V=a(46),$=a(42),Q={profiles:[{id:0,name:"",aboutMe:"",password:"10293uj1o4nn,xv9c092304jlkmxldk09fd4",loggedIn:!1,city:"",cohort:"",programming:"",spoken:""},{id:1,name:"Andrew",aboutMe:"I'm Andrew",password:"password",loggedIn:!1,city:"",cohort:"",programming:"",spoken:""},{id:2,name:"Mo",aboutMe:"I'm Mo",password:"pass",loggedIn:!1,city:"",cohort:"",programming:"",spoken:""},{id:3,name:"Cailenys",aboutMe:"I'm Cailenys",password:"12345",loggedIn:!1,city:"",cohort:"",programming:"",spoken:""}],loggedIn:!1,numUsers:4},X=sessionStorage.getItem("profiles"),Y=sessionStorage.getItem("loggedIn");null!==X&&(q=JSON.parse(X),Q={profiles:q,loggedIn:"true"===Y,numUsers:q.length+1});var Z=Object(B.combineReducers)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROFILE":return t.payload.id=e.numUsers,Object($.a)({},e,{loggedIn:!0,profiles:[].concat(Object(V.a)(e.profiles),[t.payload]),numUsers:++e.numUsers});case"CHECK_PASS":var a=e.loggedIn,n=0,l=e.profiles.filter((function(e){return e.name===t.payload[0]}));return void 0===l[0]?Object($.a)({},e):(e.profiles.forEach((function(e,t){e.name===l[0].name&&(n=t)})),l.length&&l[0].password===t.payload[1]&&(a=!0),Object($.a)({},e,{loggedIn:a,profiles:[].concat(Object(V.a)(e.profiles.slice(0,n)),[Object($.a)({},e.profiles[n],{loggedIn:a})],Object(V.a)(e.profiles.slice(n+1)))}));case"LOG_OUT":var r=e.profiles.filter((function(e){return e.name===t.payload.name})),o=0;return e.profiles.forEach((function(e,t){e.name===r[0].name&&(o=t)})),Object($.a)({},e,{loggedIn:!1,profiles:[].concat(Object(V.a)(e.profiles.slice(0,o)),[Object($.a)({},e.profiles[o],{loggedIn:!1})],Object(V.a)(e.profiles.slice(o+1)))});case"UPDATE_PROFILE":var s=e.profiles.filter((function(e){return e.name===t.payload[0]})),c=0;return e.profiles.forEach((function(e,t){e.name===s[0].name&&(c=t)})),Object($.a)({},e,{profiles:[].concat(Object(V.a)(e.profiles.slice(0,c)),[Object($.a)({},e.profiles[c],{city:""===t.payload[1]?e.profiles[c].city:t.payload[1],cohort:""===t.payload[2]?e.profiles[c].cohort:t.payload[2],spoken:""===t.payload[3]?e.profiles[c].spoken:t.payload[3],programming:""===t.payload[4]?e.profiles[c].programming:t.payload[4],aboutMe:""===t.payload[5]?e.profiles[c].aboutMe:t.payload[5]})],Object(V.a)(e.profiles.slice(c+1)))});default:return e}}});var ee=function(){return Object(B.createStore)(Z,Object(K.composeWithDevTools)(Object(B.applyMiddleware)()))};o.a.render(l.a.createElement(k.a,{store:ee()},l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,a){}},[[199,1,2]]]);
//# sourceMappingURL=main.d6d3c5fc.chunk.js.map