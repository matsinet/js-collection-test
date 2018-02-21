"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var BaseCollection = /** @class */ (function () {
    function BaseCollection() {
        this.index = 0;
        // Made this public until we find out how to do the iterableIterator
        this._items = [];
    }
    BaseCollection.prototype.next = function () {
        if (this.index < this._items.length) {
            return {
                done: false,
                value: this._items[this.index++]
            };
        }
        else {
            this.index = 0;
            return {
                done: true,
                value: undefined
            };
        }
    };
    BaseCollection.prototype[Symbol.iterator] = function () {
        return this;
    };
    /**
     * Add an item to the items
     *
     * @param {object} item
     * @returns {this}
     */
    BaseCollection.prototype.add = function (item) {
        this._items.push(item);
        return this;
    };
    /**
     * Remove an item from the items and return the removed item
     *
     * @param {number} index
     * @returns {any}
     */
    BaseCollection.prototype.remove = function (index) {
        return this._items.slice(index, 1)[0];
    };
    return BaseCollection;
}());
var myCollection = new BaseCollection();
myCollection.add({ 'item': 'one' });
myCollection.add({ 'item': 'two' });
myCollection.add({ 'item': 'three' });
try {
    for (var myCollection_1 = __values(myCollection), myCollection_1_1 = myCollection_1.next(); !myCollection_1_1.done; myCollection_1_1 = myCollection_1.next()) {
        var item = myCollection_1_1.value;
        console.log(item);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (myCollection_1_1 && !myCollection_1_1.done && (_a = myCollection_1.return)) _a.call(myCollection_1);
    }
    finally { if (e_1) throw e_1.error; }
}
var e_1, _a;
