(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/trent-assignment-2-vue/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1313:function(e,t,n){},"1ef4":function(e,t,n){"use strict";n("40d8")},"3c95":function(e,t,n){},"40d8":function(e,t,n){},"4ce5":function(e,t,n){"use strict";n("7738")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gif"},[n("Nav"),n("router-view")],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"mb-0",attrs:{id:"logo",align:"center"}},[n("b-nav-item",{staticStyle:{"list-style-type":"none"},attrs:{to:"/"}},[n("img",{attrs:{src:"images/nav-logo.png",width:"15%",alt:"navlogo"}})])],1),n("div",{staticClass:"mt-0",attrs:{id:"navlinks"}},[n("b-nav",{attrs:{align:"center"}},[n("b-nav-item",{staticClass:"mx-4",attrs:{to:"/scoreboard"}},[e._v("Leaderboard")])],1)],1)])},o=[],c={},u=c,l=(n("97a3"),n("2877")),d=Object(l["a"])(u,i,o,!1,null,"27a3bc05",null),m=d.exports,h={name:"App",components:{Nav:m}},p=h,b=(n("034f"),Object(l["a"])(p,a,s,!1,null,null,null)),f=b.exports,v=n("8c4f"),g=n("5f5b"),w=n("b1e0"),_=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["input_name"==e.gameState?n("BeginGame",{staticClass:"playerName",on:{beginGameEvent:e.beginGame}}):e._e(),"player_turn"==e.gameState?n("div",{attrs:{id:"game"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"gamepage"},[n("div",{staticClass:"score"},[n("h4",{on:{newPlayerName:e.abc}},[e._v(e._s(e.name123))]),n("h4",[e._v("Points: "+e._s(e.points))])]),n("div",{staticClass:"row d-flex justify-content-center"},[n("table",{staticClass:"table table-borderless mx-auto w-auto mt-2"},[n("tbody",e._l(e.board,(function(t,r){return n("tr",{key:r},e._l(t,(function(t,a){return n("td",{key:a},[n("img",{attrs:{src:e.newTiles[6*a+r]&&e.newTiles[6*a+r].imageUrl,width:"60%"},on:{click:function(t){return e.selectTile(e.newTiles[6*a+r],a,r)}}})])})),0)})),0)])])])])]):e._e()],1)}),y=[],k=(n("99af"),n("b0c0"),n("2909")),x=(n("96cf"),n("1da1")),T=n("bc3a"),O=n.n(T),j=n("d4ec"),P=n("bee2"),S=n("ade3"),C=function(){function e(){Object(j["a"])(this,e),Object(S["a"])(this,"items",[])}return Object(P["a"])(e,[{key:"push",value:function(e){this.items.push(e)}},{key:"pop",value:function(){return this.items.pop()}},{key:"peek",value:function(){return this.items[this.items.length-1]}},{key:"getItems",value:function(){return Object(k["a"])(this.items)}},{key:"getLength",value:function(){return this.items.length}},{key:"clear",value:function(){return this.items=[],this.items}}]),e}(),M=C,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container playerName mt-5"},[n("br"),n("h1",[e._v("come on")]),n("h2",[e._v("and")]),n("h1",[e._v("Match the monsters")]),n("div",[n("label",[e._v("Enter Name: ")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newName,expression:"newName"}],attrs:{type:"text"},domProps:{value:e.newName},on:{input:function(t){t.target.composing||(e.newName=t.target.value)}}}),n("br"),e._v(" "+e._s(e.errorMsg)+" "),n("br"),n("button",{staticClass:"btn btn-warning btn-sm mt-1",on:{click:e.begin}},[e._v(" Start Game ")])])])},L=[],N={data:function(){return{newName:"",errorMsg:""}},methods:{begin:function(){""===this.newName||this.newName.length<3||this.newName.length>13?this.errorMsg="Please enter 3-12 characters!":(this.$emit("beginGameEvent",this.gameState="player_turn",this.newName),this.$emit("newPlayerName",this.newName))}}},E=N,U=(n("4ce5"),Object(l["a"])(E,R,L,!1,null,"65aa7795",null)),$=U.exports,G={components:{BeginGame:$},data:function(){return{tiles:new M,board:[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]],newTiles:[],compareTiles:new M,checkPosition:[],remainingTiles:36,gameState:"",name123:"",points:0}},created:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://mseh-trent-assignment-2.herokuapp.com/tile");case 2:t=e.sent,this.tiles=t.data,this.newTiles=[].concat(Object(k["a"])(this.tiles),Object(k["a"])(this.tiles)),n=this.newTiles.length;while(n)a=Math.floor(Math.random()*n--),r=this.newTiles[n],this.newTiles[n]=this.newTiles[a],this.newTiles[a]=r;this.gameState="input_name";case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{abc:function(e){this.name123=e,console.log(this.name123)},selectTile:function(e,t,n){var r=6*t+n;this.compareTiles.getLength()<2&&(this.checkPosition[0]!=r&&(this.compareTiles.push(e.name),this.checkPosition.push(r)),2==this.compareTiles.getLength()&&this.compareTiles.items[0]!==this.compareTiles.items[1]?(this.compareTiles.clear(),this.checkPosition=[]):2==this.compareTiles.getLength()&&this.compareTiles.items[0]==this.compareTiles.items[1]&&(this.compareTiles.items.pop(),this.compareTiles.items.pop(),this.checkPosition=[],e.imageUrl="",this.remainingTiles-=2,this.points+=20),0===this.remainingTiles&&(this.gameState="end_turn"))},beginGame:function(){this.gameState="player_turn"},insertScore:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("https://mseh-trent-assignment-2.herokuapp.com/scoreboard/create",{username:"mabel",score:this.points});case 2:console.log("added to scoreboard"),console.log(this.points),console.log(this.newPlayerName),this.$router.push("scoreboard");case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},watch:{gameState:function(){this.gameState,"end_turn"===this.gameState&&(alert("Congratulations! Board cleared! Your have scored "+this.points+"points!"),this.insertScore())}}},D=G,I=(n("daea"),Object(l["a"])(D,_,y,!1,null,"4dc472bc",null)),z=I.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("h1",{staticClass:"mt-4"},[e._v("Leaderboard (Top 20)")]),n("b-table-simple",{},[n("b-thead",{staticClass:"header"},[n("b-tr",[n("b-th",[e._v("Rank")]),n("b-th",[e._v("Username")]),n("b-th",[e._v("Score")])],1)],1),n("b-tbody",e._l(e.scoreSort.slice(0,20),(function(t,r){return n("b-tr",{key:t._id},[n("b-td",[e._v(e._s(r+1))]),n("b-td",[e._v(e._s(t.username))]),n("b-td",[e._v(e._s(t.score))])],1)})),1)],1)],1)])},A=[],J=(n("fb6a"),{data:function(){return{scoreboard:[]}},created:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://mseh-trent-assignment-2.herokuapp.com/scoreboard");case 2:t=e.sent,this.scoreboard=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),computed:{scoreSort:function(){var e=this.scoreboard.slice(0);return e.sort((function(e,t){return t.score-e.score})),e}}}),Y=J,q=(n("b321"),Object(l["a"])(Y,B,A,!1,null,"2bddd855",null)),F=q.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("h1",[e._v("Admin Login")]),n("div",[n("b-form-group",{attrs:{id:"formgroup"}},[n("label",[e._v("Username:")]),n("b-form-input",{staticClass:"mb-2",attrs:{type:"text",label:"username"},model:{value:e.vModelUserLogin,callback:function(t){e.vModelUserLogin=t},expression:"vModelUserLogin"}}),n("label",[e._v("Password:")]),n("b-form-input",{attrs:{type:"password",label:"password",size:"sm"},model:{value:e.vModelUserPw,callback:function(t){e.vModelUserPw=t},expression:"vModelUserPw"}}),n("p",{style:{color:"red",fontSize:"15px"}},[e._v(" "+e._s(e.loginError)+" ")]),n("b-button",{attrs:{variant:"warning",size:"sm"},on:{click:e.adminLogin}},[e._v("Login")])],1)],1)])])},K=[],Q=(n("7db0"),{data:function(){return{vModelUserLogin:"",vModelUserPw:"",loginError:""}},methods:{adminLogin:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://mseh-trent-assignment-2.herokuapp.com/users");case 2:t=e.sent,n=t.data,this.error="",r=n.find((function(e){return e.username.toLowerCase()===a.vModelUserLogin.toLowerCase()})),console.log(r),void 0!==r&&(r.password===this.vModelUserPw?(this.loginError="",alert("Logged In"),this.$router.push("manage")):(this.loginError="Incorrect Password",console.log(r.password)));case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}}),V=Q,W=(n("f4c4"),Object(l["a"])(V,H,K,!1,null,"826ddf1c",null)),X=W.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("div",[n("input",{attrs:{type:"text"},domProps:{value:e.userData.username}}),n("input",{attrs:{type:"number"},domProps:{value:e.userData.score}}),n("button",{staticClass:"btn btn-warning btn-sm",on:{click:e.updateRecord}},[e._v("Update")])]),n("h1",{staticClass:"mt-4"},[e._v("Leaderboard (Top 20)")]),n("b-table-simple",{},[n("b-thead",{staticClass:"header"},[n("b-tr",[n("b-th",[e._v("Rank")]),n("b-th",[e._v("Username")]),n("b-th",[e._v("Score")]),n("b-th",[e._v("Edit")]),n("b-th",[e._v("Delete")])],1)],1),n("b-tbody",e._l(e.scoreSort.slice(0,20),(function(t,r){return n("b-tr",{key:t._id},[n("b-td",[e._v(e._s(r+1))]),n("b-td",[e._v(e._s(t.username))]),n("b-td",[e._v(e._s(t.score))]),n("b-td",[n("button",{staticClass:"btn btn-warning btn-sm",attrs:{type:"button"},on:{click:function(n){return e.editRecord(t._id)}}},[e._v(" Edit ")])]),n("b-td",[n("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(n){return e.deleteRecord(t._id,r)}}},[e._v(" Delete ")])])],1)})),1)],1)],1)])},ee=[],te=(n("a434"),{data:function(){return{scoreboard:[],playerScoreboard:{name:"",score:""},userData:{}}},created:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://mseh-trent-assignment-2.herokuapp.com/scoreboard");case 2:t=e.sent,this.scoreboard=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),computed:{scoreSort:function(){var e=this.scoreboard.slice(0);return e.sort((function(e,t){return t.score-e.score})),e}},methods:{deleteRecord:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("https://mseh-trent-assignment-2.herokuapp.com/scoreboard/"+t);case 2:this.scoreboard.splice(n,1),alert("Item deleted");case 4:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),editRecord:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://mseh-trent-assignment-2.herokuapp.com/scoreboard/"+t);case 2:n=e.sent,this.userData=n.data;case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}}),ne=te,re=(n("1ef4"),Object(l["a"])(ne,Z,ee,!1,null,"27f0dac4",null)),ae=re.exports;r["default"].config.productionTip=!1;var se=[{path:"/",component:z},{path:"/scoreboard",component:F},{path:"/login",component:X},{path:"/Manage",component:ae}],ie=new v["a"]({routes:se});r["default"].use(v["a"]),r["default"].use(g["a"]),r["default"].use(w["a"]),new r["default"]({render:function(e){return e(f)},router:ie}).$mount("#app")},7738:function(e,t,n){},"85ec":function(e,t,n){},"97a3":function(e,t,n){"use strict";n("a73d")},a73d:function(e,t,n){},b321:function(e,t,n){"use strict";n("3c95")},d2ae:function(e,t,n){},daea:function(e,t,n){"use strict";n("1313")},f4c4:function(e,t,n){"use strict";n("d2ae")}});
//# sourceMappingURL=app.d10ac88c.js.map