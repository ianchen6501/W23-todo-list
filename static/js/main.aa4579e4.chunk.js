(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{26:function(n,t,e){},27:function(n,t,e){},35:function(n,t,e){"use strict";e.r(t);var o=e(1),r=e(0),i=e.n(r),c=e(10),a=e.n(c),u=(e(26),e(4)),s=(e(27),e(2));function l(){var n=Object(u.a)(["\nhtml {\n  box-sizing: border-box;\n  font-family: Arial, '\u5fae\u8edf\u6b63\u9ed1\u9ad4', 'Microsoft JhengHei', 'Segoe UI Semibold', 'Segoe UI', 'Lucida Grande', sans-sarif;\n}\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\nbutton {\n  padding: 0;\n  border: none;\n  background: none;\n}\n\n"]);return l=function(){return n},n}var d=Object(s.b)(l()),b=e(3),f="load_todos",h="add_todo",p="delete_todo",v="update_todo",j="toggle_status",g="set_visibility_filter";function O(n){return{type:g,payload:{visibility:n}}}var m=function(n){return n.todos.todos},x=function(n){return n.visibility.filter};function y(){var n=Object(u.a)(["\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: 0.5s;\n\n  &:hover {\n    background: ","\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return y=function(){return n},n}function C(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40px;\n  border-top: solid 0.5px ","; \n  padding-left: 20px;\n  background: ",";\n"]);return C=function(){return n},n}function k(){var n=Object(u.a)(["\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n"]);return k=function(){return n},n}function w(){var n=Object(u.a)(["\n  vertical-align: bottom;\n  width: 20px;\n  height: 20px;\n  border: 0.2px solid ",";\n  border-radius: 50%;\n  outline: none;\n  cursor: pointer;\n"]);return w=function(){return n},n}function F(){var n=Object(u.a)(["\n  background: ",";\n  outline: none;\n  border: none;\n  font-size: ",";\n  margin-left: 20px;\n  text-decoration: ",";\n  &:focus {\n    border: none;\n    outline: none;\n  }\n"]);return F=function(){return n},n}var _=s.c.input(F(),(function(n){return n.theme.colors.backgroundColor}),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.status?"line-through":"none"})),S=s.c.input(w(),(function(n){return n.theme.colors.borderColor})),A=s.c.ul(k()),z=s.c.li(C(),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.colors.backgroundColor})),E=s.c.button(y(),(function(n){return n.theme.colors.backgroundHoverColor}));function I(){var n=Object(b.b)(),t=function(){var n=Object(b.c)(m),t=Object(b.c)(x);return{visibleTodos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;switch(arguments.length>1&&void 0!==arguments[1]?arguments[1]:t){case"showAll":return e;case"showActive":return e.filter((function(n){return!1===n.status}));case"showCompleted":return e.filter((function(n){return!0===n.status}));default:return e}}()}}().visibleTodos;return Object(o.jsx)(A,{children:t.map((function(t){return Object(o.jsxs)(z,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(S,{checked:t.status,type:"checkbox",onClick:function(){var e;n((e=t.id,{type:j,payload:{id:e}}))}}),Object(o.jsx)(_,{status:t.status,value:t.name,onChange:function(e){return n((o=t.id,r=e.target.value,{type:v,payload:{id:o,value:r}}));var o,r}})]}),Object(o.jsx)("div",{children:Object(o.jsx)(E,{onClick:function(){var e;n((e=t.id,{type:p,payload:{id:e}}))},children:"delete"})})]},t.id)}))})}function H(){var n=Object(u.a)(["\n  font-family: '\u5fae\u8edf\u6b63\u9ed1\u9ad4', Arial, sans-serif;\n  font-weight: bold;\n  padding: 10px 20px;\n  font-size: ",";\n  cursor: pointer;\n  color: ",";\n  transition: 0.5s;\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  ","\n"]);return H=function(){return n},n}function T(){var n=Object(u.a)(["\n  width: 100%;\n  background: ",";\n"]);return T=function(){return n},n}var D=s.c.div(T(),(function(n){return n.theme.colors.backgroundColor})),N=s.c.button(H(),(function(n){return n.theme.fontSizes.small}),(function(n){return n.theme.colors.filterFontColor}),(function(n){return n.theme.colors.backgroundHoverColor}),(function(n){return n.theme.colors.filterFontHoverColor}),(function(n){return n.$active&&"\n    background : ".concat(n.theme.colors.backgroundHoverColor,";\n    color: ").concat(n.theme.colors.filterFontHoverColor,";\n    ")}));var J=function(){var n=Object(b.b)(),t=Object(b.c)(x);return Object(o.jsxs)(D,{children:[Object(o.jsx)(N,{$active:"showAll"===t,onClick:function(){return n(O("showAll"))},children:"\u5168\u90e8"}),Object(o.jsx)(N,{$active:"showActive"===t,onClick:function(){return n(O("showActive"))},children:"\u672a\u5b8c\u6210"}),Object(o.jsx)(N,{$active:"showCompleted"===t,onClick:function(){return n(O("showCompleted"))},children:"\u5b8c\u6210"})]})},L=e(19);function P(){var n=Object(b.b)(),t=Object(r.useState)(""),e=Object(L.a)(t,2),o=e[0],i=e[1];return{value:o,setValue:i,handleOnkeyPress:function(t){""!==t.target.value&&"Enter"===t.key&&(n({type:h,payload:{name:o}}),i(""))},handleInputOnChange:function(n){i(n.target.value)}}}function U(){var n=Object(u.a)(["\n  font-family: '\u5fae\u8edf\u6b63\u9ed1\u9ad4', Arial, sans-serif;\n  width: 100%;\n  height: 60px;\n  border: solid 0px;\n  font-size: ",";\n  box-sizing: border-box;\n  padding-left: 6px;\n  color: ",";\n  \n  &:focus {\n    border: none;\n    outline: none;\n    vertical-align: middle;\n  }\n"]);return U=function(){return n},n}var X=s.c.input(U(),(function(n){return n.theme.fontSizes.huge}),(function(n){return n.theme.colors.filterFontHoverColor}));var $=function(){var n=P(),t=n.value,e=n.handleOnkeyPress,r=n.handleInputOnChange;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(X,{placeholder:"\u4f86\u9ede\u672a\u5b8c\u8a18\u4e8b",value:t,onChange:function(n){r(n)},onKeyPress:function(n){return e(n)}})})};function V(){var n=Object(b.b)(),t=Object(b.c)(m);Object(r.useEffect)((function(){var t=JSON.parse(localStorage.getItem("todos"));0!==t.length&&n(function(n){return{type:f,payload:{todos:n}}}(t))}),[]),Object(r.useEffect)((function(){var n=JSON.stringify(t);localStorage.setItem("todos",n)}),[t])}function q(){var n=Object(u.a)(["\n  position : relative;\n  width: 40vw;\n  margin: 50px auto 0px auto;\n  box-shadow: 0px 0px 2px gray;\n"]);return q=function(){return n},n}var B=s.c.div(q());var M=function(){return V(),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(B,{children:[Object(o.jsx)($,{}),Object(o.jsx)(J,{}),Object(o.jsx)(I,{})]})]})},R=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,36)).then((function(t){var e=t.getCLS,o=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;e(n),o(n),r(n),i(n),c(n)}))},G=e(7),K=e(20),Q=e(5),W={todos:[]};var Y={filter:"showAll"};var Z=Object(G.b)({todos:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(Q.a)(Object(Q.a)({},n),{},{todos:t.payload.todos});case h:return Object(Q.a)(Object(Q.a)({},n),{},{todos:[].concat(Object(K.a)(n.todos),[{id:0===n.todos.length?0:n.todos[n.todos.length-1].id+1,name:t.payload.name,status:!1}])});case p:return Object(Q.a)(Object(Q.a)({},n),{},{todos:n.todos.filter((function(n){return n.id!==t.payload.id}))});case v:return Object(Q.a)(Object(Q.a)({},n),{},{todos:n.todos.map((function(n){return n.id===t.payload.id?Object(Q.a)(Object(Q.a)({},n),{},{name:t.payload.value}):n}))});case j:return Object(Q.a)(Object(Q.a)({},n),{},{todos:n.todos.map((function(n){return n.id===t.payload.id?Object(Q.a)(Object(Q.a)({},n),{},{status:!n.status}):n}))});default:return n}},visibility:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{filter:t.payload.visibility};default:return n}}}),nn=Object(G.c)(Z,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(s.a,{theme:{colors:{backgroundColor:"#D7CCC8",backgroundHoverColor:"#edf0f4",fontColor:"#F5F5F5",filterFontColor:"#F5F5F5",filterFontHoverColor:"#292c2e",borderColor:"#FAFAFA"},fontSizes:{huge:"30px",large:"26px",medium:"20px",small:"16px",tiny:"14px"}},children:Object(o.jsx)(b.a,{store:nn,children:Object(o.jsx)(M,{})})})}),document.getElementById("root")),R()}},[[35,1,2]]]);
//# sourceMappingURL=main.aa4579e4.chunk.js.map