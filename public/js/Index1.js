// const { default: jsPDF } = require("jspdf");

const fullname = document.getElementById("FullName");
const JobTitle = document.getElementById("JobTitle");
const Email = document.getElementById("email");
const Phone = document.getElementById("phone");
const Adress = document.getElementById('address');
const Education = document.getElementById('education');
const Objective = document.getElementById('objective');
const Exp = document.getElementById('experience');
const Skill = document.getElementById('skills');


const outName = document.getElementById("outFullName");
const outJob = document.getElementById('outJobTitle');
const outEmail = document.getElementById('outEmail');
const outObj = document.getElementById('outObj');
// const outED2 = document.getElementsByClassName('ED-list');

// document.getElementById('printCV').style.display = 'none';

function GenerateCV() {
  outName.innerHTML = fullname.value;
  outJob.innerHTML = JobTitle.value;
  outEmail.innerHTML = Email.value;
  outObj.innerHTML = Objective.value;
  // outED2.innerHTML = Education.value;


/// ed
 
  let ED = document.getElementsByClassName('EDfiled');
  let str = "";
  for (let e of ED ){
    str = str + `<li> ${e.value} </li>`;
  }
document.getElementById('ED-list').innerHTML = str;



  let EXP = document.getElementsByClassName('EXPfield');
  let Str = "";
  for (let e of EXP ){
    Str = Str + `<li> ${e.value} </li>`;
  }
   document.getElementById('EXPList').innerHTML = Str;


  let SKILLS = document.getElementsByClassName('SKLfiled');
  let STR = "";
  for (let e of SKILLS ){
    STR = STR + `<li> ${e.value} </li>`;
  }
  document.getElementById('SKList').innerHTML = STR;


  //img
  let file = document.getElementById('imgField').files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = function(){
    document.getElementById('imgTemplate').src = reader.result;
  }

  document.getElementById('cv-display').style.display = 'block';
  document.getElementById('CV-form').style.display = 'none';
  document.getElementById('Pbtn').style.display = 'block';
  

}

submit.addEventListener("click", GenerateCV);

  


///////////////////////////////////////////////

function addNewEDfield(){
    // console.log('add btn');
    let newNODE = document.createElement('textarea');
    newNODE.classList.add('form-control');
    newNODE.classList.add('EDfiled');
    newNODE.classList.add('mt-2');
    newNODE.setAttribute('rows', 3);
    newNODE.setAttribute('placeholder', 'Enter here');


    let ED =document.getElementById('ED');
    let AddBtn = document.getElementById('AddBtn');


    ED.insertBefore(newNODE, AddBtn);
}


function addNewEXfield(){
  let newNODE = document.createElement('textarea');
  newNODE.classList.add('form-control');
  newNODE.classList.add('EXPfiled');
  newNODE.classList.add('mt-2');
  newNODE.setAttribute('rows', 3);
  newNODE.setAttribute('placeholder', 'Enter here');


  let EXP =document.getElementById('EXP');
  let AddBtnEX = document.getElementById('AddBtnEX');


  EXP.insertBefore(newNODE, AddBtnEX);
}


function addNewSKfield(){
  let newNODE = document.createElement('textarea');
  newNODE.classList.add('form-control');
  newNODE.classList.add('SKLfiled');
  newNODE.classList.add('mt-2');
  newNODE.setAttribute('rows', 3);
  newNODE.setAttribute('placeholder', 'Enter here');


  let SKL =document.getElementById('SKL');
  let AddBtnSK = document.getElementById('AddBtnSK');


  SKL.insertBefore(newNODE, AddBtnSK);
}

///////////////////

$(document).ready(function(){
  $('#perso').click(function(){
      $('.perso').show();
      $('.prof').hide();
  });

  $('#prof').click(function(){
    $('.prof').show();
    $('.perso').hide();
});
});
///////////////////////////////

// window.onload = function(){
//   document.getElementById('download').addEventListener("click", ()=>{
//     const cvDisplay = document.getElementById('cv-display');
//     html2pdf().from(cvDisplay).save();
//   })
// }


// function DownloadCV(){
//   window.print();
// }

// Dbtn.addEventListener('click',DownloadCV);



$(document).ready(function(){
  $('#btn-print-this').click(function(){
    $('#cv-display').printThis();
  });
});
