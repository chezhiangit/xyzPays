import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Spinner from 'react-native-loading-spinner-overlay';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import BaseStyles from '../../BaseStyles';
import styles from './styles';
import Colors from '../../../uttils/Colors';
import {fontscale} from '../../../uttils/adapterUtil';
// import PrimaryButton from '../PrimaryButton';
// import WarningDialog from '../warningDialog';

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
    // Update state so the next render will show the fallback UI.
    console.log('Error catched .......', error);
    return {hasError: true, showDlg: true};
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  onConfirm = () => {
    this.props.signOut();
    this.setState({hasError: false});
    // this.setState(
    //   {
    //     hasError: false,
    //     showDlg: false,
    //     dlgMsg: '',
    //   },
    //   () => {
    //     this.props.signOut();
    //   },
    // );
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
            {/* <Image
                source={this.props.displayImage}
                style={styles.warningImage}
              /> */}
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
            {/* {this.props.onCancel && (
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => this.props.onCancel()}>
                <Text style={styles.cancelButtonText}>
                  {this.props.leftButtonText}
                </Text>
              </TouchableOpacity>
            )} */}
            <TouchableOpacity style={styles.okButton} onPress={this.onConfirm}>
              <Text style={styles.doneText}>{'OK'}</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={{height: 300, width: 200}}>
            <Text>Something went wrong.</Text>
            <PrimaryButton btnName={'OK'} onSubmit={this.onConfirm} />
          </View> */}
          {/* <WarningDialog
            shouldShowDeleteWarning={this.state.showDlg}
            // onCancel={this.onCancel}
            onOK={this.onConfirm}
            dlgMsg={this.state.dlgMsg}
          /> */}
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
