(this["webpackJsonptrello-cards"]=this["webpackJsonptrello-cards"]||[]).push([[0],{57:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),a=t(11),c=t.n(a),o=t(5),s=t(6),d=t.n(s),l=t(9),u=t(31),b=t(8),f=t(7),h=t(27);function m(n){if(!n.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){return o.b.error("N\xe3o t\xe1 funcionando! O formato do e-mail est\xe1 incorreto."),!1}return!0}var j=t.n(h).a.create({baseURL:"https://api.trello.com/1/"});function p(n,e,t){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(d.a.mark((function n(e,t,r){var i,a,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),""!==e.title&&""!==e.name&&""!==e.description&&""!==e.list){n.next=5;break}return function(){return o.b.error("Por favor, Preencha todos os campos obrigat\xf3rios")}(),n.abrupt("return");case 5:if(m(e.email)){n.next=7;break}return n.abrupt("return");case 7:return"Iniciado"===e.list&&(i="60943fd325ec021279755394"),"Pendente"===e.list&&(i="60943fd325ec021279755395"),"Finalizado"===e.list&&(i="60943fd325ec021279755396"),n.next=12,j.post("cards?key=".concat("b4b61255ccde032f230cd80137eb92ed","&token=").concat("c269096c2d15f70e0fb0b24e0f6e1bc7e589dddc34b73741f055c3f3e6f074db","&idList=").concat(i,"&name=").concat(e.title,"&desc=").concat(e.description," - Criado por ").concat(e.name," - ").concat(e.email));case 12:if(200!==(a=n.sent).status){n.next=21;break}return c=a.data.id,n.next=17,g(t,c);case 17:(function(){return o.b.success("Deu bom! O card foi criado com sucesso")})(),n.next=23;break;case 21:(function(){return o.b.error("Deu tudo errado! Tente novamente.")})();case 23:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,e){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(d.a.mark((function n(e,t){var r,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==e.length){n.next=2;break}return n.abrupt("return");case 2:r=d.a.mark((function n(r){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.post("cards/".concat(t,"/labels?key=").concat("b4b61255ccde032f230cd80137eb92ed","&token=").concat("c269096c2d15f70e0fb0b24e0f6e1bc7e589dddc34b73741f055c3f3e6f074db","&name=").concat(e[r].name,"&color=null"));case 2:200!==n.sent.status&&function(){return o.b.error("Ih deu ruim, n\xe3o foi poss\xedvel criar a tag: ".concat(e[r].name))}();case 4:case"end":return n.stop()}}),n)})),i=0;case 4:if(!(i<e.length)){n.next=9;break}return n.delegateYield(r(i),"t0",6);case 6:i++,n.next=4;break;case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var v,k=t(2),w=t(3),y=w.b.button(v||(v=Object(k.a)(["\n  background: var(--black);\n  color: #fff;\n  height: 3rem;\n  width: 100%;\n  border-radius: 0.35rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1rem;\n\n  span {\n    width: 90%;\n    font-size: 0.8rem;\n    font-weight: 600;\n  }\n"]))),C=t(1);function z(n){var e=n.tagTitle,t=n.onClick;return Object(C.jsx)(y,{className:"tag-btn",onClick:function(n){return t(n)},children:Object(C.jsx)("span",{children:e})})}var S,D,P,I,E=t(16),A=w.b.form(S||(S=Object(k.a)(['\n  flex: 1;\n  margin-top: -8rem;\n  color: var(--text);\n  background: #fff;\n  max-width: 580px;\n  min-height: 600px;\n  border-radius: 0.75rem;\n  padding: 30px;\n  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);\n\n  h2 {\n    font-size: 2.3rem;\n  }\n\n  h3 {\n    font-weight: 400;\n    font-size: 1rem;\n    margin-top: 1rem;\n  }\n\n  input,\n  textarea {\n    width: 100%;\n    padding: 0 1.5rem;\n    height: 3.2rem;\n    border-radius: 0.3rem;\n    margin-top: 0.4rem;\n    background: var(--input);\n    border: 1px solid #d7d7d7;\n    margin-top: 1rem;\n  }\n\n  textarea {\n    resize: vertical;\n    padding: 1.5rem;\n    min-height: 10rem;\n  }\n\n  button {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  button[type="submit"] {\n    height: 4rem;\n    background: var(--green);\n    color: #fff;\n    border-radius: 0.5rem;\n\n    font-size: 1.3rem;\n    margin-top: 1.5rem;\n    font-weight: 600;\n    border: 0;\n\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.9);\n    }\n  }\n\n  .add-btn {\n    width: 3.5rem;\n  }\n\n  .add-btn,\n  .tag-btn {\n    height: 3.2rem;\n    background: #000;\n    border-radius: 0.5rem;\n    margin-top: 1rem;\n    border: 0;\n  }\n']))),F=w.b.div(D||(D=Object(k.a)(["\n  display: grid;\n  grid-template-columns: ",";\n  gap: 0.7rem;\n"])),(function(n){return"repeat("+n.numberOfColumns+", 1fr)"})),L={green:"#0c9c1d",red:"#e52e4d",blue:"#2222bf"},T=w.b.button(P||(P=Object(k.a)(["\n  width: 100%;\n  height: 3.9rem;\n  margin-top: 0.4rem;\n  border-radius: 0.3rem;\n  border: 1.2px solid #d7d7d7;\n\n  background: ",";\n\n  color: ",";\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  span {\n    font-weight: 600;\n    font-size: 1.2rem;\n  }\n\n  transition: border-color 0.2s;\n\n  &:hover {\n    border-color: ",";\n  }\n"])),(function(n){return n.isActive?Object(E.b)(.2,L[n.activeColor]):"transparent"}),(function(n){return n.isActive?"#fff":"#353535"}),Object(E.a)(.5,"#d7d7d7"));function N(){var n=Object(r.useState)(""),e=Object(b.a)(n,2),t=e[0],i=e[1],a=Object(r.useState)(""),c=Object(b.a)(a,2),s=c[0],h=c[1],m=Object(r.useState)(""),j=Object(b.a)(m,2),x=j[0],g=j[1],O=Object(r.useState)(""),v=Object(b.a)(O,2),k=v[0],w=v[1],y=Object(r.useState)({id:0,name:""}),S=Object(b.a)(y,2),D=S[0],P=S[1],I=Object(r.useState)([]),E=Object(b.a)(I,2),L=E[0],N=E[1],q=Object(r.useState)(""),B=Object(b.a)(q,2),M=B[0],_=B[1];function R(){return(R=Object(l.a)(d.a.mark((function n(e){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={name:s,email:x,description:k,list:M,title:t},n.next=3,p(r,L,e);case 3:w(""),g(""),_(""),h(""),i(""),P({id:0,name:""}),N([]);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(C.jsxs)(A,{children:[Object(C.jsx)("h2",{children:"Criar card de tarefa"}),Object(C.jsx)("h3",{children:"Titulo *"}),Object(C.jsx)("input",{type:"text",placeholder:"Digite o titulo para seu card",value:t,onChange:function(n){return i(n.target.value)},required:!0}),Object(C.jsxs)(F,{numberOfColumns:2,children:[Object(C.jsxs)("div",{className:"inputContainer",children:[Object(C.jsx)("h3",{children:"Nome *"}),Object(C.jsx)("input",{type:"text",placeholder:"Digite seu nome",value:s,onChange:function(n){h(n.target.value)},required:!0})]}),Object(C.jsxs)("div",{className:"inputContainer",children:[Object(C.jsx)("h3",{children:"E-mail *"}),Object(C.jsx)("input",{type:"email",placeholder:"Digite seu e-mail",value:x,onChange:function(n){return g(n.target.value)},required:!0})]})]}),Object(C.jsx)("h3",{children:"Descri\xe7\xe3o *"}),Object(C.jsx)("textarea",{name:"descricao",onChange:function(n){return w(n.target.value)},placeholder:"Digite a descri\xe7\xe3o do card...",value:k,required:!0}),Object(C.jsx)("h3",{children:"Adicionar Tags"}),Object(C.jsxs)(F,{numberOfColumns:2,children:[Object(C.jsx)("input",{type:"text",maxLength:10,placeholder:"Ex: React",value:D.name,onChange:function(n){return P({name:String(n.target.value),id:Math.random()})}}),Object(C.jsx)("button",{className:"add-btn",type:"button",onClick:function(){return function(n){var e=L.find((function(e){return e.name===n.name}));n.name&&!e?(P({id:0,name:""}),N([].concat(Object(u.a)(L),[n]))):o.b.error("Ih, deu ruim! Essa tag j\xe1 foi adicionada.")}(D)},children:Object(C.jsx)(f.d,{color:"#fff",size:20})})]}),Object(C.jsx)(F,{numberOfColumns:4,children:L.map((function(n){return Object(C.jsx)(z,{tagTitle:n.name,onClick:function(){return function(n){var e=L.filter((function(e){return e.id!==n}));N(e)}(n.id)}},String(Math.random()))}))}),Object(C.jsx)("h3",{children:"Lista da tarefa *"}),Object(C.jsxs)(F,{numberOfColumns:3,children:[Object(C.jsx)(T,{type:"button",onClick:function(){return _("Iniciado")},isActive:"Iniciado"===M,activeColor:"blue",children:Object(C.jsx)("span",{children:"Iniciado"})}),Object(C.jsx)(T,{type:"button",onClick:function(){return _("Pendente")},isActive:"Pendente"===M,activeColor:"red",children:Object(C.jsx)("span",{children:"Pendente"})}),Object(C.jsx)(T,{type:"button",onClick:function(){return _("Finalizado")},isActive:"Finalizado"===M,activeColor:"green",children:Object(C.jsx)("span",{children:"Finalizado"})})]}),Object(C.jsx)("button",{type:"submit",onClick:function(n){!function(n){R.apply(this,arguments)}(n)},children:"Cadastrar"})]})}var q,B=w.b.header(I||(I=Object(k.a)(["\n  background: var(--black);\n  color: #fff;\n  width: 100%;\n  min-height: 13rem;\n  display: flex;\n  justify-content: center;\n\n  svg {\n    margin-top: 2rem;\n    margin-right: 10px;\n  }\n\n  h1 {\n    margin-top: 2rem;\n    font-weight: 600;\n    font-size: 3rem;\n  }\n"])));function M(){return Object(C.jsxs)(B,{children:[Object(C.jsx)(f.e,{color:"#fff",size:60}),Object(C.jsx)("h1",{children:"Trello Cards"})]})}var _=w.b.footer(q||(q=Object(k.a)(['\n  background: var(--black);\n  color: #fff;\n  width: 100%;\n  height: 100%;\n\n  padding: 35px 2rem;\n\n  @media (min-width: 720px) {\n    padding: 35px 12rem;\n  }\n\n  ul {\n    list-style-type: none;\n    min-width: 20rem;\n\n    a {\n      text-decoration: none;\n      font-size: 1rem;\n      position: relative;\n      color: #fff;\n\n      &:after {\n        content: "";\n        width: 0;\n        height: 2px;\n        background-color: #fff;\n        position: absolute;\n        left: 0;\n        bottom: -5px;\n      }\n\n      &:hover:after {\n        width: 100%;\n        transition: width 0.7s ease-in-out;\n      }\n    }\n\n    li {\n      margin-top: 1rem;\n      display: flex;\n      align-items: center;\n\n      svg {\n        margin-right: 10px;\n      }\n    }\n  }\n\n  h3 {\n    font-size: 2rem;\n    font-weight: bold;\n  }\n\n  @media (min-width: 720px) {\n    ul {\n      display: flex;\n      align-items: center;\n\n      & li + li {\n        margin-left: 3rem;\n      }\n    }\n  }\n'])));function R(){return Object(C.jsxs)(_,{children:[Object(C.jsx)("h3",{children:"Links"}),Object(C.jsxs)("ul",{children:[Object(C.jsxs)("li",{children:[Object(C.jsx)(f.c,{color:"#fff",size:25}),Object(C.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/vitormedeiros911/",children:"Meu perfil no LinkedIn"})]}),Object(C.jsxs)("li",{children:[Object(C.jsx)(f.b,{color:"#fff",size:25}),Object(C.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/vitormedeiros911/desafio-slideworks",children:"Reposit\xf3rio no GitHub"})]}),Object(C.jsxs)("li",{children:[Object(C.jsx)(f.e,{color:"#fff",size:25}),Object(C.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://trello.com/b/vIt55Fy2/desafio-slideworks",children:"Board no Trello"})]}),Object(C.jsxs)("li",{children:[Object(C.jsx)(f.a,{color:"#fff",size:25}),Object(C.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.figma.com/file/t3u0flxP7pZUSLbKSapsVi/Desafio-Slideworks?node-id=0%3A1",children:"Projeto no Figma"})]})]})]})}t(56);var J,U,G=Object(w.a)(J||(J=Object(k.a)(["\n  :root {\n    --black: #000000;\n    --background: #f0f2f5;\n    --green: #04CD49;\n    --input: #E7E9EE;\n    --blue: #2B6DD0;\n    --text: #353535;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    @media (max-width: 1080px) {\n      font-size: 93.75%;\n    }\n\n    @media (max-width: 720px) {\n      font-size: 87.5%;\n    }\n\n  }\n\n  body {\n    background: var(--background);\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, textarea, button {\n    font-family: 'Poppins', sans-serif;\n    font-weight: 400;\n  }\n\n  h1, h2, h3, h4, h5, h6, strong {\n    font-weight: 600;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n"]))),H=w.b.main(U||(U=Object(k.a)(["\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: 2.5rem 1rem;\n  display: flex;\n  justify-content: center;\n"])));var K=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(o.a,{autoClose:5e3,position:"top-right",hideProgressBar:!1,closeOnClick:!0}),Object(C.jsx)(M,{}),Object(C.jsx)(H,{children:Object(C.jsx)(N,{})}),Object(C.jsx)(R,{}),Object(C.jsx)(G,{})]})};c.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(K,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.3f651e5c.chunk.js.map