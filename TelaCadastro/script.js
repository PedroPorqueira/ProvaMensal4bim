document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    
    // Exibe uma mensagem de sucesso
    document.getElementById('message').innerText = `Cadastro de ${name} realizado com sucesso!`;
    
    // Limpa o formulário após o cadastro
    this.reset();
});
