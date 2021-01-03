// Check status of a network
// * Check for boolean, online = true, ooffline = false
window.addEventListener('offline', networkStatus);
window.addEventListener('online', networkStatus);

function networkStatus(e) {
    console.log(e.type);
}
