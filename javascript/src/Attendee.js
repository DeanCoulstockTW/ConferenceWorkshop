class Attendee {
    constructor() {
        this.id = Math.random().toString(36).substr(2, 9);
    }
}

module.exports = Attendee;