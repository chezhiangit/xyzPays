import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import BaseStyles from '../../BaseStyles';
import styles from './styles';
import Colors from '../../../uttils/Colors';
import {fontscale} from '../../../uttils/adapterUtil';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      showDlg: false,
      dlgMsg: 'Somthingwent wrong. Pls try again.',
    };
  }

  static getDerivedStateFromError(error) {
    return {hasError: true, showDlg: true};
  }

  onConfirm = () => {
    this.props.signOut();
    this.setState({hasError: false});
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <View
          style={[
            BaseStyles.baseContainer,
            {alignItems: 'center', justifyContent: 'center'},
          ]}>
          <View style={styles.warningImageContainer}>
            <Text style={styles.warningImage}>
              <Icon
                name="info-circle"
                size={fontscale(50)}
                color={Colors.primaryAppColor}
              />
            </Text>
          </View>
          <View style={styles.warningTextContainer}>
            <Text style={styles.WarningText}>{this.state.dlgMsg}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.okButton} onPress={this.onConfirm}>
              <Text style={styles.doneText}>{'OK'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch({type: 'USER_LOGOUT'}),
});

export default connect(
  null,
  mapDispatchToProps,
)(ErrorBoundary);
