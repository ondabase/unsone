import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "lightgreen",
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
})

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Welcome to Unsone</Text>
      </View>
    </View>
  )
}
