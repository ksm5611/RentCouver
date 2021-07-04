import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Navigation from './components/Navigation';
import User from './components/User/index';

export default function App() {
  const items = [
    { name: 'home', label: 'Home' },
    {
      name: 'billing',
      label: 'Billing',
      items: [
        { name: 'statements', label: 'Statements' },
        { name: 'reports', label: 'Reports' },
      ],
    },
    {
      name: 'settings',
      label: 'Settings',
      items: [{ name: 'profile', label: 'Profile' }],
    },
  ]
  

  return (
    <>
      <Navigation />
      <User />
    </>
  );
}


