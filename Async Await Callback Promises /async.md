Javascript
    -> Synchronous
    -> Single Threaded 
    Javascript always comes with runtime environment i.e., browser, node, dino etc.
    
Execution Context > Executes one line at a time.
    example:
        Line 1: console.log(1);
        Line 2: console.log(2);
        Call Stack, Memory Heap

        Note: Operation of Line 2 will waits for the Operation of Line 1 to complete before executing.

Two Types of Code we use in Javascript:
    Blocking Code : Blocks the flow of the program, Read file Synchronously
        How the file gets read?
            File cannot be read by the program, to read file:
                The context has to be provided to the Kernel.
                Kernel will access the program/file and read the neccessary content.
                    And again the execution is given by the Kernel.
                During this process Kernel will block the program to do any other request. 

    Non-Blocking Code: Doesn't block any Execution, Read file Asynchronously
      





