import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone:true,
    name:'grid'
})
export class gridpipe implements
PipeTransform{
transform(value:string):string{
return `Hellow ${value}`;
}
}