"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1001],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=l,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4888:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return p}});var n=r(3117),l=(r(7294),r(3905));const o={sidebar_label:"Rollkit"},i="Rollmint",a={unversionedId:"developers/rollkit",id:"developers/rollkit",title:"Rollmint",description:"rollmint",source:"@site/docs/developers/rollkit.md",sourceDirName:"developers",slug:"/developers/rollkit",permalink:"/pr-preview/pr-420/developers/rollkit",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/rollkit.md",tags:[],version:"current",frontMatter:{sidebar_label:"Rollkit"},sidebar:"developers",previous:{title:"Node API",permalink:"/pr-preview/pr-420/developers/node-api"},next:{title:"Full Stack Modular Blockchain Development Guide",permalink:"/pr-preview/pr-420/developers/full-stack-modular-development-guide"}},s={},p=[{value:"Tutorials",id:"tutorials",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rollmint"},"Rollmint"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"rollmint",src:r(6256).Z,width:"1280",height:"910"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://rollkit.dev"},"Rollkit")," is an ABCI\n(Application Blockchain Interface) implementation for sovereign\nrollups to deploy on top of Celestia."),(0,l.kt)("p",null,"It is built by replacing Tendermint, the Cosmos-SDK\nconsensus layer, with a drop-in replacement that\ncommunicates directly with Celestia's Data Availability layer."),(0,l.kt)("p",null,"It spins up a sovereign rollup, which collects transactions into blocks and\nposts them onto Celestia for consensus and data availability."),(0,l.kt)("p",null,"The goal of Rollkit is to enable anyone to design and\ndeploy a sovereign rollup on Celestia in minutes."),(0,l.kt)("p",null,'Furthermore, while Rollkit allows you to build sovereign rollups\non Celestia, it currently does not support fraud proofs yet and is\ntherefore running in "pessimistic" mode, where nodes would need to\nre-execute the transactions to check the validity of the chain\n(i.e. a full node). Furthermore, Rollkit currently only supports\na single sequencer.'),(0,l.kt)("h2",{id:"tutorials"},"Tutorials"),(0,l.kt)("p",null,"The following tutorials will help you get started building\nCosmos-SDK applications that connect to Celestia's Data Availability\nLayer via Rollkit. We call those chains Sovereign Rollups."),(0,l.kt)("p",null,"You can get started with the following tutorials:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/gm-world"},"gm world")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/recipe-book"},"Recipe Book")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/wordle"},"Wordle Game")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/cosmwasm"},"CosmWasm Tutorial")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/ethermint"},"Ethermint Tutorial"))))}c.isMDXComponent=!0},6256:function(e,t,r){t.Z=r.p+"assets/images/rollmint-5be7479f6bad05fad502a38ad0f3c5c6.png"}}]);