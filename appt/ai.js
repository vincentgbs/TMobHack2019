/* A chatbot simulator to imitate the feature that Tmobile is rolling out on Monday, since we do not have access to this API, we have to imitate it for demo purposes. Since Tmobile already has this function, there is no point in building the model ourselves, since we're looking to present new ideas to Tmobile, not rebuild the wheel they just finished and are about to launch. */
var ai = {
    matchString: function(string) {
        var strings = string.split(" ");
        // search for each individual word
        for (i = 0; i < strings.length; i++) {
            if (ai.dictionary[strings[i]]) {
                // find and return first match
                return ai.dictionary[strings[i]];
            }
        } // else
        return '';
    },
    dictionary: {
        'bill': `<div>
            <button class="btn btn-info col-12 appt"> current bill </button><br>
            <button class="btn btn-info col-12 appt"> taxes fees </button><br>
            <button class="btn btn-info col-12 appt"> change plan </button><br>
            </div>`,
        'phone': `<div>
            <button class="btn btn-info col-12 appt"> view plan </button><br>
            <button class="btn btn-info col-12 appt"> service </button><br>
            <button class="btn btn-info col-12 appt"> buy a device </button><br>
            </div>`,
        'gsm': `<div>
            <button class="btn btn-info col-12 appt"> unlock </button><br>
            <button class="btn btn-info col-12 appt"> international </button><br>
            <button class="btn btn-info col-12 appt"> SIM card </button><br>
            </div>`,
        'jailbreak': `<div>
            <button class="btn btn-info col-12 appt"> warranty </button><br>
            <button class="btn btn-info col-12 appt"> user agreement </button><br>
            <button class="btn btn-info col-12 appt"> apple device policy </button><br>
            </div>`,
        'travel': `<div>
            <button class="btn btn-info col-12 appt"> unlock </button><br>
            <button class="btn btn-info col-12 appt"> international plan</button><br>
            <button class="btn btn-info col-12 appt"> travel abroad </button><br>
            </div>`,
    'unlock': `<div>
      <button class="btn btn-info col-12 appt"> unlock device</button><br>
      <button class="btn btn-info col-12 appt"> device autorization code plan</button><br>
      <button class="btn btn-info col-12 appt"> device activation </button><br>
      </div>`,
    'accessories': `<div>
        <button class="btn btn-info col-12 appt"> screen protector</button><br>
        <button class="btn btn-info col-12 appt"> usb car charger</button><br>
        <button class="btn btn-info col-12 appt"> cell phone case </button><br>
        </div>`,
    'plan': `<div>
        <button class="btn btn-info col-12 appt"> current bill </button><br>
        <button class="btn btn-info col-12 appt"> taxes fees </button><br>
        <button class="btn btn-info col-12 appt"> change plan </button><br>
        </div>`

    }
}
