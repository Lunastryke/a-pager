import React, { Fragment, useState } from 'react';
import Webpage from './components/Webpage';
import UrlForm from './components/UrlForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const App = () => {
  const [data, setData] = useState('');
  return (
    <Fragment>
      <UrlForm className="url_form" setData={setData} />
      {/* <button style={{textAlign: "center"}} >Its done</button> */}
      <Webpage className="loaded_page" data={data} />
    </Fragment>
  );
};

export default App;
