import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cartContainer: {
    borderColor: "#ddd",
    borderWidth: 2,
    marginBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor:'#ededed'
  },
  descBody:{
    padding:10
  },
  image: {
    height: 200,
    marginBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  summary: {
    fontSize: 14,
    color: "#000",
    marginBottom: 7,
  },
  timeBody: {
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
   justifyContent:'flex-end'

  },
  timeTitle:{
    fontSize: 12,
    color: "gray",
    marginRight:5
  },
  time:{
    fontWeight:'bold',
    color: "#484848",
  }
});
