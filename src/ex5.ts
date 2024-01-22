// Skapa en typ "Person" som ska vara en union type  av "User", "Admin" och "SuperAdmin"

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
