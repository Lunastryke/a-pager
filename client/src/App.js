import React, { Fragment, useState } from 'react';
import Webpage from './components/Webpage';
import UrlForm from './components/UrlForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [data, setData] = useState('');
  return (
    <Fragment>
      <UrlForm setData={setData} />
      <Webpage data={data} />
    </Fragment>
  );
};

export default App;
