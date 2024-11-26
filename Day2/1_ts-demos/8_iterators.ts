// class Queue<T> {
//     private _data: T[] = [];

//     push(item: T) {
//         this._data.push(item);
//     }

//     pop(): T | undefined {
//         return this._data.shift();
//     }

//     [Symbol.iterator]() {
//         var i = 0, self = this;

//         return {
//             next: function () {
//                 var v, d = true;

//                 if (i < self._data.length) {
//                     v = self._data[i];
//                     i++;
//                     d = false;
//                 }

//                 return {
//                     done: d,
//                     value: v
//                 };
//             }
//         };
//     }
// }

class Queue<T> implements IterableIterator<T> {
    private _data: T[] = [];
    private _i: number = 0;

    push(item: T) {
        this._data.push(item);
    }

    pop(): T | undefined {
        return this._data.shift();
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this;
    }

    next(): IteratorResult<T> {
        if (this._i < this._data.length) {
            return {
                done: false,
                value: this._data[this._i++]
            };
        } else {
            return {
                done: true,
                value: null
            };
        }
    }
}

type Order = {
    id: number,
    description: string
}

var ordersQ = new Queue<Order>();
ordersQ.push({ id: 1, description: "Order One" });
ordersQ.push({ id: 2, description: "Order Two" });
ordersQ.push({ id: 3, description: "Order Three" });

for (const item of ordersQ) {
    console.log(JSON.stringify(item));
}