
export interface UserRequest {
    _id: string;
    from: FromTo;
    to: FromTo;
    project: string;
    text: string;
    expires: Date;
    __v: number;
    deleted: boolean;
}

export interface FromTo {
    _id: string;
    email: string;
    nome: string;
    cognome: string;
}