 

/* Cet événement se déclenche lorsque le DOM (Document Object Model) est complètement chargé et analysé,
    c'est-à-dire que tous les éléments HTML sont accessibles et peuvent être manipulés par JavaScript.
*/
document.addEventListener("DOMContentLoaded", () =>{
  let div = document.querySelector("div");
  console.log(div);

  // Ecoute d'évènement de clic sur le bouton.
  div.addEventListener("click", function(){
  function afficheInput() {
  alert(document.getElementById('Citation').value)
  }
  })
});