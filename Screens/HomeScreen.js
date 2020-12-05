import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export  class HomeScreen extends Component {

constructor(props){
    super(props);

    this.state = {
        loading: false,
        pokemon: [],
        url: 'https://pokeapi.co/api/v2/pokemon/'

    }

}

componentDidMount(){
    this.getPokemon();
}
    getPokemon = () => {

        this.setState({ loading:true})

        fetch(this.state.url)
        .then(res => res.json() )
        .then( res => {

            this.setState({
                pokemon : res.results,
                url: res.next,
                loading: false

            })

        })

    };



    render(){
        if(this.state.loading){

            return(
                <View style={styles.container}>
                    <Text>Descargando Pokemon</Text>
                    <StatusBar style="auto" />
                </View>
            );

        }


        return(
            <View style={{flex: 1, paddingTop:50, paddingLeft:5}}>
                <Text>Pokemon</Text>

                <Image
          style={styles.tinyLogo}
          source={{uri: 'https://davidquevedo.neocities.org/imagenes/PokeLogo2.png'}}
        />

                
                
                <FlatList
                data={this.state.pokemon}
                renderItem={
                    ({item}) => <Text> { item.name } </Text>
                    
            
                }
                keyExtractor={(item, index) => index.toString()  }

                
                />
               
            </View>
        );
        
    }
    
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  }
  
  ); 
