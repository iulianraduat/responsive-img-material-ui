import React from 'react';
import ResponsiveImgMaterialUiProps from '../src/ResponsiveImgMaterialUi';
import { storiesOf } from '@storybook/react';

const style: React.CSSProperties = {
  border: 'solid 2px #ff8080',
  padding: 10
};

const xs = 'https://img.shields.io/badge/width-xs-green';
const sm = 'https://img.shields.io/badge/width-sm-orange';
const md = 'https://img.shields.io/badge/width-md-blue';
const lg = 'https://img.shields.io/badge/width-lg-red';
const xl = 'https://img.shields.io/badge/width-xl-9cf';

storiesOf('ResponsiveImgMaterialUiProps', module)
  .add('with disabled debug', () => (
    <div>
      <ResponsiveImgMaterialUiProps xs={xs} md={md} sm={sm} lg={lg} xl={xl} />
      <div>Please resize the page width to see different images for different sizes</div>
    </div>
  ))
  .add('with enabled debug', () => (
    <div>
      <ResponsiveImgMaterialUiProps xs={xs} md={md} sm={sm} lg={lg} xl={xl} debug={true} />
      <div>Please resize the page width to see different images for different sizes</div>
    </div>
  ))
  .add('styled', () => (
    <div>
      <ResponsiveImgMaterialUiProps xs={xs} md={md} sm={sm} lg={lg} xl={xl} style={style} />
      <div>Please resize the page width to see different images for different sizes</div>
    </div>
  ));
