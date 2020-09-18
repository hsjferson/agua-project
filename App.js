import React, { Component } from 'react';
import { StyleSheet, Text, View,Image, TextInput, VirtualizedList, TextComponent, ImageBackgroundComponent, ImageBackground, ColorPropType, Button } from 'react-native';
import { render } from 'react-dom';

 //Projeto beber agua

export default class primeroExpo extends Component {

  constructor (props) {
    super (props);
    this.state ={consumido:0, status: 'Ruim',pct:0};


    this.addCopo =this.addCopo.bind(this);
  }
  atualizar() {
    let s =this.state;
    s.pct = ((s.consumido/2000)*100);

    if(s.pct >=100) {
      s.status ="Bom "  ;
    }else {
      s.status ="Ruim";
    } 
    this.setState(s);
  } 
  addCopo() {
    let s = this.state;
    s.consumido += 200;
     
    this.setState(s);
    this.atualizar();

  }
  
  render() {
   
    return (
      // Usando props
        <View style={ styles.body}> 
         
            <ImageBackground source = {require('./fundo1.png')}
              style = {styles.bgimage } >
                <View style = {styles.areaLogo}>
                 
                </View>
                <View style = {styles.infoArea}>
                  <View style ={styles.area}>
                      <Text style ={styles.areaTitulo}>Quantidade</Text>
                      <Text style ={styles.areaDado}>2000ml</Text>
                  </View>
                  <View style ={styles.area}>
                      <Text style ={styles.areaTitulo}>Consumo</Text>
                      <Text style ={styles.areaDado}>{this.state.consumido}ml</Text>
                  </View>
                  <View style ={styles.area}>
                      <Text style ={styles.areaTitulo}>Status</Text>
                      <Text style ={styles.areaDado}>{this.state.status}</Text>
                  </View>
              
                </View>
                <View style = {styles.pctArea}>
                     <Text style = {styles.pctText}>{this.state.consumido}% </Text>
                </View> 

                <View style = {styles.btnArea}> 
                     <Button title="Beber 200ml" onPress={this.addCopo}> </Button>    
                </View> 
                
              
                
            </ImageBackground>  
          </View>    
          
        
    );
  }
}
 
const styles = StyleSheet.create({
  body: { 
    backgroundColor:'#eee',
    flex:1, 
    paddingTop:30
  },
  bgimage: { 
    flex:1, 
    backgroundColor:'#909090',
    width:null
     
  },
  infoArea: {
    flex:1,
    flexDirection:'row',
    marginTop:70, 
  },   
  area: {
    flex:1,
    alignItems:"center"
  },
  areaTitulo: {
    fontSize:19,
    fontWeight:'800',
    color:'#3cb3eb', 
  },
  areaDado: {
    fontSize:15,
    fontWeight:'600',
    color:'#909090'
  },
  pctArea: {
    marginTop:100,
    textAlign:'center',  
  },
  pctText: {
    fontSize:60,
    marginBottom:100,
    color:'#fff',
    textAlign:'center'
  },
  btnArea: {
    margin:100,
    alignItems:"center",
    backgroundColor:'#ccc',
    padding:15,
    color:'#8fb1eb',
    borderRadius:5
  },
  button: {
    backgroundColor:'#CCC',
    color:'#fff', 
   },
   areaLogo : {
     height:50,
     width:400,
     alignItems:"center",
     alignContent:"center", 
   },
   status: {
     color:'#991d1d'
   }

})  
   
