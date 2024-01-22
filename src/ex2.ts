// Skapa en typ för en pizza. Använd den typen för att skapa två olika pizzor, samt abvände den i funktionen getPizzaInfo

const pizza: any = {
    name: "Vesuvio",
    slices: 8,
    toppings: ["cheese", "tomato", "ham"],
    price: 80,
  }

  const veganPizza: any = {
    name: "Vesuvio",
    slices: 8,
    toppings: ["cheese", "tomato", "squash"],
    price: 70,
    vegan: true
  }


  const getPizzaInfo = (pizza: any): any => {
      console.log(pizza.name)
      console.log(pizza.slices)
      pizza.toppings.forEach((topping: any) => { console.log(topping) })
      console.log(pizza.price)
      if(pizza.vegan) {
          console.log("This pizza is vegan")
      }
  }

  getPizzaInfo(pizza);
  getPizzaInfo(veganPizza);