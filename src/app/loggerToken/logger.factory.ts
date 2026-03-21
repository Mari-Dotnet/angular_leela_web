import { ConsoleLoggerService } from "./console-logger.service"
import { File_LoggerService } from "./file-logger.service"
import { TestService } from "./test.service"

export const Logger_factory = {
    provide: ConsoleLoggerService,
    useFactory: (tests: TestService) => {
        return tests.status ? new ConsoleLoggerService() : new File_LoggerService();
    },
    deps: [TestService]
}