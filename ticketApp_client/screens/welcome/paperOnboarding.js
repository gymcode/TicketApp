import React from 'react';
import {View, Text} from 'react-native'
// import PaperOnboarding from '@gorhom/paper-onboarding';
import PaperOnboarding from '@gorhom/paper-onboarding'


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

  const PaperOnboard = ()=>{
      //function declaration
      function handlebtn(){
          navigation.navigate('Login')
      }

      return(
        <PaperOnboarding 
              data={data}
              indicatorSize={25}
              closeButtonText='Next'
              onCloseButtonPress={handlebtn}
            />
      )
  }

  export default PaperOnboard
