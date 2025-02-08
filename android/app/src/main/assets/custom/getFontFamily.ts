const getFontFamily = (fontFamily: string, fontWeight: string) => {
  switch (fontWeight) {
    case '100':
      return `${fontFamily}-Light`;

    case '200':
      return `${fontFamily}-ExtraLight`;

    case '300':
      return `${fontFamily}-Light`;

    case '400':
      return `${fontFamily}-Regular`;

    case '500':
      return `${fontFamily}-Medium`;

    case '600':
      return `${fontFamily}-SemiBold`;

    case '700':
      return `${fontFamily}-Bold`;

    case '800':
      return `${fontFamily}-ExtraBold`;
    case '900':
      return `${fontFamily}-Black`;

    default:
      return `${fontFamily}-Regular`;
  }
};

export default getFontFamily;
