"use strict";(self.webpackChunkplob_api=self.webpackChunkplob_api||[]).push([[1642],{61642:(N,c,s)=>{s.d(c,{ProtectedEditPage:()=>ts});var a=s(92132),e=s(21272),m=s(38413),P=s(55356),i=s(85963),D=s(4198),g=s(94061),A=s(83997),O=s(30893),h=s(90151),L=s(68074),U=s(21610),t=s(2129),I=s(54514),T=s(46270),R=s(61535),r=s(79275),_=s(54894),d=s(17703),p=s(71389),v=s(12083),l=s(18567),n=s(46305),W=s(59579),Y=s(97146),Z=s(15126),X=s(63299),E=s(67014),ds=s(59080),ls=s(14718),Es=s(82437),Ms=s(5790),ms=s(35223),Ps=s(5409),Ds=s(74930),Os=s(2600),cs=s(48940),gs=s(41286),As=s(56336),hs=s(13426),Ls=s(84624),vs=s(77965),fs=s(54257),Cs=s(71210),Us=s(51187),Is=s(39404),ps=s(58692),us=s(501),Bs=s(57646),Ts=s(23120),Rs=s(44414),Ws=s(25962),Ks=s(14664),xs=s(42588),js=s(90325),ys=s(62785),Ss=s(87443),zs=s(41032),Ns=s(22957),Ys=s(93179),Fs=s(73055),Vs=s(15747),$s=s(85306),Qs=s(26509),Gs=s(32058),Hs=s(81185),Js=s(82261),Zs=s(72810),Xs=s(18022),bs=s(76302);const q=v.Ik().shape({...Y.C,isActive:v.lc(),roles:v.YO().min(1,t.iW.required).required(t.iW.required)}),b=["email","firstname","lastname","username","isActive","roles"],ss=()=>{const{formatMessage:o}=(0,_.A)(),u=(0,d.W5)("/settings/users/:id")?.params?.id??"",{push:B}=(0,d.W6)(),M=(0,t.hN)(),{lockApp:V,unlockApp:$}=(0,t.MA)(),w=(0,l.p)(W.M,async()=>(await s.e(955).then(s.bind(s,90955))).MagicLinkEE),{_unstableFormatAPIError:Q,_unstableFormatValidationErrors:es}=(0,t.wq)(),k=(0,l.j)(n.s),{isLoading:os,allowedActions:{canUpdate:G}}=(0,t.ec)({read:k.settings?.users.read??[],update:k.settings?.users.update??[]}),[ns]=(0,l.M)();(0,t.L4)();const{data:is,error:y,isLoading:rs}=(0,l.k)({id:u},{refetchOnMountOrArgChange:!0}),[S]=is?.users??[];if(e.useEffect(()=>{y&&(y.name==="UnauthorizedError"?(M({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),B("/")):M({type:"warning",message:{id:"notification.error",defaultMessage:Q(y)}}))},[y,Q,B,M]),rs||!w||os)return(0,a.jsxs)(m.g,{"aria-busy":"true",children:[(0,a.jsx)(t.x7,{name:"Users"}),(0,a.jsx)(P.Q,{primaryAction:(0,a.jsx)(i.$,{disabled:!0,startIcon:(0,a.jsx)(I.A,{}),type:"button",size:"L",children:o({id:"global.save",defaultMessage:"Save"})}),title:o({id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}),navigationAction:(0,a.jsx)(U.N,{as:p.k2,startIcon:(0,a.jsx)(T.A,{}),to:"/settings/users?pageSize=10&page=1&sort=firstname",children:o({id:"global.back",defaultMessage:"Back"})})}),(0,a.jsx)(D.s,{children:(0,a.jsx)(t.Bl,{})})]});const z={...r(S,b),roles:S.roles.map(({id:f})=>f),password:"",confirmPassword:""},_s=async(f,K)=>{V?.();const{confirmPassword:H,password:x,...J}=f,C=await ns({id:u,...J,password:x===""?void 0:x});"error"in C&&(0,l.x)(C.error)?(C.error.name==="ValidationError"&&K.setErrors(es(C.error)),M({type:"warning",message:Q(C.error)})):(M({type:"success",message:o({id:"notification.success.saved",defaultMessage:"Saved"})}),K.setValues({...r(f,b),password:"",confirmPassword:""})),$?.()};return(0,a.jsxs)(m.g,{children:[(0,a.jsx)(t.x7,{name:"Users"}),(0,a.jsx)(R.l1,{onSubmit:_s,initialValues:z,validateOnChange:!1,validationSchema:q,children:({errors:f,values:K,handleChange:H,isSubmitting:x,dirty:J})=>(0,a.jsxs)(t.lV,{children:[(0,a.jsx)(P.Q,{primaryAction:(0,a.jsx)(i.$,{disabled:x||!G?!0:!J,startIcon:(0,a.jsx)(I.A,{}),loading:x,type:"submit",size:"L",children:o({id:"global.save",defaultMessage:"Save"})}),title:o({id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},{name:z.username||(0,n.g)(z?.firstname??"",z.lastname)}),navigationAction:(0,a.jsx)(U.N,{as:p.k2,startIcon:(0,a.jsx)(T.A,{}),to:"/settings/users?pageSize=10&page=1&sort=firstname",children:o({id:"global.back",defaultMessage:"Back"})})}),(0,a.jsxs)(D.s,{children:[S?.registrationToken&&(0,a.jsx)(g.a,{paddingBottom:6,children:(0,a.jsx)(w,{registrationToken:S.registrationToken})}),(0,a.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:7,children:[(0,a.jsx)(g.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,a.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,a.jsx)(O.o,{variant:"delta",as:"h2",children:o({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})}),(0,a.jsx)(h.x,{gap:5,children:as.map(C=>C.map(j=>(0,a.jsx)(L.E,{...j.size,children:(0,a.jsx)(t.ah,{...j,disabled:!G,error:f[j.name],onChange:H,value:K[j.name]})},j.name)))})]})}),(0,a.jsx)(g.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,a.jsxs)(A.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,a.jsx)(O.o,{variant:"delta",as:"h2",children:o({id:"global.roles",defaultMessage:"User's role"})}),(0,a.jsx)(h.x,{gap:5,children:(0,a.jsx)(L.E,{col:6,xs:12,children:(0,a.jsx)(W.S,{disabled:!G,error:f.roles,onChange:H,value:K.roles})})})]})})]})]})]})})]})},as=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]],ts=()=>{const o=(0,t.hN)(),F=(0,l.j)(n.s),{isLoading:u,allowedActions:{canRead:B,canUpdate:M}}=(0,t.ec)({read:F.settings?.users.read??[],update:F.settings?.users.update??[]}),{state:V}=(0,d.zy)(),$=V?.from??"/";return e.useEffect(()=>{u||!B&&!M&&o({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[u,B,M,o]),u?(0,a.jsx)(t.Bl,{}):!B&&!M?(0,a.jsx)(d.rd,{to:$}):(0,a.jsx)(ss,{})}},59579:(N,c,s)=>{s.d(c,{M:()=>U,S:()=>t,a:()=>L});var a=s(92132),e=s(54894),m=s(18567),P=s(88353),i=s(56654),D=s(2129),g=s(90625),A=s(84795),O=s(79793),h=s(76302);const L=({children:r,target:_})=>{const d=(0,D.hN)(),{formatMessage:p}=(0,e.A)(),{copy:v}=(0,D.iD)(),l=p({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),n=async()=>{await v(_)&&d({type:"info",message:{id:"notification.link-copied"}})};return(0,a.jsx)(D.bQ,{endAction:(0,a.jsx)(P.K,{label:l,noBorder:!0,icon:(0,a.jsx)(g.A,{}),onClick:n}),title:_,titleEllipsis:!0,subtitle:r,icon:(0,a.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})},U=({registrationToken:r})=>{const{formatMessage:_}=(0,e.A)(),d=`${window.location.origin}${(0,m.K)()}/auth/register?registrationToken=${r}`;return(0,a.jsx)(L,{target:d,children:_({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})},t=({disabled:r,error:_,onChange:d,value:p})=>{const{isLoading:v,roles:l}=(0,h.u)(),{formatMessage:n}=(0,e.A)(),W=_?n({id:_,defaultMessage:_}):"",Y=n({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),Z=n({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),X=n({id:"app.components.Select.placeholder",defaultMessage:"Select"});return(0,a.jsx)(i.KF,{id:"roles",disabled:r,error:W,hint:Z,label:Y,name:"roles",onChange:E=>{d({target:{name:"roles",value:E}})},placeholder:X,startIcon:v?(0,a.jsx)(R,{}):void 0,value:p.map(E=>E.toString()),withTags:!0,required:!0,children:l.map(E=>(0,a.jsx)(i.fe,{value:E.id.toString(),children:n({id:`global.${E.code}`,defaultMessage:E.name})},E.id))})},I=(0,O.i7)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,T=O.Ay.div`
  animation: ${I} 2s infinite linear;
`,R=()=>(0,a.jsx)(T,{children:(0,a.jsx)(A.A,{})})},76302:(N,c,s)=>{s.d(c,{u:()=>i});var a=s(21272),e=s(2129),m=s(54894),P=s(18567);const i=(D={},g)=>{const{locale:A}=(0,m.A)(),O=(0,e.QM)(A,{sensitivity:"base"}),{data:h,error:L,isError:U,isLoading:t,refetch:I}=(0,P.z)(D,g);return{roles:a.useMemo(()=>[...h??[]].sort((R,r)=>O.compare(R.name,r.name)),[h,O]),error:L,isError:U,isLoading:t,refetch:I}}},97146:(N,c,s)=>{s.d(c,{C:()=>m});var a=s(2129),e=s(12083);const m={firstname:e.Yj().trim().required(a.iW.required),lastname:e.Yj(),email:e.Yj().email(a.iW.email).lowercase().required(a.iW.required),username:e.Yj().nullable(),password:e.Yj().min(8,a.iW.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Yj().min(8,a.iW.minLength).oneOf([e.KR("password"),null],"components.Input.error.password.noMatch").when("password",(P,i)=>P?i.required(a.iW.required):i)}}}]);
