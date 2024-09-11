console.log('---------------------------------------------')
console.log('Ejercicio 1.')

/* 1. Escribe una función que tome un arreglo de objetos JSON que representan productos, y 
devuelva la suma de los precios de los productos y la suma total del valor del stock de la
tienda. Utiliza la función reduce y el spread operator para obtener los precios de cada
objeto y sumarlos. */

let products = [
    {
        id_product: 1,
        product_name: "Arepas",
        product_price: 2500,
        product_quantity: 30 
    },
    {
        id_product: 2,
        product_name: "Arroz",
        product_price: 3000,
        product_quantity: 50
    },
    {
        id_product: 3,
        product_name: "Frijoles",
        product_price: 5000,
        product_quantity: 300 
    },
    {
        id_product: 4,
        product_name: "Papa",
        product_price: 8000,
        product_quantity: 505 
    }
];

function total(products) {
    const prices = products.reduce((total, product) => total + product.product_price, 0);
    const stock = products.reduce((total, product) => total + (product.product_price * product.product_quantity), 0);

    return {
        prices,
        stock
    };
}

const { prices, stock } = total(products);

console.log(`Suma de precios: $ ${prices}`);  
console.log(`Valor del Stock: $ ${stock}`); 

console.log('---------------------------------------------')
console.log('Ejercicio 2.')

/*2. Escribe una función que tome un arreglo de objetos JSON que representan productos, y
devuelva un objeto que contenga la suma de los precios de los productos, la cantidad
total de productos, y el nombre del producto más caro. Utiliza el spread operator, la
función reduce, map y sort para calcular los valores necesarios. */

function productDetails(products) {
    const productsMap = products.map(product => ({
        ...product,  
        totalValue: product.product_price * product.product_quantity 
    }));

    const productsPrices = products.reduce((acc, product) => acc + product.product_price, 0);
    const productsQuantity = products.reduce((acc, product) => acc + product.product_quantity, 0);
   
    const topPrice = products
        .slice() 
        .sort((a, b) => b.product_price - a.product_price)[0]; 

    return {
        productsPrices,  
        productsQuantity,  
        topPrice: {  
            product_name: topPrice.product_name,
            product_price: topPrice.product_price,
            product_quantity: topPrice.product_quantity
        }
    };
}

const result = productDetails(products);

console.log(result);

console.log('---------------------------------------------')
console.log('Ejercicio 3.')

/* 3. Dado un arreglo de números, escribe una función que devuelva un nuevo arreglo que
contenga solo los números pares, y cada número se multiplique por 2. Utiliza la función
filter y la función map. */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function operationsNumbers(arr) {
    return arr
        .filter(num => num % 2 === 0)  
        .map(num => num * 2);          
}

const resultado3 = operationsNumbers(numbers);

console.log(resultado3); 

console.log('---------------------------------------------')
console.log('Ejercicio 4.')

/*4. Dado un arreglo de objetos JSON que representan usuarios, escribe una función que
devuelva un nuevo arreglo que contenga solo los usuarios mayores de edad (18 años o
más), y para cada usuario se agregue una nueva propiedad "age_in_days" que
represente la edad del usuario en días. Utiliza el spread operator, la función map y filter. */

const users = [
    { name: "Estiven", age: 13 },
    { name: "Mariana", age: 19 },
    { name: "Juan", age: 22 },
    { name: "Fabio", age: 32 },
];

function operationsUsers(users) {
    return users
        .filter(user => user.age >= 18) 
        .map(user => ({
            ...user,                        
            ageInDays: user.age * 365       
        }));
}

const resultado4 = operationsUsers(users);

console.log(resultado4);

console.log('---------------------------------------------')
console.log('Ejercicio 5.')

/*5. Dado un arreglo de objetos JSON que representan productos, escribe una función que
devuelva un nuevo arreglo que contenga solo los productos que tengan un precio mayor
a $80000 y una cantidad inferior a 100, luego a cada producto se debe agregar una
nueva propiedad "product_tax_value" que represente el precio con el impuesto del 19%
y una propiedad “product_total_value” de valor más el impuesto calculado. Utiliza el
spread operator, la función map y filter. */

let productos = [
    {
        id_producto: 1,
        producto_name: "Celular",
        producto_price: 500000,
        producto_quantity: 15 
    },
    {
        id_producto: 2,
        producto_name: "Audifonos",
        producto_price: 40000,
        producto_quantity: 40
    },
    {
        id_producto: 3,
        producto_name: "Laptop",
        producto_price: 1600000,
        producto_quantity: 7 
    },
    {
        id_producto: 4,
        producto_name: "Cargador",
        producto_price: 80000,
        producto_quantity: 100
    }
];

function operationsProducts(arr) {
    return arr
        .filter(producto => producto.producto_price > 80000 && producto.producto_quantity < 100)
        .map(producto => {
            const iva = producto.producto_price * 0.19;
            const ivaTotal = producto.producto_price + iva;
            return {
                ...producto,  
                producto_iva_value: iva,  
                producto_total_value: ivaTotal,  
            };
        });
}

const resultados = operationsProducts(productos);

console.log({ resultados });