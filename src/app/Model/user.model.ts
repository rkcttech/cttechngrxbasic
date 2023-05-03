export interface IOrg {
    orgName: string;
    location: string;
    departments: Array<string>;
}
export interface User {
    id: string,
    session?: string;
    Orgs: IOrg,
    OrgsList: IOrg[]
}