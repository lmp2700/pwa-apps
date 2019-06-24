if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then((reg) => console.log('serviceworker registered'))
    .catch((err) => console.log('serviceworker not registered'))
}