webpackJsonp([1],{"+uOD":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"middle"},[r("router-link",{attrs:{to:{name:"versions"}}},[t._v("Versions")])],1),t._v(" "),r("div",{staticClass:"right"},[r("router-link",{attrs:{to:{name:"imprint"}}},[t._v("Imprint")])],1)])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"left"},[r("a",{attrs:{href:"https://github.com/vapor/vapor",target:"_blank"}},[t._v("Built with Vapor")])])}],s={render:a,staticRenderFns:n};e.a=s},"/ytH":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["git-repo-growth",t.gitRepoName]},[t.hasData?r("h3",[t._v(" "+t._s(t.starsPerDay)+" ")]):t._e(),t._v(" "),t.hasLink?r("a",{attrs:{href:t.link,target:"_blank"}},[t._v(" "+t._s(t.gitRepoName)+" ")]):r("span",[t._v(" "+t._s(t.gitRepoName)+" ")])])},n=[],s={render:a,staticRenderFns:n};e.a=s},"1EcC":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"day-chart"},[t.hasChartData?r("line-chart",{attrs:{chartData:t.chartData}}):t._e(),t._v(" "),t.hasChartData?r("chart-title",{attrs:{chartTitle:t.chartTitle}}):t._e()],1)},n=[],s={render:a,staticRenderFns:n};e.a=s},"1WmE":function(t,e,r){"use strict";e.a={}},"2W/6":function(t,e,r){"use strict";var a=r("Zrlr"),n=r.n(a),s=r("wxAW"),i=r.n(s),o=r("PJh5"),u=r.n(o),c=function(){function t(){n()(this,t)}return i()(t,null,[{key:"formatDate",value:function(t){return new u.a(t,"YYYY-MM-DD").format("DD-MM-YYYY")}},{key:"getDayFromDate",value:function(t){return new u.a(t,"DD-MM-YYYY").date()}},{key:"getMonthFromDate",value:function(t){return new u.a(t,"DD-MM-YYYY").month()+1}},{key:"getYearFromDate",value:function(t){return new u.a(t,"DD-MM-YYYY").year()}},{key:"getMonthByNumber",value:function(t){switch(t){case 1:return"January";case 2:return"Feburary";case 3:return"March";case 4:return"April";case 5:return"May";case 6:return"June";case 7:return"July";case 8:return"August";case 9:return"September";case 10:return"October";case 11:return"November";case 12:return"December";default:throw"Month for given number: "+t+" does not exists"}}},{key:"getListWithPastDays",value:function(t){for(var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=[],a=0;a<t;a++){var n=u()().subtract(a,"days").format("DD-MM-YYYY");r.push(n)}return e?r.reverse():r}}]),t}();e.a=c},"3CU2":function(t,e,r){"use strict";e.a={props:{title:{required:!0},list:{required:!0}}}},"7E6l":function(t,e){},"8gD8":function(t,e,r){"use strict";function a(t){r("7E6l")}var n=r("1WmE"),s=r("VDS5"),i=r("VU/8"),o=a,u=i(n.a,s.a,o,null,null);e.a=u.exports},"8jyh":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("base-layout",[r("page-header",{attrs:{title:"Versions"}}),t._v(" "),t._l(t.versions,function(t,e){return r("list-card",{key:e,attrs:{title:t.number,list:t.changes}})})],2)},n=[],s={render:a,staticRenderFns:n};e.a=s},"9MZw":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list-card"},[r("h2",[t._v(" "+t._s(t.title)+" ")]),t._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"list"},[r("ul",t._l(t.list,function(e,a){return r("li",{key:a},[t._v("\n          "+t._s(e)+"\n        ")])}))])])])},n=[],s={render:a,staticRenderFns:n};e.a=s},AVDn:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],s={render:a,staticRenderFns:n};e.a=s},BAi7:function(t,e,r){"use strict";var a=r("UlOv"),n=a.a.reactiveProp;e.a={extends:a.b,mixins:[n],mounted:function(){var t={ticks:{fontColor:"#828a9f"},gridLines:{display:!0,color:"#828a9f",lineWidth:.1}},e={responsive:!0,maintainAspectRatio:!1,legend:!1,scales:{yAxes:[t],xAxes:[t]}};this.renderChart(this.chartData,e)}}},CFS6:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"site-title"},[t.hasLink?r("a",{attrs:{href:t.link}},[t._v("\n    "+t._s(t.title)+"\n  ")]):r("span",[t._v("\n    "+t._s(t.title)+"\n  ")])])},n=[],s={render:a,staticRenderFns:n};e.a=s},CZyB:function(t,e){},"Du/2":function(t,e,r){"use strict";r.d(e,"a",function(){return a});var a="set_repo_list"},E5iI:function(t,e,r){"use strict";var a=r("O2WN"),n=r("yKoo"),s=r("VU/8"),i=s(a.a,n.a,null,null,null);e.a=i.exports},EuLS:function(t,e,r){"use strict";var a=r("hSYi"),n=r("LSRt"),s=r("VU/8"),i=s(a.a,n.a,null,null,null);e.a=i.exports},FN8c:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var a={vapor:{lineChartStyle:{borderColor:"#6a70c9",backgroundColor:"#ffffff00",pointBackgroundColor:"#6a70c9",pointHoverBackgroundColor:"#ffffff"}},perfect:{lineChartStyle:{borderColor:"#dda25d",backgroundColor:"#ffffff00",pointBackgroundColor:"#dda25d",pointHoverBackgroundColor:"#ffffff"}},kitura:{lineChartStyle:{borderColor:"#1ba8dd",backgroundColor:"#ffffff00",pointBackgroundColor:"#1ba8dd",pointHoverBackgroundColor:"#ffffff"}},zewo:{lineChartStyle:{borderColor:"#e64759",backgroundColor:"#ffffff00",pointBackgroundColor:"#e64759",pointHoverBackgroundColor:"#ffffff"}}}},IcnI:function(t,e,r){"use strict";var a=r("7+uW"),n=r("NYxO"),s=r("UjVw"),i=r("mUbh"),o=r("ukYY");a.a.use(n.a);var u={repoList:[]};e.a=new n.a.Store({state:u,getters:s,actions:i,mutations:o.a})},IzkB:function(t,e,r){"use strict";function a(t){r("Livk")}var n=r("NxHH"),s=r("CFS6"),i=r("VU/8"),o=a,u=i(n.a,s.a,o,null,null);e.a=u.exports},KYem:function(t,e,r){"use strict";function a(t){r("P9RO")}var n=r("3CU2"),s=r("9MZw"),i=r("VU/8"),o=a,u=i(n.a,s.a,o,null,null);e.a=u.exports},LSRt:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("section",[t._t("default")],2)]),t._v(" "),r("footer-layout")],1)},n=[],s={render:a,staticRenderFns:n};e.a=s},Livk:function(t,e){},Lyxk:function(t,e,r){"use strict";var a=r("EuLS"),n=r("IzkB");e.a={components:{PageHeader:n.a,BaseLayout:a.a}}},M93x:function(t,e,r){"use strict";function a(t){r("oRvq")}var n=r("xJD8"),s=r("AVDn"),i=r("VU/8"),o=a,u=i(n.a,s.a,o,null,null);e.a=u.exports},MPbY:function(t,e,r){"use strict";function a(t){r("CZyB")}var n=r("Lyxk"),s=r("vL3M"),i=r("VU/8"),o=a,u=i(n.a,s.a,o,null,null);e.a=u.exports},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),n=r("M93x"),s=r("YaEn"),i=r("IcnI");a.a.config.productionTip=!1,new a.a({el:"#app",router:s.a,store:i.a,template:"<App/>",components:{App:n.a}})},NxHH:function(t,e,r){"use strict";e.a={props:{title:{required:!0},link:{default:""}},computed:{hasLink:function(){return this.link.length>0}}}},O2WN:function(t,e,r){"use strict";var a=r("EuLS"),n=r("BAi7"),s=r("g263"),i=r("8gD8"),o=r("igMF"),u=r("P9l9"),c=r("nR4I"),l=r("IzkB");e.a={components:{BaseLayout:a.a,LineChart:n.a,Separator:i.a,ChartTitle:s.a,RepoGrowth:o.a,DayChart:c.a,PageHeader:l.a},methods:{fetchStarsOfRepoForPastDaysOf:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:365;this.$store.getters.getRepoList.forEach(function(e){return u.a(e.id,t)})}},mounted:function(){u.b(this.fetchStarsOfRepoForPastDaysOf)}}},P9RO:function(t,e){},P9l9:function(t,e,r){"use strict";function a(t,e){i.a.get(u.STARS(t,e)).then(function(t){o.a.dispatch("setStarsDataToAccordingGitRepo",t.data)}).catch(function(e){throw console.log(e),"Error: Could not fetch stars for repo with id: "+t})}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;i.a.get(u.REPO_LIST).then(function(e){o.a.dispatch("setRepoList",e.data),null!==t&&t()}).catch(function(t){throw console.log(t),"Error: Could not fetch git repo list"})}e.a=a,e.b=n;var s=r("mtWM"),i=r.n(s),o=r("IcnI"),u={STARS:function(t,e){return"/api/stars/"+t+"?days="+e},REPO_LIST:"/api/gitrepo/list"}},SRcI:function(t,e,r){"use strict";var a=r("Zrlr"),n=r.n(a),s=r("wxAW"),i=r.n(s),o=(r("IcnI"),r("PJh5")),u=(r.n(o),r("cPWW"),r("2W/6"),function(){function t(){n()(this,t)}return i()(t,null,[{key:"createListOfStarsForEachDay",value:function(t,e){var r=[];return t.forEach(function(t){var a=void 0===e[t]?{created_at:t,amount:null}:e[t];r.push(a)}),r}}]),t}());e.a=u},UFGK:function(t,e){},UjVw:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r.d(e,"getRepoList",function(){return a});var a=function(t){return t.repoList}},VDS5:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"separator"},[r("h3",[t._v("stars per day")])])}],s={render:a,staticRenderFns:n};e.a=s},YaEn:function(t,e,r){"use strict";var a=r("7+uW"),n=r("/ocq"),s=r("E5iI"),i=r("xWGA"),o=r("MPbY");a.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"home",component:s.a},{path:"/versions",name:"versions",component:i.a},{path:"/imprint",name:"imprint",component:o.a}]})},cPWW:function(t,e,r){"use strict";var a=r("Zrlr"),n=r.n(a),s=r("wxAW"),i=r.n(s),o=function(){function t(){n()(this,t)}return i()(t,null,[{key:"doesListElementsHave",value:function(t,e){var r=!0;return e.forEach(function(e){return void 0===e[t]?r=!1:null}),r}},{key:"sortDescOnSumOfGivenProp",value:function(t,e){return e.sort(function(e,r){var a=e[t].reduce(function(t,e){return t+e}),n=r[t].reduce(function(t,e){return t+e});return a<n?-1:a>n?1:0})}}]),t}();e.a=o},e7jz:function(t,e,r){"use strict";var a=r("fZjL"),n=r.n(a),s=r("cPWW");e.a={props:{gitRepoName:{required:!0},link:{default:""}},computed:{hasLink:function(){return this.link.length>0},hasData:function(){var t=this,e=this.$store.getters.getRepoList;if(0===e.length)return!1;var r=e.filter(function(e){return e.name===t.gitRepoName});return s.a.doesListElementsHave("stars",r)},starsPerDay:function(){var t=this,e=this.$store.getters.getRepoList,r=e.filter(function(e){return e.name===t.gitRepoName}),a=[];n()(r[0].stars).forEach(function(t){return a.push(r[0].stars[t])});var s=[];a.forEach(function(t,e){if(void 0!==a[e+1]){var r=a[e+1].amount-t.amount;s.push(r)}});var i=s.length;return(s.reduce(function(t,e){return t+e})/i).toFixed(2)}}}},g263:function(t,e,r){"use strict";function a(t){r("keLc")}var n=r("jFEI"),s=r("hME2"),i=r("VU/8"),o=a,u=i(n.a,s.a,o,null,null);e.a=u.exports},hME2:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("h3",{staticClass:"chart-title"},[t._v(" "+t._s(t.chartTitle)+" ")])},n=[],s={render:a,staticRenderFns:n};e.a=s},hSYi:function(t,e,r){"use strict";var a=r("sEd7");e.a={components:{FooterLayout:a.a}}},igMF:function(t,e,r){"use strict";function a(t){r("UFGK")}var n=r("e7jz"),s=r("/ytH"),i=r("VU/8"),o=a,u=i(n.a,s.a,o,null,null);e.a=u.exports},jFEI:function(t,e,r){"use strict";e.a={props:{chartTitle:{required:!0}}}},jOZ9:function(t,e){},jntt:function(t,e,r){"use strict";var a=r("EuLS"),n=r("IzkB"),s=r("KYem"),i=r("wLHo");e.a={components:{BaseLayout:a.a,PageHeader:n.a,ListCard:s.a},data:function(){return{versions:i.a}}}},keLc:function(t,e){},ll94:function(t,e){t.exports={_args:[["vue-chartjs@3.0.2","/Users/grazynalasek/projects/serversideswift.racing/Frontend"]],_from:"vue-chartjs@3.0.2",_id:"vue-chartjs@3.0.2",_inBundle:!1,_integrity:"sha512-m6ItjL8o3ff4JpbF083RzZ4KPiNBFsqMKmWCcAtlisOdm1vvB/9mUDJePmxYKJkvl2AcpvLPiH1cUrhq46r8vA==",_location:"/vue-chartjs",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"vue-chartjs@3.0.2",name:"vue-chartjs",escapedName:"vue-chartjs",rawSpec:"3.0.2",saveSpec:null,fetchSpec:"3.0.2"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/vue-chartjs/-/vue-chartjs-3.0.2.tgz",_spec:"3.0.2",_where:"/Users/grazynalasek/projects/serversideswift.racing/Frontend",author:{name:"Jakub Juszczak",email:"jakub@posteo.de"},browserify:{transform:["babelify"]},bugs:{url:"https://github.com/apertureless/vue-chartjs/issues"},contributors:[{name:"Thorsten Lünborg",url:"https://github.com/LinusBorg"},{name:"Juan Carlos Alonso",url:"https://github.com/jcalonso"}],dependencies:{"lodash.merge":"^4.6.0"},description:"Vue.js wrapper for chart.js for creating beautiful charts.",devDependencies:{"@babel/cli":"^7.0.0-beta.31","@babel/core":"^7.0.0-beta.31","@babel/preset-env":"^7.0.0-beta.31","@babel/preset-stage-2":"^7.0.0-beta.31","babel-loader":"8.0.0-beta.0",chai:"^3.5.0","chart.js":"2.7.0",chromedriver:"^2.28.0","connect-history-api-fallback":"^1.1.0","cross-env":"^3.2.4","cross-spawn":"^5.1.0","css-loader":"^0.28.0",eslint:"^3.19.0","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.1","eslint-plugin-import":"^2.2.0","eslint-plugin-node":"^4.2.2","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1","eventsource-polyfill":"^0.9.6",express:"^4.15.2","extract-text-webpack-plugin":"^3.0.1","file-loader":"^0.10.1","friendly-errors-webpack-plugin":"^1.6.1","function-bind":"^1.0.2","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.4","inject-loader":"^3.0.0",isparta:"^4.0.0","jasmine-core":"^2.5.2","json-loader":"^0.5.4",karma:"^1.5.0","karma-coverage":"^1.1.1","karma-jasmine":"^1.0.2","karma-mocha":"^1.2.0","karma-phantomjs-launcher":"^1.0.4","karma-phantomjs-shim":"^1.4.0","karma-sinon-chai":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"2",lolex:"^1.6.0",mocha:"^3.1.0",nightwatch:"^0.9.14",opn:"^5.1.0",ora:"^1.2.0","phantomjs-prebuilt":"^2.1.13",portfinder:"^1.0.13","selenium-server":"^3.3.1",shelljs:"^0.7.7",sinon:"^2.1.0","sinon-chai":"^2.9.0","url-loader":"^0.5.8",vue:"2.5.2","vue-hot-reload-api":"2.1.0","vue-html-loader":"^1.2.4","vue-loader":"^13.3.0","vue-style-loader":"3.0.1","vue-template-compiler":"2.5.2",webpack:"^3.7.1","webpack-dev-middleware":"^1.10.1","webpack-hot-middleware":"^2.17.1","webpack-merge":"^4.1.0"},engines:{node:">=6.9.0",npm:">= 3.0.0"},files:["src","dist","es"],greenkeeper:{ignore:["extract-text-webpack-plugin","karma-webpack","webpack","webpack-merge"]},homepage:"http://vue-chartjs.org","jsnext:main":"es/index.js",keywords:["ChartJs","Vue","Visualisation","Wrapper","Charts"],license:"MIT",main:"dist/vue-chartjs.js",maintainers:[{name:"Jakub Juszczak",email:"jakub@posteo.de",url:"http://www.jakubjuszczak.de"}],module:"es/index.js",name:"vue-chartjs",peerDependencies:{"chart.js":"2.7.x"},repository:{type:"git",url:"git+ssh://git@github.com/apertureless/vue-chartjs.git"},scripts:{build:"yarn run release && yarn run build:es","build:es":"cross-env BABEL_ENV=es babel src --out-dir es",dev:"node build/dev-server.js",e2e:"node test/e2e/runner.js",lint:"eslint --ext .js,.vue src test/unit/specs test/e2e/specs",prepublishOnly:"yarn run lint && yarn run test && yarn run build",release:"webpack --progress --hide-modules --config  ./build/webpack.release.js && NODE_ENV=production webpack --progress --hide-modules --config  ./build/webpack.release.min.js",test:"npm run unit",unit:"karma start test/unit/karma.conf.js --single-run"},unpkg:"dist/vue-chartjs.min.js",version:"3.0.2"}},mUbh:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r.d(e,"setRepoList",function(){return o}),r.d(e,"setStarsDataToAccordingGitRepo",function(){return u});var a=r("Dd8w"),n=r.n(a),s=r("Du/2"),i=r("2W/6"),o=function(t,e){t.commit(s.a,e)},u=function(t,e){var r=t.getters.getRepoList;r=r.map(function(t){if(t.id===e.gitRepoId){var r={};e.list.forEach(function(t){var e=i.a.formatDate(t.created_at);r[e]=n()({},t,{created_at:e})}),t.stars=r}return t}),t.commit(s.a,r)}},nR4I:function(t,e,r){"use strict";var a=r("nncI"),n=r("1EcC"),s=r("VU/8"),i=s(a.a,n.a,null,null,null);e.a=i.exports},nncI:function(t,e,r){"use strict";var a=r("lHA8"),n=r.n(a),s=r("Gu7T"),i=r.n(s),o=r("BAi7"),u=r("g263"),c=r("vIW1"),l=r("cPWW"),f=r("2W/6");e.a={components:{LineChart:o.a,ChartTitle:u.a},computed:{hasChartData:function(){return null!==this.chartData&&this.chartData.labels.length>0},chartData:function(){var t=this.$store.getters.getRepoList;if(0===t.length)return null;if(!l.a.doesListElementsHave("stars",t))return null;var e=f.a.getListWithPastDays(30),r=c.a.createDataSetForEachRepo(e,t);return r=l.a.sortDescOnSumOfGivenProp("data",r),{labels:r[0].chartLabels,datasets:r}},chartTitle:function(){var t=this.chartData.datasets[0].originData,e=t.map(function(t){return f.a.getMonthFromDate(t.created_at)}),r=[].concat(i()(new n.a(e))),a=r.map(function(t){return f.a.getMonthByNumber(t)}),s=a.map(function(t){return t.slice(0,3)+"."});return s.length>1?s.join(" / "):s[0]}}}},oRvq:function(t,e){},sEd7:function(t,e,r){"use strict";function a(t){r("jOZ9")}var n=r("+uOD"),s=r("VU/8"),i=a,o=s(null,n.a,i,null,null);e.a=o.exports},ukYY:function(t,e,r){"use strict";var a=r("bOdI"),n=r.n(a),s=r("Du/2");e.a=n()({},s.a,function(t,e){t.repoList=e})},uslO:function(t,e,r){function a(t){return r(n(t))}function n(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};a.keys=function(){return Object.keys(s)},a.resolve=n,t.exports=a,a.id="uslO"},vIW1:function(t,e,r){"use strict";var a=r("Dd8w"),n=r.n(a),s=r("Zrlr"),i=r.n(s),o=r("wxAW"),u=r.n(o),c=r("2W/6"),l=r("SRcI"),f=r("FN8c"),h=function(){function t(){i()(this,t)}return u()(t,null,[{key:"createDataSetForEachRepo",value:function(t,e){return e.map(function(e){var r=l.a.createListOfStarsForEachDay(t,e.stars),a={label:e.name,data:r.map(function(t){return t.amount}),chartLabels:r.map(function(t){return c.a.getDayFromDate(t.created_at)}),originData:r};return n()({},a,f.a[e.name].lineChartStyle)})}}]),t}();e.a=h},vL3M:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("base-layout",[r("div",{staticClass:"imprint"},[r("page-header",{attrs:{title:"Imprint"}}),t._v(" "),r("div",{staticClass:"card"},[r("h3",[t._v(" developed by ")]),t._v(" "),r("h2",[t._v(" Martin J. Lasek ")]),t._v(" "),r("p",[t._v(" iOS/Web Fullstack Developer ")]),t._v(" "),r("p",[r("a",{attrs:{href:"mailto:kontakt@martinlasek.de"}},[t._v("\n          kontakt@martinlasek.de\n        ")])]),t._v(" "),r("p",{staticClass:"social"},[r("a",{attrs:{href:"https://github.com/MartinLasek",target:"_blank"}},[t._v("Github")]),t._v(" /\n        "),r("a",{attrs:{href:"https://twitter.com/martinlasek",target:"_blank"}},[t._v("Twitter")]),t._v(" /\n        "),r("a",{attrs:{href:"https://www.instagram.com/martin_lasek/",target:"_blank"}},[t._v("Instagram")])])])],1)])},n=[],s={render:a,staticRenderFns:n};e.a=s},wLHo:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var a=[{number:"2.0.0",changes:["redesign of whole website","chart displays last 30 days from today on","stars are scraped every hour","growth is calculated based on last 365 days","frontend is separated from backend (api)","framework links to its respective github repo"]}]},xJD8:function(t,e,r){"use strict";e.a={name:"app"}},xWGA:function(t,e,r){"use strict";var a=r("jntt"),n=r("8jyh"),s=r("VU/8"),i=s(a.a,n.a,null,null,null);e.a=i.exports},yKoo:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("base-layout",[r("page-header",{attrs:{title:"serversideswift.racing",link:"/"}}),t._v(" "),r("day-chart"),t._v(" "),r("separator"),t._v(" "),r("repo-growth",{attrs:{gitRepoName:"vapor",link:"https://github.com/vapor/vapor"}}),t._v(" "),r("repo-growth",{attrs:{gitRepoName:"perfect",link:"https://github.com/perfectlysoft/perfect"}}),t._v(" "),r("repo-growth",{attrs:{gitRepoName:"kitura",link:"https://github.com/IBM-Swift/Kitura"}}),t._v(" "),r("repo-growth",{attrs:{gitRepoName:"zewo",link:"https://github.com/Zewo/Zewo"}})],1)},n=[],s={render:a,staticRenderFns:n};e.a=s}},["NHnr"]);
//# sourceMappingURL=app.js.map