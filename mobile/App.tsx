import React from 'react';
import {useFonts} from 'expo-font'
import {Nunito_700Bold, Nunito_600SemiBold, Nunito_800ExtraBold} from '@expo-google-fonts/nunito'

import Routes from './src/routes'

export default function App() {

  const [fontsLoaded] = useFonts({
    nunitoBold: Nunito_700Bold, 
    nunitoSemiBold: Nunito_600SemiBold, 
    nunitoExtraBold: Nunito_800ExtraBold
  })

  if (!fontsLoaded) {
    return null;
  }
  
  return(
    <Routes />
  )
}