"use strict";angular.module("testCssAnim",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router","mm.foundation","gmp.gmp-button"]).config(["$stateProvider","$urlRouterProvider",function(n,t){n.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}),t.otherwise("/")}]),angular.module("testCssAnim").controller("NavbarCtrl",["$scope",function(n){n.date=new Date}]),angular.module("testCssAnim").controller("MainCtrl",["$scope",function(n){n.awesomeThings=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Foundation",url:"http://foundation.zurb.com/",description:"The most advanced responsive front-end framework in the world.",logo:"foundation.png"},{title:"Angular Foundation",url:"http://pineconellc.github.io/angular-foundation/",description:"A set of native AngularJS directives based on Foundation's markup and CSS",logo:"angular-foundation.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}],angular.forEach(n.awesomeThings,function(n){n.rank=Math.random()})}]),angular.module("testCssAnim").run(["$templateCache",function(n){n.put("app/main/main.html",'<style type="text/css">\n  .container{\n  }\n\n  .test{\n    position: relative;\n    width: 50px;\n    height: 50px;\n    background: #0f0;\n/*  left: 0px;\ntop: 0px;*/\n\n-webkit-transition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000);\n-moz-transition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000);\n-o-transition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000);\ntransition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000); /* ease-in-out */\n\n\n/* Chrome, Safari, Opera */\n-webkit-animation-name: land;\n-webkit-animation-duration: 2s;\n-webkit-animation-delay: 2s;\n-webkit-animation-iteration-count: 1;\n-webkit-animation-direction: alternate;\n-webkit-animation-play-state: running;\n}\n\n/* Chrome, Safari, Opera */\n@-webkit-keyframes land {\n  0%   {opacity: 0; position: absolute; top: -200px;}\n  100% {opacity: 1; position: absolute; top: 0px;}\n}\n\n\n.myRow{\n  width: 330px;\n  height: auto;\n  margin: 0 auto;\n}\n\n.header h1{\n  color: #505050;\n}\n\nh2{\n  position: relative;\n  font-family: \'Quicksand\', sans-serif;\n  -webkit-transition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000);\n  -moz-transition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000);\n  -o-transition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000);\n  transition-timing-function: cubic-bezier(0.420, 0.000, 0.580, 1.000); /* ease-in-out */\n\n\n  /* Chrome, Safari, Opera */\n  -webkit-animation-name: land;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-iteration-count: 1;\n  -webkit-animation-direction: alternate;\n  -webkit-animation-play-state: running;\n}\n\n.header{\n  overflow: hidden;\n  padding-top: 15%;\n  width: 100%;\n  min-height: 300px;\n  height: 70%;\n  background: #505050;\n  text-align: center;\n  -webkit-box-shadow: 0px 17px 41px 0px rgba(0,0,0,0.75);\n  -moz-box-shadow: 0px 17px 41px 0px rgba(0,0,0,0.75);\n  box-shadow: 0px 17px 41px 0px rgba(0,0,0,0.75);\n\n  -webkit-animation: myfirst 20s linear 2s infinite alternate; /* Chrome, Safari, Opera */\n  animation: myfirst 20s linear 2s infinite alternate;\n\n}\n\n/* Chrome, Safari, Opera */\n@-webkit-keyframes myfirst {\n  0%   {background: #505050; left:0px; top:0px;}\n  10%   {background: #8e44ad; left:0px; top:0px;}\n  25%  {background: #d35400; left:200px; top:0px;}\n  50%  {background: #2980b9; left:200px; top:200px;}\n  75%  {background: #16a085; left:0px; top:200px;}\n  100% {background: #e74c3c; left:0px; top:0px;}\n}\n\n/* Standard syntax */\n@keyframes myfirst {\n  0%   {background: #8e44ad; left:0px; top:0px;}\n  25%  {background: #d35400; left:200px; top:0px;}\n  50%  {background: #2980b9; left:200px; top:200px;}\n  75%  {background: #16a085; left:0px; top:200px;}\n  100% {background: #e74c3c; left:0px; top:0px;}\n}\n\n\n.site-wrap h1{\n  color: #fff;\n  /*min-height: 500px;*/\n}\n\n#sqare{\n  width: 50px;\n  height: 50px;\n  background-color: pink;\n  color: #fff;\n  text-align: center;\n  /*margin: 0 auto;*/\n  -webkit-transition: all 500ms cubic-bezier(0.345, 0, 0.500, 1); /* older webkit */\n  -webkit-transition: all 500ms cubic-bezier(0.345, -0.405, 0.500, 1.650);\n  -moz-transition: all 500ms cubic-bezier(0.345, -0.405, 0.500, 1.650);\n  -o-transition: all 500ms cubic-bezier(0.345, -0.405, 0.500, 1.650);\n  transition: all 500ms cubic-bezier(0.345, -0.405, 0.500, 1.650); /* custom */\n\n  -webkit-transition-timing-function: cubic-bezier(0.345, 0, 0.500, 1); /* older webkit */\n  -webkit-transition-timing-function: cubic-bezier(0.345, -0.405, 0.500, 1.650);\n  -moz-transition-timing-function: cubic-bezier(0.345, -0.405, 0.500, 1.650);\n  -o-transition-timing-function: cubic-bezier(0.345, -0.405, 0.500, 1.650);\n  transition-timing-function: cubic-bezier(0.345, -0.405, 0.500, 1.650); /* custom */\n}\n\n.my_button:hover + #sqare{\n  width: 300px;\n  height: 300px;\n  background: rgba(22, 160, 133,1.0);\n  border-radius: 100%;\n  font-size: 50px;\n  margin-left: 38%;\n}\n\n.site-wrap{\n  overflow: hidden;\n  width: 100%;\n  height: 1500px;\n  background: -webkit-linear-gradient(180deg, #283048 10%, #859398 90%); /* Chrome 10+, Saf5.1+ */\n  background:    -moz-linear-gradient(180deg, #283048 10%, #859398 90%); /* FF3.6+ */\n  background:     -ms-linear-gradient(180deg, #283048 10%, #859398 90%); /* IE10 */\n  background:      -o-linear-gradient(180deg, #283048 10%, #859398 90%); /* Opera 11.10+ */\n  background:         linear-gradient(180deg, #283048 10%, #859398 90%); /* W3C */\n\n}\n\n\n</style><script type="text/javascript">\n  // window.addEventListener(\'load\', function(){\n    document.getElementsByClassName(\'site-wrap\')[0].style.height = window.innerHeight + "px";\n  // });\nwindow.addEventListener("resize", function(){\n  console.log(window.innerHeight);\n  document.getElementsByClassName(\'site-wrap\')[0].style.height = window.innerHeight + "px";\n\n});\n</script><div class="site-wrap"><div class="header"><h2>HELLO, I AM GMP</h2><div class="myRow"><gmp-button>test</gmp-button><gmp-button>flute</gmp-button><gmp-button>about</gmp-button></div></div></div>'),n.put("components/navbar/navbar.html",'<nav class="top-bar row" ng-controller="NavbarCtrl"><ul class="title-area"><li class="name"><h1><a href="https://github.com/Swiip/generator-gulp-angular">Gulp & Angular</a></h1></li></ul><section class="top-bar-section"><ul class="right"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="left"><li><a ng-href="#">Current date: {{ date | date:\'yyyy-MM-dd\' }}</a></li></ul></section></nav>')}]);