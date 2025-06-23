import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";

export default function MainNavigation() {

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
