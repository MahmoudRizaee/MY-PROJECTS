const { default: map_pars_fragmentGlsl } = require("three/src/renderers/shaders/ShaderChunk/map_pars_fragment.glsl.js");

const prices = new Set()

prices.add(1)
prices.add(2)
prices.add(1)

// for (const item of prices){
//     console.log(item)
// }

// console.log(prices.has(2))

const objects = {first: "Salam", second: "Ali", Yumy: 1212, info(){console.log(this.first , this.second, "your id is", this.Yumy)}};
objects.info()
// console.log(objects.Yumy)
objects.color = 'purple'
// console.log(objects)


// Maps
let pam = new Map()
ResponseData.set('first')

