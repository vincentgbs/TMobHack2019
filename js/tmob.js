var globalVariable = {}; // empty object
globalVariable.addToBackend = function(customer, store, arrival, reason)
{
    fetch('/tmob/tmob/home?customer='+customer+'&store='+store+'&arrival='+arrival+'&reason='+reason);
}
