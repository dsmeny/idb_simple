import { get, set, del, clear, keys, values } from "./controller.js";
import { Button } from "./components.js";

export const submitForm = (root, nameForm) => {
  nameForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    set(name, `${name.charCodeAt()}`);

    window.location.reload();
  });
};

export const loadMessages = (root, Card) => {
  window.addEventListener("load", async () => {
    const messages = await values();
    const allKeys = await keys();

    if (messages.length) {
      messages.forEach((message, index) => {
        const html = Card(message, Button, allKeys[index]);
        root.appendChild(html);
      });

      const buttonGroup = [...document.querySelectorAll(".btn")];
      buttonGroup.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const key = e.target.dataset.key;
          del(key);
          window.location.reload();
        });
      });

      const Clear = Button("clear all");
      Clear.setAttribute("id", "clear-btn");
      root.appendChild(Clear);
      Clear.addEventListener("click", () => {
        clear();
        window.location.reload();
      });
    }

    const inputField = document.getElementById("inputField");
    inputField.focus();
  });
};
