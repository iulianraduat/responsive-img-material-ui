import * as React from 'react';

export interface ResponsiveImgMaterialUiProps {
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
