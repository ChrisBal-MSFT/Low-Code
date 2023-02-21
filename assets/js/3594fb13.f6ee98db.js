"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6741],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),m=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=m(a),u=n,f=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?o.createElement(f,l(l({ref:t},s),{},{components:a})):o.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:n,l[1]=r;for(var m=2;m<i;m++)l[m]=a[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18471:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var o=a(87462),n=(a(67294),a(3905));const i={slug:"2023-day20",title:"20. ALM For Power Platform",authors:["kartik","daniel"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["low code","developer tools","power platform","developer experience","app lifecycle management","alm","30DaysOfLowCode"],image:"https://microsoft.github.io/Low-Code/img/og/30-20.png",description:"Take a look into the foundamentals of App Lifecycle Management (ALM) and walk you through how can you implement ALM with Power Platform. - join us at #LowCodeFebruary https://aka.ms/lowcode-february. #30DaysOfLowCode",tags:["low code","developer tools","power platform","developer experience","app lifecycle management","alm","30DaysOfLowCode"]},l=void 0,r={permalink:"/Low-Code/blog/2023-day20",source:"@site/blog/2023-lcf/2023-02-20/index.md",title:"20. ALM For Power Platform",description:"Take a look into the foundamentals of App Lifecycle Management (ALM) and walk you through how can you implement ALM with Power Platform. - join us at #LowCodeFebruary https://aka.ms/lowcode-february. #30DaysOfLowCode",date:"2023-02-20T00:00:00.000Z",formattedDate:"February 20, 2023",tags:[{label:"low code",permalink:"/Low-Code/blog/tags/low-code"},{label:"developer tools",permalink:"/Low-Code/blog/tags/developer-tools"},{label:"power platform",permalink:"/Low-Code/blog/tags/power-platform"},{label:"developer experience",permalink:"/Low-Code/blog/tags/developer-experience"},{label:"app lifecycle management",permalink:"/Low-Code/blog/tags/app-lifecycle-management"},{label:"alm",permalink:"/Low-Code/blog/tags/alm"},{label:"30DaysOfLowCode",permalink:"/Low-Code/blog/tags/30-days-of-low-code"}],readingTime:4.055,hasTruncateMarker:!1,authors:[{name:"Kartik Kanakasabesan",title:"Principal Program Manager",url:"https://github.com/kkanakas",imageURL:"https://github.com/kkanakas.png",key:"kartik"},{name:"Daniel Laskewitz",title:"Senior Cloud Advocate",url:"https://github.com/Laskewitz",imageURL:"https://github.com/Laskewitz.png",key:"daniel"}],frontMatter:{slug:"2023-day20",title:"20. ALM For Power Platform",authors:["kartik","daniel"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["low code","developer tools","power platform","developer experience","app lifecycle management","alm","30DaysOfLowCode"],image:"https://microsoft.github.io/Low-Code/img/og/30-20.png",description:"Take a look into the foundamentals of App Lifecycle Management (ALM) and walk you through how can you implement ALM with Power Platform. - join us at #LowCodeFebruary https://aka.ms/lowcode-february. #30DaysOfLowCode",tags:["low code","developer tools","power platform","developer experience","app lifecycle management","alm","30DaysOfLowCode"]},prevItem:{title:"21. GitHub Actions for Power",permalink:"/Low-Code/blog/2023-day21"},nextItem:{title:"19. Recap - Interface Week \u2728",permalink:"/Low-Code/blog/2023-day19"}},p={authorsImageUrls:[void 0,void 0]},m=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"What is Application Lifecycle Management (ALM) ?",id:"what-is-application-lifecycle-management-alm-",level:2},{value:"What falls within realm of ALM?",id:"what-falls-within-realm-of-alm",level:2},{value:"Power Platform and Application Lifecycle Management",id:"power-platform-and-application-lifecycle-management",level:2},{value:"Solutions are important for Application Lifecycle Management",id:"solutions-are-important-for-application-lifecycle-management",level:2},{value:"Deployment management",id:"deployment-management",level:2},{value:"Resources",id:"resources",level:2}],s={toc:m};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/blog/2023-day20"}),(0,n.kt)("meta",{name:"twitter:title",content:"20. ALM For Power Platform"}),(0,n.kt)("meta",{name:"twitter:description",content:"Take a look into the foundamentals of App Lifecycle Management (ALM) and walk you through how can you implement ALM with Power Platform. - join us at #LowCodeFebruary https://aka.ms/lowcode-february. #30DaysOfLowCode"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/img/og/30-20.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://microsoft.github.io/Low-Code/blog/2023-day20"})),(0,n.kt)("p",null,"Welcome to ",(0,n.kt)("inlineCode",{parentName:"p"},"Day 20")," of #30DaysOfLowCode!"),(0,n.kt)("p",null,"The theme for this week is Developer Experience. Today we will take a look into the foundamentals of App Lifecycle Management (ALM) and walk you through how can you implement ALM with Power Platform."),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Intro to Application Lifecycle Management (ALM)"),(0,n.kt)("li",{parentName:"ul"},"Power Platform and Application Lifecycle Management"),(0,n.kt)("li",{parentName:"ul"},"Solutions for Application Lifecycle Management"),(0,n.kt)("li",{parentName:"ul"},"Deployment management"),(0,n.kt)("li",{parentName:"ul"},"Exercise: Sign up for your ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/devplan"},(0,n.kt)("strong",{parentName:"a"},"Developer Plan"))),(0,n.kt)("li",{parentName:"ul"},"Resources: Explore the ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/collection"},(0,n.kt)("strong",{parentName:"a"},"Low Code February Collection")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Feb20",src:a(2201).Z,width:"1334",height:"560"})),(0,n.kt)("h2",{id:"what-is-application-lifecycle-management-alm-"},"What is Application Lifecycle Management (ALM) ?"),(0,n.kt)("p",null,"Application Lifecycle Management is an very large encompassing term. Which is absolutely true, because you are managing the life of an Application from its birth to finally retiring it.\nNow, there is a perception that ALM is only valid traditional software development projects, and those perceptions maybe right. The applications being built by Power Platform are also applications, and applications by nature need to be managed especially when low code applications are now being built for organization's turn key products. Application Lifecycle management is culmination of a problem solving effort by combining people, process, and tools to address a purpose/outcome."),(0,n.kt)("h2",{id:"what-falls-within-realm-of-alm"},"What falls within realm of ALM?"),(0,n.kt)("p",null,"ALM can be seen via various terms, such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Digital transformation : where an organization adopts technology to help improve value, productivity,risk management, efficiency, and manage costs"),(0,n.kt)("li",{parentName:"ul"},"DevOps (Development + Operations)               : It is the union of people, process, and tools to enable continuous delivery to your users of your service"),(0,n.kt)("li",{parentName:"ul"},"DevSecOps (Development + Security + Operations) : It is an approach built on top of DevOps and incorporating a security mindset from the get go"),(0,n.kt)("li",{parentName:"ul"},"Legacy Application development                  : Managing the Application lifecycle of a mature product line"),(0,n.kt)("li",{parentName:"ul"},"New Application development                     : Managing the Application lifecycle of a nascent product line")),(0,n.kt)("p",null,"Now there is SDLC which stands for Software Development Lifecycle, it is also part of ALM but focuses mostly on the software development side of things."),(0,n.kt)("p",null,"In short, all these terms are part of application lifecycle management, as a matter of fact, any time a new application is developed, it will have to be managed eventually!"),(0,n.kt)("h2",{id:"power-platform-and-application-lifecycle-management"},"Power Platform and Application Lifecycle Management"),(0,n.kt)("p",null,"Power Platform helps you develop applications quicker and faster, so it has the capabilities to be part of Application Management initiatives of an organization. When implementing Application Lifecycle Management with Power Platform, three things need to be considered"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Environment Management                : This entails the strategy you want to implement when embarking on ALM. Typically most common ALM pattern from an environments perspective is to have environments that map to Development, Test, and Production.  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Organize the artifacts in Solutions   : PowerApps, PowerAutomate Flows, Power Virtual Agents, AI Builder, PowerBI, and Power Pages assets need to be within solutions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Managing Deployments                  : When solutions are deployed from Development, to Test, to Production what are the mechanism that need to be employed and managed (i.e. Azure DevOps pipelines, GitHub actions, and Pipelines for Power Platform)  "))),(0,n.kt)("h2",{id:"solutions-are-important-for-application-lifecycle-management"},"Solutions are important for Application Lifecycle Management"),(0,n.kt)("p",null,"Beyond the components listed in the prior section, the additional components that are part of solution for enabling successful Application Lifecycle Management\n",(0,n.kt)("img",{alt:"What is in a solution",src:a(96651).Z,width:"4147",height:"1390"})),(0,n.kt)("p",null,"In addition, there are two types of solution, which are managed and unmanaged solutions."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Managed solutions  : Are immutable, as in once a solution becomes managed, it cannot be changed. Think of components that you use as a library for your application"),(0,n.kt)("li",{parentName:"ul"},"Unmanaged solutions: These solutions can be changed, solutions when in your development environment are generally in the unmanaged state.")),(0,n.kt)("p",null,"When committing solutions from a Power Platform developer environment, you need to export them, the solution renders itself as a zip file that can be then committed to source code repository."),(0,n.kt)("h2",{id:"deployment-management"},"Deployment management"),(0,n.kt)("p",null,"As mentioned before, there are various ways and means to deploy power platform applications, there are integrations with Azure DevOps and GitHub Actions. In addition, Power Platform has an in-product deployment capability called ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/power-platform/alm/pipelines/?WT.mc_id=javascript-82212-ninarasi"},"Pipelines for Power Platform"),". This is designed for developers who may not have sophisticated ALM deployment needs."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-platform/alm/?WT.mc_id=javascript-82212-ninarasi"},"ALM with Power Platform")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-platform/alm/environment-strategy-alm/?WT.mc_id=javascript-82212-ninarasi"},"Environment Strategy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-platform/alm/solution-concepts-alm/?WT.mc_id=javascript-82212-ninarasi"},"Solution Concepts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-platform/alm/devops-build-tools?WT.mc_id=javascript-82212-ninarasi"},"ALM Automation: Power Platform Build Tools for Azure DevOps")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-platform/alm/devops-github-actions?WT.mc_id=javascript-82212-ninarasi"},"ALM Automation: Power Platform actions with GitHub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-platform/alm/pipelines?WT.mc_id=javascript-82212-ninarasi"},"ALM Automation:Pipelines in Power Platform"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Campaign Banner",src:a(24849).Z,width:"1334",height:"560"})))}c.isMDXComponent=!0},96651:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/What-is-in-a-solution-129ca9442c0db83d5ad63979a363a5bd.png"},2201:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/30-20-9c923d220c0093fa7a7c1cbc4e4fe06a.png"},24849:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/30-banner-d9bab2b92d758942447a4cbc50aef715.png"}}]);