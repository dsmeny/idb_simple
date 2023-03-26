export const createCard = (message, key) => {
  const outer_ = document.createElement("div");
  const inner_ = document.createElement("div");
  const content = document.createElement("p");
  const btn = document.createElement("button");
  content.textContent = message;
  btn.textContent = "del";
  btn.dataset.key = key;

  outer_.setAttribute("class", "outer-c");
  inner_.setAttribute("class", "inner-c");
  btn.setAttribute("class", "btn");

  inner_.appendChild(content);
  inner_.appendChild(btn);
  outer_.appendChild(inner_);

  return outer_;
};
