import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';

async function loadPage() {
    try {
        await loadProductsFetch();
    const value =await new Promise((resolve, reject) => {
        loadCart(() => {
            resolve('value3');
        });
    });

    } catch (error) {
        console.log('Unexpected error. Please try again later.');
    }
    renderOrderSummary();
    renderPaymentSummary();
}

loadPage(); 





/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then((values) => {
   console.log(values);
   renderOrderSummary();
   renderPaymentSummary(); 
});
*/



/*new Promise((resolve) => {
    loadProducts(() => {
        resolve();
    });
}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});*/ 

/*loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});*/
