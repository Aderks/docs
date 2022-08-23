"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[643],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},476:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],i={sidebar_label:"CosmWasm Dependencies"},s="CosmWasm Dependency Installations",u={unversionedId:"developers/cosmwasm-dependency",id:"developers/cosmwasm-dependency",title:"CosmWasm Dependency Installations",description:"Environment Setup",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/cosmwasm-dependency.md",sourceDirName:"developers",slug:"/developers/cosmwasm-dependency",permalink:"/fr/developers/cosmwasm-dependency",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-dependency.md",tags:[],version:"current",frontMatter:{sidebar_label:"CosmWasm Dependencies"},sidebar:"developers",previous:{title:"CosmWasm Overview",permalink:"/fr/developers/cosmwasm"},next:{title:"Setup Network Environment",permalink:"/fr/developers/cosmwasm-environment"}},c={},p=[{value:"Environment Setup",id:"environment-setup",level:2},{value:"Golang Dependency",id:"golang-dependency",level:2},{value:"Rust Installation",id:"rust-installation",level:2},{value:"Rustup",id:"rustup",level:3},{value:"Docker Installation",id:"docker-installation",level:2},{value:"wasmd Installation",id:"wasmd-installation",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cosmwasm-dependency-installations"},"CosmWasm Dependency Installations"),(0,a.kt)("h2",{id:"environment-setup"},"Environment Setup"),(0,a.kt)("p",null,"For this tutorial, we will be using ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"jq")," as helpful\ntools."),(0,a.kt)("p",null,"You can follow the guide on installing them ",(0,a.kt)("a",{parentName:"p",href:"/fr/developers/environment#setting-up-dependencies"},"here"),"."),(0,a.kt)("h2",{id:"golang-dependency"},"Golang Dependency"),(0,a.kt)("p",null,"The Golang version used for this tutorial is v1.18+"),(0,a.kt)("p",null,"If you are using a Linux distribution, you can install Golang\nby following our tutorial ",(0,a.kt)("a",{parentName:"p",href:"/fr/developers/environment#install-golang"},"here"),"."),(0,a.kt)("h2",{id:"rust-installation"},"Rust Installation"),(0,a.kt)("h3",{id:"rustup"},"Rustup"),(0,a.kt)("p",null,"First, before installing Rust, you would need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"rustup"),"."),(0,a.kt)("p",null,"On Mac/Linux systems, here are the commands for installing it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,a.kt)("p",null,"After installation, follow the commands here to setup Rust."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rustup default stable\ncargo version\n\nrustup target list --installed\nrustup target add wasm32-unknown-unknown\n")),(0,a.kt)("h2",{id:"docker-installation"},"Docker Installation"),(0,a.kt)("p",null,"We will be using Docker later in this tutorial for compiling a smart contract\nto use a small footprint."),(0,a.kt)("p",null,"We recommend installing Docker on your machine."),(0,a.kt)("p",null,"Examples on how to install it on Linux are found ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"here"),"."),(0,a.kt)("p",null,"Find the right instructions specific for your OS."),(0,a.kt)("h2",{id:"wasmd-installation"},"wasmd Installation"),(0,a.kt)("p",null,"Here, we are going to pull down the ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd")," repository and replace Tendermint\nwith Optimint. Optimint is a drop-in replacement for Tendermint that allows\nCosmos-SDK applications to connect to Celestia's Data Availability network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/CosmWasm/wasmd.git\ncd wasmd\ngit fetch --tags\ngit checkout v0.27.0\ngo mod edit -replace github.com/cosmos/cosmos-sdk=github.com/celestiaorg/cosmos-sdk@v0.45.4-optimint-v0.3.4\ngo mod tidy \ngo mod download\nmake install\n")))}m.isMDXComponent=!0}}]);