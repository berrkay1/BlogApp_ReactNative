import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalProvider } from "./src/context/GlobalState";
import CartListPage from "./src/pages/CartList/CartListPage";
import CartDetailPage from "./src/pages/CartDetail/CartDetailPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: "Lena Blog",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "#000" },
              headerTintColor: "#fff",
            }}
            name="CartListPage"
            component={CartListPage}
          />
          <Stack.Screen
          options={{
            title: "Detail",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#000" },
            headerTintColor: "#fff",
          }}
          name="CartDetailPage" component={CartDetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}
