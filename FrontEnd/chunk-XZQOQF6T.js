import{k as c}from"./chunk-V35GW63T.js";import{a as m}from"./chunk-HADAFI3S.js";import{Eb as x,Fb as v,Gb as o,Qa as p,Vb as h,gb as f,ib as b,ma as l,mb as w,pb as s,tb as n,ub as d,va as u}from"./chunk-YBEOGPR3.js";var C=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],y=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];function k(e,a){e&1&&(n(0,"div",0),o(1),d(),n(2,"div",1),o(3,1),d())}function _(e,a){e&1&&(n(0,"div",2),o(1,3),d()),e&2&&b("@expandCollapse",void 0)}function F(e,a){if(e&1&&(o(0,2),f(1,_,2,1,"div",2)),e&2){let g=x();p(),s(g.expanded?1:-1)}}var S=(()=>{let a=class a{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&this.face==="back","fuse-card-face-front":this.flippable&&this.face==="front","fuse-card-flippable":this.flippable}}ngOnChanges(t){"expanded"in t&&(this.expanded=c(t.expanded.currentValue)),"flippable"in t&&(this.flippable=c(t.flippable.currentValue))}};a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=l({type:a,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(i,r){i&2&&w(r.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],standalone:!0,features:[u,h],ngContentSelectors:y,decls:2,vars:2,consts:[[1,"fuse-card-front"],[1,"fuse-card-back"],[1,"fuse-card-expansion"]],template:function(i,r){i&1&&(v(C),f(0,k,4,0)(1,F,2,1)),i&2&&(s(r.flippable?0:-1),p(),s(r.flippable?-1:1))},styles:[`fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}
`],encapsulation:2,data:{animation:m}});let e=a;return e})();export{S as a};
