"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[3751],{727:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});a(7294);var s=a(6010),r=a(1944),l=a(5281),n=a(5155),c=a(6090),i=a(197),g=a(2503),o=a(5893);function u(t){let{title:e}=t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.d,{title:e}),(0,o.jsx)(i.Z,{tag:"doc_tags_list"})]})}function h(t){let{tags:e,title:a}=t;return(0,o.jsx)(r.FG,{className:(0,s.Z)(l.k.page.docsTagsListPage),children:(0,o.jsx)("div",{className:"container margin-vert--lg",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,o.jsx)(g.Z,{as:"h1",children:a}),(0,o.jsx)(c.Z,{tags:e})]})})})})}function d(t){const e=(0,n.M)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{...t,title:e}),(0,o.jsx)(h,{...t,title:e})]})}},3008:(t,e,a)=>{a.d(e,{Z:()=>c});a(7294);var s=a(6010),r=a(9960);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=a(5893);function c(t){let{permalink:e,label:a,count:c}=t;return(0,n.jsxs)(r.Z,{href:e,className:(0,s.Z)(l.tag,c?l.tagWithCount:l.tagRegular),children:[a,c&&(0,n.jsx)("span",{children:c})]})}},6090:(t,e,a)=>{a.d(e,{Z:()=>g});a(7294);var s=a(5155),r=a(3008),l=a(2503);const n={tag:"tag_Nnez"};var c=a(5893);function i(t){let{letterEntry:e}=t;return(0,c.jsxs)("article",{children:[(0,c.jsx)(l.Z,{as:"h2",id:e.letter,children:e.letter}),(0,c.jsx)("ul",{className:"padding--none",children:e.tags.map((t=>(0,c.jsx)("li",{className:n.tag,children:(0,c.jsx)(r.Z,{...t})},t.permalink)))}),(0,c.jsx)("hr",{})]})}function g(t){let{tags:e}=t;const a=(0,s.P)(e);return(0,c.jsx)("section",{className:"margin-vert--lg",children:a.map((t=>(0,c.jsx)(i,{letterEntry:t},t.letter)))})}},5155:(t,e,a)=>{a.d(e,{M:()=>r,P:()=>l});var s=a(5999);const r=()=>(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(t){const e={};return Object.values(t).forEach((t=>{const a=function(t){return t[0].toUpperCase()}(t.label);e[a]??=[],e[a].push(t)})),Object.entries(e).sort(((t,e)=>{let[a]=t,[s]=e;return a.localeCompare(s)})).map((t=>{let[e,a]=t;return{letter:e,tags:a.sort(((t,e)=>t.label.localeCompare(e.label)))}}))}}}]);