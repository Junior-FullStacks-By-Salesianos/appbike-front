export interface AllStationsResponse {
   results: Station[];
}
export interface Station{
    number:      number;
    name:        string;
    coordinates: string;
    capacity:    number;
    bikes:       number;
}