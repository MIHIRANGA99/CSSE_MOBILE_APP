import { StyleSheet } from "react-native";
import Colors from "./Colors";

const orderStyles = StyleSheet.create({
  orderCard: {
    backgroundColor:"#FAE7CE",
    margin: 3,
    padding: 8,
    height:"25%",
    borderRadius: 22,
  },

  orderCard1: {
    backgroundColor:"#FAE7CE",
    margin: 2,
    width:"100%",
    padding: 9,
    height:"18%",
    borderRadius: 22,
  },

  items: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  orderID: {
    marginVertical: 2,
    color: "white",
    backgroundColor:"#2517E4",
    borderRadius: 12,
    padding: 4,
  },
  status: {
    marginVertical: 2,
    color: "white",
    textAlign: "center",
    fontSize:"20"
  },
  ok: {
    backgroundColor: "#43E417",
    borderRadius: 12,
    fontSize:"20",
    height:"14%"
    
  },
  declined: {
    backgroundColor: "#E21A1A",
    borderRadius: 12,

    height:"14%"
  },
  pending: {
    backgroundColor: "#997603",
    borderRadius: 10,
    height:"14%",

  }
});

export default orderStyles;
