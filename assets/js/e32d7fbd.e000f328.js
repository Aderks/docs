"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5403],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(n),h=l,g=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7289:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return c}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),o=["components"],r={sidebar_label:"Light Node"},s="Setting up a Celestia Light Node",d={unversionedId:"nodes/light-node",id:"nodes/light-node",title:"Setting up a Celestia Light Node",description:"This tutorial will guide you through setting up a Celestia light node, which",source:"@site/docs/nodes/light-node.md",sourceDirName:"nodes",slug:"/nodes/light-node",permalink:"/nodes/light-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/light-node.md",tags:[],version:"current",frontMatter:{sidebar_label:"Light Node"},sidebar:"nodes",previous:{title:"Full Storage Node",permalink:"/nodes/full-storage-node"},next:{title:"Participate",permalink:"/category/participate"}},u={},c=[{value:"Overview of light nodes",id:"overview-of-light-nodes",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your light node",id:"setting-up-your-light-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Install Golang",id:"install-golang",level:3},{value:"Install Celestia node",id:"install-celestia-node",level:3},{value:"Initialize the light node",id:"initialize-the-light-node",level:2},{value:"Start the light node",id:"start-the-light-node",level:3},{value:"Keys and wallets",id:"keys-and-wallets",level:3},{value:"Optional: run the light node with a custom key",id:"optional-run-the-light-node-with-a-custom-key",level:3},{value:"Optional: start light node with SystemD",id:"optional-start-light-node-with-systemd",level:3},{value:"Data availability sampling (DAS)",id:"data-availability-sampling-das",level:2}],p={toc:c};function h(e){var t=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-a-celestia-light-node"},"Setting up a Celestia Light Node"),(0,i.kt)("p",null,"This tutorial will guide you through setting up a Celestia light node, which\nwill allow you to perform data availability sampling on the data\navailability (DA) network."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To view a video tutorial for setting up a Celestia light node, click ",(0,i.kt)("a",{parentName:"p",href:"/developers/light-node-video"},"here"))),(0,i.kt)("h2",{id:"overview-of-light-nodes"},"Overview of light nodes"),(0,i.kt)("p",null,"Light nodes ensure data availability. This is the most common\nway to interact with the Celestia network."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"light-node",src:n(8236).Z,width:"1058",height:"245"})),(0,i.kt)("p",null,"Light nodes have the following behavior:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"They listen for ExtendedHeaders, i.e. wrapped \u201craw\u201d headers, that notify\nCelestia nodes of new block headers and relevant DA metadata."),(0,i.kt)("li",{parentName:"ol"},"They perform data availability sampling (DAS) on the received headers")),(0,i.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,i.kt)("p",null,"The following minimum hardware requirements are recommended for running\na light node:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Memory: 2 GB RAM"),(0,i.kt)("li",{parentName:"ul"},"CPU: Single Core"),(0,i.kt)("li",{parentName:"ul"},"Disk: 5 GB SSD Storage"),(0,i.kt)("li",{parentName:"ul"},"Bandwidth: 56 Kbps for Download/56 Kbps for Upload")),(0,i.kt)("h2",{id:"setting-up-your-light-node"},"Setting up your light node"),(0,i.kt)("p",null,"This tutorial was performed on an Ubuntu Linux 20.04 (LTS) x64 instance machine."),(0,i.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,i.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# If you are using the APT package manager\nsudo apt update && sudo apt upgrade -y\n\n# If you are using the YUM package manager\nsudo yum update\n")),(0,i.kt)("p",null,"These are essential packages that are necessary to execute many tasks like downloading\nfiles, compiling, and monitoring the node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# If you are using the APT package manager\nsudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential \\\ngit make ncdu -y\n\n# If you are using the YUM package manager\nsudo yum install curl tar wget clang pkg-config libssl-dev jq build-essential \\\ngit make ncdu -y\n")),(0,i.kt)("h3",{id:"install-golang"},"Install Golang"),(0,i.kt)("p",null,"Celestia-app and celestia-node are written in ",(0,i.kt)("a",{parentName:"p",href:"https://go.dev/"},"Golang")," so we must\ninstall Golang to build and run them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n')),(0,i.kt)("p",null,"Now we need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n')),(0,i.kt)("p",null,"To check if Go was installed correctly run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,i.kt)("p",null,"The output should be the version installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 linux/amd64\n")),(0,i.kt)("h3",{id:"install-celestia-node"},"Install Celestia node"),(0,i.kt)("p",null,"Install the celestia-node binary by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.3.0-rc2\nmake install\n")),(0,i.kt)("p",null,"Verify that the binary is working and check the version with the\ncelestia version command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ celestia version\nSemantic version: v0.3.0-rc2\nCommit: 89892d8b96660e334741987d84546c36f0996fbe\n")),(0,i.kt)("h2",{id:"initialize-the-light-node"},"Initialize the light node"),(0,i.kt)("p",null,"Run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init\n")),(0,i.kt)("p",null,"You should see output like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-output"},'$ celestia light init\n2022-07-18T02:22:09.449Z INFO node node/init.go:26 Initializing Light Node Store over \'/home/ec2-user/.celestia-light\'\n2022-07-18T02:22:09.449Z INFO node node/init.go:62 Saving config {"path": "/home/ec2-user/.celestia-light/config.toml"}\n2022-07-18T02:22:09.449Z INFO node node/init.go:67 Node Store initialized\n')),(0,i.kt)("h3",{id:"start-the-light-node"},"Start the light node"),(0,i.kt)("p",null,"Start the light node with a connection to a validator node's gRPC endpoint (which\nis usually exposed on port 9090):"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: In order for access to the ability to get/submit state-related information,\nsuch as the ability to submit PayForData transactions, or query for the node's\naccount balance, a gRPC endpoint of a validator (core) node must be passed as\ndirected below.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.grpc http://<ip>:9090\n")),(0,i.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,i.kt)("a",{parentName:"p",href:"/nodes/mamaki-testnet#rpc-endpoints"},"here")),(0,i.kt)("p",null,"For example, your command might look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.grpc https://rpc-mamaki.pops.one:9090\n")),(0,i.kt)("h3",{id:"keys-and-wallets"},"Keys and wallets"),(0,i.kt)("p",null,"You can create your key for your node by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"make cel-key\n")),(0,i.kt)("p",null,"Once you start the Light Node, a wallet key will be generated for you.\nYou will need to fund that address with Mamaki Testnet tokens to pay for\nPayForData transactions."),(0,i.kt)("p",null,"You can find the address by running the following command in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type light --keyring-backend test\n")),(0,i.kt)("p",null,"Mamaki Testnet tokens can be requested ",(0,i.kt)("a",{parentName:"p",href:"/nodes/mamaki-testnet#mamaki-testnet-faucet"},"here"),"."),(0,i.kt)("h3",{id:"optional-run-the-light-node-with-a-custom-key"},"Optional: run the light node with a custom key"),(0,i.kt)("p",null,"In order to run a light node using a custom key:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The custom key must exist inside the celestia light node directory at the\ncorrect path (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.celestia-light/keys/keyring-test"),")"),(0,i.kt)("li",{parentName:"ol"},"The name of the custom key must be passed upon ",(0,i.kt)("inlineCode",{parentName:"li"},"start"),", like so:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.grpc http://<ip>:9090 --keyring.accname <name_of_custom_key>\n")),(0,i.kt)("h3",{id:"optional-start-light-node-with-systemd"},"Optional: start light node with SystemD"),(0,i.kt)("p",null,"Follow the tutorial on setting up the light node as a background\nprocess with SystemD ",(0,i.kt)("a",{parentName:"p",href:"/nodes/systemd#celestia-light-node"},"here"),"."),(0,i.kt)("h2",{id:"data-availability-sampling-das"},"Data availability sampling (DAS)"),(0,i.kt)("p",null,"With your light node running, you can check out this tutorial on\nsubmitting ",(0,i.kt)("inlineCode",{parentName:"p"},"PayForData")," transactions ",(0,i.kt)("a",{parentName:"p",href:"/developers/node-tutorial"},"here"),"."))}h.isMDXComponent=!0},8236:function(e,t,n){t.Z=n.p+"assets/images/LightNodes-6e065ce02c37e36a01707b9b1edd36b3.png"}}]);