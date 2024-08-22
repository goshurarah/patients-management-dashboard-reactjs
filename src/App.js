import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar'
import Patient from './components/patient/Patient'
import PatientInfo from './components/patientInfo/PatientInfo'
import DiagnosisHis from './components/diagnosisHis/DiagnosisHis'
import axios from 'axios'
import Labs from './components/labResult/Labs';

function App() {
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const username = 'coalition';
      const password = 'skills-test';
      const encodedCredentials = window.btoa(`${username}:${password}`);

      try {
        const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
          headers: {
            'Authorization': `Basic ${encodedCredentials}`,
          },
        });
        const filteredData = response.data.find(item => item.name === 'Jessica Taylor');
        setData(filteredData);
        setAllData(response.data)
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log('data = ', data)
  return (
    <>
      <Navbar />
      <div className='row'>
        <div className='col-3'>
          <Patient data={allData} />
        </div>
        <div className='col-6'>
          <DiagnosisHis DiagnosisData={data} />
        </div>
        <div className='col-3'>
          <PatientInfo data={data} />
          <Labs data={data} />
        </div>
      </div>
    </>
  )
}

export default App