/**
 * Création de la modale de contact
 *
 * @param {*} photographersMain
 * @param {object} photographer
 */
const createModal = (photographersMain, photographer) => {
  const modalBground = document.createElement("div");
  modalBground.classList.add("modal__bground");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal__content");

  const modalTitle = document.createElement("h1");
  modalTitle.classList.add("modal__title");
  modalTitle.textContent = "Contactez-moi " + photographer.name;

  const modalForm = document.createElement("form");
  modalForm.classList.add("modal__form");

  const modalContentFirst = document.createElement("div");
  modalContentFirst.classList.add("form__data");

  const modalFirstname = document.createElement("label");
  modalFirstname.setAttribute("for", "firstname");
  modalFirstname.classList.add("modal__firstname");
  modalFirstname.textContent = "Prénom";

  const modalInputFirstname = document.createElement("input");
  modalInputFirstname.setAttribute("id", "firstname");
  modalInputFirstname.classList.add("modal__input");
  modalInputFirstname.type = "text";

  const modalSpanErrorFirst = document.createElement("span");
  modalSpanErrorFirst.classList.add("modal__error");
  modalSpanErrorFirst.setAttribute("id", "modal__error--first");

  const modalContentName = document.createElement("div");
  modalContentName.classList.add("form__data");

  const modalLastname = document.createElement("label");
  modalLastname.setAttribute("for", "lastname");
  modalLastname.classList.add("modal__lastname");
  modalLastname.textContent = "Nom";

  const modalInputLastname = document.createElement("input");
  modalInputLastname.setAttribute("id", "lastname");
  modalInputLastname.classList.add("modal__input");
  modalInputLastname.type = "text";

  const modalSpanErrorName = document.createElement("span");
  modalSpanErrorName.classList.add("modal__error");
  modalSpanErrorName.setAttribute("id", "modal__error--last");

  const modalContentEmail = document.createElement("div");
  modalContentEmail.classList.add("form__data");

  const modalEmail = document.createElement("label");
  modalEmail.setAttribute("for", "email");
  modalEmail.classList.add("modal__email");
  modalEmail.textContent = "Email";

  const modalInputEmail = document.createElement("input");
  modalInputEmail.setAttribute("id", "email");
  modalInputEmail.classList.add("modal__input");
  modalInputEmail.type = "email";

  const modalSpanErrorEmail = document.createElement("span");
  modalSpanErrorEmail.classList.add("modal__error");
  modalSpanErrorEmail.setAttribute("id", "modal__error--email");

  const modalContentMessage = document.createElement("div");
  modalContentMessage.classList.add("form__data");

  const modalMessage = document.createElement("label");
  modalMessage.setAttribute("for", "message");
  modalMessage.classList.add("modal__message");
  modalMessage.textContent = "Message";

  const modalInputMessage = document.createElement("textarea");
  modalInputMessage.setAttribute("id", "message");
  modalInputMessage.classList.add("modal__input--textarea");

  const modalSpanErrorMessage = document.createElement("span");
  modalSpanErrorMessage.classList.add("modal__error");
  modalSpanErrorMessage.setAttribute("id", "modal__error--message");

  const modalSendButton = document.createElement("button");
  modalSendButton.classList.add("modal__send-button");
  modalSendButton.setAttribute("type", "submit");
  modalSendButton.setAttribute("aria-label", "Send");
  modalSendButton.textContent = "Envoyer";  

  const modalClose = document.createElement("div");
  modalClose.classList.add("modal__close");

  const modalCloseButton = document.createElement("button");
  modalCloseButton.classList.add("modal__close--btn");
  modalCloseButton.setAttribute("arial-label", "Close contact form");
  modalCloseButton.setAttribute("tittle", "Close contact form");
  modalCloseButton.setAttribute("type", "button"); 
  modalCloseButton.textContent = "Fermeture"
  
  const modalCloseIcon = document.createElement("em");
  modalCloseIcon.classList.add("fas", "fa-times", "close-icon");

  const modalSpanError = document.createElement("span");
  modalSpanError.classList.add("modal__error");
  modalSpanError.setAttribute("id", "modal__error");

  modalContentFirst.appendChild(modalFirstname);
  modalContentFirst.appendChild(modalInputFirstname);
  modalContentFirst.appendChild(modalSpanErrorFirst);
  modalContentName.appendChild(modalLastname);
  modalContentName.appendChild(modalInputLastname);
  modalContentName.appendChild(modalSpanErrorName);
  modalContentEmail.appendChild(modalEmail);
  modalContentEmail.appendChild(modalInputEmail);
  modalContentEmail.appendChild(modalSpanErrorEmail);
  modalContentMessage.appendChild(modalMessage);
  modalContentMessage.appendChild(modalInputMessage);
  modalContentMessage.appendChild(modalSpanErrorMessage);

  modalForm.appendChild(modalContentFirst);
  modalForm.appendChild(modalContentName);
  modalForm.appendChild(modalContentEmail);
  modalForm.appendChild(modalContentMessage);
  modalForm.appendChild(modalSendButton);
  modalForm.appendChild(modalClose);

  modalClose.appendChild(modalCloseButton);
  modalClose.appendChild(modalCloseIcon);

  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalForm);
  modalBground.appendChild(modalContent);

  photographersMain.appendChild(modalBground);

  // Code pour la partie validation modale qui n'ai pas demandé pour ce projet
  //createValidationModale(photographersMain);
  addModalFunction();
};

