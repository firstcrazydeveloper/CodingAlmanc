angular.module('CodingAlmanacAPP').constant("constants", {

    Default_AirlineName: '--SelectAll--',
    Default_AirlineId: 'SA',
    GridColumn: {
        DisplayName: {
            AirlineName: 'Airlines',
            OriginName: 'Source Name',
            destinationName: 'Destination Name',
            TakeoffDate: 'Departure',
            LandingDate: 'Arrival',
            duration: 'Duration',
            Price: 'Price',
            Class: 'Class'
        },
        FieldName: {
            AirlineName: 'airlineName',
            OriginName: 'originName',
            destinationName: 'destinationName',
            TakeoffDate: 'takeoffDate',
            LandingDate: 'landingDate',
            duration: 'duration',
            Price: 'price',
            Class: 'class'
        }
    }

})