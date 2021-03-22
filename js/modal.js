const createModal = () => {
  const photographersMain = document.querySelector(".photographer__main");

  const modalBground = document.createElement("div");
  modalBground.classList.add("modal__bground");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal__content");

  const modalTitle = document.createElement("h1");
  modalTitle.classList.add("modal__title");

  const modalForm = document.createElement("form");
  modalForm.classList.add("modal__form");

  const modalFirstname = document.createElement("label");
  modalFirstname.setAttribute("for", "firstname");
  modalFirstname.classList.add("modal__firstname");
  modalFirstname.textContent = "Prénom";

  const modalInputFirstname = document.createElement("input");
  modalInputFirstname.setAttribute("id", "firstname");
  modalInputFirstname.type = "text";

  const modalLastname = document.createElement("label");
  modalLastname.setAttribute("for", "Lastname");
  modalLastname.classList.add("modal__lastname");
  modalLastname.textContent = "Nom";

  const modalInputLastname = document.createElement("input");
  modalInputLastname.setAttribute("id", "lastname");
  modalInputLastname.type = "text";

  const modalEmail = document.createElement("label");
  modalEmail.setAttribute("for", "Email");
  modalEmail.classList.add("modal__email");
  modalEmail.textContent = "Email";

  const modalInputEmail = document.createElement("input");
  modalInputEmail.setAttribute("id", "email");
  modalInputEmail.type = "text";

  const modalMessage = document.createElement("label");
  modalMessage.setAttribute("for", "Message");
  modalMessage.classList.add("modal__message");
  modalMessage.textContent = "Message";

  const modalInputMessage = document.createElement("textarea");
  modalInputMessage.setAttribute("id", "message");
  modalInputMessage.setAttribute("type", "text");
  modalInputMessage.rows = 5;
  modalInputMessage.cols = 35;

  const modalSendButton = document.createElement("button");
  modalSendButton.classList.add("modal__send-button");
  modalSendButton.textContent = "Envoyer";

  const modalCloseButton = document.createElement("button");
  modalCloseButton.classList.add("close");

  const modalCloseIcon = document.createElement("i");
  modalCloseIcon.classList.add("close-icon");

  const modalSpanError = document.createElement("span");
  modalSpanError.classList.add("Modal__error");
  const cloneSpanError = modalSpanError.cloneNode(true);

  modalForm.appendChild(modalFirstname);
  modalForm.appendChild(modalInputFirstname);
  modalInputFirstname.insertAdjacentElement("afterend", cloneSpanError);
  modalForm.appendChild(modalLastname);
  modalForm.appendChild(modalInputLastname);
  modalInputLastname.insertAdjacentElement("afterend", cloneSpanError);
  modalForm.appendChild(modalEmail);
  modalForm.appendChild(modalInputEmail);
  modalInputEmail.insertAdjacentElement("afterend", cloneSpanError);
  modalForm.appendChild(modalMessage);
  modalForm.appendChild(modalInputMessage);
  modalInputMessage.insertAdjacentElement("afterend", cloneSpanError);
  modalForm.appendChild(modalSendButton);
  modalSendButton.insertAdjacentElement("afterend", cloneSpanError);
  modalForm.appendChild(modalCloseButton);

  modalCloseButton.appendChild(modalCloseIcon);

  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalForm);

  modalBground.appendChild(modalContent);

  photographersMain.appendChild(modalBground);
};

export { createModal };