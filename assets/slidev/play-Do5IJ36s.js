const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-CpNeWoXT.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-1o2mXjOP.js","assets/modules/unplugin-icons-D9kGfLix.js","assets/modules/vue-rOHTgtFx.js","assets/modules/shiki-C4tUuVoI.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-DpYAZm-m.js","assets/index-C0ChEDTH.js","assets/index-D2YyCJRA.css","assets/DrawingPreview-rG5jGZSs.css","assets/slidev/useWakeLock-yyT267WI.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-CmtClDt8.js","assets/slidev/context-o1RxciAU.js","assets/useWakeLock-BwHfLbTM.css","assets/DrawingControls-C5T1oZL5.css"])))=>i.map(i=>d[i]);
import{d as g,ab as z,o,c as u,B as e,b as f,e as a,f as R,i as C,g as n,aj as W,z as E,k as h,ai as $,aa as B,R as y,l as p,F as M,x as D,v as A,h as P,t as H}from"../modules/vue-rOHTgtFx.js";import{v as k,a as N,w as I,x as b,y as w,z as L,A as T,d as V,B as O,l as S,D as U,E as j}from"../index-C0ChEDTH.js";import{b as F,G,c as K,u as X,r as Y,a as q,S as J,_ as Q,o as Z}from"./useWakeLock-yyT267WI.js";import{c as ee,a as te}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-DpYAZm-m.js";import{n as oe}from"../modules/unplugin-icons-D9kGfLix.js";import"../modules/shiki-C4tUuVoI.js";import"./IconButton.vue_vue_type_script_setup_true_lang-CmtClDt8.js";import"./context-o1RxciAU.js";const se="/how-to-git-along/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ne=g({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(m,{emit:l}){const s=m,t=z(s,"modelValue",l);function d(){t.value=!1}return(c,r)=>(o(),u(W,null,[e(t)?(o(),f("div",ae,[a("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=i=>d())}),a("div",{class:C(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ main"},[R(c.$slots,"default")],2)])):n("",!0)],1024))}}),le={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},re=["innerHTML"],ie=a("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[a("div",{class:"flex gap-1 children:my-auto"},[a("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),a("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),a("div",{style:{color:"#2082A6"}},[a("b",null,"Sli"),B("dev ")])])],-1),ue=g({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(m,{emit:l}){const t=z(m,"modelValue",l),d=E(()=>typeof k.info=="string");return(c,r)=>(o(),u(ne,{modelValue:e(t),"onUpdate:modelValue":r[0]||(r[0]=i=>$(t)?t.value=i:null),class:"px-6 py-4"},{default:h(()=>[a("div",le,[e(d)?(o(),f("div",{key:0,class:"mb-4",innerHTML:e(k).info},null,8,re)):n("",!0),ie])]),_:1},8,["modelValue"]))}}),de=g({__name:"Controls",setup(m){const{isEmbedded:l}=N(),s=!k.drawings.presenterOnly&&!l.value,t=y();s&&I(()=>import("./DrawingControls-CpNeWoXT.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(r=>t.value=r.default);const d=y(),c=y();return(r,i)=>(o(),f(M,null,[e(s)&&e(t)?(o(),u(e(t),{key:0})):n("",!0),p(F),p(G),e(d)?(o(),u(e(d),{key:1})):n("",!0),e(c)?(o(),u(e(c),{key:2,modelValue:e(b),"onUpdate:modelValue":i[0]||(i[0]=_=>$(b)?b.value=_:null)},null,8,["modelValue"])):n("",!0),e(k).info?(o(),u(ue,{key:3,modelValue:e(w),"onUpdate:modelValue":i[1]||(i[1]=_=>$(w)?w.value=_:null)},null,8,["modelValue"])):n("",!0),p(K)],64))}}),ce=g({__name:"PrintStyle",setup(m){function l(s,{slots:t}){if(t.default)return A("style",t.default())}return(s,t)=>(o(),u(l,null,{default:h(()=>[B(" @page { size: "+D(e(L))+"px "+D(e(T))+"px; margin: 0px; } ",1)]),_:1}))}}),pe={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},me=g({__name:"PresenterMouse",setup(m){return(l,s)=>{const t=oe;return e(V).cursor?(o(),f("div",pe,[p(t,{class:"absolute stroke-white dark:stroke-black",style:P({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):n("",!0)}}}),_e=a("div",{id:"twoslash-container"},null,-1),we=g({__name:"play",setup(m){const{next:l,prev:s,isPrintMode:t}=N(),{isDrawing:d}=ee(),c=H();function r(v){var x;S.value||v.button===0&&((x=v.target)==null?void 0:x.id)==="slide-container"&&(v.pageX/window.innerWidth>.5?l():s())}X(c),Y(),q();const i=E(()=>O.value||S.value),_=y();return(v,x)=>(o(),f(M,null,[e(t)?(o(),u(ce,{key:0})):n("",!0),a("div",{id:"page-root",ref_key:"root",ref:c,class:C(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(te,{style:P({background:"var(--slidev-slide-container-background, black)"}),width:e(t)?e(U).width.value:void 0,"is-main":"",onPointerdown:r,onContextmenu:e(Z)},{default:h(()=>[p(J,{"render-context":"slide"}),p(me)]),controls:h(()=>[e(t)?n("",!0):(o(),f("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[e(i)?"!opacity-100 right-0":"opacity-0 p-2",e(d)?"pointer-events-none":""]])},[p(Q,{persist:e(i)},null,8,["persist"])],2))]),_:1},8,["style","width","onContextmenu"]),e(_)&&e(S)?(o(),u(e(_),{key:0,resize:!0})):n("",!0)],2),e(t)?n("",!0):(o(),u(de,{key:1})),_e],64))}});export{we as default};
