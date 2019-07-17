import GeoCode from 'react-geocode'

class Maps{

    constructor(){
        GeoCode.setApiKey('AIzaSyDWy8UtWIVanu09MYHFGa-3bbtKByx1tDU');
    }

    getCoords(cb){
        let lat, lon;
        navigator.geolocation.getCurrentPosition( res =>  {
            lat = res.coords.latitude;
            lon = res.coords.longitude;
            cb([lat, lon]);
        })
        return;
    }

    fromAddress(address){
        GeoCode.fromAddress(address).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              console.log(lat, lng);
            },
            error => {
              console.error(error);
            }
        );
    }

    fromLatLong(cb){
        this.getCoords(res => {
            GeoCode.fromLatLng(res[0].toString(), res[1].toString()).then(
                response => {
                    const address = response.results[0].formatted_address;
                    cb(address)
                },
                error => {
                    console.error(error);
                 }
            );
        });
    }

}

export {Maps}