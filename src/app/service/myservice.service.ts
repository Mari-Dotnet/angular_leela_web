import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MyService{
    id= Math.random();
    getId(){
        return this.id;
    }
}