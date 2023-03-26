import { get, set, del, clear, keys, values } from "./controller.js";

export const submitForm = (root, nameForm) => {
  nameForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    set(name, `${name.charCodeAt()}`);

    window.location.reload();
  });
};

export const loadMessages = (root, createCard) => {
  window.addEventListener("load", async () => {
    const messages = await values();
    const allKeys = await keys();

    messages.forEach((message, index) => {
      const html = createCard(message, allKeys[index]);
      root.appendChild(html);
    });

    const buttons = [...document.querySelectorAll(".btn")];

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const key = e.target.dataset.key;
        del(key);
        window.location.reload();
      });
    });

    const inputField = document.getElementById("inputField");
    inputField.focus();
  });
};
