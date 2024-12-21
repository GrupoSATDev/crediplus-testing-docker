import{a as se,b as ae}from"./chunk-MH26QXBG.js";import{D as te,E as ie,F as re,J as oe,K as ne,b as B,c as q,e as L,i as z,j as D,l as W,n as b,p as K,q as X,u as Z,x as $,y as ee}from"./chunk-NFNLINIV.js";import{b as H}from"./chunk-OYCDUR3V.js";import{e as N}from"./chunk-V24ZDQ6I.js";import{a as me}from"./chunk-JLSTUWCW.js";import"./chunk-HR6HUVTD.js";import{ga as G,ia as Q,ja as U,la as O,ma as Y}from"./chunk-IP22JCCO.js";import{a as J}from"./chunk-QS2H5WYQ.js";import"./chunk-VFBDOJ4Z.js";import"./chunk-J6S3X3IJ.js";import{Cb as v,Eb as A,Ib as R,Jb as I,Kb as k,Lb as h,M as P,Mb as s,Ob as V,Qa as n,Ra as C,Wb as j,Xb as T,gb as f,ib as d,ma as F,pb as c,tb as i,ub as t,vb as a,wa as y,xa as x,ya as S,za as M,zb as E}from"./chunk-VNCXNJPE.js";import"./chunk-NEB6MB4Y.js";var _=class{static isEmptyInputValue(r){return r==null||r.length===0}static mustMatch(r,w){return p=>{let m=p.get(r),o=p.get(w);if(!m||!o||(o.hasError("mustMatch")&&(delete o.errors.mustMatch,o.updateValueAndValidity()),this.isEmptyInputValue(o.value)||m.value===o.value))return null;let l={mustMatch:!0};return o.setErrors(l),l}}};var de=["resetPasswordNgForm"],ce=()=>["/sign-in"];function pe(e,r){if(e&1&&(i(0,"fuse-alert",10),s(1),t()),e&2){let w=A();d("appearance","outline")("showIcon",!1)("type",w.alert.type)("@shake",w.alert.type==="error"),n(),V(" ",w.alert.message," ")}}function ue(e,r){e&1&&a(0,"mat-icon",15),e&2&&d("svgIcon","heroicons_solid:eye")}function fe(e,r){e&1&&a(0,"mat-icon",15),e&2&&d("svgIcon","heroicons_solid:eye-slash")}function we(e,r){e&1&&a(0,"mat-icon",15),e&2&&d("svgIcon","heroicons_solid:eye")}function ge(e,r){e&1&&a(0,"mat-icon",15),e&2&&d("svgIcon","heroicons_solid:eye-slash")}function he(e,r){e&1&&(i(0,"mat-error"),s(1," Password confirmation is required "),t())}function ye(e,r){e&1&&(i(0,"mat-error"),s(1," Passwords must match "),t())}function xe(e,r){e&1&&(i(0,"span"),s(1," Reset your password "),t())}function ve(e,r){e&1&&a(0,"mat-progress-spinner",18),e&2&&d("diameter",24)("mode","indeterminate")}var le=(()=>{let r=class r{constructor(p,m){this._authService=p,this._formBuilder=m,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.resetPasswordForm=this._formBuilder.group({password:["",b.required],passwordConfirm:["",b.required]},{validators:_.mustMatch("password","passwordConfirm")})}resetPassword(){this.resetPasswordForm.invalid||(this.resetPasswordForm.disable(),this.showAlert=!1,this._authService.resetPassword(this.resetPasswordForm.get("password").value).pipe(P(()=>{this.resetPasswordForm.enable(),this.resetPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(p=>{this.alert={type:"success",message:"Your password has been reset."}},p=>{this.alert={type:"error",message:"Something went wrong, please try again."}}))}};r.\u0275fac=function(m){return new(m||r)(C(H),C(te))},r.\u0275cmp=F({type:r,selectors:[["auth-reset-password"]],viewQuery:function(m,o){if(m&1&&R(de,5),m&2){let l;I(l=k())&&(o.resetPasswordNgForm=l.first)}},standalone:!0,features:[j],decls:66,vars:16,consts:[["resetPasswordNgForm","ngForm"],["passwordField",""],["passwordConfirmField",""],[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:flex-row","sm:justify-center","md:items-start","md:justify-start"],[1,"w-full","px-4","py-8","sm:bg-card","sm:w-auto","sm:rounded-2xl","sm:p-12","sm:shadow","md:flex","md:h-full","md:w-1/2","md:items-center","md:justify-end","md:rounded-none","md:p-16","md:shadow-none"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"w-12"],["src","images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-0.5","font-medium"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","password","matInput","","type","password",3,"formControlName"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["id","password-confirm","matInput","","type","password",3,"formControlName"],["mat-flat-button","",1,"fuse-mat-button-large","mt-3","w-full",3,"click","color","disabled"],[3,"diameter","mode"],[1,"text-secondary","mt-8","text-md","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","h-full","w-1/2","flex-auto","items-center","justify-center","overflow-hidden","bg-gray-800","p-16","dark:border-l","md:flex","lg:px-28"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"],[1,"mt-8","flex","items-center"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","images/avatars/female-18.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/female-11.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/male-09.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/male-16.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"]],template:function(m,o){if(m&1){let l=E();i(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),a(4,"img",7),t(),i(5,"div",8),s(6," Reset your password "),t(),i(7,"div",9),s(8," Create a new password for your account "),t(),f(9,pe,2,5,"fuse-alert",10),i(10,"form",11,0)(12,"mat-form-field",12)(13,"mat-label"),s(14,"Password"),t(),a(15,"input",13,1),i(17,"button",14),v("click",function(){y(l);let u=h(16);return x(u.type==="password"?u.type="text":u.type="password")}),f(18,ue,1,1,"mat-icon",15)(19,fe,1,1,"mat-icon",15),t(),i(20,"mat-error"),s(21," Password is required "),t()(),i(22,"mat-form-field",12)(23,"mat-label"),s(24,"Password (Confirm)"),t(),a(25,"input",16,2),i(27,"button",14),v("click",function(){y(l);let u=h(26);return x(u.type==="password"?u.type="text":u.type="password")}),f(28,we,1,1,"mat-icon",15)(29,ge,1,1,"mat-icon",15),t(),f(30,he,2,0,"mat-error")(31,ye,2,0,"mat-error"),t(),i(32,"button",17),v("click",function(){return y(l),x(o.resetPassword())}),f(33,xe,2,0,"span")(34,ve,1,2,"mat-progress-spinner",18),t(),i(35,"div",19)(36,"span"),s(37,"Return to"),t(),i(38,"a",20),s(39,"sign in "),t()()()()(),i(40,"div",21),S(),i(41,"svg",22)(42,"g",23),a(43,"circle",24)(44,"circle",25),t()(),i(45,"svg",26)(46,"defs")(47,"pattern",27),a(48,"rect",28),t()(),a(49,"rect",29),t(),M(),i(50,"div",30)(51,"div",31)(52,"div"),s(53,"Welcome to"),t(),i(54,"div"),s(55,"our community"),t()(),i(56,"div",32),s(57," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),t(),i(58,"div",33)(59,"div",34),a(60,"img",35)(61,"img",36)(62,"img",37)(63,"img",38),t(),i(64,"div",39),s(65," More than 17k people joined us, it's your turn "),t()()()()()}if(m&2){let l=h(16),g=h(26);n(9),c(o.showAlert?9:-1),n(),d("formGroup",o.resetPasswordForm),n(5),d("formControlName","password"),n(3),c(l.type==="password"?18:-1),n(),c(l.type==="text"?19:-1),n(6),d("formControlName","passwordConfirm"),n(3),c(g.type==="password"?28:-1),n(),c(g.type==="text"?29:-1),n(),c(o.resetPasswordForm.get("passwordConfirm").hasError("required")?30:-1),n(),c(o.resetPasswordForm.get("passwordConfirm").hasError("mustMatch")?31:-1),n(),d("color","primary")("disabled",o.resetPasswordForm.disabled),n(),c(o.resetPasswordForm.disabled?-1:33),n(),c(o.resetPasswordForm.disabled?34:-1),n(4),d("routerLink",T(15,ce))}},dependencies:[me,ie,Z,W,K,X,re,$,ee,D,z,B,q,L,ne,oe,U,G,Q,Y,O,ae,se,N],encapsulation:2,data:{animation:J}});let e=r;return e})();var He=[{path:"",component:le}];export{He as default};
