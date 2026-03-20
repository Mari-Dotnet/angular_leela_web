import { Component, inject, Input } from "@angular/core";
import {trimmode} from './counter.service'
import { formatNumber } from "@angular/common";
import { GetterinputComponent } from "../getterinput/getterinput.component";

@Component({
    standalone:true,
    selector:"app-counter",
    templateUrl:"./counter.component.html",
    styleUrl:"./counter.component.css",
    inputs: ['counter', 'message','ischeck','alaischeck','title:countertitle']

})

export default class countercomponent extends GetterinputComponent{
@Input({required:true, transform: changevalue}) counter:number=0;
@Input({transform:trimmode}) message:string="";
@Input({required:true}) ischeck:boolean| string= true
@Input({alias:"testparam"}) aliascheck:string=''
}
function changevalue(value:number){
    return value / 5;
}
function CaseChange(data:string){
    return data.toUpperCase()
}