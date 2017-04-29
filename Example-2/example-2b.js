console.clear();

const BTN = document.querySelector('#box');

let observable = Rx.Observable.fromEvent(BTN, 'click')
                              .map(e => e.clientX)
                              .scan((a,b) => a+b,0)

observable.subscribe( x => console.log(x))