import React from 'react';
import {
  Heading, Slide, Text
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/how-to-use-swarm.png';


const HowToUseTheSwarm = (
  <Slide transition={['fade']} bgDarken={0.85} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      How do we use a Swarm?
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      To make use of a <b>Swarm</b> we interact with the <b>Swarm Manager(s)</b> through a series of commands and arguments
      which enable us to do everything from deploying a defined service to configuring our load balancer(s)
    </Text>
  </Slide>
);

export default HowToUseTheSwarm;