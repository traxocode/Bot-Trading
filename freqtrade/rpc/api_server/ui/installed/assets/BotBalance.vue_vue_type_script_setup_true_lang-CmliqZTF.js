import{g as oa,r as $e,b5 as xa,aN as Sa,k as ie,B as je,o as z,y as ee,h as M,ay as Ma,A as Se,_ as Aa,c as he,a as R,u as Ta,q as wa,w as me,b as ye,x as ke,m as Ca,bd as Da,v as Pa,i as ka,l as Ba,n as Ia}from"./index-B2p78N-x.js";import{ci as B,cp as Ze,Z as Ge,y as la,F as Na,f as We,bL as Oa,P as Ra,cq as Ke,cr as Be,cs as Va,ct as Ea,bs as $a,cu as ue,cv as Ga,B as Qe,ah as Je,a0 as za,g as Ie,Y as U,cw as Ya,aa as Ne,cx as Xa,cy as ca,cz as qa,e as fe,cA as Ua,bz as Fa,i as ge,a4 as ea,b as Me,cB as Ha,a7 as we,cC as ja,bo as Za,an as Wa,h as aa,b8 as va,_ as ze,ai as Ka,K as ne,bE as be,O as Qa,Q as Ja,t as et,s as at,d as tt,cD as rt,bu as ua,bD as nt,C as it,q as ta,A as fa,cE as st,cF as ot,a$ as lt,S as ct,cG as vt,u as ut,bf as ft,be as gt,ba as ht,bb as dt,bc as pt,bd as mt}from"./installCanvasRenderer-DFpQ5KDo.js";import{c as yt}from"./createSeriesDataSimply-Bq9ycDaP.js";var ve=Math.PI*2,J=$a.CMD,bt=["top","right","bottom","left"];function _t(i,a,n,e,t){var o=n.width,r=n.height;switch(i){case"top":e.set(n.x+o/2,n.y-a),t.set(0,-1);break;case"bottom":e.set(n.x+o/2,n.y+r+a),t.set(0,1);break;case"left":e.set(n.x-a,n.y+r/2),t.set(-1,0);break;case"right":e.set(n.x+o+a,n.y+r/2),t.set(1,0);break}}function Lt(i,a,n,e,t,o,r,l,v){r-=i,l-=a;var f=Math.sqrt(r*r+l*l);r/=f,l/=f;var s=r*n+i,h=l*n+a;if(Math.abs(e-t)%ve<1e-4)return v[0]=s,v[1]=h,f-n;if(o){var u=e;e=ue(t),t=ue(u)}else e=ue(e),t=ue(t);e>t&&(t+=ve);var c=Math.atan2(l,r);if(c<0&&(c+=ve),c>=e&&c<=t||c+ve>=e&&c+ve<=t)return v[0]=s,v[1]=h,f-n;var g=n*Math.cos(e)+i,d=n*Math.sin(e)+a,p=n*Math.cos(t)+i,m=n*Math.sin(t)+a,b=(g-r)*(g-r)+(d-l)*(d-l),y=(p-r)*(p-r)+(m-l)*(m-l);return b<y?(v[0]=g,v[1]=d,Math.sqrt(b)):(v[0]=p,v[1]=m,Math.sqrt(y))}function Ae(i,a,n,e,t,o,r,l){var v=t-i,f=o-a,s=n-i,h=e-a,u=Math.sqrt(s*s+h*h);s/=u,h/=u;var c=v*s+f*h,g=c/u;l&&(g=Math.min(Math.max(g,0),1)),g*=u;var d=r[0]=i+g*s,p=r[1]=a+g*h;return Math.sqrt((d-t)*(d-t)+(p-o)*(p-o))}function ga(i,a,n,e,t,o,r){n<0&&(i=i+n,n=-n),e<0&&(a=a+e,e=-e);var l=i+n,v=a+e,f=r[0]=Math.min(Math.max(t,i),l),s=r[1]=Math.min(Math.max(o,a),v);return Math.sqrt((f-t)*(f-t)+(s-o)*(s-o))}var q=[];function xt(i,a,n){var e=ga(a.x,a.y,a.width,a.height,i.x,i.y,q);return n.set(q[0],q[1]),e}function St(i,a,n){for(var e=0,t=0,o=0,r=0,l,v,f=1/0,s=a.data,h=i.x,u=i.y,c=0;c<s.length;){var g=s[c++];c===1&&(e=s[c],t=s[c+1],o=e,r=t);var d=f;switch(g){case J.M:o=s[c++],r=s[c++],e=o,t=r;break;case J.L:d=Ae(e,t,s[c],s[c+1],h,u,q,!0),e=s[c++],t=s[c++];break;case J.C:d=Ea(e,t,s[c++],s[c++],s[c++],s[c++],s[c],s[c+1],h,u,q),e=s[c++],t=s[c++];break;case J.Q:d=Va(e,t,s[c++],s[c++],s[c],s[c+1],h,u,q),e=s[c++],t=s[c++];break;case J.A:var p=s[c++],m=s[c++],b=s[c++],y=s[c++],L=s[c++],S=s[c++];c+=1;var C=!!(1-s[c++]);l=Math.cos(L)*b+p,v=Math.sin(L)*y+m,c<=1&&(o=l,r=v);var D=(h-p)*y/b+p;d=Lt(p,m,y,L,L+S,C,D,u,q),e=Math.cos(L+S)*b+p,t=Math.sin(L+S)*y+m;break;case J.R:o=e=s[c++],r=t=s[c++];var _=s[c++],A=s[c++];d=ga(o,r,_,A,h,u,q);break;case J.Z:d=Ae(e,t,o,r,h,u,q,!0),e=o,t=r;break}d<f&&(f=d,n.set(q[0],q[1]))}return f}var F=new B,x=new B,T=new B,Z=new B,j=new B;function ra(i,a){if(i){var n=i.getTextGuideLine(),e=i.getTextContent();if(e&&n){var t=i.textGuideLineConfig||{},o=[[0,0],[0,0],[0,0]],r=t.candidates||bt,l=e.getBoundingRect().clone();l.applyTransform(e.getComputedTransform());var v=1/0,f=t.anchor,s=i.getComputedTransform(),h=s&&Oa([],s),u=a.get("length2")||0;f&&T.copy(f);for(var c=0;c<r.length;c++){var g=r[c];_t(g,0,l,F,Z),B.scaleAndAdd(x,F,Z,u),x.transform(h);var d=i.getBoundingRect(),p=f?f.distance(x):i instanceof Ra?St(x,i.path,T):xt(x,d,T);p<v&&(v=p,x.transform(s),T.transform(s),T.toArray(o[0]),x.toArray(o[1]),F.toArray(o[2]))}ha(o,a.get("minTurnAngle")),n.setShape({points:o})}}}var Te=[],O=new B;function ha(i,a){if(a<=180&&a>0){a=a/180*Math.PI,F.fromArray(i[0]),x.fromArray(i[1]),T.fromArray(i[2]),B.sub(Z,F,x),B.sub(j,T,x);var n=Z.len(),e=j.len();if(!(n<.001||e<.001)){Z.scale(1/n),j.scale(1/e);var t=Z.dot(j),o=Math.cos(a);if(o<t){var r=Ae(x.x,x.y,T.x,T.y,F.x,F.y,Te,!1);O.fromArray(Te),O.scaleAndAdd(j,r/Math.tan(Math.PI-a));var l=T.x!==x.x?(O.x-x.x)/(T.x-x.x):(O.y-x.y)/(T.y-x.y);if(isNaN(l))return;l<0?B.copy(O,x):l>1&&B.copy(O,T),O.toArray(i[1])}}}}function Mt(i,a,n){if(n<=180&&n>0){n=n/180*Math.PI,F.fromArray(i[0]),x.fromArray(i[1]),T.fromArray(i[2]),B.sub(Z,x,F),B.sub(j,T,x);var e=Z.len(),t=j.len();if(!(e<.001||t<.001)){Z.scale(1/e),j.scale(1/t);var o=Z.dot(a),r=Math.cos(n);if(o<r){var l=Ae(x.x,x.y,T.x,T.y,F.x,F.y,Te,!1);O.fromArray(Te);var v=Math.PI/2,f=Math.acos(j.dot(a)),s=v+f-n;if(s>=v)B.copy(O,T);else{O.scaleAndAdd(j,l/Math.tan(Math.PI/2-s));var h=T.x!==x.x?(O.x-x.x)/(T.x-x.x):(O.y-x.y)/(T.y-x.y);if(isNaN(h))return;h<0?B.copy(O,x):h>1&&B.copy(O,T)}O.toArray(i[1])}}}}function Oe(i,a,n,e){var t=n==="normal",o=t?i:i.ensureState(n);o.ignore=a;var r=e.get("smooth");r&&r===!0&&(r=.3),o.shape=o.shape||{},r>0&&(o.shape.smooth=r);var l=e.getModel("lineStyle").getLineStyle();t?i.useStyle(l):o.style=l}function At(i,a){var n=a.smooth,e=a.points;if(e)if(i.moveTo(e[0][0],e[0][1]),n>0&&e.length>=3){var t=Ke(e[0],e[1]),o=Ke(e[1],e[2]);if(!t||!o){i.lineTo(e[1][0],e[1][1]),i.lineTo(e[2][0],e[2][1]);return}var r=Math.min(t,o)*n,l=Be([],e[1],e[0],r/t),v=Be([],e[1],e[2],r/o),f=Be([],l,v,.5);i.bezierCurveTo(l[0],l[1],l[0],l[1],f[0],f[1]),i.bezierCurveTo(v[0],v[1],v[0],v[1],e[2][0],e[2][1])}else for(var s=1;s<e.length;s++)i.lineTo(e[s][0],e[s][1])}function da(i,a,n){var e=i.getTextGuideLine(),t=i.getTextContent();if(!t){e&&i.removeTextGuideLine();return}for(var o=a.normal,r=o.get("show"),l=t.ignore,v=0;v<Ze.length;v++){var f=Ze[v],s=a[f],h=f==="normal";if(s){var u=s.get("show"),c=h?l:Ge(t.states[f]&&t.states[f].ignore,l);if(c||!Ge(u,r)){var g=h?e:e&&e.states[f];g&&(g.ignore=!0),e&&Oe(e,!0,f,s);continue}e||(e=new la,i.setTextGuideLine(e),!h&&(l||!r)&&Oe(e,!0,"normal",a.normal),i.stateProxy&&(e.stateProxy=i.stateProxy)),Oe(e,!1,f,s)}}if(e){Na(e.style,n),e.style.fill=null;var d=o.get("showAbove"),p=i.textGuideLineConfig=i.textGuideLineConfig||{};p.showAbove=d||!1,e.buildPath=At}}function pa(i,a){a=a||"labelLine";for(var n={normal:i.getModel(a)},e=0;e<We.length;e++){var t=We[e];n[t]=i.getModel([t,a])}return n}function Tt(i){if(i){for(var a=[],n=0;n<i.length;n++)a.push(i[n].slice());return a}}function wt(i,a){var n=i.label,e=a&&a.getTextGuideLine();return{dataIndex:i.dataIndex,dataType:i.dataType,seriesIndex:i.seriesModel.seriesIndex,text:i.label.style.text,rect:i.hostRect,labelRect:i.rect,align:n.style.align,verticalAlign:n.style.verticalAlign,labelLinePoints:Tt(e&&e.shape.points)}}var na=["align","verticalAlign","width","height","fontSize"],N=new Ga,Re=we(),Ct=we();function _e(i,a,n){for(var e=0;e<n.length;e++){var t=n[e];a[t]!=null&&(i[t]=a[t])}}var Le=["x","y","rotation"],Dt=function(){function i(){this._labelList=[],this._chartViewList=[]}return i.prototype.clearLabels=function(){this._labelList=[],this._chartViewList=[]},i.prototype._addLabel=function(a,n,e,t,o){var r=t.style,l=t.__hostTarget,v=l.textConfig||{},f=t.getComputedTransform(),s=t.getBoundingRect().plain();Qe.applyTransform(s,s,f),f?N.setLocalTransform(f):(N.x=N.y=N.rotation=N.originX=N.originY=0,N.scaleX=N.scaleY=1),N.rotation=ue(N.rotation);var h=t.__hostTarget,u;if(h){u=h.getBoundingRect().plain();var c=h.getComputedTransform();Qe.applyTransform(u,u,c)}var g=u&&h.getTextGuideLine();this._labelList.push({label:t,labelLine:g,seriesModel:e,dataIndex:a,dataType:n,layoutOption:o,computedLayoutOption:null,rect:s,hostRect:u,priority:u?u.width*u.height:0,defaultAttr:{ignore:t.ignore,labelGuideIgnore:g&&g.ignore,x:N.x,y:N.y,scaleX:N.scaleX,scaleY:N.scaleY,rotation:N.rotation,style:{x:r.x,y:r.y,align:r.align,verticalAlign:r.verticalAlign,width:r.width,height:r.height,fontSize:r.fontSize},cursor:t.cursor,attachedPos:v.position,attachedRot:v.rotation}})},i.prototype.addLabelsOfSeries=function(a){var n=this;this._chartViewList.push(a);var e=a.__model,t=e.get("labelLayout");(Je(t)||za(t).length)&&a.group.traverse(function(o){if(o.ignore)return!0;var r=o.getTextContent(),l=Ie(o);r&&!r.disableLabelLayout&&n._addLabel(l.dataIndex,l.dataType,e,r,t)})},i.prototype.updateLayoutConfig=function(a){var n=a.getWidth(),e=a.getHeight();function t(y,L){return function(){ra(y,L)}}for(var o=0;o<this._labelList.length;o++){var r=this._labelList[o],l=r.label,v=l.__hostTarget,f=r.defaultAttr,s=void 0;Je(r.layoutOption)?s=r.layoutOption(wt(r,v)):s=r.layoutOption,s=s||{},r.computedLayoutOption=s;var h=Math.PI/180;v&&v.setTextConfig({local:!1,position:s.x!=null||s.y!=null?null:f.attachedPos,rotation:s.rotate!=null?s.rotate*h:f.attachedRot,offset:[s.dx||0,s.dy||0]});var u=!1;if(s.x!=null?(l.x=U(s.x,n),l.setStyle("x",0),u=!0):(l.x=f.x,l.setStyle("x",f.style.x)),s.y!=null?(l.y=U(s.y,e),l.setStyle("y",0),u=!0):(l.y=f.y,l.setStyle("y",f.style.y)),s.labelLinePoints){var c=v.getTextGuideLine();c&&(c.setShape({points:s.labelLinePoints}),u=!1)}var g=Re(l);g.needsUpdateLabelLine=u,l.rotation=s.rotate!=null?s.rotate*h:f.rotation,l.scaleX=f.scaleX,l.scaleY=f.scaleY;for(var d=0;d<na.length;d++){var p=na[d];l.setStyle(p,s[p]!=null?s[p]:f.style[p])}if(s.draggable){if(l.draggable=!0,l.cursor="move",v){var m=r.seriesModel;if(r.dataIndex!=null){var b=r.seriesModel.getData(r.dataType);m=b.getItemModel(r.dataIndex)}l.on("drag",t(v,m.getModel("labelLine")))}}else l.off("drag"),l.cursor=f.cursor}},i.prototype.layout=function(a){var n=a.getWidth(),e=a.getHeight(),t=Ya(this._labelList),o=Ne(t,function(v){return v.layoutOption.moveOverlap==="shiftX"}),r=Ne(t,function(v){return v.layoutOption.moveOverlap==="shiftY"});Xa(o,0,n),ca(r,0,e);var l=Ne(t,function(v){return v.layoutOption.hideOverlap});qa(l)},i.prototype.processLabelsOverall=function(){var a=this;fe(this._chartViewList,function(n){var e=n.__model,t=n.ignoreLabelLineUpdate,o=e.isAnimationEnabled();n.group.traverse(function(r){if(r.ignore&&!r.forceLabelAnimation)return!0;var l=!t,v=r.getTextContent();!l&&v&&(l=Re(v).needsUpdateLabelLine),l&&a._updateLabelLine(r,e),o&&a._animateLabels(r,e)})})},i.prototype._updateLabelLine=function(a,n){var e=a.getTextContent(),t=Ie(a),o=t.dataIndex;if(e&&o!=null){var r=n.getData(t.dataType),l=r.getItemModel(o),v={},f=r.getItemVisual(o,"style");if(f){var s=r.getVisual("drawType");v.stroke=f[s]}var h=l.getModel("labelLine");da(a,pa(l),v),ra(a,h)}},i.prototype._animateLabels=function(a,n){var e=a.getTextContent(),t=a.getTextGuideLine();if(e&&(a.forceLabelAnimation||!e.ignore&&!e.invisible&&!a.disableLabelAnimation&&!Ua(a))){var o=Re(e),r=o.oldLayout,l=Ie(a),v=l.dataIndex,f={x:e.x,y:e.y,rotation:e.rotation},s=n.getData(l.dataType);if(r){e.attr(r);var u=a.prevStates;u&&(ea(u,"select")>=0&&e.attr(o.oldLayoutSelect),ea(u,"emphasis")>=0&&e.attr(o.oldLayoutEmphasis)),Me(e,f,n,v)}else if(e.attr(f),!Fa(e).valueAnimation){var h=Ge(e.style.opacity,1);e.style.opacity=0,ge(e,{style:{opacity:h}},n,v)}if(o.oldLayout=f,e.states.select){var c=o.oldLayoutSelect={};_e(c,f,Le),_e(c,e.states.select,Le)}if(e.states.emphasis){var g=o.oldLayoutEmphasis={};_e(g,f,Le),_e(g,e.states.emphasis,Le)}Ha(e,v,s,n,n)}if(t&&!t.ignore&&!t.invisible){var o=Ct(t),r=o.oldLayout,d={points:t.shape.points};r?(t.attr({shape:r}),Me(t,{shape:d},n)):(t.setShape(d),t.style.strokePercent=0,ge(t,{style:{strokePercent:1}},n)),o.oldLayout=d}},i}(),Ve=we();function Pt(i){i.registerUpdateLifecycle("series:beforeupdate",function(a,n,e){var t=Ve(n).labelManager;t||(t=Ve(n).labelManager=new Dt),t.clearLabels()}),i.registerUpdateLifecycle("series:layoutlabels",function(a,n,e){var t=Ve(n).labelManager;e.updatedSeries.forEach(function(o){t.addLabelsOfSeries(n.getViewOfSeriesModel(o))}),t.updateLayoutConfig(n),t.layout(n),t.processLabelsOverall()})}var ia=Math.PI*2,xe=Math.PI/180;function ma(i,a){return Wa(i.getBoxLayoutParams(),{width:a.getWidth(),height:a.getHeight()})}function ya(i,a){var n=ma(i,a),e=i.get("center"),t=i.get("radius");aa(t)||(t=[0,t]);var o=U(n.width,a.getWidth()),r=U(n.height,a.getHeight()),l=Math.min(o,r),v=U(t[0],l/2),f=U(t[1],l/2),s,h,u=i.coordinateSystem;if(u){var c=u.dataToPoint(e);s=c[0]||0,h=c[1]||0}else aa(e)||(e=[e,e]),s=U(e[0],o)+n.x,h=U(e[1],r)+n.y;return{cx:s,cy:h,r0:v,r:f}}function kt(i,a,n){a.eachSeriesByType(i,function(e){var t=e.getData(),o=t.mapDimension("value"),r=ma(e,n),l=ya(e,n),v=l.cx,f=l.cy,s=l.r,h=l.r0,u=-e.get("startAngle")*xe,c=e.get("endAngle"),g=e.get("padAngle")*xe;c=c==="auto"?u-ia:-c*xe;var d=e.get("minAngle")*xe,p=d+g,m=0;t.each(o,function(I){!isNaN(I)&&m++});var b=t.getSum(o),y=Math.PI/(b||m)*2,L=e.get("clockwise"),S=e.get("roseType"),C=e.get("stillShowZeroSum"),D=t.getDataExtent(o);D[0]=0;var _=L?1:-1,A=[u,c],V=_*g/2;ja(A,!L),u=A[0],c=A[1];var K=Math.abs(c-u),Y=K,H=0,E=u;if(t.setLayout({viewRect:r,r:s}),t.each(o,function(I,X){var w;if(isNaN(I)){t.setItemLayout(X,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:L,cx:v,cy:f,r0:h,r:S?NaN:s});return}S!=="area"?w=b===0&&C?y:I*y:w=K/m,w<p?(w=p,Y-=p):H+=I;var P=E+_*w,k=0,$=0;g>w?(k=E+_*w/2,$=k):(k=E+V,$=P-V),t.setItemLayout(X,{angle:w,startAngle:k,endAngle:$,clockwise:L,cx:v,cy:f,r0:h,r:S?Za(I,D,[h,s]):s}),E=P}),Y<ia&&m)if(Y<=.001){var W=K/m;t.each(o,function(I,X){if(!isNaN(I)){var w=t.getItemLayout(X);w.angle=W;var P=0,k=0;W<g?(P=u+_*(X+1/2)*W,k=P):(P=u+_*X*W+V,k=u+_*(X+1)*W-V),w.startAngle=P,w.endAngle=k}})}else y=Y/H,E=u,t.each(o,function(I,X){if(!isNaN(I)){var w=t.getItemLayout(X),P=w.angle===p?p:I*y,k=0,$=0;P<g?(k=E+_*P/2,$=k):(k=E+V,$=E+_*P-V),w.startAngle=k,w.endAngle=$,E+=_*P}})})}function Bt(i){return{seriesType:i,reset:function(a,n){var e=n.findComponents({mainType:"legend"});if(!(!e||!e.length)){var t=a.getData();t.filterSelf(function(o){for(var r=t.getName(o),l=0;l<e.length;l++)if(!e[l].isSelected(r))return!1;return!0})}}}}var It=Math.PI/180;function sa(i,a,n,e,t,o,r,l,v,f){if(i.length<2)return;function s(d){for(var p=d.rB,m=p*p,b=0;b<d.list.length;b++){var y=d.list[b],L=Math.abs(y.label.y-n),S=e+y.len,C=S*S,D=Math.sqrt((1-Math.abs(L*L/m))*C),_=a+(D+y.len2)*t,A=_-y.label.x,V=y.targetTextWidth-A*t;ba(y,V,!0),y.label.x=_}}function h(d){for(var p={list:[],maxY:0},m={list:[],maxY:0},b=0;b<d.length;b++)if(d[b].labelAlignTo==="none"){var y=d[b],L=y.label.y>n?m:p,S=Math.abs(y.label.y-n);if(S>=L.maxY){var C=y.label.x-a-y.len2*t,D=e+y.len,_=Math.abs(C)<D?Math.sqrt(S*S/(1-C*C/D/D)):D;L.rB=_,L.maxY=S}L.list.push(y)}s(p),s(m)}for(var u=i.length,c=0;c<u;c++)if(i[c].position==="outer"&&i[c].labelAlignTo==="labelLine"){var g=i[c].label.x-f;i[c].linePoints[1][0]+=g,i[c].label.x=f}ca(i,v,v+r)&&h(i)}function Nt(i,a,n,e,t,o,r,l){for(var v=[],f=[],s=Number.MAX_VALUE,h=-Number.MAX_VALUE,u=0;u<i.length;u++){var c=i[u].label;Ee(i[u])||(c.x<a?(s=Math.min(s,c.x),v.push(i[u])):(h=Math.max(h,c.x),f.push(i[u])))}for(var u=0;u<i.length;u++){var g=i[u];if(!Ee(g)&&g.linePoints){if(g.labelStyleWidth!=null)continue;var c=g.label,d=g.linePoints,p=void 0;g.labelAlignTo==="edge"?c.x<a?p=d[2][0]-g.labelDistance-r-g.edgeDistance:p=r+t-g.edgeDistance-d[2][0]-g.labelDistance:g.labelAlignTo==="labelLine"?c.x<a?p=s-r-g.bleedMargin:p=r+t-h-g.bleedMargin:c.x<a?p=c.x-r-g.bleedMargin:p=r+t-c.x-g.bleedMargin,g.targetTextWidth=p,ba(g,p)}}sa(f,a,n,e,1,t,o,r,l,h),sa(v,a,n,e,-1,t,o,r,l,s);for(var u=0;u<i.length;u++){var g=i[u];if(!Ee(g)&&g.linePoints){var c=g.label,d=g.linePoints,m=g.labelAlignTo==="edge",b=c.style.padding,y=b?b[1]+b[3]:0,L=c.style.backgroundColor?0:y,S=g.rect.width+L,C=d[1][0]-d[2][0];m?c.x<a?d[2][0]=r+g.edgeDistance+S+g.labelDistance:d[2][0]=r+t-g.edgeDistance-S-g.labelDistance:(c.x<a?d[2][0]=c.x+g.labelDistance:d[2][0]=c.x-g.labelDistance,d[1][0]=d[2][0]+C),d[1][1]=d[2][1]=c.y}}}function ba(i,a,n){if(n===void 0&&(n=!1),i.labelStyleWidth==null){var e=i.label,t=e.style,o=i.rect,r=t.backgroundColor,l=t.padding,v=l?l[1]+l[3]:0,f=t.overflow,s=o.width+(r?0:v);if(a<s||n){var h=o.height;if(f&&f.match("break")){e.setStyle("backgroundColor",null),e.setStyle("width",a-v);var u=e.getBoundingRect();e.setStyle("width",Math.ceil(u.width)),e.setStyle("backgroundColor",r)}else{var c=a-v,g=a<s?c:n?c>i.unconstrainedWidth?null:c:null;e.setStyle("width",g)}var d=e.getBoundingRect();o.width=d.width;var p=(e.style.margin||0)+2.1;o.height=d.height+p,o.y-=(o.height-h)/2}}}function Ee(i){return i.position==="center"}function Ot(i){var a=i.getData(),n=[],e,t,o=!1,r=(i.get("minShowLabelAngle")||0)*It,l=a.getLayout("viewRect"),v=a.getLayout("r"),f=l.width,s=l.x,h=l.y,u=l.height;function c(C){C.ignore=!0}function g(C){if(!C.ignore)return!0;for(var D in C.states)if(C.states[D].ignore===!1)return!0;return!1}a.each(function(C){var D=a.getItemGraphicEl(C),_=D.shape,A=D.getTextContent(),V=D.getTextGuideLine(),K=a.getItemModel(C),Y=K.getModel("label"),H=Y.get("position")||K.get(["emphasis","label","position"]),E=Y.get("distanceToLabelLine"),W=Y.get("alignTo"),I=U(Y.get("edgeDistance"),f),X=Y.get("bleedMargin"),w=K.getModel("labelLine"),P=w.get("length");P=U(P,f);var k=w.get("length2");if(k=U(k,f),Math.abs(_.endAngle-_.startAngle)<r){fe(A.states,c),A.ignore=!0,V&&(fe(V.states,c),V.ignore=!0);return}if(g(A)){var $=(_.startAngle+_.endAngle)/2,G=Math.cos($),Q=Math.sin($),se,de,Ye,pe;e=_.cx,t=_.cy;var ae=H==="inside"||H==="inner";if(H==="center")se=_.cx,de=_.cy,pe="center";else{var Ce=(ae?(_.r+_.r0)/2*G:_.r*G)+e,De=(ae?(_.r+_.r0)/2*Q:_.r*Q)+t;if(se=Ce+G*3,de=De+Q*3,!ae){var Xe=Ce+G*(P+v-_.r),qe=De+Q*(P+v-_.r),Ue=Xe+(G<0?-1:1)*k,Fe=qe;W==="edge"?se=G<0?s+I:s+f-I:se=Ue+(G<0?-E:E),de=Fe,Ye=[[Ce,De],[Xe,qe],[Ue,Fe]]}pe=ae?"center":W==="edge"?G>0?"right":"left":G>0?"left":"right"}var oe=Math.PI,te=0,le=Y.get("rotate");if(va(le))te=le*(oe/180);else if(H==="center")te=0;else if(le==="radial"||le===!0){var _a=G<0?-$+oe:-$;te=_a}else if(le==="tangential"&&H!=="outside"&&H!=="outer"){var re=Math.atan2(G,Q);re<0&&(re=oe*2+re);var La=Q>0;La&&(re=oe+re),te=re-oe}if(o=!!te,A.x=se,A.y=de,A.rotation=te,A.setStyle({verticalAlign:"middle"}),ae){A.setStyle({align:pe});var Pe=A.states.select;Pe&&(Pe.x+=A.x,Pe.y+=A.y)}else{var ce=A.getBoundingRect().clone();ce.applyTransform(A.getComputedTransform());var He=(A.style.margin||0)+2.1;ce.y-=He/2,ce.height+=He,n.push({label:A,labelLine:V,position:H,len:P,len2:k,minTurnAngle:w.get("minTurnAngle"),maxSurfaceAngle:w.get("maxSurfaceAngle"),surfaceNormal:new B(G,Q),linePoints:Ye,textAlign:pe,labelDistance:E,labelAlignTo:W,edgeDistance:I,bleedMargin:X,rect:ce,unconstrainedWidth:ce.width,labelStyleWidth:A.style.width})}D.setTextConfig({inside:ae})}}),!o&&i.get("avoidLabelOverlap")&&Nt(n,e,t,v,f,u,s,h);for(var d=0;d<n.length;d++){var p=n[d],m=p.label,b=p.labelLine,y=isNaN(m.x)||isNaN(m.y);if(m){m.setStyle({align:p.textAlign}),y&&(fe(m.states,c),m.ignore=!0);var L=m.states.select;L&&(L.x+=m.x,L.y+=m.y)}if(b){var S=p.linePoints;y||!S?(fe(b.states,c),b.ignore=!0):(ha(S,p.minTurnAngle),Mt(S,p.surfaceNormal,p.maxSurfaceAngle),b.setShape({points:S}),m.__hostTarget.textGuideLineConfig={anchor:new B(S[0][0],S[0][1])})}}}var Rt=function(i){ze(a,i);function a(n,e,t){var o=i.call(this)||this;o.z2=2;var r=new Ka;return o.setTextContent(r),o.updateData(n,e,t,!0),o}return a.prototype.updateData=function(n,e,t,o){var r=this,l=n.hostModel,v=n.getItemModel(e),f=v.getModel("emphasis"),s=n.getItemLayout(e),h=ne(be(v.getModel("itemStyle"),s,!0),s);if(isNaN(h.startAngle)){r.setShape(h);return}if(o){r.setShape(h);var u=l.getShallow("animationType");l.ecModel.ssr?(ge(r,{scaleX:0,scaleY:0},l,{dataIndex:e,isFrom:!0}),r.originX=h.cx,r.originY=h.cy):u==="scale"?(r.shape.r=s.r0,ge(r,{shape:{r:s.r}},l,e)):t!=null?(r.setShape({startAngle:t,endAngle:t}),ge(r,{shape:{startAngle:s.startAngle,endAngle:s.endAngle}},l,e)):(r.shape.endAngle=s.startAngle,Me(r,{shape:{endAngle:s.endAngle}},l,e))}else Qa(r),Me(r,{shape:h},l,e);r.useStyle(n.getItemVisual(e,"style")),Ja(r,v);var c=(s.startAngle+s.endAngle)/2,g=l.get("selectedOffset"),d=Math.cos(c)*g,p=Math.sin(c)*g,m=v.getShallow("cursor");m&&r.attr("cursor",m),this._updateLabel(l,n,e),r.ensureState("emphasis").shape=ne({r:s.r+(f.get("scale")&&f.get("scaleSize")||0)},be(f.getModel("itemStyle"),s)),ne(r.ensureState("select"),{x:d,y:p,shape:be(v.getModel(["select","itemStyle"]),s)}),ne(r.ensureState("blur"),{shape:be(v.getModel(["blur","itemStyle"]),s)});var b=r.getTextGuideLine(),y=r.getTextContent();b&&ne(b.ensureState("select"),{x:d,y:p}),ne(y.ensureState("select"),{x:d,y:p}),et(this,f.get("focus"),f.get("blurScope"),f.get("disabled"))},a.prototype._updateLabel=function(n,e,t){var o=this,r=e.getItemModel(t),l=r.getModel("labelLine"),v=e.getItemVisual(t,"style"),f=v&&v.fill,s=v&&v.opacity;at(o,tt(r),{labelFetcher:e.hostModel,labelDataIndex:t,inheritColor:f,defaultOpacity:s,defaultText:n.getFormattedLabel(t,"normal")||e.getName(t)});var h=o.getTextContent();o.setTextConfig({position:null,rotation:null}),h.attr({z2:10});var u=n.get(["label","position"]);if(u!=="outside"&&u!=="outer")o.removeTextGuideLine();else{var c=this.getTextGuideLine();c||(c=new la,this.setTextGuideLine(c)),da(this,pa(r),{stroke:f,opacity:rt(l.get(["lineStyle","opacity"]),s,1)})}},a}(ua),Vt=function(i){ze(a,i);function a(){var n=i!==null&&i.apply(this,arguments)||this;return n.ignoreLabelLineUpdate=!0,n}return a.prototype.render=function(n,e,t,o){var r=n.getData(),l=this._data,v=this.group,f;if(!l&&r.count()>0){for(var s=r.getItemLayout(0),h=1;isNaN(s&&s.startAngle)&&h<r.count();++h)s=r.getItemLayout(h);s&&(f=s.startAngle)}if(this._emptyCircleSector&&v.remove(this._emptyCircleSector),r.count()===0&&n.get("showEmptyCircle")){var u=new ua({shape:ya(n,t)});u.useStyle(n.getModel("emptyCircleStyle").getItemStyle()),this._emptyCircleSector=u,v.add(u)}r.diff(l).add(function(c){var g=new Rt(r,c,f);r.setItemGraphicEl(c,g),v.add(g)}).update(function(c,g){var d=l.getItemGraphicEl(g);d.updateData(r,c,f),d.off("click"),v.add(d),r.setItemGraphicEl(c,d)}).remove(function(c){var g=l.getItemGraphicEl(c);nt(g,n,c)}).execute(),Ot(n),n.get("animationTypeUpdate")!=="expansion"&&(this._data=r)},a.prototype.dispose=function(){},a.prototype.containPoint=function(n,e){var t=e.getData(),o=t.getItemLayout(0);if(o){var r=n[0]-o.cx,l=n[1]-o.cy,v=Math.sqrt(r*r+l*l);return v<=o.r&&v>=o.r0}},a.type="pie",a}(it),Et=function(){function i(a,n){this._getDataWithEncodedVisual=a,this._getRawData=n}return i.prototype.getAllNames=function(){var a=this._getRawData();return a.mapArray(a.getName)},i.prototype.containName=function(a){var n=this._getRawData();return n.indexOfName(a)>=0},i.prototype.indexOfName=function(a){var n=this._getDataWithEncodedVisual();return n.indexOfName(a)},i.prototype.getItemVisual=function(a,n){var e=this._getDataWithEncodedVisual();return e.getItemVisual(a,n)},i}(),$t=we(),Gt=function(i){ze(a,i);function a(){return i!==null&&i.apply(this,arguments)||this}return a.prototype.init=function(n){i.prototype.init.apply(this,arguments),this.legendVisualProvider=new Et(ta(this.getData,this),ta(this.getRawData,this)),this._defaultLabelLine(n)},a.prototype.mergeOption=function(){i.prototype.mergeOption.apply(this,arguments)},a.prototype.getInitialData=function(){return yt(this,{coordDimensions:["value"],encodeDefaulter:fa(st,this)})},a.prototype.getDataParams=function(n){var e=this.getData(),t=$t(e),o=t.seats;if(!o){var r=[];e.each(e.mapDimension("value"),function(v){r.push(v)}),o=t.seats=ot(r,e.hostModel.get("percentPrecision"))}var l=i.prototype.getDataParams.call(this,n);return l.percent=o[n]||0,l.$vars.push("percent"),l},a.prototype._defaultLabelLine=function(n){lt(n,"labelLine",["show"]);var e=n.labelLine,t=n.emphasis.labelLine;e.show=e.show&&n.label.show,t.show=t.show&&n.emphasis.label.show},a.type="series.pie",a.defaultOption={z:2,legendHoverLink:!0,colorBy:"data",center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,endAngle:"auto",padAngle:0,minAngle:0,minShowLabelAngle:0,selectedOffset:10,percentPrecision:2,stillShowZeroSum:!0,left:0,top:0,right:0,bottom:0,width:null,height:null,label:{rotate:0,show:!0,overflow:"truncate",position:"outer",alignTo:"none",edgeDistance:"25%",bleedMargin:10,distanceToLabelLine:5},labelLine:{show:!0,length:15,length2:15,smooth:!1,minTurnAngle:90,maxSurfaceAngle:90,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1,borderJoin:"round"},showEmptyCircle:!0,emptyCircleStyle:{color:"lightgray",opacity:1},labelLayout:{hideOverlap:!0},emphasis:{scale:!0,scaleSize:5},avoidLabelOverlap:!0,animationType:"expansion",animationDuration:1e3,animationTypeUpdate:"transition",animationEasingUpdate:"cubicInOut",animationDurationUpdate:500,animationEasing:"cubicInOut"},a}(ct);function zt(i){return{seriesType:i,reset:function(a,n){var e=a.getData();e.filterSelf(function(t){var o=e.mapDimension("value"),r=e.get(o,t);return!(va(r)&&!isNaN(r)&&r<0)})}}}function Yt(i){i.registerChartView(Vt),i.registerSeriesModel(Gt),vt("pie",i.registerAction),i.registerLayout(fa(kt,"pie")),i.registerProcessor(Bt("pie")),i.registerProcessor(zt("pie"))}const Xt=oa({__name:"BalanceChart",props:{currencies:{required:!0,type:Array},showTitle:{required:!1,type:Boolean}},setup(i){ut([Yt,gt,ht,dt,pt,mt,Pt]);const a=$e(null),{width:n}=xa(a),e=i,t=Sa(),o=ie(()=>({title:{text:"Balance",show:e.showTitle},center:["50%","50%"],backgroundColor:"rgba(0, 0, 0, 0)",dataset:{dimensions:["balance","currency","est_stake","free","used","stake"],source:e.currencies},tooltip:{trigger:"item",formatter:r=>`${je(r.value.balance,r.value.currency,8)}<br />${r.percent}% (${je(r.value.est_stake,r.value.stake)})`},series:[{type:"pie",radius:["40%","70%"],encode:{value:"est_stake",itemName:"currency",tooltip:["balance","currency"]},label:{formatter:"{b} - {d}%"},tooltip:{show:!0}}]}));return(r,l)=>i.currencies?(z(),ee(M(ft),{key:0,ref_key:"balanceChart",ref:a,option:M(o),theme:M(t).chartTheme,style:Ma({height:M(n)*.6+"px"}),autoresize:""},null,8,["option","theme","style"])):Se("",!0)}}),qt=Aa(Xt,[["__scopeId","data-v-98ce5e8d"]]),Ut={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ft=R("path",{fill:"currentColor",d:"M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"},null,-1),Ht=[Ft];function jt(i,a){return z(),he("svg",Ut,[...Ht])}const Zt={name:"mdi-eye",render:jt},Wt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Kt=R("path",{fill:"currentColor",d:"M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"},null,-1),Qt=[Kt];function Jt(i,a){return z(),he("svg",Wt,[...Qt])}const er={name:"mdi-eye-off",render:Jt},ar={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},tr=R("path",{fill:"currentColor",d:"M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"},null,-1),rr=[tr];function nr(i,a){return z(),he("svg",ar,[...rr])}const ir={name:"mdi-robot",render:nr},sr={class:"mb-2"},or=R("label",{class:"me-auto h3"},"Balance",-1),lr={class:"float-end d-flex flex-row"},cr={key:0},vr=R("td",{class:"pt-1"},[R("strong",null,"Total")],-1),ur={class:"pt-1"},fr=["title"],gr={class:"pt-1"},mr=oa({__name:"BotBalance",setup(i){const a=Ta(),n=$e(!0),e=$e(!0),t=ie(()=>Number((1.1**a.activeBot.stakeCurrencyDecimals).toFixed(8))),o=ie(()=>a.activeBot.botApiVersion>=2.26),r=ie(()=>{var h;return(h=a.activeBot.balance.currencies)==null?void 0:h.filter(u=>(!n.value||u.est_stake>=t.value)&&(!o.value||!e.value||(u.is_bot_managed??!0)===!0))}),l=h=>h?Ca(h,a.activeBot.stakeCurrencyDecimals):"",v=ie(()=>{var h;return(h=r.value)==null?void 0:h.map(u=>({balance:e.value&&o.value&&u.bot_owned!=null?u.bot_owned:u.balance,currency:u.currency,est_stake:e.value&&o.value?u.est_stake_bot??u.est_stake:u.est_stake,free:e.value&&o.value?u.bot_owned??u.free:u.free,used:u.used,stake:u.stake}))}),f=ie(()=>[{key:"currency",label:"Currency"},{key:e.value&&o.value?"bot_owned":"free",label:"Available",formatter:l},{key:e.value&&o.value?"est_stake_bot":"est_stake",label:`in ${a.activeBot.balance.stake}`,formatter:l}]);async function s(){a.activeBot.getBalance()}return wa(()=>{s()}),(h,u)=>{const c=ir,g=Da,d=Pa,p=er,m=Zt,b=ka,y=qt,L=Ba;return z(),he("div",null,[R("div",sr,[or,R("div",lr,[M(o)?(z(),ee(d,{key:0,size:"sm",title:M(e)?"Showing Bot balance":"Showing Account balance",onClick:u[0]||(u[0]=S=>e.value=!M(e))},{default:me(()=>[M(e)?(z(),ee(c,{key:0})):(z(),ee(g,{key:1}))]),_:1},8,["title"])):Se("",!0),ye(d,{size:"sm",title:M(n)?"Show all balances":"Hide small balances",onClick:u[1]||(u[1]=S=>n.value=!M(n))},{default:me(()=>[M(n)?(z(),ee(p,{key:0})):(z(),ee(m,{key:1}))]),_:1},8,["title"]),ye(d,{class:"float-end",size:"sm",onClick:s},{default:me(()=>[ye(b)]),_:1})])]),M(r)?(z(),ee(y,{key:0,currencies:M(v)},null,8,["currencies"])):Se("",!0),R("div",null,[M(a).activeBot.balance.note?(z(),he("p",cr,[R("strong",null,ke(M(a).activeBot.balance.note),1)])):Se("",!0),ye(L,{class:"table-sm",items:M(r),fields:M(f)},{"custom-foot":me(()=>[vr,R("td",ur,[R("span",{class:"font-italic",title:`Increase over initial capital of ${l(M(a).activeBot.balance.starting_capital)} ${M(a).activeBot.balance.stake}`},ke(M(Ia)(M(a).activeBot.balance.starting_capital_ratio)),9,fr)]),R("td",gr,[R("strong",null,ke(M(e)&&M(o)?l(M(a).activeBot.balance.total_bot):l(M(a).activeBot.balance.total)),1)])]),_:1},8,["items","fields"])])])}}});export{mr as _};
//# sourceMappingURL=BotBalance.vue_vue_type_script_setup_true_lang-CmliqZTF.js.map
