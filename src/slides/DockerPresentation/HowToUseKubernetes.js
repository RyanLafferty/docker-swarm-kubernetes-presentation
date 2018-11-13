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
      To utilize the Kubernetes Cluster, we use configuration file(s) which will define our service(s)git 
    </Text>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      In this configuration file we will define our deployment(s) which are made up of pod(s)
      containing our container(s)
    </Text>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      We can then use the cluster manager to upload our configuration files
    </Text>
  </Slide>
);

export default HowToUseKubernetes;