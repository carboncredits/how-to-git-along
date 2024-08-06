import{_ as n}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-j4EyVpYr.js";import{o as k,c as r,k as a,l as p,m as o,q as d,s as g,B as t,e as s,aa as i}from"./modules/vue-rOHTgtFx.js";import{I as c}from"./slidev/default-zAXCsn9X.js";import{u as y,f as u}from"./slidev/context-o1RxciAU.js";import"./modules/unplugin-icons-D9kGfLix.js";import"./index-C0ChEDTH.js";import"./modules/shiki-C4tUuVoI.js";const A=s("h1",null,"Workflows",-1),B=s("p",null,[s("strong",null,"Github"),i(" workflows are computations that are triggered by merging/pushing commits. These are very useful for testing whether or not a pull request will break changes.")],-1),F=s("pre",{class:"shiki shiki-themes Vitesse Dark Vitesse Light slidev-code",style:{"--shiki-dark":"#dbd7ca","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-yaml"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575","--shiki-light":"#A0ADA0"}},"# What should trigger running this workflow?")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1C6B48"}},"on"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"  push"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"  pull_request"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"    branches"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"      -"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," main")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"jobs"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"  run"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"    steps"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575","--shiki-light":"#A0ADA0"}},"      # Use the github action for checking out code")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"      -"),s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}}," uses"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," actions/checkout@v3")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575","--shiki-light":"#A0ADA0"}},"      # Use the github action for setting up python")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"      -"),s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}}," uses"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," actions/setup-python@v4")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"        with"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"          python-version"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," '3.9'")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}},"          cache"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," 'pip'"),s("span",{style:{"--shiki-dark":"#758575","--shiki-light":"#A0ADA0"}}," # caching pip dependencies")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"      -"),s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}}," run"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," pip install -r requirements.txt")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},"      -"),s("span",{style:{"--shiki-dark":"#429988","--shiki-light":"#2F8A89"}}," run"),s("span",{style:{"--shiki-dark":"#858585","--shiki-light":"#8E8F8B"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," python run.py")])])],-1),m={__name:"slides.md__slidev_18",setup(f){const{$slidev:_,$nav:E,$clicksContext:h,$clicks:C,$page:D,$renderContext:b,$frontmatter:e}=y();return h.setup(),(v,w)=>{const l=n;return k(),r(c,d(g(t(u)(t(e),17))),{default:a(()=>[A,B,p(l,o({},{ranges:[]}),{default:a(()=>[F]),_:1},16)]),_:1},16)}}},W=m;export{W as default};
