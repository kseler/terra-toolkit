"use strict";(self.webpackChunkterra_toolkit=self.webpackChunkterra_toolkit||[]).push([[470],{22863:function(e,n,t){var a=t(64836);n.Z=void 0;var r=a(t(67294)),i=a(t(45697)),s=a(t(47166)),l=a(t(17422)),o=s.default.bind(l.default),d={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},c=function(e){var n=e.src,t=e.name,a=e.url,i=e.version,s=r.default.createElement("a",{className:o("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(i)},r.default.createElement("span",{className:o("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:o("badge-version")},"v".concat(i))),l=n?r.default.createElement("a",{className:o("badge"),href:n},r.default.createElement("span",{className:o("badge-name")},"github"),r.default.createElement("span",{className:o("badge-version")},"source")):void 0;return r.default.createElement("div",{className:o("badge-container")},s,l)};c.propTypes=d;var u=c;n.Z=u},74470:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=t(87462),r=t(44925),i=(t(67294),t(81254)),s=t(21514),l=["components"],o={};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(s.C,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"eslint-config-terra"},"Eslint Config Terra"),(0,i.mdx)("p",null,"This configuration reflects Terra's supported eslint policy for javascript."),(0,i.mdx)("p",null,"Features:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"extends the  ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb"},"eslint-config-airbnb"),", which exports ESLint rules, including rules for ECMAScript 6+ and React."),(0,i.mdx)("li",{parentName:"ul"},"checks for proper ReactJS Hooks usage via the ",(0,i.mdx)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-rules.html"},"eslint-plugin-react-hooks"),"."),(0,i.mdx)("li",{parentName:"ul"},"checks syntax for targeted browsers support via the ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/amilajack/eslint-plugin-compat"},"eslint-plugin-compat"),". It is recommended to use Terra's targeted browsers which are specified by the ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-toolkit/tree/main/packages/browserslist-config-terra"},"browserslist-config-terra")," module."),(0,i.mdx)("li",{parentName:"ul"},"defines the browser and jest environment"),(0,i.mdx)("li",{parentName:"ul"},"defines enzyme globals for ",(0,i.mdx)("inlineCode",{parentName:"li"},"shallow"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"render")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"mount")," for jest testing")),(0,i.mdx)("h2",{id:"what-is-eslint"},"What is Eslint"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://eslint.org/"},"ESlint")," is a pluggable linting utility for JavaScript and JSX."),(0,i.mdx)("h2",{id:"installation"},"Installation"),(0,i.mdx)("p",null,"Install the module"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},"npm install eslint --save-dev\nnpm install @cerner/eslint-config-terra --save-dev\n")),(0,i.mdx)("h2",{id:"usage"},"Usage"),(0,i.mdx)("p",null,"Include the configuration defined by ",(0,i.mdx)("inlineCode",{parentName:"p"},"@cerner/eslint-config-terra")," via the  ",(0,i.mdx)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring#extending-configuration-files"},"extends")," property."),(0,i.mdx)("p",null,"To lint based on supported browsers, add browserlist config as specified in the ",(0,i.mdx)("a",{parentName:"p",href:"dev_tools/cerner/browserslist-config-terra/upgrade-guide"},"browserlist config upgrade guide"),"."),(0,i.mdx)("h3",{id:"packagejson"},"package.json"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "eslintConfig": {\n    "extends": "@cerner/terra"\n  },\n}\n')))}d.isMDXComponent=!0},21514:function(e,n,t){t.d(n,{C:function(){return i}});var a=t(67294),r=t(22863),i=function(e){var n=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/eslint-config-terra",name:"@cerner/eslint-config-terra",version:"5.4.0",url:n})}},17422:function(e,n,t){t.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},87462:function(e,n,t){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,{Z:function(){return a}})},44925:function(e,n,t){function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})}}]);