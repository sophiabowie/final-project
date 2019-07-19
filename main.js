var button = $("button");
var input = $("input");

button.on("click", appendInfo);


function appendInfo(){
  var infoContainer = $(".empty");
  infoContainer.append(`
    <div class ="info"
      <p> ${input.val()}</p>
      <button class="delete"> Delete </button>

    </div>`);
  $(".info").on("click", ".delete", deleteInfo);

}

  function deleteInfo(event){
    event.target.parentNode.remove();
  }





console.log("hello");
