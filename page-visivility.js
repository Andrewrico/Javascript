// Check is the element is hidden or visible
window.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Tab is hidden');
    } else {
        console.log('Tab is focused');
    }
});
