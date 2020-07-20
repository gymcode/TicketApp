import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../utils/colors';

export default function TabBarIcon4(props) {
  return (
    <AntDesign
      name={props.name}
      size={25}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}