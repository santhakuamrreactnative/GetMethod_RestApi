// GET Method Working Fine ( if you have some doubt please go to demoseven project to check get and post method)

//step-1
import React, { Component } from 'react'
import { 
  StyleSheet, 
  FlatList, 
  View, 
  Text, 
  Image, 
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid
} from 'react-native'

//step-2
export default class HttpExample extends Component {

  //Normal FlatList Formatone

  // render() {
  //   return(
  //     <View>
  //     <FlatList
  //     data={[{ key: 'a'}, { key: 'b'}]}
  //     renderItem={({ item }) => <Text>{item.key}</Text>}
  //     />
  //     </View>
  //     );
  // }

  //Normal FlatList Formattwo

  // render() {
  //   return(
  //     <View style={styles.container}>
  //     <FlatList
  //     data={[{ key: 'a'}, { key: 'b'}]}
  //     renderItem={({ item }) => <Text style={styles.TextDesign}>{item.key}</Text>}
  //     />
  //     </View>
  //     );
  // }

  // step-3
  constructor() {
    super()
    this.state = {
      dataSource: [],
      isLoading: true
    }
  }

  //step- 4
  render() {
    return(
      this.state.isLoading
      ? 
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#330066" animating />
      </View>
      :
      <View style={styles.container}>
      <FlatList
      data={this.state.dataSource}
      renderItem={this.renderItem}
      ItemSeparatorComponent={this.renderSeparator}
      
      />
      </View>
      );
  }


  //step-6
  componentDidMount() {
    const url = 'https://reqres.in/api/users?page=2'
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: responseJson.data,
        isLoading: false
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  //step-7
  renderItem = ({ item }) => {
    return(
      <TouchableOpacity style={{flex: 1, flexDirection: 'row', }} 
      onPress ={() =>
        ToastAndroid.show(item.first_name,ToastAndroid.SHORT)
      }>

        <View style={{height: 120, weight: 100, backgroundColor:'blue'}}>
      <Image style={styles.ImageDesign}
        source={{ uri: item.avatar}}>
      </Image>
      </View>
      <View style={styles.paddingforItem}>

      <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={styles.TextDesign1}>
         ID :
        </Text>
      <Text style={styles.TextDesign1}>
          {item.first_name}
        </Text>
        </View>
        
        <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={styles.TextDesign3}>
          FirstName :
        </Text>
        <Text style={styles.TextDesign3}>
          {item.first_name}
        </Text>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={styles.TextDesign4}>
         LastName :
        </Text>
        <Text style={styles.TextDesign4}>
          {item.last_name}
        </Text>
        </View>
        
        <Text style={styles.TextDesign2}>
          {item.email}
        </Text>
      </View>
    </TouchableOpacity>
    );

  }

  //step-8
  renderSeparator = () =>{
    return(
      <View style={{height: 1, width: '100%', backgroundColor: 'black', marginLeft: 120}}>
      </View>
    );
  }


  
  }
  


//step-5
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'white'
},
TextDesign1: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'red'
},
TextDesign2: {
  fontFamily: 'Open Sans',
  fontSize: 20,
  fontWeight: 'bold',
  color: 'green',
  marginBottom: 10
},
TextDesign3: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'blue'
},
TextDesign4: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'black'
},
paddingforItem:{
  margin: 10
},
ImageDesign: {
  width: 100, 
  height:100,
  margin: 10,
}
});

