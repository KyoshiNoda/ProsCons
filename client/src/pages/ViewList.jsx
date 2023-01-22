import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ViewItem from '../components/ViewList/ViewItem';
import Card from '../components/Card';
function ViewList() {
  const [viewList, setViewList] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3001/api/list')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [viewList]);
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