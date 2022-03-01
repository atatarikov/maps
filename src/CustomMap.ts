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
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappadle.location.lat,
                lng: mappadle.location.lng
            }
        })


        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappadle.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}



export interface IMappable {
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string;
}