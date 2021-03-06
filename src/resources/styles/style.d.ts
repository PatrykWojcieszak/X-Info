import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
  }

  export interface Colors {
    background: string;
    foreground: string;
    fontPrimary: string;
    fontSecondary: string;
    blue: string;
    green: string;
    red: string;
    dark: string;
  }

  export interface Fonts {
    family: string;
  }
}
