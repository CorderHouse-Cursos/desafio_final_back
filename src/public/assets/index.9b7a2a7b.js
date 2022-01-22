var O=Object.defineProperty,_=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var L=(o,t,r)=>t in o?O(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,f=(o,t)=>{for(var r in t||(t={}))G.call(t,r)&&L(o,r,t[r]);if(C)for(var r of C(t))H.call(t,r)&&L(o,r,t[r]);return o},g=(o,t)=>_(o,q(t));import{s as d,u as R,a as M,b as V,c as S,j as i,d as e,F as u,B as b,r as m,L as k,e as J,f as K,D as N,g as $,C as y,T as U,h as W,i as D,R as E,k as p,l as Q,m as X,n as Y}from"./vendor.7f8613b6.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}};Z();async function ee(o){const t=new FormData;t.append("nombre",o.nombre),t.append("descripcion",o.descripcion),t.append("codigo",o.codigo),t.append("precio",o.precio.toString()),t.append("stock",o.stock.toString()),t.append("foto",o.foto[0]);const c=await(await fetch("http://localhost:3000/api/productos",{method:"POST",body:t})).json();return console.log(c.message),c.message==="Producto creado"}async function T(){return await(await fetch("http://localhost:3000/api/productos")).json()}async function te(o){return(await(await fetch(`http://localhost:3000/api/productos/${o}`,{method:"DELETE"})).json()).message==="Producto eliminado"}async function oe(o,t){const r=new FormData;return console.log(t.foto[0]),r.append("nombre",t.nombre),r.append("descripcion",t.descripcion),r.append("codigo",t.codigo),r.append("precio",t.precio.toString()),r.append("stock",t.stock.toString()),r.append("foto",t.foto[0]),console.log(r),(await(await fetch(`http://localhost:3000/api/productos/${o}`,{method:"PUT",body:r})).json()).message==="Producto actualizado"}const re=d.h1`
  font-size: 2em;
  color: #61afef;
  text-align: center;
  margin-bottom: 0.5em;
`,ne=d.div`
  width: 70%;
  margin: 0 auto;
  padding: 3em;
`;function v(){const o=R(),{id:t}=M(),{register:r,handleSubmit:c,watch:n,setValue:a,formState:{errors:l}}=V({mode:"onSubmit",defaultValues:o.state?o.state.product:{}}),s=S();return i(ne,{children:[e(re,{children:"Crear Productos"}),i(u,{method:"post",onSubmit:c(async I=>{let w=null;o.state?w=await oe(parseInt(t),I):w=await ee(I),w&&s("/admin/productos",{state:{updated:!0}})}),children:[i(u.Group,{className:"mb-3",controlId:"formBasicEmail",children:[e(u.Label,{children:"Nombre"}),e(u.Control,g(f({},r("nombre",{required:!0})),{type:"text",placeholder:"Escribir el nombre"}))]}),i(u.Group,{className:"mb-3",controlId:"formBasicPassword",children:[e(u.Label,{children:"Precio"}),e(u.Control,g(f({},r("precio",{required:!0})),{type:"number",placeholder:"Escribe el precio"}))]}),i(u.Group,{className:"mb-3",controlId:"formBasicPassword",children:[e(u.Label,{children:"Descripcion"}),e(u.Control,g(f({},r("descripcion",{required:!0})),{type:"text",placeholder:"Escribe la Descripcion"}))]}),i(u.Group,{className:"mb-3",controlId:"formBasicPassword",children:[e(u.Label,{children:"Codigo"}),e(u.Control,g(f({},r("codigo",{required:!0})),{type:"string",placeholder:"Escribe el codigo"}))]}),i(u.Group,{className:"mb-3",controlId:"formBasicPassword",children:[e(u.Label,{children:"Stock"}),e(u.Control,g(f({},r("stock",{required:!0})),{type:"number",placeholder:"Escribe el stock"}))]}),i(u.Group,{className:"mb-3",controlId:"formBasicPassword",children:[e(u.Label,{children:"Foto"}),e(u.Control,g(f({},r("foto",{required:!0})),{type:"file",placeholder:"Escribe el codigo"}))]}),e(b,{variant:"primary",type:"submit",children:o.state?"Editar":"Crear"})]})]})}function se(){const[o,t]=m.exports.useState(!1);function r(){t(!o)}return{visible:o,toggle:r}}const ie=d.div`
  background-color: #282c34;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  place-items: center;
`;d.div`
  width: 100%;
`;const ce=d.h1`
  color: white;
  font-size: 2em;
`,ae=d.nav`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`,le=d.li`
  margin: 1em;
  cursor: pointer;
  text-align: center;
`;d.a`
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  cursor: pointer;
  text-align: center;
`;const de=d.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;d.div``;const ue=[{name:"Home",path:"/"},{name:"Productos",path:"/productos"}];function me(o){const t=S(),{visible:r,toggle:c}=se(),{admin:n}=o;return i(ie,{children:[e(ce,{children:"CoderStore"}),e(ae,{children:ue.map(a=>e(le,{children:e(k,{to:a.path,children:a.name})},a.name))}),i(de,{children:[e(J,{onClick:()=>t("/carrito"),style:{cursor:"pointer"},sx:{color:"#fff"}}),i("div",{children:[e(K,{onClick:a=>{c(),setTimeout(()=>{console.log("hola"),c()},1e3)},style:{cursor:"pointer",marginLeft:"2em"},sx:{color:"#fff"}}),!n&&e("span",{style:{color:"white",fontSize:10},children:"No es admin"}),e(N,{show:r&&n,children:e(N.Menu,{children:e(k,{style:{marginLeft:10},to:"/admin/productos",children:"Productos"})})})]})]})]})}const pe=d.footer`
  background-color: #282c34;
  height: 100px;
`,he=d.div`
  min-height: 65vh;
`;function fe(o){const{children:t,admin:r}=o;return i($,{children:[e(me,{admin:r}),e(he,{children:t}),e(pe,{})]})}async function ge(){if(console.log(localStorage.getItem("cart")),localStorage.getItem("cart")===null){const r=(await(await fetch("http://localhost:3000/api/carrito",{method:"POST"})).json()).data.id;return localStorage.setItem("cart",r.toString()),r}}async function ye(o){if(localStorage.getItem("cart")!==null){const t=localStorage.getItem("cart"),c=await(await fetch(`http://localhost:3000/api/carrito/${t}/productos/${o}`,{method:"POST"})).json();return x(),c.status===200}}async function be(o){if(localStorage.getItem("cart")!==null){const t=localStorage.getItem("cart");return(await(await fetch(`http://localhost:3000/api/carrito/${t}/productos/${o}`,{method:"DELETE"})).json()).status===200}}async function x(){if(localStorage.getItem("cart")!==null){const o=localStorage.getItem("cart"),r=await(await fetch(`http://localhost:3000/api/carrito/${o}/productos`)).json();return localStorage.setItem("cartItems",JSON.stringify(r.products)),r.products}}function ve({product:o}){const[t,r]=m.exports.useState(!1),[c,n]=m.exports.useState(JSON.parse(localStorage.getItem("cartItems")||"[]")),[a,l]=m.exports.useState(!1),s=async h=>{r(!0),console.log("Agregando producto"),await ye(h),l(!0),r(!1)};return console.log(c),i(y,{style:{width:"18rem",margin:"10px auto"},children:[e(y.Img,{width:200,height:200,variant:"top",src:o.foto}),i(y.Body,{children:[e(y.Title,{style:{fontSize:"2em"},children:o.nombre}),e(y.Text,{style:{fontSize:"1em"},children:o.descripcion}),i(y.Text,{style:{fontSize:"1.3em",textAlign:"center",fontWeight:"Bold"},children:["$ ",o.precio]}),e(b,{onClick:()=>{s(o.id)},disabled:c.map(h=>h.id).includes(o.id)||a,style:{margin:"0 auto",display:"flex"},variant:"primary",children:t?"Cargando...":"Agregar al carrito"})]})]})}const we=d.h1`
  font-size: 2em;
  color: #61afef;
  text-align: center;
  margin-bottom: 0.5em;
`,Se=d.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`,xe=d.p`
  font-size: 1.5em;
  color: black;
  text-align: center;
`;function j({products:o}){return i($,{children:[e(we,{children:"Productos"}),o.length>0?e(Se,{children:o.map(t=>e(ve,{product:t},t.id))}):e(xe,{children:" No hay productos"})]})}const Pe=d.h1`
  font-size: 2em;
  color: black;
  text-align: center;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`;function z({productos:o}){return i("div",{children:[e(Pe,{children:"Bienvenido a la Coder Store"}),e(j,{products:o})]})}function B({productos:o}){return e(j,{products:o})}async function Ie(){const t=await(await fetch("http://localhost:3000/api/user",{})).json();return console.log(t),t.admin}const Ce=d.div`
  width: 80%;
  margin: 0 auto;
  padding: 3em;
`;function A({productos:o}){const[t,r]=m.exports.useState(o);m.exports.useEffect(()=>{T().then(s=>r(s))},[]);const c=S(),n=async s=>{await te(s),r(t.filter(h=>h.id!==s))},a=s=>{c(`${s}`,{state:{product:t.find(h=>h.id===s)}})};return i(Ce,{children:[e(b,{onClick:()=>c("/admin/productos/add"),style:{margin:3},children:"Crear"}),i(U,{striped:!0,bordered:!0,hover:!0,children:[e("thead",{children:i("tr",{children:[e("th",{children:"#"}),e("th",{children:"Nombre"}),e("th",{children:"Precio"}),e("th",{children:"Descripcion"}),e("th",{children:"Stock"}),e("th",{children:"Foto"}),e("th",{children:"Acciones"})]})}),e("tbody",{children:t.map((s,h)=>i("tr",{children:[e("td",{children:s.id}),e("td",{children:s.nombre}),e("td",{children:s.precio}),e("td",{children:s.descripcion}),e("td",{children:s.stock}),e("td",{children:e("img",{width:"100px",src:s.foto,alt:""})}),i("td",{children:[e(W,{onClick:()=>a(s.id||s._id)}),e(D,{onClick:()=>n(s.id||s._id)})]})]},s.id))})]})]})}const Le=d.h1`
  font-size: 2em;
  color: black;
  text-align: center;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`,ke=d.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 30px;
`,P=d.h5`
  font-size: 1.5em;
  color: black;
  text-align: center;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`;function F(){const[o,t]=m.exports.useState([]),[r,c]=m.exports.useState(!0),n=async()=>{c(!0);const l=await x();t(l),c(!1)};m.exports.useEffect(()=>{n()},[]);const a=async l=>{await be(l),n()};return i("div",{style:{minHeight:"100vh"},children:[e(Le,{children:"Carrito"}),r?e("div",{style:{position:"absolute",top:"50%",left:"50%"},className:"spinner-border text-primary",role:"status"}):o.length===0?e(P,{children:"No hay productos"}):e("div",{children:o.map(l=>i(ke,{children:[e("img",{width:100,src:l.foto}),e(P,{children:l.nombre}),i(P,{children:["$ ",l.precio]}),e("div",{children:e(b,{children:e(D,{onClick:()=>a(l.id||l._id)})})})]},l.id))})]})}function Ne(){const[o,t]=m.exports.useState(!0),[r,c]=m.exports.useState([]),[n,a]=m.exports.useState(!1),l=async()=>{a(await Ie())};return m.exports.useEffect(()=>{T().then(s=>{console.log(s),c(s),t(!1)}).catch(s=>{console.log(s)}),ge(),x(),l(),t(!1)},[]),console.log(o),e(fe,{admin:n,children:o?e("div",{style:{position:"absolute",top:"50%",left:"50%"},className:"spinner-border text-primary",role:"status"}):i(E,{children:[e(p,{index:!0,element:e(z,{productos:r})}),e(p,{path:"admin/productos",element:e(A,{productos:r})}),e(p,{path:"admin/productos/add",element:e(v,{})}),e(p,{path:"admin/productos/:id",element:e(v,{})}),e(p,{path:"productos",element:e(B,{productos:r})}),e(p,{path:"carrito",element:e(F,{})})]})})}Q.render(e(X.StrictMode,{children:e(Y,{children:e(E,{children:i(p,{path:"/",element:e(Ne,{}),children:[e(p,{index:!0,element:e(z,{productos:[]})}),e(p,{path:"admin/productos",element:e(A,{productos:[]})}),e(p,{path:"admin/productos/add",element:e(v,{})}),e(p,{path:"admin/productos/:id",element:e(v,{})}),e(p,{path:"/productos",element:e(B,{productos:[]})}),e(p,{path:"/carrito",element:e(F,{})})]})})})}),document.getElementById("root"));
