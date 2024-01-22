// Byt ut "any" till passande typ

const getPersonList = (firstName: any, lastName: any, yearOfBirth: any, hasDriversLicense: any): any => {

    return `<ul>

          <li><b>Förnamn:</b> ${firstName}</li>

          <li><b>Efternamn:</b> ${lastName}</li>

          <li><b>Födelseår:</b> ${yearOfBirth}</li>

          <li><b>Har körkort:</b> ${hasDriversLicense ? "Ja" : "Nej"}</li>

      </ul>`;

  };

  const personHTML: any = getPersonList("Sandra", "Larsson", 1998, true);

  console.log(personHTML);