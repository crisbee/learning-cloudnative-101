(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"013z":function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),b=t("NmYn"),r=t.n(b),c=t("Wbzz"),i=t("Xrax"),p=t("k4MR"),s=t("TSYQ"),o=t.n(s),m=t("QH2O"),u=t.n(m),N=t("qKvR"),O=function(e){var a,t=e.title,n=e.theme,l=e.tabs,b=void 0===l?[]:l;return Object(N.b)("div",{className:o()(u.a.pageHeader,(a={},a[u.a.withTabs]=b.length,a[u.a.darkMode]="dark"===n,a))},Object(N.b)("div",{className:"bx--grid"},Object(N.b)("div",{className:"bx--row"},Object(N.b)("div",{className:"bx--col-lg-12"},Object(N.b)("h1",{id:"page-title",className:u.a.text},t)))))},j=t("BAC9"),d=function(e){var a=e.relativePagePath,t=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,l=t||n,b=l.baseUrl,r=l.subDirectory,i=b+"/edit/"+l.branch+r+"/src/pages"+a;return b?Object(N.b)("div",{className:"bx--row "+j.row},Object(N.b)("div",{className:"bx--col"},Object(N.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},h=t("FCXl"),g=t("dI71"),k=t("I8xM"),f=function(e){function a(){return e.apply(this,arguments)||this}return Object(g.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.tabs,t=e.slug,n=t.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var a,l=r()(e,{lower:!0,strict:!0}),b=l===n,i=new RegExp(n+"/?(#.*)?$"),p=t.replace(i,l);return Object(N.b)("li",{key:e,className:o()((a={},a[k.selectedItem]=b,a),k.listItem)},Object(N.b)(c.Link,{className:k.link,to:""+p},e))}));return Object(N.b)("div",{className:k.tabsContainer},Object(N.b)("div",{className:"bx--grid"},Object(N.b)("div",{className:"bx--row"},Object(N.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(N.b)("nav",null,Object(N.b)("ul",{className:k.list},l))))))},a}(l.a.Component),T=t("MjG9"),A=t("CzIb");a.a=function(e){var a=e.pageContext,t=e.children,n=e.location,l=e.Title,b=a.frontmatter,s=void 0===b?{}:b,o=a.relativePagePath,m=a.titleType,u=s.tabs,j=s.title,g=s.theme,k=s.description,v=s.keywords,E=Object(A.a)().interiorTheme,w=Object(c.useStaticQuery)("2456312558").site.pathPrefix,R=w?n.pathname.replace(w,""):n.pathname,C=u?R.split("/").filter(Boolean).slice(-1)[0]||r()(u[0],{lower:!0}):"",P=g||E;return Object(N.b)(p.a,{tabs:u,homepage:!1,theme:P,pageTitle:j,pageDescription:k,pageKeywords:v,titleType:m},Object(N.b)(O,{title:l?Object(N.b)(l,null):j,label:"label",tabs:u,theme:P}),u&&Object(N.b)(f,{slug:R,tabs:u,currentTab:C}),Object(N.b)(T.a,{padded:!0},t,Object(N.b)(d,{relativePagePath:o})),Object(N.b)(h.a,{pageContext:a,location:n,slug:R,tabs:u,currentTab:C}),Object(N.b)(i.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},yIXN:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return i})),t.d(a,"default",(function(){return m}));var n,l=t("wx14"),b=t("zLVn"),r=(t("q1tI"),t("7ljp")),c=t("013z"),i=(t("qKvR"),{}),p=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),s={_frontmatter:i},o=c.a;function m(e){var a=e.components,t=Object(b.a)(e,["components"]);return Object(r.b)(o,Object(l.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Prerequisites"),Object(r.b)("p",null,"Make sure your environment is properly setup."),Object(r.b)("p",null,"Follow the instructions ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"../../prerequisites#environment-setup"}),"here")),Object(r.b)("h2",null,"SetUp"),Object(r.b)("h3",null,"Tekton CLI Installation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/tektoncd/cli"}),"Tekton CLI")," is command line utility used to interact with the Tekton resources.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Follow the instructions on the tekton CLI github repository ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/tektoncd/cli#installing-tkn"}),"https://github.com/tektoncd/cli#installing-tkn"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"For MacOS for example you can use brew"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"brew tap tektoncd/tools\nbrew install tektoncd/tools/tektoncd-cli\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Verify the Tekton cli"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn version\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The command should show a result like:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"$ tkn version\nClient version: 0.10.0\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you already have the ",Object(r.b)("inlineCode",{parentName:"p"},"tkn")," install you can upgrade running"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"brew upgrade tektoncd/tools/tektoncd-cli\n")))),Object(r.b)("h3",null,"Tekton Pipelines Installation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To deploy the Tekton pipelines:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply --filename https://storage.googleapis.com/tekton-releases/pipeline/previous/v0.13.2/release.yaml\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"Note")),": It will take few mins for the Tekton pipeline components to be installed, you an watch the status using the command:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods -n tekton-pipelines -w\n")),"  You can use ",Object(r.b)("inlineCode",{parentName:"li"},"Ctrl+c")," to terminate the watch"),Object(r.b)("li",{parentName:"ul"},"A successful deployment of Tekton pipelines will show the following pods:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{}),"NAME                                         READY   STATUS    RESTARTS   AGE\ntekton-pipelines-controller-9b8cccff-j6hvr   1/1     Running   0          2m33s\ntekton-pipelines-webhook-6fc9d4d9b6-kpkp7    1/1     Running   0          2m33s\n")))),Object(r.b)("h3",null,"Tekton Dashboard Installation (Optional)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To deploy the Tekton dashboard:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply --filename https://github.com/tektoncd/dashboard/releases/download/v0.7.0/tekton-dashboard-release.yaml\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"Note")),": It will take few mins for the Tekton dashboard components to be installed, you an watch the status using the command:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods -n tekton-pipelines -w\n")),"  You can use ",Object(r.b)("inlineCode",{parentName:"li"},"Ctrl+c")," to terminate the watch"),Object(r.b)("li",{parentName:"ul"},"A successful deployment of Tekton pipelines will show the following pods:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{}),"NAME                                           READY   STATUS    RESTARTS   AGE\ntekton-dashboard-59c7fbf49f-79f7q              1/1     Running   0          50s\ntekton-pipelines-controller-6b7f7cf7d8-r65ps   1/1     Running   0          15m\ntekton-pipelines-webhook-7bbd8fcc45-sfgxs      1/1     Running   0          15m\n"))),Object(r.b)("li",{parentName:"ul"},"Access the dashboard as follows:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl --namespace tekton-pipelines port-forward svc/tekton-dashboard 9097:9097\n")),"  You can access the web UI at ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"http://localhost:9097"}),"http://localhost:9097")," .")),Object(r.b)("h2",null,"Create Target Namespace"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Set the environment variable ",Object(r.b)("inlineCode",{parentName:"li"},"NAMESPACE")," to ",Object(r.b)("inlineCode",{parentName:"li"},"tekton-demo"),", if you open a new terminal remember to set this environment again",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"export NAMESPACE=tekton-demo\n"))),Object(r.b)("li",{parentName:"ul"},"Create a the namespace using the variable ",Object(r.b)("inlineCode",{parentName:"li"},"NAMESPACE"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create namespace $NAMESPACE\n")))),Object(r.b)("h2",null,"Tasks"),Object(r.b)("h3",null,"Task Creation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create the below yaml files.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The following snippet shows what a Tekton Task YAML looks like:")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create the file ",Object(r.b)("strong",{parentName:"p"},"task-test.yaml")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: java-test\nspec:\n  params:\n    - name: url\n    - name: revision\n      default: master\n  steps:\n    - name: git-clone\n      image: alpine/git\n      script: |\n        git clone -b $(params.revision) --depth 1 $(params.url) /source\n      volumeMounts:\n        - name: source\n          mountPath: /source\n    - name: test\n      image: maven:3.3-jdk-8\n      workingdir: /source\n      script: |\n        mvn test\n        echo "tests passed with rc=$?"\n      volumeMounts:\n        - name: m2-repository\n          mountPath: /root/.m2\n        - name: source\n          mountPath: /source\n  volumes:\n    - name: m2-repository\n      emptyDir: {}\n    - name: source\n      emptyDir: {}\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Each Task has the following:")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"name")," - the unique name using which the task can be referred"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"name - the name of the parameter"),Object(r.b)("li",{parentName:"ul"},"description - the description of the parameter"),Object(r.b)("li",{parentName:"ul"},"default - the default value of parameter"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Note"),": The ",Object(r.b)("inlineCode",{parentName:"p"},"TaskRun")," or ",Object(r.b)("inlineCode",{parentName:"p"},"PipelineRun")," could override the parameter values, if no parameter value is passed then the default value will be used.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"steps")," - One or more sub-tasks that will be executed in the defined order. The step has all the attributes like a Pod spec")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"volumes")," - the task can also mount external volumes using the volumes attribute.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The parameters that were part of the spec inputs params can be used in the steps using the notation ",Object(r.b)("inlineCode",{parentName:"p"},"$(<variable-name>)"),"."))),Object(r.b)("h3",null,"Task Deploy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The application test task could be created using the command:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f task-test.yaml -n $NAMESPACE\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"We will use the Tekton cli to inspect the created resources"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn task ls -n $NAMESPACE\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The above command should list one Task as shown below:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{}),"NAME        AGE\njava-test   22 seconds ago\n")))),Object(r.b)("h3",null,"TaskRun"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"https://github.com/tektoncd/pipeline/blob/master/docs/taskruns.md"}),"TaskRun")," is used to run a specific task independently. In the following section we will run the build-app task created in the previous step")),Object(r.b)("h4",null,"TaskRun Creation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The following snippet shows what a Tekton TaskRun YAML looks like:")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create the file ",Object(r.b)("strong",{parentName:"p"},"taskrun-test.yaml")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: tekton.dev/v1beta1\nkind: TaskRun\nmetadata:\n  generateName: test-task-run-\nspec:\n  taskRef:\n    name: java-test\n  params:\n    - name: url\n      value: https://github.com/ibm-cloud-architecture/cloudnative_sample_app\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"generateName")," - since the TaskRun can be run many times, in order to have unqiue name across the TaskRun ( helpful when checking the TaskRun history) we use this generateName instead of name. When Kubernetes sees generateName it will generate unquie set of characters and suffix the same to build-app-, similar to how pod names are generated")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"taskRef")," - this is used to refer to the Task by its name that will be run as part of this TaskRun. In this example we use build-app Task.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"As described in the earlier section that the Task inputs and outputs could be overridden via TaskRun.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"params")," - this are the parameter values that are passed to the task")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The application test task(java-maven-test) could be run using the command:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create -n $NAMESPACE -f taskrun-test.yaml\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Note")," - As tasks will use generated name, never use ",Object(r.b)("inlineCode",{parentName:"p"},"kubectl apply -f taskrun-test.yaml"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"We will use the Tekton cli to inspect the created resources:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn tr ls -n $NAMESPACE\n")),Object(r.b)("p",{parentName:"li"},"  The above command should list one TaskRun as shown below:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"NAME                       STARTED        DURATION   STATUS\ntest-task-run-q6s8c        1 minute ago   ---        Running(Pending)\n")),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("strong",{parentName:"p"},"Note")," - It will take few seconds for the TaskRun to show status as Running as it needs to download the container images.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To check the logs of the Task Run using the ",Object(r.b)("inlineCode",{parentName:"p"},"tkn"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn tr logs -f -a -n $NAMESPACE\n")),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Note")," - Each task step will be run within a container of its own.\nThe -f or -a allows to tail the logs from all the containers of the task. For more options run ",Object(r.b)("inlineCode",{parentName:"p"},"tkn tr logs --help"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you see the TaskRun status as Failed or Error use the following command to check the reason for error:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn tr describe --last -n $NAMESPACE\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If it is successful, you will see something like below."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn tr ls -n $NAMESPACE\n")),Object(r.b)("p",{parentName:"li"},"  The above command should list one TaskRun as shown below:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"NAME                  STARTED          DURATION     STATUS\ntest-task-run-q6s8c   47 seconds ago   34 seconds   Succeeded\n")))),Object(r.b)("h3",null,"Creating additional tasks and deploying them"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create a Task to build a container image and push to the registry")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"This task will be later used by the pipeline.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Download the task file ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"/yamls/tekton-lab/task-buildah.yaml"}),"task-buildah.yaml")," to build the image, push the image to the registy:")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create task buildah")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create the ",Object(r.b)("inlineCode",{parentName:"p"},"buildah")," Task using the file and the command:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f task-buildah.yaml -n $NAMESPACE\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use the Tekton cli to inspect the created resources"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn task ls -n $NAMESPACE\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The above command should list one Task as shown below:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"NAME              AGE\nbuildah            4 seconds ago\njava-test         46 minutes ago\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To access the container registry, create the required secret as follows.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If using IBM Container registry use ",Object(r.b)("inlineCode",{parentName:"p"},"iamapikey")," for ",Object(r.b)("inlineCode",{parentName:"p"},"REGISTRY_USERNAME")," and get a API Key for ",Object(r.b)("inlineCode",{parentName:"p"},"REGISTRY_PASSWORD"),", use the domain name for the region IBM CR service like ",Object(r.b)("inlineCode",{parentName:"p"},"us.icr.io"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create the environment variables to be use, replace with real values and include the single quotes:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"export REGISTRY_USERNAME='<REGISTRY_USERNAME>'\n")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"export REGISTRY_PASSWORD='<REGISTRY_PASSWORD>'\n")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"export REGISTRY_SERVER='docker.io'\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run the following command to create a secret ",Object(r.b)("inlineCode",{parentName:"p"},"regcred")," in the namespace ",Object(r.b)("inlineCode",{parentName:"p"},"NAMESPACE")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create secret docker-registry regcred \\\n  --docker-server=${REGISTRY_SERVER} \\\n  --docker-username=${REGISTRY_USERNAME} \\\n  --docker-password=${REGISTRY_PASSWORD} \\\n  -n ${NAMESPACE}\n")),Object(r.b)(p,{mdxType:"InlineNotification"},"Before creating, replace the values as mentioned above. Note: If your docker password contains special characters in it, please enclose the password in double quotes or place an escape character before each special character."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"(Optional) Only if you have problems with the credentials you can recreate it, but you have to deleted first",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete secret regcred -n $NAMESPACE\n"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Before we run the Task using TaskRun let us create the Kubernetes service account and attach the needed permissions to the service account, the following Kubernetes resource defines a service account called ",Object(r.b)("inlineCode",{parentName:"p"},"pipeline")," in namespace ",Object(r.b)("inlineCode",{parentName:"p"},"$NAMESPACE")," who will have administrative role within the ",Object(r.b)("inlineCode",{parentName:"p"},"$NAMESPACE")," namespace.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create the file ",Object(r.b)("strong",{parentName:"p"},"sa.yaml")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: pipeline\nsecrets:\n  - name: regcred\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create sa role as follows:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create -n $NAMESPACE -f sa.yaml\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create an environment variable for location to push the image to be build. Replace ",Object(r.b)("inlineCode",{parentName:"p"},"NAMESPACE")," for the dockerhub username, or IBM CR Namespace"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"export NAMESPACE='<REGISTRY_NAMESPACE>'\nexport IMAGE_URL=${REGISTRY_SERVER}/${REGISTRY_NAMESPACE}/cloudnative_sample_app\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Lets create a Task Run for ",Object(r.b)("inlineCode",{parentName:"p"},"buildah")," Task using the ",Object(r.b)("inlineCode",{parentName:"p"},"tkn")," CLI passing the inputs, outputs and service account."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn task start buildah --showlog \\\n  -p url=https://github.com/ibm-cloud-architecture/cloudnative_sample_app \\\n  -p image=${IMAGE_URL} \\\n  -s pipeline \\\n  -n $NAMESPACE\n")),Object(r.b)("p",{parentName:"li"},"  The task will start and logs will start printing automatically"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{}),"Taskrun started: buildah-run-vvrg2\nWaiting for logs to be available...\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Verify the status of the Task Run"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn tr ls -n $NAMESPACE\n")),Object(r.b)("p",{parentName:"li"},"  Output should look like this"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"NAME                  STARTED          DURATION     STATUS\nbuildah-run-zbsrv      2 minutes ago    1 minute     Succeeded\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To clean up all Pods associated with all Task Runs, delete all the task runs resources"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl delete taskrun --all -n $NAMESPACE\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"(Optional) Instead of starting the Task via ",Object(r.b)("inlineCode",{parentName:"p"},"tkn task start")," you could also use yaml TaskRun, create a file ",Object(r.b)("strong",{parentName:"p"},"taskrun-buildah.yaml")," Make sure update value for parameter ",Object(r.b)("inlineCode",{parentName:"p"},"image")," with your registry info."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: tekton.dev/v1beta1\nkind: TaskRun\nmetadata:\n  generateName: buildah-task-run-\nspec:\n  serviceAccountName: pipeline\n  taskRef:\n    name: buildah\n  params:\n    - name: url\n      value: https://github.com/ibm-cloud-architecture/cloudnative_sample_app\n    - name: image\n      value: docker.io/csantanapr/cloudnative_sample_app\n")),Object(r.b)("p",{parentName:"li"},"  Then create the TaskRun with ",Object(r.b)("inlineCode",{parentName:"p"},"generateName")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create -f taskrun-buildah.yaml -n $NAMESPACE\n")),Object(r.b)("p",{parentName:"li"},"  Follow the logs with:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{}),"tkn tr logs --last -f -n $NAMESPACE\n")))),Object(r.b)("h2",null,"Pipelines"),Object(r.b)("h3",null,"Pipeline Creation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Pipelines allows to start multiple Tasks, in parallel or in a ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/tektoncd/pipeline/blob/master/docs/pipelines.md#runafter"}),"certain order"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create the file ",Object(r.b)("strong",{parentName:"p"},"pipeline.yaml"),", the Pipeline contains two Tasks"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: tekton.dev/v1beta1\nkind: Pipeline\nmetadata:\n  name: test-build\nspec:\n  params:\n    - name: repo-url\n      default: https://github.com/ibm-cloud-architecture/cloudnative_sample_app\n    - name: revision\n      default: master\n    - name: image-server\n    - name: image-namespace\n    - name: image-repository\n      default: cloudnative_sample_app\n  tasks:\n    - name: test\n      taskRef:\n        name: java-test\n      params:\n        - name: url\n          value: $(params.repo-url)\n        - name: revision\n          value: $(params.revision)\n    - name: build\n      runAfter: [test]\n      taskRef:\n        name: buildah\n      params:\n        - name: image\n          value: $(params.image-server)/$(params.image-namespace)/$(params.image-repository)\n        - name: url\n          value: $(params.repo-url)\n        - name: revision\n          value: $(params.revision)\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Pipeline defines a list of Tasks to execute in order, while also indicating if any outputs should be used as inputs of a following Task by using the from field and also indicating the order of executing (using the runAfter and from fields). The same variable substitution you used in Tasks is also available in a Pipeline.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create the Pipeline using the command:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl apply -f pipeline.yaml -n $NAMESPACE\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Use the Tekton cli to inspect the created resources"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn pipeline ls -n $NAMESPACE\n")),Object(r.b)("p",{parentName:"li"},"The above command should list one Pipeline as shown below:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"NAME              AGE              LAST RUN   STARTED   DURATION   STATUS\ntest-build-push   31 seconds ago   ---        ---       ---        ---\n")))),Object(r.b)("h3",null,"PipelineRun"),Object(r.b)("h4",null,"PipelineRun Creation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To execute the Tasks in the Pipeline, you must create a PipelineRun. Creation of a PipelineRun will trigger the creation of TaskRuns for each Task in your pipeline.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create the file ",Object(r.b)("strong",{parentName:"p"},"pipelinerun.yaml")," replace the values for ",Object(r.b)("inlineCode",{parentName:"p"},"image-server")," and ",Object(r.b)("inlineCode",{parentName:"p"},"image-namespace")," with your own."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: tekton.dev/v1beta1\nkind: PipelineRun\nmetadata:\n  generateName: test-build-run-\nspec:\n  serviceAccountName: pipeline\n  pipelineRef:\n    name: test-build\n  params:\n    - name: image-server\n      value: us.icr.io\n    - name: image-namespace\n      value: student01-registry\n")),Object(r.b)("p",{parentName:"li"},"  ",Object(r.b)("strong",{parentName:"p"},"serviceAccount")," - it is always recommended to have a service account associated with PipelineRun, which can then be used to define fine grained roles.\nReplace the values for ",Object(r.b)("inlineCode",{parentName:"p"},"image-server")," and ",Object(r.b)("inlineCode",{parentName:"p"},"image-namespace"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create the PipelineRun using the command:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create -f pipelinerun.yaml -n $NAMESPACE\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"We will use the Tekton cli to inspect the created resources"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn pipelinerun ls -n $NAMESPACE\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The above command should list one PipelineRun as shown below:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"NAME                        STARTED         DURATION   STATUS\ntest-build-push-run-c7zgv   8 seconds ago   ---        Running\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Get the logs of the pipeline using the following command"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn pipelinerun logs --last -f\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Wait for few minutes for your pipeline to complete all the tasks. If it is successful, you will see something like below."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn pipeline ls -n $NAMESPACE\n")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{}),"NAME              AGE              LAST RUN                    STARTED         DURATION    STATUS\ntest-build-push   33 minutes ago   test-build-push-run-c7zgv   2 minutes ago   2 minutes   Succeeded\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run again the pipeline ls command"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn pipelinerun ls -n $NAMESPACE\n")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{}),"NAME                        STARTED         DURATION    STATUS\ntest-build-push-run-c7zgv   2 minutes ago   2 minutes   Succeeded\n")),Object(r.b)("p",{parentName:"li"},"  If it is successful, go to your container registry account and verify if you have the ",Object(r.b)("inlineCode",{parentName:"p"},"cloudnative_sample_app")," image pushed.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"(Optional) Run the pipeline again using the ",Object(r.b)("inlineCode",{parentName:"p"},"tkn")," CLI"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn pipeline start test-build --last -n $NAMESPACE\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"(Optional) Re-run the pipeline using last pipelinerun values"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"tkn pipeline start test-build-push --last -f -n $NAMESPACE\n")))),Object(r.b)("h2",null,"Deploy Application"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add the ",Object(r.b)("inlineCode",{parentName:"li"},"imagePullSecret")," to the ",Object(r.b)("inlineCode",{parentName:"li"},"default")," Service Account",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),'kubectl patch sa default -p \'"imagePullSecrets": [{"name": "regcred" }]\' -n $NAMESPACE\n'))),Object(r.b)("li",{parentName:"ul"},"Create a deployment",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create deployment cloudnative --image=${IMAGE_URL} -n $NAMESPACE\n"))),Object(r.b)("li",{parentName:"ul"},"Verify if the pods are running:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get pods -l app=cloudnative -n $NAMESPACE\n"))),Object(r.b)("li",{parentName:"ul"},"Expose the deployment",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"kubectl expose deployment cloudnative --type=NodePort --port=9080 -n $NAMESPACE\n"))),Object(r.b)("li",{parentName:"ul"},"Now access the compose the URL of the App using IP and NodePort",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"export APP_EXTERNAL_IP=$(kubectl get nodes -o jsonpath='{.items[0].status.addresses[?(@.type==\"ExternalIP\")].address}')\nexport APP_NODEPORT=$(kubectl get svc cloudnative -n $NAMESPACE -o jsonpath='{.spec.ports[0].nodePort}')\nexport APP_URL=\"http://${APP_EXTERNAL_IP}:${APP_NODEPORT}/greeting?name=Carlos\"\necho APP_URL=$APP_URL\n")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{}),"http://192.168.64.30:30632//greeting?name=Carlos\n"))),Object(r.b)("li",{parentName:"ul"},"Now access the app from terminal or browser",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"curl $APP_URL\n")),"  Output should be",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-json"}),'{"id":4,"content":"Welcome to Cloudnative bootcamp !!! Hello, Carlos :)"}\n')),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"open $APP_URL\n")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-continuous-integration-activities-tekton-iks-mdx-6ac87b2d25848caf2d99.js.map