import { View, Text, ScrollView, Image} from 'react-native'
import {React, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants';
import FormFeild from '../../components/FormFeild';
import  CustomButton  from '../../components/CustomButton'
import {Link} from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain' className="w-[125px] h-[35px]"/>

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Sporti
          </Text>

          <FormFeild
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form,
            email: e })}
            otherStyles="mt-4"
            keyboardType="email-address"
          />

          <FormFeild
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form,
            password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title='Sign-in'
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-md text-gray-100 font-pregular">
              Dont have an account?
            </Text>
            <Link href='/sign-up' className="text-md font-psemibold text-red">
              sign up
            </Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp