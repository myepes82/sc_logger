# SCL Logger for Node.js

This lightweight Node.js logging module uses ANSI escape sequences to provide colored and formatted output in the console. It supports different log levels (WARN, ERROR, DEBUG, INFO) and allows you to easily customize the appearance of log messages.


| Function                                       | Description                                        |
| ---------------------------------------------- | -------------------------------------------------- |
| <span style="color:yellow">**logWarn**(message, ...args)</span>  | Displays a warning message in the console.      |
| <span style="color:red">**logError**(message, ...args)</span>  | Displays an error message in the console.        |
| <span style="color:green">**logDebug**(message, ...args)</span> | Displays a debug message in the console.         |
| <span style="color:gray">**logInfo**(message, ...args)</span>  | Displays an informative message in the console.  |


## Usage

1. **Installation:**

   Install the module using npm:

   ```bash
   npm install my-logger

2. **Use:**
    ```javascript
    import { logDebug, logError, logInfo, logWarn } from "sc_logger"

    logWarn("This is a warning message")
    logError("This is an error message")    
    logDebug("This is a debug message")
    logInfo("This is an informative message")


> This is a simple way to log message using the logger, also u can pass parameters to the logger. 
3. **Use - Passing params:**
    ```javascript
    import { logDebug, logError, logInfo, logWarn } from "sc_logger"

    logWarn("This is a warning message {}, {}", arg1, arg2)
    logError("This is an error {} - message", arg)    
    logDebug("This is {} a  {} debug {} message", [arg1, arg2, arg3] )
    logInfo("This is an informative message")


## ANSI Colors Used
 - WARN: Yellow (\u001B[33m).
 - ERROR: Red (\u001B[31m).
 - DEBUG: Green (\u001B[32m).
 - INFO: Gray (\u001B[90m).