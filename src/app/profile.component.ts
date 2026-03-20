import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    standalone:true,
    //selector:'[app-profile]',
    //selector:'app-profile',
    selector:'app1-profile, [app1-profile]',
    //selector:'[app-profile]:not(p)',
    templateUrl:'./profile.component.html',
    styleUrl:'./profile.component.css',
    encapsulation:ViewEncapsulation.Emulated


})
export default class profileComponents{

}