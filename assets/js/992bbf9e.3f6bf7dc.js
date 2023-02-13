"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1806],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,c=u["".concat(l,".").concat(m)]||u[m]||h[m]||n;return a?o.createElement(c,s(s({ref:t},d),{},{components:a})):o.createElement(c,s({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<n;p++)s[p]=a[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=a(87462),r=(a(67294),a(3905));const n={slug:"2023-day13",title:"13. Build a Canvas App",authors:["gomolemo","april"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["low code","developer tools","onboarding","power platform fundamentals","30DaysOfLowCode","canvas apps"],image:"https://microsoft.github.io/Low-Code/img/og/30-13.png",description:"Today\u2019s blog will begin your User Interface development journey with actionable insights and resources that will get you started building amazing UI with Canvas Apps.",tags:["low-code-february","30-days-of-lowcode","learn-live","zero-to-hero","ask-the-expert","fusion-teams","power-platform","canvas-apps"]},s=void 0,i={permalink:"/Low-Code/blog/2023-day13",source:"@site/blog/2023-lcf/2023-02-13/index.md",title:"13. Build a Canvas App",description:"Today\u2019s blog will begin your User Interface development journey with actionable insights and resources that will get you started building amazing UI with Canvas Apps.",date:"2023-02-13T00:00:00.000Z",formattedDate:"February 13, 2023",tags:[{label:"low-code-february",permalink:"/Low-Code/blog/tags/low-code-february"},{label:"30-days-of-lowcode",permalink:"/Low-Code/blog/tags/30-days-of-lowcode"},{label:"learn-live",permalink:"/Low-Code/blog/tags/learn-live"},{label:"zero-to-hero",permalink:"/Low-Code/blog/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Low-Code/blog/tags/ask-the-expert"},{label:"fusion-teams",permalink:"/Low-Code/blog/tags/fusion-teams"},{label:"power-platform",permalink:"/Low-Code/blog/tags/power-platform"},{label:"canvas-apps",permalink:"/Low-Code/blog/tags/canvas-apps"}],readingTime:7.065,hasTruncateMarker:!1,authors:[{name:"Gomolemo Mohapi",title:"Cloud Advocate",url:"https://github.com/gomomohapi",imageURL:"https://github.com/gomomohapi.png",key:"gomolemo"},{name:"April Dunnam",title:"Power Platform Advocacy Lead",url:"https://github.com/AprilDunnam",imageURL:"https://github.com/AprilDunnam.png",key:"april"}],frontMatter:{slug:"2023-day13",title:"13. Build a Canvas App",authors:["gomolemo","april"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["low code","developer tools","onboarding","power platform fundamentals","30DaysOfLowCode","canvas apps"],image:"https://microsoft.github.io/Low-Code/img/og/30-13.png",description:"Today\u2019s blog will begin your User Interface development journey with actionable insights and resources that will get you started building amazing UI with Canvas Apps.",tags:["low-code-february","30-days-of-lowcode","learn-live","zero-to-hero","ask-the-expert","fusion-teams","power-platform","canvas-apps"]},nextItem:{title:"12. Recap - Integrations Week \u2728",permalink:"/Low-Code/blog/2023-day12"}},l={authorsImageUrls:[void 0,void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"What are Canvas Apps?",id:"what-are-canvas-apps",level:2},{value:"Ways to build Canvas Apps",id:"ways-to-build-canvas-apps",level:2},{value:"Start from a template",id:"start-from-a-template",level:3},{value:"Start from data",id:"start-from-data",level:3},{value:"Working with Express Design",id:"working-with-express-design",level:2},{value:"Image to App",id:"image-to-app",level:3},{value:"Figma to App",id:"figma-to-app",level:3},{value:"Exercises",id:"exercises",level:2},{value:"What&#39;s next?",id:"whats-next",level:2},{value:"Resources",id:"resources",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/blog/2023-day13"}),(0,r.kt)("meta",{name:"twitter:title",content:"13. Build a Canvas App"}),(0,r.kt)("meta",{name:"twitter:description",content:"Today\u2019s blog will begin your User Interface development journey with actionable insights and resources that will get you started building amazing UI with Canvas Apps."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/img/og/30-13.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://microsoft.github.io/Low-Code/blog/2023-day13"})),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 13")," of #30DaysOfLowCode!"),(0,r.kt)("p",null,"More often than not, a well thought out, consistent, eye-catching but functional user experience can define the success of your app. This is why we\u2019ve decided to dedicate this week to the ",(0,r.kt)("strong",{parentName:"p"},"User Interface (UI)"),". Today\u2019s blog will begin that journey with actionable insights and resources that will get you started building amazing UI with Canvas Apps."),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What are Canvas Apps?"),(0,r.kt)("li",{parentName:"ul"},"Ways to build Canvas Apps"),(0,r.kt)("li",{parentName:"ul"},"Working with Express Design"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"**Activity**: Sign up for your [Power Apps Developer Plan](https://aka.ms/lowcode-february/devplan)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"**Exercises**: Try it Yourself! \n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"**Resources**: Explore the [Low Code February Collection](https://aka.ms/lowcode-february/collection)\n")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Speaker Card",src:a(25055).Z,width:"1001",height:"420"})),(0,r.kt)("h2",{id:"what-are-canvas-apps"},"What are Canvas Apps?"),(0,r.kt)("p",null,"As mentioned in an ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/Low-Code/blog/2023-day2/#what-does-the-power-platform-provide"},"earlier blog post"),", Power Apps is a tool for \u201ccreating custom applications for web and mobile that can be integrated with a variety of systems and services\u201d. There are two types of Power Apps, namely Model-Driven Apps and Canvas Apps."),(0,r.kt)("p",null,"Model-Driven apps require a Microsoft Dataverse database. They're built on top of the data that's modelled in that database environment. As a result of this, the views and screens are based on a specific data structure and offer a more consistent appearance and behaviour from one screen to the next."),(0,r.kt)("p",null,"But with Canvas Apps, you start with a blank screen \u2013 like an artist\u2019s canvas. You have complete control over the placement of each image, textbox, form, icon, and other elements on that canvas. Power Apps offers you a graphical, intuitive interface with a pixel perfect visual app designer which enables you to build and deploy professional looking Canvas Apps faster with tailor-made UI."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Canvas App UI being edited inside of the Power Apps Studio",src:a(6689).Z,width:"1920",height:"961"})),(0,r.kt)("h2",{id:"ways-to-build-canvas-apps"},"Ways to build Canvas Apps"),(0,r.kt)("p",null,"Now there are many starting points when building Canvas Apps. We\u2019ve already established that you can start from a ",(0,r.kt)("em",{parentName:"p"},"blank canvas")," and build out your app from there however we have other methods for getting you to where you want to be faster."),(0,r.kt)("p",null,"Whether it\u2019s your first time and you want to start from a template just to get familiar with the building experience, or you already have data and you want to build your Canvas App on top of that data or even if you have an initial design and you want to start from that design and add data later on \u2013 we\u2019ve got you covered. "),(0,r.kt)("p",null,"Whatever method you choose, you\u2019ll always end up in the Power Apps Studio. This is the space where you\u2019ll design, build, and manage your Canvas App. If you want to understand the various parts of the Power Apps Studio before you get your hands dirty; I highly recommend reading ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/PowerAppsStudio"},"this article")," which gives a really good insight into the various parts of it."),(0,r.kt)("h3",{id:"start-from-a-template"},"Start from a template"),(0,r.kt)("p",null,"If it\u2019s your first time, you might want to start from a template just so you can get familiar with Canvas Apps. Power Apps provides multiple templates for all types of scenarios. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image showing a few Canvas Apps templates",src:a(57281).Z,width:"1920",height:"961"})),(0,r.kt)("p",null,"You can simply select a template from our vast gallery and then run the app to understand its default behaviour. Feel free to add some additional functionality and make it your own. For a full breakdown of how to create an app from a template, check out ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/CanvasFromTemplate"},"this article")," to learn more. "),(0,r.kt)("h3",{id:"start-from-data"},"Start from data"),(0,r.kt)("p",null,"Maybe you already have some business data to work with and you\u2019d like to build an app that connects to this data directly.  It doesn\u2019t matter where your data lives \u2013 you can create a working 3-screen app in just a few clicks and choose to customise it however you want. "),(0,r.kt)("p",null,"The generated 3-screen app includes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Browse Screen"),": Lets the user browse through data. It also includes search, sort, and data refresh all out of the box."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Details Screen"),": This screen just shows the extended details of a single record. It also has the option of deleting that record as well. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Edit Screen"),": This allows users to edit a single record to change any of its values. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image showing generated 3-screen Canvas App",src:a(43986).Z,width:"1253",height:"712"})),(0,r.kt)("p",null,"This process takes care of the data connection for you so that you can focus on the functionality and UI straight away. Whether your data lives in ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/CanvasFromSharepoint"},"SharePoint"),", ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/CanvasFromExcel"},"Excel"),", ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/CanvasFromSQL"},"Azure SQL")," or even ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/CanvasFromDataverse"},"Dataverse"),", you can get started building Canvas Apps, from data, today. "),(0,r.kt)("h2",{id:"working-with-express-design"},"Working with Express Design"),(0,r.kt)("p",null,"Express design is a new way to quickly get started with Canvas Apps by instantly transforming any visual design artifact into an app. Every app starts with a design phase where some form of initial sketch would have been made. You may have sketched some basic UI on a piece of paper or on a whiteboard or if you\u2019re a professional \u2013 you may have designed some assets in Figma."),(0,r.kt)("p",null,"Whatever your method is, Power Apps is now applying advanced cognitive AI models to generate app UI using two methods."),(0,r.kt)("h3",{id:"image-to-app"},"Image to App"),(0,r.kt)("p",null,"All you have to do is take a picture or screenshot of whatever wireframe, sketch, or visual design that you have, upload it into Power Apps and then follow the steps in the guided interface to tag the relevant UI components and set up your data. This will then auto-magically generate an app for you to jumpstart your app development process. See ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/AppFromImage"},"this article")," for more information and step-by-step guidance on how to generate Canvas Apps from an image!"),(0,r.kt)("p",null,"Also, check out this ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/ExpressDesignTikTok"},"AMAZING TikTok")," that shows you the whole Image to App process in under 60 seconds! Don\u2019t forget to follow us while you\u2019re there \ud83d\ude09 "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image showing the Image to App fucntionality in Power Apps",src:a(23254).Z,width:"1920",height:"961"})),(0,r.kt)("h3",{id:"figma-to-app"},"Figma to App"),(0,r.kt)("p",null,"Now the Image to App process will do it\u2019s best to match your drawing or image however if you are looking for an exact, pixel-perfect match then you should consider creating your design in Figma using the ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/FigmaKit"},"Create Apps from Figma UI Kit"),". Afterwards, you will then convert your design file into a Canvas App and then add more functionality using the Power Apps Studio. More details on this process can be ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/Figma"},"found here")," so be sure to try it out for yourself and let us know how it went!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image showing the Figma to App fucntionality in Power Apps",src:a(22163).Z,width:"1920",height:"961"})),(0,r.kt)("h2",{id:"exercises"},"Exercises"),(0,r.kt)("p",null,"So now that you've taken the time to delve into this blog post, you're essentially a pro at finding whatever your starting point is! Go ahead, give yourself a pat on the back AND why don\u2019t you try and build some Canvas Apps UI yourself? It\u2019s easier than you think, and we\u2019ve got some training materials to help you get started as well. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Training"),": ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/LCF/CanvasUIPath"},"Use the UI and controls in a canvas app in Power Apps")," is a Learning Path up on Microsoft Learn which takes you through the process of building a functional UI for your Canvas App. It highlights app navigation, themes, icons, images, personalization, different form factors, and so many more controls that you can take advantage of. ")),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"Be sure to keep yourself posted with this week\u2019s blog posts and discover all that there is to know about working with User Interface in the Power Platform. From Power Fx to the Power Component Framework, we have so much planned for you. "),(0,r.kt)("p",null,"Also consider -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Signing up for the free ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://aka.ms/lowcode-february/devplan"},"Power Apps Developer Plan"))," so you have access to the Power Platform."),(0,r.kt)("li",{parentName:"ol"},"Enrolling in the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://aka.ms/lowcode-february/challenge"},"Cloud Skills Challenge"))," to skill up on key cloud technologies with free, self-guided learning courses, and start climbing the leaderboard!"),(0,r.kt)("li",{parentName:"ol"},"Registering for the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://aka.ms/lowcode-february/PowerfulDevsConf2023"},"Powerful Devs Conference"))," to learn from experts how you, as a developer, can leverage the Power Platform to build applications faster and with far less effort.")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Low Code February ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://learn.microsoft.com/users/nityan/collections/xz6ehr2mx031y0?WT.mc_id=javascript-82212-ninarasi"},"Learn Collection")),": Collection of resources to go from learning Power Platform Fundamentals, to understanding the Dataverse and working in Fusion Development teams."),(0,r.kt)("li",{parentName:"ul"},"Power Apps ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://aka.ms/LCF/CanvasDocs"},"Canvas Apps Documentation"))),(0,r.kt)("li",{parentName:"ul"},"On-Demand Viewing: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://aka.ms/LCF/UILearnLive"},"Building the UI in Power Apps")))))}u.isMDXComponent=!0},6689:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Figure1-9cda1144098d58e6a2dd8fe8ff52a3f9.png"},57281:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Figure2-c8c7b890580d7389beba8d5cbf5436f7.png"},43986:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Figure3-c60e8cf9500886194774c51fcb1aac51.png"},23254:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Figure4-c0ce1b8cd102eb31f73115f55ba57f05.png"},22163:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Figure5-aab62715762c8044aa5ae906abc5be25.png"},25055:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/30-13-431c91bf5159be7c6bcd935d038a3fb6.png"}}]);