import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, TouchableOpacity,Image } from 'react-native'
import commonStyles from '../../styles/common';
import orderStyles from '../../styles/orders';

const Quotations = ({route, navigation}) => {

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        axios.get("https://backendhostings.herokuapp.com/order/AllOrderStatus").then((res) => {
            setQuotes(res.data.filter(quote => quote.creator === route.params.userID));
        }).catch((e) => {
            console.error(e);
            Alert.alert("Error", "Cannot get data!", [{text: "Ok"}], {cancelable: false});
        })
    },[])

  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', width:"200%" , marginLeft:"-50%", backgroundColor:"#E6880D"}}>
              <Image source ={require('../pic/aa.gif')}
        style={{width:"50%",height:"30%", borderRadius: 22,}}
    />
        <ScrollView style = {{display: 'flex', flexDirection: 'column', width: "40%", margin: 6}}>
        {
            quotes.map((quote, index) => (
                <View style = {orderStyles.orderCard1} key={quote + index}>
                    <Text style = {{fontWeight: '600', opacity: 0.6, textAlign: 'center' , fontSize:"20"}}>Order Details</Text>
                    <View style = {orderStyles.items}>
                        <View>
                            <Text style = {{marginVertical: 2}}>Order ID</Text>
                            <Text style = {{marginVertical: 2}}>Material</Text>
                            <Text style = {{marginVertical: 2}}>Quantity</Text>
                            <Text style = {{marginVertical: 2}}>Deadline</Text>
                            <Text style = {{marginVertical: 2}}>Description</Text>
                            <Text style = {{marginVertical: 2}}>Notes</Text>
                            <Text style = {{marginVertical: 2}}>Price</Text>
                        </View>
                        <View>
                            <View style = {orderStyles.orderID}>
                                <Text style = {{textAlign: 'center', color: "white"}}>{quote.OrderID}</Text>
                            </View>
                            <Text style = {{marginVertical: 2}}>{quote.Material}</Text>
                            <Text style = {{marginVertical: 2}}>{quote.QTY}</Text>
                            <Text style = {{marginVertical: 2}}>{quote.Deadline}</Text>
                            <Text style = {{marginVertical: 2}}>{quote.Description}</Text>
                            <Text style = {{marginVertical: 2}}>{quote.note}</Text>
                            <Text style = {{marginVertical: 2}}>Rs. {quote.Price}.00</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("NewInvoice", {
                        userID: route.params.userID,
                        userRole: route.params.userRole,
                    })} style = {commonStyles.button1}>
                        <Text style = {orderStyles.status}>Create Invoice</Text>
                    </TouchableOpacity>
                </View>
            ))
        }
        </ScrollView>
    </View>
  )
}

export default Quotations