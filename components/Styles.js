import { Dimensions, StyleSheet } from "react-native";

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    color: '#333333',
    fontSize: 18, 
    fontWeight: 'bold',
    margin: 10
  },
  footer: {
    backgroundColor: "#333333"
  },
  wrapper: {
    borderRadius: 0,
    marginBottom: 5,
    backgroundColor: "#ffffff"
  },
  card: {
    margin:  0,
    padding: 0
  },
  fullWidthImage: {
    flex: 1,
    resizeMode: "cover",
    width: win.width,
    height: 220
  }
});

export default styles;
