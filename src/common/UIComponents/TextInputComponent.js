import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import styles from './styles';
import {placeholder} from 'i18n-js';
import {displayPhoneNumber, checkPhone} from '../../uttils/UtilityFunctions';

class TextInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: '',
      // inputValue: '',
      focus: this.props.inputValue ? true : false,
      validInput: true,
    };
  }
  static getDerivedStateFromProps(props, state) {
    // if (props.inputValue?.length === 0) {
    //   return {validInput: true};
    // }
    if (props.inputValue.length > 0) {
      return {focus: true};
    }
    return {};
  }
  handleOnChangeText = inputValue => {
    console.log('handleOnChangeText ....', inputValue);
    this.props.onTextChange(inputValue);
  };

  render() {
    return (
      <View style={styles.textInputContainer}>
        <TextInput
          style={[
            styles.textInput,
            this.state.focus &&
              !this.state.validInput && {borderColor: 'red', borderWidth: 1},
            this.state.focus &&
              this.state.validInput && {borderColor: '#22caff', borderWidth: 1},
          ]}
          spellCheck={false}
          autoFocus={false}
          multiline={false}
          placeholderTextColor="rgb(117, 129, 155)"
          autoCorrect={false}
          placeholder={
            !this.state.focus && this.props.inputValue?.length === 0
              ? this.props.placeholder
              : ''
          }
          onChangeText={text => {
            this.handleOnChangeText(text);
          }}
          onBlur={() => {
            if (this.props.inputValue?.length === 0) {
              this.setState({focus: false});
            }
          }}
          onFocus={() => {
            this.setState({focus: true});
            this.props.onFieldFocus && this.props.onFieldFocus(800);
          }}
          value={this.props.inputValue}
        />
        {this.state.focus && this.props.placeholder.length > 0 && (
          <Text style={styles.captionText}>{this.props.placeholder}</Text>
        )}
      </View>
    );
  }
}

export default TextInputComponent;
