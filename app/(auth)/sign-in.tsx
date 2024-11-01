import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => { }


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full  justify-center h-full px-4 my-6 '>
          <Image source={images.logoXs} resizeMode='contain' className='w-[115px]'></Image>
          <Text className='text-2xl text-white font-psemibold'>Giris Yap</Text>
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
            keyboardType="email-address"
            placeholder="Parola"
          />

          <CustomButton
            title="Giris Yap"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
            textStyles={undefined}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-white text-lg font-pregular'>Hesabiniz yok mu?</Text>
            <Link className='text-secondary font-pregular text-lg' href='/sign-up'>Yeni bir tane olusturun</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
