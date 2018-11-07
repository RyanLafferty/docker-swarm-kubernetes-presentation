import React from 'react';
import {
  Heading, Image, Slide
} from 'spectacle';

import container from './../../res/img/DockerPresentation/containerized-apps.png';


const WhatIsAContainer = (
  <Slide transition={['fade']}>
    <Image src={container} margin="0px auto 40px" style={{height: '500px', width: '500px'}} />
    <Heading size={2} caps fit textColor="tertiary" textFont="primary">
      A container is a standardized unit of software
    </Heading>
  </Slide>
);

export default WhatIsAContainer;