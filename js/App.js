(() => {
  const form = document.forms['product-form'];
  const price = form['price'];
  const name = form['name'];
  const year = form['year'];
  year.max = new Date().getFullYear();

  const productList = new ProductList();

  productList.getBackupFromLocalStorage();

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if(name.value && price.value && year.value) {
      const product = new Product(name.value, price.value, year.value);
      
      productList.addProduct(product);
      
      UI.updateList(productList.products);
      UI.clearForm();
      
      UI.showMessage('Product added succesfully', 'success');
    } else {
      UI.showMessage('All fields are required, please check', 'danger')
    }
  });
  
  document.getElementById('product-list').addEventListener('click', function (event) {
    if (event.target.name === 'delete') {
      const id = event.target.parentElement.getElementsByClassName('id')[0].value;
      
      productList.removeProduct(id);
      UI.updateList(productList.products);
      UI.showMessage('Product deleted succesfully', 'info');
    }
  })
})()
