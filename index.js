// Mes variables
let result=document.getElementById('result');
const messages=document.getElementById('messages')
let birthdayD=document.getElementById("birthdayDay");
let birthdayM=document.getElementById("birthdayMonth");
let birthdayY= document.getElementById("birthdayYear");
let resetButton= document.getElementById('resetButton');
resetButton.style.display='none';
// 
  // Créer la date actuelle
  let todayDate = new Date();
  let todayDay = todayDate.getDate();
  let todayMonth = todayDate.getMonth() + 1;
  let todayYear = todayDate.getFullYear();

  console.log("Date d'aujourd'hui:", todayDay, todayMonth, todayYear);

let birthdayDay;
let birthdayMonth;
let birthdayYear;

let birthdayYearBisextil = false;
let todayYearBisextil = false;
let numberOfYearsBisextil = 0;

let numberOfDays1;
let numberOfDays2;
let numberOfTotalDays;


// Récupération de la date de naissance au click
let submitButton = document.getElementById("submitButton");

let formular=document.getElementById('formular');

// Créer le focus des inputs 
setInterval(() => {
  let dayString=birthdayD.value.toString()
  let monthString=birthdayM.value.toString()
  
  if (dayString.length==2) {
    birthdayM.focus()
  }
  if (monthString.length==2) {
    birthdayY.focus()
  }
}, 10);

// Clique sur envoyer
submitButton.addEventListener("click", () =>{
  birthdayDay = parseInt(birthdayD.value);
  birthdayMonth = parseInt(birthdayM.value);
  birthdayYear = parseInt(birthdayY.value);
  
  if (!birthdayDay || !birthdayMonth|| !birthdayYear) {
    let message=document.createElement('li')
    messages.appendChild(message).innerHTML=" Tous les champs sont obligtoires!"
    birthdayD.style.border="2px dashed red";
    resetButton.style.display='block';
    submitButton.style.display="none";
    result.innerHTML="Merci de recommencer SVP !"
    return
  }

   
  if(birthdayDay<1 || birthdayDay>31){
    let message=document.createElement('li')
    messages.appendChild(message).innerHTML=" Le jour doit être compris entre 01 et 31 !"
    birthdayD.style.border="2px dashed red";
    resetButton.style.display='block';
    submitButton.style.display="none";
    result.innerHTML="Merci de recommencer SVP !"
    return
  }
  
  if (birthdayMonth<1 || birthdayMonth>12){
    let message=document.createElement('li')
    messages.appendChild(message).innerHTML=" Le mois doit être compris entre 01 et 12 !"
    birthdayM.style.border="2px dashed red";
    resetButton.style.display='block';
    submitButton.style.display="none";
    result.innerHTML="Merci de recommencer SVP !"
    return
  }
  
  if (birthdayYear<1900 || birthdayYear > todayYear) {
    let message=document.createElement('li')
    messages.appendChild(message).innerHTML=" L'année' doit être comprise entre 1900 et " + todayYear + "!"
    birthdayY.style.border="2px dashed red";
    resetButton.style.display='block';
    result.innerHTML="Merci de recommencer SVP !"
    return
  } 
  
  
myFunction()

   
});

