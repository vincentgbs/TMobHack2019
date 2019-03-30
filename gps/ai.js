// simulate AI for Tmobile's backend scheduling system
// I don't think we actually have access to Retail Valet API data
var ai = {
    getSchedule: function() {
        let d = new Date();
        let n = d.getHours() + 1;
        return(`<br><button class="confirm btn btn-primary">Go at ` + n + `:`+pad(Math.floor(Math.random()*59), 2)+`</button><br>`
        + `<button class="confirm btn btn-primary">Go at ` + (n+1) + `:`+pad(Math.floor(Math.random()*29), 2)+`</button><br>`
        + `<button class="confirm btn btn-primary">Go at ` + (n+1) + `:`+pad(Math.floor(Math.random()*29)+30, 2)+`</button><br>`);
    },
    assignStoreLocation: function(input) {
        //
    }
}
