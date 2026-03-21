import { Routes } from '@angular/router';
import { canTeamActivate } from './service/canActivateTeam';
import { TeamComponent } from './team/team.component';

export const routes: Routes = [
    {path:"team/:id",component: TeamComponent,canActivate:[canTeamActivate]},
];
