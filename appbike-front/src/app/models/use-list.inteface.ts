// Generated by https://quicktype.io

export interface UseListResponse {
    content: Use[];
    size: number;
    totalElements: number;
    pageNumber: number;
    first: boolean;
    last: boolean;
}

export interface Use {
    id: string;
    fechaInicio: string;
    fechaFin: string;
    coste: number;
    bicicleta: string;
    estacionFin: string;
    usuario: string;
}
