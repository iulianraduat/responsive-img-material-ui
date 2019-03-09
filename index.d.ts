import * as React from 'react';

export interface ImgMaterialUiProps extends React.Props<ImgMaterialUi> {
	id?: string;
	lg?: string;
	md?: string;
	sm?: string;
	style?: React.CSSProperties;
	xl?: string;
	xs?: string;
}

declare class ImgMaterialUi extends React.Component<ImgMaterialUiProps> {}

declare module 'img-material-ui' {

}

export default ImgMaterialUi;
