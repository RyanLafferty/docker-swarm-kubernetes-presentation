import React from 'react';
import {
  Heading, Slide, Text, Link
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/docker-minimal.png';


const KubernetesExample = (
  <Slide transition={['fade']} bgDarken={0.85} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Kubernetes Example
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      See below for an example on a local kubernetes cluster using minikube
    </Text>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Link textColor="primary" 
      href="https://github.com/RyanLafferty/templates/tree/master/web/kubernetes"
    >
      <b>Link</b>
    </Link>
  </Slide>
);

export default KubernetesExample;