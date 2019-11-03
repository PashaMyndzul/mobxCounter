import React, { Fragment } from 'react';

import { observer } from 'mobx-react';
import { observable, action, computed, decorate, autorun } from 'mobx';

class Counter {
  count = 0;
  name = 'Unnamed';

  increment() {
    this.count += 1;
  }
  setName() {
    this.name = 'Test';
  }
  get countPowToSquere() {
    return this.count * this.count;
  }
} 

decorate( Counter, { 
  count: observable,
  name: observable,
  increment: action.bound,
  setName: action.bound,
  countPowToSquere: computed,
} );

const store = new Counter();

autorun( () => { 
  console.log( 'count autorun', store.count );
} )

autorun( () => { 
  console.log( store.countPowToSquere);
} )


function App() {
  return (
    <Fragment>
      <h1> { store.name } </h1>
      <h1> Counter { store.count } </h1>
      <h1> PowToSquere { store.countPowToSquere } </h1>
      <button onClick={ store.increment }>Increment </button>
      <button onClick={ store.setName }>Set Name </button>
    </Fragment>
  );
}

const ObserverApp = observer(App)

export default ObserverApp;