const myFunction= function(){

    // Fonction des années bisextiles
  let bisextileFunction = function (myYear) {
    if (myYear % 4 === 0) {
      if (myYear % 100 === 0) {
        if (myYear % 400 === 0) {
          console.log(myYear, " est bisextile !");

          if (myYear == todayYear) {
            todayYearBisextil = true;
          }
          if (myYear == birthdayYear) {
            birthdayYearBisextil = true;
          }
          numberOfYearsBisextil++;
        }
      } else {
        console.log(myYear, "est bisextile !");
        anneeBisextile = true;
        if (myYear == todayYear) {
          todayYearBisextil = true;
        }
        if (myYear == birthdayYear) {
          birthdayYearBisextil = true;
        }
        numberOfYearsBisextil++;
      }
    }
  };

  // Nombre d'années bisextiles
  myYear = todayYear;

  do {
    bisextileFunction(myYear);
    myYear--;
  } while (myYear >= birthdayYear);

  // Nombre de jours de l'année en cours

  switch (todayMonth) {
    case 1:
      numberOfDays1 = 0;break;
    case 2:
      numberOfDays1 = 31;break;
    case 3:
      numberOfDays1 = 59;break;
    case 4:
      numberOfDays1 = 90;break;
    case 5:
      numberOfDays1 = 120;break;
    case 6:
      numberOfDays1 = 151;break;
    case 7:
      numberOfDays1 = 181;break;
    case 8:
      numberOfDays1 = 212;break;
    case 9:
      numberOfDays1 = 243;break;
    case 10:
      numberOfDays1 = 273;break;
    case 11:
      numberOfDays1 = 304;break;
    case 12:
      numberOfDays1 = 334;break;
  }
  numberOfDays1 += todayDay;
  
  // Nombre de jours de l'année de naissance
  console.log("Mois de naissance:", birthdayMonth);

  switch (birthdayMonth) {
    case 1:
      numberOfDays2 = 366 - birthdayDay; break;
    case 2:
      numberOfDays2 = 335 - birthdayDay; break;
    case 3:
      numberOfDays2 = 307 - birthdayDay; break;
    case 4:
      numberOfDays2 = 276 - birthdayDay; break;
    case 5:
      numberOfDays2 = 246 - birthdayDay; break;
    case 6:
      numberOfDays2 = 215 - birthdayDay; break;
    case 7:
      numberOfDays2 = 185 - birthdayDay; break;
    case 8:
      numberOfDays2 = 154 - birthdayDay; break;
    case 9:
      numberOfDays2 = 123 - birthdayDay; break;
    case 10:
      numberOfDays2 = 93 - birthdayDay;  break;
    case 11:
      numberOfDays2 = 62 - birthdayDay;  break;
    case 12:
      numberOfDays2 = 32 - birthdayDay;  break;
  }

  // Si année actuelle bisextile
  if (todayYearBisextil) {
    console.log("L'année actuelle:", todayYear, "est bisextile !");
    // Si né le 29/02 ou plus
    if ((todayMonth == 2 && todayDay == 29) || todayMonth > 2) {
      numberOfYearsBisextil--;
    }
  }

  // Si année de naissance bisextile
  if (birthdayYearBisextil) {
    console.log("L'année de naissance:", birthdayYear, "est bisextile !");
    if (birthdayMonth > 2 || (birthdayMonth == 2 && birthdayDay == 29)) {
      numberOfYearsBisextil--;
    }
  }

  // Nombre total des jours
  let totalNumber =
    numberOfDays1 +
    numberOfDays2 +
    (todayYear - 1 - birthdayYear) * 365 +
    numberOfYearsBisextil;

  // Le jour de naissance

  let modulo = (totalNumber-2) % 7;

  console.log(modulo)
  
  switch(todayDate.getDay()){
    case 4: modulo--; break;
    case 5: modulo-=2; break;
    case 6: modulo-=3; break;
    case 0: modulo=3; break;
    case 1: modulo+=2; break;
    case 2: modulo+=1; break;
  }

  modulo=modulo%7;

  let daysNames = [
    "Mardi",
    "Lundi",
    "Dimanche",
    "Samedi",
    "Vendredi",
    "Jeudi",
    "Mercredi",
  ];

  let dateName = daysNames[modulo];

  console.log("Le jour est:", dateName);
  
  result.innerHTML=` Le ${birthdayDay}/ ${birthdayMonth}/${birthdayYear} était un <span>${dateName}</span>`
  
  submitButton.style.display='none'
  resetButton.style.display='block';
   
}  


resetButton.addEventListener ('click', ()=>{
  location.reload()
})