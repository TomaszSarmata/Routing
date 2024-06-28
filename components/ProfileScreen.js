import { Text, View } from "react-native";

export default function ProfileScreen({ navigation, route }) {
  const { name } = route.params || { name: "Guest" };
  return (
    <View>
      <Text>This is {name}'s profile</Text>
    </View>
  );
}
