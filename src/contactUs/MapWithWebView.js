import * as React from 'react';
import {View, StyleSheet, Animated, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {WebView} from 'react-native-webview';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import {heightAdapter, widthAdapter} from '../uttils/adapterUtil';
// import SliderView from '../common/UIComponents/SliderView';
import TextInputComponent from '../common/UIComponents/TextInputComponent';
import KeyboardAwareComponent from '../common/UIComponents/hoc/KeyboardAwareComponent';
// import Footer from '../common/UIComponents/Footer';
import {
  getGoogleMapCoordinates,
  saveSuggestion,
} from '../AppStore/contactUSActions';
import WarningDialog from '../common/UIComponents/warningDialog';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFindUsView: false,
      findUsSubject: '',
      findUsMessage: '',
      showDlg: false,
      dlgMsg: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.props.registerKeyboard();
    this.props.getGoogleMapCoordinates(
      this.onGetMapCoordinatesSuccess,
      this.onGetMapCoordinatesFailed,
    );
    this.setState({isLoading: true});
  }
  componentWillUnmount() {
    this.props.deregisterKeyboard();
  }

  onGetMapCoordinatesSuccess = () => {
    console.log('get map coordinate success');
    this.setState({isLoading: false});
  };

  onGetMapCoordinatesFailed = errorMsg => {
    console.log('get map coordinate failes');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  onFindUs = () => {
    this.setState(
      {
        showFindUsView: true,
        findUsMessage: '',
        findUsSubject: '',
      },
      // () => this.props.registerKeyboard(),
    );
  };

  onSubmit = () => {
    Keyboard.dismiss();
    this.setState(
      {
        showFindUsView: false,
        isLoading: true,
      },
      () => {
        // this.props.deregisterKeyboard();
        const payload = {
          Subject: this.state.findUsSubject,
          Message: this.state.findUsMessage,
        };

        this.props.saveSuggestion(
          payload,
          this.saveSuggestionSuccess,
          this.saveSuggestionFailed,
        );
      },
    );
  };

  saveSuggestionSuccess = msg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: msg,
      findUsMessage: '',
      findUsSubject: '',
    });
    console.log(msg);
  };

  saveSuggestionFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  render() {
    return (
      <View style={BaseStyles.baseContainer}>
        {/* <WebView source={{uri: 'https://reactnative.dev/'}} /> */}
        <WebView
          source={{
            html: `<iframe width="100%" height="75%" src=${
              this.props.XyziesGoogleMapCoordinates
            } frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`,
          }}
          onLoadEnd={() => this.setState({isLoading: false})}
        />
        {/* <View style={styles.bottomContainer}>
          <PrimaryButton
            btnStyle={styles.findUsBtn}
            onSubmit={this.onFindUs}
            btnName={I18n.t('contactUs.findUsBtnName')}
          />
        </View> */}
        {/* <Footer /> */}
        <Animated.View
          style={{
            width: '100%',
            transform: [{translateY: this.props.shift}],
          }}>
          {/* <SliderView
          // containerStyle={{transform: [{translateY: this.props.shift}]}}
          visible={this.state.showFindUsView}
          animateFrom="bottom"
          height={heightAdapter(500)}
          width="100%"> */}
          <View style={styles.contactUsContainer}>
            <TextInputComponent
              placeholder={I18n.t('contactUs.subject')}
              autoFocus={false}
              onFieldFocus={this.props.onFieldFocus}
              inputValue={this.state.findUsSubject}
              onTextChange={text => this.setState({findUsSubject: text})}
            />
            <TextInputComponent
              placeholder={I18n.t('contactUs.message')}
              autoFocus={false}
              onFieldFocus={this.props.onFieldFocus}
              inputValue={this.state.findUsMessage}
              onTextChange={findUsMessage => this.setState({findUsMessage})}
            />
            <PrimaryButton
              btnStyle={styles.submitBtn}
              onSubmit={this.onSubmit}
              btnName={I18n.t('contactUs.submitBtnName')}
            />
            {/* <View
                style={[BaseStyles.emptyHView, {height: heightAdapter(100)}]}
              /> */}
          </View>
          {/* </SliderView> */}
        </Animated.View>
        {/* <Footer /> */}
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          // onCancel={this.onCancel}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //   container: {
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     bottom: 0,
  //     alignItems: 'center',
  //     justifyContent: 'flex-end',
  //   },
  //   map: {
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     right: 0,
  //     bottom: heightAdapter(150),
  //   },
  bottomContainer: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    bottom: heightAdapter(200),
    right: widthAdapter(50),
    left: 0,
    zIndex: 0,
    justifyContent: 'flex-end',
  },
  findUsBtn: {
    height: heightAdapter(50),
    width: widthAdapter(150),
    marginRight: widthAdapter(30),
    // position: 'absolute',
    // bottom: heightAdapter(50),
    // right: widthAdapter(50),
    // left: 0,
    // zIndex: 0,
  },
  contactUsContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: widthAdapter(30),
    zIndex: 100,
    borderWidth: 1,
    borderColor: 'gray',
    backfaceVisibility: 'hidden',
    backgroundColor: 'white',
  },
  submitBtn: {
    height: heightAdapter(100),
    width: widthAdapter(200),
    marginRight: widthAdapter(30),
    borderRadius: widthAdapter(50),
  },
});

const mapStateToProps = state => {
  console.log('state from MapWithWebView page ....', state);
  return {
    // dashboardData: state.dashboard.dashboardData,
    // pendingTask: state.dashboard.pendingTask,
    XyziesGoogleMapCoordinates:
      state.contactUS.mapCoordinates[0]?.XyziesGoogleMapCoordinates,
  };
};

const mapDispatchToProps = dispatch => ({
  getGoogleMapCoordinates: (onSuccesscallback, onErrocallback) =>
    dispatch(getGoogleMapCoordinates(onSuccesscallback, onErrocallback)),
  saveSuggestion: (payload, onSuccesscallback, onErrocallback) =>
    dispatch(saveSuggestion(payload, onSuccesscallback, onErrocallback)),
});

const childComp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactUs);

export default KeyboardAwareComponent(childComp);

// export default ContactUs;
