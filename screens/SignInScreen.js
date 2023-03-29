import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { styles } from '../styles';

export const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [errorText, setErrorText] = useState("")


  useEffect(() => {
    if(isSignedIn){
      navigation.replace("Home")
    }
  }, [isSignedIn])

  const handleSignIn = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password)
      setIsSignedIn(true)
    } catch (err) {
      setErrorText(err.message)
    } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.error}>{errorText}</Text>
      
      <Text style={styles.heading4}>Please sign in to continue</Text>
      <Text/>
      <Text style={styles.heading4}>Email:</Text>
      <Text/>
      <TextInput  style={styles.input} value={email} onChangeText={setEmail} />
      <Text/>
      <Text style={styles.heading4}>Password:</Text>
      <Text/>
      <TextInput style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
      <Text/>
      <Pressable style={styles.button} onPress={handleSignIn}>
      <Text style={styles.text}>Sign In</Text>
      </Pressable>
    </View>
  );
}
