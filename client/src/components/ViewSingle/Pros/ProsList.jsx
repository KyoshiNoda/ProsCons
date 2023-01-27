import React, { useState } from 'react'
import RenderProList from './RenderProList';
import EditProList from './EditProList';
function ProsList(props) {
  return (
    <>
      {
        props.edited ? <EditProList /> : <RenderProList />
      }
    </>
  );
}

export default ProsList