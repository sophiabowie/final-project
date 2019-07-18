var button = $("button");
var input = $("input");

button.on("click", appendInfo);

function appendInfo(){
  var infoContainer = $(".empty");
  infoContainer.append(`
    <div class ="info"
      <p> ${input.val()}</p>
    </div>`);
  }



console.log("hello");
