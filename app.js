import { createCard } from "./components.js";
import { loadMessages, submitForm } from "./eventHandlers.js";

const root = document.getElementById("root");
const nameForm = document.querySelector("#form1");

// EventHandlers
loadMessages(root, createCard);
submitForm(root, nameForm);
