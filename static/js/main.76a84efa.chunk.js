(this.webpackJsonppjw2=this.webpackJsonppjw2||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){e.exports=n(35)},24:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(17),l=n.n(o),i=(n(24),n(7)),c=n(8),u=n(12),s=n(9),d=n(10),m=(n(15),n(18)),p=n.n(m).a.initializeApp({apiKey:"AIzaSyABeCn-7gs1gAuzr9xdXf6bp3JiQU3_kwA",authDomain:"projeto-web-78e05.firebaseapp.com",databaseURL:"https://projeto-web-78e05.firebaseio.com",projectId:"projeto-web-78e05",storageBucket:"projeto-web-78e05.appspot.com",messagingSenderId:"552239057906",appId:"1:552239057906:web:2db4080930433f597f396b"}),h=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"getMessageByError",value:function(e){switch(e){case"auth/user-not-found":return"E-mail n\xe3o cadastrado.";case"auth/wrong-password":return"Senha incorreta.";default:return"Erro desconhecido."}}},{key:"processLogin",value:function(){var e=this,t=document.querySelector("#email").value,n=document.getElementById("password").value;p.auth().signInWithEmailAndPassword(t,n).then((function(){alert("Logado")})).catch((function(t){alert(e.getMessageByError(t.code))}))}},{key:"renderSignUp",value:function(){document.getElementById("email").value="",document.getElementById("password").value="",document.getElementById("loginBtn").style.display="none",document.getElementById("cadastrarBtn").style.display="none",document.getElementById("confirm").style.display="block",document.getElementById("confirmLabel").style.display="block",document.getElementById("signupBtn").style.display="block"}},{key:"handleSignUp",value:function(){var e=this,t=document.getElementById("email").value,n=document.getElementById("password").value,a=document.getElementById("confirm").value;n.length>0&&(n.length<6?alert("Senha deve ter pelo menos 6 caracteres"):t.length<6?alert("Informar um email de pelo menos 6 caracteres"):n===a?p.auth().createUserWithEmailAndPassword(t,n).then((function(){return alert("Usu\xe1rio cadastrado!")})).catch((function(t){alert(e.getMessageByError(t.code))})):alert("Confirma\xe7\xe3o de senha incorreta."))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"login-area"},r.a.createElement("label",null,"E-mail: ",r.a.createElement("input",{id:"email",type:"text"})),r.a.createElement("label",null,"Senha: ",r.a.createElement("input",{id:"password",type:"password"})),r.a.createElement("label",{id:"confirmLabel"},"Confirma\xe7\xe3o de senha: ",r.a.createElement("input",{id:"confirm",type:"password"})),r.a.createElement("button",{id:"loginBtn",onClick:function(){return e.processLogin()}},"LOGIN"),r.a.createElement("button",{id:"cadastrarBtn",onClick:function(){return e.renderSignUp()}},"CADASTRAR"),r.a.createElement("button",{id:"signupBtn",onClick:function(){return e.handleSignUp()}},"CADASTRAR"))}}]),n}(r.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onChange=function(e){var t=e.target.value;a.setState({query:t})},a.state={users:[],query:""},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/24pullrequests.com/users.json").then((function(e){return e.json()})).then((function(t){e.setState({users:t})}))}},{key:"processExit",value:function(){p.auth().signOut()}},{key:"render",value:function(){var e=this,t=this.state,n=t.users,a=t.query;return r.a.createElement("div",{id:"home"},r.a.createElement("button",{id:"exitBtn",onClick:function(){return e.processExit()}},"SAIR"),r.a.createElement("input",{id:"searchInput",type:"text",className:"search-box",placeholder:"Buscar apelido...",onChange:this.onChange}),r.a.createElement("ul",null,n.map((function(e){if(console.log(a),a.length>0&&e.nickname.includes(a))return r.a.createElement("div",{key:e.nickname},"Nickname: ",e.nickname,r.a.createElement("p",{id:"search-result"},"Github: ",r.a.createElement("a",{href:e.github_profile},e.github_profile)),r.a.createElement("p",null,"Twitter: ",r.a.createElement("a",{href:e.twitter_profile},e.twitter_profile)),r.a.createElement("p",null,"Contributions: ",e.contributions_count))}))))}}]),n}(r.a.Component),g=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={email:null,password:null},a.authListener=a.authListener.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"authListener",value:function(){var e=this;p.auth().onAuthStateChanged((function(t){t?e.setState({email:t}):e.setState({email:null})}))}},{key:"componentDidMount",value:function(){this.authListener()}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.email?r.a.createElement(f,null):r.a.createElement(h,null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=document.querySelector("header");document.getElementById("logo");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"),window.onscroll=function(){document.body.scrollTop>50||document.documentElement.scrollTop>50?y.style.backgroundColor="#ffffff":y.style.backgroundColor="#000000"}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.76a84efa.chunk.js.map