import React from 'react';
import {
  Heading, Image, Slide
} from 'spectacle';

import confused from './../../res/img/DockerPresentation/confused.jpg';


const ConfusedContainer = (
  <Slide transition={['fade']}>
    <Image src={confused} margin="0px auto 40px" />
    <Heading size={2} caps fit textColor="tertiary" textFont="primary">
      Container?
    </Heading>
  </Slide>
);

export default ConfusedContainer;