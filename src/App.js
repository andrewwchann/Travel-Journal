import React from 'react';
import data from './data.js'
import Header from './components/Header.js';
import Body from './components/Body.js';
import './App.css';

export default function App() {
  const logs = data.map(item => {
    return (
      <Body 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Header />
      <section className='traveled-list'>
        {logs}
      </section>
    </div>
  );
}
