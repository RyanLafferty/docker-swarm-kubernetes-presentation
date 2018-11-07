import React from 'react';
import {
  Appear, Heading, ListItem, List, Slide
} from 'spectacle';

import modular from './../../res/img/DockerPresentation/modular.png';


const ContainerOrchestrationObjectives = (
  <Slide  transition={["slide"]} bgDarken={0.85} bgImage={modular}>
    <Heading caps fit textColor="tertiary">
      Container Orchestration Objectives
    </Heading>
    <List>
      <Appear>
        <ListItem textColor="primary">
          <b>Deployment</b> 
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="primary">
          <b>Networking</b>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="primary">
          <b>Scheduling</b>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem textColor="primary">
          <b>Scaling</b>
        </ListItem>
      </Appear>
    </List>
  </Slide>
);
        
export default ContainerOrchestrationObjectives;