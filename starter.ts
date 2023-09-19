
// Ersätt alla : any med passande typ
// Avkommentera funktionerna längst ner i koden för att testa de olika funktionerna
// Se mer detaljerade instruktioner i koden


  const ex1 = () => {

    const name: any = "Sandra";
    const age: any = 25;
    const isBirthday: any = false;

    const greet = (name: any, age :any, isBirthday: any): any => {

      console.log(`Hey ya! ${name}, age ${age}, do you have a birthday today? ${isBirthday}`);

    };

    greet(name, age, isBirthday);


    const sum = (num1: any, num2: any): any => num1 + num2;

    sum(1, 2);


    const names: any = ["Sandra", "Stina", "Torsten"];

    names.forEach(name => {
        console.log(`Hi you one of all ${name}`);
    });
   



  };

  const ex2 = () => {

        // Deklarera en typ för Pizza

        const pizza: any= {
          name: "Vesuvio",
          slices: 8,
          toppings: ["cheese", "tomato", "ham"],
          price: 80,
        }
    
        const veganPizza: any= {
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
  }


  const ex3 = () => {

    // Skapa en Person type och använd den i funktionen. Person ska vara en union type  av "User", "Admin" och "SuperAdmin"

    const user: any = "Admin";
    
    const getPriviligies = (user: any): any => {

      switch (user) {

        case "User":

          console.log("You have user right privileges");

          break;

        case "Admin":

          console.log("You have admin right privileges");

          break;

        case "SuperAdmin":

          console.log("You have super admin right privileges");

          break;

      }

    };

    getPriviligies(user); 
    

  };



  const ex4 = () => {

    const getPersonList = (

      firstName: any,

      lastName: any,

      yearOfBirth: any,

      hasDriversLicense: any

    ): any => {

      return `<ul>

            <li><b>Förnamn:</b> ${firstName}</li>

            <li><b>Efternamn:</b> ${lastName}</li>

            <li><b>Födelseår:</b> ${yearOfBirth}</li>

            <li><b>Har körkort:</b> ${hasDriversLicense ? "Ja" : "Nej"}</li>

        </ul>`;

    };

    const personHTML: any = getPersonList("Sandra", "Larsson", 1998, true);

    console.log(personHTML);

  };



  const ex5 = () => {

    // Samma som ex4, men nu ska du skapa en typ för personen och använda den i funktionen

    const getPersonList = (

      firstName: any,

      lastName: any,

      yearOfBirth: any,

      hasDriversLicense: any

    ): any => {

      return `<ul>

            <li><b>Förnamn:</b> ${firstName}</li>

            <li><b>Efternamn:</b> ${lastName}</li>

            <li><b>Födelseår:</b> ${yearOfBirth}</li>

            <li><b>Har körkort:</b> ${hasDriversLicense ? "Ja" : "Nej"}</li>

        </ul>`;

    };

    const personHTML: any = getPersonList("Sandra", "Larsson", 1998, true);


    console.log(personHTML);

  };



  const ex6 = () => {

    // Skapa en typ temperatureMeasurement och använd den i funktionen

    const getSummerNightsTemperature = (tempMeasurements: any): any =>

      tempMeasurements.filter((data: any) => data.temperature > 10);


    const tempMeasurements: any = [

      {

        day: 1,

        temp: 12,

      },

      {

        day: 2,

        temp: 9,

      },

      {

        day: 3,

        temp: 15,

      },

    ];


    const summetTemperatures: any = getSummerNightsTemperature(tempMeasurements);

    console.log(summetTemperatures);

  };



  ex1();

  // ex2();

  // ex3();

  // ex4();

  // ex5();
  
  // ex6();


