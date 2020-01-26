import * as React from 'react';

export interface ResponsiveImgMaterialUiProps extends React.Props<ResponsiveImgMaterialUi> {
  id?: string;
  lg?: string;
  md?: string;
  sm?: string;
  style?: React.CSSProperties;
  xl?: string;
  xs?: string;
}

declare class ResponsiveImgMaterialUi extends React.Component<ResponsiveImgMaterialUiProps> {}

declare module 'responsive-img-material-ui' {}

export default ResponsiveImgMaterialUi;
