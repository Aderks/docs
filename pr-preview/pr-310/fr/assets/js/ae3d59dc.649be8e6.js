"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6969],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a=r(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(3117),a=r(7294),o=r(4334),l=r(2389),i=r(7392),s=r(7094),u=r(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:m,groupId:f,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,i.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,a.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:D}=(0,u.o5)();if(null!=f){const e=y[f];null!=e&&e!==N&&k.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,r=O.indexOf(t),n=k[r].value;n!==N&&(D(t),T(n),null!=f&&w(f,String(n)))},C=e=>{var t;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;r=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;r=O[t]??O[O.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},k.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:C,onClick:E},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,a.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},8482:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905)),o=r(5488),l=r(5162);const i={sidebar_label:"Docker Setup"},s="\ud83d\udc33 Docker Setup",u={unversionedId:"developers/docker",id:"developers/docker",title:"\ud83d\udc33 Docker Setup",description:"This page has instructions to run celestia-node using Docker. If you are looking for instructions to run celestia-node using a binary, please refer to the Celestia Node page.",source:"@site/docs/developers/docker.mdx",sourceDirName:"developers",slug:"/developers/docker",permalink:"/pr-preview/pr-310/fr/developers/docker",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/docker.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Docker Setup"},sidebar:"developers",previous:{title:"Node API",permalink:"/pr-preview/pr-310/fr/developers/node-api"},next:{title:"Rollmint",permalink:"/pr-preview/pr-310/fr/developers/rollmint"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Arabica Setup",id:"arabica-setup",level:2},{value:"Mamaki Setup",id:"mamaki-setup",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-docker-setup"},"\ud83d\udc33 Docker Setup"),(0,a.kt)("p",null,"This page has instructions to run ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," using Docker. If you are looking for instructions to run ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," using a binary, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-310/fr/developers/celestia-node"},"Celestia Node")," page."),(0,a.kt)("p",null,"Using Docker is the easiest way to run ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for most users. Docker is a containerization platform that allows you to run ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," in an isolated environment. This means that you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," on your machine without having to worry about installing and configuring all of the dependencies required to run the node."),(0,a.kt)("p",null,"The easiest way to install Docker is to use the official Docker Desktop installer. You can find the instructions for your operating system ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"here"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," and basic understanding of Docker")),(0,a.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,a.kt)("h2",{id:"arabica-setup"},"Arabica Setup"),(0,a.kt)("p",null,"There is currently no image for the Arabica network.")),(0,a.kt)(l.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,a.kt)("h2",{id:"mamaki-setup"},"Mamaki Setup"),(0,a.kt)("p",null,"First, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"sha")," variable to the commit sha of ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," you need to run. Then, pull the image for the node you selected:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cd $HOME\nsha="89892d8"\ndocker pull ghcr.io/celestiaorg/celestia-node:sha-$sha\n')),(0,a.kt)("p",null,"Lastly, run the image using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run ghcr.io/celestiaorg/celestia-node:sha-$sha\n")))))}m.isMDXComponent=!0}}]);