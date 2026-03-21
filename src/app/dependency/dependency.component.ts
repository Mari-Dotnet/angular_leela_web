import { Component, Inject, inject } from '@angular/core';
import { LoggerService } from '../logger.service';
import { ConsoleLoggerService } from '../loggerToken/console-logger.service';
import { Logger_token } from '../loggerToken/logger.token';
import { Ilogger } from '../loggerToken/logger.interface';
import { File_LoggerService } from '../loggerToken/file-logger.service';
import { TestService } from '../loggerToken/test.service';
import { Logger_factory } from '../loggerToken/logger.factory';

@Component({
  selector: 'app-dependency',
  standalone: true,
  imports: [],
  templateUrl: './dependency.component.html',
  styleUrl: './dependency.component.css',
  //providers: [LoggerService] //eg:1
  //providers: [{ provide: LoggerService, useClass: LoggerService }] //eg:2
  //providers:[{provide: Logger_token, useClass: ConsoleLoggerService}] //eg:3 it will come from logger.token.ts file
   //providers:[{provide: Logger_token, useClass: File_LoggerService}] //eg:3 it will come from logger.token.ts file
   //providers:[{provide: ConsoleLoggerService, useClass: File_LoggerService}] //eg:3 it will come from logger.token.ts file
    //providers:[{provide:ConsoleLoggerService, useFactory:()=> new ConsoleLoggerService()}] //eg:3 it will come from logger.token.ts file
      //Use factory with condition
      /** 
    providers:[{provide:ConsoleLoggerService,useFactory:(tests: TestService)=> 
        tests.status ? new ConsoleLoggerService() :
         new File_LoggerService(),deps:[TestService]}
        ] 
         */
        //logger factory condition moved to logger.factory.ts file
        providers:[Logger_factory]
})
export class DependencyComponent {
   constructor(private logger: ConsoleLoggerService) {
    this.logger.log("DependencyComponent initialized");
   }
   /*
  constructor( @Inject(Logger_token) private logger: Ilogger) {
    this.logger.log("DependencyComponent initialized"); 
  }
 */
 /*whatevr we menrioned on constructor it will be not taken 
  the provider will be taken and the useclass will be taken 
 constructor(private logger: ConsoleLoggerService) {
    this.logger.log("DependencyComponent initialized"); 
  }
    */
}
