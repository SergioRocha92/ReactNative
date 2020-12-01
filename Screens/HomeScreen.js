import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          img: '#',
        }
      }
      
     
    
      fetchJale = async () => {
      
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
        let data = await res.json()
    
        
        console.log(data.name);
        console.log(data.sprites.front_default)
        this.setState({
          img: data.sprites.front_default
        })
      }
      
    
      handleName = event => {
        this.setState({
          name: event.target.value
        })
      }
      
    
      handleSubmit = event =>{
        var jeje = this.state.name;
        console.log(jeje)
        alert(jeje)
        this.fetchJale()
        
        this.setState({
          name: '',
        })
        event.preventDefault()
      }
      
    
    
    
    
    
    
    /* render(){
        return(
            <View style={styles.container}>
                <Text>This is the home screen</Text>
                <StatusBar style="auto" />
            </View>
        );
    }*/ 
    

   render() {
    return (
    <div className="card text-center">
      <div className="card-header">
        Pokedex
      </div>
      <div className="card-body">
    <form onSubmit={this.handleSubmit}>    
        <label>Ingrese el pokemon</label><br/>
        <input 
            type="text"
            placeholder="nombre"
            value={this.state.name}
            onChange={this.handleName}
        /><br/><br/>
        <button type="submit" className="btn btn-primary">submit</button>
    </form>
    <img src={this.state.img}/>
      </div>
      
    </div>
    );
} 
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });