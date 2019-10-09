/*
* Promise.allSettled
* Promise.any
*/
 
// Promise.allSettled: Sem short-circuit
const promises = [
    fetch('/url'),
    fetch('/url'),
    fetch('/url'),
];
 
await Promise.allSettled(promises);
removerLoading();
 
// Promise.any:	Short-circuits when a promise successfully completes (fulfilled)
const promises = [
    fetch('/url').then(() => 'primeiro'),
    fetch('/url').then(() => 'segundo'),
    fetch('/url').then(() => 'terceiro'),
];
 
try {
    const primeiraPromise = await Promise.any(promises);
    console.log(primeiraPromise);    
} catch (error) {
    console.log(error);
}