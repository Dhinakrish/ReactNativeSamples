import { useEffect, useRef, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import DrawerScreen from "./Drawer";

const App = () => {

    const drawerRef = useRef(null);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <DrawerScreen/>
        </GestureHandlerRootView>
    )
}

export default App;