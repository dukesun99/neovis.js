!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@babel/runtime-corejs3/helpers/defineProperty"),require("neo4j-driver"),require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),require("@babel/runtime-corejs3/core-js-stable/object/keys"),require("@babel/runtime-corejs3/core-js/get-iterator"),require("@babel/runtime-corejs3/regenerator"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"),require("@babel/runtime-corejs3/core-js-stable/object/values"),require("@babel/runtime-corejs3/helpers/typeof"),require("@babel/runtime-corejs3/core-js-stable/array/is-array"),require("@babel/runtime-corejs3/core-js-stable/object/define-property"),require("@babel/runtime-corejs3/core-js-stable/object/define-properties"),require("@babel/runtime-corejs3/core-js-stable/instance/filter"),require("@babel/runtime-corejs3/helpers/classCallCheck"),require("@babel/runtime-corejs3/helpers/createClass"),require("@babel/runtime-corejs3/helpers/asyncToGenerator"),require("vis-network/dist/vis-network.min"),require("@babel/runtime-corejs3/core-js-stable/promise"),require("@babel/runtime-corejs3/core-js-stable/set-timeout"),require("@babel/runtime-corejs3/core-js-stable/instance/map"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"),require("@babel/runtime-corejs3/core-js-stable/symbol"),require("vis-network/dist/vis-network.min.css")):"function"==typeof define&&define.amd?define(["@babel/runtime-corejs3/helpers/defineProperty","neo4j-driver","@babel/runtime-corejs3/core-js-stable/instance/for-each","@babel/runtime-corejs3/core-js-stable/object/keys","@babel/runtime-corejs3/core-js/get-iterator","@babel/runtime-corejs3/regenerator","@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors","@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor","@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols","@babel/runtime-corejs3/core-js-stable/object/values","@babel/runtime-corejs3/helpers/typeof","@babel/runtime-corejs3/core-js-stable/array/is-array","@babel/runtime-corejs3/core-js-stable/object/define-property","@babel/runtime-corejs3/core-js-stable/object/define-properties","@babel/runtime-corejs3/core-js-stable/instance/filter","@babel/runtime-corejs3/helpers/classCallCheck","@babel/runtime-corejs3/helpers/createClass","@babel/runtime-corejs3/helpers/asyncToGenerator","vis-network/dist/vis-network.min","@babel/runtime-corejs3/core-js-stable/promise","@babel/runtime-corejs3/core-js-stable/set-timeout","@babel/runtime-corejs3/core-js-stable/instance/map","@babel/runtime-corejs3/core-js-stable/instance/concat","@babel/runtime-corejs3/core-js-stable/symbol","vis-network/dist/vis-network.min.css"],r):"object"==typeof exports?exports.NeoVis=r(require("@babel/runtime-corejs3/helpers/defineProperty"),require("neo4j-driver"),require("@babel/runtime-corejs3/core-js-stable/instance/for-each"),require("@babel/runtime-corejs3/core-js-stable/object/keys"),require("@babel/runtime-corejs3/core-js/get-iterator"),require("@babel/runtime-corejs3/regenerator"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"),require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"),require("@babel/runtime-corejs3/core-js-stable/object/values"),require("@babel/runtime-corejs3/helpers/typeof"),require("@babel/runtime-corejs3/core-js-stable/array/is-array"),require("@babel/runtime-corejs3/core-js-stable/object/define-property"),require("@babel/runtime-corejs3/core-js-stable/object/define-properties"),require("@babel/runtime-corejs3/core-js-stable/instance/filter"),require("@babel/runtime-corejs3/helpers/classCallCheck"),require("@babel/runtime-corejs3/helpers/createClass"),require("@babel/runtime-corejs3/helpers/asyncToGenerator"),require("vis-network/dist/vis-network.min"),require("@babel/runtime-corejs3/core-js-stable/promise"),require("@babel/runtime-corejs3/core-js-stable/set-timeout"),require("@babel/runtime-corejs3/core-js-stable/instance/map"),require("@babel/runtime-corejs3/core-js-stable/instance/concat"),require("@babel/runtime-corejs3/core-js-stable/symbol"),require("vis-network/dist/vis-network.min.css")):e.NeoVis=r(e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0],e[void 0])}(window,(function(e,r,t,n,o,s,i,a,c,l,u,b,d,p,f,h,v,j,g,m,y,_,k,x,w){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=25)}([function(r,t){r.exports=e},function(e,t){e.exports=r},function(e,r){e.exports=t},function(e,r){e.exports=n},function(e,r){e.exports=o},function(e,r){e.exports=s},function(e,r){e.exports=i},function(e,r){e.exports=a},function(e,r){e.exports=c},function(e,r){e.exports=l},function(e,r){e.exports=u},function(e,r){e.exports=b},function(e,r){e.exports=d},function(e,r){e.exports=p},function(e,r){e.exports=f},function(e,r){e.exports=h},function(e,r){e.exports=v},function(e,r){e.exports=j},function(e,r){e.exports=g},function(e,r){e.exports=m},function(e,r){e.exports=y},function(e,r){e.exports=_},function(e,r){e.exports=k},function(e,r){e.exports=x},function(e,r){e.exports=w},function(e,r,t){"use strict";t.r(r);var n=t(12),o=t.n(n),s=t(13),i=t.n(s),a=t(6),c=t.n(a),l=t(7),u=t.n(l),b=t(14),d=t.n(b),p=t(8),f=t.n(p),h=t(20),v=t.n(h),j=t(19),g=t.n(j),m=t(9),y=t.n(m),_=t(21),k=t.n(_),x=t(22),w=t.n(x),q=t(11),N=t.n(q),E=t(5),C=t.n(E),O=t(2),L=t.n(O),T=t(4),I=t.n(T),S=t(17),A=t.n(S),P=t(10),V=t.n(P),R=t(3),z=t.n(R),W=t(15),H=t.n(W),M=t(16),U=t.n(M),D=t(0),F=t.n(D),G=t(23),B=t.n(G),Q=t(1),Y=t.n(Q),J=t(18),K=(t(24),{neo4j:{initialQuery:"MATCH (n) WHERE exists(n.pagerank)\n                        WITH (n), RAND() AS random\n                        ORDER BY random LIMIT 3000\n                        OPTIONAL MATCH (n)-[r]-(m)\n                        //WITH n,r,m WHERE exists(n.pagerank) AND exists(m.pagerank) AND exists(m.community)\n                        RETURN n, r, m;",neo4jUri:"bolt://localhost:7687",neo4jUser:"neo4j",neo4jPassword:"neo4j",encrypted:"ENCRYPTION_OFF",trust:"TRUST_ALL_CERTIFICATES"},visjs:{interaction:{hover:!0,hoverConnectedEdges:!0,selectConnectedEdges:!1,multiselect:"alwaysOn",zoomView:!1,experimental:{}},physics:{barnesHut:{damping:.1}},nodes:{mass:4,shape:"neo",labelHighlightBold:!1,widthConstraint:{maximum:40},heightConstraint:{maximum:40}},edges:{hoverWidth:0,selectionWidth:0,smooth:{type:"continuous",roundness:.15},font:{size:9,strokeWidth:0,align:"top"},color:{inherit:!1},arrows:{to:{enabled:!0,type:"arrow",scaleFactor:.5}}}}});function X(e,r){var t=z()(e);if(f.a){var n=f()(e);r&&(n=d()(n).call(n,(function(r){return u()(e,r).enumerable}))),t.push.apply(t,n)}return t}function Z(e){for(var r=1;r<arguments.length;r++){var t,n=null!=arguments[r]?arguments[r]:{};if(r%2)L()(t=X(Object(n),!0)).call(t,(function(r){F()(e,r,n[r])}));else if(c.a)i()(e,c()(n));else{var s;L()(s=X(Object(n))).call(s,(function(r){o()(e,r,u()(n,r))}))}}return e}var $=function(){function e(r){H()(this,e),r=r||{};for(var t={},n=0,o=["completed","error","clickNode","clickEdge","doubleClickNode","doubleClickEdge"];n<o.length;n++){var s=o[n];t=Z({},t,F()({},s,N()(r[s])?r[s]:r[s]?[r[s]]:[]))}this._handlers=t}return U()(e,[{key:"register",value:function(e,r){if(void 0===this._handlers[e])throw new Error("Unknown event: "+e);this._handlers[e].push(r)}},{key:"generateEvent",value:function(e,r){if(void 0===this._handlers[e])throw new Error("Unknown event: "+e);var t=!0,n=!1,o=void 0;try{for(var s,i=I()(this._handlers[e]);!(t=(s=i.next()).done);t=!0){(0,s.value)(r)}}catch(e){n=!0,o=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw o}}}}]),e}();function ee(e,r){var t=z()(e);if(f.a){var n=f()(e);r&&(n=d()(n).call(n,(function(r){return u()(e,r).enumerable}))),t.push.apply(t,n)}return t}function re(e){for(var r=1;r<arguments.length;r++){var t,n=null!=arguments[r]?arguments[r]:{};if(r%2)L()(t=ee(Object(n),!0)).call(t,(function(r){F()(e,r,n[r])}));else if(c.a)i()(e,c()(n));else{var s;L()(s=ee(Object(n))).call(s,(function(r){o()(e,r,u()(n,r))}))}}return e}t.d(r,"NEOVIS_DEFAULT_CONFIG",(function(){return te})),t.d(r,"default",(function(){return ne}));var te=B()(),ne=function(){function e(r){H()(this,e),F()(this,"_nodes",{}),F()(this,"_edges",{}),F()(this,"_data",{}),F()(this,"_network",null),F()(this,"_events",new $),this._init(r),this._consoleLog(r),this._consoleLog(K)}var r;return U()(e,[{key:"_consoleLog",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"log";("log"!==r||this._config.console_debug)&&console[r](e)}},{key:"_init",value:function(e){var r;if(e.labels&&e.labels[te])for(var t=0,n=z()(e.labels);t<n.length;t++){var o=n[t];e=re({},e,{labels:re({},e.labels,F()({},o,re({},e.labels[te],{},e.labels[o])))})}if(e.relationships&&e.relationships[te])for(var s=0,i=z()(e.relationships);s<i.length;s++){var a=i[s];e=re({},e,{relationships:re({},e.relationships,F()({},a,re({},e.relationships[te],{},e.relationships[a])))})}this._config=e,this._encrypted=e.encrypted||K.neo4j.encrypted,this._trust=e.trust||K.neo4j.trust,this._driver=Y.a.driver(e.server_url||K.neo4j.neo4jUri,Y.a.auth.basic(e.server_user||K.neo4j.neo4jUser,e.server_password||K.neo4j.neo4jPassword),{encrypted:this._encrypted,trust:this._trust,maxConnectionPoolSize:100,connectionAcquisitionTimeout:1e4}),this._database=e.server_database,this._query=e.initial_cypher||K.neo4j.initialQuery,this._container=document.getElementById(e.container_id);for(var c=(r={},F()(r,"clickNode",[]),F()(r,"clickEdge",[]),F()(r,"doubleClickNode",[]),F()(r,"doubleClickEdge",[]),r),l=function(){var r=b[u],t=e.labels[r].click;t&&"function"==typeof t&&c.clickNode.push((function(e){e&&"object"===V()(e)&&e.node&&e.node._neo4jLabel===r&&t(e)}));var n=e.labels[r].doubleClick;n&&"function"==typeof n&&c.doubleClickNode.push((function(e){e&&"object"===V()(e)&&e.node&&e.node._neo4jLabel===r&&n(e)}))},u=0,b=z()(e.labels);u<b.length;u++)l();for(var d=function(){var r=f[p],t=e.relationships[r].click;t&&"function"==typeof t&&c.clickEdge.push((function(e){e&&"object"===V()(e)&&e.edge&&e.edge._neo4jLabel===r&&t(e)}));var n=e.relationships[r].doubleClick;n&&"function"==typeof n&&c.doubleClickEdge.push((function(e){e&&"object"===V()(e)&&e.edge&&e.edge._neo4jLabel===r&&n(e)}))},p=0,f=z()(e.relationships);p<f.length;p++)d();this._events=new $(c)}},{key:"_addNode",value:function(e){this._nodes[e.id]=e}},{key:"_addEdge",value:function(e){this._edges[e.id]=e}},{key:"buildNodeVisObject",value:(r=A()(C.a.mark((function e(r){var t,n,o,s,i,a,c,l,u,b,d,p,f,h,v,j,g,m,y,_,k,x,w,q,N,E;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={},n=r.labels[0],t._neo4jLabel=n,o=this._config&&this._config.labels&&(this._config.labels[n]||this._config.labels[te]),s=o&&o.caption,i=o&&o.size,a=o&&o.sizeCypher,c=o&&o.sizeFunction,l=o&&o.community,u=o&&o.image,b=o&&o.font,d=o&&o.title_properties||z()(r.properties),t.id=r.identity.toInt(),!a){e.next=44;break}return t.value=1,p=this._driver.session(this._database&&{database:this._database}),e.prev=16,e.next=19,p.readTransaction((function(e){return e.run(a,{id:Y.a.int(t.id)})}));case 19:for(f=e.sent,h=!0,v=!1,j=void 0,e.prev=23,g=I()(f.records);!(h=(m=g.next()).done);h=!0)y=m.value,L()(y).call(y,(function(e){"number"==typeof e?t.value=e:Y.a.isInt(e)&&(t.value=e.toNumber())}));e.next=31;break;case 27:e.prev=27,e.t0=e.catch(23),v=!0,j=e.t0;case 31:e.prev=31,e.prev=32,h||null==g.return||g.return();case 34:if(e.prev=34,!v){e.next=37;break}throw j;case 37:return e.finish(34);case 38:return e.finish(31);case 39:return e.prev=39,p.close(),e.finish(39);case 42:e.next=45;break;case 44:c?t.value=c(t.id):"number"==typeof i?t.value=i:(_=r.properties[i])&&"number"==typeof _?t.value=_:_&&"object"===V()(_)&&Y.a.isInt(_)&&_.inSafeRange()?t.value=_.toNumber():t.value=1;case 45:if("function"==typeof s?t.label=s(r):s&&("number"==typeof r.properties[s]||Y.a.isInt(r.properties[s]))?t.label=r.properties[s].toString()||"":t.label=r.properties[s]||n||"",l)try{r.properties[l]?t.group=r.properties[l].toNumber()||n||0:t.group=0}catch(e){t.group=0}else t.group=n;for(t.title="",k=!0,x=!1,w=void 0,e.prev=51,q=I()(d);!(k=(N=q.next()).done);k=!0)E=N.value,r.properties.hasOwnProperty(E)&&(t.title+=this.propertyToString(E,r.properties[E]));e.next=59;break;case 55:e.prev=55,e.t1=e.catch(51),x=!0,w=e.t1;case 59:e.prev=59,e.prev=60,k||null==q.return||q.return();case 62:if(e.prev=62,!x){e.next=65;break}throw w;case 65:return e.finish(62);case 66:return e.finish(59);case 67:return u?(t.shape="image",t.image=u):t.shape="dot",b&&(t.font=b),e.abrupt("return",t);case 70:case"end":return e.stop()}}),e,this,[[16,,39,42],[23,27,31,39],[32,,34,38],[51,55,59,67],[60,,62,66]])}))),function(e){return r.apply(this,arguments)})},{key:"buildEdgeVisObject",value:function(e){var r=this._config&&this._config.relationships&&(this._config.relationships[e.type]||this._config.relationships[te]),t=r&&r.thickness,n=r&&r.caption,o={};for(var s in o.id=e.identity.toInt(),o.from=e.start.toInt(),o.to=e.end.toInt(),o._neo4jLabel=e.type,o.title="",e.properties)e.properties.hasOwnProperty(s)&&(o.title+=this.propertyToString(s,e.properties[s]));return o.value=t&&"string"==typeof t?e.properties[t]:t&&"number"==typeof t?t:1,"boolean"==typeof n?o.label=n?e.type:"":n&&"string"==typeof n?"number"==typeof e.properties[n]||Y.a.isInt(e.properties[n])?o.label=e.properties[n].toString()||"":N()(e.properties[n])?o.label=e.properties[n].join(","):o.label=e.properties[n]||"":o.label=e.type,o}},{key:"propertyToString",value:function(e,r){var t;if(N()(r)&&r.length>1){var n="<strong>".concat(e,":</strong><br /><ul>"),o=!0,s=!1,i=void 0;try{for(var a,c=I()(r);!(o=(a=c.next()).done);o=!0){var l=a.value;n+="<li>".concat(l,"</li>")}}catch(e){s=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(s)throw i}}return n+"</ul>"}return w()(t="<strong>".concat(e,":</strong> ")).call(t,r,"<br>")}},{key:"render",value:function(e,r){var t,n=this,o=0,s=e||this._query,i=this._driver.session(this._database&&{database:this._database}),a=[];i.run(s,{limit:30}).subscribe({onNext:function(e){var r;o++,n._consoleLog("CLASS NAME"),n._consoleLog(e&&e.constructor.name),n._consoleLog(e);var t=k()(r=y()(e.toObject())).call(r,function(){var e=A()(C.a.mark((function e(r){var t,o,s,i,a,c,l,u,b,d,p,f,h,v,j,g,m,y;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n._consoleLog("Constructor:"),n._consoleLog(r&&r.constructor.name),!(r instanceof Y.a.types.Node)){e.next=9;break}return e.next=5,n.buildNodeVisObject(r);case 5:t=e.sent;try{n._addNode(t)}catch(e){n._consoleLog(e,"error")}e.next=97;break;case 9:if(!(r instanceof Y.a.types.Relationship)){e.next=14;break}o=n.buildEdgeVisObject(r),n._addEdge(o),e.next=97;break;case 14:if(!(r instanceof Y.a.types.Path)){e.next=62;break}return n._consoleLog("PATH"),n._consoleLog(r),e.next=19,n.buildNodeVisObject(r.start);case 19:return s=e.sent,e.next=22,n.buildNodeVisObject(r.end);case 22:i=e.sent,n._addNode(s),n._addNode(i),a=!0,c=!1,l=void 0,e.prev=28,u=I()(r.segments);case 30:if(a=(b=u.next()).done){e.next=46;break}return d=b.value,e.t0=n,e.next=35,n.buildNodeVisObject(d.start);case 35:return e.t1=e.sent,e.t0._addNode.call(e.t0,e.t1),e.t2=n,e.next=40,n.buildNodeVisObject(d.end);case 40:e.t3=e.sent,e.t2._addNode.call(e.t2,e.t3),n._addEdge(n.buildEdgeVisObject(d.relationship));case 43:a=!0,e.next=30;break;case 46:e.next=52;break;case 48:e.prev=48,e.t4=e.catch(28),c=!0,l=e.t4;case 52:e.prev=52,e.prev=53,a||null==u.return||u.return();case 55:if(e.prev=55,!c){e.next=58;break}throw l;case 58:return e.finish(55);case 59:return e.finish(52);case 60:e.next=97;break;case 62:if(!(r instanceof Array)){e.next=97;break}p=!0,f=!1,h=void 0,e.prev=66,v=I()(r);case 68:if(p=(j=v.next()).done){e.next=83;break}if(g=j.value,n._consoleLog("Array element constructor:"),n._consoleLog(g&&g.constructor.name),!(g instanceof Y.a.types.Node)){e.next=79;break}return e.next=75,n.buildNodeVisObject(g);case 75:m=e.sent,n._addNode(m),e.next=80;break;case 79:g instanceof Y.a.types.Relationship&&(y=n.buildEdgeVisObject(g),n._addEdge(y));case 80:p=!0,e.next=68;break;case 83:e.next=89;break;case 85:e.prev=85,e.t5=e.catch(66),f=!0,h=e.t5;case 89:e.prev=89,e.prev=90,p||null==v.return||v.return();case 92:if(e.prev=92,!f){e.next=95;break}throw h;case 95:return e.finish(92);case 96:return e.finish(89);case 97:case"end":return e.stop()}}),e,null,[[28,48,52,60],[53,,55,59],[66,85,89,97],[90,,92,96]])})));return function(r){return e.apply(this,arguments)}}());a.push(g.a.all(t))},onCompleted:(t=A()(C.a.mark((function e(){var t,s,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.all(a);case 2:i.close(),n._network&&n._network.body.data.nodes.length>0?(n._data.nodes.update(y()(n._nodes)),n._data.edges.update(y()(n._edges))):(t={nodes:{font:{size:26,strokeWidth:7},scaling:{}},edges:{arrows:{to:{enabled:n._config.arrows||!1}},length:200},layout:{improvedLayout:!1,hierarchical:{enabled:n._config.hierarchical||!1,sortMethod:n._config.hierarchical_sort_method||"hubsize"}},physics:{adaptiveTimestep:!0,stabilization:{iterations:200,fit:!0}}},s=n._container,n._data={nodes:new J.DataSet(y()(n._nodes)),edges:new J.DataSet(y()(n._edges))},n._consoleLog(n._data.nodes),n._consoleLog(n._data.edges),n._network=new J.Network(s,n._data,t)),n._consoleLog("completed"),v()((function(){n._network.stopSimulation()}),1e4),n._events.generateEvent("completed",{record_count:o}),c=n,n._network.on("click",(function(e){var r;if(e.nodes.length>0)L()(r=e.nodes).call(r,(function(e){c._events.generateEvent("clickNode",{nodeId:e,node:c._nodes[e]})}));else if(e.edges.length>0){var t;L()(t=e.edges).call(t,(function(e){c._events.generateEvent("clickEdge",{edgeId:e,edge:c._edges[e]})}))}})),n._network.on("doubleClick",(function(e){var r;if(e.nodes.length>0)L()(r=e.nodes).call(r,(function(e){c._events.generateEvent("doubleClickNode",{nodeId:e,node:c._nodes[e]})}));else if(e.edges.length>0){var t;L()(t=e.edges).call(t,(function(e){c._events.generateEvent("doubleClickEdge",{edgeId:e,edge:c._edges[e]})}))}})),"function"==typeof r&&r();case 11:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)}),onError:function(e){n._consoleLog(e,"error"),n._events.generateEvent("error",{error_msg:e})}})}},{key:"clearNetwork",value:function(){this._nodes={},this._edges={},this._network.setData([])}},{key:"registerOnEvent",value:function(e,r){this._events.register(e,r)}},{key:"reinit",value:function(e){this._init(e),this.render()}},{key:"reload",value:function(){this.clearNetwork(),this.render()}},{key:"stabilize",value:function(){this._network.stopSimulation(),this._consoleLog("Calling stopSimulation")}},{key:"renderWithCypher",value:function(e){this.clearNetwork(),this._query=e,this.render()}},{key:"updateWithCypher",value:function(e,r){this.render(e,r)}},{key:"getCurrentNodesAndEdges",value:function(){return{nodes:this._nodes,edges:this._edges}}}]),e}()}])}));
//# sourceMappingURL=neovis-without-dependencies.js.map