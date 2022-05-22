import React, { Component } from 'react';
import { Button, Alert, TouchableOpacity, View, Text } from 'react-native';
import { Audio } from 'expo-av';

export default class App extends Component {
 async playSound(url) {
    try {
      await Audio.setIsEnabledAsync(true);
      var playbackObject = await Audio.Sound.createAsync(
        { uri: url },
        { shouldPlay: true }
      );
      // Your sound is playing!
    } catch (error) {
      console.log();
    }
  }

  render() {
    return (
        <Text style={{marginTop:50,color: 'white',
	textAlign: 'center', 
	fontWeight: 'bold',
	fontSize: 50,
	backgroundColor: 'green',width: 300,
  height: 550,
  /*Add the border radius for left right of top and bottom*/
   borderRadius: '15px',
 /*Add font as Times New Roman*/ 
 fontStyle:'times New Roman', 
    /*Add the shadowcolor */
    textShadowColor:'#072700',
    
  textShadowOffset:{width: 10, height: 10},
    textShadowRadius:8,
    }}>THE FUTURE BELONGS TO THOSE WHO BELIEVE IN THE BEAUTY OF THEIR DREAMS:)
  
   <View>
          <TouchableOpacity
            style={{
               width: 200,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'blue',
              borderWidth: 2,
              borderColor: 'white',
              marginTop:20
            }}
            onPress={() => {
              var url =
                'http://soundbible.com/mp3/labrador-barking-daniel_simon.mp3';
              this.playSound(url);
            }}>
            <Text> Sound </Text>
          </TouchableOpacity>
        </View>
</Text>
    );
  }
}


