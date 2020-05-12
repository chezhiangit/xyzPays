import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import {setIntialRoute} from '../AppStore/landingPageActions';
import WarningDialog from '../common/UIComponents/warningDialog';
import images from '../Assets';

class AppLandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      showDlg: false,
      dlgMsg: '',
    };
  }

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  onBannerLeftViewPressed = () => {
    console.log('Left banner selected');
    this.props.setIntialRoute('ProductsListPage');
  };

  onBannerRightViewPressed = () => {
    console.log('Right banner selected');
  };

  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        <View style={BaseStyles.emptyHView} />
        <View style={styles.landingViewContainer}>
          <View style={BaseStyles.emptyHView} />
          <View style={BaseStyles.emptyHView} />
          <View style={styles.imageView}>
            <Image source={images.xyziesPays} />
          </View>
          <View style={styles.logedInUserInfo}>
            <Text style={styles.logedInUserHiText}>
              {I18n.t('landingPage.hi')}
            </Text>
            <Text style={[styles.logedInUserHiText, styles.primaryColor]}>
              {` ${this.props.dashboardData?.repFirstName}`}
            </Text>
            <Text style={styles.logedInUserHiText}>
              {` ${this.props.dashboardData?.repLastName}`}
            </Text>
          </View>
          <View style={styles.userMessage}>
            <Text style={styles.userMessageTxt}>
              {I18n.t('landingPage.userMsg')}
            </Text>
          </View>
          <View style={BaseStyles.emptyHView} />
          <View style={BaseStyles.emptyHView} />
          <View style={styles.mainViewContainer}>
            <TouchableWithoutFeedback onPress={this.onBannerLeftViewPressed}>
              <View style={styles.leftView}>
                <View style={styles.leftBannerView}>
                  <View style={styles.bannerImageView}>
                    <Image />
                  </View>
                  <View style={styles.bannerTextView}>
                    <Text style={styles.bannerViewText}>
                      {I18n.t('landingPage.make')}
                    </Text>
                    <Text style={styles.bannerViewText}>
                      {I18n.t('landingPage.money')}
                    </Text>
                  </View>
                </View>
                <View style={styles.bannerBottom}>
                  <LinkBtnComponent btnName={I18n.t('landingPage.clickHere')} />
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={this.onBannerRightViewPressed}>
              <View style={styles.rightView}>
                <View style={styles.rightBannerView}>
                  <View style={styles.bannerImageView}>
                    <Image />
                  </View>
                  <View style={styles.bannerTextView}>
                    <Text style={styles.bannerViewText}>
                      {I18n.t('landingPage.my')}
                    </Text>
                    <Text style={styles.bannerViewText}>
                      {I18n.t('landingPage.money')}
                    </Text>
                  </View>
                </View>
                <View style={styles.bannerBottom}>
                  <LinkBtnComponent btnName={I18n.t('landingPage.clickHere')} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <Footer />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state from landing page ', state);
  return {
    // dashboardData: state.dashboard.dashboardData,
  };
};

const mapDispatchToProps = dispatch => ({
  setIntialRoute: initialRoute => dispatch(setIntialRoute(initialRoute)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppLandingPage);
