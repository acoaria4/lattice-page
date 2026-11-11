import{x as Dt,y as ir,N as It,z as ar,C as Qe,I as rr,J as $e,K as We,m as vt,O as ri,j as Qt,Q as or,X as ha,Y as oi,W as yt,Z as et,_ as zt,k as Ot,t as Nt,$ as St,F as cn,V as Ge,a0 as sr,a1 as Vn,M as gt,B as pn,a2 as lr,a3 as Tn,a4 as fn,a5 as si,a6 as cr,a7 as fr,a8 as an,a9 as dr,aa as ur,ab as pr,ac as hr,ad as mr,ae as _r,af as gr,ag as vr,ah as Sr,ai as xr,aj as Er,ak as Mr,al as Tr,am as Ar,an as Rr,ao as br,ap as Wn,aq as wr,ar as Ln,as as wt,at as gn,au as Cr,av as Xt,aw as Pr,ax as Lr,ay as ma,az as Dr,aA as _a,aB as yr,aC as ga,aD as Ur,aE as Nr,aF as Ir,b as Jt,i as xt,p as va,q as Or,aG as xn,aH as Fr,aI as $t,aJ as sn,aK as jt,aL as dn,aM as Gt,aN as un,aO as Sa,aP as qt,aQ as li,aR as Br,aS as Gr,aT as Kt,aU as en,aV as Ke,aW as Hr,P as Dn,aX as Vr,aY as yn,aZ as Ht,a_ as Wr,a$ as kr,b0 as xa,b1 as zr,b2 as Zt,b3 as Fe,l as Xr,b4 as Ea,b5 as Ma,b6 as Ta,b7 as An,b8 as Aa,b9 as Ra,ba as Kr,bb as qr,bc as Yr,bd as Zr,be as $r,bf as Qr,bg as Jr,bh as jr,bi as ci,bj as eo,bk as En,bl as to,bm as fi,bn as di,v as ui,U as no,bo as pi,bp as io,bq as kn,a as ba,br as wa,bs as Ca,bt as Pa,bu as ao,bv as ro,bw as oo,bx as so,by as La,bz as lo,bA as co,bB as fo,bC as Un,bD as Nn,bE as In,bF as On,bG as hi,bH as mi,bI as _i,bJ as gi,bK as vi,bL as Si,bM as xi,bN as Ei,bO as Mi,bP as zn,bQ as Ti,bR as Ai,bS as Ri,bT as bi,bU as wi,bV as Ci,bW as Pi,bX as Li,bY as Di,bZ as yi,b_ as Ui,b$ as Ni,c0 as Ii,c1 as Oi,c2 as Fi,c3 as Bi,c4 as Gi,c5 as Hi,c6 as Vi,c7 as Wi,c8 as Xn,c9 as ki,ca as Da,cb as zi,cc as ya,cd as uo,ce as po,cf as Xi,cg as _t,ch as ho,ci as Ua,cj as Na,ck as Ia,A as Oa,cl as Fa,cm as Ba,cn as Ga,co as Fn,cp as Bn,cq as mo,cr as _o,cs as go,ct as vo,cu as So,cv as xo,cw as Eo,cx as Mo,cy as To,S as Ao,e as Ki,cz as Ro,cA as bo,cB as wo,cC as Co}from"./three-core-DH7zQUZE.js";function Ha(){let e=null,n=!1,t=null,i=null;function c(s,d){i=e.requestAnimationFrame(c),t(s,d)}return{start:function(){n!==!0&&t!==null&&e!==null&&(i=e.requestAnimationFrame(c),n=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(s){t=s},setContext:function(s){e=s}}}function Po(e){const n=new WeakMap;function t(p,D){const S=p.array,G=p.usage,N=S.byteLength,x=e.createBuffer();e.bindBuffer(D,x),e.bufferData(D,S,G),p.onUploadCallback();let v;if(S instanceof Float32Array)v=e.FLOAT;else if(typeof Float16Array<"u"&&S instanceof Float16Array)v=e.HALF_FLOAT;else if(S instanceof Uint16Array)p.isFloat16BufferAttribute?v=e.HALF_FLOAT:v=e.UNSIGNED_SHORT;else if(S instanceof Int16Array)v=e.SHORT;else if(S instanceof Uint32Array)v=e.UNSIGNED_INT;else if(S instanceof Int32Array)v=e.INT;else if(S instanceof Int8Array)v=e.BYTE;else if(S instanceof Uint8Array)v=e.UNSIGNED_BYTE;else if(S instanceof Uint8ClampedArray)v=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+S);return{buffer:x,type:v,bytesPerElement:S.BYTES_PER_ELEMENT,version:p.version,size:N}}function i(p,D,S){const G=D.array,N=D.updateRanges;if(e.bindBuffer(S,p),N.length===0)e.bufferSubData(S,0,G);else{N.sort((v,P)=>v.start-P.start);let x=0;for(let v=1;v<N.length;v++){const P=N[x],U=N[v];U.start<=P.start+P.count+1?P.count=Math.max(P.count,U.start+U.count-P.start):(++x,N[x]=U)}N.length=x+1;for(let v=0,P=N.length;v<P;v++){const U=N[v];e.bufferSubData(S,U.start*G.BYTES_PER_ELEMENT,G,U.start,U.count)}D.clearUpdateRanges()}D.onUploadCallback()}function c(p){return p.isInterleavedBufferAttribute&&(p=p.data),n.get(p)}function s(p){p.isInterleavedBufferAttribute&&(p=p.data);const D=n.get(p);D&&(e.deleteBuffer(D.buffer),n.delete(p))}function d(p,D){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const G=n.get(p);(!G||G.version<p.version)&&n.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const S=n.get(p);if(S===void 0)n.set(p,t(p,D));else if(S.version<p.version){if(S.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(S.buffer,p,D),S.version=p.version}}return{get:c,remove:s,update:d}}var Lo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Do=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,No=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Io=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Oo=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bo=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Go=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ho=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wo=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ko=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zo=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xo=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ko=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yo=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$o=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jo=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,es=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ts=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ns=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,is=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,as=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rs="gl_FragColor = linearToOutputTexel( gl_FragColor );",os=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ss=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ls=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cs=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fs=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ds=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,us=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ps=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hs=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ms=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_s=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gs=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vs=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ss=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xs=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Es=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ms=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ts=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,As=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rs=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bs=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ws=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cs=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ls=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ds=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ys=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Us=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ns=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Is=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Os=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fs=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bs=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gs=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hs=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vs=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ws=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ks=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zs=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xs=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ks=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qs=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ys=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$s=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qs=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Js=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,js=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,el=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,il=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,al=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ol=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ll=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ul=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ml=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_l=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vl=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,El=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ml=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tl=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Al=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ll=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yl=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ul=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Il=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ol=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fl=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bl=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Gl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vl=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wl=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zl=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xl=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kl=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ql=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yl=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zl=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$l=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ql=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jl=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jl=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ec=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ic=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ac=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oc=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Lo,alphahash_pars_fragment:Do,alphamap_fragment:yo,alphamap_pars_fragment:Uo,alphatest_fragment:No,alphatest_pars_fragment:Io,aomap_fragment:Oo,aomap_pars_fragment:Fo,batching_pars_vertex:Bo,batching_vertex:Go,begin_vertex:Ho,beginnormal_vertex:Vo,bsdfs:Wo,iridescence_fragment:ko,bumpmap_pars_fragment:zo,clipping_planes_fragment:Xo,clipping_planes_pars_fragment:Ko,clipping_planes_pars_vertex:qo,clipping_planes_vertex:Yo,color_fragment:Zo,color_pars_fragment:$o,color_pars_vertex:Qo,color_vertex:Jo,common:jo,defaultnormal_vertex:es,displacementmap_pars_vertex:ts,displacementmap_vertex:ns,emissivemap_fragment:is,emissivemap_pars_fragment:as,colorspace_fragment:rs,colorspace_pars_fragment:os,envmap_fragment:ss,envmap_common_pars_fragment:ls,envmap_pars_fragment:cs,envmap_pars_vertex:fs,envmap_physical_pars_fragment:Es,envmap_vertex:ds,fog_vertex:us,fog_pars_vertex:ps,fog_fragment:hs,fog_pars_fragment:ms,gradientmap_pars_fragment:_s,lightmap_pars_fragment:gs,lights_lambert_fragment:vs,lights_lambert_pars_fragment:Ss,lights_pars_begin:xs,lights_toon_fragment:Ms,lights_toon_pars_fragment:Ts,lights_phong_fragment:As,lights_phong_pars_fragment:Rs,lights_physical_fragment:bs,lights_physical_pars_fragment:ws,lights_fragment_begin:Cs,lights_fragment_maps:Ps,lights_fragment_end:Ls,lightprobes_pars_fragment:Ds,logdepthbuf_fragment:ys,logdepthbuf_pars_fragment:Us,logdepthbuf_pars_vertex:Ns,logdepthbuf_vertex:Is,map_fragment:Os,map_pars_fragment:Fs,map_particle_fragment:Bs,map_particle_pars_fragment:Gs,metalnessmap_fragment:Hs,metalnessmap_pars_fragment:Vs,morphinstance_vertex:Ws,morphcolor_vertex:ks,morphnormal_vertex:zs,morphtarget_pars_vertex:Xs,morphtarget_vertex:Ks,normal_fragment_begin:qs,normal_fragment_maps:Ys,normal_pars_fragment:Zs,normal_pars_vertex:$s,normal_vertex:Qs,normalmap_pars_fragment:Js,clearcoat_normal_fragment_begin:js,clearcoat_normal_fragment_maps:el,clearcoat_pars_fragment:tl,iridescence_pars_fragment:nl,opaque_fragment:il,packing:al,premultiplied_alpha_fragment:rl,project_vertex:ol,dithering_fragment:sl,dithering_pars_fragment:ll,roughnessmap_fragment:cl,roughnessmap_pars_fragment:fl,shadowmap_pars_fragment:dl,shadowmap_pars_vertex:ul,shadowmap_vertex:pl,shadowmask_pars_fragment:hl,skinbase_vertex:ml,skinning_pars_vertex:_l,skinning_vertex:gl,skinnormal_vertex:vl,specularmap_fragment:Sl,specularmap_pars_fragment:xl,tonemapping_fragment:El,tonemapping_pars_fragment:Ml,transmission_fragment:Tl,transmission_pars_fragment:Al,uv_pars_fragment:Rl,uv_pars_vertex:bl,uv_vertex:wl,worldpos_vertex:Cl,background_vert:Pl,background_frag:Ll,backgroundCube_vert:Dl,backgroundCube_frag:yl,cube_vert:Ul,cube_frag:Nl,depth_vert:Il,depth_frag:Ol,distance_vert:Fl,distance_frag:Bl,equirect_vert:Gl,equirect_frag:Hl,linedashed_vert:Vl,linedashed_frag:Wl,meshbasic_vert:kl,meshbasic_frag:zl,meshlambert_vert:Xl,meshlambert_frag:Kl,meshmatcap_vert:ql,meshmatcap_frag:Yl,meshnormal_vert:Zl,meshnormal_frag:$l,meshphong_vert:Ql,meshphong_frag:Jl,meshphysical_vert:jl,meshphysical_frag:ec,meshtoon_vert:tc,meshtoon_frag:nc,points_vert:ic,points_frag:ac,shadow_vert:rc,shadow_frag:oc,sprite_vert:sc,sprite_frag:lc},ue={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Lt={basic:{uniforms:_t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:_t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:_t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:_t([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:_t([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Qe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:_t([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:_t([ue.points,ue.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:_t([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:_t([ue.common,ue.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:_t([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:_t([ue.sprite,ue.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distance:{uniforms:_t([ue.common,ue.displacementmap,{referencePosition:{value:new Ge},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distance_vert,fragmentShader:De.distance_frag},shadow:{uniforms:_t([ue.lights,ue.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Lt.physical={uniforms:_t([Lt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const vn={r:0,b:0,g:0},cc=new Qt,Va=new Fe;Va.set(-1,0,0,0,1,0,0,0,1);function fc(e,n,t,i,c,s){const d=new Qe(0);let p=c===!0?0:1,D,S,G=null,N=0,x=null;function v(_){let L=_.isScene===!0?_.background:null;if(L&&L.isTexture){const M=_.backgroundBlurriness>0;L=n.get(L,M)}return L}function P(_){let L=!1;const M=v(_);M===null?f(d,p):M&&M.isColor&&(f(M,1),L=!0);const w=e.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(e.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function U(_,L){const M=v(L);M&&M.isCubeTexture?(S===void 0&&(S=new gt(new pn(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:kn(Lt.backgroundCube.uniforms),vertexShader:Lt.backgroundCube.vertexShader,fragmentShader:Lt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(w,E,o){this.matrixWorld.copyPosition(o.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(S)),S.material.uniforms.envMap.value=M,S.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(cc.makeRotationFromEuler(L.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&S.material.uniforms.backgroundRotation.value.premultiply(Va),S.material.toneMapped=et.getTransfer(M.colorSpace)!==Ke,(G!==M||N!==M.version||x!==e.toneMapping)&&(S.material.needsUpdate=!0,G=M,N=M.version,x=e.toneMapping),S.layers.enableAll(),_.unshift(S,S.geometry,S.material,0,0,null)):M&&M.isTexture&&(D===void 0&&(D=new gt(new ba(2,2),new Jt({name:"BackgroundMaterial",uniforms:kn(Lt.background.uniforms),vertexShader:Lt.background.vertexShader,fragmentShader:Lt.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),D.geometry.deleteAttribute("normal"),Object.defineProperty(D.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(D)),D.material.uniforms.t2D.value=M,D.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,D.material.toneMapped=et.getTransfer(M.colorSpace)!==Ke,M.matrixAutoUpdate===!0&&M.updateMatrix(),D.material.uniforms.uvTransform.value.copy(M.matrix),(G!==M||N!==M.version||x!==e.toneMapping)&&(D.material.needsUpdate=!0,G=M,N=M.version,x=e.toneMapping),D.layers.enableAll(),_.unshift(D,D.geometry,D.material,0,0,null))}function f(_,L){_.getRGB(vn,wa(e)),t.buffers.color.setClear(vn.r,vn.g,vn.b,L,s)}function l(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),D!==void 0&&(D.geometry.dispose(),D.material.dispose(),D=void 0)}return{getClearColor:function(){return d},setClearColor:function(_,L=1){d.set(_),p=L,f(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(_){p=_,f(d,p)},render:P,addToRenderList:U,dispose:l}}function dc(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},c=x(null);let s=c,d=!1;function p(O,X,Z,A,Q){let Y=!1;const V=N(O,A,Z,X);s!==V&&(s=V,S(s.object)),Y=v(O,A,Z,Q),Y&&P(O,A,Z,Q),Q!==null&&n.update(Q,e.ELEMENT_ARRAY_BUFFER),(Y||d)&&(d=!1,M(O,X,Z,A),Q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Q).buffer))}function D(){return e.createVertexArray()}function S(O){return e.bindVertexArray(O)}function G(O){return e.deleteVertexArray(O)}function N(O,X,Z,A){const Q=A.wireframe===!0;let Y=i[X.id];Y===void 0&&(Y={},i[X.id]=Y);const V=O.isInstancedMesh===!0?O.id:0;let fe=Y[V];fe===void 0&&(fe={},Y[V]=fe);let K=fe[Z.id];K===void 0&&(K={},fe[Z.id]=K);let j=K[Q];return j===void 0&&(j=x(D()),K[Q]=j),j}function x(O){const X=[],Z=[],A=[];for(let Q=0;Q<t;Q++)X[Q]=0,Z[Q]=0,A[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Z,attributeDivisors:A,object:O,attributes:{},index:null}}function v(O,X,Z,A){const Q=s.attributes,Y=X.attributes;let V=0;const fe=Z.getAttributes();for(const K in fe)if(fe[K].location>=0){const ie=Q[K];let Ae=Y[K];if(Ae===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(Ae=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(Ae=O.instanceColor)),ie===void 0||ie.attribute!==Ae||Ae&&ie.data!==Ae.data)return!0;V++}return s.attributesNum!==V||s.index!==A}function P(O,X,Z,A){const Q={},Y=X.attributes;let V=0;const fe=Z.getAttributes();for(const K in fe)if(fe[K].location>=0){let ie=Y[K];ie===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(ie=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(ie=O.instanceColor));const Ae={};Ae.attribute=ie,ie&&ie.data&&(Ae.data=ie.data),Q[K]=Ae,V++}s.attributes=Q,s.attributesNum=V,s.index=A}function U(){const O=s.newAttributes;for(let X=0,Z=O.length;X<Z;X++)O[X]=0}function f(O){l(O,0)}function l(O,X){const Z=s.newAttributes,A=s.enabledAttributes,Q=s.attributeDivisors;Z[O]=1,A[O]===0&&(e.enableVertexAttribArray(O),A[O]=1),Q[O]!==X&&(e.vertexAttribDivisor(O,X),Q[O]=X)}function _(){const O=s.newAttributes,X=s.enabledAttributes;for(let Z=0,A=X.length;Z<A;Z++)X[Z]!==O[Z]&&(e.disableVertexAttribArray(Z),X[Z]=0)}function L(O,X,Z,A,Q,Y,V){V===!0?e.vertexAttribIPointer(O,X,Z,Q,Y):e.vertexAttribPointer(O,X,Z,A,Q,Y)}function M(O,X,Z,A){U();const Q=A.attributes,Y=Z.getAttributes(),V=X.defaultAttributeValues;for(const fe in Y){const K=Y[fe];if(K.location>=0){let j=Q[fe];if(j===void 0&&(fe==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),fe==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),j!==void 0){const ie=j.normalized,Ae=j.itemSize,Ue=n.get(j);if(Ue===void 0)continue;const k=Ue.buffer,he=Ue.type,Se=Ue.bytesPerElement,Re=he===e.INT||he===e.UNSIGNED_INT||j.gpuType===La;if(j.isInterleavedBufferAttribute){const me=j.data,ye=me.isInterleavedBuffer===!0?me.stride:me.itemSize,ht=j.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let be=0;be<K.locationSize;be++)l(K.location+be,me.meshPerAttribute);O.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let be=0;be<K.locationSize;be++)f(K.location+be);e.bindBuffer(e.ARRAY_BUFFER,k);for(let be=0;be<K.locationSize;be++)L(K.location+be,Ae/K.locationSize,he,ie,ye*Se,(ht+Ae/K.locationSize*be)*Se,Re)}else{if(j.isInstancedBufferAttribute){for(let me=0;me<K.locationSize;me++)l(K.location+me,j.meshPerAttribute);O.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let me=0;me<K.locationSize;me++)f(K.location+me);e.bindBuffer(e.ARRAY_BUFFER,k);for(let me=0;me<K.locationSize;me++)L(K.location+me,Ae/K.locationSize,he,ie,Ae*Se,Ae/K.locationSize*me*Se,Re)}}else if(V!==void 0){const ie=V[fe];if(ie!==void 0)switch(ie.length){case 2:e.vertexAttrib2fv(K.location,ie);break;case 3:e.vertexAttrib3fv(K.location,ie);break;case 4:e.vertexAttrib4fv(K.location,ie);break;default:e.vertexAttrib1fv(K.location,ie)}}}}_()}function w(){q();for(const O in i){const X=i[O];for(const Z in X){const A=X[Z];for(const Q in A){const Y=A[Q];for(const V in Y)G(Y[V].object),delete Y[V];delete A[Q]}}delete i[O]}}function E(O){if(i[O.id]===void 0)return;const X=i[O.id];for(const Z in X){const A=X[Z];for(const Q in A){const Y=A[Q];for(const V in Y)G(Y[V].object),delete Y[V];delete A[Q]}}delete i[O.id]}function o(O){for(const X in i){const Z=i[X];for(const A in Z){const Q=Z[A];if(Q[O.id]===void 0)continue;const Y=Q[O.id];for(const V in Y)G(Y[V].object),delete Y[V];delete Q[O.id]}}}function h(O){for(const X in i){const Z=i[X],A=O.isInstancedMesh===!0?O.id:0,Q=Z[A];if(Q!==void 0){for(const Y in Q){const V=Q[Y];for(const fe in V)G(V[fe].object),delete V[fe];delete Q[Y]}delete Z[A],Object.keys(Z).length===0&&delete i[X]}}}function q(){y(),d=!0,s!==c&&(s=c,S(s.object))}function y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:p,reset:q,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:h,releaseStatesOfProgram:o,initAttributes:U,enableAttribute:f,disableUnusedAttributes:_}}function uc(e,n,t){let i;function c(D){i=D}function s(D,S){e.drawArrays(i,D,S),t.update(S,i,1)}function d(D,S,G){G!==0&&(e.drawArraysInstanced(i,D,S,G),t.update(S,i,G))}function p(D,S,G){if(G===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,D,0,S,0,G);let x=0;for(let v=0;v<G;v++)x+=S[v];t.update(x,i,1)}this.setMode=c,this.render=s,this.renderInstances=d,this.renderMultiDraw=p}function pc(e,n,t,i){let c;function s(){if(c!==void 0)return c;if(n.has("EXT_texture_filter_anisotropic")===!0){const o=n.get("EXT_texture_filter_anisotropic");c=e.getParameter(o.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(o){return!(o!==Ht&&i.convert(o)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(o){const h=o===Ot&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(o!==Dt&&o!==Gt&&!h&&i.convert(o)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function D(o){if(o==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";o="mediump"}return o==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let S=t.precision!==void 0?t.precision:"highp";const G=D(S);G!==S&&(We("WebGLRenderer:",S,"not supported, using",G,"instead."),S=G);const N=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),x=t.logarithmicDepthBuffer===!0&&N===!1;t.reversedDepthBuffer===!0&&N===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&N===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const v=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),P=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),_=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),L=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:D,textureFormatReadable:d,textureTypeReadable:p,precision:S,logarithmicDepthBuffer:x,reversedDepthBuffer:N,maxTextures:v,maxVertexTextures:P,maxTextureSize:U,maxCubemapSize:f,maxAttributes:l,maxVertexUniforms:_,maxVaryings:L,maxFragmentUniforms:M,maxSamples:w,samples:E}}function hc(e){const n=this;let t=null,i=0,c=!1,s=!1;const d=new Xr,p=new Fe,D={value:null,needsUpdate:!1};this.uniform=D,this.numPlanes=0,this.numIntersection=0,this.init=function(N,x){const v=N.length!==0||x||i!==0||c;return c=x,i=N.length,v},this.beginShadows=function(){s=!0,G(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(N,x){t=G(N,x,0)},this.setState=function(N,x,v){const P=N.clippingPlanes,U=N.clipIntersection,f=N.clipShadows,l=e.get(N);if(!c||P===null||P.length===0||s&&!f)s?G(null):S();else{const _=s?0:i,L=_*4;let M=l.clippingState||null;D.value=M,M=G(P,x,L,v);for(let w=0;w!==L;++w)M[w]=t[w];l.clippingState=M,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=_}};function S(){D.value!==t&&(D.value=t,D.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function G(N,x,v,P){const U=N!==null?N.length:0;let f=null;if(U!==0){if(f=D.value,P!==!0||f===null){const l=v+U*4,_=x.matrixWorldInverse;p.getNormalMatrix(_),(f===null||f.length<l)&&(f=new Float32Array(l));for(let L=0,M=v;L!==U;++L,M+=4)d.copy(N[L]).applyMatrix4(_,p),d.normal.toArray(f,M),f[M+3]=d.constant}D.value=f,D.needsUpdate=!0}return n.numPlanes=U,n.numIntersection=0,f}}class qn extends yt{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},c=[i,i,i,i,i,i];this.texture=new Ca(c),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},c=new pn(5,5,5),s=new Jt({name:"CubemapFromEquirect",uniforms:kn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:St,blending:$t});s.uniforms.tEquirect.value=t;const d=new gt(c,s),p=t.minFilter;return t.minFilter===zt&&(t.minFilter=wt),new Vn(1,10,this).update(n,d),t.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(n,t=!0,i=!0,c=!0){const s=n.getRenderTarget();for(let d=0;d<6;d++)n.setRenderTarget(this,d),n.clear(t,i,c);n.setRenderTarget(s)}}const qi=256,mc=3,_c=20,Wa=256,ka=16,gc=3,vc=new Ge,Sc=new Qe;class Rn{constructor(n){this._renderer=n,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Vn(1,10,null),this._boxMesh=new gt(new pn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(n,t=0,i=.1,c=100,s={}){const{size:d=256,position:p=vc}=s,D=this._renderer;this._setSize(d);const S=this._allocateTarget(),G=this._getSourceTarget(!0);t>0&&(G.texture.mipmapsAutoUpdate=!1);const N=D.autoClear,x=D.autoClearColor,v=D.autoClearDepth,P=D.autoClearStencil,U=n.background;D.autoClear=!0,D.autoClearColor=!0,D.autoClearDepth=!0,D.autoClearStencil=!0,U===null&&(n.background=D.getClearColor(Sc));const f=new Vn(i,c,G);return f.position.copy(p),f.update(D,n),D.autoClear=N,D.autoClearColor=x,D.autoClearDepth=v,D.autoClearStencil=P,n.background=U,t>0&&(G.texture.mipmapsAutoUpdate=!0,this._blur(S,t)),this._applyPMREM(S),S}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$i(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(n,t){return t>0?1-Math.sqrt(1-n/t):0}_setSize(n){this._cubeSize=Math.max(qi,lr(n))}_fromTexture(n,t){n.mapping===Tn||n.mapping===fn?this._setSize(n.image.length===0?qi:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4);const i=t||this._allocateTarget();return this._textureToCubemap(n),this._applyPMREM(i),i}_allocateTarget(){const n=this._cubeSize,t=Yi(n,!1,!1),i=Math.log2(n)-mc;for(let c=0;c<=i;c++)t.texture.mipmaps.push({width:n>>c,height:n>>c});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(n=!1){const t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||n&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Yi(t,!0,n)),this._sourceTarget}_compileMaterial(n){this._boxMesh.material=n,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(n,t,i){const c=this._boxMesh,s=this._cubeCamera;c.material=i,s.renderTarget=n,s.activeMipmapLevel=t;const d=n.width>>t;n.viewport.set(0,0,d,d),s.update(this._renderer,c),n.viewport.set(0,0,n.width,n.height)}_textureToCubemap(n){let t;n.mapping===Tn||n.mapping===fn?(this._cubemapMaterial===null&&(this._cubemapMaterial=$i()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zi()),t=this._equirectMaterial),t.uniforms.envMap.value=n,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(n){this._ggxMaterial===null&&(this._ggxMaterial=xc(),this._integrationMaterial=Ec());const t=this._cubeSize,i=n.texture.mipmaps.length-1,c=this._ggxMaterial.uniforms;c.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/ka);for(let d=0;d<=i;d++){const p=Rn.lodToRoughness(d,i);if(d>i-gc)s.roughness.value=p,this._renderCube(n,d,this._integrationMaterial);else{const D=p>0?Math.log2(t)+.5*Math.log2(6/(Wa*Math.pow(p,4)))+.5:0;c.roughness.value=p,c.lodBias.value=D,this._renderCube(n,d,this._ggxMaterial)}}}_blur(n,t){this._blurMaterial===null&&(this._blurMaterial=Mc());const i=this._blurMaterial,c=i.uniforms,s=this._sourceTarget;c.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,c.envMap.value=s.texture,this._renderCube(n,0,i),c.envMap.value=n.texture,this._renderCube(s,0,i)}}function Yi(e,n,t){return new qn(e,{minFilter:zt,generateMipmaps:n,type:Ot,colorSpace:xa,depthBuffer:t})}function hn(e,n,t){return new Jt({name:e,uniforms:n,vertexShader:De.cube_vert,fragmentShader:t,side:St,blending:$t,depthTest:!1,depthWrite:!1})}function xc(){return hn("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Wa}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ec(){return hn("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ka}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Mc(){return hn("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_c}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Zi(){return hn("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function $i(){return hn("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Tc(e){let n=new WeakMap,t=new WeakMap,i=null;function c(x,v=!1){return x==null?null:v?d(x):s(x)}function s(x){if(x&&x.isTexture){const v=x.mapping;if(v===Fn||v===Bn)if(n.has(x)){const P=n.get(x).texture;return p(P,x.mapping)}else{const P=x.image;if(P&&P.height>0){const U=new qn(P.height);return U.fromEquirectangularTexture(e,x),n.set(x,U),x.addEventListener("dispose",S),p(U.texture,x.mapping)}else return null}}return x}function d(x){if(x&&x.isTexture&&x.isPMREMTexture!==!0){const v=x.mapping,P=v===Fn||v===Bn,U=v===Tn||v===fn;if(P||U){let f=t.get(x);const l=f!==void 0?f.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==l)return i===null&&(i=new Rn(e)),f=P?i.fromEquirectangular(x,f):i.fromCubemap(x,f),f.texture.pmremVersion=x.pmremVersion,t.set(x,f),f.texture;if(f!==void 0)return f.texture;{const _=x.image;return P&&_&&_.height>0||U&&_&&D(_)?(i===null&&(i=new Rn(e)),f=P?i.fromEquirectangular(x):i.fromCubemap(x),f.texture.pmremVersion=x.pmremVersion,t.set(x,f),x.addEventListener("dispose",G),f.texture):null}}}return x}function p(x,v){return v===Fn?x.mapping=Tn:v===Bn&&(x.mapping=fn),x}function D(x){let v=0;const P=6;for(let U=0;U<P;U++)x[U]!==void 0&&v++;return v===P}function S(x){const v=x.target;v.removeEventListener("dispose",S);const P=n.get(v);P!==void 0&&(n.delete(v),P.dispose())}function G(x){const v=x.target;v.removeEventListener("dispose",G);const P=t.get(v);P!==void 0&&(t.delete(v),P.dispose())}function N(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:c,dispose:N}}function Ac(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const c=e.getExtension(i);return n[i]=c,c}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const c=t(i);return c===null&&zr("WebGLRenderer: "+i+" extension not supported."),c}}}function Rc(e,n,t,i){const c={},s=new WeakMap,d=new FinalizationRegistry(P=>delete c[P]);function p(P){D(P.target)}function D(P){P.index!==null&&n.remove(P.index);for(const f in P.attributes)n.remove(P.attributes[f]);P.removeEventListener("dispose",p),delete c[P.id],d.unregister(P);const U=s.get(P);U&&(n.remove(U),s.delete(P)),i.releaseStatesOfGeometry(P),P.isInstancedBufferGeometry===!0&&delete P._maxInstanceCount,t.memory.geometries--}function S(P,U){return c[U.id]!==void 0||(U.addEventListener("dispose",p),c[U.id]=new WeakRef(U),d.register(U,U.id,U),t.memory.geometries++),U}function G(P){const U=P.attributes;for(const f in U)n.update(U[f],e.ARRAY_BUFFER)}function N(P){const U=P.index,f=P.attributes.position;let l=0;if(f===void 0)return;const _=U!==null?U.array.length:f.array.length/3-1,L=f.count>=65535?uo:po,M=new L(Math.ceil(_/3)*6,1),w=M.array;if(U!==null){const o=U.array;l=U.version;for(let h=0,q=0;h<_;h+=3){const y=o[h+0],O=o[h+1],X=o[h+2];w[q++]=y,w[q++]=O,w[q++]=O,w[q++]=X,w[q++]=X,w[q++]=y}}else{l=f.version;for(let o=0,h=0;o<_;o+=3){const q=o+0,y=o+1,O=o+2;w[h++]=q,w[h++]=y,w[h++]=y,w[h++]=O,w[h++]=O,w[h++]=q}}M.version=l;const E=s.get(P);E&&n.remove(E),s.set(P,M)}function x(P){const U=s.get(P);if(U){const f=P.index;f!==null&&U.version<f.version&&N(P)}else N(P);return s.get(P)}function v(){for(const P in c){const U=c[P].deref();U!==void 0&&D(U)}}return{get:S,update:G,getWireframeAttribute:x,dispose:v}}function bc(e,n,t){let i;function c(N){i=N}let s,d;function p(N){s=N.type,d=N.bytesPerElement}function D(N,x){e.drawElements(i,x,s,N*d),t.update(x,i,1)}function S(N,x,v){v!==0&&(e.drawElementsInstanced(i,x,s,N*d,v),t.update(x,i,v))}function G(N,x,v){if(v===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,s,N,0,v);let U=0;for(let f=0;f<v;f++)U+=x[f];t.update(U,i,1)}this.setMode=c,this.setIndex=p,this.render=D,this.renderInstances=S,this.renderMultiDraw=G}function wc(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,d,p){switch(t.calls++,d){case e.TRIANGLES:t.triangles+=p*(s/3);break;case e.LINES:t.lines+=p*(s/2);break;case e.LINE_STRIP:t.lines+=p*(s-1);break;case e.LINE_LOOP:t.lines+=p*s;break;case e.POINTS:t.points+=p*s;break;default:$e("WebGLInfo: Unknown draw mode:",d);break}}function c(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:c,update:i}}function Cc(e,n,t){const i=new WeakMap,c=new vt;function s(d,p,D){const S=d.morphTargetInfluences,G=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,N=G!==void 0?G.length:0;let x=i.get(p);if(x===void 0||x.count!==N){let q=function(){o.dispose(),i.delete(p),p.removeEventListener("dispose",q)};x!==void 0&&x.texture.dispose();const v=p.morphAttributes.position!==void 0,P=p.morphAttributes.normal!==void 0,U=p.morphAttributes.color!==void 0,f=p.morphAttributes.position||[],l=p.morphAttributes.normal||[],_=p.morphAttributes.color||[];let L=0;v===!0&&(L=1),P===!0&&(L=2),U===!0&&(L=3);let M=p.attributes.position.count*L,w=1;M>n.maxTextureSize&&(w=Math.ceil(M/n.maxTextureSize),M=n.maxTextureSize);const E=new Float32Array(M*w*4*N),o=new Da(E,M,w,N);o.type=Gt,o.needsUpdate=!0;const h=L*4;for(let y=0;y<N;y++){const O=f[y],X=l[y],Z=_[y],A=M*w*4*y;for(let Q=0;Q<O.count;Q++){const Y=Q*h;v===!0&&(c.fromBufferAttribute(O,Q),E[A+Y+0]=c.x,E[A+Y+1]=c.y,E[A+Y+2]=c.z,E[A+Y+3]=0),P===!0&&(c.fromBufferAttribute(X,Q),E[A+Y+4]=c.x,E[A+Y+5]=c.y,E[A+Y+6]=c.z,E[A+Y+7]=0),U===!0&&(c.fromBufferAttribute(Z,Q),E[A+Y+8]=c.x,E[A+Y+9]=c.y,E[A+Y+10]=c.z,E[A+Y+11]=Z.itemSize===4?c.w:1)}}x={count:N,texture:o,size:new xt(M,w)},i.set(p,x),p.addEventListener("dispose",q)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)D.getUniforms().setValue(e,"morphTexture",d.morphTexture,t);else{let v=0;for(let U=0;U<S.length;U++)v+=S[U];const P=p.morphTargetsRelative?1:1-v;D.getUniforms().setValue(e,"morphTargetBaseInfluence",P),D.getUniforms().setValue(e,"morphTargetInfluences",S)}D.getUniforms().setValue(e,"morphTargetsTexture",x.texture,t),D.getUniforms().setValue(e,"morphTargetsTextureSize",x.size)}return{update:s}}function Pc(e,n,t,i,c){let s=new WeakMap;function d(S){const G=c.render.frame,N=S.geometry,x=n.get(S,N);if(s.get(x)!==G&&(n.update(x),s.set(x,G)),S.isInstancedMesh&&(S.hasEventListener("dispose",D)===!1&&S.addEventListener("dispose",D),s.get(S)!==G&&(t.update(S.instanceMatrix,e.ARRAY_BUFFER),S.instanceColor!==null&&t.update(S.instanceColor,e.ARRAY_BUFFER),s.set(S,G))),S.isSkinnedMesh){const v=S.skeleton;s.get(v)!==G&&(v.update(),s.set(v,G))}return x}function p(){s=new WeakMap}function D(S){const G=S.target;G.removeEventListener("dispose",D),i.releaseStatesOfObject(G),t.remove(G.instanceMatrix),G.instanceColor!==null&&t.remove(G.instanceColor)}return{update:d,dispose:p}}const Lc={[Ga]:"LINEAR_TONE_MAPPING",[Ba]:"REINHARD_TONE_MAPPING",[Fa]:"CINEON_TONE_MAPPING",[Oa]:"ACES_FILMIC_TONE_MAPPING",[Ia]:"AGX_TONE_MAPPING",[Na]:"NEUTRAL_TONE_MAPPING",[Ua]:"CUSTOM_TONE_MAPPING"};function Dc(e,n,t,i,c,s){const d=new yt(n,t,{type:e,depthBuffer:c,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let p=null,D=null,S=null;const G=new va;G.setAttribute("position",new li([-1,3,0,-1,-1,0,3,-1,0],3)),G.setAttribute("uv",new li([0,2,0,0,2,0],2));const N=new Br({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new gt(G,N),v=new Gr(-1,1,1,-1,0,1);let P=null,U=null,f=!1,l,_=null,L=[],M=!1;this.setSize=function(w,E){d.setSize(w,E),p!==null&&p.setSize(w,E),D!==null&&D.setSize(w,E);for(let o=0;o<L.length;o++){const h=L[o];h.setSize&&h.setSize(w,E)}},this.setEffects=function(w){L=w,M=L.length>0&&L[0].isRenderPass===!0;const E=d.width,o=d.height;L.length>0&&p===null&&(p=new yt(E,o,{type:Ot,depthBuffer:!1,stencilBuffer:!1}),D=new yt(E,o,{type:Ot,depthBuffer:!1,stencilBuffer:!1}));const h=c===!0&&L.some(q=>q.needsDepthTexture===!0);h!==(d.depthTexture!==null)&&(h===!0&&S===null&&(S=new dn(E,o),s===!0&&(S.format=Kt,S.type=en)),d.dispose(),d.depthTexture=h?S:null,d.resolveDepthBuffer=h,d.storeMultisampledDepthBuffer=h);for(let q=0;q<L.length;q++){const y=L[q];y.setSize&&y.setSize(E,o),h&&y.needsDepthTexture===!0&&y.setDepthTexture&&y.setDepthTexture(S)}},this.begin=function(w,E){if(f||w.toneMapping===It&&L.length===0)return!1;if(_=E,E!==null){const o=E.width,h=E.height;(d.width!==o||d.height!==h)&&this.setSize(o,h)}return M===!1&&w.setRenderTarget(d),l=w.toneMapping,w.toneMapping=It,!0},this.hasRenderPass=function(){return M},this.end=function(w,E){w.toneMapping=l,f=!0;let o=d,h=p;for(let q=0;q<L.length;q++){const y=L[q];y.enabled!==!1&&(y.render(w,h,o,E),y.needsSwap!==!1&&(o=h,h=h===p?D:p))}if(P!==w.outputColorSpace||U!==w.toneMapping){P=w.outputColorSpace,U=w.toneMapping,N.defines={},et.getTransfer(P)===Ke&&(N.defines.SRGB_TRANSFER="");const q=Lc[U];q&&(N.defines[q]=""),N.needsUpdate=!0}N.uniforms.tDiffuse.value=o.texture,w.setRenderTarget(_),w.render(x,v),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){d.dispose(),p!==null&&p.dispose(),D!==null&&D.dispose(),G.dispose(),N.dispose()}}const za=new xo,Xa=new dn(1,1),Ka=new Sa(1),qa=new Da,Ya=new So,Za=new Ca,Qi=[],Ji=[],ji=new Float32Array(16),ea=new Float32Array(9),ta=new Float32Array(4);function tn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const c=n*t;let s=Qi[c];if(s===void 0&&(s=new Float32Array(c),Qi[c]=s),n!==0){i.toArray(s,0);for(let d=1,p=0;d!==n;++d)p+=t,e[d].toArray(s,p)}return s}function at(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function rt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function bn(e,n){let t=Ji[n];t===void 0&&(t=new Int32Array(n),Ji[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function yc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Uc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(at(t,n))return;e.uniform2fv(this.addr,n),rt(t,n)}}function Nc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(at(t,n))return;e.uniform3fv(this.addr,n),rt(t,n)}}function Ic(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(at(t,n))return;e.uniform4fv(this.addr,n),rt(t,n)}}function Oc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(at(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),rt(t,n)}else{if(at(t,i))return;ta.set(i),e.uniformMatrix2fv(this.addr,!1,ta),rt(t,i)}}function Fc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(at(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),rt(t,n)}else{if(at(t,i))return;ea.set(i),e.uniformMatrix3fv(this.addr,!1,ea),rt(t,i)}}function Bc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(at(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),rt(t,n)}else{if(at(t,i))return;ji.set(i),e.uniformMatrix4fv(this.addr,!1,ji),rt(t,i)}}function Gc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Hc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(at(t,n))return;e.uniform2iv(this.addr,n),rt(t,n)}}function Vc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(at(t,n))return;e.uniform3iv(this.addr,n),rt(t,n)}}function Wc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(at(t,n))return;e.uniform4iv(this.addr,n),rt(t,n)}}function kc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function zc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(at(t,n))return;e.uniform2uiv(this.addr,n),rt(t,n)}}function Xc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(at(t,n))return;e.uniform3uiv(this.addr,n),rt(t,n)}}function Kc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(at(t,n))return;e.uniform4uiv(this.addr,n),rt(t,n)}}function wn(e){return e.version===0&&(e.compareFunction=ga,e.needsUpdate=!0),e}function qc(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c);let s;this.type===e.SAMPLER_2D_SHADOW?s=wn(Xa):s=za,t.setTexture2D(n||s,c)}function Yc(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture3D(n||Ya,c)}function Zc(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c);let s;this.type===e.SAMPLER_CUBE_SHADOW?s=wn(Ka):s=Za,t.setTextureCube(n||s,c)}function $c(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture2DArray(n||qa,c)}function Qc(e){switch(e){case 5126:return yc;case 35664:return Uc;case 35665:return Nc;case 35666:return Ic;case 35674:return Oc;case 35675:return Fc;case 35676:return Bc;case 5124:case 35670:return Gc;case 35667:case 35671:return Hc;case 35668:case 35672:return Vc;case 35669:case 35673:return Wc;case 5125:return kc;case 36294:return zc;case 36295:return Xc;case 36296:return Kc;case 35678:case 36198:case 36298:case 36306:case 35682:return qc;case 35679:case 36299:case 36307:return Yc;case 35680:case 36300:case 36308:case 36293:return Zc;case 36289:case 36303:case 36311:case 36292:return $c}}function Jc(e,n){e.uniform1fv(this.addr,n)}function jc(e,n){const t=tn(n,this.size,2);e.uniform2fv(this.addr,t)}function ef(e,n){const t=tn(n,this.size,3);e.uniform3fv(this.addr,t)}function tf(e,n){const t=tn(n,this.size,4);e.uniform4fv(this.addr,t)}function nf(e,n){const t=tn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function af(e,n){const t=tn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function rf(e,n){const t=tn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function of(e,n){e.uniform1iv(this.addr,n)}function sf(e,n){e.uniform2iv(this.addr,n)}function lf(e,n){e.uniform3iv(this.addr,n)}function cf(e,n){e.uniform4iv(this.addr,n)}function ff(e,n){e.uniform1uiv(this.addr,n)}function df(e,n){e.uniform2uiv(this.addr,n)}function uf(e,n){e.uniform3uiv(this.addr,n)}function pf(e,n){e.uniform4uiv(this.addr,n)}function hf(e,n,t){const i=this.cache,c=n.length,s=bn(t,c);at(i,s)||(e.uniform1iv(this.addr,s),rt(i,s));let d;this.type===e.SAMPLER_2D_SHADOW?d=wn(Xa):d=za;for(let p=0;p!==c;++p)t.setTexture2D(n[p]||d,s[p])}function mf(e,n,t){const i=this.cache,c=n.length,s=bn(t,c);at(i,s)||(e.uniform1iv(this.addr,s),rt(i,s));for(let d=0;d!==c;++d)t.setTexture3D(n[d]||Ya,s[d])}function _f(e,n,t){const i=this.cache,c=n.length,s=bn(t,c);at(i,s)||(e.uniform1iv(this.addr,s),rt(i,s));let d;this.type===e.SAMPLER_CUBE_SHADOW?d=wn(Ka):d=Za;for(let p=0;p!==c;++p)t.setTextureCube(n[p]||d,s[p])}function gf(e,n,t){const i=this.cache,c=n.length,s=bn(t,c);at(i,s)||(e.uniform1iv(this.addr,s),rt(i,s));for(let d=0;d!==c;++d)t.setTexture2DArray(n[d]||qa,s[d])}function vf(e){switch(e){case 5126:return Jc;case 35664:return jc;case 35665:return ef;case 35666:return tf;case 35674:return nf;case 35675:return af;case 35676:return rf;case 5124:case 35670:return of;case 35667:case 35671:return sf;case 35668:case 35672:return lf;case 35669:case 35673:return cf;case 5125:return ff;case 36294:return df;case 36295:return uf;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return hf;case 35679:case 36299:case 36307:return mf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return gf}}class Sf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qc(t.type)}}class xf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vf(t.type)}}class Ef{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const c=this.seq;for(let s=0,d=c.length;s!==d;++s){const p=c[s];p.setValue(n,t[p.id],i)}}}const Gn=/(\w+)(\])?(\[|\.)?/g;function na(e,n){e.seq.push(n),e.map[n.id]=n}function Mf(e,n,t){const i=e.name,c=i.length;for(Gn.lastIndex=0;;){const s=Gn.exec(i),d=Gn.lastIndex;let p=s[1];const D=s[2]==="]",S=s[3];if(D&&(p=p|0),S===void 0||S==="["&&d+2===c){na(t,S===void 0?new Sf(p,e,n):new xf(p,e,n));break}else{let N=t.map[p];N===void 0&&(N=new Ef(p),na(t,N)),t=N}}}class Mn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let d=0;d<i;++d){const p=n.getActiveUniform(t,d),D=n.getUniformLocation(t,p.name);Mf(p,D,this)}const c=[],s=[];for(const d of this.seq)d.type===n.SAMPLER_2D_SHADOW||d.type===n.SAMPLER_CUBE_SHADOW||d.type===n.SAMPLER_2D_ARRAY_SHADOW?c.push(d):s.push(d);c.length>0&&(this.seq=c.concat(s))}setValue(n,t,i,c){const s=this.map[t];s!==void 0&&s.setValue(n,i,c)}setOptional(n,t,i){const c=t[i];c!==void 0&&this.setValue(n,i,c)}static upload(n,t,i,c){for(let s=0,d=t.length;s!==d;++s){const p=t[s],D=i[p.id];D.needsUpdate!==!1&&p.setValue(n,D.value,c)}}static seqWithValue(n,t){const i=[];for(let c=0,s=n.length;c!==s;++c){const d=n[c];d.id in t&&i.push(d)}return i}}function ia(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Tf=37297;let Af=0;function Rf(e,n){const t=e.split(`
`),i=[],c=Math.max(n-6,0),s=Math.min(n+6,t.length);for(let d=c;d<s;d++){const p=d+1;i.push(`${p===n?">":" "} ${p}: ${t[d]}`)}return i.join(`
`)}const aa=new Fe;function bf(e){et._getMatrix(aa,et.workingColorSpace,e);const n=`mat3( ${aa.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(e)){case ya:return[n,"LinearTransferOETF"];case Ke:return[n,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function ra(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),s=(e.getShaderInfoLog(n)||"").trim();if(i&&s==="")return"";const d=/ERROR: 0:(\d+)/.exec(s);if(d){const p=parseInt(d[1]);return t.toUpperCase()+`

`+s+`

`+Rf(e.getShaderSource(n),p)}else return s}function wf(e,n){const t=bf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Cf={[Ga]:"Linear",[Ba]:"Reinhard",[Fa]:"Cineon",[Oa]:"ACESFilmic",[Ia]:"AgX",[Na]:"Neutral",[Ua]:"Custom"};function Pf(e,n){const t=Cf[n];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sn=new Ge;function Lf(){et.getLuminanceCoefficients(Sn);const e=Sn.x.toFixed(4),n=Sn.y.toFixed(4),t=Sn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Df(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ln).join(`
`)}function yf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Uf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let c=0;c<i;c++){const s=e.getActiveAttrib(n,c),d=s.name;let p=1;s.type===e.FLOAT_MAT2&&(p=2),s.type===e.FLOAT_MAT3&&(p=3),s.type===e.FLOAT_MAT4&&(p=4),t[d]={type:s.type,location:e.getAttribLocation(n,d),locationSize:p}}return t}function ln(e){return e!==""}function oa(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,n.numSunLights).replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,n.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,n.numLightProbeGrids)}function sa(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Nf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kn(e){return e.replace(Nf,If)}function If(e,n){const t=De[n];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+n+">");return Kn(t)}const Of=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function la(e){return e.replace(Of,Ff)}function Ff(e,n,t,i){let c="";for(let s=parseInt(n);s<parseInt(t);s++)c+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return c}function ca(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}const Bf={[xn]:"SHADOWMAP_TYPE_PCF",[sn]:"SHADOWMAP_TYPE_VSM"};function Gf(e){return Bf[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hf={[fn]:"ENVMAP_MODE_REFRACTION"};function Vf(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Hf[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Wf={[vo]:"ENVMAP_BLENDING_MULTIPLY",[go]:"ENVMAP_BLENDING_MIX",[_o]:"ENVMAP_BLENDING_ADD"};function kf(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Wf[e.combine]||"ENVMAP_BLENDING_NONE"}function zf(e,n,t,i){const c=e.getContext(),s=t.defines;let d=t.vertexShader,p=t.fragmentShader;const D=Gf(t),S=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",G=Vf(t),N=kf(t),x=Df(t),v=yf(s),P=c.createProgram();let U,f,l=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(U=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ln).join(`
`),U.length>0&&(U+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ln).join(`
`),f.length>0&&(f+=`
`)):(U=[ca(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+G:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+D:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ln).join(`
`),f=[ca(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+S:"",t.envMap?"#define "+G:"",t.envMap?"#define "+N:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+D:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==It?"#define TONE_MAPPING":"",t.toneMapping!==It?De.tonemapping_pars_fragment:"",t.toneMapping!==It?Pf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,wf("linearToOutputTexel",t.outputColorSpace),Lf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ln).join(`
`)),d=Kn(d),d=oa(d,t),d=sa(d,t),p=Kn(p),p=oa(p,t),p=sa(p,t),d=la(d),p=la(p),t.isRawShaderMaterial!==!0&&(l=`#version 300 es
`,U=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+U,f=["#define varying in",t.glslVersion===Xi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=l+U+d,L=l+f+p,M=ia(c,c.VERTEX_SHADER,_),w=ia(c,c.FRAGMENT_SHADER,L);c.attachShader(P,M),c.attachShader(P,w),t.index0AttributeName!==void 0?c.bindAttribLocation(P,0,t.index0AttributeName):t.hasPositionAttribute===!0&&c.bindAttribLocation(P,0,"position"),c.linkProgram(P);function E(y){if(e.debug.checkShaderErrors){const O=c.getProgramInfoLog(P)||"",X=c.getShaderInfoLog(M)||"",Z=c.getShaderInfoLog(w)||"",A=O.trim(),Q=X.trim(),Y=Z.trim();let V=!0,fe=!0;if(c.getProgramParameter(P,c.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(c,P,M,w);else{const K=ra(c,M,"vertex"),j=ra(c,w,"fragment");$e("WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(P,c.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+A+`
`+K+`
`+j)}else A!==""?We("WebGLProgram: Program Info Log:",A):(Q===""||Y==="")&&(fe=!1);fe&&(y.diagnostics={runnable:V,programLog:A,vertexShader:{log:Q,prefix:U},fragmentShader:{log:Y,prefix:f}})}c.deleteShader(M),c.deleteShader(w),o=new Mn(c,P),h=Uf(c,P)}let o;this.getUniforms=function(){return o===void 0&&E(this),o};let h;this.getAttributes=function(){return h===void 0&&E(this),h};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=c.getProgramParameter(P,Tf)),q},this.destroy=function(){i.releaseStatesOfProgram(this),c.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Af++,this.cacheKey=n,this.usedTimes=1,this.program=P,this.vertexShader=M,this.fragmentShader=w,this}let Xf=0;class Kf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n,t,i){const c=this._getShaderCacheForMaterial(n);return c.has(t)===!1&&(c.add(t),t.usedTimes++),c.has(i)===!1&&(c.add(i),i.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderStage(n){return this._getShaderStage(n.vertexShader)}getFragmentShaderStage(n){return this._getShaderStage(n.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new qf(n),t.set(n,i)),i}}class qf{constructor(n){this.id=Xf++,this.code=n,this.usedTimes=0}}function Yf(e){return e===jt||e===zn||e===Xn}function Zf(e,n,t,i,c,s){const d=new ho,p=new Kf,D=new Set,S=[],G=new Map,N=i.logarithmicDepthBuffer,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(o){return D.add(o),o===0?"uv":`uv${o}`}function P(o,h,q,y,O,X){const Z=y.fog,A=O.geometry,Q=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?y.environment:null,Y=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap,V=n.get(o.envMap||Q,Y),fe=x[o.type];let K=i.precision;o.precision!==null&&(K=i.getMaxPrecision(o.precision),K!==o.precision&&We("WebGLProgram.getParameters:",o.precision,"not supported, using",K,"instead."));const j=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,ie=j!==void 0?j.length:0;let Ae=0;A.morphAttributes.position!==void 0&&(Ae=1),A.morphAttributes.normal!==void 0&&(Ae=2),A.morphAttributes.color!==void 0&&(Ae=3);let Ue,k,he,Se;if(fe){const de=Lt[fe];Ue=de.vertexShader,k=de.fragmentShader}else{Ue=o.vertexShader,k=o.fragmentShader;const de=p.getVertexShaderStage(o),Ve=p.getFragmentShaderStage(o);p.update(o,de,Ve),he=de.id,Se=Ve.id}const Re=e.getRenderTarget(),me=e.state.buffers.depth.getReversed(),ye=O.isInstancedMesh===!0,ht=O.isBatchedMesh===!0,be=!!o.map,qe=!!o.matcap,ke=!!V,Ne=ke&&V.isPMREMTexture===!0,ct=!!o.aoMap,nt=!!o.lightMap,mt=!!o.bumpMap&&o.wireframe===!1,Je=!!o.normalMap,Ct=!!o.displacementMap,ot=!!o.emissiveMap,Et=!!o.metalnessMap,Mt=!!o.roughnessMap,Tt=o.anisotropy>0,T=o.clearcoat>0,At=o.diffuseRoughness>0,Ye=o.dispersion>0,Ze=o.retroreflectivity>0,ce=o.iridescence>0,it=o.sheen>0,Te=o.transmission>0,we=Tt&&!!o.anisotropyMap,u=T&&!!o.clearcoatMap,a=T&&!!o.clearcoatNormalMap,b=T&&!!o.clearcoatRoughnessMap,$=At&&!!o.diffuseRoughnessMap,z=ce&&!!o.iridescenceMap,te=ce&&!!o.iridescenceThicknessMap,se=it&&!!o.sheenColorMap,B=it&&!!o.sheenRoughnessMap,H=!!o.specularMap,ae=!!o.specularColorMap,m=!!o.specularIntensityMap,W=Te&&!!o.transmissionMap,F=Te&&!!o.thicknessMap,re=!!o.gradientMap,ee=!!o.alphaMap,ne=o.alphaTest>0,Ee=!!o.alphaHash,Le=!!o.extensions;let J=It;o.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(J=e.toneMapping);const Me=Ne?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Pe={shaderID:fe,shaderType:o.type,shaderName:o.name,vertexShader:Ue,fragmentShader:k,defines:o.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:o.isRawShaderMaterial===!0,glslVersion:o.glslVersion,precision:K,batching:ht,batchingColor:ht&&O._colorsTexture!==null,instancing:ye,instancingColor:ye&&O.instanceColor!==null,instancingMorph:ye&&O.morphTexture!==null,outputColorSpace:Re===null?e.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!o.alphaToCoverage,map:be,matcap:qe,envMap:ke,envMapMode:ke&&V.mapping,envMapPMREM:Ne,envMapMaxLod:Ne?Me.length-1:null,envMapSize:Ne?Me[0].width:null,aoMap:ct,lightMap:nt,bumpMap:mt,normalMap:Je,displacementMap:Ct,emissiveMap:ot,normalMapObjectSpace:Je&&o.normalMapType===io,normalMapTangentSpace:Je&&o.normalMapType===pi,packedNormalMap:Je&&o.normalMapType===pi&&Yf(o.normalMap.format),metalnessMap:Et,roughnessMap:Mt,anisotropy:Tt,anisotropyMap:we,clearcoat:T,clearcoatMap:u,clearcoatNormalMap:a,clearcoatRoughnessMap:b,diffuseRoughness:At,diffuseRoughnessMap:$,dispersion:Ye,retroreflection:Ze,iridescence:ce,iridescenceMap:z,iridescenceThicknessMap:te,sheen:it,sheenColorMap:se,sheenRoughnessMap:B,specularMap:H,specularColorMap:ae,specularIntensityMap:m,transmission:Te,transmissionMap:W,thicknessMap:F,gradientMap:re,opaque:o.transparent===!1&&o.blending===En&&o.alphaToCoverage===!1,alphaMap:ee,alphaTest:ne,alphaHash:Ee,combine:o.combine,mapUv:be&&v(o.map.channel),aoMapUv:ct&&v(o.aoMap.channel),lightMapUv:nt&&v(o.lightMap.channel),bumpMapUv:mt&&v(o.bumpMap.channel),normalMapUv:Je&&v(o.normalMap.channel),displacementMapUv:Ct&&v(o.displacementMap.channel),emissiveMapUv:ot&&v(o.emissiveMap.channel),metalnessMapUv:Et&&v(o.metalnessMap.channel),roughnessMapUv:Mt&&v(o.roughnessMap.channel),anisotropyMapUv:we&&v(o.anisotropyMap.channel),clearcoatMapUv:u&&v(o.clearcoatMap.channel),clearcoatNormalMapUv:a&&v(o.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:b&&v(o.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:$&&v(o.diffuseRoughnessMap.channel),iridescenceMapUv:z&&v(o.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(o.iridescenceThicknessMap.channel),sheenColorMapUv:se&&v(o.sheenColorMap.channel),sheenRoughnessMapUv:B&&v(o.sheenRoughnessMap.channel),specularMapUv:H&&v(o.specularMap.channel),specularColorMapUv:ae&&v(o.specularColorMap.channel),specularIntensityMapUv:m&&v(o.specularIntensityMap.channel),transmissionMapUv:W&&v(o.transmissionMap.channel),thicknessMapUv:F&&v(o.thicknessMap.channel),alphaMapUv:ee&&v(o.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(Je||Tt),vertexNormals:!!A.attributes.normal,vertexColors:o.vertexColors,vertexAlphas:o.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!A.attributes.uv&&(be||ee),fog:!!Z,useFog:o.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:o.wireframe===!1&&(o.flatShading===!0||A.attributes.normal===void 0&&Je===!1&&(o.isMeshLambertMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isMeshPhysicalMaterial)),sizeAttenuation:o.sizeAttenuation===!0,logarithmicDepthBuffer:N,reversedDepthBuffer:me,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ae,numSunLights:h.sun.length,numDirLights:h.directional.length,numPointLights:h.point.length,numSpotLights:h.spot.length,numSpotLightMaps:h.spotLightMap.length,numRectAreaLights:h.rectArea.length,numHemiLights:h.hemi.length,numSunLightShadows:h.sunShadowMap.length,numDirLightShadows:h.directionalShadowMap.length,numPointLightShadows:h.pointShadowMap.length,numSpotLightShadows:h.spotShadowMap.length,numSpotLightShadowsWithMaps:h.numSpotLightShadowsWithMaps,numLightProbes:h.numLightProbes,numLightProbeGrids:X.filter(de=>de.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:o.dithering,shadowMapEnabled:e.shadowMap.enabled&&q.length>0,shadowMapType:e.shadowMap.type,toneMapping:J,decodeVideoTexture:be&&o.map.isVideoTexture===!0&&et.getTransfer(o.map.colorSpace)===Ke,decodeVideoTextureEmissive:ot&&o.emissiveMap.isVideoTexture===!0&&et.getTransfer(o.emissiveMap.colorSpace)===Ke,premultipliedAlpha:o.premultipliedAlpha,doubleSided:o.side===Nt,flipSided:o.side===St,useDepthPacking:o.depthPacking>=0,depthPacking:o.depthPacking||0,index0AttributeName:o.index0AttributeName,extensionClipCullDistance:Le&&o.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&o.extensions.multiDraw===!0||ht)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:o.customProgramCacheKey()};return Pe.vertexUv1s=D.has(1),Pe.vertexUv2s=D.has(2),Pe.vertexUv3s=D.has(3),D.clear(),Pe}function U(o){const h=[];if(o.shaderID?h.push(o.shaderID):(h.push(o.customVertexShaderID),h.push(o.customFragmentShaderID)),o.defines!==void 0)for(const q in o.defines)h.push(q),h.push(o.defines[q]);return o.isRawShaderMaterial===!1&&(f(h,o),l(h,o),h.push(e.outputColorSpace)),h.push(o.customProgramCacheKey),h.join()}function f(o,h){o.push(h.precision),o.push(h.outputColorSpace),o.push(h.envMapMode),o.push(h.envMapPMREM),o.push(h.envMapMaxLod),o.push(h.envMapSize),o.push(h.mapUv),o.push(h.alphaMapUv),o.push(h.lightMapUv),o.push(h.aoMapUv),o.push(h.bumpMapUv),o.push(h.normalMapUv),o.push(h.displacementMapUv),o.push(h.emissiveMapUv),o.push(h.metalnessMapUv),o.push(h.roughnessMapUv),o.push(h.anisotropyMapUv),o.push(h.clearcoatMapUv),o.push(h.clearcoatNormalMapUv),o.push(h.clearcoatRoughnessMapUv),o.push(h.diffuseRoughnessMapUv),o.push(h.iridescenceMapUv),o.push(h.iridescenceThicknessMapUv),o.push(h.sheenColorMapUv),o.push(h.sheenRoughnessMapUv),o.push(h.specularMapUv),o.push(h.specularColorMapUv),o.push(h.specularIntensityMapUv),o.push(h.transmissionMapUv),o.push(h.thicknessMapUv),o.push(h.combine),o.push(h.fogExp2),o.push(h.sizeAttenuation),o.push(h.morphTargetsCount),o.push(h.numSunLights),o.push(h.numDirLights),o.push(h.numPointLights),o.push(h.numSpotLights),o.push(h.numSpotLightMaps),o.push(h.numHemiLights),o.push(h.numRectAreaLights),o.push(h.numSunLightShadows),o.push(h.numDirLightShadows),o.push(h.numPointLightShadows),o.push(h.numSpotLightShadows),o.push(h.numSpotLightShadowsWithMaps),o.push(h.numLightProbes),o.push(h.numLightProbeGrids),o.push(h.shadowMapType),o.push(h.toneMapping),o.push(h.numClippingPlanes),o.push(h.numClipIntersection),o.push(h.depthPacking)}function l(o,h){d.disableAll(),h.instancing&&d.enable(0),h.instancingColor&&d.enable(1),h.instancingMorph&&d.enable(2),h.matcap&&d.enable(3),h.envMap&&d.enable(4),h.normalMapObjectSpace&&d.enable(5),h.normalMapTangentSpace&&d.enable(6),h.clearcoat&&d.enable(7),h.iridescence&&d.enable(8),h.alphaTest&&d.enable(9),h.vertexColors&&d.enable(10),h.vertexAlphas&&d.enable(11),h.vertexUv1s&&d.enable(12),h.vertexUv2s&&d.enable(13),h.vertexUv3s&&d.enable(14),h.vertexTangents&&d.enable(15),h.anisotropy&&d.enable(16),h.alphaHash&&d.enable(17),h.batching&&d.enable(18),h.dispersion&&d.enable(19),h.retroreflection&&d.enable(24),h.diffuseRoughness&&d.enable(25),h.batchingColor&&d.enable(20),h.gradientMap&&d.enable(21),h.packedNormalMap&&d.enable(22),h.vertexNormals&&d.enable(23),o.push(d.mask),d.disableAll(),h.fog&&d.enable(0),h.useFog&&d.enable(1),h.flatShading&&d.enable(2),h.logarithmicDepthBuffer&&d.enable(3),h.reversedDepthBuffer&&d.enable(4),h.skinning&&d.enable(5),h.morphTargets&&d.enable(6),h.morphNormals&&d.enable(7),h.morphColors&&d.enable(8),h.premultipliedAlpha&&d.enable(9),h.shadowMapEnabled&&d.enable(10),h.doubleSided&&d.enable(11),h.flipSided&&d.enable(12),h.useDepthPacking&&d.enable(13),h.dithering&&d.enable(14),h.transmission&&d.enable(15),h.sheen&&d.enable(16),h.opaque&&d.enable(17),h.pointsUvs&&d.enable(18),h.decodeVideoTexture&&d.enable(19),h.decodeVideoTextureEmissive&&d.enable(20),h.alphaToCoverage&&d.enable(21),h.numLightProbeGrids>0&&d.enable(22),h.hasPositionAttribute&&d.enable(23),o.push(d.mask)}function _(o){const h=x[o.type];let q;if(h){const y=Lt[h];q=no.clone(y.uniforms)}else q=o.uniforms;return q}function L(o,h){let q=G.get(h);return q!==void 0?++q.usedTimes:(q=new zf(e,h,o,c),S.push(q),G.set(h,q)),q}function M(o){if(--o.usedTimes===0){const h=S.indexOf(o);S[h]=S[S.length-1],S.pop(),G.delete(o.cacheKey),o.destroy()}}function w(o){p.remove(o)}function E(){p.dispose()}return{getParameters:P,getProgramCacheKey:U,getUniforms:_,acquireProgram:L,releaseProgram:M,releaseShaderCache:w,programs:S,dispose:E}}function $f(){let e=new WeakMap;function n(d){return e.has(d)}function t(d){let p=e.get(d);return p===void 0&&(p={},e.set(d,p)),p}function i(d){e.delete(d)}function c(d,p,D){e.get(d)[p]=D}function s(){e=new WeakMap}return{has:n,get:t,remove:i,update:c,dispose:s}}function Qf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function fa(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function da(){const e=[];let n=0;const t=[],i=[],c=[];function s(){n=0,t.length=0,i.length=0,c.length=0}function d(x){let v=0;return x.isInstancedMesh&&(v+=2),x.isSkinnedMesh&&(v+=1),v}function p(x,v,P,U,f,l){let _=e[n];return _===void 0?(_={id:x.id,object:x,geometry:v,material:P,materialVariant:d(x),groupOrder:U,renderOrder:x.renderOrder,z:f,group:l},e[n]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=P,_.materialVariant=d(x),_.groupOrder=U,_.renderOrder=x.renderOrder,_.z=f,_.group=l),n++,_}function D(x,v,P,U,f,l,_){_.reversedDepth===!0&&(f=-f);const L=p(x,v,P,U,f,l);P.transmission>0?i.push(L):P.transparent===!0?c.push(L):t.push(L)}function S(x,v,P,U,f,l){const _=p(x,v,P,U,f,l);P.transmission>0?i.unshift(_):P.transparent===!0?c.unshift(_):t.unshift(_)}function G(x,v){t.length>1&&t.sort(x||Qf),i.length>1&&i.sort(v||fa),c.length>1&&c.sort(v||fa)}function N(){for(let x=n,v=e.length;x<v;x++){const P=e[x];if(P.id===null)break;P.id=null,P.object=null,P.geometry=null,P.material=null,P.group=null}}return{opaque:t,transmissive:i,transparent:c,init:s,push:D,unshift:S,finish:N,sort:G}}function Jf(){let e=new WeakMap;function n(i,c){const s=e.get(i);let d;return s===void 0?(d=new da,e.set(i,[d])):c>=s.length?(d=new da,s.push(d)):d=s[c],d}function t(){e=new WeakMap}return{get:n,dispose:t}}function jf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={direction:new Ge,color:new Qe};break;case"SpotLight":t={position:new Ge,direction:new Ge,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ge,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ge,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new Ge,halfWidth:new Ge,halfHeight:new Ge};break}return e[n.id]=t,t}}}function ed(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let td=0;function nd(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function id(e){const n=new jf,t=ed(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let S=0;S<9;S++)i.probe.push(new Ge);const c=new Ge,s=new Qt,d=new Qt;function p(S){let G=0,N=0,x=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let v=0,P=0,U=0,f=0,l=0,_=0,L=0,M=0,w=0,E=0,o=0,h=0,q=0,y=0;S.sort(nd);for(let X=0,Z=S.length;X<Z;X++){const A=S[X],Q=A.color,Y=A.intensity,V=A.distance;let fe=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===jt?fe=A.shadow.map.texture:fe=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)G+=Q.r*Y,N+=Q.g*Y,x+=Q.b*Y;else if(A.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(A.sh.coefficients[K],Y);y++}else if(A.isSunLight){const K=n.get(A);if(K.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const j=A.shadow,ie=t.get(A);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[P]=ie,i.sunShadowMap[P]=fe;const Ae=j.getViewportCount();for(let Ue=0;Ue<Ae;Ue++)i.sunShadowMatrix[U+Ue]=j.getMatrix(Ue),i.sunShadowCascade[U+Ue]=j._cascadeData[Ue];U+=Ae,P++}i.sun[v]=K,v++}else if(A.isDirectionalLight){const K=n.get(A);if(K.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const j=A.shadow,ie=t.get(A);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,i.directionalShadow[f]=ie,i.directionalShadowMap[f]=fe,i.directionalShadowMatrix[f]=A.shadow.matrix,w++}i.directional[f]=K,f++}else if(A.isSpotLight){const K=n.get(A);K.position.setFromMatrixPosition(A.matrixWorld),K.color.copy(Q).multiplyScalar(Y),K.distance=V,K.coneCos=Math.cos(A.angle),K.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),K.decay=A.decay,i.spot[_]=K;const j=A.shadow;if(A.map&&(i.spotLightMap[h]=A.map,h++,j.updateMatrices(A),A.castShadow&&q++),i.spotLightMatrix[_]=j.matrix,A.castShadow){const ie=t.get(A);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,i.spotShadow[_]=ie,i.spotShadowMap[_]=fe,o++}_++}else if(A.isRectAreaLight){const K=n.get(A);K.color.copy(Q).multiplyScalar(Y),K.halfWidth.set(A.width*.5,0,0),K.halfHeight.set(0,A.height*.5,0),i.rectArea[L]=K,L++}else if(A.isPointLight){const K=n.get(A);if(K.color.copy(A.color).multiplyScalar(A.intensity),K.distance=A.distance,K.decay=A.decay,A.castShadow){const j=A.shadow,ie=t.get(A);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,ie.shadowCameraNear=j.camera.near,ie.shadowCameraFar=j.camera.far,i.pointShadow[l]=ie,i.pointShadowMap[l]=fe,i.pointShadowMatrix[l]=A.shadow.matrix,E++}i.point[l]=K,l++}else if(A.isHemisphereLight){const K=n.get(A);K.skyColor.copy(A.color).multiplyScalar(Y),K.groundColor.copy(A.groundColor).multiplyScalar(Y),i.hemi[M]=K,M++}}L>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=G,i.ambient[1]=N,i.ambient[2]=x;const O=i.hash;(O.sunLength!==v||O.directionalLength!==f||O.pointLength!==l||O.spotLength!==_||O.rectAreaLength!==L||O.hemiLength!==M||O.numSunShadows!==P||O.numDirectionalShadows!==w||O.numPointShadows!==E||O.numSpotShadows!==o||O.numSpotMaps!==h||O.numLightProbes!==y)&&(i.sun.length=v,i.directional.length=f,i.spot.length=_,i.rectArea.length=L,i.point.length=l,i.hemi.length=M,i.sunShadow.length=P,i.sunShadowMap.length=P,i.sunShadowMatrix.length=U,i.sunShadowCascade.length=U,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=o,i.spotShadowMap.length=o,i.spotLightMatrix.length=o+h-q,i.spotLightMap.length=h,i.numSpotLightShadowsWithMaps=q,i.numLightProbes=y,O.sunLength=v,O.directionalLength=f,O.pointLength=l,O.spotLength=_,O.rectAreaLength=L,O.hemiLength=M,O.numSunShadows=P,O.numDirectionalShadows=w,O.numPointShadows=E,O.numSpotShadows=o,O.numSpotMaps=h,O.numLightProbes=y,i.version=td++)}function D(S,G){let N=0,x=0,v=0,P=0,U=0,f=0;const l=G.matrixWorldInverse;for(let _=0,L=S.length;_<L;_++){const M=S[_];if(M.isSunLight){const w=i.sun[N];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(l),N++}else if(M.isDirectionalLight){const w=i.directional[x];w.direction.setFromMatrixPosition(M.matrixWorld),c.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(c),w.direction.transformDirection(l),x++}else if(M.isSpotLight){const w=i.spot[P];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(l),w.direction.setFromMatrixPosition(M.matrixWorld),c.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(c),w.direction.transformDirection(l),P++}else if(M.isRectAreaLight){const w=i.rectArea[U];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(l),d.identity(),s.copy(M.matrixWorld),s.premultiply(l),d.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),U++}else if(M.isPointLight){const w=i.point[v];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(l),v++}else if(M.isHemisphereLight){const w=i.hemi[f];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(l),f++}}}return{setup:p,setupView:D,state:i}}function ua(e){const n=new id(e),t=[],i=[],c=[];function s(N){G.camera=N,t.length=0,i.length=0,c.length=0}function d(N){N.isLightProbeGrid?c.push(N):t.push(N)}function p(N){i.push(N)}function D(){n.setup(t),c.sort((N,x)=>N.priority-x.priority||N.id-x.id)}function S(N){n.setupView(t,N)}const G={lightsArray:t,shadowsArray:i,lightProbeGridArray:c,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:G,setupLights:D,setupLightsView:S,pushLight:d,pushShadow:p}}function ad(e){let n=new WeakMap;function t(c,s=0){const d=n.get(c);let p;return d===void 0?(p=new ua(e),n.set(c,[p])):s>=d.length?(p=new ua(e),d.push(p)):p=d[s],p}function i(){n=new WeakMap}return{get:t,dispose:i}}const rd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,od=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sd=[new Ge(1,0,0),new Ge(-1,0,0),new Ge(0,1,0),new Ge(0,-1,0),new Ge(0,0,1),new Ge(0,0,-1)],ld=[new Ge(0,-1,0),new Ge(0,-1,0),new Ge(0,0,1),new Ge(0,0,-1),new Ge(0,-1,0),new Ge(0,-1,0)],pa=new Qt,rn=new Ge,Hn=new Ge;function cd(e,n,t){let i=new ha;const c=new xt,s=new xt,d=new vt,p=new Nr,D=new Ir,S={},G=t.maxTextureSize,N={[cn]:St,[St]:cn,[Nt]:Nt},x=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:rd,fragmentShader:od}),v=x.clone();v.defines.HORIZONTAL_PASS=1;const P=new va;P.setAttribute("position",new Or(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new gt(P,x),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xn;let l=this.type;this.render=function(E,o,h){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;this.type===Fr&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xn);const q=e.getRenderTarget(),y=e.getActiveCubeFace(),O=e.getActiveMipmapLevel(),X=e.state;X.setBlending($t),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const Z=l!==this.type;Z&&o.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(Q=>Q.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,Q=E.length;A<Q;A++){const Y=E[A],V=Y.shadow;if(V===void 0){We("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;c.copy(V.mapSize);const fe=V.getFrameExtents();c.multiply(fe),s.copy(V.mapSize),(c.x>G||c.y>G)&&(c.x>G&&(s.x=Math.floor(G/fe.x),c.x=s.x*fe.x,V.mapSize.x=s.x),c.y>G&&(s.y=Math.floor(G/fe.y),c.y=s.y*fe.y,V.mapSize.y=s.y));const K=e.state.buffers.depth.getReversed();if(V.camera._reversedDepth=K,V.map===null||Z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===sn){if(Y.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new yt(c.x,c.y,{format:jt,type:Ot,minFilter:wt,magFilter:wt,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new dn(c.x,c.y,Gt),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=un,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt}else Y.isPointLight?(V.map=new qn(c.x),V.map.depthTexture=new Sa(c.x,qt)):(V.map=new yt(c.x,c.y),V.map.depthTexture=new dn(c.x,c.y,qt)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=un,this.type===xn?(V.map.depthTexture.compareFunction=K?ma:_a,V.map.depthTexture.minFilter=wt,V.map.depthTexture.magFilter=wt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==c.x||V.map.height!==c.y)&&V.map.setSize(c.x,c.y);const j=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Y.isPointLight!==!0&&V.updateMatrices(Y,h);const ie=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:h.layers;for(let Ae=0;Ae<j;Ae++){const Ue=V.getCamera(Ae);if(Y.isPointLight){const k=V.camera,he=V.matrix,Se=Y.distance||k.far;Se!==k.far&&(k.far=Se,k.updateProjectionMatrix()),rn.setFromMatrixPosition(Y.matrixWorld),k.position.copy(rn),Hn.copy(k.position),Hn.add(sd[Ae]),k.up.copy(ld[Ae]),k.lookAt(Hn),k.updateMatrixWorld(),he.makeTranslation(-rn.x,-rn.y,-rn.z),pa.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),V._frustum.setFromProjectionMatrix(pa,k.coordinateSystem,k.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)e.setRenderTarget(V.map,Ae),e.clear();else{Ae===0&&(e.setRenderTarget(V.map),e.clear());const k=V.getViewport(Ae);d.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),X.viewport(d)}i=V.getFrustum(Ae),M(o,h,Ue,Y,ie,this.type)}V.isPointLightShadow!==!0&&this.type===sn&&_(V,h),V.needsUpdate=!1}l=this.type,f.needsUpdate=!1,e.setRenderTarget(q,y,O)};function _(E,o){const h=n.update(U);x.defines.VSM_SAMPLES!==E.blurSamples&&(x.defines.VSM_SAMPLES=E.blurSamples,v.defines.VSM_SAMPLES=E.blurSamples,x.needsUpdate=!0,v.needsUpdate=!0),E.mapPass===null?E.mapPass=new yt(c.x,c.y,{format:jt,type:Ot}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),x.uniforms.shadow_pass.value=E.map.depthTexture,x.uniforms.resolution.value.set(E.map.width,E.map.height),x.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(o,null,h,x,U,null),v.uniforms.shadow_pass.value=E.mapPass.texture,v.uniforms.resolution.value.set(E.map.width,E.map.height),v.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(o,null,h,v,U,null)}function L(E,o,h,q){let y=null;const O=h.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)y=O;else if(y=h.isPointLight===!0?D:p,e.localClippingEnabled&&o.clipShadows===!0&&Array.isArray(o.clippingPlanes)&&o.clippingPlanes.length!==0||o.displacementMap&&o.displacementScale!==0||o.alphaMap&&o.alphaTest>0||o.map&&o.alphaTest>0||o.alphaToCoverage===!0){const X=y.uuid,Z=o.uuid;let A=S[X];A===void 0&&(A={},S[X]=A);let Q=A[Z];Q===void 0&&(Q=y.clone(),A[Z]=Q,o.addEventListener("dispose",w)),y=Q}if(y.visible=o.visible,y.wireframe=o.wireframe,q===sn?y.side=o.shadowSide!==null?o.shadowSide:o.side:y.side=o.shadowSide!==null?o.shadowSide:N[o.side],y.alphaMap=o.alphaMap,y.alphaTest=o.alphaToCoverage===!0?.5:o.alphaTest,y.map=o.map,y.clipShadows=o.clipShadows,y.clippingPlanes=o.clippingPlanes,y.clipIntersection=o.clipIntersection,y.displacementMap=o.displacementMap,y.displacementScale=o.displacementScale,y.displacementBias=o.displacementBias,y.wireframeLinewidth=o.wireframeLinewidth,y.linewidth=o.linewidth,h.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=e.properties.get(y);X.light=h}return y}function M(E,o,h,q,y,O){if(E.visible===!1)return;if(E.layers.test(y)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===sn)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(h.matrixWorldInverse,E.matrixWorld);const A=n.update(E),Q=E.material;if(Array.isArray(Q)){const Y=A.groups;for(let V=0,fe=Y.length;V<fe;V++){const K=Y[V],j=Q[K.materialIndex];if(j&&j.visible){const ie=L(E,j,q,O);E.onBeforeShadow(e,E,o,h,A,ie,K),e.renderBufferDirect(h,null,A,ie,E,K),E.onAfterShadow(e,E,o,h,A,ie,K)}}}else if(Q.visible){const Y=L(E,Q,q,O);E.onBeforeShadow(e,E,o,h,A,Y,null),e.renderBufferDirect(h,null,A,Y,E,null),E.onAfterShadow(e,E,o,h,A,Y,null)}}const Z=E.children;for(let A=0,Q=Z.length;A<Q;A++)M(Z[A],o,h,q,y,O)}function w(E){E.target.removeEventListener("dispose",w);for(const h in S){const q=S[h],y=E.target.uuid;y in q&&(q[y].dispose(),delete q[y])}}}function fd(e,n){function t(){let m=!1;const W=new vt;let F=null;const re=new vt(0,0,0,0);return{setMask:function(ee){F!==ee&&!m&&(e.colorMask(ee,ee,ee,ee),F=ee)},setLocked:function(ee){m=ee},setClear:function(ee,ne,Ee,Le,J){J===!0&&(ee*=Le,ne*=Le,Ee*=Le),W.set(ee,ne,Ee,Le),re.equals(W)===!1&&(e.clearColor(ee,ne,Ee,Le),re.copy(W))},reset:function(){m=!1,F=null,re.set(-1,0,0,0)}}}function i(){let m=!1,W=!1,F=null,re=null,ee=null;return{setReversed:function(ne){if(W!==ne){const Ee=n.get("EXT_clip_control");ne?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),W=ne;const Le=ee;ee=null,this.setClear(Le)}},getReversed:function(){return W},setTest:function(ne){ne?me(e.DEPTH_TEST):ye(e.DEPTH_TEST)},setMask:function(ne){F!==ne&&!m&&(e.depthMask(ne),F=ne)},setFunc:function(ne){if(W&&(ne=Eo[ne]),re!==ne){switch(ne){case Jr:e.depthFunc(e.NEVER);break;case Qr:e.depthFunc(e.ALWAYS);break;case $r:e.depthFunc(e.LESS);break;case si:e.depthFunc(e.LEQUAL);break;case Zr:e.depthFunc(e.EQUAL);break;case Yr:e.depthFunc(e.GEQUAL);break;case qr:e.depthFunc(e.GREATER);break;case Kr:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}re=ne}},setLocked:function(ne){m=ne},setClear:function(ne){ee!==ne&&(ee=ne,W&&(ne=1-ne),e.clearDepth(ne))},reset:function(){m=!1,F=null,re=null,ee=null,W=!1}}}function c(){let m=!1,W=null,F=null,re=null,ee=null,ne=null,Ee=null,Le=null,J=null;return{setTest:function(Me){m||(Me?me(e.STENCIL_TEST):ye(e.STENCIL_TEST))},setMask:function(Me){W!==Me&&!m&&(e.stencilMask(Me),W=Me)},setFunc:function(Me,Pe,de){(F!==Me||re!==Pe||ee!==de)&&(e.stencilFunc(Me,Pe,de),F=Me,re=Pe,ee=de)},setOp:function(Me,Pe,de){(ne!==Me||Ee!==Pe||Le!==de)&&(e.stencilOp(Me,Pe,de),ne=Me,Ee=Pe,Le=de)},setLocked:function(Me){m=Me},setClear:function(Me){J!==Me&&(e.clearStencil(Me),J=Me)},reset:function(){m=!1,W=null,F=null,re=null,ee=null,ne=null,Ee=null,Le=null,J=null}}}const s=new t,d=new i,p=new c;let D={};const S=new WeakMap;let G={},N={},x={},v=new WeakMap,P=[],U=null,f=!1,l=null,_=null,L=null,M=null,w=null,E=null,o=null,h=new Qe(0,0,0),q=0,y=!1,O=null,X=null,Z=null,A=null,Q=null;const Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,fe=0;const K=e.getParameter(e.VERSION);K.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(K)[1]),V=fe>=1):K.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),V=fe>=2);let j=null,ie={};const Ae=e.getParameter(e.SCISSOR_BOX),Ue=e.getParameter(e.VIEWPORT),k=new vt().fromArray(Ae),he=new vt().fromArray(Ue);function Se(m,W,F,re){const ee=new Uint8Array(4),ne=e.createTexture();e.bindTexture(m,ne),e.texParameteri(m,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(m,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ee=0;Ee<F;Ee++)m===e.TEXTURE_3D||m===e.TEXTURE_2D_ARRAY?e.texImage3D(W,0,e.RGBA,1,1,re,0,e.RGBA,e.UNSIGNED_BYTE,ee):e.texImage2D(W+Ee,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ee);return ne}const Re={};Re[e.TEXTURE_2D]=Se(e.TEXTURE_2D,e.TEXTURE_2D,1),Re[e.TEXTURE_CUBE_MAP]=Se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[e.TEXTURE_2D_ARRAY]=Se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Re[e.TEXTURE_3D]=Se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),d.setClear(1),p.setClear(0),me(e.DEPTH_TEST),d.setFunc(si),mt(!1),Je(ci),me(e.CULL_FACE),ct($t);function me(m){G[m]!==!0&&(e.enable(m),G[m]=!0)}function ye(m){G[m]!==!1&&(e.disable(m),G[m]=!1)}function ht(m,W){return x[m]!==W?(e.bindFramebuffer(m,W),x[m]=W,m===e.DRAW_FRAMEBUFFER&&(x[e.FRAMEBUFFER]=W),m===e.FRAMEBUFFER&&(x[e.DRAW_FRAMEBUFFER]=W),!0):!1}function be(m,W){let F=P,re=!1;if(m){F=v.get(W),F===void 0&&(F=[],v.set(W,F));const ee=m.textures;if(F.length!==ee.length||F[0]!==e.COLOR_ATTACHMENT0){for(let ne=0,Ee=ee.length;ne<Ee;ne++)F[ne]=e.COLOR_ATTACHMENT0+ne;F.length=ee.length,re=!0}}else F[0]!==e.BACK&&(F[0]=e.BACK,re=!0);re&&e.drawBuffers(F)}function qe(m){return U!==m?(e.useProgram(m),U=m,!0):!1}const ke={[an]:e.FUNC_ADD,[fr]:e.FUNC_SUBTRACT,[cr]:e.FUNC_REVERSE_SUBTRACT};ke[Mo]=e.MIN,ke[To]=e.MAX;const Ne={[Rr]:e.ZERO,[Ar]:e.ONE,[Tr]:e.SRC_COLOR,[Mr]:e.SRC_ALPHA,[Er]:e.SRC_ALPHA_SATURATE,[xr]:e.DST_COLOR,[Sr]:e.DST_ALPHA,[vr]:e.ONE_MINUS_SRC_COLOR,[gr]:e.ONE_MINUS_SRC_ALPHA,[_r]:e.ONE_MINUS_DST_COLOR,[mr]:e.ONE_MINUS_DST_ALPHA,[hr]:e.CONSTANT_COLOR,[pr]:e.ONE_MINUS_CONSTANT_COLOR,[ur]:e.CONSTANT_ALPHA,[dr]:e.ONE_MINUS_CONSTANT_ALPHA};function ct(m,W,F,re,ee,ne,Ee,Le,J,Me){if(m===$t){f===!0&&(ye(e.BLEND),f=!1);return}if(f===!1&&(me(e.BLEND),f=!0),m!==to){if(m!==l||Me!==y){if((_!==an||w!==an)&&(e.blendEquation(e.FUNC_ADD),_=an,w=an),Me)switch(m){case En:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ui:e.blendFunc(e.ONE,e.ONE);break;case di:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case fi:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:$e("WebGLState: Invalid blending: ",m);break}else switch(m){case En:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ui:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case di:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fi:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",m);break}L=null,M=null,E=null,o=null,h.set(0,0,0),q=0,l=m,y=Me}return}ee=ee||W,ne=ne||F,Ee=Ee||re,(W!==_||ee!==w)&&(e.blendEquationSeparate(ke[W],ke[ee]),_=W,w=ee),(F!==L||re!==M||ne!==E||Ee!==o)&&(e.blendFuncSeparate(Ne[F],Ne[re],Ne[ne],Ne[Ee]),L=F,M=re,E=ne,o=Ee),(Le.equals(h)===!1||J!==q)&&(e.blendColor(Le.r,Le.g,Le.b,J),h.copy(Le),q=J),l=m,y=!1}function nt(m,W){m.side===Nt?ye(e.CULL_FACE):me(e.CULL_FACE);let F=m.side===St;W&&(F=!F),mt(F),m.blending===En&&m.transparent===!1?ct($t):ct(m.blending,m.blendEquation,m.blendSrc,m.blendDst,m.blendEquationAlpha,m.blendSrcAlpha,m.blendDstAlpha,m.blendColor,m.blendAlpha,m.premultipliedAlpha),d.setFunc(m.depthFunc),d.setTest(m.depthTest),d.setMask(m.depthWrite),s.setMask(m.colorWrite);const re=m.stencilWrite;p.setTest(re),re&&(p.setMask(m.stencilWriteMask),p.setFunc(m.stencilFunc,m.stencilRef,m.stencilFuncMask),p.setOp(m.stencilFail,m.stencilZFail,m.stencilZPass)),ot(m.polygonOffset,m.polygonOffsetFactor,m.polygonOffsetUnits),m.alphaToCoverage===!0?me(e.SAMPLE_ALPHA_TO_COVERAGE):ye(e.SAMPLE_ALPHA_TO_COVERAGE)}function mt(m){O!==m&&(m?e.frontFace(e.CW):e.frontFace(e.CCW),O=m)}function Je(m){m!==jr?(me(e.CULL_FACE),m!==X&&(m===ci?e.cullFace(e.BACK):m===eo?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ye(e.CULL_FACE),X=m}function Ct(m){m!==Z&&(V&&e.lineWidth(m),Z=m)}function ot(m,W,F){m?(me(e.POLYGON_OFFSET_FILL),(A!==W||Q!==F)&&(A=W,Q=F,d.getReversed()&&(W=-W,F=-F),e.polygonOffset(W,F))):ye(e.POLYGON_OFFSET_FILL)}function Et(m){m?me(e.SCISSOR_TEST):ye(e.SCISSOR_TEST)}function Mt(m){m===void 0&&(m=e.TEXTURE0+Y-1),j!==m&&(e.activeTexture(m),j=m)}function Tt(m,W,F){F===void 0&&(j===null?F=e.TEXTURE0+Y-1:F=j);let re=ie[F];re===void 0&&(re={type:void 0,texture:void 0},ie[F]=re),(re.type!==m||re.texture!==W)&&(j!==F&&(e.activeTexture(F),j=F),e.bindTexture(m,W||Re[m]),re.type=m,re.texture=W)}function T(){const m=ie[j];m!==void 0&&m.type!==void 0&&(e.bindTexture(m.type,null),m.type=void 0,m.texture=void 0)}function At(){try{e.compressedTexImage2D(...arguments)}catch(m){$e("WebGLState:",m)}}function Ye(){try{e.compressedTexImage3D(...arguments)}catch(m){$e("WebGLState:",m)}}function Ze(){try{e.texSubImage2D(...arguments)}catch(m){$e("WebGLState:",m)}}function ce(){try{e.texSubImage3D(...arguments)}catch(m){$e("WebGLState:",m)}}function it(){try{e.compressedTexSubImage2D(...arguments)}catch(m){$e("WebGLState:",m)}}function Te(){try{e.compressedTexSubImage3D(...arguments)}catch(m){$e("WebGLState:",m)}}function we(){try{e.texStorage2D(...arguments)}catch(m){$e("WebGLState:",m)}}function u(){try{e.texStorage3D(...arguments)}catch(m){$e("WebGLState:",m)}}function a(){try{e.texImage2D(...arguments)}catch(m){$e("WebGLState:",m)}}function b(){try{e.texImage3D(...arguments)}catch(m){$e("WebGLState:",m)}}function $(m){return N[m]!==void 0?N[m]:e.getParameter(m)}function z(m,W){N[m]!==W&&(e.pixelStorei(m,W),N[m]=W)}function te(m){k.equals(m)===!1&&(e.scissor(m.x,m.y,m.z,m.w),k.copy(m))}function se(m){he.equals(m)===!1&&(e.viewport(m.x,m.y,m.z,m.w),he.copy(m))}function B(m,W){let F=S.get(W);F===void 0&&(F=new WeakMap,S.set(W,F));let re=F.get(m);re===void 0&&(re=e.getUniformBlockIndex(W,m.name),e.uniformBlockBinding(W,re,re),F.set(m,re))}function H(m,W,F){const ee=S.get(W).get(m);D[ee]!==F&&(e.bindBufferBase(e.UNIFORM_BUFFER,ee,F),D[ee]=F)}function ae(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),d.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),G={},N={},j=null,ie={},x={},D={},v=new WeakMap,P=[],U=null,f=!1,l=null,_=null,L=null,M=null,w=null,E=null,o=null,h=new Qe(0,0,0),q=0,y=!1,O=null,X=null,Z=null,A=null,Q=null,k.set(0,0,e.canvas.width,e.canvas.height),he.set(0,0,e.canvas.width,e.canvas.height),s.reset(),d.reset(),p.reset()}return{buffers:{color:s,depth:d,stencil:p},enable:me,disable:ye,bindFramebuffer:ht,drawBuffers:be,useProgram:qe,setBlending:ct,setMaterial:nt,setFlipSided:mt,setCullFace:Je,setLineWidth:Ct,setPolygonOffset:ot,setScissorTest:Et,activeTexture:Mt,bindTexture:Tt,unbindTexture:T,compressedTexImage2D:At,compressedTexImage3D:Ye,texImage2D:a,texImage3D:b,pixelStorei:z,getParameter:$,updateUBOMapping:B,uniformBlockBinding:H,texStorage2D:we,texStorage3D:u,texSubImage2D:Ze,texSubImage3D:ce,compressedTexSubImage2D:it,compressedTexSubImage3D:Te,scissor:te,viewport:se,reset:ae}}function dd(e,n,t,i,c,s,d){const p=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,D=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),S=new xt,G=new WeakMap,N=new Set;let x;const v=new WeakMap,P=new Set,U=new FinalizationRegistry(u=>P.delete(u));let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function l(u,a){return f?new OffscreenCanvas(u,a):mo("canvas")}function _(u,a,b){let $=1;const z=we(u);if((z.width>b||z.height>b)&&($=b/Math.max(z.width,z.height)),$<1)if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap||typeof VideoFrame<"u"&&u instanceof VideoFrame){const te=Math.floor($*z.width),se=Math.floor($*z.height);x===void 0&&(x=l(te,se));const B=a?l(te,se):x;return B.width=te,B.height=se,B.getContext("2d").drawImage(u,0,0,te,se),We("WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+te+"x"+se+")."),B}else return"data"in u&&We("WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),u;return u}function L(u){return u.generateMipmaps}function M(u){e.generateMipmap(u)}function w(u){return u.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:u.isWebGL3DRenderTarget?e.TEXTURE_3D:u.isWebGLArrayRenderTarget||u.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function E(u,a,b,$,z,te=!1){if(u!==null){if(e[u]!==void 0)return e[u];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+u+"'")}let se;$&&(se=n.get("EXT_texture_norm16"),se||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=a;if(a===e.RED&&(b===e.FLOAT&&(B=e.R32F),b===e.HALF_FLOAT&&(B=e.R16F),b===e.UNSIGNED_BYTE&&(B=e.R8),b===e.UNSIGNED_SHORT&&se&&(B=se.R16_EXT),b===e.SHORT&&se&&(B=se.R16_SNORM_EXT)),a===e.RED_INTEGER&&(b===e.UNSIGNED_BYTE&&(B=e.R8UI),b===e.UNSIGNED_SHORT&&(B=e.R16UI),b===e.UNSIGNED_INT&&(B=e.R32UI),b===e.BYTE&&(B=e.R8I),b===e.SHORT&&(B=e.R16I),b===e.INT&&(B=e.R32I)),a===e.RG&&(b===e.FLOAT&&(B=e.RG32F),b===e.HALF_FLOAT&&(B=e.RG16F),b===e.UNSIGNED_BYTE&&(B=e.RG8),b===e.UNSIGNED_SHORT&&se&&(B=se.RG16_EXT),b===e.SHORT&&se&&(B=se.RG16_SNORM_EXT)),a===e.RG_INTEGER&&(b===e.UNSIGNED_BYTE&&(B=e.RG8UI),b===e.UNSIGNED_SHORT&&(B=e.RG16UI),b===e.UNSIGNED_INT&&(B=e.RG32UI),b===e.BYTE&&(B=e.RG8I),b===e.SHORT&&(B=e.RG16I),b===e.INT&&(B=e.RG32I)),a===e.RGB_INTEGER&&(b===e.UNSIGNED_BYTE&&(B=e.RGB8UI),b===e.UNSIGNED_SHORT&&(B=e.RGB16UI),b===e.UNSIGNED_INT&&(B=e.RGB32UI),b===e.BYTE&&(B=e.RGB8I),b===e.SHORT&&(B=e.RGB16I),b===e.INT&&(B=e.RGB32I)),a===e.RGBA_INTEGER&&(b===e.UNSIGNED_BYTE&&(B=e.RGBA8UI),b===e.UNSIGNED_SHORT&&(B=e.RGBA16UI),b===e.UNSIGNED_INT&&(B=e.RGBA32UI),b===e.BYTE&&(B=e.RGBA8I),b===e.SHORT&&(B=e.RGBA16I),b===e.INT&&(B=e.RGBA32I)),a===e.RGB&&(b===e.UNSIGNED_SHORT&&se&&(B=se.RGB16_EXT),b===e.SHORT&&se&&(B=se.RGB16_SNORM_EXT),b===e.UNSIGNED_INT_5_9_9_9_REV&&(B=e.RGB9_E5),b===e.UNSIGNED_INT_10F_11F_11F_REV&&(B=e.R11F_G11F_B10F)),a===e.RGBA){const H=te?ya:et.getTransfer(z);b===e.FLOAT&&(B=e.RGBA32F),b===e.HALF_FLOAT&&(B=e.RGBA16F),b===e.UNSIGNED_BYTE&&(B=H===Ke?e.SRGB8_ALPHA8:e.RGBA8),b===e.UNSIGNED_SHORT&&se&&(B=se.RGBA16_EXT),b===e.SHORT&&se&&(B=se.RGBA16_SNORM_EXT),b===e.UNSIGNED_SHORT_4_4_4_4&&(B=e.RGBA4),b===e.UNSIGNED_SHORT_5_5_5_1&&(B=e.RGB5_A1)}return(B===e.R16F||B===e.R32F||B===e.RG16F||B===e.RG32F||B===e.RGBA16F||B===e.RGBA32F)&&n.get("EXT_color_buffer_float"),B}function o(u,a){let b;return u?a===null||a===qt||a===en?b=e.DEPTH24_STENCIL8:a===Gt?b=e.DEPTH32F_STENCIL8:a===An&&(b=e.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===qt||a===en?b=e.DEPTH_COMPONENT24:a===Gt?b=e.DEPTH_COMPONENT32F:a===An&&(b=e.DEPTH_COMPONENT16),b}function h(u,a){return L(u)===!0||u.isFramebufferTexture&&u.minFilter!==Xt&&u.minFilter!==wt?Math.log2(Math.max(a.width,a.height))+1:u.mipmaps.length>0?u.mipmaps.length:u.isCompressedTexture&&Array.isArray(u.image)?a.mipmaps.length:1}function q(u){const a=new WeakRef(u);i.get(u).__ref=a,P.add(a),U.register(u,a,a)}function y(u){const a=i.get(u).__ref;a!==void 0&&(P.delete(a),U.unregister(a))}function O(u){Z(u.target)}function X(u){A(u.target)}function Z(u){u.removeEventListener("dispose",O),y(u),Y(u),u.isVideoTexture&&G.delete(u),u.isHTMLTexture&&N.delete(u)}function A(u){u.removeEventListener("dispose",X),y(u),fe(u)}function Q(){for(const u of P){const a=u.deref();a!==void 0&&(a.isRenderTarget===!0?A(a):Z(a))}P.clear(),N.clear()}function Y(u){const a=i.get(u);if(a.__webglInit===void 0)return;const b=u.source,$=v.get(b);if($){const z=$[a.__cacheKey];z.usedTimes--,z.usedTimes===0&&V(u),Object.keys($).length===0&&v.delete(b)}i.remove(u)}function V(u){const a=i.get(u);e.deleteTexture(a.__webglTexture);const b=u.source,$=v.get(b);delete $[a.__cacheKey],d.memory.textures--}function fe(u){const a=i.get(u);a.__depthDisposeCallback&&a.__depthDisposeCallback();const b=u.depthTexture;if(b&&b.renderTarget===u&&Z(b),u.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(a.__webglFramebuffer[z]))for(let te=0;te<a.__webglFramebuffer[z].length;te++)e.deleteFramebuffer(a.__webglFramebuffer[z][te]);else e.deleteFramebuffer(a.__webglFramebuffer[z]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[z])}else{if(Array.isArray(a.__webglFramebuffer))for(let z=0;z<a.__webglFramebuffer.length;z++)e.deleteFramebuffer(a.__webglFramebuffer[z]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let z=0;z<a.__webglColorRenderbuffer.length;z++)a.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[z]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}const $=u.textures;for(let z=0,te=$.length;z<te;z++){const se=i.get($[z]);se.__webglTexture&&(e.deleteTexture(se.__webglTexture),d.memory.textures--),i.remove($[z])}i.remove(u)}let K=0;function j(){K=0}function ie(){return K}function Ae(u){K=u}function Ue(){const u=K;return u>=c.maxTextures&&We("WebGLTextures: Trying to use "+(u+1)+" texture units while this GPU supports only "+c.maxTextures),K+=1,u}function k(u){const a=[];return a.push(u.wrapS),a.push(u.wrapT),a.push(u.wrapR||0),a.push(u.magFilter),a.push(u.minFilter),a.push(u.anisotropy),a.push(u.internalFormat),a.push(u.format),a.push(u.type),a.push(u.generateMipmaps),a.push(u.mipmapsAutoUpdate),a.push(u.premultiplyAlpha),a.push(u.flipY),a.push(u.unpackAlignment),a.push(u.colorSpace),a.join()}function he(u,a){const b=i.get(u);if(u.isVideoTexture&&it(u),u.isRenderTargetTexture===!1&&u.isExternalTexture!==!0&&u.version>0&&b.__version!==u.version){const $=u.image;if($===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(b,u,a);return}}else u.isExternalTexture&&(b.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,b.__webglTexture,e.TEXTURE0+a)}function Se(u,a){const b=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&b.__version!==u.version){nt(b,u,a);return}else u.isExternalTexture&&(b.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,b.__webglTexture,e.TEXTURE0+a)}function Re(u,a){const b=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&b.__version!==u.version){nt(b,u,a);return}t.bindTexture(e.TEXTURE_3D,b.__webglTexture,e.TEXTURE0+a)}function me(u,a){const b=i.get(u);if(u.version>0&&b.__version!==u.version){mt(b,u,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+a)}const ye={[wr]:e.REPEAT,[Wn]:e.CLAMP_TO_EDGE,[br]:e.MIRRORED_REPEAT},ht={[Xt]:e.NEAREST,[Cr]:e.NEAREST_MIPMAP_NEAREST,[gn]:e.NEAREST_MIPMAP_LINEAR,[wt]:e.LINEAR,[Ln]:e.LINEAR_MIPMAP_NEAREST,[zt]:e.LINEAR_MIPMAP_LINEAR},be={[Ur]:e.NEVER,[ga]:e.ALWAYS,[yr]:e.LESS,[_a]:e.LEQUAL,[Dr]:e.EQUAL,[ma]:e.GEQUAL,[Lr]:e.GREATER,[Pr]:e.NOTEQUAL};function qe(u,a){if(a.type===Gt&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===wt||a.magFilter===Ln||a.magFilter===gn||a.magFilter===zt||a.minFilter===wt||a.minFilter===Ln||a.minFilter===gn||a.minFilter===zt)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(u,e.TEXTURE_WRAP_S,ye[a.wrapS]),e.texParameteri(u,e.TEXTURE_WRAP_T,ye[a.wrapT]),(u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY)&&e.texParameteri(u,e.TEXTURE_WRAP_R,ye[a.wrapR]),e.texParameteri(u,e.TEXTURE_MAG_FILTER,ht[a.magFilter]),e.texParameteri(u,e.TEXTURE_MIN_FILTER,ht[a.minFilter]),a.compareFunction&&(e.texParameteri(u,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(u,e.TEXTURE_COMPARE_FUNC,be[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===Xt||a.minFilter!==gn&&a.minFilter!==zt||a.type===Gt&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){const b=n.get("EXT_texture_filter_anisotropic");e.texParameterf(u,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,c.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function ke(u,a){let b=!1;u.__webglInit===void 0&&(u.__webglInit=!0,a.addEventListener("dispose",O),q(a));const $=a.source;let z=v.get($);z===void 0&&(z={},v.set($,z));const te=k(a);if(te!==u.__cacheKey){z[te]===void 0&&(z[te]={texture:e.createTexture(),usedTimes:0},d.memory.textures++,b=!0),z[te].usedTimes++;const se=z[u.__cacheKey];se!==void 0&&(z[u.__cacheKey].usedTimes--,se.usedTimes===0&&V(a)),u.__cacheKey=te,u.__webglTexture=z[te].texture}return b}function Ne(u,a,b){return Math.floor(Math.floor(u/b)/a)}function ct(u,a,b,$){const te=u.updateRanges;if(te.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,a.width,a.height,b,$,a.data);else{te.sort((m,W)=>m.start-W.start);let se=0;for(let m=1;m<te.length;m++){const W=te[se],F=te[m],re=W.start+W.count,ee=Ne(F.start,a.width,4),ne=Ne(W.start,a.width,4);F.start<=re+1&&ee===ne&&Ne(F.start+F.count-1,a.width,4)===ee?W.count=Math.max(W.count,F.start+F.count-W.start):(++se,te[se]=F)}te.length=se+1;const B=t.getParameter(e.UNPACK_ROW_LENGTH),H=t.getParameter(e.UNPACK_SKIP_PIXELS),ae=t.getParameter(e.UNPACK_SKIP_ROWS);t.pixelStorei(e.UNPACK_ROW_LENGTH,a.width);for(let m=0,W=te.length;m<W;m++){const F=te[m],re=Math.floor(F.start/4),ee=Math.ceil(F.count/4),ne=re%a.width,Ee=Math.floor(re/a.width),Le=ee,J=1;t.pixelStorei(e.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(e.UNPACK_SKIP_ROWS,Ee),t.texSubImage2D(e.TEXTURE_2D,0,ne,Ee,Le,J,b,$,a.data)}u.clearUpdateRanges(),t.pixelStorei(e.UNPACK_ROW_LENGTH,B),t.pixelStorei(e.UNPACK_SKIP_PIXELS,H),t.pixelStorei(e.UNPACK_SKIP_ROWS,ae)}}function nt(u,a,b){let $=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&($=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&($=e.TEXTURE_3D);const z=ke(u,a),te=a.source;t.bindTexture($,u.__webglTexture,e.TEXTURE0+b);const se=i.get(te);if(te.version!==se.__version||z===!0){if(t.activeTexture(e.TEXTURE0+b),(typeof ImageBitmap<"u"&&a.image instanceof ImageBitmap)===!1){const J=et.getPrimaries(et.workingColorSpace),Me=a.colorSpace===Zt?null:et.getPrimaries(a.colorSpace),Pe=a.colorSpace===Zt||J===Me?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment);let H=_(a.image,!1,c.maxTextureSize);H=Te(a,H);const ae=s.convert(a.format,a.colorSpace),m=s.convert(a.type);let W=E(a.internalFormat,ae,m,a.normalized,a.colorSpace,a.isVideoTexture);qe($,a);let F;const re=a.mipmaps,ee=a.isVideoTexture!==!0,ne=se.__version===void 0||z===!0,Ee=te.dataReady,Le=h(a,H);if(a.isDepthTexture)W=o(a.format===Kt,a.type),ne&&(ee?t.texStorage2D(e.TEXTURE_2D,1,W,H.width,H.height):t.texImage2D(e.TEXTURE_2D,0,W,H.width,H.height,0,ae,m,null));else if(a.isDataTexture)if(re.length>0){ee&&ne&&t.texStorage2D(e.TEXTURE_2D,Le,W,re[0].width,re[0].height);for(let J=0,Me=re.length;J<Me;J++)F=re[J],ee?Ee&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,F.width,F.height,ae,m,F.data):t.texImage2D(e.TEXTURE_2D,J,W,F.width,F.height,0,ae,m,F.data);a.generateMipmaps=!1}else ee?(ne&&t.texStorage2D(e.TEXTURE_2D,Le,W,H.width,H.height),Ee&&ct(a,H,ae,m)):t.texImage2D(e.TEXTURE_2D,0,W,H.width,H.height,0,ae,m,H.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){ee&&ne&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Le,W,re[0].width,re[0].height,H.depth);for(let J=0,Me=re.length;J<Me;J++)if(F=re[J],a.format!==Ht)if(ae!==null)if(ee){if(Ee)if(a.layerUpdates.size>0){const Pe=zi(F.width,F.height,a.format,a.type);for(const de of a.layerUpdates){const Ve=F.data.subarray(de*Pe/F.data.BYTES_PER_ELEMENT,(de+1)*Pe/F.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,de,F.width,F.height,1,ae,Ve)}}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,F.width,F.height,H.depth,ae,F.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,W,F.width,F.height,H.depth,0,F.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?Ee&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,F.width,F.height,H.depth,ae,m,F.data):t.texImage3D(e.TEXTURE_2D_ARRAY,J,W,F.width,F.height,H.depth,0,ae,m,F.data);a.layerUpdates.size>0&&a.clearLayerUpdates()}else{ee&&ne&&t.texStorage2D(e.TEXTURE_2D,Le,W,re[0].width,re[0].height);for(let J=0,Me=re.length;J<Me;J++)F=re[J],a.format!==Ht?ae!==null?ee?Ee&&t.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,F.width,F.height,ae,F.data):t.compressedTexImage2D(e.TEXTURE_2D,J,W,F.width,F.height,0,F.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?Ee&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,F.width,F.height,ae,m,F.data):t.texImage2D(e.TEXTURE_2D,J,W,F.width,F.height,0,ae,m,F.data)}else if(a.isDataArrayTexture)if(ee){if(ne&&t.texStorage3D(e.TEXTURE_2D_ARRAY,Le,W,H.width,H.height,H.depth),Ee)if(a.layerUpdates.size>0){const J=zi(H.width,H.height,a.format,a.type);for(const Me of a.layerUpdates){const Pe=H.data.subarray(Me*J/H.data.BYTES_PER_ELEMENT,(Me+1)*J/H.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Me,H.width,H.height,1,ae,m,Pe)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,ae,m,H.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,W,H.width,H.height,H.depth,0,ae,m,H.data);else if(a.isData3DTexture)ee?(ne&&t.texStorage3D(e.TEXTURE_3D,Le,W,H.width,H.height,H.depth),Ee&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,ae,m,H.data)):t.texImage3D(e.TEXTURE_3D,0,W,H.width,H.height,H.depth,0,ae,m,H.data);else if(a.isFramebufferTexture){if(ne)if(ee)t.texStorage2D(e.TEXTURE_2D,Le,W,H.width,H.height);else{let J=H.width,Me=H.height;for(let Pe=0;Pe<Le;Pe++)t.texImage2D(e.TEXTURE_2D,Pe,W,J,Me,0,ae,m,null),J>>=1,Me>>=1}}else if(a.isHTMLTexture){if("texElementImage2D"in e){const J=e.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),H.parentNode!==J){J.appendChild(H),N.add(a),J.onpaint=Me=>{const Pe=Me.changedElements;for(const de of N)Pe.includes(de.image)&&(de.needsUpdate=!0)},J.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,H);else{const Pe=e.RGBA,de=e.RGBA,Ve=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Pe,de,Ve,H)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(re.length>0){if(ee&&ne){const J=we(re[0]);t.texStorage2D(e.TEXTURE_2D,Le,W,J.width,J.height)}for(let J=0,Me=re.length;J<Me;J++)F=re[J],ee?Ee&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,ae,m,F):t.texImage2D(e.TEXTURE_2D,J,W,ae,m,F);a.generateMipmaps=!1}else if(ee){if(ne){const J=we(H);t.texStorage2D(e.TEXTURE_2D,Le,W,J.width,J.height)}Ee&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ae,m,H)}else t.texImage2D(e.TEXTURE_2D,0,W,ae,m,H);L(a)&&a.mipmapsAutoUpdate===!0&&M($),se.__version=te.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function mt(u,a,b){if(a.image.length!==6)return;const $=ke(u,a),z=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture,e.TEXTURE0+b);const te=i.get(z);if(z.version!==te.__version||$===!0){t.activeTexture(e.TEXTURE0+b);const se=et.getPrimaries(et.workingColorSpace),B=a.colorSpace===Zt?null:et.getPrimaries(a.colorSpace),H=a.colorSpace===Zt||se===B?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),t.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);const ae=a.isCompressedTexture||a.image[0].isCompressedTexture,m=a.image[0]&&a.image[0].isDataTexture,W=[];for(let de=0;de<6;de++)!ae&&!m?W[de]=_(a.image[de],!0,c.maxCubemapSize):W[de]=m?a.image[de].image:a.image[de],W[de]=Te(a,W[de]);const F=W[0],re=s.convert(a.format,a.colorSpace),ee=s.convert(a.type);let ne=E(a.internalFormat,re,ee,a.normalized,a.colorSpace);const Ee=a.isVideoTexture!==!0,Le=te.__version===void 0||$===!0,J=z.dataReady;let Me=h(a,F);qe(e.TEXTURE_CUBE_MAP,a);let Pe;if(a.isDepthTexture){if(ne=o(a.format===Kt,a.type),Le)if(Ee)t.texStorage2D(e.TEXTURE_CUBE_MAP,1,ne,F.width,F.height);else for(let de=0;de<6;de++)t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ne,F.width,F.height,0,re,ee,null)}else if(ae){Ee&&Le&&t.texStorage2D(e.TEXTURE_CUBE_MAP,Me,ne,F.width,F.height);for(let de=0;de<6;de++){Pe=W[de].mipmaps;for(let Ve=0;Ve<Pe.length;Ve++){const st=Pe[Ve];a.format!==Ht?re!==null?Ee?J&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,0,0,st.width,st.height,re,st.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,ne,st.width,st.height,0,st.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,0,0,st.width,st.height,re,ee,st.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve,ne,st.width,st.height,0,re,ee,st.data)}}}else{if(Pe=a.mipmaps,Ee&&Le){Pe.length>0&&Me++;const de=we(W[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,Me,ne,de.width,de.height)}for(let de=0;de<6;de++)if(m){Ee?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,W[de].width,W[de].height,re,ee,W[de].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ne,W[de].width,W[de].height,0,re,ee,W[de].data);for(let Ve=0;Ve<Pe.length;Ve++){const Ft=Pe[Ve].image[de].image;Ee?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,0,0,Ft.width,Ft.height,re,ee,Ft.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,ne,Ft.width,Ft.height,0,re,ee,Ft.data)}}else{Ee?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,re,ee,W[de]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ne,re,ee,W[de]);for(let Ve=0;Ve<Pe.length;Ve++){const st=Pe[Ve];Ee?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,0,0,re,ee,st.image[de]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ve+1,ne,re,ee,st.image[de])}}}L(a)&&a.mipmapsAutoUpdate===!0&&M(e.TEXTURE_CUBE_MAP),te.__version=z.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function Je(u,a,b,$,z,te){const se=s.convert(b.format,b.colorSpace),B=s.convert(b.type),H=E(b.internalFormat,se,B,b.normalized,b.colorSpace),ae=i.get(a),m=i.get(b);if(m.__renderTarget=a,!ae.__hasExternalTextures){const W=Math.max(1,a.width>>te),F=Math.max(1,a.height>>te);z===e.TEXTURE_3D||z===e.TEXTURE_2D_ARRAY?t.texImage3D(z,te,H,W,F,a.depth,0,se,B,null):t.texImage2D(z,te,H,W,F,0,se,B,null)}t.bindFramebuffer(e.FRAMEBUFFER,u),ce(a)?p.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,z,m.__webglTexture,0,Ze(a)):(z===e.TEXTURE_2D||z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,$,z,m.__webglTexture,te),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ct(u,a,b){if(e.bindRenderbuffer(e.RENDERBUFFER,u),a.depthBuffer){const $=a.depthTexture,z=$&&$.isDepthTexture?$.type:null,te=o(a.stencilBuffer,z),se=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ce(a)?p.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ze(a),te,a.width,a.height):b?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ze(a),te,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,te,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,se,e.RENDERBUFFER,u)}else{const $=a.textures;for(let z=0;z<$.length;z++){const te=$[z],se=s.convert(te.format,te.colorSpace),B=s.convert(te.type),H=E(te.internalFormat,se,B,te.normalized,te.colorSpace);ce(a)?p.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ze(a),H,a.width,a.height):b?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ze(a),H,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,H,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ot(u,a,b){const $=a.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,u),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const z=i.get(a.depthTexture);z.__renderTarget=a;const te=$?a.depthTexture.image[0]:a.depthTexture.image;(!z.__webglTexture||te.width!==a.width||te.height!==a.height)&&(te.width=a.width,te.height=a.height,a.depthTexture.needsUpdate=!0),$?me(a.depthTexture,0):he(a.depthTexture,0);const se=z.__webglTexture,B=Ze(a),H=$?e.TEXTURE_CUBE_MAP_POSITIVE_X+b:e.TEXTURE_2D,ae=a.depthTexture.format===Kt?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(a.depthTexture.format===un)ce(a)?p.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ae,H,se,0,B):e.framebufferTexture2D(e.FRAMEBUFFER,ae,H,se,0);else if(a.depthTexture.format===Kt)ce(a)?p.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ae,H,se,0,B):e.framebufferTexture2D(e.FRAMEBUFFER,ae,H,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Et(u){const a=i.get(u),b=u.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==u.depthTexture){const $=u.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),$){const z=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,$.removeEventListener("dispose",z)};$.addEventListener("dispose",z),a.__depthDisposeCallback=z}a.__boundDepthTexture=$}if(u.depthTexture&&!a.__autoAllocateDepthBuffer)if(b)for(let $=0;$<6;$++)ot(a.__webglFramebuffer[$],u,$);else u.texture.mipmaps.length>0?ot(a.__webglFramebuffer[0],u,0):ot(a.__webglFramebuffer,u,0);else if(b){a.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[$]),a.__webglDepthbuffer[$]===void 0)a.__webglDepthbuffer[$]=e.createRenderbuffer(),Ct(a.__webglDepthbuffer[$],u,!1);else{const z=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=a.__webglDepthbuffer[$];e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,z,e.RENDERBUFFER,te)}}else if(u.texture.mipmaps.length>0?t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),Ct(a.__webglDepthbuffer,u,!1);else{const z=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,z,e.RENDERBUFFER,te)}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Mt(u,a,b){const $=i.get(u);a!==void 0&&Je($.__webglFramebuffer,u,u.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),b!==void 0&&Et(u)}function Tt(u){const a=u.texture,b=i.get(u),$=i.get(a);u.addEventListener("dispose",X),q(u);const z=u.textures,te=u.isWebGLCubeRenderTarget===!0,se=z.length>1;if(se||($.__webglTexture===void 0&&($.__webglTexture=e.createTexture()),$.__version=a.version,d.memory.textures++),te){b.__webglFramebuffer=[];for(let B=0;B<6;B++)if(a.mipmaps.length>0){b.__webglFramebuffer[B]=[];for(let H=0;H<a.mipmaps.length;H++)b.__webglFramebuffer[B][H]=e.createFramebuffer()}else b.__webglFramebuffer[B]=e.createFramebuffer()}else{if(a.mipmaps.length>0){b.__webglFramebuffer=[];for(let B=0;B<a.mipmaps.length;B++)b.__webglFramebuffer[B]=e.createFramebuffer()}else b.__webglFramebuffer=e.createFramebuffer();if(se)for(let B=0,H=z.length;B<H;B++){const ae=i.get(z[B]);ae.__webglTexture===void 0&&(ae.__webglTexture=e.createTexture(),d.memory.textures++)}if(u.samples>0&&ce(u)===!1){b.__webglMultisampledFramebuffer=e.createFramebuffer(),b.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let B=0;B<z.length;B++){const H=z[B];b.__webglColorRenderbuffer[B]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,b.__webglColorRenderbuffer[B]);const ae=s.convert(H.format,H.colorSpace),m=s.convert(H.type),W=E(H.internalFormat,ae,m,H.normalized,H.colorSpace,u.isXRRenderTarget===!0),F=Ze(u);e.renderbufferStorageMultisample(e.RENDERBUFFER,F,W,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+B,e.RENDERBUFFER,b.__webglColorRenderbuffer[B])}e.bindRenderbuffer(e.RENDERBUFFER,null),u.depthBuffer&&(b.__webglDepthRenderbuffer=e.createRenderbuffer(),Ct(b.__webglDepthRenderbuffer,u,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(te){t.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),qe(e.TEXTURE_CUBE_MAP,a);for(let B=0;B<6;B++)if(a.mipmaps.length>0)for(let H=0;H<a.mipmaps.length;H++)Je(b.__webglFramebuffer[B][H],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,H);else Je(b.__webglFramebuffer[B],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);L(a)?M(e.TEXTURE_CUBE_MAP):a.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,a.mipmaps.length-1),t.unbindTexture()}else if(se){for(let B=0,H=z.length;B<H;B++){const ae=z[B],m=i.get(ae);let W=e.TEXTURE_2D;(u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(W=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(W,m.__webglTexture),qe(W,ae),Je(b.__webglFramebuffer,u,ae,e.COLOR_ATTACHMENT0+B,W,0),L(ae)&&M(W)}t.unbindTexture()}else{let B=e.TEXTURE_2D;if((u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(B=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(B,$.__webglTexture),qe(B,a),a.mipmaps.length>0)for(let H=0;H<a.mipmaps.length;H++)Je(b.__webglFramebuffer[H],u,a,e.COLOR_ATTACHMENT0,B,H);else Je(b.__webglFramebuffer,u,a,e.COLOR_ATTACHMENT0,B,0);L(a)?M(B):a.mipmaps.length>0&&e.texParameteri(B,e.TEXTURE_MAX_LEVEL,a.mipmaps.length-1),t.unbindTexture()}u.depthBuffer&&Et(u)}function T(u){const a=u.textures;for(let b=0,$=a.length;b<$;b++){const z=a[b];if(L(z)&&z.mipmapsAutoUpdate===!0){const te=w(u),se=i.get(z).__webglTexture;t.bindTexture(te,se),M(te),t.unbindTexture()}}}const At=[];function Ye(u){if(u.samples>0){if(ce(u)===!1){const a=u.textures,b=u.width,$=u.height;let z=e.COLOR_BUFFER_BIT;const te=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,se=i.get(u),B=a.length>1;if(B)for(let ae=0;ae<a.length;ae++)t.bindFramebuffer(e.FRAMEBUFFER,se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),u.texture.mipmaps.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ae=0;ae<a.length;ae++){if(u.resolveDepthBuffer&&(u.depthBuffer&&(z|=e.DEPTH_BUFFER_BIT),u.stencilBuffer&&u.resolveStencilBuffer&&(z|=e.STENCIL_BUFFER_BIT)),B){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const m=i.get(a[ae]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,m,0)}e.blitFramebuffer(0,0,b,$,0,0,b,$,z,e.NEAREST),D===!0&&(At.length=0,At.push(e.COLOR_ATTACHMENT0+ae),u.depthBuffer&&u.storeMultisampledDepthBuffer===!1&&At.push(te),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),B)for(let ae=0;ae<a.length;ae++){t.bindFramebuffer(e.FRAMEBUFFER,se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const m=i.get(a[ae]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.TEXTURE_2D,m,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(u.depthBuffer&&u.storeMultisampledDepthBuffer===!1&&D){const a=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function Ze(u){return Math.min(c.maxSamples,u.samples)}function ce(u){const a=i.get(u);return u.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function it(u){const a=d.render.frame;G.get(u)!==a&&(G.set(u,a),u.update())}function Te(u,a){const b=u.colorSpace,$=u.format,z=u.type;return u.isCompressedTexture===!0||u.isVideoTexture===!0||b!==xa&&b!==Zt&&(et.getTransfer(b)===Ke?($!==Ht||z!==Dt)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",b)),a}function we(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement?(S.width=u.naturalWidth||u.width,S.height=u.naturalHeight||u.height):typeof VideoFrame<"u"&&u instanceof VideoFrame?(S.width=u.displayWidth,S.height=u.displayHeight):(S.width=u.width,S.height=u.height),S}this.allocateTextureUnit=Ue,this.resetTextureUnits=j,this.getTextureUnits=ie,this.setTextureUnits=Ae,this.setTexture2D=he,this.setTexture2DArray=Se,this.setTexture3D=Re,this.setTextureCube=me,this.rebindTextures=Mt,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=ce,this.dispose=Q}function ud(e,n){function t(i,c=Zt){let s;const d=et.getTransfer(c);if(i===Dt)return e.UNSIGNED_BYTE;if(i===Aa)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ra)return e.UNSIGNED_SHORT_5_5_5_1;if(i===ao)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===ro)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===oo)return e.BYTE;if(i===so)return e.SHORT;if(i===An)return e.UNSIGNED_SHORT;if(i===La)return e.INT;if(i===qt)return e.UNSIGNED_INT;if(i===Gt)return e.FLOAT;if(i===Ot)return e.HALF_FLOAT;if(i===lo)return e.ALPHA;if(i===co)return e.RGB;if(i===Ht)return e.RGBA;if(i===un)return e.DEPTH_COMPONENT;if(i===Kt)return e.DEPTH_STENCIL;if(i===fo)return e.RED;if(i===Ta)return e.RED_INTEGER;if(i===jt)return e.RG;if(i===Ma)return e.RG_INTEGER;if(i===Ea)return e.RGBA_INTEGER;if(i===Un||i===Nn||i===In||i===On)if(d===Ke)if(s=n.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Un)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===In)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===On)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=n.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Un)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nn)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===In)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===On)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hi||i===mi||i===_i||i===gi)if(s=n.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hi)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mi)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_i)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gi)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vi||i===Si||i===xi||i===Ei||i===Mi||i===zn||i===Ti)if(s=n.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vi||i===Si)return d===Ke?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xi)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ei)return s.COMPRESSED_R11_EAC;if(i===Mi)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zn)return s.COMPRESSED_RG11_EAC;if(i===Ti)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ai||i===Ri||i===bi||i===wi||i===Ci||i===Pi||i===Li||i===Di||i===yi||i===Ui||i===Ni||i===Ii||i===Oi||i===Fi)if(s=n.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ai)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ri)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bi)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wi)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ci)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pi)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Li)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Di)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yi)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ui)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ni)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ii)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oi)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fi)return d===Ke?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bi||i===Gi||i===Hi)if(s=n.get("EXT_texture_compression_bptc"),s!==null){if(i===Bi)return d===Ke?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gi)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hi)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vi||i===Wi||i===Xn||i===ki)if(s=n.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vi)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wi)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xn)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ki)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===en?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const pd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class md{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Pa(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Jt({vertexShader:pd,fragmentShader:hd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _d extends Hr{constructor(n,t){super();const i=this;let c=null,s=1,d=null,p="local-floor",D=1,S=null,G=null,N=null,x=null,v=null,P=null;const U=typeof XRWebGLBinding<"u",f=new md,l={},_=t.getContextAttributes();let L=null,M=null;const w=[],E=[],o=new xt;let h=null,q=null;const y=new Dn;y.viewport=new vt;const O=new Dn;O.viewport=new vt;const X=[y,O],Z=new Vr;let A=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let he=w[k];return he===void 0&&(he=new yn,w[k]=he),he.getTargetRaySpace()},this.getControllerGrip=function(k){let he=w[k];return he===void 0&&(he=new yn,w[k]=he),he.getGripSpace()},this.getHand=function(k){let he=w[k];return he===void 0&&(he=new yn,w[k]=he),he.getHandSpace()};function Y(k){const he=E.indexOf(k.inputSource);if(he===-1)return;const Se=w[he];Se!==void 0&&(Se.update(k.inputSource,k.frame,S||d),Se.dispatchEvent({type:k.type,data:k.inputSource}))}function V(){c.removeEventListener("select",Y),c.removeEventListener("selectstart",Y),c.removeEventListener("selectend",Y),c.removeEventListener("squeeze",Y),c.removeEventListener("squeezestart",Y),c.removeEventListener("squeezeend",Y),c.removeEventListener("end",V),c.removeEventListener("inputsourceschange",fe);for(let k=0;k<w.length;k++){const he=E[k];he!==null&&(E[k]=null,w[k].disconnect(he))}A=null,Q=null,f.reset();for(const k in l)delete l[k];if(n.setRenderTarget(L),v=null,x=null,N=null,c=null,M=null,Ue.stop(),i.isPresenting=!1,n.setPixelRatio(h),n.setSize(o.width,o.height,!1),q!==null){const k=q.camera;k.fov=q.fov,k.zoom=q.zoom,k.updateProjectionMatrix(),q=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){p=k,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return S||d},this.setReferenceSpace=function(k){S=k},this.getBaseLayer=function(){return x!==null?x:v},this.getBinding=function(){return N===null&&U&&(N=new XRWebGLBinding(c,t)),N},this.getFrame=function(){return P},this.getSession=function(){return c},this.setSession=async function(k){if(c=k,c!==null){if(L=n.getRenderTarget(),c.addEventListener("select",Y),c.addEventListener("selectstart",Y),c.addEventListener("selectend",Y),c.addEventListener("squeeze",Y),c.addEventListener("squeezestart",Y),c.addEventListener("squeezeend",Y),c.addEventListener("end",V),c.addEventListener("inputsourceschange",fe),_.xrCompatible!==!0&&await t.makeXRCompatible(),h=n.getPixelRatio(),n.getSize(o),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Re=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=_.stencil?Kt:un,Re=_.stencil?en:qt);const ye={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};N=this.getBinding(),x=N.createProjectionLayer(ye),c.updateRenderState({layers:[x]}),n.setPixelRatio(1),n.setSize(x.textureWidth,x.textureHeight,!1),M=new yt(x.textureWidth,x.textureHeight,{format:Ht,type:Dt,depthTexture:new dn(x.textureWidth,x.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:_.stencil,colorSpace:n.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(c,t,Se),c.updateRenderState({baseLayer:v}),n.setPixelRatio(1),n.setSize(v.framebufferWidth,v.framebufferHeight,!1),M=new yt(v.framebufferWidth,v.framebufferHeight,{format:Ht,type:Dt,colorSpace:n.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(D),S=null,d=await c.requestReferenceSpace(p),Ue.setContext(c),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function fe(k){for(let he=0;he<k.removed.length;he++){const Se=k.removed[he],Re=E.indexOf(Se);Re>=0&&(E[Re]=null,w[Re].disconnect(Se))}for(let he=0;he<k.added.length;he++){const Se=k.added[he];let Re=E.indexOf(Se);if(Re===-1){for(let ye=0;ye<w.length;ye++)if(ye>=E.length){E.push(Se),Re=ye;break}else if(E[ye]===null){E[ye]=Se,Re=ye;break}if(Re===-1)break}const me=w[Re];me&&me.connect(Se)}}function K(k,he){he===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(he.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(c===null)return;let he=k.near,Se=k.far;f.texture!==null&&(f.depthNear>0&&(he=f.depthNear),f.depthFar>0&&(Se=f.depthFar)),Z.near=O.near=y.near=he,Z.far=O.far=y.far=Se,(A!==Z.near||Q!==Z.far)&&(c.updateRenderState({depthNear:Z.near,depthFar:Z.far}),A=Z.near,Q=Z.far),Z.layers.mask=k.layers.mask|6,y.layers.mask=Z.layers.mask&-5,O.layers.mask=Z.layers.mask&-3;const Re=k.parent,me=Z.cameras;K(Z,Re);for(let ye=0;ye<me.length;ye++)K(me[ye],Re);Z.projectionMatrix.copy(y.projectionMatrix),Z.projectionMatrixInverse.copy(y.projectionMatrixInverse),q===null&&k.isPerspectiveCamera&&(q={camera:k,fov:k.fov,zoom:k.zoom}),j(k,Z,Re)};function j(k,he,Se){Se===null?k.matrix.copy(he.matrixWorld):(k.matrix.copy(Se.matrixWorld),k.matrix.invert(),k.matrix.multiply(he.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(he.projectionMatrix),k.projectionMatrixInverse.copy(he.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Wr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&v===null))return D},this.setFoveation=function(k){D=k,x!==null&&(x.fixedFoveation=k),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=k)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(Z)},this.getCameraTexture=function(k){return l[k]};let ie=null;function Ae(k,he){if(G=he.getViewerPose(S||d),P=he,G!==null){const Se=G.views;v!==null&&(n.setRenderTargetFramebuffer(M,v.framebuffer),n.setRenderTarget(M));let Re=!1;Se.length!==Z.cameras.length&&(Z.cameras.length=0,Re=!0);for(let be=0;be<Se.length;be++){const qe=Se[be];let ke=null;if(v!==null)ke=v.getViewport(qe);else{const ct=N.getViewSubImage(x,qe);ke=ct.viewport,be===0&&(n.setRenderTargetTextures(M,ct.colorTexture,ct.depthStencilTexture),n.setRenderTarget(M))}let Ne=X[be];Ne===void 0&&(Ne=new Dn,Ne.layers.enable(be),Ne.viewport=new vt,X[be]=Ne),Ne.matrix.fromArray(qe.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(qe.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(ke.x,ke.y,ke.width,ke.height),be===0&&(Z.matrix.copy(Ne.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Re===!0&&Z.cameras.push(Ne)}const me=c.enabledFeatures;if(me&&me.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&U){N=i.getBinding();const be=N.getDepthInformation(Se[0]);be&&be.isValid&&be.texture&&f.init(be,c.renderState)}if(me&&me.includes("camera-access")&&U){n.state.unbindTexture(),N=i.getBinding();for(let be=0;be<Se.length;be++){const qe=Se[be].camera;if(qe){let ke=l[qe];ke||(ke=new Pa,l[qe]=ke);const Ne=N.getCameraImage(qe);ke.sourceTexture=Ne}}}}for(let Se=0;Se<w.length;Se++){const Re=E[Se],me=w[Se];Re!==null&&me!==void 0&&me.update(Re,he,S||d)}ie&&ie(k,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),P=null}const Ue=new Ha;Ue.setAnimationLoop(Ae),this.setAnimationLoop=function(k){ie=k},this.dispose=function(){}}}const gd=new Qt,$a=new Fe;$a.set(-1,0,0,0,1,0,0,0,1);function vd(e,n){function t(f,l){f.matrixAutoUpdate===!0&&f.updateMatrix(),l.value.copy(f.matrix)}function i(f,l){l.color.getRGB(f.fogColor.value,wa(e)),l.isFog?(f.fogNear.value=l.near,f.fogFar.value=l.far):l.isFogExp2&&(f.fogDensity.value=l.density)}function c(f,l,_,L,M){l.isNodeMaterial?l.uniformsNeedUpdate=!1:l.isMeshBasicMaterial?s(f,l):l.isMeshLambertMaterial?(s(f,l),l.envMap&&(f.envMapIntensity.value=l.envMapIntensity)):l.isMeshToonMaterial?(s(f,l),N(f,l)):l.isMeshPhongMaterial?(s(f,l),G(f,l),l.envMap&&(f.envMapIntensity.value=l.envMapIntensity)):l.isMeshStandardMaterial?(s(f,l),x(f,l),l.isMeshPhysicalMaterial&&v(f,l,M)):l.isMeshMatcapMaterial?(s(f,l),P(f,l)):l.isMeshDepthMaterial?s(f,l):l.isMeshDistanceMaterial?(s(f,l),U(f,l)):l.isMeshNormalMaterial?s(f,l):l.isLineBasicMaterial?(d(f,l),l.isLineDashedMaterial&&p(f,l)):l.isPointsMaterial?D(f,l,_,L):l.isSpriteMaterial?S(f,l):l.isShadowMaterial?(f.color.value.copy(l.color),f.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function s(f,l){f.opacity.value=l.opacity,l.color&&f.diffuse.value.copy(l.color),l.emissive&&f.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(f.map.value=l.map,t(l.map,f.mapTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.bumpMap&&(f.bumpMap.value=l.bumpMap,t(l.bumpMap,f.bumpMapTransform),f.bumpScale.value=l.bumpScale,l.side===St&&(f.bumpScale.value*=-1)),l.normalMap&&(f.normalMap.value=l.normalMap,t(l.normalMap,f.normalMapTransform),f.normalScale.value.copy(l.normalScale),l.side===St&&f.normalScale.value.negate()),l.displacementMap&&(f.displacementMap.value=l.displacementMap,t(l.displacementMap,f.displacementMapTransform),f.displacementScale.value=l.displacementScale,f.displacementBias.value=l.displacementBias),l.emissiveMap&&(f.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,f.emissiveMapTransform)),l.specularMap&&(f.specularMap.value=l.specularMap,t(l.specularMap,f.specularMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest);const _=n.get(l),L=_.envMap,M=_.envMapRotation;L&&(f.envMap.value=L,f.envMapRotation.value.setFromMatrix4(gd.makeRotationFromEuler(M)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply($a),f.reflectivity.value=l.reflectivity,f.ior.value=l.ior,f.refractionRatio.value=l.refractionRatio),l.lightMap&&(f.lightMap.value=l.lightMap,f.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,f.lightMapTransform)),l.aoMap&&(f.aoMap.value=l.aoMap,f.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,f.aoMapTransform))}function d(f,l){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,l.map&&(f.map.value=l.map,t(l.map,f.mapTransform))}function p(f,l){f.dashSize.value=l.dashSize,f.totalSize.value=l.dashSize+l.gapSize,f.scale.value=l.scale}function D(f,l,_,L){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,f.size.value=l.size*_,f.scale.value=L*.5,l.map&&(f.map.value=l.map,t(l.map,f.uvTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest)}function S(f,l){f.diffuse.value.copy(l.color),f.opacity.value=l.opacity,f.rotation.value=l.rotation,l.map&&(f.map.value=l.map,t(l.map,f.mapTransform)),l.alphaMap&&(f.alphaMap.value=l.alphaMap,t(l.alphaMap,f.alphaMapTransform)),l.alphaTest>0&&(f.alphaTest.value=l.alphaTest)}function G(f,l){f.specular.value.copy(l.specular),f.shininess.value=Math.max(l.shininess,1e-4)}function N(f,l){l.gradientMap&&(f.gradientMap.value=l.gradientMap)}function x(f,l){f.metalness.value=l.metalness,l.metalnessMap&&(f.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,f.metalnessMapTransform)),f.roughness.value=l.roughness,l.roughnessMap&&(f.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,f.roughnessMapTransform)),l.envMap&&(f.envMapIntensity.value=l.envMapIntensity)}function v(f,l,_){f.ior.value=l.ior,l.diffuseRoughness>0&&(f.diffuseRoughness.value=l.diffuseRoughness,l.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=l.diffuseRoughnessMap,t(l.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),l.sheen>0&&(f.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),f.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(f.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,f.sheenColorMapTransform)),l.sheenRoughnessMap&&(f.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,f.sheenRoughnessMapTransform))),l.clearcoat>0&&(f.clearcoat.value=l.clearcoat,f.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(f.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,f.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(f.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===St&&f.clearcoatNormalScale.value.negate())),l.dispersion>0&&(f.dispersion.value=l.dispersion),l.retroreflectivity>0&&(f.retroreflectivity.value=l.retroreflectivity),l.iridescence>0&&(f.iridescence.value=l.iridescence,f.iridescenceIOR.value=l.iridescenceIOR,f.iridescenceThicknessMinimum.value=l.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=l.iridescenceThicknessMaximum,l.iridescenceMap&&(f.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,f.iridescenceMapTransform)),l.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),l.transmission>0&&(f.transmission.value=l.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),l.transmissionMap&&(f.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,f.transmissionMapTransform)),f.thickness.value=l.thickness,l.thicknessMap&&(f.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=l.attenuationDistance,f.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(f.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(f.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=l.specularIntensity,f.specularColor.value.copy(l.specularColor),l.specularColorMap&&(f.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,f.specularColorMapTransform)),l.specularIntensityMap&&(f.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,f.specularIntensityMapTransform))}function P(f,l){l.matcap&&(f.matcap.value=l.matcap)}function U(f,l){const _=n.get(l).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:c}}function Sd(e,n,t,i){let c={},s={};function d(_,L){const M=L.program;i.uniformBlockBinding(_,M,c[_.id])}function p(_,L){let M=c[_.id];M===void 0&&(P(_),M=D(_),c[_.id]=M,_.addEventListener("dispose",f));const w=L.program;i.updateUBOMapping(_,w);const E=n.render.frame;s[_.id]!==E&&(S(_),s[_.id]=E)}function D(_){const L=e.createBuffer(),M=_.__size,w=_.usage;return e.bindBuffer(e.UNIFORM_BUFFER,L),e.bufferData(e.UNIFORM_BUFFER,M,w),e.bindBuffer(e.UNIFORM_BUFFER,null),L}function S(_){const L=c[_.id],M=_.uniforms,w=_.__cache;e.bindBuffer(e.UNIFORM_BUFFER,L);for(let E=0,o=M.length;E<o;E++){const h=M[E];if(Array.isArray(h))for(let q=0,y=h.length;q<y;q++)G(h[q],E,q,w);else G(h,E,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function G(_,L,M,w){if(x(_,L,M,w)===!0){const E=_.__offset,o=_.value;if(Array.isArray(o)){let h=0;for(let q=0;q<o.length;q++){const y=o[q],O=U(y,!0);N(y,_.__data,h),h+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else N(o,_.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,E,_.__data)}}function N(_,L,M){typeof _=="number"||typeof _=="boolean"?L[M]=_:_.isMatrix3?(L[M]=_.elements[0],L[M+1]=_.elements[1],L[M+2]=_.elements[2],L[M+3]=0,L[M+4]=_.elements[3],L[M+5]=_.elements[4],L[M+6]=_.elements[5],L[M+7]=0,L[M+8]=_.elements[6],L[M+9]=_.elements[7],L[M+10]=_.elements[8],L[M+11]=0):ArrayBuffer.isView(_)?L.set(_.subarray(0,L.length-M),M):_.toArray(L,M)}function x(_,L,M,w){const E=_.value,o=L+"_"+M;if(Array.isArray(E)){w[o]===void 0&&(w[o]=[]);const h=w[o];let q=!1;for(let y=0;y<E.length;y++)v(E[y],h,y)===!0&&(q=!0);return q}return v(E,w,o)}function v(_,L,M){if(L[M]===void 0)return typeof _=="number"||typeof _=="boolean"?L[M]=_:ArrayBuffer.isView(_)?L[M]=_.slice():L[M]=_.clone(),!0;{const w=L[M];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return L[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function P(_){const L=_.uniforms;let M=0;const w=16;for(let o=0,h=L.length;o<h;o++){const q=Array.isArray(L[o])?L[o]:[L[o]];for(let y=0,O=q.length;y<O;y++){const X=q[y],Z=Array.isArray(X.value)?X.value:[X.value],A=Array.isArray(L[o])||Array.isArray(X.value);let Q=M;for(let V=0,fe=Z.length;V<fe;V++){const K=Z[V],j=U(K,A),ie=M%w,Ae=ie%j.boundary,Ue=ie+Ae;M+=Ae,Ue!==0&&w-Ue<j.storage&&(M+=w-Ue),V===0&&(Q=M),M+=j.storage}const Y=X.type==="int"?Int32Array:X.type==="uint"?Uint32Array:Float32Array;X.__data=new Y((M-Q)/Float32Array.BYTES_PER_ELEMENT),X.__offset=Q}}const E=M%w;return E>0&&(M+=w-E),_.__size=M,_.__cache={},this}function U(_,L){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=16,M.storage=48):_.isMatrix4?(M.boundary=16,M.storage=64):_.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):We("WebGLRenderer: Unsupported uniform value type.",_),L===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function f(_){const L=_.target;L.removeEventListener("dispose",f),e.deleteBuffer(c[L.id]),delete c[L.id],delete s[L.id]}function l(){for(const _ in c)e.deleteBuffer(c[_]);c={},s={}}return{bind:d,update:p,dispose:l}}const xd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pt=null;function Ed(){return Pt===null&&(Pt=new kr(xd,16,16,jt,Ot),Pt.name="DFG_LUT",Pt.minFilter=wt,Pt.magFilter=wt,Pt.wrapS=Wn,Pt.wrapT=Wn,Pt.generateMipmaps=!1,Pt.needsUpdate=!0),Pt}class Td{constructor(n={}){const{canvas:t=ir(),context:i=null,depth:c=!0,stencil:s=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:D=!0,preserveDrawingBuffer:S=!1,powerPreference:G="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:x=!1,outputBufferType:v=Dt}=n;this.isWebGLRenderer=!0;let P;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");P=i.getContextAttributes().alpha}else P=d;const U=v,f=new Set([Ea,Ma,Ta]),l=new Set([Dt,qt,An,en,Aa,Ra]),_=new Uint32Array(4),L=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let w=null,E=null;const o=[],h=[];let q=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=It,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let O=!1,X=null,Z=null,A=null,Q=null;this._outputColorSpace=ar;let Y=0,V=0,fe=null,K=-1,j=null;const ie=new vt,Ae=new vt;let Ue=null;const k=new Qe(0);let he=0,Se=t.width,Re=t.height,me=1,ye=null,ht=null;const be=new vt(0,0,Se,Re),qe=new vt(0,0,Se,Re);let ke=!1;const Ne=new ha,ct=new or;let nt=!1,mt=!1;const Je=new Qt,Ct=new Ge,ot=new vt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Tt(){return fe===null?me:1}let T=i;function At(r,g){return t.getContext(r,g)}let Ye,Ze,ce,it,Te,we,u,a,b,$,z,te,se,B,H,ae,m,W,F,re,ee,ne,Ee;try{const r={alpha:!0,depth:c,stencil:s,antialias:p,premultipliedAlpha:D,preserveDrawingBuffer:S,powerPreference:G,failIfMajorPerformanceCaveat:N};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rr}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",de,!1),T===null){const g="webgl2";if(T=At(g,r),T===null)throw At(g)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(r){throw t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),$e("WebGLRenderer: "+r.message),r}function Le(){Ye=new Ac(T),Ye.init(),ee=new ud(T,Ye),Ze=new pc(T,Ye,n,ee),ce=new fd(T,Ye),Ze.reversedDepthBuffer&&x&&ce.buffers.depth.setReversed(!0),Z=T.createFramebuffer(),A=T.createFramebuffer(),Q=T.createFramebuffer(),it=new wc(T),Te=new $f,we=new dd(T,Ye,ce,Te,Ze,ee,it),u=new Tc(y),a=new Po(T),ne=new dc(T,a),b=new Rc(T,a,it,ne),$=new Pc(T,b,a,ne,it),W=new Cc(T,Ze,we),H=new hc(Te),z=new Zf(y,u,Ye,Ze,ne,H),te=new vd(y,Te),se=new Jf,B=new ad(Ye),m=new fc(y,u,ce,$,P,D),ae=new cd(y,$,Ze),Ee=new Sd(T,it,Ze,ce),F=new uc(T,Ye,it),re=new bc(T,Ye,it),it.programs=z.programs,y.capabilities=Ze,y.extensions=Ye,y.properties=Te,y.renderLists=se,y.shadowMap=ae,y.state=ce,y.info=it}U!==Dt&&(q=new Dc(U,t.width,t.height,p,c,s));const J=new _d(y,T);this.xr=J,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const r=Ye.get("WEBGL_lose_context");r&&r.loseContext()},this.forceContextRestore=function(){const r=Ye.get("WEBGL_lose_context");r&&r.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(r){r!==void 0&&(me=r,this.setSize(Se,Re,!1))},this.getSize=function(r){return r.set(Se,Re)},this.setSize=function(r,g,I=!0){if(J.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=r,Re=g,t.width=Math.floor(r*me),t.height=Math.floor(g*me),I===!0&&(t.style.width=r+"px",t.style.height=g+"px"),q!==null&&q.setSize(t.width,t.height),this.setViewport(0,0,r,g)},this.getDrawingBufferSize=function(r){return r.set(Se*me,Re*me).floor()},this.setDrawingBufferSize=function(r,g,I){Se=r,Re=g,me=I,t.width=Math.floor(r*I),t.height=Math.floor(g*I),this.setViewport(0,0,r,g)},this.setEffects=function(r){if(U===Dt){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(r){for(let g=0;g<r.length;g++)if(r[g].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(r||[])},this.getCurrentViewport=function(r){return r.copy(ie)},this.getViewport=function(r){return r.copy(be)},this.setViewport=function(r,g,I,R){r.isVector4?be.set(r.x,r.y,r.z,r.w):be.set(r,g,I,R),ce.viewport(ie.copy(be).multiplyScalar(Tt()).round())},this.getScissor=function(r){return r.copy(qe)},this.setScissor=function(r,g,I,R){r.isVector4?qe.set(r.x,r.y,r.z,r.w):qe.set(r,g,I,R),ce.scissor(Ae.copy(qe).multiplyScalar(Tt()).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(r){ce.setScissorTest(ke=r)},this.setOpaqueSort=function(r){ye=r},this.setTransparentSort=function(r){ht=r},this.getClearColor=function(r){return r.copy(m.getClearColor())},this.setClearColor=function(){m.setClearColor(...arguments)},this.getClearAlpha=function(){return m.getClearAlpha()},this.setClearAlpha=function(){m.setClearAlpha(...arguments)},this.clear=function(r=!0,g=!0,I=!0){let R=0;if(r){let C=!1;if(fe!==null){const le=fe.texture.format;C=f.has(le)}if(C){const le=fe.texture.type,_e=l.has(le),oe=m.getClearColor(),pe=m.getClearAlpha(),xe=oe.r,Ce=oe.g,Ie=oe.b;_e?(_[0]=xe,_[1]=Ce,_[2]=Ie,_[3]=pe,T.clearBufferuiv(T.COLOR,0,_)):(L[0]=xe,L[1]=Ce,L[2]=Ie,L[3]=pe,T.clearBufferiv(T.COLOR,0,L))}else R|=T.COLOR_BUFFER_BIT}g&&(R|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),I&&(R|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R!==0&&T.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(r){r.setRenderer(this),X=r},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),m.dispose(),se.dispose(),B.dispose(),we.dispose(),Te.dispose(),u.dispose(),$.dispose(),b.dispose(),ne.dispose(),Ee.dispose(),z.dispose(),J.dispose(),J.removeEventListener("sessionstart",Zn),J.removeEventListener("sessionend",$n),Vt.stop()};function Me(r){r.preventDefault(),ri("WebGLRenderer: Context Lost."),O=!0}function Pe(){ri("WebGLRenderer: Context Restored."),O=!1;const r=it.autoReset,g=ae.enabled,I=ae.autoUpdate,R=ae.needsUpdate,C=ae.type;Le(),it.autoReset=r,ae.enabled=g,ae.autoUpdate=I,ae.needsUpdate=R,ae.type=C}function de(r){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",r.statusMessage)}function Ve(r){const g=r.target;g.removeEventListener("dispose",Ve),st(g)}function st(r){Ft(r),Te.remove(r)}function Ft(r){const g=Te.get(r).programs;g!==void 0&&(g.forEach(function(I){z.releaseProgram(I)}),r.isShaderMaterial&&z.releaseShaderCache(r))}this.renderBufferDirect=function(r,g,I,R,C,le){g===null&&(g=Et);const _e=C.isMesh&&C.matrixWorld.determinantAffine()<0,oe=er(r,g,I,R,C);ce.setMaterial(R,_e);let pe=I.index,xe=1;if(R.wireframe===!0){if(pe=b.getWireframeAttribute(I),pe===void 0)return;xe=2}const Ce=I.drawRange,Ie=I.attributes.position;let ge=Ce.start*xe,Oe=(Ce.start+Ce.count)*xe;le!==null&&(ge=Math.max(ge,le.start*xe),Oe=Math.min(Oe,(le.start+le.count)*xe)),pe!==null?(ge=Math.max(ge,0),Oe=Math.min(Oe,pe.count)):Ie!=null&&(ge=Math.max(ge,0),Oe=Math.min(Oe,Ie.count));const tt=Oe-ge;if(tt<0||tt===1/0)return;ne.setup(C,R,oe,I,pe);let Xe,ze=F;if(pe!==null&&(Xe=a.get(pe),ze=re,ze.setIndex(Xe)),C.isMesh)R.wireframe===!0?(ce.setLineWidth(R.wireframeLinewidth*Tt()),ze.setMode(T.LINES)):ze.setMode(T.TRIANGLES);else if(C.isLine){let dt=R.linewidth;dt===void 0&&(dt=1),ce.setLineWidth(dt*Tt()),C.isLineSegments?ze.setMode(T.LINES):C.isLineLoop?ze.setMode(T.LINE_LOOP):ze.setMode(T.LINE_STRIP)}else C.isPoints?ze.setMode(T.POINTS):C.isSprite&&ze.setMode(T.TRIANGLES);if(C.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))ze.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{const dt=C._multiDrawStarts,ve=C._multiDrawCounts,pt=C._multiDrawCount,He=pe?a.get(pe).bytesPerElement:1,Wt=Te.get(R).currentProgram.getUniforms();for(let ut=0;ut<pt;ut++)Wt.setValue(T,"_gl_DrawID",ut),ze.render(dt[ut]/He,ve[ut])}else if(C.isInstancedMesh)ze.renderInstances(ge,tt,C.count);else if(I.isInstancedBufferGeometry){const dt=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,ve=Math.min(I.instanceCount,dt);ze.renderInstances(ge,tt,ve)}else ze.render(ge,tt)};function Yn(r,g,I,R){X!==null&&r.isNodeMaterial&&X.setObject(R,r),nt===!0&&H.setState(r,I,!1),r.transparent===!0&&r.side===Nt&&r.forceSinglePass===!1?(r.side=St,r.needsUpdate=!0,nn(r,g,R),r.side=cn,r.needsUpdate=!0,nn(r,g,R),r.side=Nt):nn(r,g,R)}this.compile=function(r,g,I=null){I===null&&(I=r),X!==null&&X.renderStart(r,g,I),E=B.get(I),E.init(g),h.push(E),I.traverseVisible(function(C){C.isLight&&C.layers.test(g.layers)&&(E.pushLight(C),C.castShadow&&E.pushShadow(C))}),r!==I&&r.traverseVisible(function(C){C.isLight&&C.layers.test(g.layers)&&(E.pushLight(C),C.castShadow&&E.pushShadow(C))}),E.setupLights(),X!==null&&X.updateLights(E.state.lightsArray),mt=this.localClippingEnabled,nt=H.init(this.clippingPlanes,mt),nt===!0&&H.setGlobalState(this.clippingPlanes,g),X!==null&&ae.render(E.state.shadowsArray,I,g);const R=new Set;return r.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const le=C.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const oe=le[_e];Yn(oe,I,g,C),R.add(oe)}else Yn(le,I,g,C),R.add(le)}),E=h.pop(),X!==null&&X.renderEnd(),R},this.compileAsync=function(r,g,I=null){const R=this.compile(r,g,I);return new Promise(C=>{function le(){if(R.forEach(function(_e){const pe=Te.get(_e).currentProgram;(pe===void 0||pe.isReady())&&R.delete(_e)}),R.size===0){C(r);return}setTimeout(le,10)}Ye.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Cn=null;function Ja(r){Cn&&Cn(r)}function Zn(){Vt.stop()}function $n(){Vt.start()}const Vt=new Ha;Vt.setAnimationLoop(Ja),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(r){Cn=r,J.setAnimationLoop(r),r===null?Vt.stop():Vt.start()},J.addEventListener("sessionstart",Zn),J.addEventListener("sessionend",$n),this.render=function(r,g){if(g!==void 0&&g.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;X!==null&&X.renderStart(r,g);const I=J.enabled===!0&&J.isPresenting===!0,R=q!==null&&(fe===null||I)&&q.begin(y,fe);if(r.matrixWorldAutoUpdate===!0&&r.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(g),g=J.getCamera()),r.isScene===!0&&r.onBeforeRender(y,r,g,fe),E=B.get(r,h.length),E.init(g),E.state.textureUnits=we.getTextureUnits(),h.push(E),Je.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),g.isArrayCamera?ct.setFromArrayCamera(g):Ne.setFromProjectionMatrix(Je,oi,g.reversedDepth),mt=this.localClippingEnabled,nt=H.init(this.clippingPlanes,mt),w=se.get(r,o.length),w.init(),o.push(w),this.info.render.frame++,J.enabled===!0&&J.isPresenting===!0){const _e=y.xr.getDepthSensingMesh();_e!==null&&Pn(_e,g,-1/0,y.sortObjects)}Pn(r,g,0,y.sortObjects),w.finish(),X!==null&&X.updateLights(E.state.lightsArray),y.sortObjects===!0&&w.sort(ye,ht),Mt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Mt&&m.addToRenderList(w,r),this.info.autoReset===!0&&this.info.reset(),nt===!0&&H.beginShadows();const C=E.state.shadowsArray;if(ae.render(C,r,g),nt===!0&&H.endShadows(),(R&&q.hasRenderPass())===!1){const _e=w.opaque,oe=w.transmissive;if(E.setupLights(),g.isArrayCamera){const pe=g.cameras;if(oe.length>0)for(let xe=0,Ce=pe.length;xe<Ce;xe++){const Ie=pe[xe];Jn(_e,oe,r,Ie)}Mt&&m.render(r);for(let xe=0,Ce=pe.length;xe<Ce;xe++){const Ie=pe[xe];Qn(w,r,Ie,Ie.viewport)}}else oe.length>0&&Jn(_e,oe,r,g),Mt&&m.render(r),Qn(w,r,g)}fe!==null&&V===0&&(we.updateMultisampleRenderTarget(fe),we.updateRenderTargetMipmap(fe)),R&&q.end(y),r.isScene===!0&&r.onAfterRender(y,r,g),ne.resetDefaultState(),K=-1,j=null,h.pop(),h.length>0?(E=h[h.length-1],we.setTextureUnits(E.state.textureUnits),nt===!0&&H.setGlobalState(y.clippingPlanes,E.state.camera)):E=null,o.pop(),o.length>0?w=o[o.length-1]:w=null,X!==null&&X.renderEnd()};function Pn(r,g,I,R){if(r.visible===!1)return;if(r.layers.test(g.layers)){if(r.isGroup)I=r.renderOrder;else if(r.isLOD)r.autoUpdate===!0&&r.update(g);else if(r.isLight)E.pushLight(r),r.castShadow&&E.pushShadow(r);else if(r.isSprite){const _e=g.isArrayCamera?ct:Ne;if(!r.frustumCulled||r.intersectsFrustum(_e)){R&&ot.setFromMatrixPosition(r.matrixWorld).applyMatrix4(Je);const oe=$.update(r),pe=r.material;pe.visible&&w.push(r,oe,pe,I,ot.z,null,g)}}else if(r.isMesh||r.isLine||r.isPoints){const _e=g.isArrayCamera?ct:Ne;if(!r.frustumCulled||r.intersectsFrustum(_e)){const oe=$.update(r),pe=r.material;if(R&&(r.boundingSphere!==void 0?(r.boundingSphere===null&&r.computeBoundingSphere(),ot.copy(r.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),ot.copy(oe.boundingSphere.center)),ot.applyMatrix4(r.matrixWorld).applyMatrix4(Je)),Array.isArray(pe)){const xe=oe.groups;for(let Ce=0,Ie=xe.length;Ce<Ie;Ce++){const ge=xe[Ce],Oe=pe[ge.materialIndex];Oe&&Oe.visible&&w.push(r,oe,Oe,I,ot.z,ge,g)}}else pe.visible&&w.push(r,oe,pe,I,ot.z,null,g)}}}const le=r.children;for(let _e=0,oe=le.length;_e<oe;_e++)Pn(le[_e],g,I,R)}function Qn(r,g,I,R){const{opaque:C,transmissive:le,transparent:_e}=r;E.setupLightsView(I),nt===!0&&H.setGlobalState(y.clippingPlanes,I),R&&ce.viewport(ie.copy(R)),C.length>0&&mn(C,g,I),le.length>0&&mn(le,g,I),_e.length>0&&mn(_e,g,I),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Jn(r,g,I,R){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[R.id]===void 0){const ge=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[R.id]=new yt(1,1,{generateMipmaps:!0,type:ge?Ot:Dt,minFilter:zt,samples:Math.max(4,Ze.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const le=E.state.transmissionRenderTarget[R.id],_e=R.viewport||ie;le.setSize(_e.z*y.transmissionResolutionScale,_e.w*y.transmissionResolutionScale);const oe=y.getRenderTarget(),pe=y.getActiveCubeFace(),xe=y.getActiveMipmapLevel();y.setRenderTarget(le),y.getClearColor(k),he=y.getClearAlpha(),he<1&&y.setClearColor(16777215,.5),y.clear(),Mt&&m.render(I);const Ce=y.toneMapping;y.toneMapping=It;const Ie=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),E.setupLightsView(R),nt===!0&&H.setGlobalState(y.clippingPlanes,R),mn(r,I,R),we.updateMultisampleRenderTarget(le),we.updateRenderTargetMipmap(le),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Oe=0,tt=g.length;Oe<tt;Oe++){const Xe=g[Oe],{object:ze,geometry:dt,material:ve,group:pt}=Xe;if(ve.side===Nt&&ze.layers.test(R.layers)){const He=ve.side;ve.side=St,ve.needsUpdate=!0,jn(ze,I,R,dt,ve,pt),ve.side=He,ve.needsUpdate=!0,ge=!0}}ge===!0&&(we.updateMultisampleRenderTarget(le),we.updateRenderTargetMipmap(le))}y.setRenderTarget(oe,pe,xe),y.setClearColor(k,he),Ie!==void 0&&(R.viewport=Ie),y.toneMapping=Ce}function mn(r,g,I){const R=g.isScene===!0?g.overrideMaterial:null;for(let C=0,le=r.length;C<le;C++){const _e=r[C],{object:oe,geometry:pe,group:xe}=_e;let Ce=_e.material;Ce.allowOverride===!0&&R!==null&&(Ce=R),oe.layers.test(I.layers)&&jn(oe,g,I,pe,Ce,xe)}}function jn(r,g,I,R,C,le){X!==null&&C.isNodeMaterial&&X.setObject(r,C),r.onBeforeRender(y,g,I,R,C,le),r.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,r.matrixWorld),r.normalMatrix.getNormalMatrix(r.modelViewMatrix),C.onBeforeRender(y,g,I,R,r,le),C.transparent===!0&&C.side===Nt&&C.forceSinglePass===!1?(C.side=St,C.needsUpdate=!0,y.renderBufferDirect(I,g,R,C,r,le),C.side=cn,C.needsUpdate=!0,y.renderBufferDirect(I,g,R,C,r,le),C.side=Nt):y.renderBufferDirect(I,g,R,C,r,le),r.onAfterRender(y,g,I,R,C,le)}function ei(r){let g=0;for(const I of r)I.texture!==null&&g++;return g}function nn(r,g,I){g.isScene!==!0&&(g=Et);const R=Te.get(r),C=E.state.lights,le=E.state.shadowsArray,_e=C.state.version,oe=z.getParameters(r,C.state,le,g,I,E.state.lightProbeGridArray),pe=z.getProgramCacheKey(oe);let xe=R.programs;R.environment=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?g.environment:null,R.fog=g.fog;const Ce=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap;R.envMap=u.get(r.envMap||R.environment,Ce),R.envMapRotation=R.environment!==null&&r.envMap===null?g.environmentRotation:r.envMapRotation,xe===void 0&&(r.addEventListener("dispose",Ve),xe=new Map,R.programs=xe,R.programVariants=new Map);let Ie=xe.get(pe);if(Ie!==void 0){if(R.currentProgram===Ie&&R.lightsStateVersion===_e)return ni(r,oe),Ie}else oe.uniforms=z.getUniforms(r),X!==null&&r.isNodeMaterial&&X.build(r,I,oe),r.onBeforeCompile(oe,y),Ie=z.acquireProgram(oe,pe),xe.set(pe,Ie),R.uniforms=oe.uniforms;const ge=R.uniforms;return(!r.isShaderMaterial&&!r.isRawShaderMaterial||r.clipping===!0)&&(ge.clippingPlanes=H.uniform),ni(r,oe),R.needsLights=nr(r),R.lightsStateVersion=_e,R.needsLights&&(ge.ambientLightColor.value=C.state.ambient,ge.lightProbe.value=C.state.probe,ge.sunLights.value=C.state.sun,ge.sunLightShadows.value=C.state.sunShadow,ge.directionalLights.value=C.state.directional,ge.directionalLightShadows.value=C.state.directionalShadow,ge.spotLights.value=C.state.spot,ge.spotLightShadows.value=C.state.spotShadow,ge.rectAreaLights.value=C.state.rectArea,ge.ltc_1.value=C.state.rectAreaLTC1,ge.ltc_2.value=C.state.rectAreaLTC2,ge.pointLights.value=C.state.point,ge.pointLightShadows.value=C.state.pointShadow,ge.hemisphereLights.value=C.state.hemi,ge.sunShadowMatrix.value=C.state.sunShadowMatrix,ge.sunShadowCascade.value=C.state.sunShadowCascade,ge.directionalShadowMatrix.value=C.state.directionalShadowMatrix,ge.spotLightMatrix.value=C.state.spotLightMatrix,ge.spotLightMap.value=C.state.spotLightMap,ge.pointShadowMatrix.value=C.state.pointShadowMatrix),R.numLightProbeGrids=ei(E.state.lightProbeGridArray),R.currentProgram=Ie,R.uniformsList=null,Ie}function ja(r,g,I,R,C){const le=Te.get(r),_e=le.currentProgram.id+","+R+","+C;let oe=le.programVariants.get(_e);return oe===void 0?(oe=nn(r,g,I),le.programVariants.set(_e,oe)):(le.currentProgram=oe,le.uniformsList=null,le.outputColorSpace=R,le.toneMapping=C),oe}function ti(r){if(r.uniformsList===null){const g=r.currentProgram.getUniforms();r.uniformsList=Mn.seqWithValue(g.seq,r.uniforms)}return r.uniformsList}function ni(r,g){const I=Te.get(r);I.outputColorSpace=g.outputColorSpace,I.batching=g.batching,I.batchingColor=g.batchingColor,I.instancing=g.instancing,I.instancingColor=g.instancingColor,I.instancingMorph=g.instancingMorph,I.skinning=g.skinning,I.morphTargets=g.morphTargets,I.morphNormals=g.morphNormals,I.morphColors=g.morphColors,I.morphTargetsCount=g.morphTargetsCount,I.numClippingPlanes=g.numClippingPlanes,I.numIntersection=g.numClipIntersection,I.vertexAlphas=g.vertexAlphas,I.vertexTangents=g.vertexTangents,I.toneMapping=g.toneMapping}function er(r,g,I,R,C){g.isScene!==!0&&(g=Et),we.resetTextureUnits();const le=g.fog,_e=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?g.environment:null,oe=fe===null?y.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:et.workingColorSpace,pe=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,xe=u.get(R.envMap||_e,pe),Ce=R.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,Ie=!!I.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),ge=!!I.morphAttributes.position,Oe=!!I.morphAttributes.normal,tt=!!I.morphAttributes.color;let Xe=It;R.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Xe=y.toneMapping);const ze=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,dt=ze!==void 0?ze.length:0,ve=Te.get(R),pt=E.state.lights;if(nt===!0&&(mt===!0||r!==j)){const je=r===j&&R.id===K;H.setState(R,r,je)}let He=!1,Wt=!1;R.version===ve.__version?ve.needsLights&&ve.lightsStateVersion!==pt.state.version||C.isBatchedMesh&&ve.batching===!1||!C.isBatchedMesh&&ve.batching===!0||C.isBatchedMesh&&ve.batchingColor===!0&&C._colorsTexture===null||C.isBatchedMesh&&ve.batchingColor===!1&&C._colorsTexture!==null||C.isInstancedMesh&&ve.instancing===!1||!C.isInstancedMesh&&ve.instancing===!0||C.isSkinnedMesh&&ve.skinning===!1||!C.isSkinnedMesh&&ve.skinning===!0||C.isInstancedMesh&&ve.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&ve.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&ve.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&ve.instancingMorph===!1&&C.morphTexture!==null||ve.envMap!==xe||R.fog===!0&&ve.fog!==le||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==H.numPlanes||ve.numIntersection!==H.numIntersection)||ve.vertexAlphas!==Ce||ve.vertexTangents!==Ie||ve.morphTargets!==ge||ve.morphNormals!==Oe||ve.morphColors!==tt||ve.morphTargetsCount!==dt||ve.numLightProbeGrids!==ei(E.state.lightProbeGridArray)?He=!0:(ve.outputColorSpace!==oe||ve.toneMapping!==Xe)&&(Wt=!0):(He=!0,ve.__version=R.version);let ut=ve.currentProgram;(He===!0||Wt===!0)&&(ut=Wt===!0?ja(R,g,C,oe,Xe):nn(R,g,C),X&&R.isNodeMaterial&&X.onUpdateProgram(R,ut,ve));let _n=!1,Bt=!1,kt=!1;const Be=ut.getUniforms(),ft=ve.uniforms;if(ce.useProgram(ut.program)&&(_n=!0,Bt=!0,kt=!0),R.id!==K&&(K=R.id,Bt=!0),_n||j!==r){ce.buffers.depth.getReversed()&&r.reversedDepth!==!0&&(r._reversedDepth=!0,r.updateProjectionMatrix()),Be.setValue(T,"projectionMatrix",r.projectionMatrix),Be.setValue(T,"viewMatrix",r.matrixWorldInverse);const lt=Be.map.cameraPosition;lt!==void 0&&lt.setValue(T,Ct.setFromMatrixPosition(r.matrixWorld)),Ze.logarithmicDepthBuffer&&Be.setValue(T,"logDepthBufFC",2/(Math.log(r.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&Be.setValue(T,"isOrthographic",r.isOrthographicCamera===!0),j!==r&&(j=r,Bt=!0,kt=!0)}if(ve.needsLights&&(pt.state.sunShadowMap.length>0&&Be.setValue(T,"sunShadowMap",pt.state.sunShadowMap,we),pt.state.directionalShadowMap.length>0&&Be.setValue(T,"directionalShadowMap",pt.state.directionalShadowMap,we),pt.state.spotShadowMap.length>0&&Be.setValue(T,"spotShadowMap",pt.state.spotShadowMap,we),pt.state.pointShadowMap.length>0&&Be.setValue(T,"pointShadowMap",pt.state.pointShadowMap,we)),C.isSkinnedMesh){Be.setOptional(T,C,"bindMatrix"),Be.setOptional(T,C,"bindMatrixInverse");const je=C.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Be.setValue(T,"boneTexture",je.boneTexture,we))}C.isBatchedMesh&&(Be.setOptional(T,C,"batchingTexture"),Be.setValue(T,"batchingTexture",C._matricesTexture,we),Be.setOptional(T,C,"batchingIdTexture"),Be.setValue(T,"batchingIdTexture",C._indirectTexture,we),Be.setOptional(T,C,"batchingColorTexture"),C._colorsTexture!==null&&Be.setValue(T,"batchingColorTexture",C._colorsTexture,we));const bt=I.morphAttributes;if((bt.position!==void 0||bt.normal!==void 0||bt.color!==void 0)&&W.update(C,I,ut),(Bt||ve.receiveShadow!==C.receiveShadow)&&(ve.receiveShadow=C.receiveShadow,Be.setValue(T,"receiveShadow",C.receiveShadow)),(R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial)&&R.envMap===null&&g.environment!==null&&(ft.envMapIntensity.value=g.environmentIntensity),ft.dfgLUT!==void 0&&(ft.dfgLUT.value=Ed()),Bt){if(Be.setValue(T,"toneMappingExposure",y.toneMappingExposure),ve.needsLights&&tr(ft,kt),le&&R.fog===!0&&te.refreshFogUniforms(ft,le),te.refreshMaterialUniforms(ft,R,me,Re,E.state.transmissionRenderTarget[r.id]),ve.needsLights&&ve.numLightProbeGrids>0){const je=M;let lt=0;for(const Ut of E.state.lightProbeGridArray)Ut.texture!==null&&(je.textures[lt]=Ut.texture,je.min[lt]=Ut.boundingBox.min,je.max[lt]=Ut.boundingBox.max,je.resolution[lt]=Ut.resolution,lt++);for(const Ut in je)je[Ut].length=lt;ft.probesSH.value=je.textures,ft.probesMin.value=je.min,ft.probesMax.value=je.max,ft.probesResolution.value=je.resolution}Mn.upload(T,ti(ve),ft,we)}if(R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Mn.upload(T,ti(ve),ft,we),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&Be.setValue(T,"center",C.center),Be.setValue(T,"modelViewMatrix",C.modelViewMatrix),Be.setValue(T,"normalMatrix",C.normalMatrix),Be.setValue(T,"modelMatrix",C.matrixWorld),R.uniformsGroups!==void 0){const je=R.uniformsGroups;for(let lt=0,Ut=je.length;lt<Ut;lt++){const ai=je[lt];Ee.update(ai,ut),Ee.bind(ai,ut)}}return ut}function tr(r,g){r.ambientLightColor.needsUpdate=g,r.lightProbe.needsUpdate=g,r.sunLights.needsUpdate=g,r.sunLightShadows.needsUpdate=g,r.directionalLights.needsUpdate=g,r.directionalLightShadows.needsUpdate=g,r.pointLights.needsUpdate=g,r.pointLightShadows.needsUpdate=g,r.spotLights.needsUpdate=g,r.spotLightShadows.needsUpdate=g,r.rectAreaLights.needsUpdate=g,r.hemisphereLights.needsUpdate=g}function nr(r){return r.isMeshLambertMaterial||r.isMeshToonMaterial||r.isMeshPhongMaterial||r.isMeshStandardMaterial||r.isShadowMaterial||r.isShaderMaterial&&r.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return fe},this.setRenderTargetTextures=function(r,g,I){const R=Te.get(r);R.__autoAllocateDepthBuffer=r.resolveDepthBuffer===!1,R.__autoAllocateDepthBuffer===!1&&(R.__useRenderToTexture=!1),Te.get(r.texture).__webglTexture=g,Te.get(r.depthTexture).__webglTexture=R.__autoAllocateDepthBuffer?void 0:I,R.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(r,g){const I=Te.get(r);I.__webglFramebuffer=g,I.__useDefaultFramebuffer=g===void 0},this.setRenderTarget=function(r,g=0,I=0){fe=r,Y=g,V=I;let R=null,C=!1,le=!1;if(r){const oe=Te.get(r);if(oe.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(T.FRAMEBUFFER,oe.__webglFramebuffer),ie.copy(r.viewport),Ae.copy(r.scissor),Ue=r.scissorTest,ce.viewport(ie),ce.scissor(Ae),ce.setScissorTest(Ue),K=-1;return}else if(oe.__webglFramebuffer===void 0)we.setupRenderTarget(r);else if(oe.__hasExternalTextures)we.rebindTextures(r,Te.get(r.texture).__webglTexture,Te.get(r.depthTexture).__webglTexture);else if(r.depthBuffer){const Ce=r.depthTexture;if(oe.__boundDepthTexture!==Ce){if(Ce!==null&&Te.has(Ce)&&(r.width!==Ce.image.width||r.height!==Ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");we.setupDepthRenderbuffer(r)}}const pe=r.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(le=!0);const xe=Te.get(r).__webglFramebuffer;r.isWebGLCubeRenderTarget?(Array.isArray(xe[g])?R=xe[g][I]:R=xe[g],C=!0):r.samples>0&&we.useMultisampledRTT(r)===!1?R=Te.get(r).__webglMultisampledFramebuffer:Array.isArray(xe)?R=xe[I]:R=xe,ie.copy(r.viewport),Ae.copy(r.scissor),Ue=r.scissorTest}else ie.copy(be).multiplyScalar(me).floor(),Ae.copy(qe).multiplyScalar(me).floor(),Ue=ke;if(I!==0&&(R=Z),ce.bindFramebuffer(T.FRAMEBUFFER,R)&&ce.drawBuffers(r,R),ce.viewport(ie),ce.scissor(Ae),ce.setScissorTest(Ue),C){const oe=Te.get(r.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+g,oe.__webglTexture,I)}else if(le){const oe=g;for(let pe=0;pe<r.textures.length;pe++){const xe=Te.get(r.textures[pe]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+pe,xe.__webglTexture,I,oe)}}else if(r!==null&&I!==0){const oe=Te.get(r.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,oe.__webglTexture,I)}K=-1};function ii(r){const g=Te.get(r);return(g.__readFormat!==r.format||g.__readType!==r.type)&&(g.__readFormat=r.format,g.__readType=r.type,g.__formatReadable=Ze.textureFormatReadable(r.format),g.__typeReadable=Ze.textureTypeReadable(r.type)),g}this.readRenderTargetPixels=function(r,g,I,R,C,le,_e,oe=0){if(!(r&&r.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Te.get(r).__webglFramebuffer;if(r.isWebGLCubeRenderTarget&&_e!==void 0&&(pe=pe[_e],Array.isArray(pe)&&(pe=pe[0])),pe){ce.bindFramebuffer(T.FRAMEBUFFER,pe);try{const xe=r.textures[oe],Ce=xe.format,Ie=xe.type;r.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+oe);const ge=ii(xe);if(ge.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ge.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}g>=0&&g<=r.width-R&&I>=0&&I<=r.height-C&&T.readPixels(g,I,R,C,ee.convert(Ce),ee.convert(Ie),le)}finally{const xe=fe!==null?Te.get(fe).__webglFramebuffer:null;ce.bindFramebuffer(T.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(r,g,I,R,C,le,_e,oe=0){if(!(r&&r.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Te.get(r).__webglFramebuffer;if(r.isWebGLCubeRenderTarget&&_e!==void 0&&(pe=pe[_e],Array.isArray(pe)&&(pe=pe[0])),pe)if(g>=0&&g<=r.width-R&&I>=0&&I<=r.height-C){ce.bindFramebuffer(T.FRAMEBUFFER,pe);const xe=r.textures[oe],Ce=xe.format,Ie=xe.type;r.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+oe);const ge=ii(xe);if(ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Oe),T.bufferData(T.PIXEL_PACK_BUFFER,le.byteLength,T.STREAM_READ),T.readPixels(g,I,R,C,ee.convert(Ce),ee.convert(Ie),0),T.bindBuffer(T.PIXEL_PACK_BUFFER,null);const tt=fe!==null?Te.get(fe).__webglFramebuffer:null;ce.bindFramebuffer(T.FRAMEBUFFER,tt);const Xe=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await sr(T,Xe,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Oe),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,le),T.bindBuffer(T.PIXEL_PACK_BUFFER,null),T.deleteBuffer(Oe),T.deleteSync(Xe),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(r,g=null,I=0){const R=Math.pow(2,-I),C=Math.floor(r.image.width*R),le=Math.floor(r.image.height*R),_e=g!==null?g.x:0,oe=g!==null?g.y:0;we.setTexture2D(r,0),T.copyTexSubImage2D(T.TEXTURE_2D,I,0,0,_e,oe,C,le),ce.unbindTexture()},this.copyTextureToTexture=function(r,g,I=null,R=null,C=0,le=0){let _e,oe,pe,xe,Ce,Ie,ge,Oe,tt;const Xe=r.isCompressedTexture?r.mipmaps[le]:r.image;if(I!==null)_e=I.max.x-I.min.x,oe=I.max.y-I.min.y,pe=I.isBox3?I.max.z-I.min.z:1,xe=I.min.x,Ce=I.min.y,Ie=I.isBox3?I.min.z:0;else{const Be=Math.pow(2,-C);_e=Math.floor(Xe.width*Be),oe=Math.floor(Xe.height*Be),r.isDataArrayTexture?pe=Xe.depth:r.isData3DTexture?pe=Math.floor(Xe.depth*Be):pe=1,xe=0,Ce=0,Ie=0}R!==null?(ge=R.x,Oe=R.y,tt=R.z):(ge=0,Oe=0,tt=0);const ze=ee.convert(g.format),dt=ee.convert(g.type);let ve;g.isData3DTexture?(we.setTexture3D(g,0),ve=T.TEXTURE_3D):g.isDataArrayTexture||g.isCompressedArrayTexture?(we.setTexture2DArray(g,0),ve=T.TEXTURE_2D_ARRAY):(we.setTexture2D(g,0),ve=T.TEXTURE_2D),ce.activeTexture(T.TEXTURE0),ce.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,g.flipY),ce.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),ce.pixelStorei(T.UNPACK_ALIGNMENT,g.unpackAlignment);const pt=ce.getParameter(T.UNPACK_ROW_LENGTH),He=ce.getParameter(T.UNPACK_IMAGE_HEIGHT),Wt=ce.getParameter(T.UNPACK_SKIP_PIXELS),ut=ce.getParameter(T.UNPACK_SKIP_ROWS),_n=ce.getParameter(T.UNPACK_SKIP_IMAGES);ce.pixelStorei(T.UNPACK_ROW_LENGTH,Xe.width),ce.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Xe.height),ce.pixelStorei(T.UNPACK_SKIP_PIXELS,xe),ce.pixelStorei(T.UNPACK_SKIP_ROWS,Ce),ce.pixelStorei(T.UNPACK_SKIP_IMAGES,Ie);const Bt=r.isDataArrayTexture||r.isData3DTexture,kt=g.isDataArrayTexture||g.isData3DTexture;if(r.isDepthTexture){const Be=Te.get(r),ft=Te.get(g),bt=Te.get(Be.__renderTarget),je=Te.get(ft.__renderTarget);ce.bindFramebuffer(T.READ_FRAMEBUFFER,bt.__webglFramebuffer),ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let lt=0;lt<pe;lt++)Bt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Te.get(r).__webglTexture,C,Ie+lt),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Te.get(g).__webglTexture,le,tt+lt)),T.blitFramebuffer(xe,Ce,xe+_e,Ce+oe,ge,Oe,ge+_e,Oe+oe,T.DEPTH_BUFFER_BIT,T.NEAREST);ce.bindFramebuffer(T.READ_FRAMEBUFFER,null),ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(C!==0||r.isRenderTargetTexture||Te.has(r)){const Be=Te.get(r),ft=Te.get(g);ce.bindFramebuffer(T.READ_FRAMEBUFFER,A),ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,Q);for(let bt=0;bt<pe;bt++)Bt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Be.__webglTexture,C,Ie+bt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Be.__webglTexture,C),kt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ft.__webglTexture,le,tt+bt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ft.__webglTexture,le),C!==0?T.blitFramebuffer(xe,Ce,xe+_e,Ce+oe,ge,Oe,ge+_e,Oe+oe,T.COLOR_BUFFER_BIT,T.NEAREST):kt?T.copyTexSubImage3D(ve,le,ge,Oe,tt+bt,xe,Ce,_e,oe):T.copyTexSubImage2D(ve,le,ge,Oe,xe,Ce,_e,oe);ce.bindFramebuffer(T.READ_FRAMEBUFFER,null),ce.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else kt?r.isDataTexture||r.isData3DTexture?T.texSubImage3D(ve,le,ge,Oe,tt,_e,oe,pe,ze,dt,Xe.data):g.isCompressedArrayTexture?T.compressedTexSubImage3D(ve,le,ge,Oe,tt,_e,oe,pe,ze,Xe.data):T.texSubImage3D(ve,le,ge,Oe,tt,_e,oe,pe,ze,dt,Xe):r.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,le,ge,Oe,_e,oe,ze,dt,Xe.data):r.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,le,ge,Oe,Xe.width,Xe.height,ze,Xe.data):T.texSubImage2D(T.TEXTURE_2D,le,ge,Oe,_e,oe,ze,dt,Xe);ce.pixelStorei(T.UNPACK_ROW_LENGTH,pt),ce.pixelStorei(T.UNPACK_IMAGE_HEIGHT,He),ce.pixelStorei(T.UNPACK_SKIP_PIXELS,Wt),ce.pixelStorei(T.UNPACK_SKIP_ROWS,ut),ce.pixelStorei(T.UNPACK_SKIP_IMAGES,_n),le===0&&g.generateMipmaps===!0&&g.mipmapsAutoUpdate===!0&&T.generateMipmap(ve),ce.unbindTexture()},this.initRenderTarget=function(r){Te.get(r).__webglFramebuffer===void 0&&we.setupRenderTarget(r)},this.initTexture=function(r){r.isCubeTexture?we.setTextureCube(r,0):r.isData3DTexture?we.setTexture3D(r,0):r.isDataArrayTexture||r.isCompressedArrayTexture?we.setTexture2DArray(r,0):we.setTexture2D(r,0),ce.unbindTexture()},this.resetState=function(){Y=0,V=0,fe=null,ce.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(n),t.unpackColorSpace=et._getUnpackColorSpace()}}class Ad extends Ao{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const n=new pn;n.deleteAttribute("uv");const t=new Ki({side:St}),i=new Ki,c=new Ro(16777215,900,28,2);c.position.set(.418,16.199,.3),this.add(c);const s=new gt(n,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const d=new bo(n,i,6),p=new wo;p.position.set(-10.906,2.009,1.846),p.rotation.set(0,-.195,0),p.scale.set(2.328,7.905,4.651),p.updateMatrix(),d.setMatrixAt(0,p.matrix),p.position.set(-5.607,-.754,-.758),p.rotation.set(0,.994,0),p.scale.set(1.97,1.534,3.955),p.updateMatrix(),d.setMatrixAt(1,p.matrix),p.position.set(6.167,.857,7.803),p.rotation.set(0,.561,0),p.scale.set(3.927,6.285,3.687),p.updateMatrix(),d.setMatrixAt(2,p.matrix),p.position.set(-2.017,.018,6.124),p.rotation.set(0,.333,0),p.scale.set(2.002,4.566,2.064),p.updateMatrix(),d.setMatrixAt(3,p.matrix),p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),p.updateMatrix(),d.setMatrixAt(4,p.matrix),p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),p.updateMatrix(),d.setMatrixAt(5,p.matrix),this.add(d);const D=new gt(n,Yt(50));D.position.set(-16.116,14.37,8.208),D.scale.set(.1,2.428,2.739),this.add(D);const S=new gt(n,Yt(50));S.position.set(-16.109,18.021,-8.207),S.scale.set(.1,2.425,2.751),this.add(S);const G=new gt(n,Yt(17));G.position.set(14.904,12.198,-1.832),G.scale.set(.15,4.265,6.331),this.add(G);const N=new gt(n,Yt(43));N.position.set(-.462,8.89,14.52),N.scale.set(4.38,5.441,.088),this.add(N);const x=new gt(n,Yt(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);const v=new gt(n,Yt(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const n=new Set;this.traverse(t=>{t.isMesh&&(n.add(t.geometry),n.add(t.material))});for(const t of n)t.dispose()}}function Yt(e){return new Co({color:0,emissive:16777215,emissiveIntensity:e})}const on=new Ge;function Rt(e,n,t,i,c,s){const d=2*Math.PI*c/4,p=Math.max(s-2*c,0),D=Math.PI/4;on.copy(n),on[i]=0,on.normalize();const S=.5*d/(d+p),G=1-on.angleTo(e)/D;return Math.sign(on[t])===1?G*S:p/(d+p)+S+S*(1-G)}class Qa extends pn{constructor(n=1,t=1,i=1,c=2,s=.1){const d=c*2+1;if(s=Math.min(n/2,t/2,i/2,s),super(1,1,1,d,d,d),this.type="RoundedBoxGeometry",this.parameters={width:n,height:t,depth:i,segments:c,radius:s},d===1)return;const p=this.toNonIndexed();this.index=null,this.attributes.position=p.attributes.position,this.attributes.normal=p.attributes.normal,this.attributes.uv=p.attributes.uv;const D=new Ge,S=new Ge,G=new Ge(n,t,i).divideScalar(2).subScalar(s),N=this.attributes.position.array,x=this.attributes.normal.array,v=this.attributes.uv.array,P=N.length/6,U=new Ge,f=.5/d;for(let l=0,_=0;l<N.length;l+=3,_+=2)switch(D.fromArray(N,l),S.copy(D),S.x-=Math.sign(S.x)*f,S.y-=Math.sign(S.y)*f,S.z-=Math.sign(S.z)*f,S.normalize(),N[l+0]=G.x*Math.sign(D.x)+S.x*s,N[l+1]=G.y*Math.sign(D.y)+S.y*s,N[l+2]=G.z*Math.sign(D.z)+S.z*s,x[l+0]=S.x,x[l+1]=S.y,x[l+2]=S.z,Math.floor(l/P)){case 0:U.set(1,0,0),v[_+0]=Rt(U,S,"z","y",s,i),v[_+1]=1-Rt(U,S,"y","z",s,t);break;case 1:U.set(-1,0,0),v[_+0]=1-Rt(U,S,"z","y",s,i),v[_+1]=1-Rt(U,S,"y","z",s,t);break;case 2:U.set(0,1,0),v[_+0]=1-Rt(U,S,"x","z",s,n),v[_+1]=Rt(U,S,"z","x",s,i);break;case 3:U.set(0,-1,0),v[_+0]=1-Rt(U,S,"x","z",s,n),v[_+1]=1-Rt(U,S,"z","x",s,i);break;case 4:U.set(0,0,1),v[_+0]=1-Rt(U,S,"x","y",s,n),v[_+1]=1-Rt(U,S,"y","x",s,t);break;case 5:U.set(0,0,-1),v[_+0]=Rt(U,S,"x","y",s,n),v[_+1]=1-Rt(U,S,"y","x",s,t);break}}static fromJSON(n){return new Qa(n.width,n.height,n.depth,n.segments,n.radius)}}const Rd={palette:{midnight:"#010413"}},bd=[[{x:-.49606,y:-.06464,width:58e-5},{x:-.47583,y:-.05305,width:.00391},{x:-.45559,y:-.03908,width:.00453},{x:-.43536,y:-.02433,width:.00566},{x:-.41512,y:-.00924,width:.00623},{x:-.39489,y:.00492,width:.00711},{x:-.37465,y:.01745,width:.00861},{x:-.35442,y:.02728,width:.00928},{x:-.33418,y:.03497,width:.01012},{x:-.31395,y:.03871,width:.01133},{x:-.29371,y:.03937,width:.01345},{x:-.27348,y:.03684,width:.0165},{x:-.25324,y:.03028,width:.01385},{x:-.233,y:.02309,width:.01395},{x:-.21277,y:.00707,width:.01103},{x:-.19253,y:-.01815,width:.01038},{x:-.1723,y:-.04582,width:.01028},{x:-.15206,y:-.07517,width:.00984},{x:-.13183,y:-.10425,width:.01178},{x:-.11159,y:-.12721,width:.01231},{x:-.09136,y:-.14786,width:.01462},{x:-.07112,y:-.16165,width:.01855},{x:-.05089,y:-.16913,width:.02099},{x:-.03065,y:-.17121,width:.02283},{x:-.01042,y:-.16809,width:.02143},{x:.00982,y:-.15961,width:.02137},{x:.03005,y:-.14689,width:.01706},{x:.05029,y:-.12971,width:.0147},{x:.07052,y:-.10641,width:.01061},{x:.09076,y:-.08198,width:.01171},{x:.11099,y:-.05789,width:.01138},{x:.13123,y:-.03415,width:.01172},{x:.15146,y:-.01203,width:.01131},{x:.1717,y:.00883,width:.01118},{x:.19193,y:.02688,width:.01085},{x:.21217,y:.04194,width:.0109},{x:.2324,y:.05444,width:.01094},{x:.25264,y:.06357,width:.01076},{x:.27287,y:.06965,width:.00973},{x:.29311,y:.07184,width:.00928},{x:.31334,y:.07059,width:.00909},{x:.33358,y:.06521,width:.0078},{x:.35381,y:.05664,width:.00693},{x:.37405,y:.04513,width:.0063},{x:.39428,y:.03094,width:.00557},{x:.41452,y:.01434,width:.00516},{x:.43475,y:-.00292,width:.00525},{x:.45499,y:-.01867,width:.00432},{x:.47522,y:-.03329,width:.00291},{x:.49546,y:-.04685,width:81e-5}],[{x:-.48833,y:-.0716,width:.00101},{x:-.46825,y:-.06771,width:.00484},{x:-.44817,y:-.05994,width:.0054},{x:-.42809,y:-.04973,width:.00593},{x:-.40802,y:-.03824,width:.0072},{x:-.38794,y:-.02614,width:.00794},{x:-.36786,y:-.01409,width:.00803},{x:-.34779,y:-.00287,width:.00824},{x:-.32771,y:.00664,width:.00863},{x:-.30763,y:.01321,width:.00825},{x:-.28755,y:.01682,width:.00844},{x:-.26748,y:.01764,width:.00756},{x:-.2474,y:.0148,width:.00685},{x:-.22732,y:.00512,width:.00712},{x:-.20725,y:-.01142,width:.00593},{x:-.18717,y:-.02744,width:.00857},{x:-.16709,y:-.04012,width:.00511},{x:-.14701,y:-.06765,width:.00411},{x:-.12694,y:-.09464,width:.00378},{x:-.10686,y:-.1193,width:.00427},{x:-.08678,y:-.13753,width:.00571},{x:-.06671,y:-.15021,width:.00606},{x:-.04663,y:-.15855,width:.007},{x:-.02655,y:-.16307,width:.00859},{x:-.00647,y:-.16279,width:.01035},{x:.0136,y:-.15967,width:.0112},{x:.03368,y:-.14992,width:.00987},{x:.05376,y:-.14231,width:.01013},{x:.07384,y:-.11941,width:.00689},{x:.09391,y:-.10254,width:.00983},{x:.11399,y:-.08546,width:.00878},{x:.13407,y:-.06821,width:.00927},{x:.15414,y:-.04977,width:.00929},{x:.17422,y:-.0329,width:.00958},{x:.1943,y:-.01688,width:.00976},{x:.21438,y:-.00173,width:.01005},{x:.23445,y:.01169,width:.0091},{x:.25453,y:.02304,width:.0089},{x:.27461,y:.03199,width:.00946},{x:.29468,y:.03748,width:.00879},{x:.31476,y:.03977,width:.00851},{x:.33484,y:.03934,width:.00824},{x:.35492,y:.0354,width:.00747},{x:.37499,y:.02876,width:.00719},{x:.39507,y:.01989,width:.00666},{x:.41515,y:.00824,width:.00573},{x:.43522,y:-.00698,width:.00515},{x:.4553,y:-.02239,width:.00433},{x:.47538,y:-.03602,width:.00348},{x:.49546,y:-.04685,width:88e-5}],[{x:-.47595,y:-.08166,width:89e-5},{x:-.45613,y:-.08267,width:.00496},{x:-.4363,y:-.07891,width:.00607},{x:-.41648,y:-.07343,width:.00698},{x:-.39665,y:-.06635,width:.00763},{x:-.37683,y:-.05721,width:.00749},{x:-.357,y:-.04653,width:.00778},{x:-.33718,y:-.0358,width:.00865},{x:-.31735,y:-.02494,width:.00838},{x:-.29753,y:-.01529,width:.00852},{x:-.27771,y:-.00825,width:.0085},{x:-.25788,y:-.00433,width:.00781},{x:-.23806,y:-.00413,width:.00773},{x:-.21823,y:-.00778,width:.00725},{x:-.19841,y:-.01712,width:.00614},{x:-.17858,y:-.02795,width:.00599},{x:-.15876,y:-.0425,width:.00465},{x:-.13893,y:-.06731,width:.00365},{x:-.11911,y:-.09074,width:.00404},{x:-.09928,y:-.11591,width:.00437},{x:-.07946,y:-.12838,width:.00521},{x:-.05963,y:-.14582,width:.00453},{x:-.03981,y:-.15408,width:.00587},{x:-.01998,y:-.1597,width:.00606},{x:-16e-5,y:-.16287,width:.00695},{x:.01966,y:-.16362,width:.00696},{x:.03949,y:-.1564,width:.00835},{x:.05931,y:-.15204,width:.0079},{x:.07914,y:-.13097,width:.00797},{x:.09896,y:-.12127,width:.00886},{x:.11879,y:-.10999,width:.00865},{x:.13861,y:-.09753,width:.00922},{x:.15844,y:-.08434,width:.00962},{x:.17826,y:-.07077,width:.0096},{x:.19809,y:-.05683,width:.00998},{x:.21791,y:-.04322,width:.00974},{x:.23774,y:-.03068,width:.00966},{x:.25756,y:-.01872,width:.00941},{x:.27739,y:-.00793,width:.00942},{x:.29721,y:86e-5,width:.00919},{x:.31703,y:.00666,width:.00863},{x:.33686,y:.00978,width:.00847},{x:.35668,y:.01007,width:.00815},{x:.37651,y:.00768,width:.00756},{x:.39633,y:.00282,width:.00745},{x:.41616,y:-.00413,width:.00679},{x:.43598,y:-.01351,width:.00578},{x:.45581,y:-.0264,width:.00459},{x:.47563,y:-.03968,width:.00379},{x:.49546,y:-.04685,width:95e-5}],[{x:-.45894,y:-.09403,width:96e-5},{x:-.43946,y:-.09807,width:.00516},{x:-.41998,y:-.09854,width:.00571},{x:-.4005,y:-.09692,width:.00612},{x:-.38103,y:-.09308,width:.00653},{x:-.36155,y:-.08741,width:.00805},{x:-.34207,y:-.07973,width:.00787},{x:-.32259,y:-.07042,width:.0086},{x:-.30312,y:-.06037,width:.00865},{x:-.28364,y:-.04989,width:.00821},{x:-.26416,y:-.03986,width:.00825},{x:-.24469,y:-.03159,width:.00863},{x:-.22521,y:-.02709,width:.00806},{x:-.20573,y:-.02609,width:.00773},{x:-.18625,y:-.0286,width:.00721},{x:-.16678,y:-.03614,width:.00721},{x:-.1473,y:-.04669,width:.0047},{x:-.12782,y:-.06476,width:.0049},{x:-.10834,y:-.08567,width:.00332},{x:-.08887,y:-.1061,width:.00553},{x:-.06939,y:-.12222,width:.00344},{x:-.04991,y:-.14209,width:.0045},{x:-.03043,y:-.14894,width:.00568},{x:-.01096,y:-.15249,width:.00599},{x:.00852,y:-.15713,width:.00604},{x:.028,y:-.15998,width:.0065},{x:.04748,y:-.15871,width:.00659},{x:.06695,y:-.15254,width:.0074},{x:.08643,y:-.14713,width:.0082},{x:.10591,y:-.14137,width:.00811},{x:.12539,y:-.1346,width:.00823},{x:.14486,y:-.12642,width:.00886},{x:.16434,y:-.11679,width:.0089},{x:.18382,y:-.10641,width:.00921},{x:.2033,y:-.09569,width:.00944},{x:.22277,y:-.0846,width:.00974},{x:.24225,y:-.07283,width:.00945},{x:.26173,y:-.06081,width:.00926},{x:.2812,y:-.04996,width:.00963},{x:.30068,y:-.04051,width:.00943},{x:.32016,y:-.03211,width:.00933},{x:.33964,y:-.02569,width:.00878},{x:.35911,y:-.02101,width:.00834},{x:.37859,y:-.01886,width:.008},{x:.39807,y:-.01895,width:.00772},{x:.41755,y:-.02084,width:.00763},{x:.43702,y:-.02418,width:.00722},{x:.4565,y:-.03189,width:.00521},{x:.47598,y:-.0426,width:.0039},{x:.49546,y:-.04685,width:97e-5}],[{x:-.43651,y:-.1095,width:89e-5},{x:-.41749,y:-.11725,width:.00534},{x:-.39847,y:-.12079,width:.00615},{x:-.37945,y:-.12134,width:.00671},{x:-.36043,y:-.11989,width:.00764},{x:-.34141,y:-.11606,width:.00772},{x:-.32239,y:-.11043,width:.00803},{x:-.30337,y:-.10303,width:.00782},{x:-.28435,y:-.09424,width:.00778},{x:-.26533,y:-.0845,width:.0082},{x:-.24631,y:-.07474,width:.00817},{x:-.22729,y:-.06689,width:.00815},{x:-.20827,y:-.06181,width:.00808},{x:-.18925,y:-.05802,width:.00771},{x:-.17023,y:-.05632,width:.00753},{x:-.15121,y:-.05358,width:.00695},{x:-.13219,y:-.05346,width:.00671},{x:-.11317,y:-.06364,width:.00495},{x:-.09415,y:-.07978,width:.00515},{x:-.07513,y:-.09351,width:.00404},{x:-.05611,y:-.11761,width:.00418},{x:-.03709,y:-.13107,width:.0048},{x:-.01807,y:-.14485,width:.00586},{x:94e-5,y:-.14913,width:.00613},{x:.01996,y:-.1515,width:.00592},{x:.03898,y:-.16302,width:.006},{x:.058,y:-.16596,width:.00619},{x:.07702,y:-.1648,width:.00618},{x:.09604,y:-.16367,width:.00692},{x:.11506,y:-.16104,width:.0076},{x:.13408,y:-.15691,width:.00826},{x:.1531,y:-.15164,width:.00815},{x:.17212,y:-.14564,width:.00804},{x:.19114,y:-.13814,width:.00923},{x:.21016,y:-.12983,width:.00917},{x:.22918,y:-.12115,width:.00976},{x:.2482,y:-.11175,width:.00898},{x:.26722,y:-.10153,width:.00948},{x:.28624,y:-.09159,width:.00962},{x:.30526,y:-.08168,width:.00962},{x:.32428,y:-.07205,width:.0092},{x:.3433,y:-.06307,width:.00865},{x:.36232,y:-.0555,width:.00808},{x:.38134,y:-.04902,width:.00815},{x:.40036,y:-.04464,width:.00837},{x:.41938,y:-.04202,width:.00796},{x:.4384,y:-.04012,width:.00718},{x:.45742,y:-.04068,width:.00646},{x:.47644,y:-.04558,width:.00484},{x:.49546,y:-.04685,width:97e-5}],[{x:-.40402,y:-.13347,width:91e-5},{x:-.38567,y:-.14088,width:.00529},{x:-.36731,y:-.14591,width:.00686},{x:-.34895,y:-.14817,width:.00696},{x:-.3306,y:-.14784,width:.00766},{x:-.31224,y:-.14421,width:.0081},{x:-.29388,y:-.13897,width:.00866},{x:-.27553,y:-.13105,width:.00895},{x:-.25717,y:-.12205,width:.0084},{x:-.23881,y:-.11175,width:.00798},{x:-.22046,y:-.10129,width:.00811},{x:-.2021,y:-.09097,width:.00778},{x:-.18374,y:-.08062,width:.00699},{x:-.16539,y:-.07391,width:.00756},{x:-.14703,y:-.06922,width:.00737},{x:-.12867,y:-.06502,width:.00764},{x:-.11032,y:-.06525,width:.00695},{x:-.09196,y:-.07623,width:.00583},{x:-.0736,y:-.09103,width:.00473},{x:-.05525,y:-.11057,width:.00533},{x:-.03689,y:-.12283,width:.00638},{x:-.01853,y:-.12921,width:.0066},{x:-18e-5,y:-.13506,width:.00663},{x:.01818,y:-.14081,width:.00633},{x:.03654,y:-.15892,width:.00448},{x:.05489,y:-.17259,width:.0056},{x:.07325,y:-.17699,width:.0068},{x:.09161,y:-.17944,width:.00692},{x:.10996,y:-.18089,width:.00745},{x:.12832,y:-.18086,width:.00835},{x:.14668,y:-.17944,width:.00842},{x:.16503,y:-.17696,width:.00887},{x:.18339,y:-.17352,width:.00901},{x:.20175,y:-.1685,width:.00912},{x:.22011,y:-.16267,width:.0099},{x:.23846,y:-.15605,width:.01008},{x:.25682,y:-.14833,width:.01001},{x:.27518,y:-.13973,width:.01049},{x:.29353,y:-.13078,width:.01033},{x:.31189,y:-.12115,width:.0102},{x:.33025,y:-.11119,width:.00947},{x:.3486,y:-.1009,width:.00949},{x:.36696,y:-.091,width:.00888},{x:.38532,y:-.08142,width:.00901},{x:.40367,y:-.0729,width:.00857},{x:.42203,y:-.06507,width:.00805},{x:.44039,y:-.05828,width:.0062},{x:.45874,y:-.05198,width:.00538},{x:.4771,y:-.04865,width:.00476},{x:.49546,y:-.04685,width:96e-5}]],wd=[{x:-.1283,y:-.0337,width:.02088,height:.0495,stemBottom:-.07702,stemTop:-45e-5,stemWidth:.00387,color:"#106f96"},{x:-.07648,y:-.04105,width:.02862,height:.06419,stemBottom:-.11027,stemTop:.01966,stemWidth:.00464,color:"#11bdc6"},{x:-.02621,y:-.02172,width:.02862,height:.06729,stemBottom:-.08784,stemTop:.04054,stemWidth:.00464,color:"#11bbcf"},{x:.02406,y:.01618,width:.02862,height:.06883,stemBottom:-.0484,stemTop:.0854,stemWidth:.00464,color:"#10bbcd"},{x:.07627,y:.05601,width:.02939,height:.0727,stemBottom:-.01746,stemTop:.11634,stemWidth:.00464,color:"#10bbcf"},{x:.12538,y:.12059,width:.02862,height:.06729,stemBottom:.05988,stemTop:.18517,stemWidth:.00464,color:"#0dc9bc"},{x:.16869,y:.07225,width:.02707,height:.05723,stemBottom:.01889,stemTop:.12639,stemWidth:.00464,color:"#13b9cf"}],Cd=[[[0,"#24e1bb"],[.11,"#17dbb5"],[.188,"#0ed9ae"],[.246,"#0ed9b1"],[.344,"#0ed8dd"],[.422,"#0bc5e8"],[.5,"#0ac2ea"],[.598,"#14cff2"],[.656,"#15c9ee"],[.754,"#16bcea"],[.832,"#12b2e9"],[.91,"#1294e4"],[1,"#0f77e6"]],[[0,"#20ddbb"],[.103,"#19dbb8"],[.182,"#10d6b2"],[.241,"#10d8b1"],[.339,"#0cb8c4"],[.417,"#10afcf"],[.496,"#0bb6dc"],[.594,"#15cff5"],[.653,"#15cbf3"],[.752,"#16bcee"],[.83,"#11abeb"],[.909,"#0e92e4"],[1,"#0f77e6"]],[[0,"#23d7ba"],[.092,"#18cbb3"],[.171,"#17aca6"],[.231,"#169499"],[.33,"#129eb0"],[.41,"#128fad"],[.49,"#1097c9"],[.589,"#14cdf8"],[.649,"#14c3f4"],[.748,"#16b5ed"],[.828,"#10a4e7"],[.908,"#0f91e8"],[1,"#0f77e6"]],[[0,"#159ea6"],[.075,"#1599a6"],[.156,"#14949f"],[.217,"#0f7c90"],[.318,"#0e899e"],[.4,"#0c95ae"],[.481,"#0e9bd0"],[.582,"#1097eb"],[.643,"#159eed"],[.744,"#159fea"],[.825,"#129ae8"],[.906,"#118ae7"],[1,"#0f77e6"]],[[0,"#1191aa"],[.053,"#1081a3"],[.136,"#0e7c9f"],[.198,"#0c688f"],[.302,"#0c638e"],[.385,"#0b6796"],[.468,"#1491cf"],[.572,"#0e8ae9"],[.634,"#0f86e9"],[.738,"#1187eb"],[.821,"#0f89eb"],[.904,"#1081e7"],[1,"#0f77e6"]],[[0,"#0d7fb7"],[.019,"#0d7fb7"],[.105,"#0a71a6"],[.169,"#0a689b"],[.277,"#0a6394"],[.363,"#09598c"],[.449,"#0a72b0"],[.556,"#0b7de3"],[.621,"#0f7ae7"],[.728,"#0e78e8"],[.814,"#0f78eb"],[.9,"#0f7bea"],[1,"#0f77e6"]]],Pd=[["#0893a8","#0c6688"],["#0fb6d5","#10cbbe"],["#0ba6d7","#10c9c3"],["#0da2d9","#0fcdbb"],["#0da5db","#12cdc0"],["#11bcce","#14d7b7"],["#0ea0df","#10c5c5"]];export{wd as C,Rd as E,Rn as P,Ad as R,Td as W,Qa as a,bd as b,Cd as c,Pd as d};
