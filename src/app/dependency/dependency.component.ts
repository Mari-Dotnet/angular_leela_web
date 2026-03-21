import { Component, Inject, inject } from '@angular/core';
import { LoggerService } from '../logger.service';
import { ConsoleLoggerService } from '../loggerToken/console-logger.service';
import { Logger_token } from '../loggerToken/logger.token';
import { Ilogger } from '../loggerToken/logger.interface';
import { File_LoggerService } from '../loggerToken/file-logger.service';

@Component({
  selector: 'app-dependency',
  standalone: true,
  imports: [],
  templateUrl: './dependency.component.html',
  styleUrl: './dependency.component.css',
  //providers: [LoggerService] //eg:1
  //providers: [{ provide: LoggerService, useClass: LoggerService }] //eg:2
  //providers:[{provide: Logger_token, useClass: ConsoleLoggerService}] //eg:3 it will come from logger.token.ts file
  providers:[{provide: Logger_token, useClass: File_LoggerService}] //eg:3 it will come from logger.token.ts file
})
export class DependencyComponent {
  // constructor(private logger: LoggerService) {
  //   this.logger.log("DependencyComponent initialized");
  // }
  /**
   *
   */
  constructor( @Inject(Logger_token) private logger: Ilogger) {
    this.logger.log("DependencyComponent initialized"); 
  }
}
