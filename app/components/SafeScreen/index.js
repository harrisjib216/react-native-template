/**
 * Import from react native
*/
import React from "react";
import {
    SafeAreaView
} from "react-native";


/**
 * Present safe view for each screen
*/
export default function SafeScreen(props) {
    return (
        <SafeAreaView>
            {props.children}
        </SafeAreaView>
    );
};
