import {  InjectionToken } from "@angular/core";
import { Ilogger } from "./logger.interface";

export const Logger_token= new InjectionToken<Ilogger>('Loggertoken');