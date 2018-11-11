import React from 'react';
import {
  Heading, Slide, Text
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/docker-types-of-mounts.png';


const OutsideUnionFileSystem = (
  <Slide transition={['fade']} bgDarken={0.90} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Outside The Union File System
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
    There can be volumes which enable us to persist data outside of the docker environment,
     these directories and files are mounted as the top layer of the <b>Union File System</b>
    </Text>
  </Slide>
);

export default OutsideUnionFileSystem;