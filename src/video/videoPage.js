import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import Spinner from 'react-native-loading-spinner-overlay';
import {WebView} from 'react-native-webview';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import Header from '../common/UIComponents/Header';
import Footer from '../common/UIComponents/Footer';
import EmailInputComponent from '../common/UIComponents/EmailInputComponent';
import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import {authenticateUser} from '../AppStore/loginActions';
import WarningDialog from '../common/UIComponents/warningDialog';

class VideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      showDlg: false,
      dlgMsg: '',
    };
  }

  onLoad = () => {
    this.setState({isLoading: true});
  };
  renderVideo = () => {
    console.log(
      'this.props.formInfo.VideoLink .....',
      this.props.formInfo.VideoLink,
    );
    return (
      <WebView
        source={{
          html: `<iframe width="100%" height="75%" src=${
            this.props.formInfo.VideoLink
          } frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`,
        }}
        onLoadEnd={() => this.setState({isLoading: false})}
      />
    );
  };

  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        <View style={styles.videoViewContainer}>{this.renderVideo()}</View>
        <Footer />
        {/* <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          // onCancel={this.onCancel}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        /> */}
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    formInfo: state.products.formInfo[0],
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideoPage);
