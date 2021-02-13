import { StyleSheet } from "react-native";

export const drawerContentStyles = (themes: any) => (
    StyleSheet.create({
        image: {
            resizeMode: 'cover',
            height: 100,
            width: 100,
            borderRadius: 100
        },
        txtUser: {
            fontSize: 20,
            color: themes.orangeActiveTabTextColor,
            textTransform: 'uppercase'
        },
        button: {
            flexDirection: "row",
            marginTop: 10,
            paddingLeft: 25,
            padding: 10,
            borderBottomColor: "grey",
            borderBottomWidth: 0.5
        },
        btnText: {
            color: themes.orangeActiveTabTextColor,
            marginLeft: 10,
            marginTop: 3,
            fontSize: 16
        },
        btnLogout: { flexDirection: "row", paddingLeft: 25, padding: 10 },
        txtLogout: { color: themes.orangeActiveTabTextColor, marginLeft: 10, marginTop: 0, fontSize: 16 }
    })
)