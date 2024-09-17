// Esercizio 1 

function sommaArray(){
    let numbers1 = [10, 20, 30];
    let numbers2 =  [40, 50, 60];
    let newArray = numbers1.map((number, i) => number + numbers2[i]);
    console.log(newArray);
}
sommaArray();


// Esercizio 2

function numeriPositivi(){
    let arr = [1, 5, -5, 8, 49, -78, 21, -15];
    let arrayNumeriPositivi = arr.filter((number) => number > 0); //1, 5, 8, 49, 21
    let valoreDiDefault = 0;
    
    arrayNumeriPositivi.forEach((number) => {
        valoreDiDefault += number;
    });
    console.log(valoreDiDefault);
}
numeriPositivi();

// Esercizio 3 

 function superioriDi30(){
    let arr =  [5, 45, 23, 11, 85, 4, 2, 32, 24, 52];
    let numeriSuperioriDiTrenta = arr.filter((number) => number >= 30);
    console.log(numeriSuperioriDiTrenta);
}
superioriDi30();

// esercizio 4

let smartphone = {
    name: 'iphone',
    model: 13,
    color: 'pink',
    cover: true,
    isStillWorking: true,
    blocked: true,
    facialId: false,
    owner: 'Sonia',
    workOrpersonal: 'personal',

};
console.log(smartphone);