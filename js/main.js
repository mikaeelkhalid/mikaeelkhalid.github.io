const about = document.querySelector("#about");
const aboutContent = document.querySelector("#about-content");

const fyp = document.querySelector("#fyp");
const fypContent = document.querySelector("#fyp-content");

const contact = document.querySelector("#contact");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",
    x: "center",
    y: "center",
    width: "50%",
    height: "50%",
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

fyp.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "Final Year Project",
    x: "center",
    y: "center",
    width: "50%",
    height: "50%",
    mount: fypContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    background: "#00aa00",
    x: "center",
    y: "center",
    width: "50%",
    height: "50%",
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
