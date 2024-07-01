import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../styles/mensagens';

const Messages = [
  {
    id: '1',
    userName: 'La Casa Mexicana',
    userImg: require('../assets/encontro/encontro1.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'lorem ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    id: '2',
    userName: 'Royale Burguer',  
    userImg: require('../assets/encontro/encontro2.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'lorem ipsum is simply dummy text of the printing and typesetting industry. ',  
  }, 
];

const Message= ({navigation}) => {
  return (
    <Container>
      <FlatList 
        data={Messages}
        keyExtractor={item=>item.id}
        renderItem={({item}) => (
          <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  );
};

export default Message;

const styles = StyleSheet.create({
container: {
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center'
},
});