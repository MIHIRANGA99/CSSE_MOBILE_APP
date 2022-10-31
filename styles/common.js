import { StyleSheet } from "react-native";
import Colors from "./Colors";

const commonStyles = StyleSheet.create({
    button: {
        backgroundColor: "#061672",
        paddingHorizontal: 4,
        paddingVertical: 10,
        marginTop: 22,
        borderRadius: 50,
        marginHorizontal: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    button1: {
        backgroundColor: "#1D0FE2",
        paddingHorizontal: 4,
        paddingVertical: 10,
        marginTop: 12,
        borderRadius: 50,
        marginHorizontal: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    textView: {
        backgroundColor: "#EBE0CA",
        marginVertical: 4,
        
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginBottom:"6%",
        borderRadius: 12,
        fontSize: 16,
        color: Colors.primary,
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 19
    }
})

export default commonStyles;