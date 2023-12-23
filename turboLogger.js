export const turbologger = (message, textColor = "blue") => {
  const textStyle = `color: ${textColor}`;
  console.log(`%${message}`, textStyle);
};
