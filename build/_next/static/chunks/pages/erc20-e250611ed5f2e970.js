(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{11047:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/erc20",function(){return t(73172)}])},73172:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var r=t(34051),o=t.n(r),i=t(85893),s=t(67294),a=t(71217),u=t(10894),c=t(59876),l=t(68527),d=t(74931),f=t(79762),h=t(4612),v=t(34651),x=t(26723),m=t(12370),k=t(37934),p=t(20949),w=t(4513),b=t(60288),g=t(47320),j=t(68949);function y(e,n,t,r,o,i,s){try{var a=e[i](s),u=a.value}catch(c){return void t(c)}a.done?n(u):Promise.resolve(u).then(r,o)}function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var C=(0,a.Pi)((function(e){var n=(0,m.o)(),t=n.god,r=n.token,u=n.lang,c=(0,a.fv)((function(){return{keyword:new k.xf,newToken:null,get tokens(){return r.currentTokens?c.newToken?[c.newToken]:c.keyword?r.currentTokens.filter((function(e){return 42==c.keyword.value.length&&e.address.toLowerCase()==c.keyword.value.toLowerCase()||!!e.symbol.toLowerCase().includes(c.keyword.value)})):r.currentTokens:[]},onClose:function(){c.keyword.setValue(""),c.newToken=null,e.onClose()},onSelect:function(n){e.onSelect(n),c.onClose()},addToken:function(e){r.saveToken(e),c.keyword.setValue(""),c.newToken=null}}}));(0,s.useEffect)((function(){(0,j.U5)((function(){return c.keyword.value}),function(){var e,n=(e=o().mark((function e(n){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.currentNetwork.isAddress(n)){e.next=9;break}if(!(r.currentTokens.findIndex((function(e){return e.address==n}))>-1)){e.next=3;break}return e.abrupt("return");case 3:return i=new b.Z({isNew:!0,address:n}),e.next=6,t.currentNetwork.multicall([i.preMulticall({method:"symbol",handler:function(e){return i.symbol=e.toString()}}),i.preMulticall({method:"name",handler:function(e){return i.name=e.toString()}}),i.preMulticall({method:"decimals",handler:function(e){return i.decimals=Number(e.toString())}}),t.currentNetwork.account?i.preMulticall({method:"balanceOf",params:[t.currentNetwork.account],handler:i.balance}):null].filter((function(e){return!!e})));case 6:c.newToken=i,e.next=10;break;case 9:c.newToken=null;case 10:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function s(e){y(i,r,o,s,a,"next",e)}function a(e){y(i,r,o,s,a,"throw",e)}s(void 0)}))});return function(e){return n.apply(this,arguments)}}())}),[]);var d=(0,p.ff)("gray.400","dark.300");return(0,i.jsxs)(w.u_,{isOpen:e.isOpen,onClose:c.onClose,closeOnEsc:!0,closeOnOverlayClick:!0,children:[(0,i.jsx)(w.ZA,{}),(0,i.jsxs)(w.hz,{children:[(0,i.jsx)(w.xB,{children:u.t("select.token")}),(0,i.jsx)(w.ol,{}),(0,i.jsx)(l.xu,{px:4,pb:2,children:(0,i.jsx)(h.II,{placeholder:u.t("select.token.placeholder"),value:c.keyword.value,onChange:function(e){return c.keyword.setValue(e.target.value)}})}),(0,i.jsx)(l.xu,{ml:4,children:(0,i.jsx)(g.Z,{width:"100%",height:600,itemSize:50,style:{paddingRight:"15px"},itemCount:c.tokens.length,renderItem:function(e){var n=e.index,t=e.style,r=c.tokens[n];return(0,i.jsxs)(l.HC,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){T(e,n,t[n])}))}return e}({my:2},t,{cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",onClick:function(){return c.onSelect(r)},children:[(0,i.jsxs)(l.xu,{display:"flex",alignItems:"center",children:[(0,i.jsx)(v.Ee,{borderRadius:"full",boxSize:"24px",src:r.logoURI,mr:"4",fallbackSrc:"/images/token.svg"}),(0,i.jsxs)(l.xu,{children:[(0,i.jsx)(l.xv,{fontWeight:"500",children:r.symbol}),(0,i.jsxs)(l.xv,{fontSize:"xs",color:d,children:[r.name,r.saved&&" \u2022 Added by user"]})]})]}),(0,i.jsxs)(l.xu,{display:"flex",alignItems:"center",children:[(0,i.jsx)(l.xv,{children:r.balance.format}),r.isNew&&(0,i.jsx)(x.zx,{ml:"4",px:"4",size:"sm",onClick:function(e){e.stopPropagation(),c.addToken(r)},children:"Import"})]})]}),n)}})})]})]})})),S=t(44431),O=t.n(S),I=t(32162);var N=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.value=new(O())(0),this.format="",this.loading=!1,this.decimals=18,Object.assign(this,n),(0,j.ky)(this)}var n=e.prototype;return n.setValue=function(e){this.value=e,this.format=I._.number.toPrecisionFloor(new(O())(this.value).dividedBy(Math.pow(10,this.decimals)).toFixed()),this.setLoading(!1)},n.setFormat=function(e){this.format=e,this.value=new(O())(e).multipliedBy(Math.pow(10,this.decimals))},n.setLoading=function(e){this.loading=e},e}(),P=t(5554);function E(e,n,t,r,o,i,s){try{var a=e[i](s),u=a.value}catch(c){return void t(c)}a.done?n(u):Promise.resolve(u).then(r,o)}var _=(0,a.Pi)((function(){var e,n,t,r=(0,m.o)(),p=r.god,w=r.token,b=r.lang,g=(0,a.hN)((function(){return{amount:new N({}),receiverAdderss:new k.xf,curToken:null,isOpenTokenList:new k.mZ,get loading(){var e;return null===(e=g.curToken)||void 0===e?void 0:e.transfer.loading},get state(){if(!p.isConnect)return{valid:!0,msg:b.t("connect.wallet"),connectWallet:!0};var e=g.curToken&&g.amount.value&&g.receiverAdderss.value;return{valid:e,msg:e?b.t("submit"):b.t("invalid.input")}},openTokenList:function(){g.isOpenTokenList.setValue(!0)},onSelectToken:function(e){g.curToken=e},onSubmit:function(){return(e=o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g.state.connectWallet){e.next=2;break}return e.abrupt("return",p.setShowConnecter(!0));case 2:return e.next=4,g.curToken.transfer.call({params:[g.receiverAdderss.value,g.amount.value.toFixed(0,1)]});case 4:return n=e.sent,e.next=7,n.wait();case 7:e.sent.status&&d.ZP.success("Transfer Succeeded");case 9:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function s(e){E(i,r,o,s,a,"next",e)}function a(e){E(i,r,o,s,a,"throw",e)}s(void 0)}))})();var e}}}));return(0,s.useEffect)((function(){p.currentNetwork.account&&w.loadPrivateData()}),[p.updateTicker.value]),(0,s.useEffect)((function(){P.Y.on("chain.switch",(function(){g.curToken=null}))}),[]),(0,i.jsxs)(l.W2,{maxW:"md",children:[(0,i.jsx)("form",{children:(0,i.jsxs)(f.NI,{mt:20,children:[(0,i.jsxs)(l.xu,{border:"1px solid",borderRadius:"md",borderColor:"inherit",children:[(0,i.jsxs)(l.kC,{justify:"space-between",p:2,children:[(0,i.jsx)(l.xv,{fontSize:"sm",children:b.t("token.amount")}),(0,i.jsx)(l.xv,{fontSize:"sm",children:g.curToken?"Balance ".concat(g.curToken.balance.format," "):"..."})]}),(0,i.jsxs)(h.BZ,{children:[(0,i.jsx)(h.II,{border:"none",placeholder:"0.0",type:"number",value:g.amount.format,onChange:function(e){return g.amount.setFormat(e.target.value)}}),(0,i.jsx)(h.xH,{onClick:g.openTokenList,width:"4rem",cursor:"pointer",flexDir:"column",children:(0,i.jsxs)(l.kC,{alignItems:"center",pr:2,w:"100%",children:[(0,i.jsx)(v.Ee,{borderRadius:"full",boxSize:"24px",src:null===(e=g.curToken)||void 0===e?void 0:e.logoURI,fallbackSrc:"/images/token.svg"}),(0,i.jsx)(u.JO,{as:c.v4,ml:1})]})})]})]}),(0,i.jsxs)(l.xu,{border:"1px solid",borderRadius:"md",borderColor:"inherit",mt:4,children:[(0,i.jsx)(l.kC,{justify:"space-between",p:2,children:(0,i.jsx)(l.xv,{fontSize:"sm",children:b.t("receiver.address")})}),(0,i.jsx)(h.BZ,{children:(0,i.jsx)(h.II,{border:"none",placeholder:p.currentNetwork.info.token.tokenExample,value:g.receiverAdderss.value,onChange:function(e){return g.receiverAdderss.setValue(e.target.value)}})})]}),(0,i.jsx)(l.M5,{children:(0,i.jsx)(x.zx,{type:"button",mt:"4",disabled:!g.state.valid||(null===(n=g.loading)||void 0===n?void 0:n.value),onClick:g.onSubmit,isLoading:null===(t=g.loading)||void 0===t?void 0:t.value,children:g.state.msg})})]})}),(0,i.jsx)(C,{isOpen:g.isOpenTokenList.value,onClose:function(){return g.isOpenTokenList.setValue(!1)},onSelect:g.onSelectToken})]})})),L=_}},function(e){e.O(0,[309,774,888,179],(function(){return n=11047,e(e.s=n);var n}));var n=e.O();_N_E=n}]);