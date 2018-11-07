import React, { Component } from 'react';
import createTheme from "spectacle/lib/themes/default";
import { Deck } from 'spectacle';

import Intro from './../../slides/DockerPresentation/Intro';
import WhatIsDocker from './../../slides/DockerPresentation/WhatIsDocker';
import ConfusedContainer from '../../slides/DockerPresentation/ConfusedContainer';
import WhatIsAContainer from './../../slides/DockerPresentation/WhatIsAContainer';
import ContainerObjectives from './../../slides/DockerPresentation/ContainerObjectives';
import DockerFileSystem from './../../slides/DockerPresentation/DockerFileSystem';
import UnionFileSystem from './../../slides/DockerPresentation/UnionFileSystem';
import OutsideUnionFileSystem from './../../slides/DockerPresentation/OutsideUnionFileSystem';
import DockerBuildProcess from './../../slides/DockerPresentation/DockerBuildProcess';
import DockerBuildOptimizations from './../../slides/DockerPresentation/DockerBuildOptimizations';
import DockerBuildHazards from './../../slides/DockerPresentation/DockerBuildHazards';
import ContainerNetworking from './../../slides/DockerPresentation/ContainerNetworking';
import ContainerOrchestration from './../../slides/DockerPresentation/ContainerOrchestration';
import ContainerOrchestrationObjectives from './../../slides/DockerPresentation/ContainerOrchestrationObjectives';
import SwarmIntro from './../../slides/DockerPresentation/SwarmIntro';
import WhatIsSwarm from './../../slides/DockerPresentation/WhatIsSwarm';
import WhatIsSwarmWorker from './../../slides/DockerPresentation/WhatIsSwarmWorker';
import HowToUseTheSwarm from './../../slides/DockerPresentation/HowToUseTheSwarm';
import SwarmExample from './../../slides/DockerPresentation/SwarmExample';
import KubernetesIntro from './../../slides/DockerPresentation/KubernetesIntro';
import WhatIsKubernetes from './../../slides/DockerPresentation/WhatIsKubernetes';
import HowToUseKubernetes from './../../slides/DockerPresentation/HowToUseKubernetes';
import KubernetesExample from './../../slides/DockerPresentation/KubernetesExample';


const theme = createTheme({
  primary: '#27BDCE',
});


class Main extends Component {
  render() {
    return (
        <Deck theme={theme} transition={['zoom', 'slide', 'fade']} transitionDuration={500}>
          {Intro}
          {WhatIsDocker}
          {ConfusedContainer}
          {WhatIsAContainer}
          {ContainerObjectives}
          {DockerFileSystem}
          {UnionFileSystem}
          {OutsideUnionFileSystem}
          {DockerBuildProcess}
          {DockerBuildOptimizations}
          {DockerBuildHazards}
          {ContainerNetworking}
          {ContainerOrchestration}
          {ContainerOrchestrationObjectives}
          {SwarmIntro}
          {WhatIsSwarm}
          {WhatIsSwarmWorker}
          {HowToUseTheSwarm}
          {SwarmExample}
          {KubernetesIntro}
          {WhatIsKubernetes}
          {HowToUseKubernetes}
          {KubernetesExample}
        </Deck>
    );
  }
}

export default Main;