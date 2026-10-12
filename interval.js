// Worker : envoie un "tick" régulier à la page, même quand l'onglet est en arrière-plan.
var timerId = null;

onmessage = function(event) {
    if (event.data && event.data.start) {
        if (timerId !== null) {
            clearInterval(timerId);
        }
        timerId = setInterval(function() {
            postMessage('interval.start');
        }, event.data.ms);
    }
};
