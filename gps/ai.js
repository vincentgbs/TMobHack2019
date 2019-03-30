/**
 * This function simulates AI for Tmobile's backend scheduling system,
 * Retail Valet. This is only a simulation because we do not actually have
 * access to the actually Tmobile backend system.
 **/
var ai = {
    getSchedule: function() {
        let d = new Date();
        let n = d.getHours() + 1;
        return(`<br><button class="confirm btn btn-primary">Go at ` + n + `:`+pad(Math.floor(Math.random()*59), 2)+`</button><br>`
        + `<button class="confirm btn btn-primary">Go at ` + (n+1) + `:`+pad(Math.floor(Math.random()*29), 2)+`</button><br>`
        + `<button class="confirm btn btn-primary">Go at ` + (n+1) + `:`+pad(Math.floor(Math.random()*29)+30, 2)+`</button><br>`);
    },
}

// helper function
function pad(num, size) {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
