(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("NmYn"),r=n.n(i),l=n("Wbzz"),c=n("Xrax"),b=n("k4MR"),s=n("TSYQ"),u=n.n(s),p=n("QH2O"),d=n.n(p),m=n("qKvR"),h=function(e){var t,n=e.title,a=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(m.b)("div",{className:u()(d.a.pageHeader,(t={},t[d.a.withTabs]=i.length,t[d.a.darkMode]="dark"===a,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},n)))))},g=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,a=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||a,i=o.baseUrl,r=o.subDirectory,c=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},j=n("FCXl"),f=n("dI71"),y=n("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=r()(e,{lower:!0,strict:!0}),i=o===a,c=new RegExp(a+"/?(#.*)?$"),b=n.replace(c,o);return Object(m.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=i,t),y.listItem)},Object(m.b)(l.Link,{className:y.link,to:""+b},e))}));return Object(m.b)("div",{className:y.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:y.list},o))))))},t}(o.a.Component),N=n("MjG9"),k=n("CzIb");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,o=e.Title,i=t.frontmatter,s=void 0===i?{}:i,u=t.relativePagePath,p=t.titleType,d=s.tabs,g=s.title,f=s.theme,y=s.description,v=s.keywords,T=Object(k.a)().interiorTheme,x=Object(l.useStaticQuery)("2456312558").site.pathPrefix,I=x?a.pathname.replace(x,""):a.pathname,C=d?I.split("/").filter(Boolean).slice(-1)[0]||r()(d[0],{lower:!0}):"",_=f||T;return Object(m.b)(b.a,{tabs:d,homepage:!1,theme:_,pageTitle:g,pageDescription:y,pageKeywords:v,titleType:p},Object(m.b)(h,{title:o?Object(m.b)(o,null):g,label:"label",tabs:d,theme:_}),d&&Object(m.b)(w,{slug:I,tabs:d,currentTab:C}),Object(m.b)(N.a,{padded:!0},n,Object(m.b)(O,{relativePagePath:u})),Object(m.b)(j.a,{pageContext:t,location:a,slug:I,tabs:d,currentTab:C}),Object(m.b)(c.a,null))}},"2/J+":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n("wx14"),o=n("zLVn"),i=(n("q1tI"),n("7ljp")),r=n("013z"),l=(n("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=c("AnchorLinks"),s=c("AnchorLink"),u={_frontmatter:l},p=r.a;function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"AnchorLinks"},Object(i.b)(s,{mdxType:"AnchorLink"},"Introduction"),Object(i.b)(s,{mdxType:"AnchorLink"},"Prerequisites"),Object(i.b)(s,{mdxType:"AnchorLink"},"Working with docker"),Object(i.b)(s,{mdxType:"AnchorLink"},"Get the sample application"),Object(i.b)(s,{mdxType:"AnchorLink"},"Run the application on Docker"),Object(i.b)(b,{small:!0,mdxType:"AnchorLinks"},Object(i.b)(s,{mdxType:"AnchorLink"},"Build the docker image"),Object(i.b)(s,{mdxType:"AnchorLink"},"Run the docker container"),Object(i.b)(s,{mdxType:"AnchorLink"},"Access the application"),Object(i.b)(s,{mdxType:"AnchorLink"},"Pushing an image to a Registry"),Object(i.b)(s,{mdxType:"AnchorLink"},"Clean Up"),Object(i.b)(s,{mdxType:"AnchorLink"},"Pulling an image from the registry")),Object(i.b)(s,{mdxType:"AnchorLink"},"Conclusion")),Object(i.b)("h2",null,"Introduction"),Object(i.b)("p",null,"In this lab, you will learn about how to use docker and how to run applications using docker."),Object(i.b)("h2",null,"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://hub.docker.com/"}),"DockerHub account"),". This account is needed to push images to docker registry. Also create a repository following the instructions ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/docker-hub/repos/"}),"here"),"."),Object(i.b)("li",{parentName:"ul"},"You need to install ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.docker.com/"}),"Docker")," in your environment. Follow the instructions ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/docker-for-mac/install/"}),"here")," to install it on Mac and ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/docker-for-windows/install/"}),"here")," to install it on Windows.")),Object(i.b)("h2",null,"Working with docker"),Object(i.b)("p",null,"Before proceeding, make sure docker is properly installed on your system. "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Please verify your Docker by looking up the version.")),Object(i.b)("p",null,"If it is installed, you will see a version number something similar to below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ <command>\nDocker version 19.03.0-beta3, build c55e026\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"}," Running a hello-world container ")),Object(i.b)("p",null,"Let us start with a ",Object(i.b)("inlineCode",{parentName:"p"},"hello-world")," container. "),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"run a ",Object(i.b)("inlineCode",{parentName:"li"},"hello-world")," container.")),Object(i.b)("p",null,"If it is successfully run, you will see something like below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ <command>\nUnable to find image 'hello-world:latest' locally\nlatest: Pulling from library/hello-world\n1b930d010525: Pull complete\nDigest: sha256:41a65640635299bab090f783209c1e3a3f11934cf7756b09cb2f1e02147c6ed8\nStatus: Downloaded newer image for hello-world:latest\n\nHello from Docker!\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n 1. The Docker client contacted the Docker daemon.\n 2. The Docker daemon pulled the \"hello-world\" image from the Docker Hub.\n    (amd64)\n 3. The Docker daemon created a new container from that image which runs the\n    executable that produces the output you are currently reading.\n 4. The Docker daemon streamed that output to the Docker client, which sent it\n    to your terminal.\n\nTo try something more ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu bash\n\nShare images, automate workflows, and more with a free Docker ID:\n https://hub.docker.com/\n\nFor more examples and ideas, visit:\n https://docs.docker.com/get-started/\n")),Object(i.b)("p",null,"Since, ",Object(i.b)("inlineCode",{parentName:"p"},"hello-world")," image is not existing locally, it is pulled from ",Object(i.b)("inlineCode",{parentName:"p"},"library/hello-world"),". But if it is already existing, docker will not pull it every time but rather use the existing one."),Object(i.b)("p",null,"This image is pulled from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/_/hello-world"}),"https://hub.docker.com/_/hello-world"),". Docker hub is a repository used to store docker images. Similarly, you can use your own registries to store images. For example, IBM Cloud provides you a container registry."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Verifying the hello-world image")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Now verify if an image is existing in your system locally.")),Object(i.b)("p",null,"You will then see something like below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ <command>\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nhello-world         latest              fce289e99eb9        5 months ago        1.84kB\n")),Object(i.b)("h2",null,"Get the sample application"),Object(i.b)("p",null,"To get the sample application, you will need to clone it from github."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Clone the sample app\ngit clone https://github.com/ibm-cloud-architecture/cloudnative_sample_app.git\n\n# Go to the project's root folder\ncd cloudnative_sample_app/\n")),Object(i.b)("h2",null,"Run the application on Docker"),Object(i.b)("h3",null,"Build the docker image"),Object(i.b)("p",null,"Let’s take look at the docker file before building it."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"FROM maven:3.3-jdk-8 as builder\n\nCOPY . .\nRUN mvn clean install\n\nFROM openliberty/open-liberty:springBoot2-ubi-min as staging\n\nCOPY --chown=1001:0 --from=builder /target/cloudnativesampleapp-1.0-SNAPSHOT.jar /config/app.jar\nRUN springBootUtility thin \\\n    --sourceAppPath=/config/app.jar \\\n    --targetThinAppPath=/config/dropins/spring/thinClinic.jar \\\n    --targetLibCachePath=/opt/ol/wlp/usr/shared/resources/lib.index.cache\n\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Using the ",Object(i.b)("inlineCode",{parentName:"li"},"FROM")," instruction, we provide the name and tag of an image that should be used as our base. This must always be the first instruction in the Dockerfile."),Object(i.b)("li",{parentName:"ul"},"Using ",Object(i.b)("inlineCode",{parentName:"li"},"COPY")," instruction, we copy new contents from the source filesystem to the container filesystem."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RUN")," instruction executes the commands.")),Object(i.b)("p",null,"This Dockerfile leverages multi-stage builds, which lets you create multiple stages in your Dockerfile to do certain tasks."),Object(i.b)("p",null,"In our case, we have two stages."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The first one uses ",Object(i.b)("inlineCode",{parentName:"li"},"maven:3.3-jdk-8")," as its base image to download and build the project and its dependencies using Maven."),Object(i.b)("li",{parentName:"ul"},"The second stage uses ",Object(i.b)("inlineCode",{parentName:"li"},"openliberty/open-liberty:springBoot2-ubi-min")," as its base image to run the compiled code from the previous stage.")),Object(i.b)("p",null,"The advantage of using the multi-stage builds approach is that the resulting image only uses the base image of the last stage. Meaning that in our case, we will only end up with the ",Object(i.b)("inlineCode",{parentName:"p"},"openliberty/open-liberty:springBoot2-ubi-min")," as our base image, which is much tinier than having an image that has both Maven and the JRE."),Object(i.b)("p",null,"By using the multi-stage builds approach when it makes sense to use it, you will end up with much lighter and easier to maintain images, which can save you space on your Docker Registry. Also, having tinier images usually means less resource consumption on your worker nodes, which can result cost-savings."),Object(i.b)("p",null,"Once, you have the docker file ready, the next step is to build it. The ",Object(i.b)("inlineCode",{parentName:"p"},"build")," command allows you to build a docker image which you can later run as a container."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Build the docker file with the ",Object(i.b)("inlineCode",{parentName:"li"},"image_name")," of ",Object(i.b)("inlineCode",{parentName:"li"},"greeting")," and give it a ",Object(i.b)("inlineCode",{parentName:"li"},"image_tag")," of ",Object(i.b)("inlineCode",{parentName:"li"},"v1.0.0")," and build it using the current context.")),Object(i.b)("p",null,"You will see something like below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ <command>\nSending build context to Docker daemon  22.17MB\nStep 1/6 : FROM maven:3.3-jdk-8 as builder\n ---\x3e 9997d8483b2f\nStep 2/6 : COPY . .\n ---\x3e c198e3e54023\nStep 3/6 : RUN mvn clean install\n ---\x3e Running in 24378df7f87b\n[INFO] Scanning for projects...\n.\n.\n.\n[INFO] Installing /target/cloudnativesampleapp-1.0-SNAPSHOT.jar to /root/.m2/repository/projects/cloudnativesampleapp/1.0-SNAPSHOT/cloudnativesampleapp-1.0-SNAPSHOT.jar\n[INFO] Installing /pom.xml to /root/.m2/repository/projects/cloudnativesampleapp/1.0-SNAPSHOT/cloudnativesampleapp-1.0-SNAPSHOT.pom\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time: 44.619 s\n[INFO] Finished at: 2020-04-06T16:07:04+00:00\n[INFO] Final Memory: 38M/385M\n[INFO] ------------------------------------------------------------------------\nRemoving intermediate container 24378df7f87b\n ---\x3e cc5620334e1b\nStep 4/6 : FROM openliberty/open-liberty:springBoot2-ubi-min as staging\n ---\x3e 021530b0b3cb\nStep 5/6 : COPY --chown=1001:0 --from=builder /target/cloudnativesampleapp-1.0-SNAPSHOT.jar /config/app.jar\n ---\x3e dbc81e5f4691\nStep 6/6 : RUN springBootUtility thin     --sourceAppPath=/config/app.jar     --targetThinAppPath=/config/dropins/spring/thinClinic.jar     --targetLibCachePath=/opt/ol/wlp/usr/shared/resources/lib.index.cache\n ---\x3e Running in 8ea80b5863cb\nCreating a thin application from: /config/app.jar\nLibrary cache: /opt/ol/wlp/usr/shared/resources/lib.index.cache\nThin application: /config/dropins/spring/thinClinic.jar\nRemoving intermediate container 8ea80b5863cb\n ---\x3e a935a129dcb2\nSuccessfully built a935a129dcb2\nSuccessfully tagged greeting:v1.0.0\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Next, verify your newly built image")),Object(i.b)("p",null,"The output will be as follows."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ <command>\nREPOSITORY                           TAG                   IMAGE ID            CREATED             SIZE\ngreeting                             v1.0.0                89bd7032fdee        51 seconds ago      537MB\nopenliberty/open-liberty             springBoot2-ubi-min   bcfcb2c5ce16        6 days ago          480MB\nhello-world                          latest                f9cad508cb4c        5 months ago        1.84kB\n")),Object(i.b)("h3",null,"Run the docker container"),Object(i.b)("p",null,"Now let’s try running the docker container. Run it with the following parameters:"),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Expose port ",Object(i.b)("inlineCode",{parentName:"li"},"9080"),". Run it in the background in detached mode. Give the container the name of ",Object(i.b)("inlineCode",{parentName:"li"},"greeting"),".")),Object(i.b)("p",null,"Once done, you will have something like below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ <command>\nbc2dc95a6bd1f51a226b291999da9031f4443096c1462cb3fead3df36613b753\n")),Object(i.b)("p",null,"Also, docker cannot create two containers with the same name. If you try to run the same container having the same name again, you will see something like below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ <command>\ndocker: Error response from daemon: Conflict. The container name "/greeting" is already in use by container "a74b91789b29af6e7be92b30d0e68eef852bfb24336a44ef1485bb58becbd664". You have to remove (or rename) that container to be able to reuse that name.\nSee \'docker run --help\'.\n')),Object(i.b)("p",null,"It is a good practice to name your containers. Naming helps you to discover your service easily."),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"List all the running containers.")),Object(i.b)("p",null,"You will see something like below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ <command>\nCONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                              NAMES\nbc2dc95a6bd1        greeting:v1.0.0     "/opt/ol/helpers/run…"   18 minutes ago      Up 18 minutes       0.0.0.0:9080->9080/tcp, 9443/tcp   greeting\n')),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Let’s inspect the running container.")),Object(i.b)("p",null,"By inspecting the container, you can access detailed information about the container. By using this command, you get to know the details about network settings, volumes, configs, state etc."),Object(i.b)("p",null,"If we consider our container, it is as follows. You can see lot of information about the ",Object(i.b)("inlineCode",{parentName:"p"},"greeting")," container."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ <command>\n[\n    {\n        "Id": "bc2dc95a6bd1f51a226b291999da9031f4443096c1462cb3fead3df36613b753",\n        "Created": "2019-08-30T16:56:40.2081539Z",\n        "Path": "/opt/ol/helpers/runtime/docker-server.sh",\n        "Args": [\n            "/opt/ol/wlp/bin/server",\n            "run",\n            "defaultServer"\n        ],\n        "State": {\n            "Status": "running",\n            "Running": true,\n            "Paused": false,\n            "Restarting": false,\n            "OOMKilled": false,\n            "Dead": false,\n            "Pid": 27548,\n            "ExitCode": 0,\n            "Error": "",\n            "StartedAt": "2019-08-30T16:56:41.0927889Z",\n            "FinishedAt": "0001-01-01T00:00:00Z"\n        },\n        ..........\n        ..........\n        ..........\n    }\n]\n')),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"Get the logs of the ",Object(i.b)("inlineCode",{parentName:"li"},"greeting")," container.")),Object(i.b)("p",null,"It helps you to access the logs of your container. It allows you to debug the container if it fails. It also lets you to know what is happening with your application."),Object(i.b)("p",null,"At the end, you will see something like below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),".   ____          _            __ _ _\n/\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n\\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n'  |____| .__|_| |_|_| |_\\__, | / / / /\n=========|_|==============|___/=/_/_/_/\n:: Spring Boot ::        (v2.1.7.RELEASE)\n2019-08-30 16:57:01.494  INFO 1 --- [ecutor-thread-5] application.SBApplication                : Starting SBApplication on bc2dc95a6bd1 with PID 1 (/opt/ol/wlp/usr/servers/defaultServer/dropins/spring/thinClinic.jar started by default in /opt/ol/wlp/output/defaultServer)\n2019-08-30 16:57:01.601  INFO 1 --- [ecutor-thread-5] application.SBApplication                : No active profile set, falling back to default profiles: default\n[AUDIT   ] CWWKT0016I: Web application available (default_host): http://bc2dc95a6bd1:9080/\n2019-08-30 16:57:09.641  INFO 1 --- [cutor-thread-25] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 7672 ms\n2019-08-30 16:57:12.279  INFO 1 --- [ecutor-thread-5] o.s.b.a.e.web.EndpointLinksResolver      : Exposing 15 endpoint(s) beneath base path '/actuator'\n2019-08-30 16:57:12.974  INFO 1 --- [ecutor-thread-5] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'\n2019-08-30 16:57:13.860  INFO 1 --- [ecutor-thread-5] d.s.w.p.DocumentationPluginsBootstrapper : Context refreshed\n2019-08-30 16:57:13.961  INFO 1 --- [ecutor-thread-5] d.s.w.p.DocumentationPluginsBootstrapper : Found 1 custom documentation plugin(s)\n2019-08-30 16:57:14.020  INFO 1 --- [ecutor-thread-5] s.d.s.w.s.ApiListingReferenceScanner     : Scanning for api listing references\n2019-08-30 16:57:14.504  INFO 1 --- [ecutor-thread-5] application.SBApplication                : Started SBApplication in 17.584 seconds (JVM running for 33.368)\n[AUDIT   ] CWWKZ0001I: Application thinClinic started in 21.090 seconds.\n[AUDIT   ] CWWKF0012I: The server installed the following features: [el-3.0, jsp-2.3, servlet-4.0, springBoot-2.0, ssl-1.0, transportSecurity-1.0, websocket-1.1].\n[AUDIT   ] CWWKF0011I: The defaultServer server is ready to run a smarter planet. The defaultServer server started in 33.103 seconds.\n")),Object(i.b)("p",null,"This shows that the Spring Boot application is successfully started."),Object(i.b)("h3",null,"Access the application"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To access the application, open the browser and access http://localhost:9080/greeting?name=John.")),Object(i.b)("p",null,"You will see something like below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'{"id":2,"content":"Welcome to Cloudnative bootcamp !!! Hello, John :)"}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Container Image Registry")),Object(i.b)("p",null,"Container Image Registry is a place where you can store the container images. They can be public or private registries. They can be hosted by third party as well. In this lab, we are using DockerHub."),Object(i.b)("h3",null,"Pushing an image to a Registry"),Object(i.b)("p",null,"Let us now push the image to docker hub registry. Before pushing the image to the registry, one needs to login."),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"Login to Docker Hub using your credentials.")),Object(i.b)("p",null,"Once logged in we need to take the image for the registry."),Object(i.b)("ol",{start:8},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Tag your image for the image registry. Using the ",Object(i.b)("inlineCode",{parentName:"p"},"same name and tag from before"),". (",Object(i.b)("em",{parentName:"p"},"NOTE: the command has both the source tag and repository destination tag in it."),")")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now push the image to the registry. This allows you to share images to a registry."))),Object(i.b)("p",null,"If everything goes fine, you will see something like below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ <command>\nThe push refers to repository [docker.io/<repository_name>/greeting]\n2e4d09cd03a2: Pushed\nd862b7819235: Pushed\na9212239031e: Pushed\n4be784548734: Pushed\na43c287826a1: Mounted from library/ibmjava\ne936f9f1df3e: Mounted from library/ibmjava\n92d3f22d44f3: Mounted from library/ibmjava\n10e46f329a25: Mounted from library/ibmjava\n24ab7de5faec: Mounted from library/ibmjava\n1ea5a27b0484: Mounted from library/ibmjava\nv1.0.0: digest: sha256:21c2034646a31a18b053546df00d9ce2e0871bafcdf764f872a318a54562e6b4 size: 2415\n")),Object(i.b)("p",null,"Once the push is successful, your image will be residing in the registry."),Object(i.b)("h3",null,"Clean Up"),Object(i.b)("ol",{start:10},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Stop the ",Object(i.b)("inlineCode",{parentName:"p"},"greeting")," container.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Remove the container.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Remove the image. (",Object(i.b)("em",{parentName:"p"},"NOTE: You will need the image_id to remove it."),")"))),Object(i.b)("h3",null,"Pulling an image from the registry"),Object(i.b)("p",null,"Sometimes, you may need the images that are residing on your registry. Or you may want to use some public images out there. Then, we need to pull the image from the registry."),Object(i.b)("ol",{start:13},Object(i.b)("li",{parentName:"ol"},"Pull the image ",Object(i.b)("inlineCode",{parentName:"li"},"greeting")," from the registry, ")),Object(i.b)("p",null,"If it successfully got pulled, we will see something like below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"ddcb5f219ce2: Pull complete\ne3371bbd24a0: Pull complete\n49d2efb3c01b: Pull complete\nDigest: sha256:21c2034646a31a18b053546df00d9ce2e0871bafcdf764f872a318a54562e6b4\nStatus: Downloaded newer image for <repository_name>/greeting:v1.0.0\ndocker.io/<repository_name>/greeting:v1.0.0\n")),Object(i.b)("h2",null,"Conclusion"),Object(i.b)("p",null,"You have successfully completed this lab! Let’s take a look at what you learned and did today:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Learned about Dockerfile."),Object(i.b)("li",{parentName:"ul"},"Learned about docker images."),Object(i.b)("li",{parentName:"ul"},"Learned about docker containers."),Object(i.b)("li",{parentName:"ul"},"Learned about multi-stage docker builds."),Object(i.b)("li",{parentName:"ul"},"Ran the Greetings service on Docker.")),Object(i.b)("p",null,"Congratulations !!!"),Object(i.b)("p",null,"Check out the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./solution/"}),"Solution")))}d.isMDXComponent=!0},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-lectures-containers-activities-index-mdx-8794687f590a8e1d905c.js.map