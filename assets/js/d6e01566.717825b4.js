"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6662],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,k=s["".concat(p,".").concat(u)]||s[u]||c[u]||r;return n?o.createElement(k,i(i({ref:t},m),{},{components:n})):o.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(4137));const r={sidebar_position:1,title:"1. Build Code Component"},i=void 0,l={unversionedId:"prodev-3/step-1",id:"prodev-3/step-1",title:"1. Build Code Component",description:"Working as part of the PrioritZ fusion team you have been asked to create a Power Apps code component to allow drag and drop priority ranking of items in the PrioritZ Ask Power App.",source:"@site/docs/prodev-3/step-1.md",sourceDirName:"prodev-3",slug:"/prodev-3/step-1",permalink:"/Low-Code/docs/prodev-3/step-1",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"1. Build Code Component"},sidebar:"tutorialSidebar",previous:{title:"4. Test Power Platform CLI",permalink:"/Low-Code/docs/prodev-2/step-4"},next:{title:"2. Implement Component Logic",permalink:"/Low-Code/docs/prodev-3/step-2"}},p={},d=[{value:"1.1 Create the code component",id:"11-create-the-code-component",level:2},{value:"1.2 Review and run the code component",id:"12-review-and-run-the-code-component",level:2}],m={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"LAB SCENARIO",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Working as part of the PrioritZ fusion team you have been asked to create a Power Apps code component to allow drag and drop priority ranking of items in the PrioritZ Ask Power App.\nYou will build a code component using the React JavaScript framework.\nThe code component approach is used to address the requirement because there isn\u2019t a similar control already built-in."),(0,a.kt)("p",{parentName:"admonition"},"You have collaborated with the app makers to identify the following properties to allow them to configure the code component in the app:"),(0,a.kt)("p",{parentName:"admonition"},"\u2022\tBackgroundColor"),(0,a.kt)("p",{parentName:"admonition"},"\u2022\tDragBackgroundColor"),(0,a.kt)("p",{parentName:"admonition"},"\u2022\tItemHeight"),(0,a.kt)("p",{parentName:"admonition"},"\u2022\tFontSize"),(0,a.kt)("p",{parentName:"admonition"},"\u2022\tFontColor"),(0,a.kt)("p",{parentName:"admonition"},"The PrioritZ Ask app will prepare a collection of the items to rank that will be bound as the dataset for the code component.",(0,a.kt)("br",{parentName:"p"}),"\n","When an item is dragged and dropped the code component will raise an OnSelect event that will be handled by the hosting app.",(0,a.kt)("br",{parentName:"p"}),"\n","The hosting app will update the collection items with their new rank.  The code component will be stateless."),(0,a.kt)("p",{parentName:"admonition"},"In ",(0,a.kt)("strong",{parentName:"p"},"Exercise 1")," you will build the code component.")),(0,a.kt)("h2",{id:"11-create-the-code-component"},"1.1 Create the code component"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Start Visual Studio Code."),(0,a.kt)("li",{parentName:"ol"},"Select the Power Platform tab and make sure your Dev Auth profile is selected. ")),(0,a.kt)("p",null,"\ud83e\udd16 Note: The Power Platform tab is only available if you installed the Power Platform extension as explained in lab 0 and configured it in lab 1."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Terminal")," and select ",(0,a.kt)("strong",{parentName:"p"},"New Terminal"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Terminal window, make a new directory by running the command below."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"md PrioritZDnDRanking\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Run the command below to switch to the ",(0,a.kt)("inlineCode",{parentName:"li"},"PrioritZDnRanking")," directory you just created.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd PrioritZDnDRanking\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"You should now be in the directory you created. Create a new component project and install dependencies by running the commands below. This will create the initial files for your code component.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pac pcf init -ns ContosoCoffee --name PrioritZDnDRanking --template dataset --framework react --run-npm-install\n")),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"\ud83e\udd16 Note: The component framework project should be created successfully.")),(0,a.kt)("h2",{id:"12-review-and-run-the-code-component"},"1.2 Review and run the code component"),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"In the terminal, run the command below to open the project in your current Visual Studio Code session.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"code -a .\n")),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Review the created code component files.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Expand the ",(0,a.kt)("inlineCode",{parentName:"p"},"PrioritZDnDRanking")," folder and then expand the component folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"ControlManifest.Input.xml")," file. The manifest is the metadata file that defines the component including the properties exposed to the hosting app.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"ControlManifest.Input.xml")," file locate data-set XML element.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"display-name-key")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"items"),". This defines the property the app will bind to a collection of items.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the following properties after the closing tag of the data-set element ",(0,a.kt)("inlineCode",{parentName:"p"},"</data-set>"),"."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<property name="BackgroundColor" display-name-key="Background color" usage="input" of-type="SingleLine.Text" default-value="#F3F2F1"/>\n<property name="DragBackgroundColor" display-name-key="Drag background color" usage="input" of-type="SingleLine.Text" default-value="lightgreen"/>\n<property name="ItemHeight" display-name-key="Item height" usage="input" of-type="Whole.None" default-value="32"/>\n<property name="FontSize" display-name-key="Font size" usage="input" of-type="Whole.None" default-value="12"/>\n<property name="FontColor" display-name-key="Font color" usage="input" of-type="SingleLine.Text" default-value="#333333"/>\n')),(0,a.kt)("ol",{start:15},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Locate ",(0,a.kt)("inlineCode",{parentName:"p"},"<resources>")," and uncomment ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," resource. This will ensure that our styles will be bundled with the code component when it is deployed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Notice the following two resources. This declares the component\u2019s dependency on these two libraries. This is a result of specifying \u2013framework React on initialization."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<platform-library name="React" version="16.8.6" />\n<platform-library name="Fluent" version="8.29.0" />\n')),(0,a.kt)("ol",{start:17},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"File")," and select ",(0,a.kt)("strong",{parentName:"p"},"Save All"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure you still have the ",(0,a.kt)("inlineCode",{parentName:"p"},"ControlManifest.Input.xml")," file selected and then click ",(0,a.kt)("strong",{parentName:"p"},"New Folder"),". ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Name the new folder ",(0,a.kt)("inlineCode",{parentName:"p"},"css"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the new ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," folder you created and then click New File")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Name the new file ",(0,a.kt)("inlineCode",{parentName:"p"},"PrioritZDnDRanking.css"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the following css into the ",(0,a.kt)("inlineCode",{parentName:"p"},"PrioritZDnDRanking.css")," file."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".prioritydnd-scroll-container {\n        box-sizing: border-box;\n        padding: 2px;\n        overflow-y: auto;\n        overflow-x: hidden;\n        position: relative;\n    }\n    \n    .prioritydnd-item-container {\n        user-select: none;\n        display: flex;\n        align-items: center;\n    }\n    \n    .prioritydnd-item-column {\n        margin: 8px;\n}\n")),(0,a.kt)("ol",{start:23},(0,a.kt)("li",{parentName:"ol"},"The file should now look like the following."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"File")," and save your changes.")))}s.isMDXComponent=!0}}]);