const Conference = require("./Conference");
const Attendee = require("./Attendee");

describe("Conference", () => {
    const conference = new Conference();
    const attendee = new Attendee();

    describe("register()", () => {
        it("Ensure new registration is created", () => {
            let registration = conference.register(attendee);
            expect(conference.registrations.includes(registration)).toEqual(true);
        });
    });
    describe("reserveMerch()", () => {
        it("Ensure correct merch is reserved", () => {
            reserveMerch([
                
            ])
        })
    })
});