"use strict";(self.webpackChunkkubewarden_docusaurus=self.webpackChunkkubewarden_docusaurus||[]).push([[5707],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(3117),i=(n(7294),n(3905));const a={sidebar_label:"Introduction to Rust",title:""},s="Rust",o={unversionedId:"writing-policies/rust/intro-rust",id:"writing-policies/rust/intro-rust",title:"",description:"Rust is the most mature programming language that",source:"@site/docs/writing-policies/rust/01-intro-rust.md",sourceDirName:"writing-policies/rust",slug:"/writing-policies/rust/intro-rust",permalink:"/writing-policies/rust/intro-rust",draft:!1,editUrl:"https://github.com/kubewarden/docs/edit/main/docs/writing-policies/rust/01-intro-rust.md",tags:[],version:"current",lastUpdatedAt:1672936142,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction to Rust",title:""},sidebar:"docs",previous:{title:"Cryptographic Capabilities",permalink:"/writing-policies/spec/host-capabilities/crypto"},next:{title:"Creating a new validation policy",permalink:"/writing-policies/rust/create-policy"}},l={},u=[{value:"Getting Rust dependencies",id:"getting-rust-dependencies",level:2},{value:"OSX specific dependencies",id:"osx-specific-dependencies",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rust"},"Rust"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," is the most mature programming language that\ncan generate WebAssembly modules: WebAssembly is a first-class citizen\nin the Rust world. That means many of the tools and crates of the Rust\necosystem work out of the box."),(0,i.kt)("p",null,"Kubewarden provides a ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/crates/kubewarden-policy-sdk"},"Rust SDK"),"\nthat simplifies the process of writing policies, plus a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubewarden/rust-policy-template"},"template project")," to\nquickly scaffold a policy project using the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cargo-generate/cargo-generate"},(0,i.kt)("inlineCode",{parentName:"a"},"cargo-generate"))," utility."),(0,i.kt)("p",null,"This document illustrates how to take advantage of these projects to write\nKubewarden policies using the Rust programming language."),(0,i.kt)("p",null,"Note well, we won't cover the details of Kubewarden's Rust SDK inside of this\npage. These can be found inside of the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/kubewarden-policy-sdk/0.1.0"},"official crate documentation"),"."),(0,i.kt)("h2",{id:"getting-rust-dependencies"},"Getting Rust dependencies"),(0,i.kt)("p",null,"This section guides you through the process of installing the Rust compiler and\nits dependencies."),(0,i.kt)("p",null,"As a first step install the Rust compiler and its tools, this can be easily done\nusing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup"},"rustup"),". Please follow\n",(0,i.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rustup/installation/index.html"},"rustup's install documentation"),"."),(0,i.kt)("p",null,"Once ",(0,i.kt)("inlineCode",{parentName:"p"},"rustup")," is installed add the WASI target:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"rustup target add wasm32-wasi\n")),(0,i.kt)("h2",{id:"osx-specific-dependencies"},"OSX specific dependencies"),(0,i.kt)("p",null,"In order to use ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo-generate")," you will need to add the Xcode tool set. If it isn't installed through Xcode the following command will give you the dependencies needed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"xcode-select --install\n")))}p.isMDXComponent=!0}}]);