import React, { FC } from 'react';
import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';

const App: FC = (): JSX.Element => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
