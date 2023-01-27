import React from 'react';
import RenderConList from './RenderConList';
import EditConList from './EditConList';
function ConsList(props) {
  return (
    <>
      {
        props.edited ? <EditConList /> : <RenderConList />
      }
    </>
  )
}

export default ConsList