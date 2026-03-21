import { Injectable } from "@angular/core";
import { Ilogger } from "./logger.interface";

@Injectable({
    providedIn: 'root'
})
export class ConsoleLoggerService implements Ilogger {
    log(message: string) {
        console.log("ConsoleLoggerService: " + message);
    }
}