import { View, Text, ScrollView, Image, Alert} from 'react-native'
import {React, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants';
import FormFeild from '../../components/FormFeild';
import  CustomButton  from '../../components/CustomButton'
import {Link, router} from 'expo-router'
import { createUser } from '../../lib/appwrite';
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if(form.username == "" || form.email == "" || form.password == ""){
      Alert.alert('Error', 'Please fill all field');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLoggedIn(true);

      router.replace("/games");
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image source={images.logo1}
          resizeMode='contain' className="w-[125px] h-[35px]"/>

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign up to Sporti
          </Text>

          <FormFeild
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form,
            username: e })}
            otherStyles="mt-4"
          />

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
            otherStyles="mt-4"
          />

          <CustomButton
            title='Sign-up'
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-md text-gray-100 font-pregular">
              Have an account?
            </Text>
            <Link href='/sign-in' className="text-md font-psemibold text-red">
              sign in
            </Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp