class BaseLog {
    constructor() {
        this.logName = 'Log1';
    }

    log(msg) {
        console.log(this.logName + ': ' + msg);
    }
}

class Logger extends BaseLog {

    constructor(logName) {
        super(logName);
    }

    writeLine(msg) {
        super.log(msg + '\r\n');
    }
}
