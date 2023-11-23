export interface AllStationsResponse {
   results: Station[];
}
export interface Station{
    id:          string;
    name:        string;
    coordinates: string;
    capacity:    number;
    bikes:       number;
}