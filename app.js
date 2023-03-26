import { Card } from "./components.js";
import { loadMessages, submitForm } from "./eventHandlers.js";

const root = document.getElementById("root");
const nameForm = document.querySelector("#form1");

// EventHandlers
loadMessages(root, Card);
submitForm(root, nameForm);
