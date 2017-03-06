import React from 'react';
import {
  Image
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  android: require('../assets/phone-android.png'),
  iphone: require('../assets/phone-iphone.png')
};

preloader(images);

const backgroundImageFor = (image) => `url(${image})`;

const createPhone = function ({ wrapper, content }) {
  return class Phone extends React.Component {
    render(){
      return (
        <div style={wrapper}>
          <Image style={content} src={this.props.src} />
        </div>
      );
    }
  }
}

export const Android = createPhone({
  wrapper: {
    backgroundImage: backgroundImageFor(images.android),
    backgroundSize: 'contain',
    paddingTop: '65px',
    width: '312px',
    height: '629px',
    margin: '0 auto'
  },
  content: {
    height: '488px',
    margin: '0'
  }
});

export const IPhone = createPhone({
  wrapper: {
    backgroundImage: backgroundImageFor(images.iphone),
    backgroundSize: 'contain',
    paddingTop: '82px',
    width: '315px',
    height: '632px'
  },
  content: {
    height: '467px',
    margin: '0'
  }
});
