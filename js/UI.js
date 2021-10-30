class UI {
  static updateList(products = []) {
    const elementProductList = document.getElementById('product-list');
    
    elementProductList.innerHTML = '';
    
    for (const product of products) {
      const element = document.createElement('div');
      
      element.innerHTML = `
      <div class="card text-center mb-4">
        <div class="card-body">
          <input type="hidden" class="id" value="${product.id}">
          <strong>Product</strong>: ${product.name}
          <strong>Price</strong>: ${product.price}
          <strong>Year</strong>: ${product.year}
          <button type="button" class="btn btn-danger" name="delete">Delete</button>
        </div>
        </div>
      `

      elementProductList.appendChild(element);
    }
  }

  static clearForm() {
    const form = document.forms['product-form'];
    form.reset();
    form['name'].focus();
  }

  static showMessage(message, cssClass) {
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass} mt-4`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const app = document.querySelector('#app');
    container.insertBefore(div, app);

    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }
}
