import React from "react";
import { Button, Pressable, Text, TouchableOpacity, View } from "react-native";
import buttonsJson = require('../assets/buttons_landscape.json');

const TouchableCalculatorLandscape = (props: TCProps): JSX.Element => {

    return(
        <TouchableOpacity style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#454545',
            flexWrap: 'wrap',
            alignContent: 'flex-end',
            height: '80%',
            
        }}
        disabled={true}>
        {
            buttonsJson.buttons.map((arr, index) => (
                <View style={{

                    width: '100%',
                    height: '20%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    {arr.map((btn, index) => (
                        <Pressable
                            style={{
                                backgroundColor: btn.backgroundColor,
                                width: btn.flex === 1 ? '10%' : '20%',
                                borderColor: '#454545',
                                borderWidth: 1,
                            }}
                            onPress={() => (props.func(btn.title))}
                            disabled={btn.disabled}
                            key={index}>
                            <Text
                                style={{
                                    textAlign:'center',
                                    fontWeight: '800',
                                    fontSize: 16,
                                    paddingTop: 16,
                                    color: '#ffffff'
                                }}>{btn.title}</Text>
                        </Pressable>
                    ))}
                </View>
                
            ))
        }
        </TouchableOpacity>
    )
}

export default TouchableCalculatorLandscape;

interface TCProps {
    func(input: String): void;
}