class FlashLamp {
    _battery;
    _status;

    constructor(battery, status) {
        this._battery = battery;
        this._status = status;
    }

    get battery() {
        return this._battery;
    }

    set battery(value) {
        this._battery = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
    light() {
        if(this._status){
            alert("Lighting");
        } else {
            alert("Not lighting");
        }
    };

    turnOn() {
        this._status = true;
    }

    turnOff() {
        this._status = false;
    }
}