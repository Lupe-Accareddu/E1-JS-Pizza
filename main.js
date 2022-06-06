

let ingredientes = ["morron", "queso", "salsa", "jamon", "tomate", "cebolla", "albahaca", "oregano", "bacon", "muzarella"]

let pares = []

let impares = []

let separandoIngredientes = (ingredientes, pares, impares) => {
    ingredientes.forEach(ingrediente => { 
        ingrediente.length % 2 === 0 ? pares.push(ingrediente) : impares.push(ingrediente)
    })

console.log(`Los ingredientes pares son: ${pares}. 
Los ingredientes impares son: ${impares}`)
}

separandoIngredientes(ingredientes, pares, impares)
