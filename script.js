var btnRegistrar = document.querySelector('#Registro');
var btnLogin = document.querySelector('#FazerLogin');
var conteudoRegistro = document.querySelector('.conteudo-total-registrar');
var conteudoLogin = document.querySelector('.conteudo-total-login');


btnLogin.addEventListener('click', function(){
    if (conteudoLogin.computedStyleMap.display === 'block'){
        conteudoLogin.computedStyleMap.display = 'none';
        conteudoRegistro.computedStyleMap.display === 'block';
    } else{
        conteudoLogin.computedStyleMap.display === 'block';
    }
});

btnRegistrar.addEventListener('click', function(){
    if (conteudoRegistro.computedStyleMap.display === 'block'){
        conteudoRegistro.computedStyleMap.display = 'none';
        conteudoLogin.computedStyleMap.display === 'block';
    } else{
        conteudoRegistro.style.display === 'block';
    }
});