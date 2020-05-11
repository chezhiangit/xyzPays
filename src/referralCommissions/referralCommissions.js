import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  Image,
  Easing,
  TouchableOpacity,
  // TouchableWithoutFeedback,
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
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// import {displayPhoneNumber} from '../uttils/UtilityFunctions';
import {
  getReferralRegFilter,
  getReferralCommissionList,
  getReferralDateFilter,
} from '../AppStore/referralActions';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import SliderView from '../common/UIComponents/SliderView';

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
      commissionData: [],
      segmentBorder: 0,
      showDlg: false,
      dlgMsg: '',
      isLoading: false,
      showFilter: false,
      selectedFilterIndex: 0,
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
    this.props.navigation.addListener('focus', () => {
      this.setState({isLoading: true});
      this.props.getReferralDateFilter(
        this.onDateFilterSuccess,
        this.onDateFilterFailed,
      );
      // this.props.getReferralCommissionList(
      //   4,
      //   0,
      //   this.onReferralCommissionSuccess,
      //   this.onReferralCommissionFailed,
      // );
    });

    // if (this.props.dateFilter.length === 0) {
    //   this.props.getReferralDateFilter(
    //     this.onDateFilterSuccess,
    //     this.onDateFilterFailed,
    //   );
    //   this.props.getReferralCommissionList(
    //     4,
    //     0,
    //     this.onReferralCommissionSuccess,
    //     this.onReferralCommissionFailed,
    //   );
    // }
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
      this.state.selectedFilterIndex,
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
            <Text style={styles.customerDetailsTxt}>
              {moment(item.PaymentDate).format('MM/DD/YYYY')}
            </Text>
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
              {item.ReferredUserMobile}
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
    // this.setState({isLoading: false});
    this.props.getReferralCommissionList(
      4,
      0,
      this.onReferralCommissionSuccess,
      this.onReferralCommissionFailed,
    );
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

  onFilterSelected = selectedFilterIndex => {
    this.setState(
      {
        selectedFilterIndex,
        showFilter: false,
        // commissionListServiceDone: true,
        isLoading: true,
      },
      () =>
        this.props.getReferralCommissionList(
          this.state.selectedIndex,
          selectedFilterIndex,
          this.onReferralCommissionSuccess,
          this.onReferralCommissionFailed,
        ),
    );
  };

  toggleFilter = show => {
    this.setState({showFilter: show});
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
          <View style={styles.dropdownAndFilterContainer}>
            <View style={styles.dropdownContainer}>
              <TouchableWithoutFeedback
                style={styles.selectionBox}
                onPress={() =>
                  this.toggleDropdown(!this.state.isSegmentVisible)
                }>
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
            <TouchableWithoutFeedback
              onPress={() => this.toggleFilter(!this.state.showFilter)}>
              <View style={styles.statusFilterContainer}>
                <View>
                  <Text>
                    <Icon
                      name="filter"
                      size={30}
                      color={Colors.primaryAppColor}
                    />
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
          {(this.state.isSegmentVisible || this.state.showFilter) && (
            <TouchableOpacity
              style={styles.transparentView}
              onPress={() => {
                this.toggleDropdown(false);
                this.setState({showFilter: false});
              }}>
              <View style={styles.transparentView} />
            </TouchableOpacity>
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
        <SliderView
          visible={this.state.showFilter}
          animateFrom="bottom"
          height={heightAdapter(300)}
          width="100%">
          <View style={styles.sliderContainer}>
            <View style={styles.sliderBtnContainer}>
              {/* <Text>
                <Icon name="camera" size={25} color="black" />
              </Text> */}
              <PrimaryButton
                btnStyle={styles.sliderBtnStyle}
                onSubmit={() => this.onFilterSelected(4)}
                btnName={I18n.t('commission.filterAll')}
                btnTexStyle={styles.sliderBtnTxtStyle}
              />
            </View>
            <View
              style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]}
            />
            <View style={styles.sliderBtnContainer}>
              {/* <Text>
                <Icon name="camera" size={25} color="black" />
              </Text> */}
              <PrimaryButton
                btnStyle={styles.sliderBtnStyle}
                onSubmit={() => this.onFilterSelected(2)}
                btnName={I18n.t('commission.filterPaid')}
                btnTexStyle={styles.sliderBtnTxtStyle}
              />
            </View>
            <View
              style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]}
            />
            <View style={styles.sliderBtnContainer}>
              {/* <Text>
                <Icon name="image" size={25} color="black" />
              </Text> */}
              <PrimaryButton
                btnStyle={styles.sliderBtnStyle}
                onSubmit={() => this.onFilterSelected(1)}
                btnName={I18n.t('commission.filterPending')}
                btnTexStyle={styles.sliderBtnTxtStyle}
              />
            </View>
            <View
              style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]}
            />
            <View style={styles.sliderBtnContainer}>
              {/* <Text>
                <Icon name="window-close" size={25} color="black" />
              </Text> */}
              <PrimaryButton
                btnStyle={styles.sliderBtnStyle}
                onSubmit={() => this.onFilterSelected(5)}
                btnName={I18n.t('commission.filterDenied')}
                btnTexStyle={styles.sliderBtnTxtStyle}
              />
            </View>
            {/* <View
              style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]}
            /> */}
          </View>
        </SliderView>
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
