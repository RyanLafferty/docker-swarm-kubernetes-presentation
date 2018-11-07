import React from 'react';
import {
  Heading, Slide, Text
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/docker-minimal.png';


const DockerBuildProcess = (
  <Slide transition={['fade']} bgDarken={0.85} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Docker Build Process
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Text textColor="tertiary">
      Dockerfiles are scripts that enable us to execute a set of instructions and arguments in order. They start from a defined
      base image which is built off of using the steps listed in the Dockerfile. Each successful step is cached in case an image is rebuilt.
      Cached steps are only used if the previous steps and current step have no changes present.
    </Text>
  </Slide>
);

export default DockerBuildProcess;