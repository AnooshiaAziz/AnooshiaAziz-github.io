import { useContext } from "react";
import { TouchableOpacity,Text } from "react-native";
import {Styles} from './MainStyles';

interface ButtonProps{
    onPress:()=>void;
    title:string;
    isBlue?:boolean;
}


export default function Button({title,onPress,isBlue}:ButtonProps){
    return (
        <TouchableOpacity 
            style={ 
                 isBlue ? Styles.btnBlue : Styles.btnLight 
            } 
            onPress={onPress}>
            <Text 
               style={
                   isBlue
                   ? Styles.smallTextLight
                   : Styles.smallTextDark 
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}