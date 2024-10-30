import { ScrollView, StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '@/lib/appwrite'

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (!form.email || !form.password || !form.name) {
      Alert.alert('Hata', 'Lutfen tum alanlari doldurun')
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.name);
      router.replace("/home")
    } catch (error) {
      Alert.alert('Hata', 'Giris yapilamadi');
    } finally {
      setIsSubmitting(false);
    }

 
  }


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full  justify-center h-full px-4 my-6 '>
          <Image source={images.logoXs} resizeMode='contain' className='w-[115px]'></Image>
          <Text className='text-2xl text-white font-psemibold'>Kayit Ol</Text>
          <FormField
            title="Adiniz"
            value={form.name}
            handleChangeForm={(e: any) => setForm({ ...form, name: e })}
            otherStyles="mt-7"
            keyboardType="name"
            placeholder="Adiniz"
          />
          <FormField
            title="E-Posta"
            value={form.email}
            handleChangeForm={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            placeholder="Eposta Adresiniz"
          />

          <FormField
            title="Parola"
            value={form.password}
            handleChangeForm={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            keyboardType="pass"
            placeholder="Parola"
          />

          <CustomButton
            title="Kayit ol"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
            textStyles={undefined}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-white text-lg font-pregular'>Hesabiniz var mi?</Text>
            <Link className='text-secondary font-pregular text-lg' href='/sign-in'>Giris yap</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
