let character = document.querySelector("#character"),
    block = document.querySelector("#block");

function jump()
{
    if (character.classList !== 'animate'){
        character.classList.add("animate");
    }

    setTimeout(function (){
        character.classList.remove("animate")
    },500)
}
let counter = 0;

let checkDead = setInterval(function (){

    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")),

        blockLeft  = parseInt(window.getComputedStyle(block).getPropertyValue("left"));


    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130){
        block.style.animation = "none";
        block.style.display = "none";

        let record = JSON.parse(localStorage.getItem('record'));

        if(counter > record){
            localStorage.setItem('record',JSON.stringify(counter));
            alert("Congratulations! new record " + counter)
        }else {
            alert("Game over "+ counter + " Your record "+record);
        }

        setTimeout(function (){
            location.reload();
        },5000)

    }else {
        counter++;
    }

},10)

