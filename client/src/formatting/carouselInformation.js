function createCarouselInfo(src, alt, text, paragraph) {
  const colors = [
    "Green",
    "Blue",
    "DarkSlateGray",
    "GoldenRod",
    "LightCoral",
    "LightSeaGreen",
    "MediumSlateBlue",
  ];
  return {
    src,
    alt,
    text,
    color: colors[Math.floor(Math.random() * colors.length)],
    paragraph,
  };
}

export default createCarouselInfo;
