document.getElementById('addParticipantForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    if (name && email) {
      const participantList = document.getElementById('participantList');
      const newParticipant = document.createElement('li');
      newParticipant.textContent = `${name} - ${email}`;
      participantList.appendChild(newParticipant);
  
      // Limpar os campos do formulário
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
  