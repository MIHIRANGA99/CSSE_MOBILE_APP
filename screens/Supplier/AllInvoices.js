import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View ,Image} from 'react-native'
import commonStyles from '../../styles/common';
import orderStyles from '../../styles/orders';

const AllInvoices = ({ route, navigation }) => {

    const [invoices, setInvoices] = useState([{OrderID: "0001"}]);

    useEffect(() => {
        axios.get("https://backendhostings.herokuapp.com/Invoices/Allinvoices").then((res) => {
            setInvoices(res.data)
        }).catch((e) => {
            console.log(e)
        });
    })

    return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#E6880D" }}>

<Image source ={require('../pic/aqaq.png')}
        style={{width:"50%",height:"30%", borderRadius: 22,}}
    />

            <ScrollView style = {{display: 'flex', flexDirection: 'column'}}>
                {
                    invoices.map((invoice, index) => (
                        <View style = {orderStyles.orderCard3} key={invoice + index}>
                            <Text style = {{fontWeight: '600', opacity: 0.6, textAlign: 'center',fontSize:"20"}}>Order Details</Text>
                            <View style = {orderStyles.items}>
                                <View>
                                    <Text style = {{marginVertical: 2}}>Order ID</Text>
                                    <Text style = {{marginVertical: 2}}>Material</Text>
                                    <Text style = {{marginVertical: 2}}>Quantity</Text>
                                    <Text style = {{marginVertical: 2}}>Price</Text>
                                </View>
                                <View>
                                    <View style = {orderStyles.orderID}>
                                        <Text style = {{textAlign: 'center', color: "white"}}>{invoice.OrderID}</Text>
                                    </View>
                                    <Text style = {{marginVertical: 2}}>{invoice.Material}</Text>
                                    <Text style = {{marginVertical: 2}}>{invoice.qty}</Text>
                                    <Text style = {{marginVertical: 2}}>{invoice.Amount}</Text>
                                </View>
                            </View>
                            {/* <View style = {checkState(order.status.toLocaleLowerCase())}>
                                <Text style = {orderStyles.status}>{invoice.status}</Text>
                            </View> */}

                            <TouchableOpacity style = {commonStyles.button} onPress={() => navigation.navigate("NewDelivery", {
                                userID: route.params.userID,
                                userRole: route.params.userRole,
                                orderID: invoice.OrderID
                            })}>
                                <Text style = {{color: "white", paddingHorizontal: 4}}>Add Delivery</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
      )
}

export default AllInvoices