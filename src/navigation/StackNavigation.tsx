import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import { MovieHome, ViewMovie } from "../screens";


const Stack = createStackNavigator();

export default function StackNavigation() {
   
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routes.MOVIE_SCREEN} component={MovieHome} />
      <Stack.Screen name={routes.VIEW_MOVIE_SCREEN} component={ViewMovie} />
    </Stack.Navigator>
  );
}
