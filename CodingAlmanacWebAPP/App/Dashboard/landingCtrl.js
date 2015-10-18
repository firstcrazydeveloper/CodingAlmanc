
var LandingCtrl = Dashboard.controller('LandingCtrl', ['$rootScope', '$scope', '$filter', 'constants', function ($rootScope, $scope, $filter, constants) {

    // Scope level variable declartion    


    // End Scope level variable declartion


    // Scope level function declartion

    // End Scope level function declartion

    //Create data to display

    //End Create data to display

    //Grid data    

    //End grid data

    //Set all 

    $scope.slides = [
          {
              header: 'Share Your Knowledge !!',
              body: 'This site is used for sharing coding knowledge. A single Tool to share your knowledge!!',
              button: 'More Details'
          },
          {
              header: 'Add New Connection !!',
              body: 'You can add different coder in your list.',
              button: 'User Stories'
          },
          {
              header: 'Manage Profesional Link!!',
              body: 'Yow can multiply your professional link which will help to grow your coding standard & knowledge!!',
              button: 'Manager Comments'
          }
          //,
          //{
          //    header: "Employees List !!",
          //    body: "You can see all the employees details with their skill sets to assign the appropriate tasks and do efficient project management.",
          //    button: "Let Me Try !!"
          //},
          //{
          //    header: "Track Project Progress !!",
          //    body: "You can track Project Progress of all employees who are working under that project. You can also see the report for individual employee and his/her performance.",
          //    button: "Try It !!"
          //},
          //{
          //    header: "Add New Projects !!",
          //    body: "Your company can add different projects into this site and manager can assign the tasks to the users for the project.",
          //    button: "Check Out Snaps!!"
          //}
    ];
    var your_url = 'http://firstcrazydeveloper.com/Blogs/BlogView.html/46/importance-of-config-and-run-blocks-in-angularjs';

    $.ajax({
        url: your_url,
        type: 'GET',
        success: function (res) {
            var text = res.responseText;
            // then you can manipulate your text as you wish
            alert(text);
        }
    });

}]);

LandingCtrl.LandingData = ['$q', '$rootScope', 'CodingAlmanacAPI', 'constants', function ($q, $rootScope, CodingAlmanacAPI, constants) {




    //If we get data from Web API then need to use promise. Below is the sample code
    var defer = q.defer();
    //var flightdataPromise = FlightAPI.GetAirlineMap();
    //flightdataPromise.then(function (data) {


    //}, function (response) {

    //    //error handling here
    //})

    defer.resolve(['Test Data', 'Test Data2']);
    return defer.promise;



}];


