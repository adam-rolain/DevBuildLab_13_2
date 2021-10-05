export interface Product {
    name: string;
    price: number;
};

let products: Product[] = [
    { name: 'Apple', price: 1.00 },
    { name: 'Bread', price: 3.50 },
    { name: 'Frozen Pizza', price: 5.00 },
    { name: 'Bananas', price: 2.95 },
    { name: 'Chicken Breast', price: 9.80 },
];

const calcAverageProductPrice = (products: Product[]): number => {
    let total = 0;
    products.forEach(product => { total += product.price });
    return total/products.length;
};

let averagePrice: number = calcAverageProductPrice(products); 

console.log(averagePrice);