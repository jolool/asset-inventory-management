import {Stack} from "expo-router";
import React from 'react';
import './globals.css';
import {StatusBar} from 'expo-status-bar';

export default function RoootLayout(){
  return(
      <React.Fragment>
        <StatusBar style="auto"/>
        <Stack/>
      </React.Fragment>
  );
}