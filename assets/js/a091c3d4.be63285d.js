"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1958],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>h});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(o),u=n,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return o?a.createElement(h,l(l({ref:t},m),{},{components:o})):a.createElement(h,l({ref:t},m))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<r;p++)l[p]=o[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},45112:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=o(87462),n=(o(67294),o(3905));const r={slug:"2023-day17",title:"17. Build a PCF Control",authors:["gomolemo"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["power platform","low code","power component framework","tutorial"],image:"https://microsoft.github.io/Low-Code/img/og/30-17.png",description:"Build a PCF code component step by step",tags:["low-code-february","30-days-of-lowcode","pcf","power apps component frameworkpower-platform"]},l=void 0,i={permalink:"/Low-Code/blog/2023-day17",source:"@site/blog/2023-lcf/2023-02-17/index.md",title:"17. Build a PCF Control",description:"Build a PCF code component step by step",date:"2023-02-17T00:00:00.000Z",formattedDate:"February 17, 2023",tags:[{label:"low-code-february",permalink:"/Low-Code/blog/tags/low-code-february"},{label:"30-days-of-lowcode",permalink:"/Low-Code/blog/tags/30-days-of-lowcode"},{label:"pcf",permalink:"/Low-Code/blog/tags/pcf"},{label:"power apps component frameworkpower-platform",permalink:"/Low-Code/blog/tags/power-apps-component-frameworkpower-platform"}],readingTime:11.895,hasTruncateMarker:!1,authors:[{name:"Gomolemo Mohapi",title:"Cloud Advocate",url:"https://github.com/gomomohapi",imageURL:"https://github.com/gomomohapi.png",key:"gomolemo"}],frontMatter:{slug:"2023-day17",title:"17. Build a PCF Control",authors:["gomolemo"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["power platform","low code","power component framework","tutorial"],image:"https://microsoft.github.io/Low-Code/img/og/30-17.png",description:"Build a PCF code component step by step",tags:["low-code-february","30-days-of-lowcode","pcf","power apps component frameworkpower-platform"]},nextItem:{title:"16. Intro to PCF Control",permalink:"/Low-Code/blog/2023-day16"}},s={authorsImageUrls:[void 0]},p=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Power Apps Component Framework Recap",id:"power-apps-component-framework-recap",level:2},{value:"What are we building today?",id:"what-are-we-building-today",level:2},{value:"Let&#39;s Make a Code Component!",id:"lets-make-a-code-component",level:2},{value:"Pre-Requisites",id:"pre-requisites",level:3},{value:"Configure Power Apps Environment",id:"configure-power-apps-environment",level:3},{value:"Create a Component Folder",id:"create-a-component-folder",level:3},{value:"Create a New Component Project",id:"create-a-new-component-project",level:3},{value:"Update Code Component&#39;s Manifest",id:"update-code-components-manifest",level:3},{value:"Add styling to your code component",id:"add-styling-to-your-code-component",level:3},{value:"Build your code component",id:"build-your-code-component",level:3},{value:"Implement Component&#39;s Logic",id:"implement-components-logic",level:3},{value:"Test and Run your Component",id:"test-and-run-your-component",level:2},{value:"Where to from here?",id:"where-to-from-here",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Resources",id:"resources",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/img/og/30-17.png"}),(0,n.kt)("meta",{name:"twitter:title",content:"17. Build a PCF Control"}),(0,n.kt)("meta",{name:"twitter:description",content:"Learn how to build a PCF code component step by step. Learn more in #LowCodeFebruary, #30DaysofLowCode"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/img/og/30-17.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,n.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,n.kt)("link",{rel:"canonical",href:"https://microsoft.github.io/Low-Code/img/og/30-17.png"})),(0,n.kt)("p",null,"Welcome to ",(0,n.kt)("inlineCode",{parentName:"p"},"Day 17")," of #30DaysOfLowCode!"),(0,n.kt)("p",null,"The theme for this week is ",(0,n.kt)("strong",{parentName:"p"},"User Interface")," and we're ending it off with a quick tutorial on PCF Components! Yesterday, I wrote about the ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/Low-Code/blog/2023-day16"},"Power Apps Component Framework")," and highlighted why you would want to use it, what the advantages are, as well as the composition of a PCF Component. Today, as promised, we'll be building a simple code component step-by-step."),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Power Apps Component Framework Recap"),(0,n.kt)("li",{parentName:"ul"},"What are we building today?"),(0,n.kt)("li",{parentName:"ul"},"Let's make a Code Component!"),(0,n.kt)("li",{parentName:"ul"},"Test and Run your component "),(0,n.kt)("li",{parentName:"ul"},"Where to from here?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Exercise"),": Training - ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/LCF/BuildMorePCF"},"Use advanced features with Power Apps component framework")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Resources"),": Explore the ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/collection"},"Low Code February Collection"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Feb 17",src:o(10564).Z,width:"1001",height:"420"})),(0,n.kt)("h2",{id:"power-apps-component-framework-recap"},"Power Apps Component Framework Recap"),(0,n.kt)("p",null,"As mentioned in yesterday's blog, Power Apps Component Framework (PCF) empowers professional or traditional developers and app makers to create reusable code components for Canvas Apps and Model-Driven Apps. Sometimes, as app makers, we might reach certain limitations when it comes to building consistent, eye-catching but functional user experiences. The out-of-the-box controls within Power Apps might not fit all of our needs or maybe, we just want to stretch Power Apps' capabilities a little further. With PCF, you can build code components which are essentially visual controls that help you create a more customised user interface."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"A gif showing PCF Code Components in action",src:o(99244).Z,width:"2540",height:"1312"})),(0,n.kt)("h2",{id:"what-are-we-building-today"},"What are we building today?"),(0,n.kt)("p",null,"So, with Power Apps, there is generally a large amount of data that end users input into the app via a Text Input control. However, as we can see in this ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/TextInputControl"},"reference page"),', there is no "auto height" property. What I mean is whenever you use a Text Input, and you have a lot of text, the text input does not inherently have the ability to increase its own height based on the amount of text that you have. The normal behaviour here is that the Text Input will have a scrollbar that you can use to navigate through the large amount of text.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image showing the scroll bar on a Power Apps text input control",src:o(17173).Z,width:"900",height:"481"})),(0,n.kt)("p",null,'This is the perfect opportunity for a professional developer to use their skills to solve this "low code" problem. And just to make sure, I\'m not saying that a low code developer does not have the ability to create some sort of walkaround for this problem - we are just looking at this from the perspective of a professional developer and how they can contribute to Power Platform Solutions. Also, by creating a code component, app makers will be able to use this throughout all of their Power Apps. '),(0,n.kt)("h2",{id:"lets-make-a-code-component"},"Let's Make a Code Component!"),(0,n.kt)("p",null,"Time to get started building with the Power Apps Component Framework, but first - "),(0,n.kt)("h3",{id:"pre-requisites"},"Pre-Requisites"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note"),": This tutorial was completed using a Windows 11 Machine.")),(0,n.kt)("p",null,"Before we get started, we will need to install the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/LCF/VSCode"},(0,n.kt)("strong",{parentName:"a"},"Visual Studio Code (VS Code)")),' and ensure that the "Add to PATH" option is selected during installation.'),(0,n.kt)("li",{parentName:"ol"},"Install ",(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},(0,n.kt)("strong",{parentName:"a"},"Node.js"))," (comes with npm). I recommend that you use a LTS (Long-Term Support) version."),(0,n.kt)("li",{parentName:"ol"},"Once VS Code is installed, go ahead and download and install the ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/LCF/InstallPowerCLI"},(0,n.kt)("strong",{parentName:"a"},"Power Platform Tools"))," VS Code extension.")),(0,n.kt)("h3",{id:"configure-power-apps-environment"},"Configure Power Apps Environment"),(0,n.kt)("p",null,"Since we are building a code component for Power Apps, we need to make sure our Power Apps environment is prepared and configured. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If you don't have a ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/lowcode-february/devplan"}," ",(0,n.kt)("strong",{parentName:"a"},"Power Apps Developer Plan")," "),"yet \ud83d\udc40, go ahead and sign up for one. It's FREE. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once that's done, log into the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://admin.powerplatform.microsoft.com"},"Power Platform Admin Center"))," "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Select "',(0,n.kt)("strong",{parentName:"li"},"Environments"),'" on the left-hand side '),(0,n.kt)("li",{parentName:"ul"},"Click on the development environment that you've just created above. This will usually have the name: ",(0,n.kt)("strong",{parentName:"li"},"*","[Your Name]","'s Environment"),".*")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"An image showing instructions to get to the Developer Environment",src:o(43191).Z,width:"867",height:"680"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Select "',(0,n.kt)("strong",{parentName:"p"},"Settings"),'" from the top command bar and navigate to Product > Features > Power Apps component framework for canvas apps. ')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Activate the Toggle On setting for the ",(0,n.kt)("strong",{parentName:"p"},"Allow publishing of canvas apps with code components")," feature."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image showing the toggle on setting for PCF Components in Power Apps",src:o(68912).Z,width:"807",height:"220"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Scroll down and select ",(0,n.kt)("strong",{parentName:"li"},"Save"),". ")),(0,n.kt)("p",null,"Now we're good to go! \ud83d\ude03"),(0,n.kt)("h3",{id:"create-a-component-folder"},"Create a Component Folder"),(0,n.kt)("p",null,"We will need a working folder to store our Code Component solution. For ease of use, I usually create a folder in a place where I can easily access from a Command Prompt. On my computer, I've created a new folder called ",(0,n.kt)("strong",{parentName:"p"},"LowCodeFeb")," directly in the C:\\ drive. So, I will be using ",(0,n.kt)("inlineCode",{parentName:"p"},"C:\\LowCodeFeb"),"."),(0,n.kt)("h3",{id:"create-a-new-component-project"},"Create a New Component Project"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Start ",(0,n.kt)("strong",{parentName:"li"},"Visual Studio Code")),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Terminal")," and select ",(0,n.kt)("strong",{parentName:"li"},"New Terminal"),"."),(0,n.kt)("li",{parentName:"ol"},"Change directory to your working folder.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd C:\\LowCodeFeb\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"From your LowCodeFeb directory, create a directory named ",(0,n.kt)("strong",{parentName:"li"},"dynamicTextInput-pcf"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir dynamicTextInput-pcf\n")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Change directory to ",(0,n.kt)("strong",{parentName:"li"},"dynamicTextInput-pcf"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd dynamicTextInput-pcf\n")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Initialize your component project by using Power Platform CLI with the following command:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pac pcf init --namespace SampleNamespace --name DynamicInputPCF --template field\n")),(0,n.kt)("p",null,"This image shows an example of the output you should see:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image showing the output of initializing your component with the Power Platform CLI",src:o(73341).Z,width:"880",height:"124"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Install the project build tools by using the command ",(0,n.kt)("inlineCode",{parentName:"li"},"npm install"),". Don't worry about any warnings you may see at this point. ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Once completed, run the command below to open the component project in Visual Studio Code.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},"code -a .\n")),(0,n.kt)("p",null,"Your opened project should look like this so far:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image showing the code component VS Code project structure",src:o(52236).Z,width:"320",height:"324"})),(0,n.kt)("h3",{id:"update-code-components-manifest"},"Update Code Component's Manifest"),(0,n.kt)("p",null,"Remember, from yesterday's blog - we established that the manifest is an XML file that defines the metadata and configuration of a code component. The manifest is an important file for a PCF code component because it is used by the Power Apps authoring tools to register and manage the component. This also includes the kind of data which is to be configured (field or dataset) and any other properties that can be configured in the application when the component is added."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Expand the ",(0,n.kt)("strong",{parentName:"li"},"DynamicInputPCF")," folder and open the ",(0,n.kt)("strong",{parentName:"li"},"ControlManifest.Input.xml")," file."),(0,n.kt)("li",{parentName:"ol"},"Near the top of the file, Change the version to ",(0,n.kt)("strong",{parentName:"li"},"1.0.0")," and description-key to ",(0,n.kt)("strong",{parentName:"li"},"Dynamic Input"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image showing the edited control tag in the project manifest",src:o(37060).Z,width:"1315",height:"281"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Locate the ",(0,n.kt)("strong",{parentName:"li"},"<property ... />")," node and replace it with this:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<property name="TextValue" display-name-key="TextValue" description-key="TextValueDescription" of-type-group="strings" usage="bound" required="true" />\n<property name="AutoHeightValue" display-name-key="AutoHeightValue" description-key="AutoHeightValueDescription" of-type="Whole.None" usage="bound" required="true" />\n\n<type-group name="strings">\n    <type>SingleLine.Text</type> \n    <type>SingleLine.TextArea</type> \n    <type>Multiple</type> \n</type-group> \n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Locate the ",(0,n.kt)("strong",{parentName:"li"},"<resources ... />")," node and include a reference to a CSS file named DynamicInputPCF.css that you'll soon create.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},'<css path="css/DynamicInputPCF.css" order="1" />\n')),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Save your changes by selecting ",(0,n.kt)("strong",{parentName:"li"},"File")," and then ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image showing the process of saving your work.",src:o(60071).Z,width:"378",height:"417"})),(0,n.kt)("h3",{id:"add-styling-to-your-code-component"},"Add styling to your code component"),(0,n.kt)("p",null,"Now we're going to be adding some basic styling to our component. Just to get a feel of what the process is like and how you can further customise code components."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Make sure you still have the ",(0,n.kt)("strong",{parentName:"li"},"ControlManifest.Input.xml")," file selected and then select ",(0,n.kt)("strong",{parentName:"li"},"New Folder"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image showing the process of adding a new folder in VS Code.",src:o(64372).Z,width:"330",height:"155"})),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Name the new folder ",(0,n.kt)("strong",{parentName:"li"},"css")," and then select the ",(0,n.kt)("strong",{parentName:"li"},"css")," folder you've created and select ",(0,n.kt)("strong",{parentName:"li"},"New File"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image showing the process of adding a new file in VS Code.",src:o(59744).Z,width:"298",height:"164"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Name the new file ",(0,n.kt)("strong",{parentName:"li"},"DynamicInputPCF.css")),(0,n.kt)("li",{parentName:"ol"},"Open DynamicInputPCF.css and paste the following CSS:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css"},".DynamicInputPCF textarea { \n    padding: 5px; \n    box-sizing: border-box;\n    width: 100%; \n}\n            \n.DynamicInputPCF textarea:focus, .DynamicInputPCF textarea:enabled:hover { \n    border: 2px solid black;\n} \n")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"File")," and select ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("h3",{id:"build-your-code-component"},"Build your code component"),(0,n.kt)("p",null,"In order to ensure that the right TypeScript types are generated to match the properties in your ControlManifest.xml document, we need to run a build on our component. "),(0,n.kt)("p",null,"Return to the terminal and perform a build b using the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,n.kt)("p",null,"Once the build is successful, you'll notice in the project folder, that the component is compiled into the ",(0,n.kt)("strong",{parentName:"p"},"out/controls/DynamicInputPCF")," directory. The results of this compilation are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"css")," folder"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"bundle.js"),"  - Bundled component source code"),(0,n.kt)("li",{parentName:"ul"},"and the ",(0,n.kt)("strong",{parentName:"li"},"ControlManifest.xml")," which is the actual component manifest file that is uploaded to the Microsoft Dataverse organization")),(0,n.kt)("p",null,"With those artifacts generated, we can now start implementing our component logic."),(0,n.kt)("h3",{id:"implement-components-logic"},"Implement Component's Logic"),(0,n.kt)("p",null,"Let's get straight into it. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the ",(0,n.kt)("strong",{parentName:"li"},"index.ts")," file and insert the following variables above the constructor method.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"// The PCF context object\nprivate context: ComponentFramework.Context<IInputs>;\n\n// The wrapper div element for the component\nprivate container: HTMLDivElement;\n\n/* The callback function to call whenever your code \nhas made a change to a bound or output property */\nprivate notifyOutputChanged: () => void;\n\n//Variable to track the height of the control\nheight: number; \n    \ntextarea: HTMLTextAreaElement; \ndefaultLoaded = false; \n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Find the ",(0,n.kt)("strong",{parentName:"li"},"init")," method and replace its contents with this:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"//Track all elements\nthis.container = container;\nthis.context = context;\nthis.notifyOutputChanged = notifyOutputChanged;\nthis.textarea = document.createElement(\"textarea\");\nthis.textarea.rows = 1;\nthis.textarea.style.resize = 'none';\nthis.textarea.style.overflowY = 'hidden';\nthis.textarea.oninput = this.onTextAreaInput;\nthis.textarea.onchange = this.onTextAreaChanged;\nthis.container.appendChild(this.textarea);\n")),(0,n.kt)("p",null,"After pasting the code above, you may have a couple of errors. No need to worry - we'll be defining a few methods, in a moment, which will clear these errors."),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Underneath the ",(0,n.kt)("strong",{parentName:"li"},"init")," method, add the following: ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"/* These methods are responsible for telling the framework \nthat there is a new value in the text input and then it \nstarts calculating the new height */\nonTextAreaInput = (): void => {\n    this.autoSizeTextArea();\n}\n\nonTextAreaChanged = (): void => {\n    this.notifyOutputChanged();\n}\n\nautoSizeTextArea(): void {\n    this.textarea.style.height = 'auto';\n    const newHeight = (this.textarea.scrollHeight) + 'px';\n    const heightChanged = newHeight !== this.textarea.style.height;\n    this.textarea.style.height = newHeight;\n    if (heightChanged) { this.notifyOutputChanged(); }\n}\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Look for the ",(0,n.kt)("strong",{parentName:"li"},"updateView")," method and add the following:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'const value = context.parameters.TextValue;\n    let disabled = context.mode.isControlDisabled;\n    let masked = false;\n    if (value && value.security) {\n        masked = !value.security.readable;\n        disabled = disabled || masked || !value.security.editable;\n    }\n\n// Update text value if input value changes\nif (!this.defaultLoaded || context.updatedProperties.indexOf("TextValue") > -1) {\n    this.defaultLoaded = true;\n    const newValue = masked ? "****" : value.raw as string;\n    this.textarea.value = newValue;\n    this.autoSizeTextArea();\n}\n')),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"And one of the last major things we need to do is find and update the ",(0,n.kt)("strong",{parentName:"li"},"getOutputs")," method with the following code:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"/* This provides the output/bound properties back to \nthe PCF after notifyOutputChanged() has been called. */\nconst  height = Number.parseInt(this.textarea.style.height);\nreturn {\n    TextValue:  this.textarea.value,\n    AutoHeightValue:  height\n}\n")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Go ahead and ",(0,n.kt)("strong",{parentName:"li"},"Save")," everything. ")),(0,n.kt)("h2",{id:"test-and-run-your-component"},"Test and Run your Component"),(0,n.kt)("p",null,"Now that we have configured and built out the component logic, let's give it a go! Now is a great time to test your component ",(0,n.kt)("em",{parentName:"p"},"before")," you import it into Power Apps. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Let's return to the ",(0,n.kt)("strong",{parentName:"li"},"Terminal")," and rebuild our component. ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,n.kt)("p",null,"If you've followed everything correctly, the build should succeed. If not, feel free to take some time and check if you've copied all code correctly. "),(0,n.kt)("p",null,"Now we get to run and test our component in a ",(0,n.kt)("em",{parentName:"p"},"test harness")," that simulates the Power Apps runtime, so you get to see how your component behaves. "),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Terminal")," once more, run the following command: ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,n.kt)("p",null,"A new browser window should automatically load the test harness. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image showing the Power Apps Test Harness",src:o(33444).Z,width:"1920",height:"929"})),(0,n.kt)("p",null,"Go ahead and write some text directly into the text input (1) on the right. Be sure to press the ",(0,n.kt)("strong",{parentName:"p"},"Enter")," key a couple of times to see the text input automatically resizing. You can also play with the pre-set width and height properties (2) to find how the text input behaves under various conditions. Also, you'll notice that the AutoHeightValue (3) dynamically changes as you're writing as well. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"An image showing the Power Apps Test Harness after changes",src:o(8445).Z,width:"1919",height:"923"})),(0,n.kt)("h2",{id:"where-to-from-here"},"Where to from here?"),(0,n.kt)("p",null,"At face value, it doesnt seem like much however I wanted to give you a just a taste of what is possible when professional developers use their skills and their tools to contribute to Power Platform Solutions. Once a code component is built and you've verified that it works. The next step is to create a solution package and import that into the Power Apps Environment."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/power-apps/developer/component-framework/import-custom-controls?WT.mc_id=javascript-82212-ninarasi"},"this article")," for guidance on how to package a code component and then when you want to add your code component to a Power App, you can read the guidance for ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/power-apps/developer/component-framework/component-framework-for-canvas-apps?WT.mc_id=javascript-82212-ninarasi"},"Canvas Apps")," and/or ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/power-apps/developer/component-framework/code-components-model-driven-apps?WT.mc_id=javascript-82212-ninarasi"},"Model-Driven Apps"),"."),(0,n.kt)("h2",{id:"exercise"},"Exercise"),(0,n.kt)("p",null,"Try the exercise in this ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/LCF/BuildMorePCF"},"learn module")," where you will get to learn EVEN MORE about code components. You'll be able to get details on how to address more complex scenarios as it applies to the PCF. What makes this exciting is that it covers how to use client frameworks such as React and Angular within a component, along with how to address scenarios such as file upload, localization, and integration with the Microsoft Dataverse Web API."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Exercise"),": Training - ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/LCF/BuildMorePCF"},"Use advanced features with Power Apps component framework")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Documentation"),": ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/LCF/PCFDocs"},"Power Apps Component Framework Overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Watch"),": ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/shows/the-low-code-revolution/?wt.mc_id=82054_collection_webpage_ece&ns-enrollment-type=Collection&ns-enrollment-id=8q5jhr1y0jeqj6?WT.mc_id=javascript-82212-ninarasi"},"The Low Code Revolution Show")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Watch")," all of the ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/live/4VK1CJYR2W4"},"Powerful Devs Conference"),"  sessions on demand to learn from experts how you, as a developer, can leverage the Power Platform to build applications faster and with far less effort."),(0,n.kt)("li",{parentName:"ul"},"Low Code February ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/users/nityan/collections/xz6ehr2mx031y0?WT.mc_id=javascript-82212-ninarasi"},"Learn Collection"),": Collection of resources to go from learning Power Platform Fundamentals, to understanding the Dataverse and working in Fusion Development teams.")),(0,n.kt)("p",null,"Also consider -"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Signing up for the free ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/devplan"},"Power Apps Developer Plan")," so you have access to the Power Platform."),(0,n.kt)("li",{parentName:"ul"},"Enrolling in the ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/challenge"},"Cloud Skills Challenge")," to skill up on key cloud technologies with free, self-guided learning courses, and start climbing the leaderboard!")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Campaign Banner",src:o(24849).Z,width:"1334",height:"560"})))}c.isMDXComponent=!0},52236:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/IMAGE4-b29cf3c5179a39f7b8700e805850221f.png"},43191:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Image1-16b4b335bc23851e831fc776875f86d0.png"},8445:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Image10-46df52739ad422ee5ec28d3150a2aad0.png"},68912:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Image2-aad149f5ae1e7ab80d6c19538b11f075.png"},73341:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Image3-152d40b5487b4bdfb50cf36d4d4abe5d.png"},37060:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Image5-d71a04df36b3043c044861153a5e5ecb.png"},60071:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Image6-18838ad7dd72ec7d7bd9a5bcb0881885.png"},64372:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Image7-41f15e7cc587dfbedf9da014981457de.png"},59744:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Image8-d37f1ca69947c4fc7524912cb9e8121c.png"},33444:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Image9-df3ec929ded1cb10e277054d09e45703.png"},17173:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Scrollbar-e8b31effbc57ecb55e1a4a54c03d846c.png"},99244:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/code-components-a964e847530867a5c8b9702ed8598045.gif"},10564:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/30-17-05c95333aea7db45e37e4823e21dacaa.png"},24849:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/30-banner-d9bab2b92d758942447a4cbc50aef715.png"}}]);