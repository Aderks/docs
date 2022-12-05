"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1852],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||s;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3416:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(3117),o=(n(7294),n(3905));const s={sidebar_label:"Consensus Full Node"},r="Setting up a Celestia Consensus Full Node",l={unversionedId:"nodes/consensus-full-node",id:"nodes/consensus-full-node",title:"Setting up a Celestia Consensus Full Node",description:"Consensus Full Nodes allow you to sync blockchain history in the Celestia",source:"@site/docs/nodes/consensus-full-node.md",sourceDirName:"nodes",slug:"/nodes/consensus-full-node",permalink:"/nodes/consensus-full-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/consensus-full-node.md",tags:[],version:"current",frontMatter:{sidebar_label:"Consensus Full Node"},sidebar:"nodes",previous:{title:"Validator Node",permalink:"/nodes/validator-node"},next:{title:"Resources",permalink:"/category/resources"}},i={},p=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your consensus full node",id:"setting-up-your-consensus-full-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Deploying the celestia-app",id:"deploying-the-celestia-app",level:2},{value:"Install celestia-app",id:"install-celestia-app",level:3},{value:"Setup the P2P networks",id:"setup-the-p2p-networks",level:3},{value:"Configure pruning",id:"configure-pruning",level:3},{value:"Reset network",id:"reset-network",level:3},{value:"Optional: quick-sync with snapshot",id:"optional-quick-sync-with-snapshot",level:3},{value:"Start the celestia-app",id:"start-the-celestia-app",level:3},{value:"Optional: configure for RPC endpoint",id:"optional-configure-for-rpc-endpoint",level:3},{value:"Start the celestia-app with SystemD",id:"start-the-celestia-app-with-systemd",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-a-celestia-consensus-full-node"},"Setting up a Celestia Consensus Full Node"),(0,o.kt)("p",null,"Consensus Full Nodes allow you to sync blockchain history in the Celestia\nConsensus Layer."),(0,o.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,o.kt)("p",null,"The following hardware minimum requirements are recommended for running the\nConsensus Full Node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,o.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,o.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,o.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,o.kt)("h2",{id:"setting-up-your-consensus-full-node"},"Setting up your consensus full node"),(0,o.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64\ninstance machine."),(0,o.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,o.kt)("p",null,"Follow the instructions on installing the dependencies ",(0,o.kt)("a",{parentName:"p",href:"/nodes/environment"},"here"),"."),(0,o.kt)("h2",{id:"deploying-the-celestia-app"},"Deploying the celestia-app"),(0,o.kt)("p",null,"This section describes part 1 of Celestia consensus full node setup:\nrunning a Celestia App daemon with an internal Celestia Core node."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Make sure you have at least 100+ Gb of free space to safely install + run\nthe consensus full node.  ")),(0,o.kt)("h3",{id:"install-celestia-app"},"Install celestia-app"),(0,o.kt)("p",null,"Follow the tutorial on installing Celestia App ",(0,o.kt)("a",{parentName:"p",href:"/nodes/celestia-app"},"here"),"."),(0,o.kt)("h3",{id:"setup-the-p2p-networks"},"Setup the P2P networks"),(0,o.kt)("p",null,"Now we will setup the P2P Networks by cloning the networks repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf networks\ngit clone https://github.com/celestiaorg/networks.git\n")),(0,o.kt)("p",null,'To initialize the network pick a "node-name" that describes your\nnode. The --chain-id parameter we are using here is ',(0,o.kt)("inlineCode",{parentName:"p"},"mamaki"),". Keep in\nmind that this might change if a new testnet is deployed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'celestia-appd init "node-name" --chain-id mamaki\n')),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file. For mamaki we are using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cp $HOME/networks/mamaki/genesis.json $HOME/.celestia-app/config\n")),(0,o.kt)("p",null,"Set seeds and peers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'BOOTSTRAP_PEERS=$(curl -sL https://raw.githubusercontent.com/celestiaorg/networks/master/mamaki/bootstrap-peers.txt | tr -d \'\\n\')\necho $BOOTSTRAP_PEERS\nsed -i.bak -e "s/^bootstrap-peers *=.*/bootstrap-peers = \\"$BOOTSTRAP_PEERS\\"/" $HOME/.celestia-app/config/config.toml\n')),(0,o.kt)("p",null,"Note: You can find more peers ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/networks/blob/master/mamaki/peers.txt"},"here"),"."),(0,o.kt)("h3",{id:"configure-pruning"},"Configure pruning"),(0,o.kt)("p",null,"For lower disk space usage we recommend setting up pruning using the\nconfigurations below. You can change this to your own pruning configurations\nif you want:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'PRUNING="custom"\nPRUNING_KEEP_RECENT="100"\nPRUNING_INTERVAL="10"\n\nsed -i -e "s/^pruning *=.*/pruning = \\"$PRUNING\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\\n\\"$PRUNING_KEEP_RECENT\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\\n\\"$PRUNING_INTERVAL\\"/" $HOME/.celestia-app/config/app.toml\n')),(0,o.kt)("h3",{id:"reset-network"},"Reset network"),(0,o.kt)("p",null,"This will delete all data folders so we can start fresh:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tendermint unsafe-reset-all --home $HOME/.celestia-app\n")),(0,o.kt)("h3",{id:"optional-quick-sync-with-snapshot"},"Optional: quick-sync with snapshot"),(0,o.kt)("p",null,"Syncing from Genesis can take a long time, depending on your hardware. Using\nthis method you can synchronize your Celestia node very quickly by downloading\na recent snapshot of the blockchain. If you would like to sync from the Genesis,\nthen you can skip this part."),(0,o.kt)("p",null,"Run the following command to quick-sync from a snapshot for ",(0,o.kt)("inlineCode",{parentName:"p"},"mamaki"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd $HOME\nrm -rf ~/.celestia-app/data\nmkdir -p ~/.celestia-app/data\nSNAP_NAME=$(curl -s https://snaps.qubelabs.io/celestia/ | \\\n    egrep -o ">mamaki.*tar" | tr -d ">")\nwget -O - https://snaps.qubelabs.io/celestia/${SNAP_NAME} | tar xf - \\\n    -C ~/.celestia-app/data/\n')),(0,o.kt)("h3",{id:"start-the-celestia-app"},"Start the celestia-app"),(0,o.kt)("p",null,"In order to start your consensus full node, run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd start\n")),(0,o.kt)("p",null,"This will let you sync the Celestia blockchain history."),(0,o.kt)("h3",{id:"optional-configure-for-rpc-endpoint"},"Optional: configure for RPC endpoint"),(0,o.kt)("p",null,"You can configure your Consensus Full Node to be a public RPC endpoint\nand listen to any connections from Data Availability Nodes in order to\nserve requests for the Data Availability API ",(0,o.kt)("a",{parentName:"p",href:"/developers/node-tutorial"},"here"),"."),(0,o.kt)("p",null,"Note that you would need to ensure port 9090 is open for this."),(0,o.kt)("p",null,"Run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'EXTERNAL_ADDRESS=$(wget -qO- eth0.me)\nsed -i.bak -e "s/^external-address = \\"\\"/external-address = \\"$EXTERNAL_ADDRESS:26656\\"/" $HOME/.celestia-app/config/config.toml\nsed -i \'s#"tcp://127.0.0.1:26657"#"tcp://0.0.0.0:26657"#g\' ~/.celestia-app/config/config.toml\n')),(0,o.kt)("p",null,"Restart ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-appd")," in the previous step to load those configs."),(0,o.kt)("h3",{id:"start-the-celestia-app-with-systemd"},"Start the celestia-app with SystemD"),(0,o.kt)("p",null,"Follow the tutorial on setting up Celestia-App as a background process\nwith SystemD ",(0,o.kt)("a",{parentName:"p",href:"./systemd"},"here"),"."))}c.isMDXComponent=!0}}]);