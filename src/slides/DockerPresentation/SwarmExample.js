import React from 'react';
import {
  Heading, Slide, Text, Link
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/octocat.png';


const SwarmExample = (
  <Slide transition={['fade']} bgDarken={0.85} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Swarm Example
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      See below for an example on a local docker swarm cluster
    </Text>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Link textColor="primary" 
      href="https://github.com/RyanLafferty/templates/tree/master/web/docker-swarm"
    >
      <b>Link</b>
    </Link>
  </Slide>
);

export default SwarmExample;