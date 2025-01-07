// Good luck!
const express = require("express");
const app = express();

let soul={
    "restaurant": {
      "name": "Sylvia's Restaurant",
      "menu": [
        {
          "name": "Southern Fried Chicken",
          "description": "Crispy, golden-brown fried chicken seasoned with Sylvia's special blend of spices, served with a side of collard greens and cornbread.",
          "common_allergens": "Gluten, dairy.",
          "pictures": [
            "https://example.com/sylvias_fried_chicken.jpg"
          ]
        },
        {
          "name": "Collard Greens",
          "description": "Slow-cooked collard greens flavored with smoked turkey and spices, offering a savory side to any meal.",
          "common_allergens": "None.",
          "pictures": [
            "https://example.com/collard_greens.jpg"
          ]
        },
        {
          "name": "Cornbread",
          "description": "Sweet, moist cornbread baked to perfection, a classic accompaniment to Southern dishes.",
          "common_allergens": "Gluten, dairy.",
          "pictures": [
            "https://example.com/cornbread.jpg"
          ]
        },
        {
          "name": "Catfish Nuggets",
          "description": "Tender catfish bites, lightly breaded and fried, served with a side of tangy remoulade sauce.",
          "common_allergens": "Fish, gluten.",
          "pictures": [
            "https://example.com/catfish_nuggets.jpg"
          ]
        },
        {
          "name": "Macaroni and Cheese",
          "description": "Creamy, cheesy macaroni baked until golden, a soul food favorite loved by all.",
          "common_allergens": "Gluten, dairy.",
          "pictures": [
            "https://example.com/mac_and_cheese.jpg"
          ]
        },
        {
          "name": "BBQ Ribs",
          "description": "Tender, fall-off-the-bone pork ribs smothered in a rich BBQ sauce, served with a side of coleslaw.",
          "common_allergens": "Gluten, soy.",
          "pictures": [
            "https://example.com/bbq_ribs.jpg"
          ]
        },
        {
          "name": "Shrimp and Grits",
          "description": "Succulent shrimp sautéed in a savory sauce, served over creamy, cheesy grits.",
          "common_allergens": "Shellfish, dairy.",
          "pictures": [
            "https://example.com/shrimp_and_grits.jpg"
          ]
        },
        {
          "name": "Fried Green Tomatoes",
          "description": "Sliced green tomatoes breaded and fried until crispy, served with a zesty dipping sauce.",
          "common_allergens": "Gluten.",
          "pictures": [
            "https://example.com/fried_green_tomatoes.jpg"
          ]
        },
        {
          "name": "Peach Cobbler",
          "description": "Sweet, warm peach cobbler topped with a buttery crust, served with a scoop of vanilla ice cream.",
          "common_allergens": "Gluten, dairy.",
          "pictures": [
            "https://example.com/peach_cobbler.jpg"
          ]
        },
        {
          "name": "Sweet Potato Pie",
          "description": "A classic dessert made with creamy sweet potatoes, spices, and a flaky crust, served with whipped cream.",
          "common_allergens": "Gluten, dairy.",
          "pictures": [
            "https://example.com/sweet_potato_pie.jpg"
          ]
        }
      ],
      "background": "Founded in 1962 by Sylvia Woods, often referred to as the 'Queen of Soul Food,' Sylvia's has been a staple in Harlem for decades. Known for its warm atmosphere and authentic Southern cuisine, the restaurant attracts locals and tourists alike, having hosted many famous personalities and celebrating the rich traditions of African American cooking."
    }
  }
  
app.use((request,response,next)=>{
  console.log(request.method+"/"+request.url)
  next();
})

app.get("/", (request,response)=>{
  response.status(200).send("<h1>Welcome to the best soul food spot in the NYC area<h1>")
  })

  app.get("/docs", (request,response)=>{
    response.status(200).send("<h1>Go to /dish to see the most popular dish sold. Go to /history to see the background on the restaurant<h1>")
    })

    app.get("/dish", (request,response)=>{
      response.status(200).json(soul.restaurant.menu[8])
      })

   app.get("/history",(request,response)=>{
   response.status(200).json(soul.restaurant.background)
   })



   app.use((request,response,next)=>{
    response.status(404).send("404 not found")
    })

app.listen(3000,()=>{
    console.log("server is running at http://loaclhost:3000")
})