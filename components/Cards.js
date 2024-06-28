import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const data = [
  {
    id: "1",
    title: "Helping with",
    company: "Mustard Tree",
    description: "Manchester",
    imageUrl: require("../assets/images/generic.jpg"),
  },
  {
    id: "2",
    title: "Opportunity 2",
    company: "Charity B",
    description: "Quick job description",
    imageUrl: require("../assets/images/generic2.jpg"),
  },
  {
    id: "3",
    title: "Opportunity 3",
    company: "Charity C",
    description: "Quick job description",
    imageUrl: require("../assets/images/generic3.jpg"),
  },
];

export default function Cards() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListingCard
            title={item.title}
            company={item.company}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        )}
      />
    </View>
  );
}

function ListingCard({ title, company, description, imageUrl }) {
  return (
    <View style={styles.card}>
      <View>
        <Image source={imageUrl} style={styles.image}></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          {title} {company}
        </Text>
        <View style={styles.smallTextContainer}>
          <Text style={styles.description}>{description}</Text>
          <Text style={[styles.description, styles.left]}>24/06/24 16:00</Text>
        </View>
      </View>
      <View style={styles.hoursContainer}>
        <Text style={styles.hours}>5h</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
    // marginHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
    // textAlign: "center",
    // borderColor: "blue",
    // borderWidth: 2,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 25,
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    // marginRight: 10,
  },
  description: {
    flex: 1,
    fontSize: 14,
    color: "white",
    // textAlign: "center",
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    padding: 15,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    // borderColor: "blue",
    // borderWidth: 2,
  },
  hoursContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba( 0, 0, 0, 0.5)",
    // backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 15,
    borderRadius: 50,
  },
  hours: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  smallTextContainer: {
    width: "100%",
    flexDirection: "row",
    // justifyContent: "space-between",
    // borderColor: "red",
    // borderWidth: 2,
  },
  left: {
    textAlign: "right",
  },
});
