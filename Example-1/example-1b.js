console.clear();

const BTN = document.querySelector('#box');

let observable = Rx.Observable.fromEvent(BTN, 'mousemove')
                              .map(e => e.clientX);

observable.subscribe( x => console.log(x))