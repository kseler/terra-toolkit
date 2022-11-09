"use strict";(self.webpackChunkterra_toolkit=self.webpackChunkterra_toolkit||[]).push([[1],{40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),l=c(n(45697)),a=c(n(47166)),o=c(n(50026)),i=c(n(66983)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.default.bind(i.default),f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:l.default.string},h=function(e){var t=e.children,n=s(e,u),l=r.default.useContext(o.default),i=(0,a.default)(m(["button",l.className]),n.className);return r.default.createElement("button",d({},n,{type:"button",className:i,onBlur:f,onMouseDown:p,"data-focus-styles-enabled":!0}),t)};h.propTypes=_;var v=h;t.default=v},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),l=u(n(45697)),a=u(n(47166)),o=u(n(50026)),i=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var c=a.default.bind(i.default),d={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,l=e.children,a=r.default.useContext(o.default);return r.default.createElement("div",{className:c("notice",n,a.className)},r.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:c("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(l,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};s.propTypes=d,s.defaultProps={ariaLevel:"2",variant:"important"};var m=s;t.default=m},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),l=d(n(45697)),a=d(n(94184)),o=d(n(47166)),i=d(n(50026)),u=d(n(42620)),c=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var f=o.default.bind(u.default),p={title:l.default.string},_=function(e){var t=e.title,n=m(e,c),l=r.default.useContext(i.default),o=(0,a.default)(f(["placeholder",l.className]),n.className),u=f(["inner"]);return r.default.createElement("div",s({},n,{className:o}),r.default.createElement("div",{className:u},r.default.createElement("p",{className:f("title")},t)))};_.propTypes=p,_.defaultProps={title:""};var h=_;t.default=h},34261:function(e,t,n){Object.defineProperty(t,"qX",{enumerable:!0,get:function(){return r.default}});var r=o(n(59278)),l=o(n(47306)),a=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},97001:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(87462),l=n(44925),a=(n(67294),n(81254)),o=n(34261),i=["components"],u={};function c(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"selenium-docker-service"},"Selenium Docker Service"),(0,a.mdx)("p",null,"The selenium docker service initializes a containerized ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/SeleniumHQ/docker-selenium"},"selenium docker")," environment for running functional ",(0,a.mdx)("a",{parentName:"p",href:"https://webdriver.io/"},"WebDriverIO")," tests."),(0,a.mdx)("p",null,"By default, the selenium grid will be deployed locally on the host machine running on port 4444. Google Chrome and Firefox are available on the docker container. Internet Explorer can be enable when using a remote selenium grid that has it available."),(0,a.mdx)("h2",{id:"options"},"Options"),(0,a.mdx)("p",null,"The selenium docker service options are configured via the ",(0,a.mdx)("a",{parentName:"p",href:"../about#options"},"test runner CLI options"),"."),(0,a.mdx)("h3",{id:"disableseleniumservice"},"disableSeleniumService"),(0,a.mdx)("p",null,"A flag to disable the selenium docker service for the test run."),(0,a.mdx)("p",null,"Type: ",(0,a.mdx)("inlineCode",{parentName:"p"},"bool")),(0,a.mdx)("p",null,"Required: ",(0,a.mdx)("inlineCode",{parentName:"p"},"false")),(0,a.mdx)("p",null,"Default: ",(0,a.mdx)("inlineCode",{parentName:"p"},"false")),(0,a.mdx)("p",null,"Example:"),(0,a.mdx)(o.qX,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,a.mdx)("p",null,"  The selenium docker service is disabled automatically by the test runner if a remote selenium grid is specified.")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},'"scripts": {\n  "test:wdio": "terra wdio --disableSeleniumService"\n}\n')),(0,a.mdx)("h3",{id:"seleniumversion"},"seleniumVersion"),(0,a.mdx)("p",null,"The docker selenium image version to run tests against. This option is configured via the ",(0,a.mdx)("inlineCode",{parentName:"p"},"wdio.conf.js"),"."),(0,a.mdx)("p",null,"Type: ",(0,a.mdx)("inlineCode",{parentName:"p"},"string")),(0,a.mdx)("p",null,"Required: ",(0,a.mdx)("inlineCode",{parentName:"p"},"false")),(0,a.mdx)("p",null,"Default: ",(0,a.mdx)("inlineCode",{parentName:"p"},"3.14.0-helium")),(0,a.mdx)("p",null,"Example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"// wdio.conf.js\nconst { config } = require('@cerner/terra-functional-testing');\n\nconfig.serviceOptions = {\n  seleniumVersion: '3.141.59-20210311',\n};\n\nexports.config = config;\n")))}c.isMDXComponent=!0},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},87462:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},44925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return r}})}}]);