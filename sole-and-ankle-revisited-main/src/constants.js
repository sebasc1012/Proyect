export const COLORS = {
  white: "0deg, 0%, 100%",
  gray: {
    300: "190deg, 5%, 80%",
    500: "196deg, 4%, 60%",
    700: "220deg, 5%, 40%",
    100: "185deg, 5%, 95%",
    900: "220deg, 3%, 20%",
  },
  primary: "340deg, 65%, 47%",
  secondary: "240deg, 60%, 63%",
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const SIZES = {
  Phone: 600,
  Tablet: 950,
  Laptop: 1300,
};

export const QUIRES = {
  PhoneSmall: `(max-width:${SIZES.Phone / 16}rem)`,
  TabletSmall: `(max-width:${SIZES.Tablet / 16}rem)`,
  LaptopSmall: `(max-width:${SIZES.Laptop / 16}rem)`,
};
