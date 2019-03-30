var globalVariable = {}; // empty object
globalVariable.addToBackend = function(customer, store, arrival, reason)
{
    if (!customer) {
        customer = localStorage.getItem('customer');
    }
    if (!store) {
        store = localStorage.getItem('store');
    }
    if (!arrival) {
        arrival = localStorage.getItem('arrival');
    }
    if (!reason) {
        reason = localStorage.getItem('reason');
    }
    try {
        fetch('/tmob/tmob/home?customer='+customer+'&store='+store+'&arrival='+arrival+'&reason='+reason);
    } catch(e) {
        // console.log(e);
    } finally {
        console.log('Your appointment has been scheduled');
    }

}
