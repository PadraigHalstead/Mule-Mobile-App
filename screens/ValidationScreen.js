import * as React from 'react';
import { View, Text,Pressable} from 'react-native'
import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { styles } from '../styles';

export const ValidationScreen = ({navigation, route}) => {
    const [studentEmail, setStudentEmail] = useState("")
    const [studentModuleCode, setStudentModuleCode] = useState("")
    const [userUID, setUserUID] = useState(route.params.uid)
    const [validated, setValidated] = useState(false)
    const [validQR, setValidQR] = useState(false)

    useEffect(() => {
      getStudentDetails();
    }, [])
    

    const getStudentDetails = async () => {
      try{
        const userDataRef = doc(db, "users", userUID)
        const userSnapshot = await getDoc(userDataRef)
        const currentUserData = userSnapshot.data()
        if(currentUserData.exists()){
          setStudentEmail(currentUserData.email)
          setStudentModuleCode(currentUserData.module)
          setValidated(currentUserData.validated)
        } else {
          setValidQR(false)
        }
      } catch (err) {
        setValidQR(false)
      }
      
    }

    const handleAccept = async () => {
        const selectedStudentRef = doc(db, "users", userUID)
    try{
      await updateDoc(selectedStudentRef, {validated: true});
    } catch (err) {
      console.error(err)
    }
    navigateToHomePage();
    }

    const navigateToHomePage = () => {
        navigation.replace('Home');
    }

    const InvalidQR = () => {
      return (
        <View>
          <Text style={styles.heading4}>Invalid QR / User does not exist</Text>
            <Text/>

            <Pressable style={styles.button} onPress={navigateToHomePage}>
            <Text style={styles.text}>Okay</Text>
            </Pressable>
        </View>
      )
    }

    const ValidQR = () => {
      return (
        <View style={styles.container}>
          {validated ? (
            <View>
              <Text style={styles.heading4}>Student Already Validated</Text>
              <Text/>

              <Pressable style={styles.button} onPress={navigateToHomePage}>
              <Text style={styles.text}>Okay</Text>
              </Pressable>
            </View>
          ): (
            <View>
              <Text style={styles.heading3}>Student Details:</Text>
            <Text/> 
            <Text style={styles.heading4}>Email: {studentEmail}</Text>
            <Text/> 
            <Text style={styles.heading4}>Module: {studentModuleCode}</Text>
            <Text/> 

            <Pressable style={styles.button} onPress={handleAccept}>
            <Text style={styles.text}>Accept</Text>
            </Pressable>

            <Text/>

            <Pressable style={styles.button} onPress={navigateToHomePage}>
            <Text style={styles.text}>Deny</Text>
            </Pressable>
            </View>

          )}  
        </View>
    )
  }
  return (
    <View>
    {validQR ? (
      <ValidQR/>
    ) : (
      <InvalidQR/>
    )}
    </View>   
  )
    
}
