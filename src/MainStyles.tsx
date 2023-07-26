import { StyleSheet } from "react-native";

export const Styles =StyleSheet.create({
    btnBlue: {
        width: 65,
        height: 72,
        borderRadius: 14,
        backgroundColor:'#678983',
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 82,
        height: 82,
        borderRadius: 14,
        backgroundColor:'#678983',
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        width: 92,
        height: 82,
        borderRadius: 14,
        backgroundColor:'#FFFFFF',
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 50,       
        backgroundColor:"#678983",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 35,
        color: '#FFFFFF',
    },
    smallTextDark: {
        fontSize: 35,
        color:'#000000',
    },
    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 10,
    },
    screenFirstNumber: {
        fontSize: 50,
        color:'black',
        fontWeight: '300',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 30,
        color: 'black',
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenWords: {
        fontSize: 25,
        color:'black',
        fontWeight: '500',
        alignSelf: "flex-end",
    },
});
