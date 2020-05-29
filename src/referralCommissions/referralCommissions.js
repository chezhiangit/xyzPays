import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
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
import NoRecordsFoundView from '../common/UIComponents/NoRecordsFoundView/noRecordsFoundView';
import {heightAdapter} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import WarningDialog from '../common/UIComponents/warningDialog';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// import {displayPhoneNumber} from '../uttils/UtilityFunctions';
import {
  getReferralCommissionList,
  getReferralDateFilter,
} from '../AppStore/referralActions';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import SliderView from '../common/UIComponents/SliderView';

const bgClore = {
  backgroundColor: '#FF6600',
};

class ReferralCommissions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDateFilterValue: '',
      selectedDateFilterIndex: 0,
      isSegmentVisible: false,
      commissionData: [],
      segmentBorder: 0,
      showDlg: false,
      dlgMsg: '',
      isLoading: false,
      showFilter: false,
      selectedStatusFilterIndex: 4,
    };
    // this.show=false;
    this.translate = new Animated.Value(0);
  }

  static getDerivedStateFromProps(props, state) {
    // if (props.dateFilter.length === 0) {
    //   return {
    //     isLoading: true,
    //   };
    // }
    // if (state.selectedValue === '') {
    //   return {selectedValue: props.dateFilter[4]?.Text};
    // }
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
      selectedDateFilterValue: this.props.dateFilter[index].Text,
      selectedDateFilterIndex: index,
      isLoading: true,
    });
    this.props.getReferralCommissionList(
      index,
      this.state.selectedStatusFilterIndex,
      this.onReferralCommissionSuccess,
      this.onReferralCommissionFailed,
    );
  };
  renderSegmentItem = ({item, index}) => (
    <TouchableWithoutFeedback
      onPress={() => this.onSegmentItemSelected(item, index)}>
      <View
        style={[
          styles.segmentItemRow,
          this.state.selectedDateFilterIndex === index && bgClore,
        ]}>
        <Text
          style={[
            styles.segmentItemText,
            this.state.selectedDateFilterIndex === index && {color: 'white'},
          ]}>
          {item.Text}
        </Text>
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

  renderNoRecordsFound = () => {
    return <NoRecordsFoundView />;
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
    console.log('onDateFilterSuccess success');
    this.setState({
      selectedDateFilterValue: this.props.dateFilter[
        this.state.selectedDateFilterIndex
      ].Text,
    });
    this.props.getReferralCommissionList(
      this.state.selectedDateFilterIndex,
      this.state.selectedStatusFilterIndex,
      this.onReferralCommissionSuccess,
      this.onReferralCommissionFailed,
    );
  };

  onDateFilterFailed = errorMsg => {
    console.log('onDateFilterFailed fails');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  onFilterSelected = selectedStatusFilterIndex => {
    this.setState(
      {
        selectedStatusFilterIndex,
        showFilter: false,
        // commissionListServiceDone: true,
        isLoading: true,
      },
      () =>
        this.props.getReferralCommissionList(
          this.state.selectedDateFilterIndex,
          selectedStatusFilterIndex,
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
                      {this.state.selectedDateFilterValue}
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
          {this.props.referralCommissionList.length > 0 ? (
            <FlatList
              style={styles.commissionList}
              data={this.props.referralCommissionList}
              renderItem={this.renderCommissionCard}
              keyExtractor={(item, index) => index}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            this.renderNoRecordsFound()
          )}
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
            <View
              style={[
                styles.sliderBtnContainer,
                this.state.selectedStatusFilterIndex === 4 && bgClore,
              ]}>
              <PrimaryButton
                btnStyle={[
                  styles.sliderBtnStyle,
                  this.state.selectedStatusFilterIndex === 4 && bgClore,
                ]}
                onSubmit={() => this.onFilterSelected(4)}
                btnName={I18n.t('commission.filterAll')}
                btnTexStyle={styles.sliderBtnTxtStyle}
              />
            </View>
            <View
              style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]}
            />
            <View
              style={[
                styles.sliderBtnContainer,
                this.state.selectedStatusFilterIndex === 2 && bgClore,
              ]}>
              <PrimaryButton
                btnStyle={[
                  styles.sliderBtnStyle,
                  this.state.selectedStatusFilterIndex === 2 && bgClore,
                ]}
                onSubmit={() => this.onFilterSelected(2)}
                btnName={I18n.t('commission.filterPaid')}
                btnTexStyle={styles.sliderBtnTxtStyle}
              />
            </View>
            <View
              style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]}
            />
            <View
              style={[
                styles.sliderBtnContainer,
                this.state.selectedStatusFilterIndex === 1 && bgClore,
              ]}>
              <PrimaryButton
                btnStyle={[
                  styles.sliderBtnStyle,
                  this.state.selectedStatusFilterIndex === 1 && bgClore,
                ]}
                onSubmit={() => this.onFilterSelected(1)}
                btnName={I18n.t('commission.filterPending')}
                btnTexStyle={styles.sliderBtnTxtStyle}
              />
            </View>
            <View
              style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]}
            />
            <View
              style={[
                styles.sliderBtnContainer,
                this.state.selectedStatusFilterIndex === 5 && bgClore,
              ]}>
              <PrimaryButton
                btnStyle={[
                  styles.sliderBtnStyle,
                  this.state.selectedStatusFilterIndex === 5 && bgClore,
                ]}
                onSubmit={() => this.onFilterSelected(5)}
                btnName={I18n.t('commission.filterDenied')}
                btnTexStyle={styles.sliderBtnTxtStyle}
              />
            </View>
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
