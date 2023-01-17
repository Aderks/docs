"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2516],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5825:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return p}});var a=n(3117),o=(n(7294),n(3905));const r={sidebar_label:"Validator Node"},l="Setting up a Celestia Validator Node",i={unversionedId:"nodes/validator-node",id:"nodes/validator-node",title:"Setting up a Celestia Validator Node",description:"Validator nodes allow you to participate in consensus in the Celestia network.",source:"@site/docs/nodes/validator-node.md",sourceDirName:"nodes",slug:"/nodes/validator-node",permalink:"/pr-preview/pr-420/fr/nodes/validator-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/validator-node.md",tags:[],version:"current",frontMatter:{sidebar_label:"Validator Node"},sidebar:"nodes",previous:{title:"Consensus",permalink:"/pr-preview/pr-420/fr/category/consensus"},next:{title:"Consensus Full Node",permalink:"/pr-preview/pr-420/fr/nodes/consensus-full-node"}},s={},p=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your validator node",id:"setting-up-your-validator-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Deploying the celestia-app",id:"deploying-the-celestia-app",level:2},{value:"Install celestia-app",id:"install-celestia-app",level:3},{value:"Setup the P2P networks",id:"setup-the-p2p-networks",level:3},{value:"Configure pruning",id:"configure-pruning",level:3},{value:"Optional: quick-sync with snapshot",id:"optional-quick-sync-with-snapshot",level:3},{value:"Start the celestia-app with SystemD",id:"start-the-celestia-app-with-systemd",level:3},{value:"Wallet",id:"wallet",level:3},{value:"Delegate stake to a validator",id:"delegate-stake-to-a-validator",level:3},{value:"Deploy the celestia-node",id:"deploy-the-celestia-node",level:2},{value:"Install celestia-node",id:"install-celestia-node",level:3},{value:"Initialize the bridge node",id:"initialize-the-bridge-node",level:3},{value:"Run the bridge node",id:"run-the-bridge-node",level:3},{value:"Optional: start the bridge node with SystemD",id:"optional-start-the-bridge-node-with-systemd",level:3},{value:"Setup QGB Keys",id:"setup-qgb-keys",level:3},{value:"Run a validator node",id:"run-a-validator-node",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-a-celestia-validator-node"},"Setting up a Celestia Validator Node"),(0,o.kt)("p",null,"Validator nodes allow you to participate in consensus in the Celestia network."),(0,o.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,o.kt)("p",null,"The following hardware minimum requirements are recommended for running the\nvalidator node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,o.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,o.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,o.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,o.kt)("h2",{id:"setting-up-your-validator-node"},"Setting up your validator node"),(0,o.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64\ninstance machine."),(0,o.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,o.kt)("p",null,"Follow the instructions on installing the dependencies ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-420/fr/nodes/environment"},"here"),"."),(0,o.kt)("h2",{id:"deploying-the-celestia-app"},"Deploying the celestia-app"),(0,o.kt)("p",null,"This section describes part 1 of Celestia Validator Node setup:\nrunning a Celestia App daemon with an internal Celestia Core node."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Make sure you have at least 100+ Gb of free space to safely install+run\nthe Validator Node.")),(0,o.kt)("h3",{id:"install-celestia-app"},"Install celestia-app"),(0,o.kt)("p",null,"Follow the tutorial on installing Celestia App ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-420/fr/nodes/celestia-app"},"here"),"."),(0,o.kt)("h3",{id:"setup-the-p2p-networks"},"Setup the P2P networks"),(0,o.kt)("p",null,"Now we will setup the P2P Networks by cloning the networks repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf networks\ngit clone https://github.com/celestiaorg/networks.git\n")),(0,o.kt)("p",null,'To initialize the network pick a "node-name" that describes your\nnode. The --chain-id parameter we are using here is ',(0,o.kt)("inlineCode",{parentName:"p"},"mocha"),". Keep in\nmind that this might change if a new testnet is deployed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'celestia-appd init "node-name" --chain-id mocha\n')),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file. For mocha we are using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cp $HOME/networks/mocha/genesis.json $HOME/.celestia-app/config\n")),(0,o.kt)("p",null,"Set seeds and peers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'SEEDS="some seeds"\nPEERS="some peers"\nsed -i -e \'s|^seeds *=.*|seeds = "\'$SEEDS\'"|; s|^persistent_peers *=.*|persistent_peers = "\'$PEERS\'"|\' $HOME/.celestia-app/config/config.toml\nsed -i -e "s/^seed_mode *=.*/seed_mode = \\"$SEED_MODE\\"/" $HOME/.celestia-app/config/config.toml\n')),(0,o.kt)("p",null,"Note: You can find more peers ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/networks/blob/master/mocha/peers.txt"},"here"),"."),(0,o.kt)("h3",{id:"configure-pruning"},"Configure pruning"),(0,o.kt)("p",null,"For lower disk space usage we recommend setting up pruning using the\nconfigurations below. You can change this to your own pruning configurations\nif you want:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'PRUNING="custom"\nPRUNING_KEEP_RECENT="100"\nPRUNING_INTERVAL="10"\n\nsed -i -e "s/^pruning *=.*/pruning = \\"$PRUNING\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\\n\\"$PRUNING_KEEP_RECENT\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\\n\\"$PRUNING_INTERVAL\\"/" $HOME/.celestia-app/config/app.toml\n')),(0,o.kt)("h3",{id:"optional-quick-sync-with-snapshot"},"Optional: quick-sync with snapshot"),(0,o.kt)("p",null,"Syncing from Genesis can take a long time, depending on your hardware. Using\nthis method you can synchronize your Celestia node very quickly by downloading\na recent snapshot of the blockchain. If you would like to sync from the Genesis,\nthen you can skip this part."),(0,o.kt)("p",null,"Run the following command to quick-sync from a snapshot for ",(0,o.kt)("inlineCode",{parentName:"p"},"mocha"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd $HOME\nrm -rf ~/.celestia-app/data\nmkdir -p ~/.celestia-app/data\nSNAP_NAME=$(curl -s https://snaps.qubelabs.io/celestia/ | \\\n    egrep -o ">mocha.*tar" | tr -d ">")\nwget -O - https://snaps.qubelabs.io/celestia/${SNAP_NAME} | tar xf - \\\n    -C ~/.celestia-app/data/\n')),(0,o.kt)("h3",{id:"start-the-celestia-app-with-systemd"},"Start the celestia-app with SystemD"),(0,o.kt)("p",null,"Follow the tutorial on setting up Celestia-App as a background process\nwith SystemD ",(0,o.kt)("a",{parentName:"p",href:"./systemd"},"here"),"."),(0,o.kt)("h3",{id:"wallet"},"Wallet"),(0,o.kt)("p",null,"Follow the tutorial on creating a wallet ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-420/fr/developers/celestia-app-wallet"},"here"),"."),(0,o.kt)("h3",{id:"delegate-stake-to-a-validator"},"Delegate stake to a validator"),(0,o.kt)("p",null,"Create an environment variable for the address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"VALIDATOR_WALLET=<validator-address>\n")),(0,o.kt)("p",null,"If you want to delegate more stake to any validator, including your own you\nwill need the ",(0,o.kt)("inlineCode",{parentName:"p"},"celesvaloper")," address of the validator in question. You can\neither check it using the block explorer mentioned above or you can run the\ncommand below to get the ",(0,o.kt)("inlineCode",{parentName:"p"},"celesvaloper")," of your local validator wallet in\ncase you want to delegate more to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys show $VALIDATOR_WALLET --bech val -a\n")),(0,o.kt)("p",null,"After entering the wallet passphrase you should see a similar output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Enter keyring passphrase:\ncelesvaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u43cv6hd\n")),(0,o.kt)("p",null,"To delegate tokens to the ",(0,o.kt)("inlineCode",{parentName:"p"},"celestiavaloper")," validator, as an\nexample you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx staking delegate \\\n    celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p 1000000utia \\\n    --from=$VALIDATOR_WALLET --chain-id=mocha\n")),(0,o.kt)("p",null,"If successful, you should see a similar output as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'code: 0\ncodespace: ""\ndata: ""\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: <tx-hash>\n')),(0,o.kt)("p",null,"You can check if the TX hash went through using the block explorer by\ninputting the ",(0,o.kt)("inlineCode",{parentName:"p"},"txhash")," ID that was returned."),(0,o.kt)("h2",{id:"deploy-the-celestia-node"},"Deploy the celestia-node"),(0,o.kt)("p",null,"This section describes part 2 of Celestia Validator Node setup: running a\nCelestia Bridge Node daemon."),(0,o.kt)("h3",{id:"install-celestia-node"},"Install celestia-node"),(0,o.kt)("p",null,"You can follow the tutorial for installing Celestia Node ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-420/fr/nodes/celestia-node"},"here")),(0,o.kt)("h3",{id:"initialize-the-bridge-node"},"Initialize the bridge node"),(0,o.kt)("p",null,"Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.ip <ip-address> --core.grpc.port <port>\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,o.kt)("inlineCode",{parentName:"p"},"--core.ip")," gRPC port defaults to 9090, so if you do not specify\nit in the command line, it will default to that port. You can add the port\nafter the IP address or use the  ",(0,o.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," flag to specify another\nport if you prefer.")),(0,o.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,o.kt)("a",{parentName:"p",href:"./mocha-testnet"},"here")),(0,o.kt)("h3",{id:"run-the-bridge-node"},"Run the bridge node"),(0,o.kt)("p",null,"Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start\n")),(0,o.kt)("h3",{id:"optional-start-the-bridge-node-with-systemd"},"Optional: start the bridge node with SystemD"),(0,o.kt)("p",null,"Follow the tutorial on setting up the bridge node as a background process with\nSystemD ",(0,o.kt)("a",{parentName:"p",href:"./systemd"},"here"),"."),(0,o.kt)("p",null,"You have successfully set up a bridge node that is syncing with the network."),(0,o.kt)("h3",{id:"setup-qgb-keys"},"Setup QGB Keys"),(0,o.kt)("p",null,"This step helps get you prepared for when the Quantum Gravity Bridge\nis ready to be deployed. You would still need to go through this step\nbefore running a validator to configure 2 extra keys."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--evm-address"),": This flag should contain a ",(0,o.kt)("inlineCode",{parentName:"li"},"0x")," EVM address. Here,\nyou can add any Ethereum-based address to this flag. You can also modify\nit later if you decide to switch addresses."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--orchestrator-address"),": This flag should contain a newly-generated\n",(0,o.kt)("inlineCode",{parentName:"li"},"celestia1")," Celestia address. Validators certainly can use their existing\nCelestia addresses here but it is recommended to create a new one.")),(0,o.kt)("p",null,"You can set both the values to the above flags as\nenvironment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"EVM_ADDRESS=<EVM_ADDRESS>\nORCHESTRATOR_ADDRESS=<CELESTIA_ADDRESS>\n")),(0,o.kt)("p",null,"Remember to add the values for your addresses in the above\nenvironment variables before setting them."),(0,o.kt)("h2",{id:"run-a-validator-node"},"Run a validator node"),(0,o.kt)("p",null,"After completing all the necessary steps, you are now ready to run a validator!\nIn order to create your validator on-chain, follow the instructions below.\nKeep in mind that these steps are necessary ONLY if you want to participate\nin the consensus."),(0,o.kt)("p",null,"Pick a ",(0,o.kt)("inlineCode",{parentName:"p"},"moniker")," name of your choice! This is the validator name that will show\nup on public dashboards and explorers. ",(0,o.kt)("inlineCode",{parentName:"p"},"VALIDATOR_WALLET")," must be the same you\ndefined previously. Parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"--min-self-delegation=1000000")," defines the\namount of tokens that are self delegated from your validator wallet."),(0,o.kt)("p",null,"Now, connect to the network of your choice."),(0,o.kt)("p",null,"You have the following option of connecting to list of networks shown below:"),(0,o.kt)("p",null,"Continuing the Validator tutorial, here are the steps to connect your\nvalidator to Mocha:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'MONIKER="your_moniker"\nVALIDATOR_WALLET="validator"\n\ncelestia-appd tx staking create-validator \\\n    --amount=1000000utia \\\n    --pubkey=$(celestia-appd tendermint show-validator) \\\n    --moniker=$MONIKER \\\n    --chain-id=mocha \\\n    --commission-rate=0.1 \\\n    --commission-max-rate=0.2 \\\n    --commission-max-change-rate=0.01 \\\n    --min-self-delegation=1000000 \\\n    --from=$VALIDATOR_WALLET \\\n    --evm-address=$EVM_ADDRESS \\\n    --orchestrator-address=$ORCHESTRATOR_ADDRESS \\\n    --keyring-backend=test\n')),(0,o.kt)("p",null,"You will be prompted to confirm the transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"confirm transaction before signing and broadcasting [y/N]: y\n")),(0,o.kt)("p",null,"Inputting ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," should provide an output similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'code: 0\ncodespace: ""\ndata: ""\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: <tx-hash>\n')),(0,o.kt)("p",null,"You should now be able to see your validator from a block explorer like ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.explorers.guru/"},"here")))}u.isMDXComponent=!0}}]);