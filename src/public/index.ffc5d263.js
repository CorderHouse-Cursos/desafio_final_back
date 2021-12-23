var O=Object.defineProperty,q=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var L=(o,t,r)=>t in o?O(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r,f=(o,t)=>{for(var r in t||(t={}))H.call(t,r)&&L(o,r,t[r]);if(C)for(var r of C(t))R.call(t,r)&&L(o,r,t[r]);return o},g=(o,t)=>q(o,G(t));import{s as l,u as _,a as M,b as V,c as S,j as i,d as e,F as u,B as b,r as m,L as k,e as J,f as K,D as $,g as D,C as y,T as U,h as W,i as E,R as N,k as p,l as Q,m as X,n as Y}from"./vendor.09f2e2ee.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}};Z();async function ee(o){const t=new FormData;t.append("nombre",o.nombre),t.append("descripcion",o.descripcion),t.append("codigo",o.codigo),t.append("precio",o.precio.toString()),t.append("stock",o.stock.toString()),t.append("foto",o.foto[0]);const a=await(await fetch("/api/productos",{method:"POST",body:t})).json();return console.log(a.message),a.message==="Producto creado"}async function T(){return await(await fetch("/api/productos")).json()}async function te(o){return(await(await fetch(`/api/productos/${o}`,{method:"DELETE"})).json()).message==="Producto eliminado"}async function oe(o,t){const r=new FormData;return console.log(t.foto[0]),r.append("nombre",t.nombre),r.append("descripcion",t.descripcion),r.append("codigo",t.codigo),r.append("precio",t.precio.toString()),r.append("stock",t.stock.toString()),r.append("foto",t.foto[0]),console.log(r),(await(await fetch(`/api/productos/${o}`,{method:"PUT",body:r})).json()).message==="Producto actualizado"}const re=l.h1`
  font-size: 2em;
  color: #61afef;
  text-align: center;
  margin-bottom: 0.5em;
`,ne=l.div`
  width: 70%;
  margin: 0 auto;
  padding: 3em;
`;function w(){const o=_(),{id:t}=M(),{register:r,handleSubmit:a,watch:n,setValue:s,formState:{errors:d}}=V({mode:"onSubmit",defaultValues:o.state?o.state.product:{}}),c=S();return i(ne,{children:[e(re,{children:"Crear Productos"}),i(u,{method:"post",onSubmit:a(async I=>{let v=null;o.state?v=await oe(parseInt(t),I):v=await ee(I),v&&c("/admin/productos",{state:{updated:!0}})}),children:[i(u.Group,{className:"mb-3",controlId:"formBasicEmail",children:[e(u.Label,{children:"Nombre"}),e(u.Control,g(f({},r("nombre",{required:!0})),{type:"text",placeholder:"Escribir el nombre"}))]}),i(u.Group,{className:"mb-3",controlId:"formBasicPassword",children:[e(u.Label,{children:"Precio"}),e(u.Control,g(f({},r("precio",{required:!0})),{type:"number",placeholder:"Escribe el precio"}))]}),i(u.Group,{className:"mb-3",controlId:"formBasicPassword",children:[e(u.Label,{children:"Descripcion"}),e(u.Control,g(f({},r("descripcion",{required:!0})),{type:"text",placeholder:"Escribe la Descripcion"}))]}),i(u.Group,{className:"mb-3",controlId:"formBasicPassword",children:[e(u.Label,{children:"Codigo"}),e(u.Control,g(f({},r("codigo",{required:!0})),{type:"string",placeholder:"Escribe el codigo"}))]}),i(u.Group,{className:"mb-3",controlId:"formBasicPassword",children:[e(u.Label,{children:"Stock"}),e(u.Control,g(f({},r("stock",{required:!0})),{type:"number",placeholder:"Escribe el stock"}))]}),i(u.Group,{className:"mb-3",controlId:"formBasicPassword",children:[e(u.Label,{children:"Foto"}),e(u.Control,g(f({},r("foto",{required:!0})),{type:"file",placeholder:"Escribe el codigo"}))]}),e(b,{variant:"primary",type:"submit",children:o.state?"Editar":"Crear"})]})]})}function ie(){const[o,t]=m.exports.useState(!1);function r(){t(!o)}return{visible:o,toggle:r}}const se=l.div`
  background-color: #282c34;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  place-items: center;
`;l.div`
  width: 100%;
`;const ce=l.h1`
  color: white;
  font-size: 2em;
`,ae=l.nav`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`,de=l.li`
  margin: 1em;
  cursor: pointer;
  text-align: center;
`;l.a`
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  cursor: pointer;
  text-align: center;
`;const le=l.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;l.div``;const ue=[{name:"Home",path:"/"},{name:"Productos",path:"/productos"}];function me(o){const t=S(),{visible:r,toggle:a}=ie(),{admin:n}=o;return i(se,{children:[e(ce,{children:"CoderStore"}),e(ae,{children:ue.map(s=>e(de,{children:e(k,{to:s.path,children:s.name})},s.name))}),i(le,{children:[e(J,{onClick:()=>t("/carrito"),style:{cursor:"pointer"},sx:{color:"#fff"}}),i("div",{children:[e(K,{onClick:s=>{a(),setTimeout(()=>{console.log("hola"),a()},1e3)},style:{cursor:"pointer",marginLeft:"2em"},sx:{color:"#fff"}}),!n&&e("span",{style:{color:"white",fontSize:10},children:"No es admin"}),e($,{show:r&&n,children:e($.Menu,{children:e(k,{style:{marginLeft:10},to:"/admin/productos",children:"Productos"})})})]})]})]})}const pe=l.footer`
  background-color: #282c34;
  height: 100px;
`,he=l.div``;function fe(o){const{children:t,admin:r}=o;return i(D,{children:[e(me,{admin:r}),e(he,{children:t}),e(pe,{})]})}async function ge(){if(console.log(localStorage.getItem("cart")),localStorage.getItem("cart")===null){const r=(await(await fetch("http://localhost:3000/api/carrito",{method:"POST"})).json()).data.id;return localStorage.setItem("cart",r.toString()),r}}async function ye(o){if(localStorage.getItem("cart")!==null){const t=localStorage.getItem("cart"),a=await(await fetch(`/api/carrito/${t}/productos/${o}`,{method:"POST"})).json();return x(),a.status===200}}async function be(o){if(localStorage.getItem("cart")!==null){const t=localStorage.getItem("cart");return(await(await fetch(`/api/carrito/${t}/productos/${o}`,{method:"DELETE"})).json()).status===200}}async function x(){if(localStorage.getItem("cart")!==null){const o=localStorage.getItem("cart"),r=await(await fetch(`/api/carrito/${o}/productos`)).json();return localStorage.setItem("cartItems",JSON.stringify(r.products)),r.products}}function we({product:o}){const[t,r]=m.exports.useState(!1),[a,n]=m.exports.useState(JSON.parse(localStorage.getItem("cartItems")||"[]")),[s,d]=m.exports.useState(!1),c=async h=>{r(!0),console.log("Agregando producto"),await ye(h),d(!0),r(!1)};return console.log(a),i(y,{style:{width:"18rem",margin:"10px auto"},children:[e(y.Img,{width:200,height:200,variant:"top",src:o.foto}),i(y.Body,{children:[e(y.Title,{style:{fontSize:"2em"},children:o.nombre}),e(y.Text,{style:{fontSize:"1em"},children:o.descripcion}),i(y.Text,{style:{fontSize:"1.3em",textAlign:"center",fontWeight:"Bold"},children:["$ ",o.precio]}),e(b,{onClick:()=>{c(o.id)},disabled:a.map(h=>h.id).includes(o.id)||s,style:{margin:"0 auto",display:"flex"},variant:"primary",children:t?"Cargando...":"Agregar al carrito"})]})]})}const ve=l.h1`
  font-size: 2em;
  color: #61afef;
  text-align: center;
  margin-bottom: 0.5em;
`,Se=l.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;function j({products:o}){return i(D,{children:[e(ve,{children:"Productos"}),e(Se,{children:o.map(t=>e(we,{product:t},t.id))})]})}const xe=l.h1`
  font-size: 2em;
  color: black;
  text-align: center;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`;function B({productos:o}){return i("div",{children:[e(xe,{children:"Bienvenido a la Coder Store"}),e(j,{products:o})]})}function z({productos:o}){return e(j,{products:o})}async function Pe(){const t=await(await fetch("/api/user",{})).json();return console.log(t),t.admin}const Ie=l.div`
  width: 80%;
  margin: 0 auto;
  padding: 3em;
`;function A({productos:o}){const[t,r]=m.exports.useState(o);m.exports.useEffect(()=>{T().then(c=>r(c))},[]);const a=S(),n=async c=>{await te(c),r(t.filter(h=>h.id!==c))},s=c=>{a(`${c}`,{state:{product:t.find(h=>h.id===c)}})};return i(Ie,{children:[e(b,{onClick:()=>a("/admin/productos/add"),style:{margin:3},children:"Crear"}),i(U,{striped:!0,bordered:!0,hover:!0,children:[e("thead",{children:i("tr",{children:[e("th",{children:"#"}),e("th",{children:"Nombre"}),e("th",{children:"Precio"}),e("th",{children:"Descripcion"}),e("th",{children:"Stock"}),e("th",{children:"Foto"}),e("th",{children:"Acciones"})]})}),e("tbody",{children:t.map((c,h)=>i("tr",{children:[e("td",{children:c.id}),e("td",{children:c.nombre}),e("td",{children:c.precio}),e("td",{children:c.descripcion}),e("td",{children:c.stock}),e("td",{children:e("img",{width:"100px",src:c.foto,alt:""})}),i("td",{children:[e(W,{onClick:()=>s(c.id)}),e(E,{onClick:()=>n(c.id)})]})]},c.id))})]})]})}const Ce=l.h1`
  font-size: 2em;
  color: black;
  text-align: center;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`,Le=l.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 30px;
`,P=l.h5`
  font-size: 1.5em;
  color: black;
  text-align: center;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`;function F(){const[o,t]=m.exports.useState([]),[r,a]=m.exports.useState(!0),n=async()=>{const d=await x();t(d),a(!1)};m.exports.useEffect(()=>{n()},[]);const s=async d=>{await be(d),n()};return i("div",{style:{minHeight:"100vh"},children:[e(Ce,{children:"Carrito"}),r?e("div",{style:{position:"absolute",top:"50%",left:"50%"},className:"spinner-border text-primary",role:"status"}):o.length===0?e(P,{children:"No hay productos"}):e("div",{children:o.map(d=>i(Le,{children:[e("img",{width:100,src:d.foto}),e(P,{children:d.nombre}),i(P,{children:["$ ",d.precio]}),e("div",{children:e(b,{children:e(E,{onClick:()=>s(d.id)})})})]},d.id))})]})}function ke(){const[o,t]=m.exports.useState(!0),[r,a]=m.exports.useState([]),[n,s]=m.exports.useState(!1),d=async()=>{s(await Pe())};return m.exports.useEffect(()=>{T().then(c=>{a(c),t(!1)}).catch(c=>{console.log(c)}),ge(),x(),d()},[]),e(fe,{admin:n,children:o?e("div",{style:{position:"absolute",top:"50%",left:"50%"},className:"spinner-border text-primary",role:"status"}):i(N,{children:[e(p,{index:!0,element:e(B,{productos:r})}),e(p,{path:"admin/productos",element:e(A,{productos:r})}),e(p,{path:"admin/productos/add",element:e(w,{})}),e(p,{path:"admin/productos/:id",element:e(w,{})}),e(p,{path:"productos",element:e(z,{productos:r})}),e(p,{path:"carrito",element:e(F,{})})]})})}Q.render(e(X.StrictMode,{children:e(Y,{children:e(N,{children:i(p,{path:"/",element:e(ke,{}),children:[e(p,{index:!0,element:e(B,{productos:[]})}),e(p,{path:"admin/productos",element:e(A,{productos:[]})}),e(p,{path:"admin/productos/add",element:e(w,{})}),e(p,{path:"admin/productos/:id",element:e(w,{})}),e(p,{path:"/productos",element:e(z,{productos:[]})}),e(p,{path:"/carrito",element:e(F,{})})]})})})}),document.getElementById("root"));
