import { StyleSheet } from "react-native";
import Colors from "./Colors";

const dashboardStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        backgroundColor: Colors.primary,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#FF9720",
        padding: 40,
        marginTop:"9%",
        margin: 4,
       height:"20%",
        borderRadius: 12
    }
})

export default dashboardStyles