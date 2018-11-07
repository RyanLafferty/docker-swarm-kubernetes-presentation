import React from 'react';
import {
  Heading, Slide, Text
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/docker-minimal.png';


const WhatIsDocker = (
  <Slide transition={['fade']} bgDarken={0.85} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      What is Docker?
    </Heading>
    <Text textColor="tertiary">
      Docker is the current leading container platform
    </Text>
  </Slide>
);

export default WhatIsDocker;