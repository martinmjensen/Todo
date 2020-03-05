(this.webpackJsonptodo_bouvet=this.webpackJsonptodo_bouvet||[]).push([[0],{26:function(e,t,n){e.exports=n(43)},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(15),c=n.n(o),i=n(14),u=(n(37),function(){return a.a.createElement("header",null,a.a.createElement("h1",{className:"title"},"Todo."),a.a.createElement("h2",{className:"sub-title"},"Todo, or not todo, that is the question?"))}),s=function(e){return{type:"GET_TODOS_SUCCEEDED",payload:{todos:e}}},d=function(e){return{type:"TOGGLE_SUCCEEDED",payload:{todo:e}}},l=function(e){return{type:"ADD_TODO_SUCCEEDED",payload:{todo:e}}},p=n(20),f=(n(38),a.a.memo((function(e){var t=e.todo,n=e.handleDelete,r=e.handleToggle,o=Object(p.b)({opacity:1,from:{opacity:0},config:{duration:400}});return a.a.createElement(p.a.div,{className:"todo-item ".concat(t.completed?"checked":""),style:o,"aria-label":"Todo ".concat(t.id)},a.a.createElement("div",{className:"checkbox-container"},a.a.createElement("input",{id:t.id,type:"checkbox",onChange:function(){r(t.id)},checked:t.completed}),a.a.createElement("label",{htmlFor:t.id},t.title)),a.a.createElement("button",{onClick:function(){return n(t.id)},"aria-label":"Delete todo"},a.a.createElement("span",{className:"cross-container"},a.a.createElement("span",{className:"cross"}))))}))),m=n(24),E=(n(39),a.a.memo((function(e){var t=e.title,n=e.children;return a.a.createElement("h3",{className:"section-header"},t,n)}))),O=(n(40),function(e){var t=e.handleAdd,n=Object(r.useState)(""),o=Object(m.a)(n,2),c=o[0],i=o[1];return a.a.createElement("section",{className:"form-container"},a.a.createElement(E,{title:"Ny Todo"}),a.a.createElement("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),c&&(t(c),i(""))}},a.a.createElement("input",{className:"todo-text",type:"text",name:"Todo text",value:c,onChange:function(e){i(e.target.value)},placeholder:"Legg til en ny todo","aria-label":"Ny todo tekst"}),a.a.createElement("button",{type:"submit"},"Legg til")))}),D=function(e){var t=e.children;return a.a.createElement("section",{className:"list-container"},t)},b=function(){var e=Object(i.c)((function(e){return e.todo})),t=Object(i.b)();Object(r.useEffect)((function(){t({type:"GET_TODOS"})}),[]);var n=function(e){t(function(e){return{type:"DELETE_TODO",payload:{id:e}}}(e))},o=function(e){t(function(e){return{type:"TOGGLE_TODO",payload:{id:e}}}(e))},c=a.a.createElement("p",{className:"loading-text"},"Loading todos...");return e.isLoading||(c=a.a.createElement(D,null,a.a.createElement(E,{title:"Dine todos"},a.a.createElement("div",{style:{opacity:e.isWorking?"1":"0"},className:"spinner"})),e.error&&a.a.createElement("p",{className:"error-text"},"Hmm... noe gikk galt her"),e.todos.map((function(e){return a.a.createElement(f,{todo:e,key:e.id,handleDelete:n,handleToggle:o})})))),a.a.createElement("main",null,a.a.createElement(O,{handleAdd:function(e){t({type:"ADD_TODO",payload:{todo:{title:e,completed:!1}}})}}),c)},v=function(){return a.a.createElement("div",{className:"page-container"},a.a.createElement(u,null),a.a.createElement(b,null))},T=n(9),y=n(23),h=n(25),x=n(13),g={isLoading:!1,todos:[],error:null,isWorking:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=Object(x.a)({},e);switch(t.type){case"GET_TODOS":return n.isLoading=!0,n;case"DELETE_TODO":case"TOGGLE_TODO":case"ADD_TODO":return n.isWorking=!0,n;case"GET_TODOS_SUCCEEDED":return n.todos=t.payload.todos,n.isLoading=!1,n;case"DELETE_SUCCEEDED":var r=n.todos.findIndex((function(e){return e.id===t.payload.id}));return n.todos.splice(r,1),n.isWorking=!1,n;case"TOGGLE_SUCCEEDED":var a=n.todos.findIndex((function(e){return e.id===t.payload.todo.id}));return n.todos.splice(a,1,t.payload.todo),n.isWorking=!1,n;case"ADD_TODO_SUCCEEDED":return n.isWorking=!1,n.todos.push(t.payload.todo),n;case"GET_TODOS_FAILED":return n.error=t.payload.error,n.isLoading=!1,n;case"DELETE_FAILED":case"TOGGLE_FAILED":case"ADD_TODO_FAILED":return console.error("Server error: ".concat(t.payload.error)),n.error=t.payload.error,n.isWorking=!1,n.isloading=!1,n;default:return e}},_=Object(T.combineReducers)({todo:j}),k=n(6),L=n.n(k),w=n(7),G=n(11),C=n(8),S=n(10),A="Rejected: The todo could not be found",N=function(){return new Promise((function(e){return setTimeout(e,500*Math.random())}))},I=[{id:0,title:"Buy ice cream",completed:!1},{id:1,title:"Buy rain coat",completed:!1},{id:2,title:"Eat ice cream in rain",completed:!1}],P=new(function(){function e(){Object(C.a)(this,e)}return Object(S.a)(e,[{key:"getTodoById",value:function(e){return N().then((function(){if(I.findIndex((function(t){return t.id===e}))<0)return Promise.reject(A);var t=I.find((function(t){return t.id===e}));return Promise.resolve(t)}))}},{key:"getTodos",value:function(){return N().then((function(){return Promise.resolve(I)}))}},{key:"toggleTodo",value:function(e){return N().then((function(){var t=I.findIndex((function(t){return t.id===e}));if(t<0)return Promise.reject(A);var n=Object(x.a)({},I[t],{completed:!I[t].completed});return I[t]=n,Promise.resolve(n)}))}},{key:"addTodo",value:function(e){return N().then((function(){if(!function(e){return["title","completed"].map((function(t){return t in e})).reduce((function(e,t){return e&&t}))}(e))return Promise.reject("Rejected: The todo is not valid");var t=0;I.length>0&&(t=Math.max.apply(Math,Object(G.a)(I.map((function(e){return e.id}))))+1);var n=Object(x.a)({},e,{id:t});return I=[].concat(Object(G.a)(I),[n]),Promise.resolve(n)}))}},{key:"deleteTodo",value:function(e){return N().then((function(){return I.findIndex((function(t){return t.id===e}))<0?Promise.reject(A):(I=I.filter((function(t){return t.id!==e})),Promise.resolve())}))}}]),e}()),F=L.a.mark(z),U=L.a.mark(K),W=L.a.mark(Q),B=L.a.mark(V),M=L.a.mark(X),R=L.a.mark(Y),J=L.a.mark(Z),q=L.a.mark($),H=L.a.mark(ee);function z(e){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(w.b)(P.getTodos);case 3:return t=e.sent,e.next=6,Object(w.c)(s(t));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(w.c)({type:"GET_TODOS_FAILED",payload:{error:e.t0}});case 12:case"end":return e.stop()}}),F,null,[[0,8]])}function K(e){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(w.b)(P.deleteTodo,e.payload.id);case 3:return t.next=5,Object(w.c)({type:"DELETE_SUCCEEDED",payload:{id:e.payload.id}});case 5:t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),t.next=11,Object(w.c)({type:"DELETE_FAILED",payload:{error:t.t0}});case 11:case"end":return t.stop()}}),U,null,[[0,7]])}function Q(e){var t;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(w.b)(P.toggleTodo,e.payload.id);case 3:return t=n.sent,n.next=6,Object(w.c)(d(t));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(w.c)({type:"TOGGLE_FAILED",payload:{error:n.t0}});case 12:case"end":return n.stop()}}),W,null,[[0,8]])}function V(e){var t;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(w.b)(P.addTodo,e.payload.todo);case 3:return t=n.sent,n.next=6,Object(w.c)(l(t));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(w.c)({type:"ADD_TODO_FAILED",payload:{error:n.t0}});case 12:case"end":return n.stop()}}),B,null,[[0,8]])}function X(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.e)("GET_TODOS",z);case 2:case"end":return e.stop()}}),M)}function Y(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.e)("DELETE_TODO",K);case 2:case"end":return e.stop()}}),R)}function Z(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.d)("TOGGLE_TODO",Q);case 2:case"end":return e.stop()}}),J)}function $(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.d)("ADD_TODO",V);case 2:case"end":return e.stop()}}),q)}function ee(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)([X(),Y(),Z(),$()]);case 2:case"end":return e.stop()}}),H)}var te=Object(h.a)(),ne=Object(T.createStore)(_,Object(y.composeWithDevTools)(Object(T.applyMiddleware)(te)));te.run(ee);var re=ne;n(42);c.a.render(a.a.createElement(i.a,{store:re},a.a.createElement(v,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.0cc393e5.chunk.js.map