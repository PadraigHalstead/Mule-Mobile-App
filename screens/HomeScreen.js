import React, { useEffect, useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { db } from '../config/firebase';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, collection } from 'firebase/firestore';
import { styles } from '../styles';

export const HomeScreen = ({navigation}) => {
    const [canScan, setCanScan] = useState(false)
    const [userId, setUserId] = useState(false)
    
    useEffect(() => {
        getCanScanPermissions();
        const auth = getAuth()
        setUserId(auth.currentUser.uid)
        
    }, [])
    
    const getCanScanPermissions = () => {
        const fetchRolePermissions = async () => {
            
            try{
                const auth = getAuth()
                const uid = auth.currentUser.uid
                const userDataRef = doc(db, "users", uid)
                const userSnapshot = await getDoc(userDataRef)
                const currentUserData = userSnapshot.data()
                const role = currentUserData.role
                const userRoleRef = doc(db, "roles", role)
                const userDocSnapshot = await getDoc(userRoleRef);
                const userData = userDocSnapshot.data();            
                setCanScan(userData.permissions.canScanStudents);
            } catch (err) {
                console.log(err)
            }
        }
        fetchRolePermissions();
    }

    

    return (
        <View style={styles.container}>
        <Text style={styles.heading3}>Welcome Back</Text>
        <Text/>
        <Text/>
        {canScan ? (
        <View>
        <Pressable style={styles.button} onPress={() =>{
          navigation.replace("QrScanner")
        }}>
        <Text style={styles.text}>Scan QR</Text>
        </Pressable>
        </View>
        ):(
        <Text style={styles.heading4}>You do not have permission to access this page</Text>
        )}
        </View>
      
    );
  };


