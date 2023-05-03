import { createAction, props } from "@ngrx/store";
import { IOrg } from "../Model/user.model";

export const register = createAction('[Patient Component] register');
export const signin = createAction('[Patient Component] Signin');
export const logout = createAction('[Patient Component] Log-out');
export const AddOrg = createAction('[Patient Component] Add-Org', props<{ newOrg: IOrg }>());
export const UpdateOrg = createAction('[Patient Component] Update-Org');
export const RemoveOrg = createAction('[Patient Component] Remove-Org');