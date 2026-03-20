import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    standalone:true,
    name:"lengthget"
})
export class lengthpipe implements PipeTransform{
    transform(value:string | string[] | number[]):number{
        return value.length;
    }
}