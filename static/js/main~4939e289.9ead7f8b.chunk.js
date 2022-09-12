(this["webpackJsonpant-design-fake"]=this["webpackJsonpant-design-fake"]||[]).push([[21],{110:function(t,e,n){"use strict";function i(t){return null==t?0:t.length||1}function r(t){return t}var o=function(){function t(t,e,n,i,o,s){this._old=t,this._new=e,this._oldKeyGetter=n||r,this._newKeyGetter=i||r,this.context=o,this._diffModeMultiple="multiple"===s}return t.prototype.add=function(t){return this._add=t,this},t.prototype.update=function(t){return this._update=t,this},t.prototype.updateManyToOne=function(t){return this._updateManyToOne=t,this},t.prototype.updateOneToMany=function(t){return this._updateOneToMany=t,this},t.prototype.updateManyToMany=function(t){return this._updateManyToMany=t,this},t.prototype.remove=function(t){return this._remove=t,this},t.prototype.execute=function(){this[this._diffModeMultiple?"_executeMultiple":"_executeOneToOne"]()},t.prototype._executeOneToOne=function(){var t=this._old,e=this._new,n={},r=new Array(t.length),o=new Array(e.length);this._initIndexMap(t,null,r,"_oldKeyGetter"),this._initIndexMap(e,n,o,"_newKeyGetter");for(var s=0;s<t.length;s++){var a=r[s],u=n[a],h=i(u);if(h>1){var d=u.shift();1===u.length&&(n[a]=u[0]),this._update&&this._update(d,s)}else 1===h?(n[a]=null,this._update&&this._update(u,s)):this._remove&&this._remove(s)}this._performRestAdd(o,n)},t.prototype._executeMultiple=function(){var t=this._old,e=this._new,n={},r={},o=[],s=[];this._initIndexMap(t,n,o,"_oldKeyGetter"),this._initIndexMap(e,r,s,"_newKeyGetter");for(var a=0;a<o.length;a++){var u=o[a],h=n[u],d=r[u],c=i(h),p=i(d);if(c>1&&1===p)this._updateManyToOne&&this._updateManyToOne(d,h),r[u]=null;else if(1===c&&p>1)this._updateOneToMany&&this._updateOneToMany(d,h),r[u]=null;else if(1===c&&1===p)this._update&&this._update(d,h),r[u]=null;else if(c>1&&p>1)this._updateManyToMany&&this._updateManyToMany(d,h),r[u]=null;else if(c>1)for(var f=0;f<c;f++)this._remove&&this._remove(h[f]);else this._remove&&this._remove(h)}this._performRestAdd(s,r)},t.prototype._performRestAdd=function(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=e[r],s=i(o);if(s>1)for(var a=0;a<s;a++)this._add&&this._add(o[a]);else 1===s&&this._add&&this._add(o);e[r]=null}},t.prototype._initIndexMap=function(t,e,n,r){for(var o=this._diffModeMultiple,s=0;s<t.length;s++){var a="_ec_"+this[r](t[s],s);if(o||(n[s]=a),e){var u=e[a],h=i(u);0===h?(e[a]=s,o&&n.push(a)):1===h?e[a]=[u,s]:u.push(s)}}},t}();e.a=o},146:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return _})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return g}));var i=n(39),r=n(28),o=n(2053),s=n(2054),a=n(2),u="ZH",h="EN",d=h,c={},p={},f=r.a.domSupported&&(document.documentElement.lang||navigator.language||navigator.browserLanguage).toUpperCase().indexOf(u)>-1?u:d;function l(t,e){t=t.toUpperCase(),p[t]=new i.a(e),c[t]=e}function _(t){if(Object(a.C)(t)){var e=c[t.toUpperCase()]||{};return t===u||t===h?Object(a.d)(e):Object(a.I)(Object(a.d)(e),Object(a.d)(c.EN),!1)}return Object(a.I)(Object(a.d)(t),Object(a.d)(c.EN),!1)}function m(t){return p[t]}function g(){return p.EN}l(h,o.a),l(u,s.a)},151:function(t,e,n){"use strict";var i=new(n(81).a);e.a=i},2071:function(t,e,n){"use strict";var i=n(2);function r(t){return"_EC_"+t}var o=function(){function t(t){this.type="graph",this.nodes=[],this.edges=[],this._nodesMap={},this._edgesMap={},this._directed=t||!1}return t.prototype.isDirected=function(){return this._directed},t.prototype.addNode=function(t,e){t=null==t?""+e:""+t;var n=this._nodesMap;if(!n[r(t)]){var i=new s(t,e);return i.hostGraph=this,this.nodes.push(i),n[r(t)]=i,i}},t.prototype.getNodeByIndex=function(t){var e=this.data.getRawIndex(t);return this.nodes[e]},t.prototype.getNodeById=function(t){return this._nodesMap[r(t)]},t.prototype.addEdge=function(t,e,n){var o=this._nodesMap,u=this._edgesMap;if(i.z(t)&&(t=this.nodes[t]),i.z(e)&&(e=this.nodes[e]),t instanceof s||(t=o[r(t)]),e instanceof s||(e=o[r(e)]),t&&e){var h=t.id+"-"+e.id,d=new a(t,e,n);return d.hostGraph=this,this._directed&&(t.outEdges.push(d),e.inEdges.push(d)),t.edges.push(d),t!==e&&e.edges.push(d),this.edges.push(d),u[h]=d,d}},t.prototype.getEdgeByIndex=function(t){var e=this.edgeData.getRawIndex(t);return this.edges[e]},t.prototype.getEdge=function(t,e){t instanceof s&&(t=t.id),e instanceof s&&(e=e.id);var n=this._edgesMap;return this._directed?n[t+"-"+e]:n[t+"-"+e]||n[e+"-"+t]},t.prototype.eachNode=function(t,e){for(var n=this.nodes,i=n.length,r=0;r<i;r++)n[r].dataIndex>=0&&t.call(e,n[r],r)},t.prototype.eachEdge=function(t,e){for(var n=this.edges,i=n.length,r=0;r<i;r++)n[r].dataIndex>=0&&n[r].node1.dataIndex>=0&&n[r].node2.dataIndex>=0&&t.call(e,n[r],r)},t.prototype.breadthFirstTraverse=function(t,e,n,i){if(e instanceof s||(e=this._nodesMap[r(e)]),e){for(var o="out"===n?"outEdges":"in"===n?"inEdges":"edges",a=0;a<this.nodes.length;a++)this.nodes[a].__visited=!1;if(!t.call(i,e,null))for(var u=[e];u.length;){var h=u.shift(),d=h[o];for(a=0;a<d.length;a++){var c=d[a],p=c.node1===h?c.node2:c.node1;if(!p.__visited){if(t.call(i,p,h))return;u.push(p),p.__visited=!0}}}}},t.prototype.update=function(){for(var t=this.data,e=this.edgeData,n=this.nodes,i=this.edges,r=0,o=n.length;r<o;r++)n[r].dataIndex=-1;for(r=0,o=t.count();r<o;r++)n[t.getRawIndex(r)].dataIndex=r;e.filterSelf((function(t){var n=i[e.getRawIndex(t)];return n.node1.dataIndex>=0&&n.node2.dataIndex>=0}));for(r=0,o=i.length;r<o;r++)i[r].dataIndex=-1;for(r=0,o=e.count();r<o;r++)i[e.getRawIndex(r)].dataIndex=r},t.prototype.clone=function(){for(var e=new t(this._directed),n=this.nodes,i=this.edges,r=0;r<n.length;r++)e.addNode(n[r].id,n[r].dataIndex);for(r=0;r<i.length;r++){var o=i[r];e.addEdge(o.node1.id,o.node2.id,o.dataIndex)}return e},t}(),s=function(){function t(t,e){this.inEdges=[],this.outEdges=[],this.edges=[],this.dataIndex=-1,this.id=null==t?"":t,this.dataIndex=null==e?-1:e}return t.prototype.degree=function(){return this.edges.length},t.prototype.inDegree=function(){return this.inEdges.length},t.prototype.outDegree=function(){return this.outEdges.length},t.prototype.getModel=function(t){if(!(this.dataIndex<0))return this.hostGraph.data.getItemModel(this.dataIndex).getModel(t)},t.prototype.getAdjacentDataIndices=function(){for(var t={edge:[],node:[]},e=0;e<this.edges.length;e++){var n=this.edges[e];n.dataIndex<0||(t.edge.push(n.dataIndex),t.node.push(n.node1.dataIndex,n.node2.dataIndex))}return t},t}(),a=function(){function t(t,e,n){this.dataIndex=-1,this.node1=t,this.node2=e,this.dataIndex=null==n?-1:n}return t.prototype.getModel=function(t){if(!(this.dataIndex<0))return this.hostGraph.edgeData.getItemModel(this.dataIndex).getModel(t)},t.prototype.getAdjacentDataIndices=function(){return{edge:[this.dataIndex],node:[this.node1.dataIndex,this.node2.dataIndex]}},t}();function u(t,e){return{getValue:function(n){var i=this[t][e];return i.getStore().get(i.getDimensionIndex(n||"value"),this.dataIndex)},setVisual:function(n,i){this.dataIndex>=0&&this[t][e].setItemVisual(this.dataIndex,n,i)},getVisual:function(n){return this[t][e].getItemVisual(this.dataIndex,n)},setLayout:function(n,i){this.dataIndex>=0&&this[t][e].setItemLayout(this.dataIndex,n,i)},getLayout:function(){return this[t][e].getItemLayout(this.dataIndex)},getGraphicEl:function(){return this[t][e].getItemGraphicEl(this.dataIndex)},getRawIndex:function(){return this[t][e].getRawIndex(this.dataIndex)}}}i.K(s,u("hostGraph","data")),i.K(a,u("hostGraph","edgeData")),e.a=o},210:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(2);function r(t){return new o(t)}var o=function(){function t(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0}return t.prototype.perform=function(t){var e,n=this._upstream,r=t&&t.skip;if(this._dirty&&n){var o=this.context;o.data=o.outputData=n.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!r&&(e=this._plan(this.context));var s,a=c(this._modBy),u=this._modDataCount||0,h=c(t&&t.modBy),d=t&&t.modDataCount||0;function c(t){return!(t>=1)&&(t=1),t}a===h&&u===d||(e="reset"),(this._dirty||"reset"===e)&&(this._dirty=!1,s=this._doReset(r)),this._modBy=h,this._modDataCount=d;var p=t&&t.step;if(this._dueEnd=n?n._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var f=this._dueIndex,l=Math.min(null!=p?this._dueIndex+p:1/0,this._dueEnd);if(!r&&(s||f<l)){var _=this._progress;if(Object(i.t)(_))for(var m=0;m<_.length;m++)this._doProgress(_[m],f,l,h,d);else this._doProgress(_,f,l,h,d)}this._dueIndex=l;var g=null!=this._settedOutputEnd?this._settedOutputEnd:l;0,this._outputDueEnd=g}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd;return this.unfinished()},t.prototype.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},t.prototype._doProgress=function(t,e,n,i,r){s.reset(e,n,i,r),this._callingProgress=t,this._callingProgress({start:e,end:n,count:n-e,next:s.next},this.context)},t.prototype._doReset=function(t){var e,n;this._dueIndex=this._outputDueEnd=this._dueEnd=0,this._settedOutputEnd=null,!t&&this._reset&&((e=this._reset(this.context))&&e.progress&&(n=e.forceFirstProgress,e=e.progress),Object(i.t)(e)&&!e.length&&(e=null)),this._progress=e,this._modBy=this._modDataCount=null;var r=this._downstream;return r&&r.dirty(),n},t.prototype.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},t.prototype.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},t.prototype.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},t.prototype.getUpstream=function(){return this._upstream},t.prototype.getDownstream=function(){return this._downstream},t.prototype.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t},t}(),s=function(){var t,e,n,i,r,o={reset:function(u,h,d,c){e=u,t=h,n=d,i=c,r=Math.ceil(i/n),o.next=n>1&&i>0?a:s}};return o;function s(){return e<t?e++:null}function a(){var o=e%r*n+Math.ceil(e/r),s=e>=t?null:o<i?o:e;return e++,s}}()},223:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i,r=n(2),o=n(97),s=n(91),a="undefined",u=typeof Uint32Array===a?Array:Uint32Array,h=typeof Uint16Array===a?Array:Uint16Array,d=typeof Int32Array===a?Array:Int32Array,c=typeof Float64Array===a?Array:Float64Array,p={float:c,int:d,ordinal:Array,number:Array,time:c};function f(t){return t>65535?u:h}function l(t){var e=t.constructor;return e===Array?t.slice():new e(t)}function _(t,e,n,i,r){var o=p[n||"float"];if(r){var s=t[e],a=s&&s.length;if(a!==i){for(var u=new o(i),h=0;h<a;h++)u[h]=s[h];t[e]=u}}else t[e]=new o(i)}var m=function(){function t(){this._chunks=[],this._rawExtent=[],this._extent=[],this._count=0,this._rawCount=0,this._calcDimNameToIdx=Object(r.f)()}return t.prototype.initData=function(t,e,n){this._provider=t,this._chunks=[],this._indices=null,this.getRawIndex=this._getRawIdxIdentity;var o=t.getSource(),a=this.defaultDimValueGetter=i[o.sourceFormat];this._dimValueGetter=n||a,this._rawExtent=[];Object(s.f)(o);this._dimensions=Object(r.H)(e,(function(t){return{type:t.type,property:t.property}})),this._initDataFromProvider(0,t.count())},t.prototype.getProvider=function(){return this._provider},t.prototype.getSource=function(){return this._provider.getSource()},t.prototype.ensureCalculationDimension=function(t,e){var n=this._calcDimNameToIdx,i=this._dimensions,r=n.get(t);if(null!=r){if(i[r].type===e)return r}else r=i.length;return i[r]={type:e},n.set(t,r),this._chunks[r]=new p[e||"float"](this._rawCount),this._rawExtent[r]=[1/0,-1/0],r},t.prototype.collectOrdinalMeta=function(t,e){var n=this._chunks[t],i=this._dimensions[t],r=this._rawExtent,o=i.ordinalOffset||0,s=n.length;0===o&&(r[t]=[1/0,-1/0]);for(var a=r[t],u=o;u<s;u++){var h=n[u]=e.parseAndCollect(n[u]);isNaN(h)||(a[0]=Math.min(h,a[0]),a[1]=Math.max(h,a[1]))}i.ordinalMeta=e,i.ordinalOffset=s,i.type="ordinal"},t.prototype.getOrdinalMeta=function(t){return this._dimensions[t].ordinalMeta},t.prototype.getDimensionProperty=function(t){var e=this._dimensions[t];return e&&e.property},t.prototype.appendData=function(t){var e=this._provider,n=this.count();e.appendData(t);var i=e.count();return e.persistent||(i+=n),n<i&&this._initDataFromProvider(n,i,!0),[n,i]},t.prototype.appendValues=function(t,e){for(var n=this._chunks,r=this._dimensions,o=r.length,s=this._rawExtent,a=this.count(),u=a+Math.max(t.length,e||0),h=0;h<o;h++){_(n,h,(l=r[h]).type,u,!0)}for(var d=[],c=a;c<u;c++)for(var p=c-a,f=0;f<o;f++){var l=r[f],m=i.arrayRows.call(this,t[p]||d,l.property,p,f);n[f][c]=m;var g=s[f];m<g[0]&&(g[0]=m),m>g[1]&&(g[1]=m)}return this._rawCount=this._count=u,{start:a,end:u}},t.prototype._initDataFromProvider=function(t,e,n){for(var i=this._provider,o=this._chunks,s=this._dimensions,a=s.length,u=this._rawExtent,h=Object(r.H)(s,(function(t){return t.property})),d=0;d<a;d++){var c=s[d];u[d]||(u[d]=[1/0,-1/0]),_(o,d,c.type,e,n)}if(i.fillStorage)i.fillStorage(t,e,o,u);else for(var p=[],f=t;f<e;f++){p=i.getItem(f,p);for(var l=0;l<a;l++){var m=o[l],g=this._dimValueGetter(p,h[l],f,l);m[f]=g;var y=u[l];g<y[0]&&(y[0]=g),g>y[1]&&(y[1]=g)}}!i.persistent&&i.clean&&i.clean(),this._rawCount=this._count=e,this._extent=[]},t.prototype.count=function(){return this._count},t.prototype.get=function(t,e){if(!(e>=0&&e<this._count))return NaN;var n=this._chunks[t];return n?n[this.getRawIndex(e)]:NaN},t.prototype.getValues=function(t,e){var n=[],i=[];if(null==e){e=t,t=[];for(var r=0;r<this._dimensions.length;r++)i.push(r)}else i=t;r=0;for(var o=i.length;r<o;r++)n.push(this.get(i[r],e));return n},t.prototype.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN;var n=this._chunks[t];return n?n[e]:NaN},t.prototype.getSum=function(t){var e=0;if(this._chunks[t])for(var n=0,i=this.count();n<i;n++){var r=this.get(t,n);isNaN(r)||(e+=r)}return e},t.prototype.getMedian=function(t){var e=[];this.each([t],(function(t){isNaN(t)||e.push(t)}));var n=e.sort((function(t,e){return t-e})),i=this.count();return 0===i?0:i%2===1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},t.prototype.indexOfRawIndex=function(t){if(t>=this._rawCount||t<0)return-1;if(!this._indices)return t;var e=this._indices,n=e[t];if(null!=n&&n<this._count&&n===t)return t;for(var i=0,r=this._count-1;i<=r;){var o=(i+r)/2|0;if(e[o]<t)i=o+1;else{if(!(e[o]>t))return o;r=o-1}}return-1},t.prototype.indicesOfNearest=function(t,e,n){var i=this._chunks[t],r=[];if(!i)return r;null==n&&(n=1/0);for(var o=1/0,s=-1,a=0,u=0,h=this.count();u<h;u++){var d=e-i[this.getRawIndex(u)],c=Math.abs(d);c<=n&&((c<o||c===o&&d>=0&&s<0)&&(o=c,s=d,a=0),d===s&&(r[a++]=u))}return r.length=a,r},t.prototype.getIndices=function(){var t,e=this._indices;if(e){var n=e.constructor,i=this._count;if(n===Array){t=new n(i);for(var r=0;r<i;r++)t[r]=e[r]}else t=new n(e.buffer,0,i)}else{t=new(n=f(this._rawCount))(this.count());for(r=0;r<t.length;r++)t[r]=r}return t},t.prototype.filter=function(t,e){if(!this._count)return this;for(var n=this.clone(),i=n.count(),r=new(f(n._rawCount))(i),o=[],s=t.length,a=0,u=t[0],h=n._chunks,d=0;d<i;d++){var c=void 0,p=n.getRawIndex(d);if(0===s)c=e(d);else if(1===s){c=e(h[u][p],d)}else{for(var l=0;l<s;l++)o[l]=h[t[l]][p];o[l]=d,c=e.apply(null,o)}c&&(r[a++]=p)}return a<i&&(n._indices=r),n._count=a,n._extent=[],n._updateGetRawIdx(),n},t.prototype.selectRange=function(t){var e=this.clone(),n=e._count;if(!n)return this;var i=Object(r.F)(t),o=i.length;if(!o)return this;var s=e.count(),a=new(f(e._rawCount))(s),u=0,h=i[0],d=t[h][0],c=t[h][1],p=e._chunks,l=!1;if(!e._indices){var _=0;if(1===o){for(var m=p[i[0]],g=0;g<n;g++){((x=m[g])>=d&&x<=c||isNaN(x))&&(a[u++]=_),_++}l=!0}else if(2===o){m=p[i[0]];var y=p[i[1]],v=t[i[1]][0],I=t[i[1]][1];for(g=0;g<n;g++){var x=m[g],w=y[g];(x>=d&&x<=c||isNaN(x))&&(w>=v&&w<=I||isNaN(w))&&(a[u++]=_),_++}l=!0}}if(!l)if(1===o)for(g=0;g<s;g++){var D=e.getRawIndex(g);((x=p[i[0]][D])>=d&&x<=c||isNaN(x))&&(a[u++]=D)}else for(g=0;g<s;g++){for(var O=!0,M=(D=e.getRawIndex(g),0);M<o;M++){var b=i[M];((x=p[b][D])<t[b][0]||x>t[b][1])&&(O=!1)}O&&(a[u++]=e.getRawIndex(g))}return u<s&&(e._indices=a),e._count=u,e._extent=[],e._updateGetRawIdx(),e},t.prototype.map=function(t,e){var n=this.clone(t);return this._updateDims(n,t,e),n},t.prototype.modify=function(t,e){this._updateDims(this,t,e)},t.prototype._updateDims=function(t,e,n){for(var i=t._chunks,r=[],o=e.length,s=t.count(),a=[],u=t._rawExtent,h=0;h<e.length;h++)u[e[h]]=[1/0,-1/0];for(var d=0;d<s;d++){for(var c=t.getRawIndex(d),p=0;p<o;p++)a[p]=i[e[p]][c];a[o]=d;var f=n&&n.apply(null,a);if(null!=f){"object"!==typeof f&&(r[0]=f,f=r);for(h=0;h<f.length;h++){var l=e[h],_=f[h],m=u[l],g=i[l];g&&(g[c]=_),_<m[0]&&(m[0]=_),_>m[1]&&(m[1]=_)}}}},t.prototype.lttbDownSample=function(t,e){var n,i,r,o=this.clone([t],!0),s=o._chunks[t],a=this.count(),u=0,h=Math.floor(1/e),d=this.getRawIndex(0),c=new(f(this._rawCount))(Math.min(2*(Math.ceil(a/h)+2),a));c[u++]=d;for(var p=1;p<a-1;p+=h){for(var l=Math.min(p+h,a-1),_=Math.min(p+2*h,a),m=(_+l)/2,g=0,y=l;y<_;y++){var v=s[b=this.getRawIndex(y)];isNaN(v)||(g+=v)}g/=_-l;var I=p,x=Math.min(p+h,a),w=p-1,D=s[d];n=-1,r=I;var O=-1,M=0;for(y=I;y<x;y++){var b;v=s[b=this.getRawIndex(y)];isNaN(v)?(M++,O<0&&(O=b)):(i=Math.abs((w-m)*(v-D)-(w-y)*(g-D)))>n&&(n=i,r=b)}M>0&&M<x-I&&(c[u++]=Math.min(O,r),r=Math.max(O,r)),c[u++]=r,d=r}return c[u++]=this.getRawIndex(a-1),o._count=u,o._indices=c,o.getRawIndex=this._getRawIdx,o},t.prototype.downSample=function(t,e,n,i){for(var r=this.clone([t],!0),o=r._chunks,s=[],a=Math.floor(1/e),u=o[t],h=this.count(),d=r._rawExtent[t]=[1/0,-1/0],c=new(f(this._rawCount))(Math.ceil(h/a)),p=0,l=0;l<h;l+=a){a>h-l&&(a=h-l,s.length=a);for(var _=0;_<a;_++){var m=this.getRawIndex(l+_);s[_]=u[m]}var g=n(s),y=this.getRawIndex(Math.min(l+i(s,g)||0,h-1));u[y]=g,g<d[0]&&(d[0]=g),g>d[1]&&(d[1]=g),c[p++]=y}return r._count=p,r._indices=c,r._updateGetRawIdx(),r},t.prototype.each=function(t,e){if(this._count)for(var n=t.length,i=this._chunks,r=0,o=this.count();r<o;r++){var s=this.getRawIndex(r);switch(n){case 0:e(r);break;case 1:e(i[t[0]][s],r);break;case 2:e(i[t[0]][s],i[t[1]][s],r);break;default:for(var a=0,u=[];a<n;a++)u[a]=i[t[a]][s];u[a]=r,e.apply(null,u)}}},t.prototype.getDataExtent=function(t){var e=this._chunks[t],n=[1/0,-1/0];if(!e)return n;var i,r=this.count();if(!this._indices)return this._rawExtent[t].slice();if(i=this._extent[t])return i.slice();for(var o=(i=n)[0],s=i[1],a=0;a<r;a++){var u=e[this.getRawIndex(a)];u<o&&(o=u),u>s&&(s=u)}return i=[o,s],this._extent[t]=i,i},t.prototype.getRawDataItem=function(t){var e=this.getRawIndex(t);if(this._provider.persistent)return this._provider.getItem(e);for(var n=[],i=this._chunks,r=0;r<i.length;r++)n.push(i[r][e]);return n},t.prototype.clone=function(e,n){var i=new t,o=this._chunks,s=e&&Object(r.N)(e,(function(t,e){return t[e]=!0,t}),{});if(s)for(var a=0;a<o.length;a++)i._chunks[a]=s[a]?l(o[a]):o[a];else i._chunks=o;return this._copyCommonProps(i),n||(i._indices=this._cloneIndices()),i._updateGetRawIdx(),i},t.prototype._copyCommonProps=function(t){t._count=this._count,t._rawCount=this._rawCount,t._provider=this._provider,t._dimensions=this._dimensions,t._extent=Object(r.d)(this._extent),t._rawExtent=Object(r.d)(this._rawExtent)},t.prototype._cloneIndices=function(){if(this._indices){var t=this._indices.constructor,e=void 0;if(t===Array){var n=this._indices.length;e=new t(n);for(var i=0;i<n;i++)e[i]=this._indices[i]}else e=new t(this._indices);return e}return null},t.prototype._getRawIdxIdentity=function(t){return t},t.prototype._getRawIdx=function(t){return t<this._count&&t>=0?this._indices[t]:-1},t.prototype._updateGetRawIdx=function(){this.getRawIndex=this._indices?this._getRawIdx:this._getRawIdxIdentity},t.internalField=function(){function t(t,e,n,i){return Object(o.d)(t[i],this._dimensions[i])}i={arrayRows:t,objectRows:function(t,e,n,i){return Object(o.d)(t[e],this._dimensions[i])},keyedColumns:t,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value);return Object(o.d)(r instanceof Array?r[i]:r,this._dimensions[i])},typedArray:function(t,e,n,i){return t[i]}}}(),t}();e.b=m},254:function(t,e,n){"use strict";var i=n(2),r=n(353),o=n(71),s=n(162),a=n(8),u=function(){function t(t,e){this.depth=0,this.height=0,this.dataIndex=-1,this.children=[],this.viewChildren=[],this.isExpand=!1,this.name=t||"",this.hostTree=e}return t.prototype.isRemoved=function(){return this.dataIndex<0},t.prototype.eachNode=function(t,e,n){i.w(t)&&(n=e,e=t,t=null),t=t||{},i.C(t)&&(t={order:t});var r,o=t.order||"preorder",s=this[t.attr||"children"];"preorder"===o&&(r=e.call(n,this));for(var a=0;!r&&a<s.length;a++)s[a].eachNode(t,e,n);"postorder"===o&&e.call(n,this)},t.prototype.updateDepthAndHeight=function(t){var e=0;this.depth=t;for(var n=0;n<this.children.length;n++){var i=this.children[n];i.updateDepthAndHeight(t+1),i.height>e&&(e=i.height)}this.height=e+1},t.prototype.getNodeById=function(t){if(this.getId()===t)return this;for(var e=0,n=this.children,i=n.length;e<i;e++){var r=n[e].getNodeById(t);if(r)return r}},t.prototype.contains=function(t){if(t===this)return!0;for(var e=0,n=this.children,i=n.length;e<i;e++){var r=n[e].contains(t);if(r)return r}},t.prototype.getAncestors=function(t){for(var e=[],n=t?this:this.parentNode;n;)e.push(n),n=n.parentNode;return e.reverse(),e},t.prototype.getAncestorsIndices=function(){for(var t=[],e=this;e;)t.push(e.dataIndex),e=e.parentNode;return t.reverse(),t},t.prototype.getDescendantIndices=function(){var t=[];return this.eachNode((function(e){t.push(e.dataIndex)})),t},t.prototype.getValue=function(t){var e=this.hostTree.data;return e.getStore().get(e.getDimensionIndex(t||"value"),this.dataIndex)},t.prototype.setLayout=function(t,e){this.dataIndex>=0&&this.hostTree.data.setItemLayout(this.dataIndex,t,e)},t.prototype.getLayout=function(){return this.hostTree.data.getItemLayout(this.dataIndex)},t.prototype.getModel=function(t){if(!(this.dataIndex<0))return this.hostTree.data.getItemModel(this.dataIndex).getModel(t)},t.prototype.getLevelModel=function(){return(this.hostTree.levelModels||[])[this.depth]},t.prototype.setVisual=function(t,e){this.dataIndex>=0&&this.hostTree.data.setItemVisual(this.dataIndex,t,e)},t.prototype.getVisual=function(t){return this.hostTree.data.getItemVisual(this.dataIndex,t)},t.prototype.getRawIndex=function(){return this.hostTree.data.getRawIndex(this.dataIndex)},t.prototype.getId=function(){return this.hostTree.data.getId(this.dataIndex)},t.prototype.getChildIndex=function(){if(this.parentNode){for(var t=this.parentNode.children,e=0;e<t.length;++e)if(t[e]===this)return e;return-1}return-1},t.prototype.isAncestorOf=function(t){for(var e=t.parentNode;e;){if(e===this)return!0;e=e.parentNode}return!1},t.prototype.isDescendantOf=function(t){return t!==this&&t.isAncestorOf(this)},t}(),h=function(){function t(t){this.type="tree",this._nodes=[],this.hostModel=t}return t.prototype.eachNode=function(t,e,n){this.root.eachNode(t,e,n)},t.prototype.getNodeByDataIndex=function(t){var e=this.data.getRawIndex(t);return this._nodes[e]},t.prototype.getNodeById=function(t){return this.root.getNodeById(t)},t.prototype.update=function(){for(var t=this.data,e=this._nodes,n=0,i=e.length;n<i;n++)e[n].dataIndex=-1;for(n=0,i=t.count();n<i;n++)e[t.getRawIndex(n)].dataIndex=n},t.prototype.clearLayouts=function(){this.data.clearItemLayouts()},t.createTree=function(e,n,h){var d=new t(n),c=[],p=1;!function t(e,n){var r=e.value;p=Math.max(p,i.t(r)?r.length:1),c.push(e);var o=new u(Object(a.e)(e.name,""),d);n?function(t,e){var n=e.children;if(t.parentNode===e)return;n.push(t),t.parentNode=e}(o,n):d.root=o,d._nodes.push(o);var s=e.children;if(s)for(var h=0;h<s.length;h++)t(s[h],o)}(e),d.root.updateDepthAndHeight(0);var f=Object(s.a)(c,{coordDimensions:["value"],dimensionsCount:p}).dimensions,l=new o.a(f,n);return l.initData(c),h&&h(l),Object(r.a)({mainData:l,struct:d,structAttr:"tree"}),d.update(),d},t}();e.a=h},270:function(t,e,n){"use strict";var i=n(2),r=function(t){this.otherDims={},null!=t&&i.m(this,t)};e.a=r},294:function(t,e,n){"use strict";var i=n(2),r=0,o=function(){function t(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this.uid=++r}return t.createByAxisModel=function(e){var n=e.option,r=n.data,o=r&&Object(i.H)(r,s);return new t({categories:o,needCollect:!o,deduplication:!1!==n.dedplication})},t.prototype.getOrdinal=function(t){return this._getOrCreateMap().get(t)},t.prototype.parseAndCollect=function(t){var e,n=this._needCollect;if(!Object(i.C)(t)&&!n)return t;if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e;var r=this._getOrCreateMap();return null==(e=r.get(t))&&(n?(e=this.categories.length,this.categories[e]=t,r.set(t,e)):e=NaN),e},t.prototype._getOrCreateMap=function(){return this._map||(this._map=Object(i.f)(this.categories))},t}();function s(t){return Object(i.A)(t)&&null!=t.value?t.value:t+""}e.a=o},71:function(t,e,n){"use strict";var i,r,o,s,a,u,h,d=n(2),c=n(39),p=n(110),f=n(113),l=n(187),_=n(270),m=n(16),g=n(8),y=n(17),v=n(91),I=n(223),x=n(195),w=d.A,D=d.H,O="undefined"===typeof Int32Array?Array:Int32Array,M=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_dimSummary","userOutput","_rawData","_dimValueGetter","_nameDimIdx","_idDimIdx","_nameRepeatCount"],b=["_approximateExtent"],N=function(){function t(t,e){var n;this.type="list",this._dimOmitted=!1,this._nameList=[],this._idList=[],this._visual={},this._layout={},this._itemVisuals=[],this._itemLayouts=[],this._graphicEls=[],this._approximateExtent={},this._calculationInfo={},this.hasItemOption=!1,this.TRANSFERABLE_METHODS=["cloneShallow","downSample","lttbDownSample","map"],this.CHANGABLE_METHODS=["filterSelf","selectRange"],this.DOWNSAMPLE_METHODS=["downSample","lttbDownSample"];var i=!1;Object(x.d)(t)?(n=t.dimensions,this._dimOmitted=t.isDimensionOmitted(),this._schema=t):(i=!0,n=t),n=n||["x","y"];for(var r={},o=[],s={},a=!1,u={},h=0;h<n.length;h++){var c=n[h],p=d.C(c)?new _.a({name:c}):c instanceof _.a?c:new _.a(c),f=p.name;p.type=p.type||"float",p.coordDim||(p.coordDim=f,p.coordDimIndex=0);var l=p.otherDims=p.otherDims||{};o.push(f),r[f]=p,null!=u[f]&&(a=!0),p.createInvertedIndices&&(s[f]=[]),0===l.itemName&&(this._nameDimIdx=h),0===l.itemId&&(this._idDimIdx=h),i&&(p.storeDimIndex=h)}if(this.dimensions=o,this._dimInfos=r,this._initGetDimensionInfo(a),this.hostModel=e,this._invertedIndicesMap=s,this._dimOmitted){var m=this._dimIdxToName=d.f();d.k(o,(function(t){m.set(r[t].storeDimIndex,t)}))}}return t.prototype.getDimension=function(t){var e=this._recognizeDimIndex(t);if(null==e)return t;if(e=t,!this._dimOmitted)return this.dimensions[e];var n=this._dimIdxToName.get(e);if(null!=n)return n;var i=this._schema.getSourceDimension(e);return i?i.name:void 0},t.prototype.getDimensionIndex=function(t){var e=this._recognizeDimIndex(t);if(null!=e)return e;if(null==t)return-1;var n=this._getDimInfo(t);return n?n.storeDimIndex:this._dimOmitted?this._schema.getSourceDimensionIndex(t):-1},t.prototype._recognizeDimIndex=function(t){if(d.z(t)||null!=t&&!isNaN(t)&&!this._getDimInfo(t)&&(!this._dimOmitted||this._schema.getSourceDimensionIndex(t)<0))return+t},t.prototype._getStoreDimIndex=function(t){return this.getDimensionIndex(t)},t.prototype.getDimensionInfo=function(t){return this._getDimInfo(this.getDimension(t))},t.prototype._initGetDimensionInfo=function(t){var e=this._dimInfos;this._getDimInfo=t?function(t){return e.hasOwnProperty(t)?e[t]:void 0}:function(t){return e[t]}},t.prototype.getDimensionsOnCoord=function(){return this._dimSummary.dataDimsOnCoord.slice()},t.prototype.mapDimension=function(t,e){var n=this._dimSummary;if(null==e)return n.encodeFirstDimNotExtra[t];var i=n.encode[t];return i?i[e]:null},t.prototype.mapDimensionsAll=function(t){return(this._dimSummary.encode[t]||[]).slice()},t.prototype.getStore=function(){return this._store},t.prototype.initData=function(t,e,n){var i,r=this;if(t instanceof I.b&&(i=t),!i){var o=this.dimensions,s=Object(v.e)(t)||d.u(t)?new f.a(t,o.length):t;i=new I.b;var a=D(o,(function(t){return{type:r._dimInfos[t].type,property:t}}));i.initData(s,a,n)}this._store=i,this._nameList=(e||[]).slice(),this._idList=[],this._nameRepeatCount={},this._doInit(0,i.count()),this._dimSummary=Object(l.b)(this,this._schema),this.userOutput=this._dimSummary.userOutput},t.prototype.appendData=function(t){var e=this._store.appendData(t);this._doInit(e[0],e[1])},t.prototype.appendValues=function(t,e){var n=this._store.appendValues(t,e.length),i=n.start,r=n.end,o=this._shouldMakeIdFromName();if(this._updateOrdinalMeta(),e)for(var s=i;s<r;s++){var a=s-i;this._nameList[s]=e[a],o&&h(this,s)}},t.prototype._updateOrdinalMeta=function(){for(var t=this._store,e=this.dimensions,n=0;n<e.length;n++){var i=this._dimInfos[e[n]];i.ordinalMeta&&t.collectOrdinalMeta(i.storeDimIndex,i.ordinalMeta)}},t.prototype._shouldMakeIdFromName=function(){var t=this._store.getProvider();return null==this._idDimIdx&&t.getSource().sourceFormat!==m.g&&!t.fillStorage},t.prototype._doInit=function(t,e){if(!(t>=e)){var n=this._store.getProvider();this._updateOrdinalMeta();var r=this._nameList,o=this._idList;if(n.getSource().sourceFormat===m.f&&!n.pure)for(var s=[],a=t;a<e;a++){var u=n.getItem(a,s);if(!this.hasItemOption&&Object(g.m)(u)&&(this.hasItemOption=!0),u){var d=u.name;null==r[a]&&null!=d&&(r[a]=Object(g.e)(d,null));var c=u.id;null==o[a]&&null!=c&&(o[a]=Object(g.e)(c,null))}}if(this._shouldMakeIdFromName())for(a=t;a<e;a++)h(this,a);i(this)}},t.prototype.getApproximateExtent=function(t){return this._approximateExtent[t]||this._store.getDataExtent(this._getStoreDimIndex(t))},t.prototype.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},t.prototype.getCalculationInfo=function(t){return this._calculationInfo[t]},t.prototype.setCalculationInfo=function(t,e){w(t)?d.m(this._calculationInfo,t):this._calculationInfo[t]=e},t.prototype.getName=function(t){var e=this.getRawIndex(t),n=this._nameList[e];return null==n&&null!=this._nameDimIdx&&(n=o(this,this._nameDimIdx,e)),null==n&&(n=""),n},t.prototype._getCategory=function(t,e){var n=this._store.get(t,e),i=this._store.getOrdinalMeta(t);return i?i.categories[n]:n},t.prototype.getId=function(t){return r(this,this.getRawIndex(t))},t.prototype.count=function(){return this._store.count()},t.prototype.get=function(t,e){var n=this._store,i=this._dimInfos[t];if(i)return n.get(i.storeDimIndex,e)},t.prototype.getByRawIndex=function(t,e){var n=this._store,i=this._dimInfos[t];if(i)return n.getByRawIndex(i.storeDimIndex,e)},t.prototype.getIndices=function(){return this._store.getIndices()},t.prototype.getDataExtent=function(t){return this._store.getDataExtent(this._getStoreDimIndex(t))},t.prototype.getSum=function(t){return this._store.getSum(this._getStoreDimIndex(t))},t.prototype.getMedian=function(t){return this._store.getMedian(this._getStoreDimIndex(t))},t.prototype.getValues=function(t,e){var n=this,i=this._store;return d.t(t)?i.getValues(D(t,(function(t){return n._getStoreDimIndex(t)})),e):i.getValues(t)},t.prototype.hasValue=function(t){for(var e=this._dimSummary.dataDimIndicesOnCoord,n=0,i=e.length;n<i;n++)if(isNaN(this._store.get(e[n],t)))return!1;return!0},t.prototype.indexOfName=function(t){for(var e=0,n=this._store.count();e<n;e++)if(this.getName(e)===t)return e;return-1},t.prototype.getRawIndex=function(t){return this._store.getRawIndex(t)},t.prototype.indexOfRawIndex=function(t){return this._store.indexOfRawIndex(t)},t.prototype.rawIndexOf=function(t,e){var n=(t&&this._invertedIndicesMap[t])[e];return null==n||isNaN(n)?-1:n},t.prototype.indicesOfNearest=function(t,e,n){return this._store.indicesOfNearest(this._getStoreDimIndex(t),e,n)},t.prototype.each=function(t,e,n){d.w(t)&&(n=e,e=t,t=[]);var i=n||this,r=D(s(t),this._getStoreDimIndex,this);this._store.each(r,i?d.c(e,i):e)},t.prototype.filterSelf=function(t,e,n){d.w(t)&&(n=e,e=t,t=[]);var i=n||this,r=D(s(t),this._getStoreDimIndex,this);return this._store=this._store.filter(r,i?d.c(e,i):e),this},t.prototype.selectRange=function(t){var e=this,n={},i=d.F(t),r=[];return d.k(i,(function(i){var o=e._getStoreDimIndex(i);n[o]=t[i],r.push(o)})),this._store=this._store.selectRange(n),this},t.prototype.mapArray=function(t,e,n){d.w(t)&&(n=e,e=t,t=[]),n=n||this;var i=[];return this.each(t,(function(){i.push(e&&e.apply(this,arguments))}),n),i},t.prototype.map=function(t,e,n,i){var r=n||i||this,o=D(s(t),this._getStoreDimIndex,this),a=u(this);return a._store=this._store.map(o,r?d.c(e,r):e),a},t.prototype.modify=function(t,e,n,i){var r=n||i||this;var o=D(s(t),this._getStoreDimIndex,this);this._store.modify(o,r?d.c(e,r):e)},t.prototype.downSample=function(t,e,n,i){var r=u(this);return r._store=this._store.downSample(this._getStoreDimIndex(t),e,n,i),r},t.prototype.lttbDownSample=function(t,e){var n=u(this);return n._store=this._store.lttbDownSample(this._getStoreDimIndex(t),e),n},t.prototype.getRawDataItem=function(t){return this._store.getRawDataItem(t)},t.prototype.getItemModel=function(t){var e=this.hostModel,n=this.getRawDataItem(t);return new c.a(n,e,e&&e.ecModel)},t.prototype.diff=function(t){var e=this;return new p.a(t?t.getStore().getIndices():[],this.getStore().getIndices(),(function(e){return r(t,e)}),(function(t){return r(e,t)}))},t.prototype.getVisual=function(t){var e=this._visual;return e&&e[t]},t.prototype.setVisual=function(t,e){this._visual=this._visual||{},w(t)?d.m(this._visual,t):this._visual[t]=e},t.prototype.getItemVisual=function(t,e){var n=this._itemVisuals[t],i=n&&n[e];return null==i?this.getVisual(e):i},t.prototype.hasItemVisual=function(){return this._itemVisuals.length>0},t.prototype.ensureUniqueItemVisual=function(t,e){var n=this._itemVisuals,i=n[t];i||(i=n[t]={});var r=i[e];return null==r&&(r=this.getVisual(e),d.t(r)?r=r.slice():w(r)&&(r=d.m({},r)),i[e]=r),r},t.prototype.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{};this._itemVisuals[t]=i,w(e)?d.m(i,e):i[e]=n},t.prototype.clearAllVisual=function(){this._visual={},this._itemVisuals=[]},t.prototype.setLayout=function(t,e){w(t)?d.m(this._layout,t):this._layout[t]=e},t.prototype.getLayout=function(t){return this._layout[t]},t.prototype.getItemLayout=function(t){return this._itemLayouts[t]},t.prototype.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?d.m(this._itemLayouts[t]||{},e):e},t.prototype.clearItemLayouts=function(){this._itemLayouts.length=0},t.prototype.setItemGraphicEl=function(t,e){var n=this.hostModel&&this.hostModel.seriesIndex;Object(y.b)(n,this.dataType,t,e),this._graphicEls[t]=e},t.prototype.getItemGraphicEl=function(t){return this._graphicEls[t]},t.prototype.eachItemGraphicEl=function(t,e){d.k(this._graphicEls,(function(n,i){n&&t&&t.call(e,n,i)}))},t.prototype.cloneShallow=function(e){return e||(e=new t(this._schema?this._schema:D(this.dimensions,this._getDimInfo,this),this.hostModel)),a(e,this),e._store=this._store,e},t.prototype.wrapMethod=function(t,e){var n=this[t];d.w(n)&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments);return e.apply(this,[t].concat(d.S(arguments)))})},t.internalField=(i=function(t){var e=t._invertedIndicesMap;d.k(e,(function(n,i){var r=t._dimInfos[i],o=r.ordinalMeta,s=t._store;if(o){n=e[i]=new O(o.categories.length);for(var a=0;a<n.length;a++)n[a]=-1;for(a=0;a<s.count();a++)n[s.get(r.storeDimIndex,a)]=a}}))},o=function(t,e,n){return Object(g.e)(t._getCategory(e,n),null)},r=function(t,e){var n=t._idList[e];return null==n&&null!=t._idDimIdx&&(n=o(t,t._idDimIdx,e)),null==n&&(n="e\0\0"+e),n},s=function(t){return d.t(t)||(t=null!=t?[t]:[]),t},u=function(e){var n=new t(e._schema?e._schema:D(e.dimensions,e._getDimInfo,e),e.hostModel);return a(n,e),n},a=function(t,e){d.k(M.concat(e.__wrappedMethods||[]),(function(n){e.hasOwnProperty(n)&&(t[n]=e[n])})),t.__wrappedMethods=e.__wrappedMethods,d.k(b,(function(n){t[n]=d.d(e[n])})),t._calculationInfo=d.m({},e._calculationInfo)},void(h=function(t,e){var n=t._nameList,i=t._idList,r=t._nameDimIdx,s=t._idDimIdx,a=n[e],u=i[e];if(null==a&&null!=r&&(n[e]=a=o(t,r,e)),null==u&&null!=s&&(i[e]=u=o(t,s,e)),null==u&&null!=a){var h=t._nameRepeatCount,d=h[a]=(h[a]||0)+1;u=a,d>1&&(u+="__ec__"+d),i[e]=u}})),t}();e.a=N},91:function(t,e,n){"use strict";n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return p})),n.d(e,"f",(function(){return _}));var i=n(2),r=n(16),o=n(8),s=n(90),a=function(t){this.data=t.data||(t.sourceFormat===r.d?{}:[]),this.sourceFormat=t.sourceFormat||r.h,this.seriesLayoutBy=t.seriesLayoutBy||r.a,this.startIndex=t.startIndex||0,this.dimensionsDetectedCount=t.dimensionsDetectedCount,this.metaRawOption=t.metaRawOption;var e=this.dimensionsDefine=t.dimensionsDefine;if(e)for(var n=0;n<e.length;n++){var i=e[n];null==i.type&&Object(s.b)(this,n)===s.a.Must&&(i.type="ordinal")}};function u(t){return t instanceof a}function h(t,e,n){n=n||p(t);var s=e.seriesLayoutBy,u=function(t,e,n,s,a){var u,h;if(!t)return{dimensionsDefine:f(a),startIndex:h,dimensionsDetectedCount:u};if(e===r.c){var d=t;"auto"===s||null==s?l((function(t){null!=t&&"-"!==t&&(Object(i.C)(t)?null==h&&(h=1):h=0)}),n,d,10):h=Object(i.z)(s)?s:s?1:0,a||1!==h||(a=[],l((function(t,e){a[e]=null!=t?t+"":""}),n,d,1/0)),u=a?a.length:n===r.b?d.length:d[0]?d[0].length:null}else if(e===r.e)a||(a=function(t){var e,n=0;for(;n<t.length&&!(e=t[n++]););if(e){var r=[];return Object(i.k)(e,(function(t,e){r.push(e)})),r}}(t));else if(e===r.d)a||(a=[],Object(i.k)(t,(function(t,e){a.push(e)})));else if(e===r.f){var c=Object(o.h)(t[0]);u=Object(i.t)(c)&&c.length||1}else r.g;return{startIndex:h,dimensionsDefine:f(a),dimensionsDetectedCount:u}}(t,n,s,e.sourceHeader,e.dimensions);return new a({data:t,sourceFormat:n,seriesLayoutBy:s,dimensionsDefine:u.dimensionsDefine,startIndex:u.startIndex,dimensionsDetectedCount:u.dimensionsDetectedCount,metaRawOption:Object(i.d)(e)})}function d(t){return new a({data:t,sourceFormat:Object(i.E)(t)?r.g:r.f})}function c(t){return new a({data:t.data,sourceFormat:t.sourceFormat,seriesLayoutBy:t.seriesLayoutBy,dimensionsDefine:Object(i.d)(t.dimensionsDefine),startIndex:t.startIndex,dimensionsDetectedCount:t.dimensionsDetectedCount})}function p(t){var e=r.h;if(Object(i.E)(t))e=r.g;else if(Object(i.t)(t)){0===t.length&&(e=r.c);for(var n=0,o=t.length;n<o;n++){var s=t[n];if(null!=s){if(Object(i.t)(s)){e=r.c;break}if(Object(i.A)(s)){e=r.e;break}}}}else if(Object(i.A)(t))for(var a in t)if(Object(i.q)(t,a)&&Object(i.u)(t[a])){e=r.d;break}return e}function f(t){if(t){var e=Object(i.f)();return Object(i.H)(t,(function(t,n){var r={name:(t=Object(i.A)(t)?t:{name:t}).name,displayName:t.displayName,type:t.type};if(null==r.name)return r;r.name+="",null==r.displayName&&(r.displayName=r.name);var o=e.get(r.name);return o?r.name+="-"+o.count++:e.set(r.name,{count:1}),r}))}}function l(t,e,n,i){if(e===r.b)for(var o=0;o<n.length&&o<i;o++)t(n[o]?n[o][0]:null,o);else{var s=n[0]||[];for(o=0;o<s.length&&o<i;o++)t(s[o],o)}}function _(t){var e=t.sourceFormat;return e===r.e||e===r.d}}}]);