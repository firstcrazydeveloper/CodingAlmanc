var Dashboard=angular.module("CodingAlmanacAPP.Dashboard",["ngRoute"]).config(["$routeProvider",function($routeProvider){}]);Dashboard.filter("duration",function(){return function(millseconds){var seconds=Math.floor(millseconds/1e3),h=3600,m=60,hours=Math.floor(seconds/h),minutes=Math.floor(seconds%h/m),scnds=Math.floor(seconds%m),timeString="";return 10>scnds&&(scnds="0"+scnds),10>hours&&(hours="0"+hours),10>minutes&&(minutes="0"+minutes),timeString=hours+":"+minutes+":"+scnds}});var LandingCtrl=Dashboard.controller("LandingCtrl",["$rootScope","$scope","$filter","constants",function($rootScope,$scope,$filter,constants){$scope.slides=[{header:"Share Your Knowledge !!",body:"This site is used for sharing coding knowledge. A single Tool to share your knowledge!!",button:"More Details"},{header:"Add New Connection !!",body:"You can add different coder in your list.",button:"User Stories"},{header:"Manage Profesional Link!!",body:"Yow can multiply your professional link which will help to grow your coding standard & knowledge!!",button:"Manager Comments"}];var your_url="http://firstcrazydeveloper.com/Blogs/BlogView.html/46/importance-of-config-and-run-blocks-in-angularjs";$.ajax({url:your_url,type:"GET",success:function(res){var text=res.responseText;alert(text)}})}]);LandingCtrl.LandingData=["$q","$rootScope","CodingAlmanacAPI","constants",function($q,$rootScope,CodingAlmanacAPI,constants){var defer=q.defer();return defer.resolve(["Test Data","Test Data2"]),defer.promise}];var share=angular.module("CodingAlmanacAPP.Share",["ngRoute"]).config(["$routeProvider",function($routeProvider){}]).controller("HeaderCtrl",["$rootScope","$scope","$filter","constants",function($rootScope,$scope,$filter,constants){}]).controller("FooterCtrl",["$rootScope","$scope","$filter","constants",function($rootScope,$scope,$filter,constants){}]);