(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),o=a.n(b),i=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),u=a.n(s),d=a("QH2O"),p=a.n(d),m=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(m.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=b.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,o=r.subDirectory,l=b+"/edit/"+r.branch+o+"/src/pages"+t;return b?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:l},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("dI71"),f=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0,strict:!0}),b=r===n,l=new RegExp(n+"/?(#.*)?$"),c=a.replace(l,r);return Object(m.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(m.b)(i.Link,{className:f.link,to:""+c},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},r))))))},t}(r.a.Component),v=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,u=t.relativePagePath,d=t.titleType,p=s.tabs,j=s.title,N=s.theme,f=s.description,y=s.keywords,k=Object(T.a)().interiorTheme,w=Object(i.useStaticQuery)("2456312558").site.pathPrefix,I=w?n.pathname.replace(w,""):n.pathname,C=p?I.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",P=N||k;return Object(m.b)(c.a,{tabs:p,homepage:!1,theme:P,pageTitle:j,pageDescription:f,pageKeywords:y,titleType:d},Object(m.b)(O,{title:r?Object(m.b)(r,null):j,label:"label",tabs:p,theme:P}),p&&Object(m.b)(x,{slug:I,tabs:p,currentTab:C}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:u})),Object(m.b)(g.a,{pageContext:t,location:n,slug:I,tabs:p,currentTab:C}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I4LG:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),o=a("013z"),i=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)}},c=l("AnchorLinks"),s=l("AnchorLink"),u=l("CardGroup"),d=l("MiniCard"),p={_frontmatter:i},m=o.a;function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(m,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(c,{small:!0,mdxType:"AnchorLinks"},Object(b.b)(s,{mdxType:"AnchorLink"},"Continuous Integration"),Object(b.b)(s,{mdxType:"AnchorLink"},"References"),Object(b.b)(s,{mdxType:"AnchorLink"},"Activities")),Object(b.b)("h2",null,"Continuous Integration"),Object(b.b)("p",null,"Continuous Integration, Delivery, and Deployment are important devOps practices and we often hear a lot about them. These processes are valuable and ensures that the software is up to date timely."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Continuous Integration")," is an automation process which allows developers to integrate their work into a repository. When a developer pushes his work into the source code repository, it ensures that the software continues to work properly. It helps to enable collaborative development across the teams and also helps to identify the integration bugs sooner."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Continuous Delivery")," comes after Continuous Integration. It prepares the code for release. It automates the steps that are needed to deploy a build."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Continuous Deployment")," is the final step which succeeds Continuous Delivery. It automatically deploys the code whenever a code change is done. Entire process of deployment is automated.")),Object(b.b)("h2",null,"Resources"),Object(b.b)(u,{mdxType:"CardGroup"},Object(b.b)(d,{title:"Tekton Overview",href:"/slides/04-Tekton-Overview.pdf",mdxType:"MiniCard"}),Object(b.b)(d,{title:"IBM Cloud DevOps with Tekton",href:"/slides/10-IBM-Cloud-DevOps.pdf",mdxType:"MiniCard"})),Object(b.b)("h2",null,"Activities"),Object(b.b)("p",null,"The continuous integration activities focus around Tekton the integration platform. These labs will show you how to build pipelines and test your code before deployment."),Object(b.b)("p",null,"These tasks assume that you have:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Reviewed the continuous integration concept page."),Object(b.b)("li",{parentName:"ul"},"Installed Tekton into your cluster.")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Task"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Link"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Time"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"}," Walkthroughs "))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deploying Applications From Source"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Using OpenShift 4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://learn.openshift.com/introduction/deploying-python/"}),"S2I")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 min")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tekton Lab"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Using Tekton to build container images"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../continuous-integration/activities/tekton/openshift"}),"Tekton")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 hour")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IBM Cloud DevOps"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Using IBM Cloud ToolChain with Tekton"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../continuous-integration/activities/ibm-toolchain"}),"Tekton on IBM Cloud")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 hour")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Jenkins Lab"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Using Jenkins to build and deploy applications."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../continuous-integration/activities/jenkins/openshift"}),"Jenkins")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 hour")))),Object(b.b)("p",null,"Once you have completed these tasks, you will have an understanding of continuous integration and how to use Tekton to build a pipeline."))}O.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-lectures-continuous-integration-index-mdx-fcc0e01cae47a8f25f95.js.map