import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

export default class CustomerList extends Component {

    constructor(props){
        super(props);
        this.state={
            cust: []
        }
    }

    componentDidMount(){
        fetch("http://172.16.9.64/app/customerlist.php")
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                cust:responseJson
            });
        })
        .catch((e)=>{console.log(e)});
    }
    render(){
        return (
            <FlatList
            data={this.state.cust}
            renderItem={({item}) =>
                <View style={styles.listContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{uri:'http://172.16.9.64/app/'+item.ASSET}} />
                    </View>
                    <View style={styles.contactContainer}>
                        <Text style={styles.key}>{item.key}</Text>
                        <Text>{item.NAME}</Text>
                    </View>
                </View>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        borderBottomWidth: 1,
        padding: 15,
        flexDirection: 'row'
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    contactContainer: {
        flex: 2
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#BDBDBD'
    },
    key: {
        color: '#c0392b'
    }

})