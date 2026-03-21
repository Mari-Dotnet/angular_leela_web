import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { PermissionService } from "./permission.service";

export const canTeamActivate : CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
    // Implementation for team activation logic
    const permissionService = inject(PermissionService);
    return permissionService.isTeamPresent(UserToken, route.params['id']);
};

export const UserToken = {
    permission:["team:1","team:2","team:3"]
};