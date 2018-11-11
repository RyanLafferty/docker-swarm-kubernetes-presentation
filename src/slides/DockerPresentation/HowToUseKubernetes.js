import React from 'react';
import {
  Heading, Slide, Text
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/kubernetes-deployment.png';


const HowToUseKubernetes = (
  <Slide transition={['fade']} bgDarken={0.890} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      How do we use a kubernetes cluster?
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      TODO
    </Text>
  </Slide>
);

export default HowToUseKubernetes;