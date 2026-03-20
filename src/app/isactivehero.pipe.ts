import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone:true,
  name:'isactivehero',
  pure:false
})
export class isactiveheroPipe  implements PipeTransform{
    transform(heros: {name:string,isactive:boolean}[],) {
    return heros.filter(hero => hero.isactive);
    }

}