import React from 'react';
import {
  Heading, Slide, Text, Appear
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/docker-minimal.png';


const DockerBuildHazards = (
  <Slide transition={['fade']} bgDarken={0.85} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Docker Build Hazards
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Appear>
      <Text textColor="tertiary">
        <b>Volumes:</b> Mounting volumes gives your application read / write access outside of the container
      </Text>
    </Appear>
    <Appear>
      <Text textColor="tertiary">
        <b>Latest:</b> Using the latest Docker image as a base can result in build suddenly breaking when a
        new major version of the image is released
      </Text>
    </Appear>
    <Appear>
      <Text textColor="tertiary">
        <b>External Services:</b> Running external services such as database migrations may result in build failures
        if the database container is not available during the build process
      </Text>
    </Appear>
  </Slide>
);

export default DockerBuildHazards;