function irParaPagina(pagina) {
  window.location.href = pagina;
}

function fazerLogin() {
  alert("Login realizado com sucesso!");
}

function criarConta() {
  alert("Conta criada com sucesso!");
}

function registrarPet() {
  alert("Pet cadastrado com sucesso!");
}

// let prevScrollPos = window.pageYOffset;
// const menu = document.getElementById("menu");

// window.onscroll = function () {
//     let currentScrollPos = window.pageYOffset;

//     if (prevScrollPos > currentScrollPos) {
//         menu.style.top = "0"; // Mostra a navbar quando rola para cima
//     } else {
//         menu.style.top = "-60px"; // Esconde a navbar quando rola para baixo
//     }
//     prevScrollPos = currentScrollPos;
// }

document.querySelector('.searchButton').addEventListener('click', function() {
  const searchTerm = document.querySelector('.searchTerm').value;
  if (searchTerm) {
      alert('Você está buscando por: ' + searchTerm);
  } else {
      alert('Digite algo para buscar!');
  }
});
