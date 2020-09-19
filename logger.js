// interface Logger { 
// 	/**
// 	* When a process starts, it calls 'start' with processId and startTime.
// 	*/
// 	void start(String processId, long startTime);
	
// 	/**
// 	* When the same process ends, it calls 'end' with processId and endTime.
// 	*/
// 	void end(String processId, long endTime);

// 	/**
// 	* Prints the logs of this system sorted by the start time of processes in the below format
// 	* {processId} started at {startTime} and ended at {endTime}
// 	*/
// 	void print();
// }

class MyLogger {
    _logs = new Map();
    start = (processId, startTime) => {
        this._logs.set(processId, {
            start: startTime
        })
        return true;
    }
    end = (processId, endTime) => {
        if (!this._logs.has(processId)) {
            return false;
        }
        this._logs.get(processId).end = endTime;
        return true;
    }
    print = () => {
        this._logs.forEach((value, key) => (
            console.log(`${key} started at ${value.start} and ended at ${value.end}`)
        ))
    }
}

const log = new MyLogger();
log.start("1", 100);
log.start("2", 101);  
log.end("2", 102);
log.start("3", 103);
log.end("1", 104);
log.end("3", 105);
log.print();
