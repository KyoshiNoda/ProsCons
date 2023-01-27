import React, { useState } from 'react'
import Axios from 'axios';
import { useParams } from 'react-router';
import ProItem from './ProItem';
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