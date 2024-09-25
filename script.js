document.addEventListener('DOMContentLoaded', function() {
    var btnRegistrar = document.querySelector('#Registro');
    var btnLogin = document.querySelector('#FazerLogin');
    var conteudoRegistro = document.querySelector('.conteudo-total-registrar');
    var conteudoLogin = document.querySelector('.conteudo-total-login');

    // Função para mostrar a seção de registro
    function showRegistration() {
        conteudoRegistro.style.display = 'flex'; // Mostra o registro
        conteudoLogin.style.display = 'none'; // Oculta o login
    }

    // Função para mostrar a seção de login
    function showLogin() {
        conteudoRegistro.style.display = 'none'; // Oculta o registro
        conteudoLogin.style.display = 'flex'; // Mostra o login
    }

    btnLogin.addEventListener('click', showLogin);
    btnRegistrar.addEventListener('click', showRegistration);

    // Inicia com a seção de registro visível
    showRegistration();
});
