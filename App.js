import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Preferences from './screens/Preferences';
import Menu from './screens/Menu';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
      <NavigationContainer>
       <Drawer.Navigator>
       <Drawer.Screen name="Menu" component={Menu} />
        <Drawer.Screen name="Preference" component={Preferences} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}