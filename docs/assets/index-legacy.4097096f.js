!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,a=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);o=!0);}catch(p){l=!0,i=p}finally{try{o||null==t.return||t.return()}finally{if(l)throw i}}return a}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var r=document.createElement("style");r.innerHTML="body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1,h2,h3,div,ul,ol,li,p{margin:0;padding:0}.app{max-width:980px;margin:0 auto;padding:0 24px 100px}.app .no_list_style{list-style:none}.app .personal{margin-top:20px}.app .personal .per_info{display:flex;justify-content:center}.app .personal .per_info .info_l{margin-right:20px}.app .personal .per_info .info_l .info_img{width:190px;height:180px}.app .personal .per_info .info_r{position:relative;font-family:Times New Roman,serif}.app .personal .per_info .info_r h2{margin-bottom:12px}.app .personal .per_info .info_r p{font-size:16px;font-weight:700}.app .personal .per_info .info_r p+p{margin-top:4px}.app .personal .per_info .info_r .bottom{position:absolute;left:0;bottom:0}.app .personal .per_des{margin-top:20px;padding-top:20px;border-top:1px solid #000;border-bottom:1px solid #000}.app .personal .per_des p{margin-bottom:30px;font-size:18px}.app .personal .per_des .weight{font-weight:700}.app .personal .per_des .strong{font-weight:700;color:red}.app .students h2{margin:12px 0}.app .students ul{list-style:none}.app .students ul li{display:flex;align-items:center}.app .students ul li+li{margin-top:12px}.app .students ul li img{width:84px;height:118px;margin-right:12px}.app .students ul li .link{color:#00f;text-decoration:underline}.app .former_students h2,.app .teaching h2,.app .community h2{margin:20px 0}.app .former_students h3,.app .teaching h3,.app .community h3{margin-bottom:12px}.app .former_students ul,.app .teaching ul,.app .community ul{padding-left:40px}.app .former_students ul li,.app .teaching ul li,.app .community ul li{margin-bottom:12px;font-size:16px}.app .former_students .red,.app .teaching .red,.app .community .red{color:red}.app .former_students .bold,.app .teaching .bold,.app .community .bold{font-weight:700}.app .teaching,.app .community{line-height:25px;border-top:1px solid #000}\n",document.head.appendChild(r),System.register(["./vendor-legacy.6f5fd257.js"],(function(){"use strict";var n,t,r,i;return{setters:[function(e){n=e.j,t=e.r,r=e.R,i=e.a}],execute:function(){var a=n.exports.jsx,o=n.exports.jsxs;function l(){var n=e(t.exports.useState(!0),2),r=n[0],i=n[1],l=e(t.exports.useState({}),2),p=l[0],s=l[1],c=e(t.exports.useState(""),2),d=c[0],u=c[1],h=e(t.exports.useState(""),2),m=h[0],f=h[1];t.exports.useEffect((function(){Promise.all([g(),y(),x()]).then((function(){i(!1)}))}),[]);var g=function(){return fetch("/data/personal.json").then((function(e){return e.json()})).then((function(e){s(e)}))},y=function(){return fetch("/data/students.html").then((function(e){return e.text()})).then((function(e){u(e)}))},x=function(){return fetch("/data/community.xml").then((function(e){return e.text()})).then((function(e){f(e)}))};return r?null:o("div",{className:"app",children:[o("div",{className:"personal",children:[o("div",{className:"per_info",children:[a("div",{className:"info_l",children:a("img",{className:"info_img",src:p.image})}),o("div",{className:"info_r",children:[o("div",{children:[a("h2",{children:p.username}),a("p",{children:p.education}),p.school.map((function(e){return a("p",{children:a("a",{href:e.url,children:e.name})},e.name)})),a("p",{children:p.location})]}),o("div",{className:"bottom",children:[a("p",{children:a("a",{href:"mailto:".concat(p.email),children:p.email})}),a("p",{children:p.officeLocation})]})]})]}),o("div",{className:"per_des",children:[o("p",{children:["I am a Professor in the ",a("a",{href:"http://www.cs.bit.edu.cn/",children:"School of Computer Science and Technology"})," at the ",a("a",{href:"https://english.bit.edu.cn/",children:"Beijing Institute of Technology"})," . I was formerly a graduate student at the ",a("a",{href:"http://www.sei.pku.edu.cn/",children:"Software Engineering Institute"})," ,",a("a",{href:"https://english.pku.edu.cn/",children:"Peking University"})," . I defended my PhD thesis in June 2008."]}),a("p",{children:"My research interests include deep learning based software engineering, in particular: deep learning based program generation; software refactoring; automatic program repair; software quality; machine learning based code complete; automatic construction of software engineering datasets. My work is funded in part by the National Natural Science Foundation of China, and the National Key Research and Development Program of China."}),a("p",{children:"I am a recipient of the RE'2021 best research paper award (2021), IET Software Premium Award (2018), New Century Excellent Talents in University (2013), and Beijing Higher Education Young Elite Teacher (2013). I am also a distinguished member of China Computer Federation (中国计算机学会杰出会员)"}),o("p",{children:[a("span",{className:"weight",children:"I am always looking for self-motivated students to work with me"})," . Contact me by eMail if you are interested in ",a("span",{className:"strong",children:"deep learning"})," ,",a("span",{className:"strong",children:"software engineering"})," ,",a("span",{className:"strong",children:"natural language processing"})," , or ",a("span",{className:"strong",children:"data mining"})," ."]})]})]}),a("div",{dangerouslySetInnerHTML:{__html:d}}),o("div",{className:"teaching",children:[a("h2",{children:"Teaching"}),o("ul",{children:[o("li",{children:[a("h3",{children:"Graduate Course"}),o("ul",{children:[a("li",{children:"Frontiers of Computer Science, 2014-"}),a("li",{children:"Software Architecture, 2008-2015"})]})]}),o("li",{children:[a("h3",{children:"Undergraduate Courses"}),o("ul",{children:[a("li",{children:"Software Testing, 2010-"}),a("li",{children:"Object-Oriented Software Design, 2013"})]})]})]})]}),a("div",{dangerouslySetInnerHTML:{__html:m}})]})}r.render(a(i.StrictMode,{children:a(l,{})}),document.getElementById("root"))}}}))}();