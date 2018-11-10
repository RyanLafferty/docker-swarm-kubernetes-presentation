import React from 'react';
import {
  Heading, Slide, Text
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/union-file-system.png';


const DockerFileSystem = (
  <Slide transition={['fade']} bgDarken={0.85} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Docker File System
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      Docker contains make use of a <b>Union File System</b>
    </Text>
  </Slide>
);

export default DockerFileSystem;