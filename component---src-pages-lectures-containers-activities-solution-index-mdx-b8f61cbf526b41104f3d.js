(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("NmYn"),l=a.n(i),o=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),m=a("QH2O"),g=a.n(m),p=a("qKvR"),u=function(e){var t,a=e.title,r=e.theme,n=e.tabs,i=void 0===n?[]:n;return Object(p.b)("div",{className:d()(g.a.pageHeader,(t={},t[g.a.withTabs]=i.length,t[g.a.darkMode]="dark"===r,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:g.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,r=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,i=n.baseUrl,l=n.subDirectory,b=i+"/edit/"+n.branch+l+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},k=a("FCXl"),x=a("dI71"),N=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),i=n===r,b=new RegExp(r+"/?(#.*)?$"),c=a.replace(b,n);return Object(p.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(p.b)(o.Link,{className:N.link,to:""+c},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:N.list},n))))))},t}(n.a.Component),h=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,m=t.titleType,g=s.tabs,j=s.title,x=s.theme,N=s.description,f=s.keywords,w=Object(T.a)().interiorTheme,P=Object(o.useStaticQuery)("2456312558").site.pathPrefix,y=P?r.pathname.replace(P,""):r.pathname,_=g?y.split("/").filter(Boolean).slice(-1)[0]||l()(g[0],{lower:!0}):"",I=x||w;return Object(p.b)(c.a,{tabs:g,homepage:!1,theme:I,pageTitle:j,pageDescription:N,pageKeywords:f,titleType:m},Object(p.b)(u,{title:n?Object(p.b)(n,null):j,label:"label",tabs:g,theme:I}),g&&Object(p.b)(v,{slug:y,tabs:g,currentTab:_}),Object(p.b)(h.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d})),Object(p.b)(k.a,{pageContext:t,location:r,slug:y,tabs:g,currentTab:_}),Object(p.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},sXSn:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));var r=a("wx14"),n=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("013z"),o=(a("qKvR"),{}),b={_frontmatter:o},c=l.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)(c,Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is the solution to challenge ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../"}),"Docker lab")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"docker -v"),Object(i.b)("li",{parentName:"ol"},"docker run hello-world"),Object(i.b)("li",{parentName:"ol"},"docker images"),Object(i.b)("li",{parentName:"ol"},"docker build -t <image_name>:<image_tag> ."),Object(i.b)("li",{parentName:"ol"},"docker images"),Object(i.b)("li",{parentName:"ol"},"docker run -p 9080:9080 -d —name greeting greeting:v1.0.0"),Object(i.b)("li",{parentName:"ol"},"docker ps"),Object(i.b)("li",{parentName:"ol"},"docker inspect greeting"),Object(i.b)("li",{parentName:"ol"},"docker logs greeting"),Object(i.b)("li",{parentName:"ol"},"docker login"),Object(i.b)("li",{parentName:"ol"},"docker tag greeting:v1.0.0 <repository_name>/greeting:v1.0.0"),Object(i.b)("li",{parentName:"ol"},"docker push <repository_name>/greeting:v1.0.0"),Object(i.b)("li",{parentName:"ol"},"docker stop greeting"),Object(i.b)("li",{parentName:"ol"},"docker rm greeting"),Object(i.b)("li",{parentName:"ol"},"docker rmi <image_id>"),Object(i.b)("li",{parentName:"ol"},"docker pull <repository_name>/greeting:v1.0.0"),Object(i.b)("li",{parentName:"ol"},"docker build -f Dockerfile.multistage -t greeting:v2.0.0 ."),Object(i.b)("li",{parentName:"ol"},"docker run -p 9080:9080 -d —name greeting_multistage greeting:v2.0.0"),Object(i.b)("li",{parentName:"ol"},"docker ps"),Object(i.b)("li",{parentName:"ol"},"docker inspect greeting_multistage"),Object(i.b)("li",{parentName:"ol"},"docker logs greeting_multistage"),Object(i.b)("li",{parentName:"ol"},"docker stop greeting_multistage"),Object(i.b)("li",{parentName:"ol"},"docker rm greeting_multistage "),Object(i.b)("li",{parentName:"ol"},"docker rmi <image_id>"),Object(i.b)("li",{parentName:"ol"},"docker images or docker images | grep greeting")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-containers-activities-solution-index-mdx-b8f61cbf526b41104f3d.js.map