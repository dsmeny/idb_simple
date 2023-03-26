export const Card = (message, btn, key) => {
  const outer_ = document.createElement("div");
  const inner_ = document.createElement("div");
  const content = document.createElement("p");
  const button = btn("del");

  content.textContent = message;
  button.dataset.key = key;

  outer_.setAttribute("class", "outer-c");
  inner_.setAttribute("class", "inner-c");

  inner_.appendChild(content);
  inner_.appendChild(button);
  outer_.appendChild(inner_);

  return outer_;
};

export const Button = (text) => {
  const btn = document.createElement("button");
  btn.textContent = text;

  btn.setAttribute("class", "btn");

  return btn;
};
