import Page from "~/interactions/classes/Page";

export default class About extends Page {
  constructor() {
    super({
      id: "about",
      element: ".about",
      elements: {
        navigation: document.querySelector(".navigation"),
        wrapper: ".about__wrapper",
      },
    });
  }
}
