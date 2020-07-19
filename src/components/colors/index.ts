export enum RootColors {
  background = 'rgba(34, 40, 49,1)',
  backgroundDark = 'rgba(30, 36, 44,1)',
  blueDark = 'rgba(45,64,89,1)',
  orange = 'rgba(255,87,34,1)',
  white = 'rgba(238,238,238,1)',
  whiteDark = 'rgba(230, 230, 230, 1)',
}

export const rootColorGradients = {
  light: `linear-gradient(20deg, ${RootColors.whiteDark}, ${RootColors.white}));`,
  dark: `linear-gradient(20deg, ${RootColors.backgroundDark}, ${RootColors.background});`,
};

export enum Shadows {
  small = '',
}
