const Registration = require("./Registration");

class Conference {
    
    constructor() {
        this.registrations = [];
     }
        register(attendee) {
            let newRegistration = new Registration(attendee);
            this.registrations.push(newRegistration)
            return newRegistration;
        }
        
        hasAttendee(attendee){
            let registeredAttendee = this.registrations.includes(attendee);
            return registeredAttendee != false;
        }

        
    }

module.exports = Conference;