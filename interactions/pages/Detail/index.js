import gsap from "gsap";
import Page from "~/interactions/classes/Page";
import Button from "~/interactions/classes/Button";

export default class Detail extends Page {
  constructor() {
    super({
      id: "detail",
      element: ".detail",
      elements: {
        navigation: document.querySelector(".navigation"),
        button: ".detail__button",
      },
    });
  }

  create() {
    super.create();
    this.link = new Button({
      element: this.elements.button,
    });
  }

  show() {
    const timeline = gsap.timeline({ delay: 2 });
    timeline.fromTo(
      this.element,
      {
        autoAlpha: 0,
      },
      { autoAlpha: 1 }
    );

    super.show(timeline);
  }

  destroy() {
    super.destroy();
    this.link.removeEventListeners();
  }
}
