import{a as Ie}from"./chunk-VGYH6GAK.js";import{a as Ae}from"./chunk-T2JYV3CV.js";import{g as le,h as Fe}from"./chunk-PH3VIMM7.js";import"./chunk-ZWQDSRGM.js";import{b as Me}from"./chunk-RUXS4FGL.js";import{a as be,b as Ee}from"./chunk-PJZ7DH6Y.js";import{a as Ue}from"./chunk-FJXBOPPW.js";import{A as Ce,B as Se,C as xe,F as ye,G as we,a as Z,b as ee,d as te,h as ie,i as oe,l as ue,n as v,p as fe,q as ge,u as he,w as ve,x as _e}from"./chunk-72YUQRCJ.js";import{$ as re,U as X,Z as ne,aa as ae,ca as me,da as se}from"./chunk-E54QLSYT.js";import{p as de}from"./chunk-7HDWK74Y.js";import{b as ce}from"./chunk-2CM6JBNE.js";import{b as pe}from"./chunk-YW3XMNKD.js";import{e as z,f as H,h as Y,p as J,y as K,z as W}from"./chunk-6D7RVOMY.js";import{Cb as o,Db as i,Eb as p,Fb as D,Gb as k,Ib as V,Ob as w,Qb as j,Ub as q,Vb as B,Wb as R,Xb as _,Yb as a,Z as M,Za as n,Zb as L,_a as y,_b as O,ba as A,bc as P,cc as $,ga as b,ha as C,jc as G,ka as I,kc as Q,pb as h,rb as m,ua as S,va as x,wa as T,xa as N,yb as d}from"./chunk-T2GNEYCX.js";import{a as F,d as U}from"./chunk-NEB6MB4Y.js";var Te=(()=>{let t=class t{constructor(s,r){this._http=s,this.appSettings=r}getTiposDocumentos(){return this._http.get(this.appSettings.tiposDocumentos.url.base)}postDocumentos(s){return delete s.id,this._http.post(this.appSettings.tiposDocumentos.url.base,s)}putDocumentos(s){let r=s.id;return delete s.id,this._http.put(`${this.appSettings.tiposDocumentos.url.base}/${r}`,s)}};t.\u0275fac=function(r){return new(r||t)(b(J),b(pe))},t.\u0275prov=A({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var ke=["signUpNgForm"],Ve=()=>["/sign-in"];function je(e,t){if(e&1&&(o(0,"fuse-alert",9),a(1),i()),e&2){let u=j();m("appearance","outline")("showIcon",!1)("type",u.alert.type)("@shake",u.alert.type==="error"),n(),O(" ",u.alert.message," ")}}function qe(e,t){if(e&1&&(o(0,"mat-option",37),a(1),i()),e&2){let u=t.$implicit;m("value",u.id),n(),L(u.nombre)}}function Be(e,t){if(e&1&&(D(0),h(1,qe,2,2,"mat-option",36),k()),e&2){let u=t.ngIf;n(),m("ngForOf",u.data)}}function Re(e,t){e&1&&(o(0,"mat-error"),a(1,"N\xFAmero de documento es requerido! "),i())}function Le(e,t){e&1&&(o(0,"mat-error"),a(1," Correo es requerido! "),i())}function Oe(e,t){e&1&&(o(0,"mat-error"),a(1," Por favor ingresa un email valido! "),i())}function Pe(e,t){e&1&&p(0,"mat-icon",18),e&2&&m("svgIcon","heroicons_solid:eye")}function $e(e,t){e&1&&p(0,"mat-icon",18),e&2&&m("svgIcon","heroicons_solid:eye-slash")}function Ge(e,t){e&1&&p(0,"mat-icon",18),e&2&&m("svgIcon","heroicons_solid:eye")}function Qe(e,t){e&1&&p(0,"mat-icon",18),e&2&&m("svgIcon","heroicons_solid:eye-slash")}function ze(e,t){e&1&&(o(0,"mat-error"),a(1,"Confirmar contrase\xF1a es requerida! "),i())}function He(e,t){e&1&&(o(0,"mat-error"),a(1," Las contrase\xF1as no coinciden! "),i())}function Ye(e,t){e&1&&(o(0,"span"),a(1," Crear cuenta "),i())}function Je(e,t){e&1&&p(0,"mat-progress-spinner",21),e&2&&m("diameter",24)("mode","indeterminate")}var Ne=(()=>{let t=class t{constructor(s,r,l){this._authService=s,this._formBuilder=r,this._router=l,this.tiposDocumentosService=C(Te),this.swalService=C(Fe),this.fuseService=C(le),this.tiposDocumentos$=this.tiposDocumentosService.getTiposDocumentos().pipe(M(c=>{let f=c.data;f&&this.signUpForm.get("idTipoDoc").setValue(f[3].id)})),this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signUpForm=this._formBuilder.group({idTipoDoc:[""],numDoc:["",v.required],correo:["",[v.required,v.email]],contrasena:["",v.required],confirmaContrasena:["",v.required]},{validators:Ke("contrasena","confirmaContrasena")})}signUp(){if(this.signUpForm.invalid)return;this.signUpForm.disable(),this.showAlert=!1,this.fuseService.open(F({},Ie)).afterClosed().subscribe(r=>{let g=this.signUpForm.getRawValue(),{confirmaContrasena:l}=g,c=U(g,["confirmaContrasena"]),f=F({},c);r==="confirmed"&&this._authService.signUp(f).subscribe(E=>{this.swalService.ToastAler({icon:"success",title:"Registro creado con exito!",timer:4e3}),setTimeout(()=>{this._router.navigateByUrl("/sign-in")},2e3)},E=>{this.signUpForm.enable(),this.alert={type:"error",message:E.error.errorMenssages[0]},this.showAlert=!0})})}};t.\u0275fac=function(r){return new(r||t)(y(ce),y(Ce),y(K))},t.\u0275cmp=I({type:t,selectors:[["auth-sign-up"]],viewQuery:function(r,l){if(r&1&&q(ke,5),r&2){let c;B(c=R())&&(l.signUpNgForm=c.first)}},standalone:!0,features:[P],decls:71,vars:25,consts:[["signUpNgForm","ngForm"],["passwordField",""],["passwordConfirm",""],[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:flex-row","sm:justify-center","md:items-start","md:justify-start"],[1,"w-full","px-4","py-8","sm:bg-card","sm:w-auto","sm:rounded-2xl","sm:p-12","sm:shadow","md:flex","md:h-full","md:w-1/2","md:items-center","md:justify-end","md:rounded-none","md:p-16","md:shadow-none"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"w-4/5"],["src","images/logo/logo-azul.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"mt-8",3,"formGroup"],["floatLabel","always",1,"w-full"],["placeholder","Tipo de documento",3,"formControlName"],[4,"ngIf"],["id","numDoc","matInput","","placeholder","N\xFAmero de documento",3,"formControlName"],["id","email","matInput","","placeholder","Correo electronico",3,"formControlName"],["id","contrasena","matInput","","type","password","placeholder","Contrase\xF1a",3,"formControlName"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["id","confirmaContrasena","matInput","","type","password","placeholder","Confirmar contrase\xF1a",3,"formControlName"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","w-full","bg-crediblue-50","text-white","font-semibold","rounded-lg",3,"click","color","disabled"],[3,"diameter","mode"],[1,"mt-2","flex","flex-col","font-medium"],[1,"text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","h-full","w-1/2","flex-auto","items-center","justify-center","overflow-hidden","bg-gray-800","p-16","dark:border-l","md:flex","lg:px-28"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(r,l){if(r&1){let c=V();o(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6),p(4,"img",7),i(),o(5,"div",8),a(6," Registro de usuario "),i(),h(7,je,2,5,"fuse-alert",9),o(8,"form",10,0)(10,"mat-form-field",11)(11,"mat-label"),a(12,"Tipo de documento"),i(),o(13,"mat-select",12),h(14,Be,2,1,"ng-container",13),G(15,"async"),i()(),o(16,"mat-form-field",11)(17,"mat-label"),a(18,"N\xFAmero de documento"),i(),p(19,"input",14),h(20,Re,2,0,"mat-error"),i(),o(21,"mat-form-field",11)(22,"mat-label"),a(23,"Correo electronico"),i(),p(24,"input",15),h(25,Le,2,0,"mat-error")(26,Oe,2,0,"mat-error"),i(),o(27,"mat-form-field",11)(28,"mat-label"),a(29,"Contrase\xF1a"),i(),p(30,"input",16,1),o(32,"button",17),w("click",function(){S(c);let g=_(31);return x(g.type==="password"?g.type="text":g.type="password")}),h(33,Pe,1,1,"mat-icon",18)(34,$e,1,1,"mat-icon",18),i(),o(35,"mat-error"),a(36," Contrase\xF1a es requerida! "),i()(),o(37,"mat-form-field",11)(38,"mat-label"),a(39,"Confirmar contrase\xF1a"),i(),p(40,"input",19,2),o(42,"button",17),w("click",function(){S(c);let g=_(41);return x(g.type==="password"?g.type="text":g.type="password")}),h(43,Ge,1,1,"mat-icon",18)(44,Qe,1,1,"mat-icon",18),i(),h(45,ze,2,0,"mat-error")(46,He,2,0,"mat-error"),i(),o(47,"button",20),w("click",function(){return S(c),x(l.signUp())}),h(48,Ye,2,0,"span")(49,Je,1,2,"mat-progress-spinner",21),i(),o(50,"div",22)(51,"div"),a(52,"Tienes cuenta de usuario?"),i(),o(53,"a",23),a(54,"Iniciar sesi\xF3n "),i()()()()(),o(55,"div",24),T(),o(56,"svg",25)(57,"g",26),p(58,"circle",27)(59,"circle",28),i()(),o(60,"svg",29)(61,"defs")(62,"pattern",30),p(63,"rect",31),i()(),p(64,"rect",32),i(),N(),o(65,"div",33)(66,"div",34)(67,"div"),a(68,"CrediPlus - Trabajador"),i()(),o(69,"div",35),a(70," Plataforma para gestionar pr\xE9stamos a colaboradores de manera eficiente y segura. Registrate y accede las opciones que tenemos para ti. "),i()()()()}if(r&2){let c=_(31),f=_(41);n(7),d(l.showAlert?7:-1),n(),m("formGroup",l.signUpForm),n(5),m("formControlName","idTipoDoc"),n(),m("ngIf",Q(15,22,l.tiposDocumentos$)),n(5),m("formControlName","numDoc"),n(),d(l.signUpForm.get("numDoc").hasError("required")?20:-1),n(4),m("formControlName","correo"),n(),d(l.signUpForm.get("correo").hasError("required")?25:-1),n(),d(l.signUpForm.get("correo").hasError("email")?26:-1),n(4),m("formControlName","contrasena"),n(3),d(c.type==="password"?33:-1),n(),d(c.type==="text"?34:-1),n(6),m("formControlName","confirmaContrasena"),n(3),d(f.type==="password"?43:-1),n(),d(f.type==="text"?44:-1),n(),d(l.signUpForm.get("confirmaContrasena").hasError("required")?45:-1),n(),d(l.signUpForm.get("confirmaContrasena").hasError("passwordMismatchError")?46:-1),n(),m("color","primary")("disabled",l.signUpForm.disabled),n(),d(l.signUpForm.disabled?-1:48),n(),d(l.signUpForm.disabled?49:-1),n(4),m("routerLink",$(24,Ve))}},dependencies:[W,Ue,Se,he,ue,fe,ge,xe,ve,_e,oe,ie,Z,ee,te,we,ye,ae,ne,re,se,me,Me,Ee,be,Ae,X,Y,z,H],encapsulation:2,data:{animation:de}});let e=t;return e})();function Ke(e,t){return u=>{let s=u.get(e),r=u.get(t);return r?.errors&&!r.errors.passwordMismatchError||(s?.value!==r?.value?r?.setErrors({passwordMismatchError:!0}):r?.setErrors(null)),null}}var Nt=[{path:"",component:Ne}];export{Nt as default};
