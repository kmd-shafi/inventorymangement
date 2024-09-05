
const dialogBox = document.getElementById('dialog-box');
const openDialogBtn = document.getElementById('create_btn');
const closeDialogBtn = document.getElementById('close-dialog-btn');

const openDialog = () => {
    dialogBox.style.display = 'block';
  };
  
 
  const closeDialog = () => {
    dialogBox.style.display = 'none';
  };
  
  openDialogBtn.addEventListener('click', openDialog);
  closeDialogBtn.addEventListener('click', closeDialog);