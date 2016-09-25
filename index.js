export default class Counter {
  constructor() {
    this.store = new Map();
  }

  resetStore() {
    this.store = new Map();
  }

  increment(key) {
    let num = this.store.get(key)
    if (this.store.get(key)){
      this.store.set(key, num + 1)
    }else{
      this.store.set(key, 1);
    }
  }

  decrement(key) {
    let num = this.store.get(key);
    this.store.set(key, num - 1);
  }

  incrementDOM(id){
    this.increment(id);
    document.getElementById(id).innerHTML = this.store.get(id);
  }

  decrementDOM(id){
    this.decrement(id);
    document.getElementById(id).innerHTML = this.store.get(id);
  }

}
