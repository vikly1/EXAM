// меню для мобильных у-ств
const callRequestDialog = document.querySelector('#call-request-dialog');
const callRequestBtn = document.querySelector('#call-request');
const callRequestClose = document.querySelector('#call-request-close');
const callRequestOverlay = document.querySelector('#call-request-overlay');

function handleOpenRequestDialog() {
  callRequestDialog.classList.add('dialog__active');
}

function handleCloseRequestDialog() {
  callRequestDialog.classList.remove('dialog__active');
}

callRequestBtn.addEventListener('click', handleOpenRequestDialog);
callRequestClose.addEventListener('click', handleCloseRequestDialog);
callRequestOverlay.addEventListener('click', handleCloseRequestDialog);
