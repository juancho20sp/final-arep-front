import React, { useState } from 'react';
import './Main.css';

// Components
import { Form, Loader, Table } from '../../components';
import put from '../../utils/http/putRequest';

const Main = () => {
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const [repoURL, setRepoURL] = useState('');
  const [tableData, setTableData] = useState({});

  const fetchData = () => {
    console.log('fetching data');

    setIsLoading(true);
    setShowForm(false);

    try {
      /* alert(repoURL); */
      const data = put('file', { "url": repoURL });
      
      data.then( response =>{
        /* alert(JSON.stringify(response)); */
        setTableData(response);
        setShowTable(true); 
      }).catch(()=>{
        setTableData({
          comoEstaAhora1: {
            title: 'Mi título 1',
            value: 'My value 1',
          },
          comoEstaAhora2: {
            title: 'Mi título 2',
            value: 'My value 2',
          },
          comoEstaAhora3: {
            title: 'Mi título 3',
            value: 'My value 3',
          },
          comoEstaAhora4: {
            title: 'Mi título 4',
            value: 'My value 4',
          },
        });
      });
      
    } catch (err) {
      console.error(err);
      
    } finally {
      setIsLoading(false);
    }

    
  };

  return (
    <div className='main-container'>
      {showForm && <Form fetchData={fetchData} setRepoURL={setRepoURL} />}
      {isLoading && <Loader />}
      {showTable && <Table tableData={tableData} />}
    </div>
  );
};

export default Main;
