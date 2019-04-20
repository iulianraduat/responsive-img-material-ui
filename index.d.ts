import * as React from 'react';

export interface ImgMaterialUiProps extends React.Props<ResponsiveImgMaterialUi> {
  id?: string;
  lg?: string;
  md?: string;
  sm?: string;
  style?: React.CSSProperties;
  xl?: string;
  xs?: string;
}

declare class ResponsiveImgMaterialUi extends React.Component<ImgMaterialUiProps> {}

declare module 'responsive-img-material-ui' {}

export default ResponsiveImgMaterialUi;
