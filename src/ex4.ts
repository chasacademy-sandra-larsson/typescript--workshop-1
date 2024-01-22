// Ska en typ TemperatureMeasurement och använd den i funktionen (byt ut alla any till passande typer)
const getSummerNightsTemperature = (tempMeasurements: any): any =>

tempMeasurements.filter((data: any) => data.temp > 10);

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


const summerTemperatures: any = getSummerNightsTemperature(tempMeasurements);

console.log(summerTemperatures);