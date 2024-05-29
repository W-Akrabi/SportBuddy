import { TouchableOpacity, Text } from 'react-native'
import { bottomOffset } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress,
     containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    style={{ bottom: 260 }}
    className={` bg-grey absolute
    rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? opacity-50 : ''}`}
    disabled={isLoading}
    >
      <Text className={`text-white font-psemibold 
      text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton