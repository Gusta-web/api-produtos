module.exports = () => {
    // const customerWalletsDB = require('../data/customer-wallets.json');
    const controller = {};
    const axios = require('axios');
  
    controller.listaProdutos = async (req, res) => {
      
      let products = null
      try {
        const response = await axios.get('https://services.odata.org/V3/OData/OData.svc/Products');
        products = response.data.value
      } catch (error) {
        console.error(error);
      }
      
      if(products.length > 0){
        products.forEach(el => {
          switch (el.Name){
            case "Bread":
              el.thumb = "https://grupodocedoce.com.br/storage/produtos/119/panutti-pao-de-leite-1582632729-thumbnail.JPG";
              break
            case "Milk":
              el.thumb = "https://oimparcial.com.br/app/uploads/2020/09/Leite.jpg";
              break
            case "Vint soda":
              el.thumb = "https://i.pinimg.com/originals/41/dc/4e/41dc4e8deaa4fece85a3895aea8c74a8.jpg";
              break
            case "Havina Cola":
              el.thumb = "https://www.sockerbiten.org/wp-content/uploads/2016/10/DSC_7634-720x478.jpg";
              break
            case "Fruit Punch":
              el.thumb = "https://images.albertsons-media.com/is/image/ABS/960063768?$ecom-product-card-desktop-jpg$&defaultImage=Not_Available";
              break
            case "Cranberry Juice":
              el.thumb = "https://cdnimg.webstaurantstore.com/images/products/large/722087/2491870.jpg";
              break
            case "Pink Lemonade":
              el.thumb = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4JgieV-lfwkYV-y1co7bE1iu0Nq5tPTEwzA&usqp=CAU";
              break
            case "DVD Player":
              el.thumb = "https://www.lg.com/br/images/dvd-players/dv457/gallery/medium01.jpg";
              break
            case "LCD HDTV":
              el.thumb = "https://images.samsung.com/is/image/samsung/p6pim/br/qn65q80bagxzd/gallery/br-qled-q80b-qn65q80bagxzd-thumb-535715082?$480_480_PNG$";
              break
            case "Lemonade":
              el.thumb = "https://static.toiimg.com/thumb/53962071.cms?imgsize=50021&width=800&height=800";
              break
            case "Coffee":
              el.thumb = "https://blog.trocodocafe.com.br/wp-content/uploads/2017/10/135766-saiba-tudo-sobre-a-prensa-de-cafe-francesa.jpg";
              break
          }
        });
      }
    
      res.status(200).json(products);
      }
    
    controller.listaProdutoUnico = async (req, res) => {
      let id = req.params.id;

      let produto = null
      try {
        let response = await axios.get('http://localhost:3001/apiProdutos/Produtos');
        response = response.data

        produto = response.filter(res => (res.ID == id))

        
      } catch (error) {
        console.error(error);
      }

      res.status(200).json(produto);

    }
  
    return controller;
  }