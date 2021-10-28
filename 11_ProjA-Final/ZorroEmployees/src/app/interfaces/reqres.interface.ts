
export interface Employee {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;     
}

export interface WSResponse {
    page: string;
    per_page: string;
    total: number;
    total_pages: number;
    data: Employee[];
}