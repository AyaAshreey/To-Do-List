const button = document.querySelector("button");
const input = document.querySelector("input");
const container = document.getElementById("container");
const form = document.querySelector("form");

////////   add new task
form.addEventListener("submit", (eo) => {
  eo.preventDefault();

  const addtask = ` <div class="task">
    <span class="icon-star icon">  </span>
     <p class="task-text"> ${input.value} </p> 
     <!-- <span class="icon-heart">  </span> -->
     <div>
        <span class="icon-trash icon">  </span>
     <span class="icon-angry2 icon">  </span>
     </div>
</div>  `;

  container.innerHTML += addtask;
  input.value = "  ";
});

// container.addEventListener("click", (eo) => {
//    /////////  delete task
//   if (eo.target.className == "icon-trash icon") {
//     eo.target.parentElement.parentElement.remove();

// ///add heart remove angry
//   } else if (eo.target.className == "icon-angry2 icon") {
//     eo.target.classList.add("dn");
//     const heartIcon = ` <span class="icon-heart icon">  </span> `;

//     eo.target.parentElement.parentElement
//       .getElementsByClassName("task-text")[0]
//       .classList.add("finish");
//       eo.target.parentElement.innerHTML += heartIcon;
//   }
// ///remove heart add angry
//     else if(eo.target.className =="icon-heart icon"){
//      eo.target.classList.add("dn");

//      eo.target.parentElement.parentElement
//       .getElementsByClassName("task-text")[0]
//       .classList.remove("finish");

//         const addangry = ` <span class="icon-angry2 icon">  </span> `
//        eo.target.parentElement.innerHTML+=addangry
//     }

//     /// add stared task in top
//     else if (eo.target.className =="icon-star icon"){
//       eo.target.classList.add("orange")
//       container.prepend(eo.target.parentElement)
//     }

// else if(eo.target.className="icon-star icon orange"){
//    eo.target.classList.remove("orange")
//    // container.append(eo.target.parentElement)
// }

// });

container.addEventListener("click", (eo) => {
  ////////////// Rmove task
  switch (eo.target.className) {
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;

      ////////////// add new task
    case "icon-angry2 icon":
      eo.target.classList.add("dn");
      const heartIcon = ` <span class="icon-heart icon">  </span> `;

      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("finish");
      eo.target.parentElement.innerHTML += heartIcon;
      break;
///////////////////////  hide heart show angry
    case "icon-heart icon":
      eo.target.classList.add("dn");

      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.remove("finish");

      const addangry = ` <span class="icon-angry2 icon">  </span> `;
      eo.target.parentElement.innerHTML += addangry;
      break;
///////////////  pin stared task in top
    case "icon-star icon":
      eo.target.classList.add("orange");
      container.prepend(eo.target.parentElement);
      break;
////////////// remove stared task
    case "icon-star icon orange":
      eo.target.classList.remove("orange");
      container.append(eo.target.parentElement);
      break;

 
  }
});
