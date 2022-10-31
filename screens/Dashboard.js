import React, { useEffect } from "react";
import { View, Text, Button, TouchableOpacity, ScrollView ,Image} from "react-native";
import dashboardStyles from "../styles/dashboard";

const Dashboard = ({ route, navigation }) => {
  useEffect(() => {
    console.log(route.params);
    if (!!!route.params) {
      navigation.navigate("Login");
    }
  }, []);

  return (
    <View style={dashboardStyles.container}>
                     <Image
                       style={{width:"100%",height:"35%"}}
                        source={require('../screens/pic/we.png')} />
      <ScrollView>
        {route.params.userRole.toLocaleLowerCase() === "sitemanager" && (
          <>
            {/* Site Manager */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("NewOrder", {
                  userID: route.params.userID,
                  userRole: route.params.userRole,
                })
              }
              style={dashboardStyles.card}
            >
              <Text style={{ color: "white" , fontSize:"20px"}}>New Order</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AllOrders", {
                  userID: route.params.userID,
                  userRole: route.params.userRole,
                })
              }
              style={dashboardStyles.card}
            >
              <Text style={{ color: "white" ,fontSize:"20px"}}>All Orders</Text>
            </TouchableOpacity>
          </>
        )}

        {route.params.userRole.toLocaleLowerCase() === "supplier" && (
          <>
            {/* Supplier */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Quotes", {
                  userID: route.params.userID,
                  userRole: route.params.userRole,
                })
              }
              style={dashboardStyles.card}
            >
              <Text style={{ color: "white",fontSize:"20px" }}>Quotations</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AllInvoices", {
                  userID: route.params.userID,
                  userRole: route.params.userRole,
                })
              }
              style={dashboardStyles.card}
            >
              <Text style={{ color: "white" ,fontSize:"20px"}}>Invoices</Text>
            </TouchableOpacity>
            <TouchableOpacity style={dashboardStyles.card}>
              <Text style={{ color: "white" , fontSize:"20px" }}>Payment</Text>
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Delivery", {
              userID: route.params.userID,
              userRole: route.params.userRole,
            })
          }
          style={dashboardStyles.card}
        >
          <Text style={{ color: "white" ,fontSize:"20px"}}>Delivery</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
