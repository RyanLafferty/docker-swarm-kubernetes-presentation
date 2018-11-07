import React from 'react';
import {
  Appear, Heading, ListItem, List, Slide
} from 'spectacle';

import modular from './../../res/img/DockerPresentation/modular.png';
        

const ContainerObjectives = (
  <Slide  transition={["slide"]} bgDarken={0.85} bgImage={modular}>
    <Heading caps fit textColor="tertiary">
      Container Objectives
    </Heading>
    <List>
      <Appear>
        <ListItem textColor="primary">
          <b>Standard:</b> They should be portable
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="primary">
          <b>Light Weight:</b> They should share the operating system kernel
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="primary">
          <b>Secure:</b> Applications should be isolated within the container resulting in a safer development environment
          for the host machine
        </ListItem>
      </Appear>
    </List>
  </Slide>
);
        
export default ContainerObjectives;