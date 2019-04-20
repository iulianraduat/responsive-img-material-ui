import * as React from 'react';
import withWidth from '@material-ui/core/withWidth';

const ResponsiveImgMaterialUi = (props: ResponsiveImgMaterialUiProps) => (
  <img id={props.id} src={getSrc(props)} style={props.style} />
);

const getSrc = (props: ResponsiveImgMaterialUiProps) => {
  switch (props.width) {
    case 'xl':
      if (!!props.xl) {
        return props.xl;
      }
    case 'lg':
      if (!!props.lg) {
        return props.lg;
      }
    case 'md':
      if (!!props.md) {
        return props.md;
      }
    case 'sm':
      if (!!props.sm) {
        return props.sm;
      }
    case 'xs':
    default:
      if (!!props.xs) {
        return props.xs;
      }

      throw new Error("Please define at least one of 'md', 'lg', 'sm', 'xl', 'xs'");
  }
};

interface ResponsiveImgMaterialUiProps {
  id?: string;
  lg?: string;
  md?: string;
  sm?: string;
  style?: React.CSSProperties;
  width: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  xl?: string;
  xs?: string;
}

export default withWidth()(ResponsiveImgMaterialUi);
