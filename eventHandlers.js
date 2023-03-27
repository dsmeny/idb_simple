import { get, set, del, clear, keys, values } from "./controller.js";
import { Button, Content } from "./components.js";

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
      const ContentContainer = Content();

      messages.forEach((message, index) => {
        const html = Card(message, Button, allKeys[index]);
        ContentContainer.appendChild(html);
      });

      const Clear = Button("clear all");
      Clear.setAttribute("id", "clear-btn");
      root.appendChild(Clear);
      Clear.addEventListener("click", () => {
        clear();
        window.location.reload();
      });
      root.appendChild(ContentContainer);

      const cards = [...document.querySelectorAll(".inner-c")];
      cards.forEach((card) => {
        card.addEventListener("click", (e) => {
          const key = e.target.dataset.key;
          del(key);
          window.location.reload();
        });
      });
    }

    const inputField = document.getElementById("inputField");
    inputField.focus();
  });
};
