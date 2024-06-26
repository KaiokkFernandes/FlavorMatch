import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'; 


export default function Profile() {
  const [user, setUser] = useState(null)
  
  useEffect(() =>{
    fetch('http://localhost:3333/me')
    .then(response => response.json())
    .then(data => setUser(data))
    .catch(error => console.log(error));
  }, []);

  return (
    <View>
      <Text>Profile</Text>
      { user &&(
        <View>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
          <Text>{user.age}</Text>          
        </View>
      )
      }
    </View>
  )
}