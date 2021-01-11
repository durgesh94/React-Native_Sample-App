import { StyleSheet } from "react-native";

export const SharedStyles = (theme: any) => (
    StyleSheet.create({
        button: {
            backgroundColor: theme.orangeButtonBackgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            marginTop: 10,
            marginHorizontal: 10,
            width: "100%",
            alignSelf: "center",
            padding: 10,
        },
        btnText: {
            fontSize: 16,
            color: theme.whiteButtonTextColor
        },
    })
)