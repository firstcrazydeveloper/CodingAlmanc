function modalDialog($modal,$templateCache){function deleteDialog(itemName){var title="Confirm Delete";itemName=itemName||"item";var msg="Delete "+itemName+"?";return confirmationDialog(title,msg)}function confirmationDialog(title,msg,okText,cancelText){var modalOptions={templateUrl:"modalDialog.tpl.html",controller:ModalInstance,keyboard:!0,resolve:{options:function(){return{title:title,message:msg,okText:okText,cancelText:cancelText}}}};return $modal.open(modalOptions).result}var service={deleteDialog:deleteDialog,confirmationDialog:confirmationDialog};return $templateCache.put("modalDialog.tpl.html",'<div>    <div class="modal-header">        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" data-ng-click="cancel()">&times;</button>        <h3>{{title}}</h3>    </div>    <div class="modal-body">        <p>{{message}}</p>    </div>    <div class="modal-footer">        <button class="btn btn-primary" data-ng-click="ok()">{{okText}}</button>        <button class="btn btn-info" data-ng-click="cancel()">{{cancelText}}</button>    </div></div>'),service}angular.module("WebAPIService",["ngResource"]).factory("CodingAlmanacAPI",["$http","configuration",function($http,configuration){var CodingAlmanacAPISVC=function(){};return CodingAlmanacAPISVC.GetAirlineMap=function(){var airlineMap={SJ:"Spicejet",AI:"Air India",G8:"Go Air",JA:"Jet Airways",IN:"Indigo"};return airlineMap},CodingAlmanacAPISVC.GetAirportMap=function(){var airportMap={DEL:"New Delhi",MUM:"Mumbai"};return airportMap},CodingAlmanacAPISVC.GetFlightsData=function(){var flightsData=[{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396614600000",landingTime:"1396625400000",price:"11500",airlineCode:"G8","class":"Business"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396616400000",landingTime:"1396623600000",price:"14400",airlineCode:"AI","class":"Business"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396618200000",landingTime:"1396629000000",price:"12300",airlineCode:"JA","class":"Business"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396620000000",landingTime:"1396627200000",price:"15200",airlineCode:"SJ","class":"Business"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396621800000",landingTime:"1396632600000",price:"16700",airlineCode:"IN","class":"Business"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396596600000",landingTime:"1396607400000",price:"5500",airlineCode:"G8","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396598400000",landingTime:"1396605600000",price:"4400",airlineCode:"AI","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396600200000",landingTime:"1396611000000",price:"4600",airlineCode:"JA","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396602000000",landingTime:"1396609200000",price:"7800",airlineCode:"SJ","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396603800000",landingTime:"1396614600000",price:"8700",airlineCode:"IN","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396605600000",landingTime:"1396612800000",price:"5000",airlineCode:"G8","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396607400000",landingTime:"1396618200000",price:"9800",airlineCode:"AI","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396609200000",landingTime:"1396616400000",price:"4100",airlineCode:"JA","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396611000000",landingTime:"1396621800000",price:"4600",airlineCode:"SJ","class":"Economy"},{originCode:"DEL",destinationCode:"MUM",takeoffTime:"1396612800000",landingTime:"1396620000000",price:"5700",airlineCode:"IN","class":"Economy"}];return flightsData},CodingAlmanacAPISVC}]);var bootstrapModule=angular.module("TrendAppCommon.bootstrap",["ui.bootstrap"]);bootstrapModule.factory("bootstrap.dialog",["$modal","$templateCache",modalDialog]);var ModalInstance=["$scope","$modalInstance","options",function($scope,$modalInstance,options){$scope.title=options.title||"Title",$scope.message=options.message||"",$scope.okText=options.okText||"OK",$scope.cancelText=options.cancelText||"Cancel",$scope.ok=function(){$modalInstance.close("ok")},$scope.cancel=function(){$modalInstance.dismiss("cancel")}}];angular.module("CodingAlmanacAPP").constant("constants",{Default_AirlineName:"--SelectAll--",Default_AirlineId:"SA",GridColumn:{DisplayName:{AirlineName:"Airlines",OriginName:"Source Name",destinationName:"Destination Name",TakeoffDate:"Departure",LandingDate:"Arrival",duration:"Duration",Price:"Price",Class:"Class"},FieldName:{AirlineName:"airlineName",OriginName:"originName",destinationName:"destinationName",TakeoffDate:"takeoffDate",LandingDate:"landingDate",duration:"duration",Price:"price",Class:"class"}}});