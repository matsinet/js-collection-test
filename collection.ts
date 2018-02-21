class BaseCollection implements IterableIterator<any> {

    private index = 0;

    // Made this public until we find out how to do the iterableIterator
    public _items: any[] = [];

    constructor() {}

    public next(): IteratorResult<any> {
            if (this.index < this._items.length) {
            return {
                done: false,
                value: this._items[this.index++]
            }
        } else {
            this.index = 0;
            return {
                done: true,
                value: undefined
            }
        }
    }

    [Symbol.iterator](): IterableIterator<any> {
        return this;
    }

    /**
     * Add an item to the items
     *
     * @param {object} item
     * @returns {this}
     */
    add(item: object) {
      this._items.push(item);

      return this;
    }

    /**
     * Remove an item from the items and return the removed item
     *
     * @param {number} index
     * @returns {any}
     */
    remove(index: number) {
      return this._items.slice(index, 1)[0];
    }
  }

  const myCollection = new BaseCollection();
  myCollection.add({'item': 'one'});
  myCollection.add({'item': 'two'});
  myCollection.add({'item': 'three'});

  for (let item of myCollection) {
    console.log(item)
  }