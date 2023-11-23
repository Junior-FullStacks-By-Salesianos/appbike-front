
/*export interface BikeListResponse {
    results: Bike[];
}*/

export interface Bike {
    uuid: string;
    nombre: string;
    marca: String;
    modelo: String;
    estado: Estado;
    usos: number;
    estacion: String;
}

export enum Estado {
    Acceptable = "ACCEPTABLE",
    Good = "GOOD",
    NeedsToBeReplaced = "NEEDS_TO_BE_REPLACED",
    New = "NEW",
    WornOut = "WORN_OUT",
}
