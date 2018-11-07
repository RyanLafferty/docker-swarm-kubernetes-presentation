import React from 'react';
import {
  Heading, Slide, Text
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/docker-minimal.png';


const ContainerOrchestration = (
  <Slide transition={['fade']} bgDarken={0.85} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Container Orchestration
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      <b>Container Orchestration</b> is a solution which enables us to manage a large number of containers
    </Text>
  </Slide>
);

export default ContainerOrchestration;