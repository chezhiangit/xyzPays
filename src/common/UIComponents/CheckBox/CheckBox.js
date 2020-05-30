import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

const CheckBoxComponent = props => {
  return (
    <TouchableOpacity accessible={false} onPress={props.onClick}>
      <View style={[styles.checkBoxBtnContainer, props.containerStyle]}>
        <View
          style={[
            styles.box,
            props.checkBoxStyle,
            props.isSelected && {backgroundColor: 'gray'},
          ]}
        />
        {props.imageUrl && (
          <Image
            source={{
              isStatic: true,
              uri: props.imageUrl,
              method: 'GET',
              // headers: {
              //   clubId: NetTool.clubId,
              //   'Ocp-Apim-Subscription-Key': NetTool.subscriptionKey,
              // },
            }}
            style={styles.providerImage}
            defaultSource={4}
          />
        )}
        <Text style={[styles.btnText, props.btnTextStyle]}>
          {props.btnName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CheckBoxComponent;
