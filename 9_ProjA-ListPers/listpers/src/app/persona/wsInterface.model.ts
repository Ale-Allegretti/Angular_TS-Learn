import { Support } from './support.model';
import { Persona } from './persona.model';

export interface WSInterface {
    page: string;
    per_page: string;
    total: number;
    total_pages: number;
    data: Persona[];
}

export interface WSInterfaceSingle {
    data: Persona;
    support: Support;
}