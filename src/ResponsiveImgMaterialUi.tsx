import * as React from 'react';
import { useWidth } from './useWidth';

const ResponsiveImgMaterialUi = (props: ResponsiveImgMaterialUiProps) => (
  <img id={props.id} src={getSrc(props)} style={props.style} />
);

const getSrc = (props: ResponsiveImgMaterialUiProps) => {
  const width = useWidth();
  switch (width) {
    case 'xl':
      if (!!props.xl) {
        consoleDebug(props.debug, width, 'xl');
        return props.xl;
      }
    case 'lg':
      if (!!props.lg) {
        consoleDebug(props.debug, width, 'lg');
        return props.lg;
      }
    case 'md':
      if (!!props.md) {
        consoleDebug(props.debug, width, 'md');
        return props.md;
      }
    case 'sm':
      if (!!props.sm) {
        consoleDebug(props.debug, width, 'sm');
        return props.sm;
      }
    case 'xs':
    default:
      if (!!props.xs) {
        consoleDebug(props.debug, width, 'xs');
        return props.xs;
      }
      consoleDebug(props.debug, width, 'none');
  }
};

const consoleDebug = (
  debug: boolean | undefined,
  windowWidth: string,
  appliedWidth: string
) => {
  if (debug) {
    console.debug('ResponsiveImgMaterialUiProps', {
      windowWidth,
      appliedWidth,
    });
  }
};

interface ResponsiveImgMaterialUiProps {
  debug?: boolean;
  id?: string;
  lg?: string;
  md?: string;
  sm?: string;
  style?: React.CSSProperties;
  xl?: string;
  xs?: string;
}

export default ResponsiveImgMaterialUi;