// Code pour la partie validation modale qui n'ai pas demandé pour ce projet
/*const createValidationModale = (photographersMain) => {
  const validationModaleBground = document.createElement("div");
  validationModaleBground.classList.add("validation__bground");
  validationModaleBground.setAttribute("id", "validation__form");
  const validationModaleContent = document.createElement("div");
  validationModaleContent.classList.add("validation__content");
  const validationModaleText = document.createElement("p");
  validationModaleText.classList.add("validation__text");
  validationModaleText.textContent = "Merci, je vous contacte dès que possible"
  const validationModalSendButton = document.createElement("button");
  validationModalSendButton.classList.add("modal__send-button", "validation__send-button");
  validationModalSendButton.textContent = "Valider";
  const validationModalCloseButton = document.createElement("button");
  validationModalCloseButton.classList.add("modal__close", "validation__close");
  const validationModalCloseIcon = document.createElement("i");
  validationModalCloseIcon.classList.add("fas", "fa-times", "close-icon");

  validationModaleContent.appendChild(validationModaleText);
  validationModaleContent.appendChild(validationModalSendButton);
  validationModalCloseButton.appendChild(validationModalCloseIcon);

  validationModaleBground.appendChild(validationModaleContent);
  validationModaleBground.appendChild(validationModalCloseButton);
  

  photographersMain.appendChild(validationModaleBground);
};*/

const addModalFunction = () => {
  const modalBg = document.querySelector(".modal__bground");
  const modalBtn = document.querySelectorAll(".button__contact");
  const modalCross = document.querySelector(".modal__close");
  // Code pour la partie validation modale qui n'ai pas demandé pour ce projet
  /*const validationModalBg = document.querySelector(".validation__bground");
  const validationModalCross = document.querySelector(".validation__close");*/

  function launchModal() {
    modalBg.style.display = "block";
  }
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

  function closeModal() {
    modalBg.style.display = "none";
  }
  modalCross.addEventListener("click", closeModal);

  // Code pour la partie validation modale qui n'ai pas demandé pour ce projet
  /*function closeValidationModal() {
    validationModalBg.style.display = "none";    
  }
  validationModalCross.addEventListener("click", closeValidationModal);*/

  function validate(e) {
    e.preventDefault();
    document.getElementById("modal__error--first").innerHTML = "";
    document.getElementById("modal__error--last").innerHTML = "";
    document.getElementById("modal__error--email").innerHTML = "";
    document.getElementById("modal__error--message").innerHTML = "";

    let valid = true;

    if (document.getElementById("firstname").value.length < 2) {
      document.getElementById("modal__error--first").innerHTML =
        "Veuillez entrer 2 caractères minimum pour le champ prénom";
      valid = false;
    }
    if (document.getElementById("lastname").value.length < 2) {
      document.getElementById("modal__error--last").innerHTML =
        "Veuillez entrer 2 caractères minimum pour le champ nom";
      valid = false;
    }
    if (document.getElementById("email").value === "") {
      document.getElementById("modal__error--email").innerHTML = "Veuillez entrer un e-mail valide";
      valid = false;
    }
    if (document.getElementById("message").value.length < 30) {
      document.getElementById("modal__error--message").innerHTML =
        "Veuillez entrer un message avec 30 caractères minimun";
      valid = false;
    }
    if (valid === true) {
      console.log(document.getElementById("firstname").value);
      console.log(document.getElementById("lastname").value);
      console.log(document.getElementById("email").value);
      closeModal();
    }
  }

  // Code pour la partie validation modale qui n'ai pas demandé pour ce projet
  /*const validationForm = document.getElementById("validation__form");
    function validation(e) {
      closeModal();     
      validationForm.style.display = "block";      
      e.preventDefault();
    }*/

  document.querySelector(".modal__send-button").addEventListener("click", validate);

  /**
   * Fonction qui gère la fermeture de la modal en appuyant sur ESC
   */

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.key === "Esc") {
      closeModal();
    }
  });

  // Code pour la partie validation modale qui n'ai pas demandé pour ce projet
  /*document.querySelector(".validation__send-button").addEventListener("click", closeValidationModal);*/
};

export { createModal };
