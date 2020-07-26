import React from 'react';
import PaperOnboarding from '@gorhom/paper-onboarding';


const data  = [
    {
      title:'News',
      description: 'Latest news in the Ghana Premier League',
      color: '#698FB8',
  
    },
    {
      title: 'Ticket',
      description: 'Easily purchase tickets',
      color: '#6CB2B8',
   
    },
    {
      title: 'Updates',
      description: 'Updates on upcoming matches',
      color: '#9D8FBF',
    
    },
  ]

export default function Onboarding({navigation}){

    const handleBtn = () => {
        navigation.navigate('Login')
    }
    return(
     <PaperOnboarding 
      data={data}
      indicatorSize={25}
      closeButtonText='Next'
      onCloseButtonPress={handleBtn}
    />
    )
}