const fullname = document.getElementById("FullName");
const JobTitle = document.getElementById("JobTitle");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const Adress = document.getElementById("address");
const FB = document.getElementById("facebook");
const TWT = document.getElementById("Twitter");
const LI = document.getElementById("LinkedIn");

const Objective = document.getElementById('objective');
const Skill1 = document.getElementById('skills1');
const Skill2 = document.getElementById('skills2');
const Skill3 = document.getElementById('skills3');
const ED1 = document.getElementById('education1');
const ED2 = document.getElementById('education2');
const EDdate1 = document.getElementById('EDdate1');
const EDdate2 = document.getElementById('EDdate2');
const EDtitle1 = document.getElementById('EDtitle1');
const EDtitle2 = document.getElementById('EDtitle2');
const EXPdate1 = document.getElementById('EXPdate1');
const EXPtitle1 = document.getElementById('EXPtitle1');
const EXPinfo1 = document.getElementById('EXPinfo1');
const EXPdate2 = document.getElementById('EXPdate2');
const EXPtitle2 = document.getElementById('EXPtitle2');
const EXPinfo2 = document.getElementById('EXPinfo2');
const EXPdate3 = document.getElementById('EXPdate3');
const EXPtitle3 = document.getElementById('EXPtitle3');
const EXPinfo3 = document.getElementById('EXPinfo3');


const outName = document.getElementById("outFullName");
const outJob =  document.getElementById("outJobTitle");
const outAdress = document.getElementById("outAdress");
const outPhone = document.getElementById("outPhone");
const outEmail = document.getElementById("outEmail");
const outFB = document.getElementById("outFB");
const outTWT = document.getElementById("outTWT");
const outLI = document.getElementById("outLI");
const outObj = document.getElementById('inOBJ');
const outskill1 = document.getElementById('outskill1');
const outskill2 = document.getElementById('outskill2');
const outskill3 = document.getElementById('outskill3');

const EDinfo1 = document.getElementById("EDinfo1");
const EDinfo2 = document.getElementById("EDinfo2");
const outEDdate1 =  document.getElementById('outEDdate1');
const outEDdate2 =  document.getElementById('outEDdate2');
const outEDtitle1 = document.getElementById('outEDtitle1');
const outEDtitle2 = document.getElementById('outEDtitle2');

const outEXPdate1 = document.getElementById('outEXPdate1');
const outEXPtitle1 = document.getElementById('outEXPtitle1');
const outEXPinfo1 = document.getElementById('outEXPinfo1');



// console.log(EDinfo1);

function GenerateCV2(){

  document.getElementById('cvDisplay').style.display = 'block';
  outObj.innerHTML = Objective.value;
  outName.innerHTML = fullname.value;
  outJob.innerHTML = JobTitle.value;
  outAdress.innerHTML = Adress.value;
  outPhone.innerHTML = phone.value;
  outEmail.innerHTML = email.value;
  outFB.innerHTML = FB.value;
  outTWT.innerHTML = TWT.value;
  outLI.innerHTML = LI.value;
  outskill1.innerHTML = Skill1.value;
  outskill2.innerHTML = Skill2.value;
  outskill3.innerHTML = Skill3.value;
  outEXPdate1.innerHTML = EXPdate1.value;
  outEXPtitle1.innerHTML = EXPtitle1.value;
  outEXPinfo1.innerHTML = EXPinfo1.value;
  outEXPdate2.innerHTML = EXPdate2.value;
  outEXPtitle2.innerHTML = EXPtitle2.value;
  outEXPinfo2.innerHTML = EXPinfo2.value;
  outEXPdate3.innerHTML = EXPdate3.value;
  outEXPtitle3.innerHTML = EXPtitle3.value;
  outEXPinfo3.innerHTML = EXPinfo3.value;
  EDinfo1.innerHTML = ED1.value;
  outEDdate1.innerHTML = EDdate1.value;
  outEDtitle1.innerHTML = EDtitle1.value;
  EDinfo2.innerHTML = ED2.value;
  outEDdate2.innerHTML = EDdate2.value;
  outEDtitle2.innerHTML = EDtitle2.value;


 
 


 



   //img
let file = document.getElementById('imgField').files[0];
let reader = new FileReader();
reader.readAsDataURL(file);

reader.onloadend = function(){
  document.getElementById('OUTimg').src = reader.result;
}




let SKILLS = document.getElementsByClassName('Skillsfield');
let STR = "";
for (let e of SKILLS ){
  STR = STR + `<li> ${e.value} </li>`;
}
document.getElementById('outskill').innerHTML = STR;




}

Submit.addEventListener("click", GenerateCV2);



function addNewSKfield(){
  let newNODE = document.createElement('textarea');
  newNODE.classList.add('form-control');
  newNODE.classList.add('Skillsfield');
  newNODE.classList.add('mt-2');
  newNODE.setAttribute('rows', 1);
  newNODE.setAttribute('placeholder', 'Enter here');


  let SKL =document.getElementById('SKL');
  let AddBtnSK = document.getElementById('AddBtnSK');


  SKL.insertBefore(newNODE, AddBtnSK);
}





$(document).ready(function(){
    $('#btn-print-this').click(function(){
      $('#cvDisplay').printThis();
    });
  });
  

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