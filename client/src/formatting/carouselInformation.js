function createCarouselInfo(src, alt, text) {
  const colors = [
    "White",
    "Green",
    "Blue",
    "Azure",
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
  };
}

export default createCarouselInfo;
