/*! For license information please see 881.21d850ce.chunk.js.LICENSE.txt */
(self.webpackChunkspices=self.webpackChunkspices||[]).push([[881],{1881:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>W});var r=t(8139),a=t.n(r),n=t(5173),o=t.n(n),l=t(5043),i=t(579);const c={type:o().string,tooltip:o().bool,as:o().elementType},d=l.forwardRef(((e,s)=>{let{as:t="div",className:r,type:n="valid",tooltip:o=!1,...l}=e;return(0,i.jsx)(t,{...l,ref:s,className:a()(r,`${n}-${o?"tooltip":"feedback"}`)})}));d.displayName="Feedback",d.propTypes=c;const f=d,m=l.createContext({});var u=t(7852);const p=l.forwardRef(((e,s)=>{let{id:t,bsPrefix:r,className:n,type:o="checkbox",isValid:c=!1,isInvalid:d=!1,as:f="input",...p}=e;const{controlId:x}=(0,l.useContext)(m);return r=(0,u.oU)(r,"form-check-input"),(0,i.jsx)(f,{...p,ref:s,type:o,id:t||x,className:a()(n,r,c&&"is-valid",d&&"is-invalid")})}));p.displayName="FormCheckInput";const x=p,b=l.forwardRef(((e,s)=>{let{bsPrefix:t,className:r,htmlFor:n,...o}=e;const{controlId:c}=(0,l.useContext)(m);return t=(0,u.oU)(t,"form-check-label"),(0,i.jsx)("label",{...o,ref:s,htmlFor:n||c,className:a()(r,t)})}));b.displayName="FormCheckLabel";const h=b;const y=l.forwardRef(((e,s)=>{let{id:t,bsPrefix:r,bsSwitchPrefix:n,inline:o=!1,reverse:c=!1,disabled:d=!1,isValid:p=!1,isInvalid:b=!1,feedbackTooltip:y=!1,feedback:v,feedbackType:j,className:N,style:g,title:w="",type:k="checkbox",label:C,children:$,as:P="input",...I}=e;r=(0,u.oU)(r,"form-check"),n=(0,u.oU)(n,"form-switch");const{controlId:R}=(0,l.useContext)(m),F=(0,l.useMemo)((()=>({controlId:t||R})),[R,t]),A=!$&&null!=C&&!1!==C||function(e,s){return l.Children.toArray(e).some((e=>l.isValidElement(e)&&e.type===s))}($,h),O=(0,i.jsx)(x,{...I,type:"switch"===k?"checkbox":k,ref:s,isValid:p,isInvalid:b,disabled:d,as:P});return(0,i.jsx)(m.Provider,{value:F,children:(0,i.jsx)("div",{style:g,className:a()(N,A&&r,o&&`${r}-inline`,c&&`${r}-reverse`,"switch"===k&&n),children:$||(0,i.jsxs)(i.Fragment,{children:[O,A&&(0,i.jsx)(h,{title:w,children:C}),v&&(0,i.jsx)(f,{type:j,tooltip:y,children:v})]})})})}));y.displayName="FormCheck";const v=Object.assign(y,{Input:x,Label:h});t(6440);const j=l.forwardRef(((e,s)=>{let{bsPrefix:t,type:r,size:n,htmlSize:o,id:c,className:d,isValid:f=!1,isInvalid:p=!1,plaintext:x,readOnly:b,as:h="input",...y}=e;const{controlId:v}=(0,l.useContext)(m);return t=(0,u.oU)(t,"form-control"),(0,i.jsx)(h,{...y,type:r,size:o,ref:s,readOnly:b,id:c||v,className:a()(d,x?`${t}-plaintext`:t,n&&`${t}-${n}`,"color"===r&&`${t}-color`,f&&"is-valid",p&&"is-invalid")})}));j.displayName="FormControl";const N=Object.assign(j,{Feedback:f}),g=l.forwardRef(((e,s)=>{let{className:t,bsPrefix:r,as:n="div",...o}=e;return r=(0,u.oU)(r,"form-floating"),(0,i.jsx)(n,{ref:s,className:a()(t,r),...o})}));g.displayName="FormFloating";const w=g,k=l.forwardRef(((e,s)=>{let{controlId:t,as:r="div",...a}=e;const n=(0,l.useMemo)((()=>({controlId:t})),[t]);return(0,i.jsx)(m.Provider,{value:n,children:(0,i.jsx)(r,{...a,ref:s})})}));k.displayName="FormGroup";const C=k;var $=t(8602);const P=l.forwardRef(((e,s)=>{let{as:t="label",bsPrefix:r,column:n=!1,visuallyHidden:o=!1,className:c,htmlFor:d,...f}=e;const{controlId:p}=(0,l.useContext)(m);r=(0,u.oU)(r,"form-label");let x="col-form-label";"string"===typeof n&&(x=`${x} ${x}-${n}`);const b=a()(c,r,o&&"visually-hidden",n&&x);return d=d||p,n?(0,i.jsx)($.A,{ref:s,as:"label",className:b,htmlFor:d,...f}):(0,i.jsx)(t,{ref:s,className:b,htmlFor:d,...f})}));P.displayName="FormLabel";const I=P,R=l.forwardRef(((e,s)=>{let{bsPrefix:t,className:r,id:n,...o}=e;const{controlId:c}=(0,l.useContext)(m);return t=(0,u.oU)(t,"form-range"),(0,i.jsx)("input",{...o,type:"range",ref:s,className:a()(r,t),id:n||c})}));R.displayName="FormRange";const F=R,A=l.forwardRef(((e,s)=>{let{bsPrefix:t,size:r,htmlSize:n,className:o,isValid:c=!1,isInvalid:d=!1,id:f,...p}=e;const{controlId:x}=(0,l.useContext)(m);return t=(0,u.oU)(t,"form-select"),(0,i.jsx)("select",{...p,size:n,ref:s,className:a()(o,t,r&&`${t}-${r}`,c&&"is-valid",d&&"is-invalid"),id:f||x})}));A.displayName="FormSelect";const O=A,T=l.forwardRef(((e,s)=>{let{bsPrefix:t,className:r,as:n="small",muted:o,...l}=e;return t=(0,u.oU)(t,"form-text"),(0,i.jsx)(n,{...l,ref:s,className:a()(r,t,o&&"text-muted")})}));T.displayName="FormText";const S=T,U=l.forwardRef(((e,s)=>(0,i.jsx)(v,{...e,ref:s,type:"switch"})));U.displayName="Switch";const E=Object.assign(U,{Input:v.Input,Label:v.Label}),_=l.forwardRef(((e,s)=>{let{bsPrefix:t,className:r,children:n,controlId:o,label:l,...c}=e;return t=(0,u.oU)(t,"form-floating"),(0,i.jsxs)(C,{ref:s,className:a()(r,t),controlId:o,...c,children:[n,(0,i.jsx)("label",{htmlFor:o,children:l})]})}));_.displayName="FloatingLabel";const L=_,z={_ref:o().any,validated:o().bool,as:o().elementType},V=l.forwardRef(((e,s)=>{let{className:t,validated:r,as:n="form",...o}=e;return(0,i.jsx)(n,{...o,ref:s,className:a()(t,r&&"was-validated")})}));V.displayName="Form",V.propTypes=z;const q=Object.assign(V,{Group:C,Control:N,Floating:w,Check:v,Switch:E,Label:I,Text:S,Range:F,Select:O,FloatingLabel:L});var B=t(3519),D=t(1072),J=t(4140);const G=l.forwardRef(((e,s)=>{let{as:t,bsPrefix:r,variant:n="primary",size:o,active:l=!1,disabled:c=!1,className:d,...f}=e;const m=(0,u.oU)(r,"btn"),[p,{tagName:x}]=(0,J.Am)({tagName:t,disabled:c,...f}),b=x;return(0,i.jsx)(b,{...p,...f,ref:s,disabled:c,className:a()(d,m,l&&"active",n&&`${m}-${n}`,o&&`${m}-${o}`,f.href&&c&&"disabled")})}));G.displayName="Button";const M=G;function W(){return(0,i.jsxs)("section",{id:"contact",className:"block contact-block",children:[(0,i.jsxs)(B.A,{children:[(0,i.jsx)("div",{className:"CategoriesTitle text-center",children:(0,i.jsx)("h2",{children:"Get connected with us"})}),(0,i.jsx)(D.A,{children:(0,i.jsxs)(q,{className:"contact-form",action:"https://formspree.io/f/mqkkykzv",method:"POST",target:"_blank",children:[(0,i.jsxs)(D.A,{children:[(0,i.jsx)($.A,{sm:4,children:(0,i.jsx)(q.Control,{type:"text",placeholder:"Enter full name",required:!0})}),(0,i.jsx)($.A,{sm:4,children:(0,i.jsx)(q.Control,{type:"email",placeholder:"Enter your email",required:!0})}),(0,i.jsx)($.A,{sm:4,children:(0,i.jsx)(q.Control,{type:"tel",placeholder:"Enter your phone number",required:!0})})]}),(0,i.jsx)(D.A,{children:(0,i.jsx)($.A,{sm:12,children:(0,i.jsx)(q.Control,{as:"textarea",placeholder:"Enter Your Message",required:!0})})}),(0,i.jsx)("div",{className:"btn-holder",children:(0,i.jsx)(M,{className:"btn btn-primary",type:"submit",children:"Send"})})]})})]}),(0,i.jsx)("div",{className:"google-map container",children:(0,i.jsx)("iframe",{title:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433868.6382642167!2d35.61795912900614!3d31.83591881350622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2sAmman!5e0!3m2!1sen!2sjo!4v1720170146223!5m2!1sen!2sjo",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),(0,i.jsx)(B.A,{children:(0,i.jsx)(D.A,{children:(0,i.jsx)("div",{className:"contact-info",children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"bi bi-envelope-at-fill"}),"namegmail@gmail.com"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"bi bi-telephone-fill"}),"+000 111 777 0000"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"bi bi-geo-alt-fill"}),"Jordan, Amman"]})]})})})})]})}},4140:(e,s,t)=>{"use strict";t.d(s,{Am:()=>o,Ay:()=>i});var r=t(5043),a=t(579);const n=["as","disabled"];function o(e){let{tagName:s,disabled:t,href:r,target:a,rel:n,role:o,onClick:l,tabIndex:i=0,type:c}=e;s||(s=null!=r||null!=a||null!=n?"a":"button");const d={tagName:s};if("button"===s)return[{type:c||"button",disabled:t},d];const f=e=>{(t||"a"===s&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==l||l(e)};return"a"===s&&(r||(r="#"),t&&(r=void 0)),[{role:null!=o?o:"button",disabled:void 0,tabIndex:t?void 0:i,href:r,target:"a"===s?a:void 0,"aria-disabled":t||void 0,rel:"a"===s?n:void 0,onClick:f,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),f(e))}},d]}const l=r.forwardRef(((e,s)=>{let{as:t,disabled:r}=e,l=function(e,s){if(null==e)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(s.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,n);const[i,{tagName:c}]=o(Object.assign({tagName:t,disabled:r},l));return(0,a.jsx)(c,Object.assign({},l,i,{ref:s}))}));l.displayName="Button";const i=l},1497:(e,s,t)=>{"use strict";var r=t(3218);function a(){}function n(){}n.resetWarningCache=a,e.exports=function(){function e(e,s,t,a,n,o){if(o!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function s(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:n,resetWarningCache:a};return t.PropTypes=t,t}},5173:(e,s,t)=>{e.exports=t(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},8602:(e,s,t)=>{"use strict";t.d(s,{A:()=>c});var r=t(8139),a=t.n(r),n=t(5043),o=t(7852),l=t(579);const i=n.forwardRef(((e,s)=>{const[{className:t,...r},{as:n="div",bsPrefix:i,spans:c}]=function(e){let{as:s,bsPrefix:t,className:r,...n}=e;t=(0,o.oU)(t,"col");const l=(0,o.gy)(),i=(0,o.Jm)(),c=[],d=[];return l.forEach((e=>{const s=n[e];let r,a,o;delete n[e],"object"===typeof s&&null!=s?({span:r,offset:a,order:o}=s):r=s;const l=e!==i?`-${e}`:"";r&&c.push(!0===r?`${t}${l}`:`${t}${l}-${r}`),null!=o&&d.push(`order${l}-${o}`),null!=a&&d.push(`offset${l}-${a}`)})),[{...n,className:a()(r,...c,...d)},{as:s,bsPrefix:t,spans:c}]}(e);return(0,l.jsx)(n,{...r,ref:s,className:a()(t,!c.length&&i)})}));i.displayName="Col";const c=i},3519:(e,s,t)=>{"use strict";t.d(s,{A:()=>c});var r=t(8139),a=t.n(r),n=t(5043),o=t(7852),l=t(579);const i=n.forwardRef(((e,s)=>{let{bsPrefix:t,fluid:r=!1,as:n="div",className:i,...c}=e;const d=(0,o.oU)(t,"container"),f="string"===typeof r?`-${r}`:"-fluid";return(0,l.jsx)(n,{ref:s,...c,className:a()(i,r?`${d}${f}`:d)})}));i.displayName="Container";const c=i},1072:(e,s,t)=>{"use strict";t.d(s,{A:()=>c});var r=t(8139),a=t.n(r),n=t(5043),o=t(7852),l=t(579);const i=n.forwardRef(((e,s)=>{let{bsPrefix:t,className:r,as:n="div",...i}=e;const c=(0,o.oU)(t,"row"),d=(0,o.gy)(),f=(0,o.Jm)(),m=`${c}-cols`,u=[];return d.forEach((e=>{const s=i[e];let t;delete i[e],null!=s&&"object"===typeof s?({cols:t}=s):t=s;const r=e!==f?`-${e}`:"";null!=t&&u.push(`${m}${r}-${t}`)})),(0,l.jsx)(n,{ref:s,...i,className:a()(r,c,...u)})}));i.displayName="Row";const c=i},7852:(e,s,t)=>{"use strict";t.d(s,{Jm:()=>f,gy:()=>d,oU:()=>c});var r=t(5043);t(579);const a=["xxl","xl","lg","md","sm","xs"],n="xs",o=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:n}),{Consumer:l,Provider:i}=o;function c(e,s){const{prefixes:t}=(0,r.useContext)(o);return e||t[s]||s}function d(){const{breakpoints:e}=(0,r.useContext)(o);return e}function f(){const{minBreakpoint:e}=(0,r.useContext)(o);return e}},6440:e=>{"use strict";var s=function(){};e.exports=s},8139:(e,s)=>{var t;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",s=0;s<arguments.length;s++){var t=arguments[s];t&&(e=o(e,n(t)))}return e}function n(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var t in e)r.call(e,t)&&e[t]&&(s=o(s,t));return s}function o(e,s){return s?e?e+" "+s:e+s:e}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(s,[]))||(e.exports=t)}()}}]);
//# sourceMappingURL=881.21d850ce.chunk.js.map