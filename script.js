const botao = document.querySelector("button")
  botao.addEventListener('click', curtir)

  function curtir(){
    let curtidas = document.querySelector("span")
    curtidas.textContent++;
  }


//Botão de tamanho
const tamanho = document.getElementById("tamanho")
tamanho.addEventListener("click", aumentarFonte)
let fonte = 16;

//função
function aumentarFonte(){
    fonte++;
    document.body.style.fontSize = fonte + "px";
}

//Botão contraste
const Contraste =  document.getElementById("contraste") 
contraste.addEventListener("click",mudar_o_contraste_para_amarelo )
//função
function mudar_o_contraste_para_amarelo(){ document.body.style.color = "yellow" }