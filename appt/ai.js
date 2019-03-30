/* A chatbot simulator to imitate the feature that Tmobile is rolling out on Monday, since we do not have access to this API, we have to imitate it for demo purposes. Since Tmobile already has this function, there is no point in building the model ourselves, since we're looking to present new ideas to Tmobile, not rebuild the wheel they just finished and are about to launch. */
var ai = {
    matchString: function(string) {
        if (ai.dictionary[string]) {
            return ai.dictionary[string];
        } else {
            return '';
        }
    },
    dictionary: {
        'bill': `<div>
            <button class="btn btn-info col-12"> bill </button><br>
            <button class="btn btn-info col-12"> fees </button><br>
            </div>`,
        'phone': `<div>
            <button class="btn btn-info col-12"> plan </button><br>
            <button class="btn btn-info col-12"> service </button><br>
            </div>`,
        'gsm': `<div>
            <button class="btn btn-info col-12"> unlock </button><br>
            <button class="btn btn-info col-12"> international </button><br>
            </div>`,
        'jailbreak': `<div>
            <button class="btn btn-info col-12"> unlock </button><br>
            <button class="btn btn-info col-12"> international </button><br>
            </div>`,
        'travel': `<div>
            <button class="btn btn-info col-12"> unlock </button><br>
            <button class="btn btn-info col-12"> international </button><br>
            </div>`
    }
}
