export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(mapGivid: string) {
        this.googleMap = new google.maps.Map(document.getElementById(mapGivid),
            {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0
                }
            });
    }

    addVarker(mappadle: IMappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappadle.location.lat,
                lng: mappadle.location.lng
            }
        })
    }
}

interface IMappable {
    location: {
        lat: number,
        lng: number
    }
}