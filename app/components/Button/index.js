/**
 * Import from react native
*/
import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
} from "react-native";


/**
 * Components
*/
import { } from "../index";


/**
 * Extra modules
*/
import _ from "lodash";


/**
 * Button
*/
export default function Button(props) {
    const styles = StyleSheet.create({
        cont: {
            position: "relative"
        },
    });

    return (
        <TouchableOpacity style={[styles.cont, props.style]}>

        </TouchableOpacity>
    );
};
