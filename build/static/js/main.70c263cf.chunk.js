(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(13),l=t.n(r),o=(t(19),t(2)),c=t(3),i=t.n(c),m="/api/persons",f=function(){return i.a.get(m).then((function(e){return e.data}))},d=function(e){var n=i.a.post(m,e);return console.log("reguest vastaus",n),n.then((function(e){return e.data}))},s=function(e,n){return i.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return i.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},b=function(e){var n=e.notification,t=e.type;return null===n?null:u.a.createElement("div",{className:t},n)},v=function(e){return u.a.createElement("form",null,u.a.createElement("div",null,"filter show with ",u.a.createElement("input",{value:e.filterValue,onChange:e.filterOnChange})))},E=function(e){return u.a.createElement("form",{onSubmit:e.onSubmit},u.a.createElement("div",null,"name: ",u.a.createElement("input",{value:e.nameValue,onChange:e.nameOnChange})),u.a.createElement("div",null,"number: ",u.a.createElement("input",{value:e.numberValue,onChange:e.numberOnChange})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add")))},p=function(e){return u.a.createElement("div",null,e.name," ",e.number," ",u.a.createElement("button",{id:e.id,value:e.name,onClick:e.deletePerson},"delete"))},g=function(e){var n;return e.filterValue.length>0?(n=e.persons.filter((function(n){return n.name.toLowerCase().includes(e.filterValue.toLowerCase())})),u.a.createElement("div",null,u.a.createElement("ul",null,n.map((function(n,t){return u.a.createElement(p,{key:t,name:n.name,number:n.number,deletePerson:e.deletePerson,id:n.id})}))))):u.a.createElement("div",null,u.a.createElement("ul",null,e.persons.map((function(n,t){return u.a.createElement(p,{key:t,name:n.name,number:n.number,deletePerson:e.deletePerson,id:n.id})}))))},O=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],l=Object(a.useState)(""),c=Object(o.a)(l,2),i=c[0],m=c[1],p=Object(a.useState)(""),O=Object(o.a)(p,2),j=O[0],w=O[1],C=Object(a.useState)(""),S=Object(o.a)(C,2),k=S[0],y=S[1],V=Object(a.useState)(null),P=Object(o.a)(V,2),T=P[0],D=P[1],I=Object(a.useState)(null),J=Object(o.a)(I,2),L=J[0],N=J[1];Object(a.useEffect)((function(){f().then((function(e){r(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(v,{filterValue:k,filterOnChange:function(e){e.preventDefault(),y(e.target.value)}}),u.a.createElement(b,{notification:T,type:L}),u.a.createElement("h3",null,"Add a new"),u.a.createElement(E,{onSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===i})),a={name:i,number:j};if(void 0!==n){if(window.confirm("".concat(i," is already added to phonebook, replace the old number with a new one?"))){var u=t.find((function(e){return e.name===a.name})).id;s(u,a).then((function(e){f().then((function(e){r(e),m(""),w(""),D("".concat(a.name," number updated")),N("normal"),setTimeout((function(){D(null),N(null)}),5e3)}))})).catch((function(e){f().then((function(e){r(e)})),D("Information of ".concat(a.name," has already been removed from server")),N("error"),setTimeout((function(){D(null),N(null)}),5e3)}))}}else d(a).then((function(e){r(t.concat(e)),m(""),w(""),D("".concat(a.name," added to phonebook")),N("normal"),setTimeout((function(){D(null),N(null)}),5e3)}))},nameValue:i,nameOnChange:function(e){m(e.target.value)},numberValue:j,numberOnChange:function(e){w(e.target.value)}}),u.a.createElement("h2",null,"Numbers"),u.a.createElement(g,{persons:t,filterValue:k,deletePerson:function(e){var n=e.target.value;window.confirm("Delete ".concat(n,"?"))&&h(e.target.id).then((function(e){f().then((function(e){r(e)})),D("".concat(n," removed from phonebook")),N("normal"),setTimeout((function(){D(null)}),5e3)})).catch((function(e){f().then((function(e){r(e)})),D("Information of ".concat(n," has already been removed from server")),N("error"),setTimeout((function(){D(null),N(null)}),5e3)}))}}))};l.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(O,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.70c263cf.chunk.js.map