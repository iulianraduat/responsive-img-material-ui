import * as React from 'react';
import withWidth from '@material-ui/core/withWidth';

const ResponsiveImgMaterialUi = (props: ResponsiveImgMaterialUiProps) => (
  <img id={props.id} src={getSrc(props)} style={props.style} />
);

const getSrc = (props: ResponsiveImgMaterialUiProps) => {
  switch (props.width) {
    case 'xl':
      if (!!props.xl) {
        consoleDebug(props.debug, props.width, 'xl');
        return props.xl;
      }
    case 'lg':
      if (!!props.lg) {
        consoleDebug(props.debug, props.width, 'lg');
        return props.lg;
      }
    case 'md':
      if (!!props.md) {
        consoleDebug(props.debug, props.width, 'md');
        return props.md;
      }
    case 'sm':
      if (!!props.sm) {
        consoleDebug(props.debug, props.width, 'sm');
        return props.sm;
      }
    case 'xs':
    default:
      if (!!props.xs) {
        consoleDebug(props.debug, props.width, 'xs');
        return props.xs;
      }
      consoleDebug(props.debug, props.width, 'none');
  }
};

const consoleDebug = (debug: boolean | undefined, windowWidth: string, appliedWidth: string) => {
  if (debug) {
    console.debug('ResponsiveImgMaterialUiProps', { windowWidth, appliedWidth });
  }
};

interface ResponsiveImgMaterialUiProps {
  debug?: boolean;
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
