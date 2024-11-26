import { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { DrawerLayout } from "react-native-gesture-handler";

const DrawerScreen = () => {
    const drawerRef = useRef(null);
    return (
        <View style={{ flex: 1, justifyContent: 'center', }}>
            <DrawerLayout
                ref={drawerRef}
                drawerWidth={300}
                drawerBackgroundColor="#ddd"
                drawerPosition={DrawerLayout.positions.Left}
                drawerType="slide"
                renderNavigationView={() => {
                    return (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>I'm Drawer</Text>
                        </View>
                    )
                }}
            >
                <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{ padding: 10, backgroundColor: 'black', borderRadius: 10 }}
                        onPress={() => {
                            drawerRef.current.openDrawer()
                        }}>
                        <Text style = {{color: 'white'}}>Open Drawer</Text>
                    </TouchableOpacity>
                </View>
            </DrawerLayout>
        </View>
    )
}

export default DrawerScreen;