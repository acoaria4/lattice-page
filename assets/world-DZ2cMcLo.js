import{a as $,W as Pe,P as Se,R as Ce,C as Re}from"./emblem-colors-WDDgIgsw.js";import{c as Ue}from"./emblem-world-BMnlDwjr.js";import{M as B,C as Q,j as se,W as De,k as Ee,b as ne,U as We,V as R,l as je,m as oe,G as J,E as _e,a as de,c as te,d as ie,g as ze,f as Fe,i as ve,n as Ae,o as Te,p as Ve,q as ce,r as Ge,s as Ie,h as ge,A as Oe,S as Be,P as Le,D as le,H as Ne,R as He}from"./three-core-DH7zQUZE.js";class Z extends B{constructor(n,e={}){super(n),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;const u=this,f=e.color!==void 0?new Q(e.color):new Q(8355711),T=e.textureWidth||512,F=e.textureHeight||512,_=e.clipBias||0,M=e.shader||Z.ReflectorShader,E=e.multisample!==void 0?e.multisample:4,w=new je,x=new R,W=new R,d=new R,v=new se,g=new R(0,0,-1),r=new oe,h=new R,j=new R,s=new oe,p=new se,c=new De(T,F,{samples:E,type:Ee}),y=new ne({name:M.name!==void 0?M.name:"unspecified",uniforms:We.clone(M.uniforms),fragmentShader:M.fragmentShader,vertexShader:M.vertexShader});y.uniforms.tDiffuse.value=c.texture,y.uniforms.color.value=f,y.uniforms.textureMatrix.value=p,this.material=y,this.onBeforeRender=function(i,o,b){const l=this.getReflectionCamera(b);if(W.setFromMatrixPosition(u.matrixWorld),d.setFromMatrixPosition(b.matrixWorld),v.extractRotation(u.matrixWorld),x.set(0,0,1),x.applyMatrix4(v),h.subVectors(W,d),h.dot(x)>0===!0&&this.forceUpdate===!1)return;h.reflect(x).negate(),h.add(W),v.extractRotation(b.matrixWorld),g.set(0,0,-1),g.applyMatrix4(v),g.add(d),j.subVectors(W,g),j.reflect(x).negate(),j.add(W),l.position.copy(h),l.up.set(0,1,0),l.up.applyMatrix4(v),l.up.reflect(x),l.lookAt(j),l.far=b.far,l.updateMatrixWorld(),l.projectionMatrix.copy(b.projectionMatrix),l.projectionMatrix.elements[8]*=-1,l.projectionMatrix.elements[12]*=-1,p.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),p.multiply(l.projectionMatrix),p.multiply(l.matrixWorldInverse),p.multiply(u.matrixWorld),w.setFromNormalAndCoplanarPoint(x,W),w.applyMatrix4(l.matrixWorldInverse),r.set(w.normal.x,w.normal.y,w.normal.z,w.constant);const m=l.projectionMatrix;l.isOrthographicCamera?(s.x=(Math.sign(r.x)+m.elements[8])/m.elements[0],s.y=(Math.sign(r.y)+m.elements[9])/m.elements[5],s.z=-b.far,s.w=1):(s.x=(Math.sign(r.x)+m.elements[8])/m.elements[0],s.y=(Math.sign(r.y)+m.elements[9])/m.elements[5],s.z=-1,s.w=(1+m.elements[10])/m.elements[14]),r.multiplyScalar(2/r.dot(s)),m.elements[2]=r.x,m.elements[6]=r.y,l.isOrthographicCamera?(m.elements[10]=r.z-_,m.elements[14]=r.w-1):(m.elements[10]=r.z+1-_,m.elements[14]=r.w),u.visible=!1;const P=i.getRenderTarget(),I=i.xr.enabled,S=i.shadowMap.autoUpdate;i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,i.setRenderTarget(c),i.state.buffers.depth.setMask(!0),i.autoClear===!1&&i.clear(),i.render(o,l),i.xr.enabled=I,i.shadowMap.autoUpdate=S,i.setRenderTarget(P);const O=b.viewport;O!==void 0&&i.state.viewport(O),u.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return c},this.dispose=function(){c.dispose(),u.material.dispose()},this.getReflectionCamera=function(i){let o=this._reflectionCameras.get(i);return o===void 0&&(o=i.clone(),this._reflectionCameras.set(i,o)),o}}}Z.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const{clamp:fe,lerp:A,smoothstep:Xe}=ge,ye=["#0dd8ad","#0fc7bc","#0ac1e9","#20b2df","#0da0dc","#0f78eb","#1877d7"],ue=Object.freeze(Array(7).fill(1/7)),qe=[[-4.42,1.12],[-1.97,-.87],[-.52,-1.57],[.89,-2.09],[2.22,-2.55],[3.55,-3.04],[4.87,-3.63]],N={x:1.68,z:3.35,span:2.26},z=[[-1,.08],[-.86,1],[.86,1],[1,.08],[1,0],[-1,0]],Ye=new Q("#e7ffff"),he=`
  varying vec2 surface;
  void main() {
    surface = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;function H(t,n,e){return Xe(t,n,e)}function $e(){const t=new Ae;return[[-.41,-.43],[.41,-.43],[.45,-.39],[.45,.37],[.38,.44],[-.38,.44],[-.45,.37],[-.45,-.39]].forEach(([e,u],f)=>f?t.lineTo(e,u):t.moveTo(e,u)),t.closePath(),new Te(t,{depth:.48,bevelEnabled:!0,bevelSegments:1,bevelThickness:.06,bevelSize:.05,curveSegments:1,steps:1}).translate(0,0,-.24)}function Qe(){const t=new de(49,46),n=new Z(t,{textureWidth:720,textureHeight:420,multisample:0,clipBias:.001,color:"#070c12",shader:{name:"Lattice satin reflection",uniforms:{...Z.ReflectorShader.uniforms,opacity:{value:0},focus:{value:new ve(-4.42,1.12)},focusColor:{value:new Q(ye[0])}},vertexShader:`
        uniform mat4 textureMatrix;
        varying vec4 projection;
        varying vec2 floorPoint;
        void main() {
          projection = textureMatrix * vec4(position, 1.0);
          floorPoint = position.xy * vec2(1.0, -1.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform sampler2D tDiffuse;
        uniform float opacity;
        uniform vec2 focus;
        uniform vec3 focusColor;
        varying vec4 projection;
        varying vec2 floorPoint;
        float grain(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        void main() {
          vec2 uv = projection.xy / projection.w;
          float noise = grain(floor(floorPoint * 127.0));
          vec2 stepUV = vec2(0.005, 0.008) * (0.83 + noise * 0.34);
          vec3 reflection = texture2D(tDiffuse, uv).rgb * 0.27;
          reflection += texture2D(tDiffuse, uv + stepUV).rgb * 0.20;
          reflection += texture2D(tDiffuse, uv - stepUV).rgb * 0.20;
          reflection += texture2D(tDiffuse, uv + vec2(stepUV.x, -stepUV.y) * 1.5).rgb * 0.165;
          reflection += texture2D(tDiffuse, uv + vec2(-stepUV.x, stepUV.y) * 1.5).rgb * 0.165;
          vec2 falloff = (floorPoint - vec2(0.1, 0.1)) / vec2(9.4, 8.0);
          vec2 lamp = (floorPoint - focus) * vec2(1.22, 0.86);
          vec2 receiverSpill = (floorPoint - vec2(1.68, 3.52)) * vec2(0.55, 1.47);
          float spill = exp(-dot(lamp, lamp)) * 0.068;
          float plane = exp(-dot(falloff, falloff));
          vec3 area = vec3(0.002, 0.007, 0.009) * plane;
          area += vec3(0.002, 0.017, 0.014) * exp(-dot(receiverSpill, receiverSpill));
          reflection = min(reflection, vec3(0.21, 0.30, 0.36));
          vec3 tint = color * (0.77 + noise * 0.16) + reflection * 0.31 + focusColor * spill + area;
          gl_FragColor = vec4(tint, plane * opacity);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `}});return n.rotation.x=-Math.PI/2,n.position.y=-.045,n.material.transparent=!0,n.material.depthWrite=!1,n.renderOrder=-3,n}function Ze(t){const n=new Ve,e=37,u=new Float32Array(e*z.length*3),f=new Float32Array(e*z.length*2),T=[];for(let d=0;d<e;d++)for(let v=0;v<z.length;v++){const g=d*z.length+v;if(f[g*2]=z[v][0],f[g*2+1]=d/(e-1),d===e-1)continue;const r=d*z.length+(v+1)%z.length;T.push(g,g+z.length,r,r,g+z.length,r+z.length)}n.setAttribute("position",new ce(u,3).setUsage(Ge)),n.setAttribute("uv",new ce(f,2)),n.setIndex(T);const F=new ne({transparent:!0,toneMapped:!1,uniforms:{tint:{value:t},energy:{value:0},alpha:{value:0},pulse:{value:-1}},vertexShader:he,fragmentShader:`
      uniform vec3 tint;
      uniform float energy;
      uniform float alpha;
      uniform float pulse;
      varying vec2 surface;
      void main() {
        float edge = smoothstep(0.74, 0.99, abs(surface.x));
        float polish = 1.0 - smoothstep(0.01, 0.23, abs(surface.x + 0.43));
        float distance = (surface.y - pulse) * 21.0;
        float running = exp(-distance * distance) * step(0.0, pulse);
        float join = 0.82 + pow(surface.y, 7.0) * 0.21;
        vec3 jewel = tint * ((0.075 + edge * 0.42 + polish * 0.11) * energy + running * 0.79) * join;
        jewel += vec3(0.42, 0.78, 0.71) * (running * 0.45 + edge * pow(energy, 2.0) * 0.08);
        gl_FragColor = vec4(jewel, alpha * (0.45 + energy * 0.48));
        #include <colorspace_fragment>
      }
    `}),_=new B(n,F);_.frustumCulled=!1;const M=new Ie(new R,new R,new R,new R),E=new R,w=new R,x=new oe(NaN,NaN,NaN,NaN);function W(d,v,g,r){if(!(d===x.x&&v===x.y&&g===x.z&&r===x.w)){x.set(d,v,g,r),M.v0.set(d,.024,v+.44),M.v1.set(d+(r-d)*.04,.024,v+(N.z-v)*.86),M.v2.set(r+(d-r)*.07,.024,N.z-1.37),M.v3.set(r,.025,N.z-.3);for(let h=0;h<e;h++){const j=h/(e-1);M.getPoint(j,E),M.getTangent(j,w);const s=A(.96,.75,j**3);for(let p=0;p<z.length;p++){const c=z[p],y=(h*z.length+p)*3,i=c[0]*g*s*.5;u[y]=E.x+w.z*i,u[y+1]=E.y+c[1]*.074,u[y+2]=E.z-w.x*i}}n.attributes.position.needsUpdate=!0,n.computeBoundingSphere()}}return{mesh:_,material:F,update:W}}function Je(){const t=new J;t.name="Trace the move sculpture";const n=Qe();t.add(n);const e=$e(),u=new $(.078,1.02,.08,2,.035),f=new _e(e,14),T=new $(1.34,.13,1.05,2,.042),F=new $(1.19,.052,.91,2,.018),_=new de(.91,.93),M=[],E=qe.map(([s,p],c)=>{const y=new Q(ye[c]),i=new J,o=new J;o.position.set(s,0,p),t.add(o,i);const b=new te({color:"#0a1823",emissive:y,emissiveIntensity:.03,roughness:.28,metalness:.58,transparent:!0,clearcoat:.62,envMapIntensity:.44}),l=new B(T,b);l.position.y=.046;const G=new ie({color:y,transparent:!0,toneMapped:!1}),m=new B(F,G);m.position.y=.122,o.add(l,m);const P=new te({color:y.clone().multiplyScalar(.21),metalness:.48,roughness:.24,clearcoat:.62,clearcoatRoughness:.16,transparent:!0,emissive:y,emissiveIntensity:.021,envMapIntensity:.48,specularIntensity:.58,opacity:.95}),I=new B(e,P),S=new B(u,P);S.position.set(0,.11,-.056),i.add(S,I);const O=new ze({color:y,transparent:!0,depthWrite:!1,toneMapped:!1});i.add(new Fe(f,O));const a=new ne({uniforms:{tint:{value:y},energy:{value:0},opacity:{value:0}},transparent:!0,depthWrite:!1,toneMapped:!1,vertexShader:he,fragmentShader:`
        uniform vec3 tint;
        uniform float energy;
        uniform float opacity;
        varying vec2 surface;
        void main() {
          float mask = smoothstep(0.0, 0.042, min(surface.x, 1.0 - surface.x));
          mask *= smoothstep(0.0, 0.038, surface.y) * (1.0 - smoothstep(0.94, 1.0, surface.y));
          float core = exp(-pow((surface.x - 0.54) * 2.8, 2.0) - pow((surface.y - 0.08) * 3.6, 2.0));
          float rim = exp(-abs(surface.x - 0.09) * 24.0) * (0.29 + core * 0.78);
          float window = exp(-abs(surface.x + surface.y * 0.57 - 0.93) * 5.7) * 0.10;
          vec3 glass = tint * (core * 0.83 + rim * 0.5 + window);
          glass += vec3(0.39, 0.85, 0.72) * pow(core, 5.0) * 0.42;
          gl_FragColor = vec4(glass * energy, opacity * mask * (0.34 + core * 0.62));
          #include <colorspace_fragment>
        }
      `}),C=new B(_,a);C.position.z=.301,C.renderOrder=1,i.add(C);const U=Ze(y);t.add(U.mesh);for(const D of[I,l,U.mesh])D.userData.company=c,M.push(D);return{x:s,z:p,color:y,crystal:i,stand:o,stem:S,baseMaterial:b,lipMaterial:G,bodyMaterial:P,edgeMaterial:O,innerMaterial:a,ribbon:U}}),w=new J;w.position.set(N.x,.084,N.z),t.add(w);const x=new te({color:"#14252e",metalness:.6,roughness:.28,transparent:!0,clearcoat:.62,envMapIntensity:.42}),W=new ie({color:"#47f4e2",transparent:!0,toneMapped:!1}),d=new B(new $(2.56,.19,.68,3,.061),x),v=new B(new $(2.2,.042,.31,2,.019),W);v.position.y=.102,w.add(d,v);function g({progress:s=1,weights:p=ue,move:c=-.1,selected:y,hovered:i,pulse:o,entryCandles:b}={}){if(t.visible=s>.002,!t.visible)return;const l=i??y??0,G=H(s,.08,.71),m=H(s,.33,.91),P=H(s,.47,.87),I=typeof o=="number"?1-fe(o,0,1):-1;n.visible=P>.005,n.material.uniforms.opacity.value=P*.98;const S=E[l]??E[0];n.material.uniforms.focus.value.set(S.x,S.z),n.material.uniforms.focusColor.value.copy(S.color),w.visible=P>.006,x.opacity=P,W.opacity=P*(.76+(I>.88?(I-.88)*1.8:0)),w.scale.y=A(.53,1,P);let O=N.x-N.span*.5;E.forEach((a,C)=>{const U=b?.[C],D=U?H(s,.09+C*.012,.77+C*.017):1,X=H(s,.006,U?.18:.4),q=C===l,L=A(.46,q?1:.27,m),Y=2.28*(C===0?1+fe(c,-.35,.35):1),ae=.14+Y*.48,xe=U?.x??a.x,be=U?.y??ae,Me=U?.z??a.z;a.crystal.position.set(A(xe,a.x,D),A(be,ae,D)+Math.sin(D*Math.PI)*.26,A(Me,a.z,D)),a.crystal.scale.set(A(U?.width??1.05,1.05,D),A(U?.height??Y,Y,D),A(.03,1,G)),a.crystal.rotation.y=-.12*D,a.stand.visible=P>.006,a.stand.scale.y=A(.55,1,P),a.baseMaterial.opacity=P,a.lipMaterial.opacity=P*(.19+L*.46),a.bodyMaterial.opacity=X*.98,a.bodyMaterial.color.copy(a.color).multiplyScalar(.18+L*.23),a.bodyMaterial.emissiveIntensity=A(U?.53:.07,.019+L*.063,G),a.edgeMaterial.opacity=X*G*(.18+L*.41),a.edgeMaterial.color.copy(a.color).lerp(Ye,L*.29),a.innerMaterial.uniforms.energy.value=L,a.innerMaterial.uniforms.opacity.value=X*G;const ee=N.span*(p[C]??ue[C]),re=H(s,.38+C*.015,.84+C*.013);a.ribbon.mesh.visible=re>.006,a.ribbon.mesh.visible&&(a.ribbon.update(a.crystal.position.x,a.crystal.position.z,ee,O+ee*.5),a.ribbon.material.uniforms.alpha.value=re,a.ribbon.material.uniforms.energy.value=A(.5,q?1.05:.31,m),a.ribbon.material.uniforms.pulse.value=q?I:-1),O+=ee})}function r(s){return t.visible?s.intersectObjects(M,!1).find(({object:c})=>c.visible&&c.parent.visible)?.object.userData.company??null:null}function h(s,p=new R){const c=E[s];return c?(p.set(0,.56,.25),c.crystal.localToWorld(p)):null}function j(){const s=new Set,p=new Set;t.traverse(c=>{c.geometry&&s.add(c.geometry),c.material&&c!==n&&p.add(c.material)}),n.dispose(),s.forEach(c=>c.dispose()),p.forEach(c=>c.dispose()),t.removeFromParent()}return g({progress:0}),{group:t,render:g,pick:r,getCompanyPoint:h,dispose:j}}const{lerp:we,smoothstep:V,degToRad:Ke}=ge,K={position:[.1,.48,14.6],target:[-1.65,-.72,0],fov:38,width:11.4,lift:.093},pe={position:[.9,4.9,17.1],target:[-2.6,-.86,-.13],fov:40,width:12.5,lift:.1,tilt:.25},me={position:[1.45,3.85,17.7],target:[-2.66,-.28,-.28],fov:39,width:12.5,lift:.091,tilt:.26},k=[{at:0,...K},{at:.12,...K},{at:.25,position:[2.9,1.22,6.15],target:[.19,.15,0],fov:41,width:4.9,lift:.075},{at:.315,position:[2.64,1.02,5.72],target:[.22,.02,0],fov:43,width:4.7,lift:.083},{at:.395,position:[.12,-.37,2.57],target:[-.08,-.66,-.34],fov:49,width:2.1,lift:.015},{at:.52,...pe},{at:.605,...pe},{at:.7,...me},{at:.83,...me},{at:.905,position:[-2.1,.08,4.25],target:[-.45,-.39,-.24],fov:45,width:3.65,lift:.058},{at:.97,...K},{at:1,...K}],ke=[5,0,1,2,3,4,6].map((t,n)=>{const e=Re[t];return{x:e.x*10.6,y:e.y*10.6+.44-(n===0?.72:0),z:.14+t*.024,width:e.width*10.6,height:e.height*10.6,color:e.color}});function et(t,n){const e=1-V(n,.72,1.3),u=t.fov+9*e,f=Math.tan(Ke(u/2)),T=t.width/(2*f*n*.91),F=Math.max(t.position[2],T),_=2*F*f*t.lift*e;return{position:new R(t.position[0]*we(1,.48,e),t.position[1]-_+F*(t.tilt??0)*e,F),target:new R(t.target[0]*(1-e),t.target[1]-_,t.target[2]),fov:u}}function at(t,n){const e=new Pe({canvas:t,context:n,alpha:!0,antialias:!0,powerPreference:"high-performance"});e.setClearColor("#040811",0),e.toneMapping=Oe,e.toneMappingExposure=1.12;const u=new Be,f=new Le(39,1,.035,110),T=new R,F=new R,_=new ve,M=new He,E=new Se(e),w=new Ce,x=E.fromScene(w,.063);w.dispose(),E.dispose(),u.environment=x.texture,u.environmentIntensity=.54;const W=new le("#e5fff9",2.04);W.position.set(-4,8.4,8);const d=new le("#72f0e2",1.64);d.position.set(7,4,-7);const v=new Ne("#cce7ff","#122329",.68),g=Ue(),r=Je();u.add(W,d,v,g.group,r.group);let h=[],j=0;function s(o,b){f.aspect=o/b,h=k.map(l=>et(l,f.aspect)),e.setPixelRatio(Math.min(window.devicePixelRatio||1,o<750?1.25:1.5)),e.setSize(o,b,!1)}function p({phase:o,weights:b,selected:l,hovered:G,pointerX:m,pointerY:P,pulse:I}){const S=Math.max(1,k.findIndex(Y=>o<=Y.at)),O=k[S-1],a=k[S],C=V(o,O.at,a.at);f.position.copy(h[S-1].position).lerp(h[S].position,C),T.copy(h[S-1].target).lerp(h[S].target,C);const U=o>.91?V(o,.92,.97):1-V(o,.12,.25);f.position.x+=m*.24*U,f.position.y+=P*.16*U,f.fov=we(h[S-1].fov,h[S].fov,C),f.updateProjectionMatrix(),f.lookAt(T),f.updateMatrixWorld();const D=o>.83,X=D?1-V(o,.887,.968):V(o,.13,.404),q=D?V(o,.855,.936):1-V(o,.392,.468);j=D?1-V(o,.83,.934):V(o,.383,.542);const L=D&&o<.895?V(o,.834,.895):null;g.render({progress:X,move:-1,opacity:q}),r.render({progress:j,weights:b,move:-.1,selected:l,hovered:G,pulse:L??I,entryCandles:ke}),e.render(u,f)}function c(o,b){return j<.92?null:(_.set(o,b),M.setFromCamera(_,f),r.pick(M))}function y(o){return r.getCompanyPoint(o,F).project(f)}function i(){g.dispose(),r.dispose(),x.dispose(),e.dispose()}return{render:p,resize:s,pick:c,projectCompany:y,dispose:i}}export{at as createStoryWorld};
