import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo';

const FormField = ({title, value, handleChangeForm, otherStyles, keyboardType, placeholder, ...props}) => {

    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-p-medium">{title}</Text>
      <View className='border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-xl flex-row items-center'>
        <TextInput 
            className='flex-1 text-white font-psemibold text-base'
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeForm}
            secureTextEntry={title === 'Parola' && !showPassword}
        />
        {title === 'Parola' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon name={!showPassword ? 'eye' : 'eye-with-line'} size={20} color='#ffffff'/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField