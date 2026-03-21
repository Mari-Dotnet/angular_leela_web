import { Injectable } from "@angular/core";
import { Ilogger } from "./logger.interface";

@Injectable({
    providedIn: 'root'
})
export class File_LoggerService implements Ilogger {
    log(message: string) {
        console.log("File_LoggerService: " + message);
    }
 }