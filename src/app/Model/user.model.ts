export interface User {
    id: string,
    session?: string;    
    Orgs:{
        orgName: string;
        location: string;
        departments: Array<string>;
    }
}