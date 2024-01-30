function solve() {
   const addProducts = Array.from(document.getElementsByClassName('add-product'));
   const printResult = document.getElementsByTagName('textarea')[0];
   let productsCollector = {};
   
   for (const addProduct of addProducts) {
      addProduct.addEventListener('click', addP);
   }

   function addP(event) {
      let currProduct = event.target;
      const divProduct = currProduct.parentElement.parentElement;
      const productName = divProduct.getElementsByClassName('product-title')[0].textContent;
      let productPrice = divProduct.getElementsByClassName('product-line-price')[0].textContent;
      productPrice = Number(productPrice);
      
      if (!(productName in productsCollector)) {
         productsCollector[productName] = 0;
      }

      productsCollector[productName] += productPrice;

      printResult.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   }

   const checkoutBtn = document.getElementsByClassName('checkout')[0];
   checkoutBtn.addEventListener('click', checkout);

   function checkout() {
      
      const products = Object.keys(productsCollector);
      const prices = Object.values(productsCollector);
      let totalPrice = prices.reduce((a, b) => a + b, 0);

      printResult.value += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`;

      if (printResult.value.length > 0) {
         const allButtons = Array.from(document.querySelectorAll('button'));
         for (const button of allButtons) {
            button.disabled = true;
         }
      }
   }
}