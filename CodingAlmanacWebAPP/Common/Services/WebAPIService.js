﻿angular.module('WebAPIService', ['ngResource'])

.factory('CodingAlmanacAPI', ['$http', 'configuration', function ($http, configuration) {


    var CodingAlmanacAPISVC = function () {

    };

    CodingAlmanacAPISVC.GetAirlineMap = function () {

        //dummy app so here I am returning hardcore value but here we can call web api service. Example code for Web Api commented below

        //return $http.get(configuration.API_URL + 'your API URL').then(function (response) {

        //    return response.data;

        //});

        var airlineMap = {
            "SJ": "Spicejet",
            "AI": "Air India",
            "G8": "Go Air",
            "JA": "Jet Airways",
            "IN": "Indigo"
        };
        return airlineMap;
    };

    CodingAlmanacAPISVC.GetAirportMap = function () {

        var airportMap = {
            "DEL": "New Delhi",
            "MUM": "Mumbai"
        };
        return airportMap;
    };

    CodingAlmanacAPISVC.GetFlightsData = function () {

        var flightsData = [
    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396614600000",
        landingTime: "1396625400000",
        price: "11500",
        airlineCode: "G8",
        class: "Business"
    },

    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396616400000",
        landingTime: "1396623600000",
        price: "14400",
        airlineCode: "AI",
        class: "Business"
    },

    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396618200000",
        landingTime: "1396629000000",
        price: "12300",
        airlineCode: "JA",
        class: "Business"
    },

    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396620000000",
        landingTime: "1396627200000",
        price: "15200",
        airlineCode: "SJ",
        class: "Business"
    },

    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396621800000",
        landingTime: "1396632600000",
        price: "16700",
        airlineCode: "IN",
        class: "Business"
    },

    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396596600000",
        landingTime: "1396607400000",
        price: "5500",
        airlineCode: "G8",
        class: "Economy"
    },

    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396598400000",
        landingTime: "1396605600000",
        price: "4400",
        airlineCode: "AI",
        class: "Economy"
    },

    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396600200000",
        landingTime: "1396611000000",
        price: "4600",
        airlineCode: "JA",
        class: "Economy"
    },

    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396602000000",
        landingTime: "1396609200000",
        price: "7800",
        airlineCode: "SJ",
        class: "Economy"
    },

    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396603800000",
        landingTime: "1396614600000",
        price: "8700",
        airlineCode: "IN",
        class: "Economy"
    },

    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396605600000",
        landingTime: "1396612800000",
        price: "5000",
        airlineCode: "G8",
        class: "Economy"
    },

    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396607400000",
        landingTime: "1396618200000",
        price: "9800",
        airlineCode: "AI",
        class: "Economy"
    },

    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396609200000",
        landingTime: "1396616400000",
        price: "4100",
        airlineCode: "JA",
        class: "Economy"
    },

    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396611000000",
        landingTime: "1396621800000",
        price: "4600",
        airlineCode: "SJ",
        class: "Economy"
    },

    {
        originCode: "DEL",
        destinationCode: "MUM",
        takeoffTime: "1396612800000",
        landingTime: "1396620000000",
        price: "5700",
        airlineCode: "IN",
        class: "Economy"
    }];
        return flightsData;
    };

    return CodingAlmanacAPISVC;
}])