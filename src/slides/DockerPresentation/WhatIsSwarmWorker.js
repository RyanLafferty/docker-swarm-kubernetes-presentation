import React from 'react';
import {
  Heading, Slide, Text
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/docker-swarm-workers.png';


const WhatIsSwarmWorker = (
  <Slide transition={['fade']} bgDarken={0.85} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      What is a Swarm Worker?
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      A <b>Swarm Worker's</b> purpose is to provide capacity to the <b>Swarm Manager(s)</b> which handle
      the container orchestration
    </Text>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      They can be either a physical or a virtual machine
    </Text>
  </Slide>
);

export default WhatIsSwarmWorker;