"use strict";(globalThis["webpackChunkvalidacion_dni"]=globalThis["webpackChunkvalidacion_dni"]||[]).push([[755],{5755:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var s=a(9835),n=a(6970);const o={class:"q-pa-md q-gutter-sm"},l=(0,s._)("div",{class:"text-h6 text-grey"},"Nombre Completo:",-1),r={class:"text-h5 text-weight-bold"},i={key:0},d={key:1},u={key:2};function p(e,t,a,p,c,m){const h=(0,s.up)("q-icon"),g=(0,s.up)("q-avatar"),f=(0,s.up)("q-input"),v=(0,s.up)("q-linear-progress"),w=(0,s.up)("q-space"),x=(0,s.up)("q-btn"),b=(0,s.up)("q-card-section"),Z=(0,s.up)("q-card"),y=(0,s.up)("q-dialog"),q=(0,s.up)("q-page"),D=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(q,{class:"flex flex-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{ref:"myInput",standout:"",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t),dense:e.dense,maxlength:8,type:"number",rules:[e=>!!e||"Este campo es obligatorio",e=>/^\d+$/.test(e)||"Debe contener solo números",e=>e&&8===e.length||"Debe tener 8 dígitos numéricos"],onInput:e.handleInput},{append:(0,s.w5)((()=>[(0,s.Wm)(g,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,{name:"person",class:"text-primary",style:{"font-size":"30px"}})])),_:1})])),_:1},8,["modelValue","dense","rules","onInput"]),(0,s._)("div",o,[(0,s.Wm)(y,{modelValue:e.seamless,"onUpdate:modelValue":t[1]||(t[1]=t=>e.seamless=t),seamless:"",position:"bottom"},{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{style:{width:"350px",height:"150px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(v,{value:1,color:"blue"}),(0,s.Wm)(b,{class:"row items-center no-wrap"},{default:(0,s.w5)((()=>[(0,s._)("div",null,[l,(0,s._)("div",r,[e.fetchDataResult?e.fetchDataResult.nombre?((0,s.wg)(),(0,s.iD)("div",d,(0,n.zw)(e.fetchDataResult.nombre),1)):((0,s.wg)(),(0,s.iD)("div",u," No existe o es menor de edad 😡 ")):((0,s.wg)(),(0,s.iD)("div",i,"cargando ..."))])]),(0,s.Wm)(w),(0,s.wy)((0,s.Wm)(x,{flat:"",round:"",icon:"close"},null,512),[[D]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])),_:1})}var c=a(6081),m=a(9120);const h=(0,s.aZ)({name:"IndexPage",data(){return{text:"",dense:!1,seamless:!1,fetchDataResult:""}},mounted(){this.$refs.myInput.focus()},watch:{text(e){8===e.length&&(this.seamless=!0,this.fetchData())}},methods:{async fetchData(){try{const e=this.$q.notify({spinner:m.Z,message:'<p>Esperando al Servidor &nbsp;<span><i class="fa fa-server" aria-hidden="true"></i> <span> <p>',timeout:0,html:!0}),t=await c.Z.get(`http://104.131.72.170/api/v1/getdni?valor=${this.text}`);this.fetchDataResult=t.data,e()}catch(e){console.error("Error fetching data:",e)}}}});var g=a(1639),f=a(9885),v=a(2543),w=a(1357),x=a(2857),b=a(1530),Z=a(4458),y=a(8289),q=a(3190),D=a(136),_=a(9379),Q=a(2146),W=a(9984),I=a.n(W);const k=(0,g.Z)(h,[["render",p]]),C=k;I()(h,"components",{QPage:f.Z,QInput:v.Z,QAvatar:w.Z,QIcon:x.Z,QDialog:b.Z,QCard:Z.Z,QLinearProgress:y.Z,QCardSection:q.Z,QSpace:D.Z,QBtn:_.Z}),I()(h,"directives",{ClosePopup:Q.Z})}}]);