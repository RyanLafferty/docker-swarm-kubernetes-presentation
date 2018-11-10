import React from 'react';
import {
  Heading, Slide, Text, Appear
} from 'spectacle';

import docker from './../../res/img/DockerPresentation/union-file-system-simple.jpg';


const UnionFileSystem = (
  <Slide transition={['fade']} bgDarken={0.85} bgImage={docker}>
    <Heading size={2} caps fit textColor="primary" textFont="primary">
      Union File System
    </Heading>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Appear>
      <Text textColor="tertiary">
        This kind of file system allows each container to be comprised of layers
      </Text>
    </Appear>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Appear>
      <Text textColor="tertiary">
        On the bottom we have the read only image layers, these would typically be your base images (Node, Ubuntu, etc)
      </Text>
    </Appear>
    <Text style={{ visibility: 'hidden' }}>
      ...
    </Text>
    <Appear>
      <Text textColor="tertiary">
        On the top we have read-write layers, one example would be source code either copied in or mounted in a volume
      </Text>
    </Appear>
  </Slide>
);

export default UnionFileSystem;