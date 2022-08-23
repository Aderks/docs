"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4647],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,d=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(d,s(s({ref:t},m),{},{components:r})):n.createElement(d,s({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2911:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={sidebar_label:"CosmWasm Overview"},c="CosmWasm on Optimint",l={unversionedId:"developers/cosmwasm",id:"developers/cosmwasm",title:"CosmWasm on Optimint",description:"CosmWasm is a smart contracting platform built for the Cosmos",source:"@site/docs/developers/cosmwasm.md",sourceDirName:"developers",slug:"/developers/cosmwasm",permalink:"/developers/cosmwasm",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm.md",tags:[],version:"current",frontMatter:{sidebar_label:"CosmWasm Overview"},sidebar:"developers",previous:{title:"CosmWasm",permalink:"/category/cosmwasm"},next:{title:"CosmWasm Dependencies",permalink:"/developers/cosmwasm-dependency"}},m={},u=[],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cosmwasm-on-optimint"},"CosmWasm on Optimint"),(0,a.kt)("p",null,"CosmWasm is a smart contracting platform built for the Cosmos\necosystem by making use of WebAssembly (Wasm) to build smart contracts\nfor Cosmos-SDK. In this tutorial, we will be exploring how to integrate\nCosmWasm with Celestia's Data Availability Layer using Optimint."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'NOTE: This tutorial will explore developing with Optimint,\nwhich is still in Alpha stage. If you run into bugs, please\nwrite a Github Issue ticket or let us know in our Discord.\nFurthermore, while Optimint allows you to build sovereign rollups\non Celestia, it currently does not support fraud proofs yet and is\ntherefore running in "pessimistic" mode, where nodes would need to\nre-execute the transactions to check the validity of the chain\n(i.e. a full node). Furthermore, Optimint currently only supports\na single sequencer.')),(0,a.kt)("p",null,"You can learn more about CosmWasm ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/1.0/"},"here"),"."),(0,a.kt)("p",null,"In this tutorial, we will going over the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/developers/cosmwasm-dependency"},"Setting up your dependencies for your CosmWasm smart contracts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/developers/cosmwasm-dependency#wasmd-installation"},"Setting up Optimint on CosmWasm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/developers/cosmwasm-environment"},"Instantiate a local network for your CosmWasm chain connected to Celestia")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/developers/cosmwasm-contract-deployment"},"Deploying a Rust smart contract to CosmWasm chain")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/developers/cosmwasm-contract-interaction"},"Interacting with the smart contract"))),(0,a.kt)("p",null,"The smart contract we will use for this tutorial is one provided by\nthe CosmWasm team for Nameservice purchasing."),(0,a.kt)("p",null,"You can check out the contract ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/InterWasm/cw-contracts/tree/main/contracts/nameservice"},"here"),"."),(0,a.kt)("p",null,"How to write the Rust smart contract for Nameservice is outside the scope of\nthis tutorial. In the future we will add more tutorials for writing CosmWasm\nsmart contracts for Celestia."))}f.isMDXComponent=!0}}]);