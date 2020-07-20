import * as React from 'react';
import {  FontAwesome } from '@expo/vector-icons';

import Colors from '../../utils/colors';

export default function TabBarIcon2(props) {
  return (
    <FontAwesome
      name={props.name}
      size={21}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}