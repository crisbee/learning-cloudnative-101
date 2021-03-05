(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),c=a("NmYn"),b=a.n(c),r=a("Wbzz"),i=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),p=a.n(s),u=a("QH2O"),m=a.n(u),d=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,l=e.tabs,c=void 0===l?[]:l;return Object(d.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,c=l.baseUrl,b=l.subDirectory,i=c+"/edit/"+l.branch+b+"/src/pages"+t;return c?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:i},"Edit this page on GitHub"))):null},g=a("FCXl"),v=a("dI71"),N=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var t,l=b()(e,{lower:!0,strict:!0}),c=l===n,i=new RegExp(n+"/?(#.*)?$"),o=a.replace(i,l);return Object(d.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=c,t),N.listItem)},Object(d.b)(r.Link,{className:N.link,to:""+o},e))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:N.list},l))))))},t}(l.a.Component),f=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,c=t.frontmatter,s=void 0===c?{}:c,p=t.relativePagePath,u=t.titleType,m=s.tabs,O=s.title,v=s.theme,N=s.description,y=s.keywords,k=Object(w.a)().interiorTheme,T=Object(r.useStaticQuery)("2456312558").site.pathPrefix,A=T?n.pathname.replace(T,""):n.pathname,S=m?A.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",P=v||k;return Object(d.b)(o.a,{tabs:m,homepage:!1,theme:P,pageTitle:O,pageDescription:N,pageKeywords:y,titleType:u},Object(d.b)(j,{title:l?Object(d.b)(l,null):O,label:"label",tabs:m,theme:P}),m&&Object(d.b)(x,{slug:A,tabs:m,currentTab:S}),Object(d.b)(f.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:p})),Object(d.b)(g.a,{pageContext:t,location:n,slug:A,tabs:m,currentTab:S}),Object(d.b)(i.a,null))}},"6sdy":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return s}));var n=a("wx14"),l=a("zLVn"),c=(a("q1tI"),a("7ljp")),b=a("013z"),r=(a("qKvR"),{}),i={_frontmatter:r},o=b.a;function s(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(c.b)(o,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",null,"Prerequisite"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Configure the Sysdig Agent on a kubernetes cluster, you can use one of the labs in this bootcamp located ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/monitoring/sysdig/#activities"}),"here"))),Object(c.b)("h3",null,"Deploy java application enable with prometheus"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Review the instrumented java application ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/learning-cloudnative-101/blob/master/examples/monitoring/prometheus/java/src/main/java/Main.java"}),"Main.java"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Creagte a namespace to deploy the application"))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"kubectl create ns dev\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Deploy the following java application")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'cat <<EOF | kubectl -n dev apply -f -\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: prometheus-java-app\nspec:\n  selector:\n    matchLabels:\n      app: prometheus-java-app\n  template:\n    metadata:\n      labels:\n        app: prometheus-java-app\n      annotations:\n        prometheus.io/scrape: "true"\n        prometheus.io/path: "/prometheus"\n        prometheus.io/port: "8080"\n    spec:\n      containers:\n        - name: prometheus-java-app\n          image: docker.io/ibmcase/prometheus-java\nEOF\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Expose java application service")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"kubectl -n dev create svc nodeport prometheus-java-app --tcp=80:80 --tcp 8080:8080\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Deploy the following java application")),Object(c.b)("h3",null,"Test the application"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Expose application web service on local port 8000, and prometheus on 8080, each command on a new terminal")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"kubectl -n dev port-forward service/prometheus-java-app 8000:80\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"kubectl -n dev port-forward service/prometheus-java-app 8080:8080\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Send http request to the web service")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"while true; do sleep 1; curl http://localhost:8000 -si | head -1 ; done\n")),Object(c.b)("p",null,"Output looks like this"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"HTTP/1.1 200 OK\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Query prometheus endpoint")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"curl http://localhost:8080/prometheus\n")),Object(c.b)("p",null,"Output looks like this"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.\n# TYPE process_cpu_seconds_total counter\nprocess_cpu_seconds_total 1.39\n# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.\n")),Object(c.b)("h2",null,"Java Prometheus Metrics in Sysdig"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Open Sysdig"),Object(c.b)("li",{parentName:"ul"},"Select Explore"),Object(c.b)("li",{parentName:"ul"},"Select Deployments"),Object(c.b)("li",{parentName:"ul"},"Select ",Object(c.b)("inlineCode",{parentName:"li"},"dev")," namespace"),Object(c.b)("li",{parentName:"ul"},"Select deployment ",Object(c.b)("inlineCode",{parentName:"li"},"prometheus-java-app")),Object(c.b)("li",{parentName:"ul"},"Select from drop down metrics, select Prometheus"),Object(c.b)("li",{parentName:"ul"},"Select metrics collected start with ",Object(c.b)("inlineCode",{parentName:"li"},"jvm_")," or ",Object(c.b)("inlineCode",{parentName:"li"},"java_")," for example ",Object(c.b)("inlineCode",{parentName:"li"},"java_my_counter"))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"84.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAABYlAAAWJQFJUiTwAAACLUlEQVQ4y4VT3WrUQBSeh5BeiFqwiCiIWKHFokjVUq/7NH0E72uxutRqa1frD/gmXqkXpcjSTTabZJNMksnPZHLGL8mm7toVP8LhzJnznb+cYQv317deH0ileBiJJBFCpGmaAen/wS7dfri5/cLK4hPLtEVkpTHYURSFYZhLSURlDapxppeqTDLJFpbWtve6WuuAc1kUqiwbppjAH0uSoCKRJlxEbpCzxScb+0dfQeaco5KiRp7npHWW5ygfR0iQpUTwAmkLpTKliBS7svjo+V4XCXt90xzaHudNhQinGzmpTAPk1c7BR2gDy0JVZd1Y5ZullCaQujrSX3wcqCjY/N3Hu4efcbZtB1VVFwiQpjqOSErNfe3aJGIdeDrPtYh0IhAIcWFkl++sdt5VmTGNJmqJfgJf+x7Bz3N1yAkhLFMnifZHsFdXIoaRXbz14NX+ETiY9LikQpJra5mTbSF/U2SVMM+qawSyLVIFxSGbu3Fv5+2HKTKahAfISjWtVvOjtm2Ew8xrtxnkaj5oEvnbOdO5aTf/Y1ZmfKoYV9u6ziATsbmbKy+nyUrhr5eTnH+SL1xf3nnz/oxM5zwm0RjLFmx+aa1z+GmSjBUOAmw6ly2wrZBZDeiqBbu68nS3+6WaIh4itgIvJAgMw3Acx/d96HgVDRkSyy/rpzZez2vL68+2Oqem9e37zx/HJ8e/egNnZNhOzxz2hw4+w3YNZ3Q6rCwD1+vbjjXyeoMh7L8B3fumklDFt0oAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(c.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"java-metrics",title:"java-metrics",src:"/static/d5158492f1755fdd3ebb267aab304add/3cbba/java_my_counter.png",srcSet:["/static/d5158492f1755fdd3ebb267aab304add/7fc1e/java_my_counter.png 288w","/static/d5158492f1755fdd3ebb267aab304add/a5df1/java_my_counter.png 576w","/static/d5158492f1755fdd3ebb267aab304add/3cbba/java_my_counter.png 1152w","/static/d5158492f1755fdd3ebb267aab304add/0b124/java_my_counter.png 1728w","/static/d5158492f1755fdd3ebb267aab304add/7d560/java_my_counter.png 1994w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(c.b)("h2",null,"References"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Sysdig Blog Prometheus metrics / OpenMetrics code instrumentation (",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://sysdig.com/blog/prometheus-metrics/"}),"https://sysdig.com/blog/prometheus-metrics/"),")")))}s.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-electives-monitoring-sysdig-activities-prometheus-java-mdx-d23ea927e93ccc304ceb.js.map