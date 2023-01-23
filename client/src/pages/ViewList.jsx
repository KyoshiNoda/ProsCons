import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ViewItem from '../components/ViewList/ViewItem';
import Card from '../components/Card';
function ViewList() {
  const [viewList, setViewList] = useState([]);
  Axios.get('http://localhost:3001/api/list')
    .then((res) => {
      setViewList(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  return (
    <Card>
      <div className="flex justify-center items-center gap-11 flex-wrap">
        {
          viewList.map((data) => {
            return <ViewItem name={data.name} user_id={data.user_id} />
          })
        }
      </div>
    </Card>

  );
}

export default ViewList;