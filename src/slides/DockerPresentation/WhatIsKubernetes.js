import React from 'react';
import {
  Heading, Slide, Text
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/kubernetes-architecture.png';


const WhatIsKubernetes = (
  <Slide transition={['fade']} bgDarken={0.85} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      What is Kubernetes?
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      Kubernetes is another solution to the container orchestration problem space. It is a platform
      for containers, microservices and cloud solutions.
    </Text>
  </Slide>
);

export default WhatIsKubernetes;