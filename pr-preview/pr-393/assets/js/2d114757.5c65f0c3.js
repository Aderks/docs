"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1002],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4337:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var n=r(3117),o=(r(7294),r(3905));const i={sidebar_label:"Recipe Book Overview"},a="\ud83e\udd57 Recipe Book Overview",l={unversionedId:"developers/recipe-book",id:"developers/recipe-book",title:"\ud83e\udd57 Recipe Book Overview",description:"\ud83d\udcd6 Overview",source:"@site/docs/developers/recipe-book.md",sourceDirName:"developers",slug:"/developers/recipe-book",permalink:"/pr-preview/pr-393/developers/recipe-book",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/recipe-book.md",tags:[],version:"current",frontMatter:{sidebar_label:"Recipe Book Overview"},sidebar:"developers",previous:{title:"Recipe Book",permalink:"/pr-preview/pr-393/category/recipe-book"},next:{title:"Scaffold your Rollup",permalink:"/pr-preview/pr-393/developers/recipe-scaffold"}},p={},c=[{value:"\ud83d\udcd6 Overview",id:"-overview",level:2},{value:"\ud83d\udcbb Prerequisites",id:"-prerequisites",level:2},{value:"\ud83e\uddf1 Table of Contents",id:"-table-of-contents",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-recipe-book-overview"},"\ud83e\udd57 Recipe Book Overview"),(0,o.kt)("h2",{id:"-overview"},"\ud83d\udcd6 Overview"),(0,o.kt)("p",null,"In this tutorial, we are going to build a blockchain\nfor your favorite recipes. The goal of this tutorial\nis to create a Rollmint rollup with a module that allows\nyou to write and read data to and from your application-specific\nblockchain. The end user will be able to submit new\nrecipes and read them from the blockchain."),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"./gm-world"},(0,o.kt)("inlineCode",{parentName:"a"},"gm world")," tutorial"),", we defined a\nnew API endpoint and modified a keeper query function\nto return static data. In this tutorial, we will be\nmodifying the state with transactions (Cosmos SDK messages)\nthat are routed to a module and its message handlers, which\nare sent to the ",(0,o.kt)("inlineCode",{parentName:"p"},"recipes")," blockchain."),(0,o.kt)("h2",{id:"-prerequisites"},"\ud83d\udcbb Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./gm-world"},"gm world Tutorial")," (recommended)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-393/nodes/environment#install-golang"},"Install Golang")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../nodes/celestia-node"},"Install Celestia Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./gm-setup"},"Install Ignite CLI"))),(0,o.kt)("h2",{id:"-table-of-contents"},"\ud83e\uddf1 Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./recipe-scaffold"},"Scaffolding your Rollup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./recipe-message"},"Messages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./recipe-keeper"},"Keepers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./recipe-query"},"Querying Recipes"))))}u.isMDXComponent=!0}}]);