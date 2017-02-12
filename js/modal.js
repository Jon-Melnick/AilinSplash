()=>{
    this.modal = document.getElementById('modal');
    this.modalBG = document.getElementById('modal-bg')
    this.modalFG = document.getElementById('modal-fg')
}

function hideModal(e) {
  let modalFG = document.getElementById('modal-fg')
  let modalBG = document.getElementById('modal-bg')
  setTimeout(()=>{this.modal.style.display = 'none'}, 800)
  modalBG.style.opacity = 0;
  modalFG.style.top = '-1000px';
}

function showModal() {
  this.modal.style.display = 'flex'
  setTimeout(()=>{
    let modalBG = document.getElementById('modal-bg')
    let modalFG = document.getElementById('modal-fg')
    modalBG.style.opacity = 0.5;
    modalFG.style.top = '10%';
  }, 0)

}

function sendAndHideModal(e) {
  console.log(e);
  e.preventDefault();
}

function sendEmail() {
  // disable button

  sendMessage(
    {
      'To': 'jon.d.melnick@gmail.com',
      'Subject': $('#email-subject').val()
    },
    $('#email-message').val(),
    composeTidy
  );

  return false;
}

function sendMessage(headers_obj, message, callback)
{
  var email = '';

  for(var header in headers_obj)
    email += header += ": "+headers_obj[header]+"\r\n";

  email += "\r\n" + message;

  var sendRequest = gapi.client.gmail.users.messages.send({
    'userId': 'me',
    'resource': {
      'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
    }
  });

  return sendRequest.execute(callback);
}


function composeTidy() {
  hideModal();
}

function functionName() {

}

function sendMail() {
  const token = 'pttdb7vwhollbv6v37r45gqt';
}
