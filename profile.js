// function addtoev() {
//     var bns = document.getElementsByTagName("button")[0];
//     for (i = 0; i < bns.length; i++) {
//       bns[i].addEventListener("click", function() {
        
//     var btn = document.getElementById("myBtn");
//     console.log(bns);
       
//         if(bns[i] == 'button#color')
//             alert("Black");
//         else if(bns[i] == 'button#place')
//             alert('Hawaii');
//         else if(bns[i] == 'button#ritual')
//             alert('reading');
//         });
       

//     }
//   }
  
//   window.addEventListener("click",function() {
//     addtoev();
//   });


  let colorVar = document.querySelector('#color');
  let placeVar = document.querySelector('#place');
  let ritualVar = document.querySelector('#ritual');
  function favColor() {

    alert('black');
  }
  function favPlace() {

    alert('Hawaii');
  }
  function favRitual() {

    alert('reading');
  }

 

  colorVar.addEventListener('click',favColor);
  placeVar.addEventListener('click', favPlace);
  ritualVar.addEventListener('click', favRitual);
