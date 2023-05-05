"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),c=n(7392),p=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:a}),[u,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var f=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==i&&(u(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(w,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},578:(e,t,n)=>{n.d(t,{Z:()=>a});const a=Object.freeze({golangNodeBSR:"1.20.2",golangNodeOther:"1.19.1",golangApp:"1.19.1",golangCore:"1.19.1",golang:"1.19.1",arabicaChainId:"arabica-6",rollkitVersion:"v0.7.3",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2",orchrelayVersion:"v0.2.0-app-v0.13.2-beta"})},8559:(e,t,n)=>{n.r(t),n.d(t,{ARABICA_PARAMS:()=>f,BLOCKSPACERACE_PARAMS:()=>w,MOCHA_PARAMS:()=>k,assets:()=>h,contentTitle:()=>d,default:()=>y,frontMatter:()=>u,metadata:()=>m,toc:()=>b});var a=n(7462),r=n(7294),o=n(3905),l=n(578);const i={keplrButton:"keplrButton_GKhU"};function s(e){let{params:t}=e;return r.createElement("div",{className:i.center},r.createElement("button",{className:i.keplrButton,onClick:async function(){if(window.keplr){if(window.keplr.experimentalSuggestChain)try{await window.keplr.experimentalSuggestChain({chainId:t.chainId,chainName:t.chainName,rpc:t.rpc,rest:t.rest,bip44:{coinType:118},bech32Config:{bech32PrefixAccAddr:"celestia",bech32PrefixAccPub:"celestiapub",bech32PrefixValAddr:"celestiavaloper",bech32PrefixValPub:"celestiavaloperpub",bech32PrefixConsAddr:"celestiavalcons",bech32PrefixConsPub:"celestiavalconspub"},currencies:[{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia"}],feeCurrencies:[{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia",gasPriceStep:{low:.01,average:.025,high:.04}}],stakeCurrency:{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia"}})}catch{alert("Failed to suggest the chain")}const e=t.chainId;await window.keplr.enable(e)}else alert("Please install keplr extension")}},"Add/Switch To ",t.chainName))}var c=n(4866),p=n(5162);const u={sidebar_label:"Keplr integration"},d="Keplr integration with Celestia",m={unversionedId:"developers/keplr",id:"developers/keplr",title:"Keplr integration with Celestia",description:"Keplr is a popular Cosmos-based wallet that allows anyone",source:"@site/docs/developers/keplr.mdx",sourceDirName:"developers",slug:"/developers/keplr",permalink:"/pr-preview/pr-728/fr/developers/keplr",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/keplr.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Keplr integration"},sidebar:"developers",previous:{title:"Create a Celestia wallet",permalink:"/pr-preview/pr-728/fr/category/create-a-celestia-wallet"},next:{title:"Wallet with Celestia App",permalink:"/pr-preview/pr-728/fr/developers/celestia-app-wallet"}},h={},b=[{value:"Add Celestia network to Keplr",id:"add-celestia-network-to-keplr",level:2}],f={chainId:`${l.Z.arabicaChainId}`,chainName:"Arabica Devnet",rpc:"https://rpc.limani.celestia-devops.dev",rest:"https://api.limani.celestia-devops.dev"},k={chainId:"mocha",chainName:"Mocha Testnet",rpc:"https://rpc-mocha.pops.one",rest:"https://api-mocha.pops.one"},w={chainId:"blockspacerace",chainName:"Blockspace Race Testnet",rpc:"https://rpc-blockspacerace.pops.one",rest:"https://api-blockspacerace.pops.one"},v={toc:b,ARABICA_PARAMS:f,MOCHA_PARAMS:k,BLOCKSPACERACE_PARAMS:w},g="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keplr-integration-with-celestia"},"Keplr integration with Celestia"),(0,o.kt)("p",null,"Keplr is a popular Cosmos-based wallet that allows anyone\nto connect to Tendermint chains from their browser."),(0,o.kt)("p",null,"You can learn more about installing Keplr ",(0,o.kt)("a",{parentName:"p",href:"https://www.keplr.app/download"},"here"),"."),(0,o.kt)("p",null,"In this tutorial, we will have an interactive demo that goes over how\nyou can add Celestia network parameters to Keplr."),(0,o.kt)("p",null,"Most of the overview of integration are found on Keplr's website\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.keplr.app/api"},"here"),"."),(0,o.kt)("p",null,"For our demonstration, we converted the Keplr code on their docs\nto React components in order to demonstrate how you can add a Celestia\nnetwork to Keplr from inside the docs."),(0,o.kt)("h2",{id:"add-celestia-network-to-keplr"},"Add Celestia network to Keplr"),(0,o.kt)("p",null,"Before we demonstrate how to export the specific parameters for\nCelestia's testnets, we need to create a ReactJS component\nthat allows us to connect directly to Keplr and pass it the network\nparams."),(0,o.kt)("p",null,"In the following code, we show how you can export a component\nthat detects whether Keplr is installed and sets the network\nparams for it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\'\nimport styles from \'./Keplr.module.css\'\n\nexport default function AddNetworkKeplr({params}){\n  async function add() {\n    if (!window.keplr) {\n        alert("Please install keplr extension");\n    } else {\n        if (window.keplr.experimentalSuggestChain){\n          try {\n            await window.keplr.experimentalSuggestChain({\n              chainId: params.chainId, \n                            chainName: params.chainName,\n                            rpc: params.rpc,\n                            rest: params.rest,\n                            bip44: {\n                                    coinType: 118,\n                            },\n                            bech32Config: {\n                                    bech32PrefixAccAddr: "celestia",\n                                    bech32PrefixAccPub: "celestia" + "pub",\n                                    bech32PrefixValAddr: "celestia" + "valoper",\n                                    bech32PrefixValPub: "celestia" + "valoperpub",\n                                    bech32PrefixConsAddr: "celestia" + "valcons",\n                                    bech32PrefixConsPub: "celestia" + "valconspub",\n                            },\n                            currencies: [ \n                                    { \n                                            coinDenom: "TIA", \n                                            coinMinimalDenom: "utia", \n                                            coinDecimals: 6, \n                                            coinGeckoId: "celestia", \n                                    }, \n                            ],\n                            feeCurrencies: [\n                                    {\n                                            coinDenom: "TIA",\n                                            coinMinimalDenom: "utia",\n                                            coinDecimals: 6,\n                                            coinGeckoId: "celestia",\n                                            gasPriceStep: {\n                                                    low: 0.01,\n                                                    average: 0.025,\n                                                    high: 0.04,\n                                            },\n                                    },\n                            ],\n                            stakeCurrency: {\n                                    coinDenom: "TIA",\n                                    coinMinimalDenom: "utia",\n                                    coinDecimals: 6,\n                                    coinGeckoId: "celestia",\n                            },   \n            }) \n          } catch {\n            alert("Failed to suggest the chain");\n          }\n        }\n        const chainId = params.chainId;\n        // Enabling before using the Keplr is recommended.\n        // This method will ask the user whether to allow access if they haven\'t visited this website.\n        // Also, it will request that the user unlock the wallet if the wallet is locked.\n        await window.keplr.enable(chainId);\n    }\n  }\n\n  return (\n        <div className={styles.center}>\n      <button className={styles.keplrButton} onClick={add}>Add/Switch To {params.chainName}</button> \n    </div>\n  )\n}\n')),(0,o.kt)("p",null,"This example is just for using Celestia configs."),(0,o.kt)("p",null,"We still need to pass the Celestia network params for it."),(0,o.kt)("p",null,"We can do it for both testnets in the following section."),(0,o.kt)("p",null,"You can also test out the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")," button to add those\nparams to your Keplr wallet. NOTE: You must have Keplr installed\nfirst."),(0,o.kt)(c.Z,{groupId:"keplr-network-selection",mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,o.kt)("p",null,"Here is a demo button that allows you to\nadd the blockspace race testnet to Keplr."),(0,o.kt)("p",null,"Try it out:"),(0,o.kt)(s,{params:w,mdxType:"AddNetworkKeplr"}),(0,o.kt)("p",null,"Behind the scenes, here are the params\nwe are passing to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddNetworkKeplr"),"\nfunction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import '@site/src/components/AddNetworkKeplr'\n\nexport const BLOCKSPACERACE_PARAMS = {\n  chainId: 'blockspacerace',\n  chainName: 'Blockspace Race Testnet',\n  rpc: 'https://rpc-blockspacerace.pops.one',\n  rest: 'https://api-blockspacerace.pops.one'\n}\n\n<AddNetworkKeplr params={BLOCKSPACERACE_PARAMS}/>\n"))),(0,o.kt)(p.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("p",null,"Here is a demo button that allows you to\nadd Mocha Testnet to Keplr."),(0,o.kt)("p",null,"Try it out:"),(0,o.kt)(s,{params:k,mdxType:"AddNetworkKeplr"}),(0,o.kt)("p",null,"Behind the scenes, here are the params\nwe are passing to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddNetworkKeplr"),"\nfunction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import '@site/src/components/AddNetworkKeplr'\n\nexport const MOCHA_PARAMS = {\n  chainId: 'mocha',\n  chainName: 'Mocha Testnet',\n  rpc: 'https://rpc-mocha.pops.one',\n  rest: 'https://api-mocha.pops.one'\n}\n\n<AddNetworkKeplr params={MOCHA_PARAMS}/>\n"))),(0,o.kt)(p.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,o.kt)("p",null,"Here is a demo button that allows you to\nadd Arabica Devnet to Keplr."),(0,o.kt)("p",null,"Try it out:"),(0,o.kt)(s,{params:f,mdxType:"AddNetworkKeplr"}),(0,o.kt)("p",null,"Behind the scenes, here are the params\nwe are passing to the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddNetworkKeplr"),"\nfunction:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"import '@site/src/components/AddNetworkKeplr' ",(0,o.kt)("br",null),(0,o.kt)("br",null),"export const ARABICA_PARAMS = ",`{\n  chainId: '${l.Z.arabicaChainId}',\n  chainName: 'Arabica Devnet',\n  rpc: 'https://rpc.limani.celestia-devops.dev',\n  rest: 'https://api.limani.celestia-devops.dev'\n}`," ",(0,o.kt)("br",null),(0,o.kt)("br",null),"<AddNetworkKeplr params={ARABICA_PARAMS}/>")))))}y.isMDXComponent=!0}}]);