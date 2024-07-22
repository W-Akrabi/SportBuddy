import { View, Text, ScrollView, Image, Alert} from 'react-native';
import {React, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../../constants';
import FormFeild from '../../components/FormFeild';
import  CustomButton  from '../../components/CustomButton';
import {Link, router} from 'expo-router';
import { getCurrentUser, signIn } from '../../lib/appwrite';
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if(form.email == "" || form.password == ""){
      Alert.alert('Error', 'Please fill all feilds');
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLoggedIn(true);
      Alert.alert("Success", "User signed in!");
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
          resizeMode='contain' className="w-[155px] h-[55px]"/>

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

export default SignIn