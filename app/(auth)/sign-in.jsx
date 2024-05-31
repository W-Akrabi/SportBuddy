import { View, Text, ScrollView, Image} from 'react-native'
import {React, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormFeild from '../../components/FormFeild'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain' className="w-[125px] h-[35px]"/>

          <Text className="text-2xl text-white text-semibold mt-2 font-psemibold">
            Log in to Sporti
          </Text>

          <FormFeild
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form,
            email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormFeild
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form,
            password: e })}
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn