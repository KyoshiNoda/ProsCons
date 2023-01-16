import React from 'react'
import ViewItem from '../components/ViewList/ViewItem';
import Card from '../components/Card';
function ViewList() {

  return (
    <Card>
      <div className="flex justify-center items-center gap-11 flex-wrap">
        <ViewItem name="Apple" />
        <ViewItem name="Netflix" />
        <ViewItem name="SBU" />
        <ViewItem name="Applied Visions" />
      </div>
    </Card>

  );
}

export default ViewList;