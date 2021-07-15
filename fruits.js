// Class expression
let FruitBasket  = class {
constructor() {
    let json_input = require('./input.json')
    let contents = json_input[0]['contents ']
    let output_json = {};
    output_json.totalFruits = contents.length
    let total_weight = contents.map(total => total.weight).reduce((add, total) => total + add)
    output_json.bucket_weight = total_weight
    var res = contents.reduce(function(obj, v) {
        obj[v.type] = (obj[v.type] || 0) + 1;
        return obj;
    }, {})
    let arr = []
    for (let key in res) {
        arr.push({
            type: key,
            count: res[key]
        })
    }
    output_json.contents = arr;
    console.log(output_json)
    }
};



// {
//     totalFruits: 3,
//     bucket_weight: 6,
//     contents: [ { type: 'apple', count: 2 }, { type: 'peer', count: 1 } ]
// }