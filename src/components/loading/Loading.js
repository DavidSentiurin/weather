import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const Loading = (props) => {
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader size={props.size}>Loading</Loader>
      </Dimmer>

      {(props.children) ? props.children : <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />}
    </Segment>
  )
}

export default Loading;
