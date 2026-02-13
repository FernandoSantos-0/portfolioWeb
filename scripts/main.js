const btnMenu = document.getElementById("btn-menu");
const nav = document.getElementById("item");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("open");
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    btnMenu.classList.remove("open");
    nav.classList.remove("open");
  });
});

document.addEventListener("click", (event) => {
  const clicouNoMenu = nav.contains(event.target);
  const clicouNoBotao = btnMenu.contains(event.target);

  if (!clicouNoMenu && !clicouNoBotao) {
    btnMenu.classList.remove("open");
    nav.classList.remove("open");
  }
});

document.querySelectorAll(".caixa-experiencia").forEach((details) => {
  const summary = details.querySelector("summary");
  const content = details.querySelector(".conteudo");

  let isClosing = false;
  let isOpening = false;

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    if (details.open && !isClosing) {
      close();
    } else if (!details.open && !isOpening) {
      open();
    }
  });

  function open() {
    isOpening = true;
    details.open = true;

    content.style.height = "0px";
    const height = content.scrollHeight;

    requestAnimationFrame(() => {
      content.style.height = `${height}px`;
    });

    content.addEventListener(
      "transitionend",
      () => {
        content.style.height = "auto";
        isOpening = false;
      },
      { once: true },
    );
  }

  function close() {
    isClosing = true;

    content.style.height = `${content.scrollHeight}px`;

    requestAnimationFrame(() => {
      content.style.height = "0px";
    });

    content.addEventListener(
      "transitionend",
      () => {
        details.open = false;
        isClosing = false;
      },
      { once: true },
    );
  }
});
