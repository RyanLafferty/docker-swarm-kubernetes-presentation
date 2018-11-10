import React from 'react';
import {
  Heading, Slide, Text
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/docker-build-optimizations.png';


const DockerBuildOptimizations = (
  <Slide transition={['fade']} bgDarken={0.85} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Docker Build Optimizations
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      <b>Multi-Stage Builds:</b> Use multi-stage builds in order to reduce image size, number of layers and increase
        layer reusability
    </Text>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      <b>Order:</b> Maximize the use of Docker's cache by ordering your instructions such that those 
      which have the most changes are executed last
    </Text>
  </Slide>
);

export default DockerBuildOptimizations;