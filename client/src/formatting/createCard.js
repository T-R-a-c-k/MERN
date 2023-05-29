function createCard(title, linkTitle, link) {
  return {
    title: title ? title : "some card title",
    linkTitle: linkTitle ? linkTitle : "some link title",
    link: link ? link : "",
  };
}

export default createCard;
