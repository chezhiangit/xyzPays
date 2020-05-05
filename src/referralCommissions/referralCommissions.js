import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  Image,
  Easing,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux';
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
import moment from 'moment';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import {heightAdapter} from '../uttils/adapterUtil';
import Images from '../Assets/index';
import Colors from '../uttils/Colors';
import WarningDialog from '../common/UIComponents/warningDialog';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {displayPhoneNumber} from '../uttils/UtilityFunctions';
import {
  getReferralRegFilter,
  getReferralCommissionList,
  getReferralDateFilter,
} from '../AppStore/referralActions';

const commission = [
  {
    referredUser: 'Chezhian',
    referralCommissions: '6.00',
    status: 'Paid',
    paymentDate: moment().format('MM/DD/YYYY'),
    email: 'chezhian.p@gmail.com',
    mobile: '9585058087',
  },
  {
    referredUser: 'JimKim',
    referralCommissions: '6.00',
    status: 'Pending',
    paymentDate: moment().format('MM/DD/YYYY'),
    email: 'chezhian.p@gmail.com',
    mobile: '9585058087',
  },
  {
    referredUser: 'Chezhian',
    referralCommissions: '6.00',
    status: 'Paid',
    paymentDate: moment().format('MM/DD/YYYY'),
    email: 'chezhian.p@gmail.com',
    mobile: '9585058087',
  },
  {
    referredUser: 'JimKim',
    referralCommissions: '6.00',
    status: 'Pending',
    paymentDate: moment().format('MM/DD/YYYY'),
    email: 'chezhian.p@gmail.com',
    mobile: '9585058087',
  },
  {
    referredUser: 'Chezhian',
    referralCommissions: '6.00',
    status: 'Paid',
    paymentDate: moment().format('MM/DD/YYYY'),
    email: 'chezhian.p@gmail.com',
    mobile: '9585058087',
  },
  {
    referredUser: 'JimKim',
    referralCommissions: '6.00',
    status: 'Pending',
    paymentDate: moment().format('MM/DD/YYYY'),
    email: 'chezhian.p@gmail.com',
    mobile: '9585058087',
  },
];
// const segmentationData = [
//   I18n.t('commission.dropdownAll'),
//   I18n.t('commission.dropdown7Days'),
//   I18n.t('commission.dropdownLast2Weeks'),
//   I18n.t('commission.dropdownLast3Weeks'),
//   I18n.t('commission.dropdownLast1Month'),
//   I18n.t('commission.dropdownLast3Months'),
// ];
class ReferralCommissions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
      selectedIndex: 4,
      isSegmentVisible: false,
      commissionData: [...commission],
      segmentBorder: 0,
      showDlg: false,
      dlgMsg: '',
      isLoading: false,
    };
    // this.show=false;
    this.translate = new Animated.Value(0);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.dateFilter.length === 0) {
      return {
        isLoading: true,
      };
    }
    if (state.selectedValue === '') {
      return {selectedValue: props.dateFilter[4]?.Text};
    }
    return {};
  }

  componentDidMount() {
    if (this.props.dateFilter.length === 0) {
      // this.props.getReferralRegFilter(
      //   this.onRegistationStatusSuccess,
      //   this.onRegistationStatusFailed,
      // );
      this.props.getReferralDateFilter(
        this.onDateFilterSuccess,
        this.onDateFilterFailed,
      );
    }
  }
  onSegmentItemSelected = (item, index) => {
    this.toggleDropdown(false);
    this.setState({
      selectedValue: this.props.dateFilter[index].Text,
      selectedIndex: index,
      isLoading: true,
    });
    this.props.getReferralCommissionList(
      index,
      0,
      this.onReferralCommissionSuccess,
      this.onReferralCommissionFailed,
    );
  };
  renderSegmentItem = ({item, index}) => (
    <TouchableWithoutFeedback
      onPress={() => this.onSegmentItemSelected(item, index)}>
      <View style={styles.segmentItemRow}>
        <Text style={styles.segmentItemText}>{item.Text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );

  toggleDropdown = show => {
    if (this.state.isSegmentVisible === show) {
      return;
    }
    this.setState({isSegmentVisible: show});
    if (show) {
      this.setState({segmentBorder: 1});
      this.translate.setValue(0);
      Animated.spring(this.translate, {
        toValue: 1,
        duration: 400,
        overshootClamping: true,
        // useNativeDriver: true,
      }).start();
    } else {
      // this.segmentBorder = 0;
      Animated.timing(this.translate, {
        toValue: 0,
        duration: 400,
        easing: Easing.linear,
        // useNativeDriver: true,
      }).start(() => this.setState({segmentBorder: 0}));
    }
  };

  renderCommissionCard = ({item, index}) => {
    return (
      <View style={styles.commissionItemContainer}>
        <View style={styles.commissionDetailsContainer}>
          <View style={styles.customerDetails}>
            <Text style={styles.customerDetailsLabel}>
              {I18n.t('referralCommissions.rferredUser')}
            </Text>
            <Text style={styles.customerDetailsTxt}>
              {item.ReferredUserName}
            </Text>
          </View>
          <View style={styles.customerDetails}>
            <Text
              style={[
                styles.customerDetailsLabel,
                {color: Colors.primaryAppColor},
              ]}>
              {I18n.t('referralCommissions.referralCommission')}
            </Text>
            <Text style={[styles.customerDetailsLabel, {color: 'green'}]}>
              $
            </Text>
            <Text style={styles.customerDetailsTxt}>
              {item.ReferralCommission}
            </Text>
          </View>

          <View style={styles.customerDetails}>
            <Text style={styles.customerDetailsLabel}>
              {I18n.t('referralCommissions.status')}
            </Text>
            <Text
              style={[
                styles.customerDetailsTxt,
                item.TxnStatus === 'Paid' && {color: 'green'},
                item.TxnStatus === 'Not Paid' && {color: '#dc3545'},
              ]}>
              {item.TxnStatus}
            </Text>
          </View>

          <View style={styles.customerDetails}>
            <Text style={styles.customerDetailsLabel}>
              {I18n.t('referralCommissions.paymentDate')}
            </Text>
            <Text style={styles.customerDetailsTxt}>{moment(item.PaymentDate).format('MM/DD/YYYY')}</Text>
          </View>

          <View style={styles.customerDetails}>
            {/* <Image source={''} style={styles.emailphoneIcon} /> */}
            <Text style={styles.emailphoneIcon}>
              <Icon name="envelope" size={15} color={'gray'} />
            </Text>
            <Text style={styles.customerDetailsLabel}>
              {I18n.t('referralCommissions.email')}
            </Text>
            <Text style={styles.customerDetailsTxt}>
              {item.ReferredUserEmail}
            </Text>
          </View>
          <View style={styles.customerDetails}>
            <Text style={styles.emailphoneIcon}>
              <Icon name="phone-square" size={15} color={'gray'} />
            </Text>
            {/* <Image source={''} style={styles.emailphoneIcon} /> */}
            <Text style={styles.customerDetailsLabel}>
              {I18n.t('referralCommissions.phone')}
            </Text>
            <Text style={styles.customerDetailsTxt}>
              {displayPhoneNumber(item.ReferredUserMobile)}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  onReferralCommissionSuccess = () => {
    console.log('referral commission list success');
    this.setState({isLoading: false});
  };

  onReferralCommissionFailed = errorMsg => {
    console.log('referral commission list fails');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  onDateFilterSuccess = () => {
    console.log('registration status success');
    this.setState({isLoading: false});
  };

  onDateFilterFailed = errorMsg => {
    console.log('registration status fails');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  render() {
    return (
      <View style={BaseStyles.baseContainer}>
        <View style={styles.commissionContainer}>
          <View style={BaseStyles.userInfo}>
            <Text style={BaseStyles.userInfoTxt}>
              {I18n.t('referralCommissions.userInfo')}
            </Text>
          </View>
          <View style={styles.dropdownContainer}>
            <TouchableWithoutFeedback
              style={styles.selectionBox}
              onPress={() => this.toggleDropdown(!this.state.isSegmentVisible)}>
              <View style={styles.selectionBox}>
                {/* <Image style={styles.image} source={''} /> */}
                <View style={{flexDirection: 'row'}}>
                  <Text>
                    <Icon
                      name="calendar"
                      size={20}
                      color={Colors.primaryAppColor}
                    />
                  </Text>
                  <Text style={styles.selectedValue}>
                    {this.state.selectedValue}
                  </Text>
                </View>
                <View>
                  <Text>
                    <Icon name="angle-down" size={20} color={'white'} />
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <Animated.View
              style={[
                styles.segmentedView,
                {
                  height: this.translate.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, heightAdapter(460)],
                  }),
                  borderWidth: this.state.segmentBorder,
                },
              ]}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={this.props.dateFilter}
                renderItem={this.renderSegmentItem}
                keyExtractor={(item, index) => index}
              />
            </Animated.View>
          </View>
          {this.state.isSegmentVisible && (
            <TouchableWithoutFeedback
              style={styles.transparentView}
              onPress={() => this.toggleDropdown(false)}>
              <View style={styles.transparentView} />
            </TouchableWithoutFeedback>
          )}
          <FlatList
            style={styles.commissionList}
            data={this.props.referralCommissionList}
            renderItem={this.renderCommissionCard}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Footer />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          // onCancel={this.onCancel}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
        {/* {this.state.isSegmentVisible && (
          <TouchableOpacity
            style={styles.transparentView}
            onPress={() => this.toggleDropdown(false)}>
            <View style={styles.transparentView} />
          </TouchableOpacity>
        )} */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state from referral commission page ....', state);
  return {
    referralCommissionList: state.referral.referralCommissionList,
    dateFilter: state.referral.dateFilter,
  };
};

const mapDispatchToProps = dispatch => ({
  getReferralCommissionList: (
    SelectedDateRange,
    TxnStatusType,
    onSuccesscallback,
    onErrocallback,
  ) =>
    dispatch(
      getReferralCommissionList(
        SelectedDateRange,
        TxnStatusType,
        onSuccesscallback,
        onErrocallback,
      ),
    ),
  getReferralDateFilter: (onSuccesscallback, onErrocallback) =>
    dispatch(getReferralDateFilter(onSuccesscallback, onErrocallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReferralCommissions);
