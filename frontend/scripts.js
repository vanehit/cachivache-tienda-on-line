let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar ${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}

//administrador.html
document.getElementById('insert').onclick = (e) => {

}
//user.html
fetch('/api/products', { headers: { admin: 'true'}  })
            .then(response => response.json())
            .then(products => {
                console.log(products)

                let html = "<table>"
                for (const product of products) {
                    html +=  `
                        <tr>
                            <td>${product.id}</td>
                            <td>${product.name}</td>
                            <td>${product.description}</td>
                            <td>${product.price}</td>
                            <td data-id="${product.id}" class="add">Add </td>
                        </tr>
                    `
                }
                html   +=  "</table>"

                document.getElementById('products').innerHTML = html
                loadEvent()
            })
            .catch(error => {
                console.log(error)
            });

        function loadEvent() {
            const btnAdds = document.getElementsByClassName('add')
            for (const btn of btnAdds) {
                btn.onclick = (e) => {
                    const id = e.target.getAttribute('data-id')
                    const admin = document.getElementById('isAdmin').checked

                    console.log("A guardar el id ", id, "Con admin: ", admin)
                }
            }
        }
//-----
//function displayProducts(productList) {
 //   let productsHTML = '';
  //  productList.forEach(element => {
   //     productsHTML +=
     //   `<div class="product-container">
     //       <h3>${element.name}</h3>
     //       <img src="${element.image}" />
      //      <h1>$${element.price}</h1>
     //       <button class="button-add" onclick="add(${element.id}, ${element.price})">Agregar</button>
      //  </div>`
 //   });
  //  document.getElementById('page-content').innerHTML = productsHTML;
//}

//window.onload = async() => {
  //  const productList = await (await fetch("/api/products")).json();
  //  console.log(productList);
  //  displayProducts(productList);
//}