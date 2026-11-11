import{b as K,C as Q,c as X,a as Z,d as $}from"./emblem-colors-WDDgIgsw.js";import{G as D,V as z,b as R,t as T,u as tt,p as Y,q as k,r as q,M as I,v as U,a as et,C as L,h as ot}from"./three-core-DH7zQUZE.js";const{clamp:W,lerp:O,smoothstep:N}=ot,B=10.6,H=.44,G=5,S=[[-.78,.5],[.78,.5],[1,.29],[1,-.29],[.78,-.5],[-.78,-.5],[-1,-.29],[-1,.29]];function J(){return new R({uniforms:{opacity:{value:1},emphasis:{value:0}},side:T,vertexColors:!0,transparent:!0,forceSinglePass:!0,toneMapped:!1,vertexShader:`
      varying vec3 pigment;
      varying vec3 surface;
      varying vec3 viewer;
      void main() {
        vec4 point = modelViewMatrix * vec4(position, 1.);
        pigment = color;
        surface = normalMatrix * normal;
        viewer = -point.xyz;
        gl_Position = projectionMatrix * point;
      }
    `,fragmentShader:`
      uniform float opacity;
      uniform float emphasis;
      varying vec3 pigment;
      varying vec3 surface;
      varying vec3 viewer;
      void main() {
        vec3 n = normalize(surface) * (gl_FrontFacing ? 1. : -1.);
        vec3 v = normalize(viewer);
        vec3 l = normalize(vec3(-.52, .64, .74));
        float face = max(0., dot(n, v));
        float rim = pow(1. - face, 2.);
        float gloss = pow(max(0., dot(n, normalize(v + l))), 34.);
        float light = .54 + face * .34 + max(0., dot(n, l)) * .15 + rim * .20;
        vec3 finish = pigment * (light + emphasis) + vec3(.049) * (gloss + rim * .19);
        gl_FragColor = vec4(finish, opacity);
        #include <colorspace_fragment>
      }
    `})}function nt(e,u){const p=X[e].map(([l,o])=>[l,new L(o)]),s=new Float32Array(u*S.length*3),c=new L;let i=1;for(let l=0;l<u;l++){const o=l/(u-1);for(;o>p[i][0];)i++;const[d,w]=p[i-1],[t,m]=p[i];c.copy(w).lerp(m,(o-d)/(t-d));for(let r=0;r<S.length;r++){const h=r<2?1:.8;s.set([c.r*h,c.g*h,c.b*h],(l*S.length+r)*3)}}return s}function st(e,u,p){const c=new tt(e.map(({x:a,y:g,width:f})=>new z(a*B,g*B+H,f*B))).getPoints(96),i=c.map(()=>new z),l=new Float32Array(c.length*S.length*3),o=new Y,d=[];for(let a=0;a<c.length-1;a++)for(let g=0;g<S.length;g++){const f=a*S.length+g,n=a*S.length+(g+1)%S.length;d.push(f,f+S.length,n+S.length,f,n+S.length,n)}o.setIndex(d),o.setAttribute("position",new k(l,3).setUsage(q)),o.setAttribute("color",new k(nt(u,c.length),3));const w=new I(o,p);w.frustumCulled=!1;const t=new z,m=new z,r=new z,h=new z;let P=-1;function A(a){if(a===P)return;P=a;const g=u-2.5;for(const[f,n]of c.entries()){const M=f/(c.length-1),v=Math.sin(Math.PI*M),_=a*v;i[f].set(n.x+_*g*.2,n.y+_*Math.sin(6*M-.4)*g*.34,g*-.049+_*(Math.cos(M*5.8-.7)*1.35+g*.23))}for(const[f,n]of i.entries()){const M=f/(i.length-1),v=Math.sin(Math.PI*M);h.set(0,Math.sin(M*6-.6)*a*.64,1),t.copy(i[Math.min(f+1,i.length-1)]).sub(i[Math.max(f-1,0)]).normalize(),m.crossVectors(h,t).normalize(),r.crossVectors(t,m).normalize();const _=c[f].z*(.54+.72*a*v),E=(.045+.071*v)*(1+a*.52);for(const[F,[V,b]]of S.entries()){const y=(f*S.length+F)*3,C=V*_,x=b*E;l[y]=n.x+m.x*C+r.x*x,l[y+1]=n.y+m.y*C+r.y*x,l[y+2]=n.z+m.z*C+r.z*x}}o.attributes.position.needsUpdate=!0,o.computeVertexNormals()}return A(0),{mesh:w,centers:i,render:A}}function j(e,u,p,s,c,i){const l=new Z(e,u,p,3,s),{position:o}=l.attributes,d=new Float32Array(o.count*3),[w,t]=c.map(r=>new L(r)),m=new L;for(let r=0;r<o.count;r++)m.copy(w).lerp(t,W(.5+o.getY(r)/u,0,1)).toArray(d,r*3);return l.setAttribute("color",new k(d,3)),new I(l,i)}function rt(e,u){const p=new D,s=J(),c=(e.stemTop-e.stemBottom)*B,i=$[u],l=j(e.stemWidth*B,c,.065,.011,i,s),o=j(e.width*B,e.height*B,.195,.026,i,s),d=(e.stemBottom-e.y)*B,w=e.y*B+H;return p.position.set(e.x*B,w,.14+u*.024),l.position.set(0,d+c/2,-.028),p.add(l,o),{group:p,material:s,baseY:w,wickBottom:d}}function at(e,u){const p=new D,s=65,c=new Float32Array(s*6),i=new Float32Array(s*4),l=[],o=Array.from({length:s},()=>new z);for(let n=0;n<s;n++){const M=n/(s-1);i.set([M,0,M,1],n*4);const v=n*2;n<s-1&&l.push(v,v+2,v+1,v+1,v+2,v+3)}const d=new Y;d.setIndex(l),d.setAttribute("position",new k(c,3).setUsage(q)),d.setAttribute("uv",new k(i,2));const w=new R({uniforms:{head:{value:0},strength:{value:0}},side:T,transparent:!0,depthWrite:!1,blending:U,vertexShader:`
      varying vec2 coord;
      void main() {
        coord = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
      }
    `,fragmentShader:`
      uniform float head;
      uniform float strength;
      varying vec2 coord;
      void main() {
        float trail = head - coord.x;
        float fade = smoothstep(-.03, .014, trail) * (1. - smoothstep(.19, .72, trail));
        float core = pow(1. - abs(coord.y * 2. - 1.), 2.3);
        gl_FragColor = vec4(vec3(.23, .95, .87), strength * core * fade);
        #include <colorspace_fragment>
      }
    `}),t=new I(d,w);t.frustumCulled=!1,t.renderOrder=6;const m=new R({uniforms:{strength:{value:0}},transparent:!0,depthWrite:!1,blending:U,vertexShader:`
      varying vec2 coord;
      void main() {
        coord = uv;
        vec4 center = modelViewMatrix * vec4(0., 0., 0., 1.);
        center.xy += position.xy;
        gl_Position = projectionMatrix * center;
      }
    `,fragmentShader:`
      uniform float strength;
      varying vec2 coord;
      void main() {
        float distance = length(coord - .5) * 2.;
        float halo = exp(-4.5 * distance) * (1. - smoothstep(.63, 1., distance));
        float center = 1. - smoothstep(.021, .115, distance);
        gl_FragColor = vec4(mix(vec3(.03, .63, .77), vec3(.72, 1., .92), center),
          strength * (halo * .6 + center * .74));
        #include <colorspace_fragment>
      }
    `}),r=new I(new et(.67,.67),m);r.frustumCulled=!1,r.renderOrder=7,p.add(t,r);const h=new z,P=new z,A=new z,a=e.centers.findIndex(n=>n.x>u.group.position.x),g=Math.floor((e.centers.length-a)*.69)+a;function f(n,M,v){const _=N(n,.24,.35)*Math.min(1,Math.abs(M))*v;if(p.visible=_>.001,h.copy(u.group.position),h.y+=u.wickBottom+.03,h.z+=.1,!p.visible){r.position.copy(h);return}const E=O(.025,1,N(n,.26,.94));w.uniforms.head.value=E,w.uniforms.strength.value=_,m.uniforms.strength.value=_;const F=e.centers[a];P.set(h.x-.2,O(h.y,F.y,.73),O(h.z,F.z,.34)+.09);for(let b=0;b<s;b++){const y=b/(s-1),C=o[b];if(y<.32){const x=y/.32;C.copy(h).multiplyScalar((1-x)**2).addScaledVector(P,2*(1-x)*x).addScaledVector(F,x*x),C.z+=x*.17}else{const x=O(a,g,(y-.32)/.68);C.copy(e.centers[Math.floor(x)]).lerp(e.centers[Math.ceil(x)],x%1),C.z+=.17}}for(let b=0;b<s;b++){const y=o[b];A.copy(o[Math.min(b+1,s-1)]).sub(o[Math.max(b-1,0)]).normalize();const C=.045;c.set([y.x-A.y*C,y.y+A.x*C,y.z,y.x+A.y*C,y.y-A.x*C,y.z],b*6)}d.attributes.position.needsUpdate=!0;const V=E*(s-1);r.position.copy(o[Math.floor(V)]).lerp(o[Math.ceil(V)],V%1)}return p.visible=!1,{group:p,render:f,spark:r}}function lt(){const e=new D;e.name="Lattice emblem";const u=J(),p=K.map((t,m)=>st(t,m,u)),s=Q.map(rt),c=s[G],i=at(p[0],c);e.add(...p.map(({mesh:t})=>t),...s.map(t=>t.group),i.group);function l({progress:t,move:m=0,opacity:r=1}){const h=N(t,.53,1),P=N(t,.14,.35),A=W(m,-1,1),a=W(r,0,1);e.visible=a>.001,u.uniforms.opacity.value=a,u.depthWrite=a>.98,p.forEach(g=>g.render(h)),s.forEach(({group:g,baseY:f,material:n},M)=>{const v=M===G;g.position.y=f+(v?A*P*.72:0),n.uniforms.opacity.value=(v?1:1-P*.46)*a,n.uniforms.emphasis.value=v?P*.22:0,n.depthWrite=a>.98}),i.render(t,A,a)}function o(t=new z){return c.group.getWorldPosition(t)}function d(t=new z){return i.spark.getWorldPosition(t)}function w(){const t=new Set;e.traverse(m=>{m.isMesh&&t.add(m.geometry).add(m.material)}),t.forEach(m=>m.dispose())}return{group:e,render:l,getCompanyPoint:o,getTracePoint:d,dispose:w}}export{lt as c};
