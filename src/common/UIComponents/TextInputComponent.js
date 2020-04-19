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

class TextInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: '',
      inputValue: '',
      focus: false,
      valieInput: true,
    };
  }
  handleOnChangeText = inputValue => {
    this.setState({inputValue});
  };

  render() {
    return (
      <View style={styles.textInputContainer}>
        <TextInput
          style={[
            styles.textInput,
            this.state.focus &&
              !this.state.valieInput && {borderColor: 'red', borderWidth: 1},
            this.state.focus &&
              this.state.valieInput && {borderColor: 'blue', borderWidth: 1},
          ]}
          spellCheck={false}
          autoFocus={false}
          multiline={false}
          placeholderTextColor="rgb(117, 129, 155)"
          autoCorrect={false}
          placeholder={
            !this.state.focus && this.state.inputValue.length === 0
              ? this.props.placeholder
              : ''
          }
          onChangeText={text => {
            this.handleOnChangeText(text);
          }}
          onBlur={() => {
            if (this.state.inputValue.length === 0) {
              this.setState({focus: false});
            }
          }}
          onFocus={() => {
            this.setState({focus: true});
            this.props.onFieldFocus && this.props.onFieldFocus(1100);
          }}
          value={this.state.inputValue}
        />
        {this.state.focus && this.props.placeholder.length > 0 && (
          <Text style={styles.captionText}>{this.props.placeholder}</Text>
        )}
      </View>
    );
  }
}

export default TextInputComponent;
