(this["webpackJsonpant-design-fake"]=this["webpackJsonpant-design-fake"]||[]).push([[16],{2257:function(t,e,n){"use strict";n.d(e,"a",(function(){return W}));var i=n(6),a=n(102),o=n(30),r=n(39),s=n(46),l=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this;return n.type=e.type,n.hasSymbolVisual=!0,n}return Object(i.a)(e,t),e.prototype.getInitialData=function(t){return Object(a.a)(null,this,{useEncodeDefaulter:!0})},e.prototype.getLegendIcon=function(t){var e=new s.a,n=Object(r.a)("line",0,t.itemHeight/2,t.itemWidth,0,t.lineStyle.stroke,!1);e.add(n),n.setStyle(t.lineStyle);var i=this.getData().getVisual("symbol"),a=this.getData().getVisual("symbolRotate"),o="none"===i?"circle":i,l=.8*t.itemHeight,h=Object(r.a)(o,(t.itemWidth-l)/2,(t.itemHeight-l)/2,l,l,t.itemStyle.fill);e.add(h),h.setStyle(t.itemStyle);var c="inherit"===t.iconRotate?a:t.iconRotate||0;return h.rotation=c*Math.PI/180,h.setOrigin([t.itemWidth/2,t.itemHeight/2]),o.indexOf("empty")>-1&&(h.style.stroke=h.style.fill,h.style.fill="#fff",h.style.lineWidth=2),e},e.type="series.line",e.dependencies=["grid","polar"],e.defaultOption={z:3,coordinateSystem:"cartesian2d",legendHoverLink:!0,clip:!0,label:{position:"top"},endLabel:{show:!1,valueAnimation:!0,distance:8},lineStyle:{width:2,type:"solid"},emphasis:{scale:!0},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0,universalTransition:{divideShape:"clone"},triggerLineEvent:!1},e}(o.b),h=n(2),c=n(159),u=n(188),p=n(103);function d(t,e,n){var i=t.getBaseAxis(),a=t.getOtherAxis(i),o=function(t,e){var n=0,i=t.scale.getExtent();"start"===e?n=i[0]:"end"===e?n=i[1]:Object(h.z)(e)&&!isNaN(e)?n=e:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]);return n}(a,n),r=i.dim,s=a.dim,l=e.mapDimension(s),c=e.mapDimension(r),u="x"===s||"radius"===s?1:0,d=Object(h.H)(t.dimensions,(function(t){return e.mapDimension(t)})),g=!1,f=e.getCalculationInfo("stackResultDimension");return Object(p.c)(e,d[0])&&(g=!0,d[0]=f),Object(p.c)(e,d[1])&&(g=!0,d[1]=f),{dataDimsForPoint:d,valueStart:o,valueAxisDim:s,baseAxisDim:r,stacked:!!g,valueDim:l,baseDim:c,baseDataOffset:u,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}}function g(t,e,n,i){var a=NaN;t.stacked&&(a=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(a)&&(a=t.valueStart);var o=t.baseDataOffset,r=[];return r[o]=n.get(t.baseDim,i),r[1-o]=a,e.dataToPoint(r)}var f=n(121);var v=n(243),m=n(35),y=n(83),b=n(8),_=n(297),x=n(29),O=n(151),S=n(144),w=n(12),k=n(15),N=n(136),D=n(17),I=n(38),P=n(43);function j(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++)if(t[n]!==e[n])return;return!0}}function L(t){for(var e=1/0,n=1/0,i=-1/0,a=-1/0,o=0;o<t.length;){var r=t[o++],s=t[o++];isNaN(r)||(e=Math.min(r,e),i=Math.max(r,i)),isNaN(s)||(n=Math.min(s,n),a=Math.max(s,a))}return[[e,n],[i,a]]}function M(t,e){var n=L(t),i=n[0],a=n[1],o=L(e),r=o[0],s=o[1];return Math.max(Math.abs(i[0]-r[0]),Math.abs(i[1]-r[1]),Math.abs(a[0]-s[0]),Math.abs(a[1]-s[1]))}function A(t){return h.z(t)?t:t?.5:0}function C(t,e,n,i){var a=e.getBaseAxis(),o="x"===a.dim||"radius"===a.dim?0:1,r=[],s=0,l=[],h=[],c=[],u=[];if(i){for(s=0;s<t.length;s+=2)isNaN(t[s])||isNaN(t[s+1])||u.push(t[s],t[s+1]);t=u}for(s=0;s<t.length-2;s+=2)switch(c[0]=t[s+2],c[1]=t[s+3],h[0]=t[s],h[1]=t[s+1],r.push(h[0],h[1]),n){case"end":l[o]=c[o],l[1-o]=h[1-o],r.push(l[0],l[1]);break;case"middle":var p=(h[o]+c[o])/2,d=[];l[o]=d[o]=p,l[1-o]=h[1-o],d[1-o]=c[1-o],r.push(l[0],l[1]),r.push(d[0],d[1]);break;default:l[o]=h[o],l[1-o]=c[1-o],r.push(l[0],l[1])}return r.push(t[s++],t[s++]),r}function T(t,e,n){var i=t.getVisual("visualMeta");if(i&&i.length&&t.count()&&"cartesian2d"===e.type){for(var a,o,r=i.length-1;r>=0;r--){var s=t.getDimensionInfo(i[r].dimension);if("x"===(a=s&&s.coordDim)||"y"===a){o=i[r];break}}if(o){var l=e.getAxis(a),c=h.H(o.stops,(function(t){return{coord:l.toGlobalCoord(l.dataToCoord(t.value)),color:t.color}})),u=c.length,p=o.outerColors.slice();u&&c[0].coord>c[u-1].coord&&(c.reverse(),p.reverse());var d=function(t,e){var n,i,a=[],o=t.length;function r(t,e,n){var i=t.coord,a=(n-i)/(e.coord-i);return{coord:n,color:Object(P.b)(a,[t.color,e.color])}}for(var s=0;s<o;s++){var l=t[s],h=l.coord;if(h<0)n=l;else{if(h>e){i?a.push(r(i,l,e)):n&&a.push(r(n,l,0),r(n,l,e));break}n&&(a.push(r(n,l,0)),n=null),a.push(l),i=l}}return a}(c,"x"===a?n.getWidth():n.getHeight()),g=d.length;if(!g&&u)return c[0].coord<0?p[1]?p[1]:c[u-1].color:p[0]?p[0]:c[0].color;var f=d[0].coord-10,m=d[g-1].coord+10,y=m-f;if(y<.001)return"transparent";h.k(d,(function(t){t.offset=(t.coord-f)/y})),d.push({offset:g?d[g-1].offset:.5,color:p[1]||"transparent"}),d.unshift({offset:g?d[0].offset:.5,color:p[0]||"transparent"});var b=new v.a(0,0,0,0,d,!0);return b[a]=f,b[a+"2"]=m,b}}}function E(t,e,n){var i=t.get("showAllSymbol"),a="auto"===i;if(!i||a){var o=n.getAxesByScale("ordinal")[0];if(o&&(!a||!function(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count();isNaN(i)&&(i=0);for(var a=e.count(),o=Math.max(1,Math.round(a/5)),r=0;r<a;r+=o)if(1.5*u.a.getSymbolSize(e,r)[t.isHorizontal()?1:0]>i)return!1;return!0}(o,e))){var r=e.mapDimension(o.dim),s={};return h.k(o.getViewLabels(),(function(t){var e=o.scale.getRawOrdinalNumber(t.tickValue);s[e]=1})),function(t){return!s.hasOwnProperty(e.get(r,t))}}}}function z(t,e){return[t[2*e],t[2*e+1]]}function G(t){if(t.get(["endLabel","show"]))return!0;for(var e=0;e<w.g.length;e++)if(t.get([w.g[e],"endLabel","show"]))return!0;return!1}function H(t,e,n,i){if(Object(S.a)(e,"cartesian2d")){var a=i.getModel("endLabel"),o=a.get("valueAnimation"),r=i.getData(),s={lastFrameIndex:0},l=G(i)?function(n,i){t._endLabelOnDuring(n,i,r,s,o,a,e)}:null,h=e.getBaseAxis().isHorizontal(),c=Object(O.b)(e,n,i,(function(){var e=t._endLabel;e&&n&&null!=s.originalX&&e.attr({x:s.originalX,y:s.originalY})}),l);if(!i.get("clip",!0)){var u=c.shape,p=Math.max(u.width,u.height);h?(u.y-=p,u.height+=2*p):(u.x-=p,u.width+=2*p)}return l&&l(1,c),c}return Object(O.c)(e,n,i)}var R=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.init=function(){var t=new s.a,e=new c.a;this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},e.prototype.render=function(t,e,n){var i=this,a=t.coordinateSystem,o=this.group,r=t.getData(),s=t.getModel("lineStyle"),l=t.getModel("areaStyle"),c=r.getLayout("points")||[],u="polar"===a.type,p=this._coordSys,v=this._symbolDraw,y=this._polyline,b=this._polygon,_=this._lineGroup,x=t.get("animation"),O=!l.isEmpty(),S=l.get("origin"),k=d(a,r,S),N=O&&function(t,e,n){if(!n.valueDim)return[];for(var i=e.count(),a=Object(f.a)(2*i),o=0;o<i;o++){var r=g(n,t,e,o);a[2*o]=r[0],a[2*o+1]=r[1]}return a}(a,r,k),P=t.get("showSymbol"),L=t.get("connectNulls"),M=P&&!u&&E(t,r,a),z=this._data;z&&z.eachItemGraphicEl((function(t,e){t.__temp&&(o.remove(t),z.setItemGraphicEl(e,null))})),P||v.remove(),o.add(_);var G,R=!u&&t.get("step");a&&a.getArea&&t.get("clip",!0)&&(null!=(G=a.getArea()).width?(G.x-=.1,G.y-=.1,G.width+=.2,G.height+=.2):G.r0&&(G.r0-=.5,G.r+=.5)),this._clipShapeForSymbol=G;var V=T(r,a,n)||r.getVisual("style")[r.getVisual("drawType")];if(y&&p.type===a.type&&R===this._step){O&&!b?b=this._newPolygon(c,N):b&&!O&&(_.remove(b),b=this._polygon=null),u||this._initOrUpdateEndLabel(t,a,Object(I.b)(V));var F=_.getClipPath();if(F){var W=H(this,a,!1,t);m.c(F,{shape:W.shape},t)}else _.setClipPath(H(this,a,!0,t));P&&v.updateData(r,{isIgnore:M,clipShape:G,disableAnimation:!0,getSymbolPoint:function(t){return[c[2*t],c[2*t+1]]}}),j(this._stackedOnPoints,N)&&j(this._points,c)||(x?this._doUpdateAnimation(r,N,a,n,R,S,L):(R&&(c=C(c,a,R,L),N&&(N=C(N,a,R,L))),y.setShape({points:c}),b&&b.setShape({points:c,stackedOnPoints:N})))}else P&&v.updateData(r,{isIgnore:M,clipShape:G,disableAnimation:!0,getSymbolPoint:function(t){return[c[2*t],c[2*t+1]]}}),x&&this._initSymbolLabelAnimation(r,a,G),R&&(c=C(c,a,R,L),N&&(N=C(N,a,R,L))),y=this._newPolyline(c),O?b=this._newPolygon(c,N):b&&(_.remove(b),b=this._polygon=null),u||this._initOrUpdateEndLabel(t,a,Object(I.b)(V)),_.setClipPath(H(this,a,!0,t));var B=t.getModel("emphasis"),J=B.get("focus"),X=B.get("blurScope"),U=B.get("disabled");(y.useStyle(h.i(s.getLineStyle(),{fill:"none",stroke:V,lineJoin:"bevel"})),Object(w.I)(y,t,"lineStyle"),y.style.lineWidth>0&&"bolder"===t.get(["emphasis","lineStyle","width"]))&&(y.getState("emphasis").style.lineWidth=+y.style.lineWidth+1);Object(D.a)(y).seriesIndex=t.seriesIndex,Object(w.J)(y,J,X,U);var Y=A(t.get("smooth")),q=t.get("smoothMonotone");if(y.setShape({smooth:Y,smoothMonotone:q,connectNulls:L}),b){var Z=r.getCalculationInfo("stackedOnSeries"),K=0;b.useStyle(h.i(l.getAreaStyle(),{fill:V,opacity:.7,lineJoin:"bevel",decal:r.getVisual("style").decal})),Z&&(K=A(Z.get("smooth"))),b.setShape({smooth:Y,stackedOnSmooth:K,smoothMonotone:q,connectNulls:L}),Object(w.I)(b,t,"areaStyle"),Object(D.a)(b).seriesIndex=t.seriesIndex,Object(w.J)(b,J,X,U)}var Q=function(t){i._changePolyState(t)};r.eachItemGraphicEl((function(t){t&&(t.onHoverStateChange=Q)})),this._polyline.onHoverStateChange=Q,this._data=r,this._coordSys=a,this._stackedOnPoints=N,this._points=c,this._step=R,this._valueOrigin=S,t.get("triggerLineEvent")&&(this.packEventData(t,y),b&&this.packEventData(t,b))},e.prototype.packEventData=function(t,e){Object(D.a)(e).eventData={componentType:"series",componentSubType:"line",componentIndex:t.componentIndex,seriesIndex:t.seriesIndex,seriesName:t.name,seriesType:"line"}},e.prototype.highlight=function(t,e,n,i){var a=t.getData(),o=b.u(a,i);if(this._changePolyState("emphasis"),!(o instanceof Array)&&null!=o&&o>=0){var r=a.getLayout("points"),s=a.getItemGraphicEl(o);if(!s){var l=r[2*o],h=r[2*o+1];if(isNaN(l)||isNaN(h))return;if(this._clipShapeForSymbol&&!this._clipShapeForSymbol.contain(l,h))return;var c=t.get("zlevel"),p=t.get("z");(s=new u.a(a,o)).x=l,s.y=h,s.setZ(c,p);var d=s.getSymbolPath().getTextContent();d&&(d.zlevel=c,d.z=p,d.z2=this._polyline.z2+1),s.__temp=!0,a.setItemGraphicEl(o,s),s.stopSymbolAnimation(!0),this.group.add(s)}s.highlight()}else x.a.prototype.highlight.call(this,t,e,n,i)},e.prototype.downplay=function(t,e,n,i){var a=t.getData(),o=b.u(a,i);if(this._changePolyState("normal"),null!=o&&o>=0){var r=a.getItemGraphicEl(o);r&&(r.__temp?(a.setItemGraphicEl(o,null),this.group.remove(r)):r.downplay())}else x.a.prototype.downplay.call(this,t,e,n,i)},e.prototype._changePolyState=function(t){var e=this._polygon;Object(w.H)(this._polyline,t),e&&Object(w.H)(e,t)},e.prototype._newPolyline=function(t){var e=this._polyline;return e&&this._lineGroup.remove(e),e=new _.b({shape:{points:t},segmentIgnoreThreshold:2,z2:10}),this._lineGroup.add(e),this._polyline=e,e},e.prototype._newPolygon=function(t,e){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new _.a({shape:{points:t,stackedOnPoints:e},segmentIgnoreThreshold:2}),this._lineGroup.add(n),this._polygon=n,n},e.prototype._initSymbolLabelAnimation=function(t,e,n){var i,a,o=e.getBaseAxis(),r=o.inverse;"cartesian2d"===e.type?(i=o.isHorizontal(),a=!1):"polar"===e.type&&(i="angle"===o.dim,a=!0);var s=t.hostModel,l=s.get("animationDuration");h.w(l)&&(l=l(null));var c=s.get("animationDelay")||0,u=h.w(c)?c(null):c;t.eachItemGraphicEl((function(t,o){var s=t;if(s){var p=[t.x,t.y],d=void 0,g=void 0,f=void 0;if(n)if(a){var v=n,m=e.pointToCoord(p);i?(d=v.startAngle,g=v.endAngle,f=-m[1]/180*Math.PI):(d=v.r0,g=v.r,f=m[0])}else{var y=n;i?(d=y.x,g=y.x+y.width,f=t.x):(d=y.y+y.height,g=y.y,f=t.y)}var b=g===d?0:(f-d)/(g-d);r&&(b=1-b);var _=h.w(c)?c(o):l*b+u,x=s.getSymbolPath(),O=x.getTextContent();s.attr({scaleX:0,scaleY:0}),s.animateTo({scaleX:1,scaleY:1},{duration:200,setToFinal:!0,delay:_}),O&&O.animateFrom({style:{opacity:0}},{duration:300,delay:_}),x.disableLabelAnimation=!0}}))},e.prototype._initOrUpdateEndLabel=function(t,e,n){var i=t.getModel("endLabel");if(G(t)){var a=t.getData(),o=this._polyline,r=a.getLayout("points");if(!r)return o.removeTextContent(),void(this._endLabel=null);var s=this._endLabel;s||((s=this._endLabel=new y.a({z2:200})).ignoreClip=!0,o.setTextContent(this._endLabel),o.disableLabelAnimation=!0);var l=function(t){for(var e,n,i=t.length/2;i>0&&(e=t[2*i-2],n=t[2*i-1],isNaN(e)||isNaN(n));i--);return i-1}(r);l>=0&&(Object(k.g)(o,Object(k.e)(t,"endLabel"),{inheritColor:n,labelFetcher:t,labelDataIndex:l,defaultText:function(t,e,n){return null!=n?Object(N.a)(a,n):Object(N.b)(a,t)},enableTextSetter:!0},function(t,e){var n=e.getBaseAxis(),i=n.isHorizontal(),a=n.inverse,o=i?a?"right":"left":"center",r=i?"middle":a?"top":"bottom";return{normal:{align:t.get("align")||o,verticalAlign:t.get("verticalAlign")||r}}}(i,e)),o.textConfig.position=null)}else this._endLabel&&(this._polyline.removeTextContent(),this._endLabel=null)},e.prototype._endLabelOnDuring=function(t,e,n,i,a,o,r){var s=this._endLabel,l=this._polyline;if(s){t<1&&null==i.originalX&&(i.originalX=s.x,i.originalY=s.y);var h=n.getLayout("points"),c=n.hostModel,u=c.get("connectNulls"),p=o.get("precision"),d=o.get("distance")||0,g=r.getBaseAxis(),f=g.isHorizontal(),v=g.inverse,m=e.shape,y=v?f?m.x:m.y+m.height:f?m.x+m.width:m.y,_=(f?d:0)*(v?-1:1),x=(f?0:-d)*(v?-1:1),O=f?"x":"y",S=function(t,e,n){for(var i,a,o=t.length/2,r="x"===n?0:1,s=0,l=-1,h=0;h<o;h++)if(a=t[2*h+r],!isNaN(a)&&!isNaN(t[2*h+1-r]))if(0!==h){if(i<=e&&a>=e||i>=e&&a<=e){l=h;break}s=h,i=a}else i=a;return{range:[s,l],t:(e-i)/(a-i)}}(h,y,O),w=S.range,N=w[1]-w[0],D=void 0;if(N>=1){if(N>1&&!u){var I=z(h,w[0]);s.attr({x:I[0]+_,y:I[1]+x}),a&&(D=c.getRawValue(w[0]))}else{(I=l.getPointOn(y,O))&&s.attr({x:I[0]+_,y:I[1]+x});var P=c.getRawValue(w[0]),j=c.getRawValue(w[1]);a&&(D=b.k(n,p,P,j,S.t))}i.lastFrameIndex=w[0]}else{var L=1===t||i.lastFrameIndex>0?w[0]:0;I=z(h,L);a&&(D=c.getRawValue(L)),s.attr({x:I[0]+_,y:I[1]+x})}a&&Object(k.f)(s).setLabelText(D)}},e.prototype._doUpdateAnimation=function(t,e,n,i,a,o,r){var s=this._polyline,l=this._polygon,h=t.hostModel,c=function(t,e,n,i,a,o,r,s){for(var l=function(t,e){var n=[];return e.diff(t).add((function(t){n.push({cmd:"+",idx:t})})).update((function(t,e){n.push({cmd:"=",idx:e,idx1:t})})).remove((function(t){n.push({cmd:"-",idx:t})})).execute(),n}(t,e),h=[],c=[],u=[],p=[],v=[],m=[],y=[],b=d(a,e,r),_=t.getLayout("points")||[],x=e.getLayout("points")||[],O=0;O<l.length;O++){var S=l[O],w=!0,k=void 0,N=void 0;switch(S.cmd){case"=":k=2*S.idx,N=2*S.idx1;var D=_[k],I=_[k+1],P=x[N],j=x[N+1];(isNaN(D)||isNaN(I))&&(D=P,I=j),h.push(D,I),c.push(P,j),u.push(n[k],n[k+1]),p.push(i[N],i[N+1]),y.push(e.getRawIndex(S.idx1));break;case"+":var L=S.idx,M=b.dataDimsForPoint,A=a.dataToPoint([e.get(M[0],L),e.get(M[1],L)]);N=2*L,h.push(A[0],A[1]),c.push(x[N],x[N+1]);var C=g(b,a,e,L);u.push(C[0],C[1]),p.push(i[N],i[N+1]),y.push(e.getRawIndex(L));break;case"-":w=!1}w&&(v.push(S),m.push(m.length))}m.sort((function(t,e){return y[t]-y[e]}));var T=h.length,E=Object(f.a)(T),z=Object(f.a)(T),G=Object(f.a)(T),H=Object(f.a)(T),R=[];for(O=0;O<m.length;O++){var V=m[O],F=2*O,W=2*V;E[F]=h[W],E[F+1]=h[W+1],z[F]=c[W],z[F+1]=c[W+1],G[F]=u[W],G[F+1]=u[W+1],H[F]=p[W],H[F+1]=p[W+1],R[O]=v[V]}return{current:E,next:z,stackedOnCurrent:G,stackedOnNext:H,status:R}}(this._data,t,this._stackedOnPoints,e,this._coordSys,0,this._valueOrigin),u=c.current,p=c.stackedOnCurrent,v=c.next,y=c.stackedOnNext;if(a&&(u=C(c.current,n,a,r),p=C(c.stackedOnCurrent,n,a,r),v=C(c.next,n,a,r),y=C(c.stackedOnNext,n,a,r)),M(u,v)>3e3||l&&M(p,y)>3e3)return s.stopAnimation(),s.setShape({points:v}),void(l&&(l.stopAnimation(),l.setShape({points:v,stackedOnPoints:y})));s.shape.__points=c.current,s.shape.points=u;var b={shape:{points:v}};c.current!==u&&(b.shape.__points=c.next),s.stopAnimation(),m.h(s,b,h),l&&(l.setShape({points:u,stackedOnPoints:p}),l.stopAnimation(),m.h(l,{shape:{stackedOnPoints:y}},h),s.shape.points!==l.shape.points&&(l.shape.points=s.shape.points));for(var _=[],x=c.status,O=0;O<x.length;O++){if("="===x[O].cmd){var S=t.getItemGraphicEl(x[O].idx1);S&&_.push({el:S,ptIdx:O})}}s.animators&&s.animators.length&&s.animators[0].during((function(){l&&l.dirtyShape();for(var t=s.shape.__points,e=0;e<_.length;e++){var n=_[e].el,i=2*_[e].ptIdx;n.x=t[i],n.y=t[i+1],n.markRedraw()}}))},e.prototype.remove=function(t){var e=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl((function(t,i){t.__temp&&(e.remove(t),n.setItemGraphicEl(i,null))})),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._endLabel=this._data=null},e.type="line",e}(x.a),V=n(161),F=n(362);function W(t){t.registerChartView(R),t.registerSeriesModel(l),t.registerLayout(Object(V.a)("line",!0)),t.registerVisual({seriesType:"line",reset:function(t){var e=t.getData(),n=t.getModel("lineStyle").getLineStyle();n&&!n.stroke&&(n.stroke=e.getVisual("style").fill),e.setVisual("legendLineStyle",n)}}),t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC,Object(F.a)("line"))}},297:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return g}));var i=n(6),a=n(21),o=n(87),r=n(27),s=Math.min,l=Math.max;function h(t,e){return isNaN(t)||isNaN(e)}function c(t,e,n,i,a,o,r,c,u){for(var p,d,g,f,v,m,y=n,b=0;b<i;b++){var _=e[2*y],x=e[2*y+1];if(y>=a||y<0)break;if(h(_,x)){if(u){y+=o;continue}break}if(y===n)t[o>0?"moveTo":"lineTo"](_,x),g=_,f=x;else{var O=_-p,S=x-d;if(O*O+S*S<.5){y+=o;continue}if(r>0){for(var w=y+o,k=e[2*w],N=e[2*w+1];k===_&&N===x&&b<i;)b++,y+=o,k=e[2*(w+=o)],N=e[2*w+1],O=(_=e[2*y])-p,S=(x=e[2*y+1])-d;var D=b+1;if(u)for(;h(k,N)&&D<i;)D++,k=e[2*(w+=o)],N=e[2*w+1];var I=.5,P=0,j=0,L=void 0,M=void 0;if(D>=i||h(k,N))v=_,m=x;else{P=k-p,j=N-d;var A=_-p,C=k-_,T=x-d,E=N-x,z=void 0,G=void 0;if("x"===c){var H=P>0?1:-1;v=_-H*(z=Math.abs(A))*r,m=x,L=_+H*(G=Math.abs(C))*r,M=x}else if("y"===c){var R=j>0?1:-1;v=_,m=x-R*(z=Math.abs(T))*r,L=_,M=x+R*(G=Math.abs(E))*r}else z=Math.sqrt(A*A+T*T),v=_-P*r*(1-(I=(G=Math.sqrt(C*C+E*E))/(G+z))),m=x-j*r*(1-I),M=x+j*r*I,L=s(L=_+P*r*I,l(k,_)),M=s(M,l(N,x)),L=l(L,s(k,_)),m=x-(j=(M=l(M,s(N,x)))-x)*z/G,v=s(v=_-(P=L-_)*z/G,l(p,_)),m=s(m,l(d,x)),L=_+(P=_-(v=l(v,s(p,_))))*G/z,M=x+(j=x-(m=l(m,s(d,x))))*G/z}t.bezierCurveTo(g,f,v,m,_,x),g=L,f=M}else t.lineTo(_,x)}p=_,d=x,y+=o}return b}var u=function(){this.smooth=0,this.smoothConstraint=!0},p=function(t){function e(e){var n=t.call(this,e)||this;return n.type="ec-polyline",n}return Object(i.a)(e,t),e.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},e.prototype.getDefaultShape=function(){return new u},e.prototype.buildPath=function(t,e){var n=e.points,i=0,a=n.length/2;if(e.connectNulls){for(;a>0&&h(n[2*a-2],n[2*a-1]);a--);for(;i<a&&h(n[2*i],n[2*i+1]);i++);}for(;i<a;)i+=c(t,n,i,a,a,1,e.smooth,e.smoothMonotone,e.connectNulls)+1},e.prototype.getPointOn=function(t,e){this.path||(this.createPathProxy(),this.buildPath(this.path,this.shape));for(var n,i,a=this.path.data,s=o.a.CMD,l="x"===e,h=[],c=0;c<a.length;){var u=void 0,p=void 0,d=void 0,g=void 0,f=void 0,v=void 0,m=void 0;switch(a[c++]){case s.M:n=a[c++],i=a[c++];break;case s.L:if(u=a[c++],p=a[c++],(m=l?(t-n)/(u-n):(t-i)/(p-i))<=1&&m>=0){var y=l?(p-i)*m+i:(u-n)*m+n;return l?[t,y]:[y,t]}n=u,i=p;break;case s.C:u=a[c++],p=a[c++],d=a[c++],g=a[c++],f=a[c++],v=a[c++];var b=l?Object(r.f)(n,u,d,f,t,h):Object(r.f)(i,p,g,v,t,h);if(b>0)for(var _=0;_<b;_++){var x=h[_];if(x<=1&&x>=0){y=l?Object(r.a)(i,p,g,v,x):Object(r.a)(n,u,d,f,x);return l?[t,y]:[y,t]}}n=f,i=v}}},e}(a.b),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(i.a)(e,t),e}(u),g=function(t){function e(e){var n=t.call(this,e)||this;return n.type="ec-polygon",n}return Object(i.a)(e,t),e.prototype.getDefaultShape=function(){return new d},e.prototype.buildPath=function(t,e){var n=e.points,i=e.stackedOnPoints,a=0,o=n.length/2,r=e.smoothMonotone;if(e.connectNulls){for(;o>0&&h(n[2*o-2],n[2*o-1]);o--);for(;a<o&&h(n[2*a],n[2*a+1]);a++);}for(;a<o;){var s=c(t,n,a,o,o,1,e.smooth,r,e.connectNulls);c(t,i,a+s-1,s,o,-1,e.stackedOnSmooth,r,e.connectNulls),a+=s+1,t.closePath()}},e}(a.b)}}]);