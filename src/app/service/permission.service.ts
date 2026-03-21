import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
   isTeamPresent(userToken:any,teamId: string): Observable<boolean>{
    const hasPermission= userToken && userToken.permission && userToken.permission.includes(`team:${teamId}`);
    return of(hasPermission);
   }
}



