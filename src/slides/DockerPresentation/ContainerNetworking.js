import React from 'react';
import {
  Heading, Slide, Text
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/container-networking.png';


const ContainerNetworking = (
  <Slide transition={['fade']} bgDarken={0.75} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Container Networking
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      Containers will make use of the defined network interface. They can be run together on their own
      virtual network or on a bridged network. Within their network they can be resolved using their container name.
      In order to expose them to the outside world we must publish their ports using the following
      format <b>CONTAINER_PORT:DOCKER_HOST_PORT</b>.
    </Text>
  </Slide>
);

export default ContainerNetworking;