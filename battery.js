class Battery {
    _energy;

    constructor(energy) {
        this._energy = energy;
    }

    get energy() {
        return this._energy;
    }

    set energy(value) {
        this._energy = value;
    }
    decreaseEnergy() {
        if (this._energy > 0) {
            this._energy--;
        }
    }
}