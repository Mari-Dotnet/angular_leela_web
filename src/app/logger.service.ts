import { Injectable } from "@angular/core";

@Injectable ({
    providedIn: 'root' // its used to provide the service in the root module
})  
export class LoggerService {
    log(message: string) {
        console.log("LoggerService: " + message);
    }
}
