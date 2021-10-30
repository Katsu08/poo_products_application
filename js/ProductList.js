class ProductList {
  constructor() {
    this._products = [];
  }

  addProduct(product) {
    if (product instanceof Product) {
      this._products.push(product);
      
      this.updateLocalStorage();
    }
  }
  
  removeProduct(id) {
    if (!isNaN(id)) {
      this._products = this.products.filter((product) => product.id !== Number(id));
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  getBackupFromLocalStorage() {
    const productsSaved = localStorage.getItem('products');

    if (productsSaved) {
      const productsSavedParsed = JSON.parse(productsSaved);
      
      if(productsSavedParsed instanceof Array) {
        const products = productsSavedParsed.map((product) => {
          return new Product(product._name, product._price, product._year);
        })

        this._products = products;

        UI.updateList(this.products);
      }
    }
  }

  get products() {
    return this._products;
  }

  get length() {
    return this._products.length();
  }
}
