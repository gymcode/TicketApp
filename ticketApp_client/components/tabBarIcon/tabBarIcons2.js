import * as React from 'react';
import {  Entypo } from '@expo/vector-icons';

import Colors from '../../utils/colors';

export default function TabBarIcon2(props) {
  return (
    <Entypo
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}