import React from 'react';
import {
  Heading, Slide, Text
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/docker-swarm-architecture.png';


const WhatIsSwarm = (
  <Slide transition={['fade']} bgDarken={0.85} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      What is Swarm Mode?
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      In <b>Swarm Mode</b> a group of machine(s) (<b>Swarm Worker(s)</b>) are joined into a cluster where a
      <b> Swarm Manager</b> will decide which worker will host a deployed container using an array of strategies,
      one of the most common strategies is emptiest node
    </Text>
  </Slide>
);

export default WhatIsSwarm;