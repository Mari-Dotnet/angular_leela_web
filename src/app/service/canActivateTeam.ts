import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { PermissionService, UserToken } from "./permission.service";

export const canTeamActivate : CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
    // Implementation for team activation logic
    const permissionService = inject(PermissionService);
    return permissionService.isTeamPresent(UserToken, route.params['id']);
};