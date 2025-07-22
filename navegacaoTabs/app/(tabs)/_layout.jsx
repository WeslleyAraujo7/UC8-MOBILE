import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';


export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#e94560" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        tabBarActiveTintColor: "red",
        tabBarActiveBackgroundColor:"#FFC2BF",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon:({color}) => (<Entypo name="home" size={24} color="black" />),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon:({color}) => (<Ionicons name="settings" size={24} color="black" />) 
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon:({color}) => (<FontAwesome name="search" size={24} color="black" />)
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          tabBarIcon:({color}) => (<FontAwesome name="user" size={24} color="black" />)
        }}
      />

       <Tabs.Screen
        name="products/index"
        options={{
          headerShown: false,
          title: "Products",
          tabBarIcon:({color}) => (<Entypo name="shopping-bag" size={24} color="black" />)
        }}
      />
    </Tabs>
  );
}
