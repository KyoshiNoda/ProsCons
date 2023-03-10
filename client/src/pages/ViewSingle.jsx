import React from 'react'
import Card from '../components/Card';
import ConBox from '../components/ViewSingle/Cons/ConBox';
import ProBox from '../components/ViewSingle/Pros/ProBox';
import ViewTitleContainer from '../components/ViewSingle/ViewTitleContainer';
import DeleteSingle from '../components/ViewSingle/DeleteSingle';
function ViewSingle() {
  return (
    <Card>
      <div className="flex flex-col h-5/6 w-5/6 bg-slate-400 rounded items-center gap-y-5">
      <div className="flex items-center gap-4 text-sm">
        <ViewTitleContainer />
        </div>
        <div className="flex h-3/4 w-3/4">
          <ProBox />
          <ConBox />
        </div>
        <DeleteSingle />
      </div>
    </Card>
  );
}

export default ViewSingle;