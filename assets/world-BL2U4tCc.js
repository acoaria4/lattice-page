import{W as zt,R as Gt,P as Ot,a as H,C as jt}from"./emblem-colors-WDDgIgsw.js";import{c as At}from"./emblem-world-BMnlDwjr.js";import{h as Ft}from"./indexReview-Dy0VqRjn.js";import{A as Ht,S as Bt,P as Vt,D as dt,H as Nt,G as K,M as L,a as it,b as rt,c as ht,d as Mt,e as Yt,E as xt,B as Ut,L as Xt,f as bt,C as O,g as Zt,V as $,h as $t,i as qt,R as Jt}from"./three-core-DH7zQUZE.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./preload-helper-By1haF0i.js";const{lerp:l,smoothstep:c,degToRad:Kt,euclideanModulo:Qt}=$t,z=6,St=[0,1,2,6,3,4,5],te=["#2be6c0","#24d9c7","#1ed5e7","#21b8ed","#2e98ed","#3e7aee","#60d8db"],U=["#60d8db","#67a7f2","#7ce9b7"].map(n=>new O(n)),ee=new O("#ffb363"),oe=new O("#7dffe0"),gt=new O("#dbfff3"),q=.2,J=11.45,G=2.42,Et=1.37,st=-.32,X={x:0,y:.3,z:0,yaw:-.075,pitch:.045,width:17.1,narrow:11.75,right:.18,lift:.11,mobileLift:.14,fov:37},at={x:0,y:1.02,z:.38,yaw:-.2,pitch:.28,width:24.4,narrow:14.35,right:.15,lift:.06,mobileLift:.14,fov:40},wt={x:.75,y:1.68,z:.04,yaw:.27,pitch:.21,width:14.4,narrow:9.05,right:.155,mobileRight:-.065,lift:-.036,mobileLift:.087,fov:38},Z=[{at:0,...X},{at:.13,...X},{at:.235,x:-.43,y:.07,z:.1,yaw:.35,pitch:.105,width:12.9,narrow:8.4,right:.16,lift:.1,mobileLift:.15,fov:44},{at:.39,...at},{at:.5,...at},{at:.59,...wt},{at:.7,...wt,yaw:-.05,x:.46,y:1.93,width:15.3,narrow:9.45},{at:.82,...at,yaw:.13},{at:.9,x:-.4,y:.22,z:.38,yaw:-.31,pitch:.04,width:13.1,narrow:8.4,right:.155,lift:.065,mobileLift:.13,fov:43},{at:.98,...X},{at:1,...X}],C=[];let yt=-(J+q*(St.length-1))/2;for(const n of St){const i=J*Ft[n].weight/100;C[n]={x:yt+i/2,width:i},yt+=i+q}const ct=`
  varying vec2 surface;
  void main() {
    surface = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
`;function ne(n){const i=new rt({uniforms:{tint:{value:new O},opacity:{value:0},energy:{value:0},columns:{value:Math.round(n*28)},signature:{value:0}},transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:ct,fragmentShader:`
      uniform vec3 tint;
      uniform float opacity;
      uniform float energy;
      uniform float columns;
      uniform float signature;
      varying vec2 surface;
      void main() {
        vec2 p = surface;
        float slit = pow(max(0., sin(p.x * columns * 3.14159)), 15.);
        float sweep = exp(-abs(p.y - p.x * .21 - .29 - signature * .13) * 7.6);
        float etch = smoothstep(.72, .93, p.y) * smoothstep(.48, .96, p.x);
        float base = exp(-p.y * 6.3);
        float lip = smoothstep(.965, 1., p.y) + (1. - smoothstep(.0, .014, p.y));
        float lamination = .14 + sweep * .21 + base * .45 + slit * (.19 + etch * .34);
        vec3 color = tint * lamination + vec3(.53, .92, .87) * lip * .29;
        gl_FragColor = vec4(color * energy, opacity * (.58 + base * .27));
        #include <colorspace_fragment>
      }
    `}),r=new L(new it(n*.83,G*.91),i);return r.position.z=.205,r}function vt(n,i){const r=new K,e=new O(te[i]),o=new ht({color:e.clone().multiplyScalar(.29),emissive:e,emissiveIntensity:.045,metalness:.42,roughness:.24,envMapIntensity:.61,clearcoat:.88,clearcoatRoughness:.13,transparent:!0}),m=new H(n,G,.4,3,Math.min(.091,n*.13)),u=new L(m,o);u.userData.holding=i;const v=new bt(new xt(m,25),new Zt({color:e,transparent:!0,depthWrite:!1,toneMapped:!1})),h=ne(n),w=new L(new H(n*.91,.025,.11,2,.009),new Mt({color:e,transparent:!0,depthWrite:!1,toneMapped:!1}));return w.position.set(0,G/2+.014,.09),r.add(u,h,v,w),{group:r,pigment:e,material:o,edges:v,face:h,crown:w,body:u}}function ae(n,i,r){const e=new K;e.position.set(i,.07,.64);const o=new rt({uniforms:{tint:{value:r.clone()},opacity:{value:0},signal:{value:0}},transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:ct,fragmentShader:`
      uniform vec3 tint;
      uniform float opacity;
      uniform float signal;
      varying vec2 surface;
      void main() {
        vec2 p = surface;
        float edge = pow(abs(p.x * 2. - 1.), 27.);
        float divisions = pow(max(0., cos(p.y * 76.)), 22.);
        float taper = smoothstep(0., .09, p.y) * (1. - smoothstep(.83, 1., p.y));
        float line = exp(-abs(p.y - signal) * 19.);
        float contact = .11 + edge * .40 + divisions * .15 + line * .66;
        gl_FragColor = vec4(tint * contact, opacity * taper * (.42 + edge * .41 + line * .16));
        #include <colorspace_fragment>
      }
    `}),m=new L(new it(n,2.16),o);return m.rotation.x=-Math.PI/2,e.add(m),{group:e,material:o}}function ie(){const n=new K,i=new L(new it(20,12),new rt({uniforms:{opacity:{value:0},exchange:{value:0}},transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:ct,fragmentShader:`
      uniform float opacity;
      uniform float exchange;
      varying vec2 surface;
      void main() {
        vec2 p = (surface - .5) * vec2(1., 1.6);
        float halo = exp(-9.4 * dot(p, p));
        float center = exp(-30. * dot(p, p));
        vec3 color = mix(vec3(.018, .087, .112), vec3(.037, .211, .157), exchange);
        gl_FragColor = vec4(color * (halo * .66 + center * .27), halo * opacity * .82);
        #include <colorspace_fragment>
      }
    `}));i.position.y=-.28,i.rotation.x=-Math.PI/2,n.add(i);const r=new ht({color:"#101e26",metalness:.74,roughness:.32,clearcoat:.64,transparent:!0,depthWrite:!1}),e=new L(new H(J+q*6+.4,.19,2.8,3,.087),r);e.position.set(0,-.075,.47),n.add(e);const o=new Mt({color:"#318091",transparent:!0,depthWrite:!1,toneMapped:!1}),m=new L(new H(J+q*6+.14,.027,.035,2,.009),o);m.position.set(0,-.047,1.84),n.add(m);const u=new Yt({color:"#13262a",metalness:.64,roughness:.38,transparent:!0,depthWrite:!1});for(const{width:v,x:h}of C){const w=new L(new H(v+.035,.083,.83,2,.037),u);w.position.set(h,.039,st),n.add(w)}return{group:n,floor:i,deckMaterial:r,edgeMaterial:o,plateMaterial:u}}function re(){const{width:n,x:i}=C[z],r=new xt(new Ut(n+.23,G+.27,.68)),e=new Xt({color:"#adf6e4",dashSize:.089,gapSize:.062,transparent:!0,depthWrite:!1,toneMapped:!1}),o=new bt(r,e);return o.computeLineDistances(),o.position.set(i,Et,st),o}function se(n){const i=1-c(n,.75,1.37),r=c(n,1.1,1.52);return Z.map(e=>{const o=new $(e.x,e.y,e.z),m=l(e.width,e.narrow,i),u=e.fov+i*6,v=m/(2*Math.tan(Kt(u/2))*n),h=Math.sin(e.yaw)*Math.cos(e.pitch),w=Math.sin(e.pitch),Q=Math.cos(e.yaw)*Math.cos(e.pitch);return{focus:o,fov:u,position:new $(h,w,Q).multiplyScalar(v).add(o),right:l(e.mobileRight??0,e.right,r),lift:l(e.lift,e.mobileLift,i)}})}function de(n,i){const r=new zt({canvas:n,context:i,alpha:!0,antialias:!0,powerPreference:"high-performance"});r.setClearColor("#030a11",0),r.toneMapping=Ht,r.toneMappingExposure=1.12;const e=new Bt,o=new Vt(40,1,.05,100),m=new Gt,u=new Ot(r),v=u.fromScene(m,.065);m.dispose(),u.dispose(),e.environment=v.texture,e.environmentIntensity=.66;const h=new dt("#d0fff6",2.38);h.position.set(-4,7.5,6.7);const w=new dt("#4cb2ff",1.54);w.position.set(6,4.2,-6);const Q=new Nt("#bdf5ff","#111e24",.6),tt=At(),W=ie(),et=re(),k=C.map(({width:t},a)=>vt(t,a)),S=vt(C[z].width,z),B=k[z],lt=C.map(({width:t,x:a},s)=>ae(t,a,k[s].pigment)),T=new K;T.add(W.group,et,...k.map(({group:t})=>t),S.group,...lt.map(({group:t})=>t)),e.add(h,w,Q,tt.group,T);const pt=new $,ft=new $,mt=new qt,ut=new Jt,Lt=[...k.map(({body:t})=>t),S.body];let V,M=0;function kt(t,a){if(t<1||a<1)return;o.aspect=t/a,V=se(o.aspect);const s=n.ownerDocument?.defaultView?.devicePixelRatio||1;r.setPixelRatio(Math.min(s,t<720?1.25:1.5)),r.setSize(t,a,!1)}function Rt(t,a,s){const p=Math.max(1,Z.findIndex(({at:j})=>t<=j)),f=V[p-1],x=V[p],b=c(t,Z[p-1].at,Z[p].at);o.position.copy(f.position).lerp(x.position,b),o.position.x+=a*.3,o.position.y+=s*.17,pt.copy(f.focus).lerp(x.focus,b),o.fov=l(f.fov,x.fov,b),o.updateProjectionMatrix(),o.projectionMatrix.elements[8]-=l(f.right,x.right,b)*2,o.projectionMatrix.elements[9]-=l(f.lift,x.lift,b)*2,o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.lookAt(pt),o.updateMatrixWorld()}function ot(t,a,s,p,f,x,b,j,R,E){const{x:d,width:A}=C[a],I=jt[a];if(t.group.visible=p>.006,!t.group.visible)return;t.group.position.set(l(I.x*10.6,d,s)+x,l(I.y*10.6+.44,Et,s)+Math.sin(s*Math.PI)*.36+b,l(.14+a*.024,st,s)+j),t.group.rotation.set(R*-.22,R,R*.13),t.group.scale.set(l(I.width*10.6/A,1,s),l(I.height*10.6/G,1,s),l(.27,1,s));const{pigment:y,material:P,edges:N,face:D,crown:_}=t;P.color.copy(y).multiplyScalar(.14+f*.27),P.emissive.copy(y),P.emissiveIntensity=.038+f*.15,P.opacity=p,P.depthWrite=p>.92,N.material.color.copy(y).lerp(gt,f*.37),N.material.opacity=p*l(.3,.88,f),D.material.uniforms.tint.value.copy(y),D.material.uniforms.opacity.value=p*c(s,.13,.77),D.material.uniforms.energy.value=.62+f*.96,D.material.uniforms.signature.value=E,_.material.color.copy(y).lerp(gt,.37+f*.44),_.material.opacity=p*c(s,.19,.72)}function It({phase:t,exchange:a=0,active:s,pointerX:p=0,pointerY:f=0,cycle:x=0}){if(!V)return;Rt(t,p,f),M=c(t,.201,.387)*(1-c(t,.851,.972));const b=c(t,.14,.33)*(1-c(t,.91,.972)),j=1-c(M,.02,.73);if(tt.render({progress:b,opacity:j}),T.visible=M>.002,T.visible){const R=c(M,.08,.6),E=c(M,.32,.96),d=c(t,.51,.58)*(1-c(t,.76,.825)),A=Qt(x,U.length),I=(A+1)%U.length,y=c(a,.015,.54),P=c(a,.46,.98),N=1-c(a,.51,.77),D=c(a,.25,.56),_=c(a,.1,.39)*(1-c(a,.65,.94)),Tt=a>=.5?S:B;W.floor.material.uniforms.opacity.value=E,W.floor.material.uniforms.exchange.value=d,W.deckMaterial.opacity=E*.95,W.edgeMaterial.opacity=E*(.46+d*.2),W.plateMaterial.opacity=E,et.visible=d*_>.006,et.material.opacity=d*_*.67;for(let g=0;g<k.length;g++){const Dt=k[g],F=lt[g].material.uniforms,nt=s===g?.85:.42,_t=nt*(1-d*.68);if(g===z){B.pigment.copy(U[A]).lerp(ee,d*(1-c(a,.62,1))),S.pigment.copy(U[I]).lerp(oe,d*c(a,.18,.56)),ot(B,g,M,R*N,l(nt,.99,d),-2.65*y,2.54*Math.sin(y*1.4),1.24*y,-.58*y,A);const Y=1-P;ot(S,g,M,R*D,l(nt,1,d),2.52*Y,2.62*Math.sin(Y*1.32),.79*Y,.53*Y,I),F.tint.value.copy(Tt.pigment),F.signal.value=l(.2,.92,a),F.opacity.value=E*(.93-_*.54)}else ot(Dt,g,M,R,_t,0,0,0,0,g%3),F.opacity.value=E*(.82-d*.45+(s===g?.17:0)),F.signal.value=s===g?.38:-1}}r.render(e,o)}function Pt(t,a){const s=t==="incoming"?S:t==="outgoing"?B:a===z&&S.group.visible?S:k[a];return!T.visible||!s?.group.visible?null:(ft.set(0,t==="holding"?.82:G/2,.12),s.group.localToWorld(ft).project(o))}function Ct(t,a){return M<.92?null:(mt.set(t,a),ut.setFromCamera(mt,o),ut.intersectObjects(Lt,!1).find(({object:p})=>p.parent.visible)?.object.userData.holding??null)}function Wt(){tt.dispose(),T.traverse(t=>{t.geometry?.dispose(),t.material?.dispose()}),v.dispose(),r.dispose()}return{resize:kt,render:It,project:Pt,pick:Ct,dispose:Wt}}export{de as createReviewWorld};
