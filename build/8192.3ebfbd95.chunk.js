"use strict";(self.webpackChunkplob_api=self.webpackChunkplob_api||[]).push([[8192],{8192:(N,D,_)=>{_.r(D),_.d(D,{AdminSeatInfoEE:()=>K});var E=_(92132),l=_(68074),t=_(30893),O=_(83997),i=_(79739),L=_(58805),A=_(21610),a=_(2129),C=_(68994),I=_(14595),v=_(54894),U=_(82437),B=_(46305),R=_(18567),c=_(21272),F=_(72810),G=_(18022),H=_(48940),z=_(2600),V=_(51187),X=_(15126),J=_(63299),Q=_(67014),Y=_(59080),Z=_(79275),$=_(14718),e=_(61535),p=_(5790),u=_(12083),k=_(35223),w=_(5409),b=_(74930),q=_(41286),__=_(56336),E_=_(13426),s_=_(84624),t_=_(77965),a_=_(54257),M_=_(71210),D_=_(39404),O_=_(58692),P_=_(501),n_=_(57646),o_=_(23120),d_=_(44414),l_=_(25962),i_=_(14664),L_=_(42588),A_=_(90325),C_=_(62785),I_=_(87443),v_=_(41032),U_=_(22957),B_=_(93179),R_=_(73055),T_=_(15747),W_=_(85306),K_=_(26509),m_=_(32058),h_=_(81185),r_=_(82261);const T="https://cloud.strapi.io/profile/billing",W="https://strapi.io/billing/request-seats",K=()=>{const{formatMessage:s}=(0,v.A)(),{settings:m}=(0,U.d4)(B.s),{isLoading:P,allowedActions:{canRead:h,canCreate:r,canUpdate:g,canDelete:f}}=(0,a.ec)(m?.users??{}),{license:n,isError:x,isLoading:j}=(0,R.m)({enabled:!P&&h&&r&&g&&f});if(x||(P||j)||!n)return null;const{licenseLimitStatus:S,enforcementUserCount:o,permittedSeats:M,isHostedOnStrapiCloud:d}=n;return M?(0,E.jsxs)(l.E,{col:6,s:12,children:[(0,E.jsx)(t.o,{variant:"sigma",textColor:"neutral600",children:s({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})}),(0,E.jsxs)(O.s,{gap:2,children:[(0,E.jsx)(O.s,{children:(0,E.jsx)(t.o,{as:"p",children:s({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:M,enforcementUserCount:o,text:y=>(0,E.jsx)(t.o,{fontWeight:"semiBold",textColor:o>M?"danger500":void 0,children:y})})})}),S==="OVER_LIMIT"&&(0,E.jsx)(i.m,{description:s({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),children:(0,E.jsx)(L.I,{width:(0,a.a8)(14),height:(0,a.a8)(14),color:"danger500",as:C.A})})]}),(0,E.jsx)(A.N,{href:d?T:W,isExternal:!0,endIcon:(0,E.jsx)(I.A,{}),children:s({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:d})})]}):null}}}]);
