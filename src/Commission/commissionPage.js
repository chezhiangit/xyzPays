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
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
import moment from 'moment';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import {heightAdapter, fontscale} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import Images from '../Assets/index';
import {getDateFilter, getCommissionList} from '../AppStore/commissionActions';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import WarningDialog from '../common/UIComponents/warningDialog';

const commission = [
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Approved',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Pending',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Appoinment confirmation',
    Amount: '6.00',
    Status: 'Denied',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Approved',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Vonage',
    Amount: '6.00',
    Status: 'Pending',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Appoinment confirmation',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Customer Lead',
    Amount: '6.00',
    Status: 'Paid',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Appoinment confirmation',
    Amount: '6.00',
    Status: 'Approved',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Vonage',
    Amount: '6.00',
    Status: 'Pending',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Vonage',
    Amount: '6.00',
    Status: 'Denied',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Vonage',
    Amount: '6.00',
    Status: 'Approved',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
  },
  {
    commissionName: 'Appoinment confirmation',
    Amount: '6.00',
    Status: 'Pending',
    PaymentDate: new Date(),
    AccountNo: 'xxxxxxxx567',
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
class CommissionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDateRangeValue: this.props.dateFilter[4]?.Text,
      selectedDateRangeIndex: 4,
      isSegmentVisible: false,
      commissionData: [...commission],
      dateFilterServiceDone: false,
      commissionListServiceDone: false,
      showDlg: false,
      dlgMsg: '',
    };
    // this.show=false;
    this.translate = new Animated.Value(0);
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.dateFilterServiceDone || state.commissionListServiceDone) {
      return {
        isLoading: true,
      };
    }
    return {};
  }

  componentDidMount() {
    this.props.getDateFilter(
      this.onGetDateFilterSuccess,
      this.onGetDateFilterFailed,
    );
  }

  onGetDateFilterSuccess = () => {
    console.log('getDateFilter success');
    this.setState({
      isLoading: false,
      dateFilterServiceDone: true,
      selectedDateRangeValue: this.props.dateFilter[4]?.Text,
    });
  };

  onGetDateFilterFailed = errorMsg => {
    console.log('getDateFilter failed');
    this.setState({
      isLoading: false,
      dateFilterServiceDone: true,
      selectedDateRangeValue: '',
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  onGetCommissionLisSuccess = () => {
    console.log('getDateFilter success');
    this.setState({isLoading: false, commissionListServiceDone: false});
  };

  onGetCommissionLisFailed = errorMsg => {
    console.log('getDateFilter failed');
    this.setState({
      isLoading: false,
      commissionListServiceDone: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  getCommissionListData = () => {
    const payload = {
      SelectedDateRange: this.state.selectedDateRangeValue,
      TxnStatusType: 'Paid',
    };
    this.props.getCommissionList(
      payload.SelectedDateRange,
      payload.TxnStatusType,
      this.onGetCommissionLisSuccess,
      this.onGetCommissionLisFailed,
    );
  };

  onSegmentItemSelected = (item, index) => {
    this.toggleDropdown(false);
    this.setState(
      {
        selectedDateRangeValue: item.Text,
        selectedDateRangeIndex: index,
        commissionListServiceDone: true,
      },
      () => this.getCommissionListData(),
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
          <View style={styles.commissionType}>
            <Text style={styles.commissionTypeTxt}>{item.commissionName}</Text>
          </View>
          <View style={styles.amountStatusContainer}>
            <Text style={styles.amountLabel}>
              {I18n.t('commission.amount')}{' '}
            </Text>
            <Text style={styles.dollar}>
              {I18n.t('commission.currencySymbol')}
            </Text>
            <Text style={styles.amount}>{item.Amount}, </Text>
            <Text style={styles.statusLabel}>
              {I18n.t('commission.status')}{' '}
            </Text>
            <Text style={styles.status}>{item.Status}</Text>
          </View>
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]} />
          <View style={styles.paymentDateContainer}>
            <Text style={styles.paymentDateLabel}>
              {I18n.t('commission.paymentDate')}
            </Text>
            <Text style={styles.paymentDate}>
              {moment().format('MM/DD/YYYY')}
            </Text>
          </View>
          <View style={styles.accountNoContainer}>
            <Text style={styles.accountNoLabel}>
              {I18n.t('commission.accountNo')}
            </Text>
            <Text style={styles.accountNo}>xxxxxxxx567</Text>
          </View>
          <View style={styles.reasonContainer}>
            <Text style={styles.reasonLabel}>
              {I18n.t('commission.reason')}
            </Text>
            <Text style={styles.reasonLabel}>{'Test reason'}</Text>
          </View>
        </View>
        <View style={styles.commissionImageContainer}>
          <Image style={styles.commissionImage} source={Images.productBox} />
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

  render() {
    return (
      <View style={BaseStyles.baseContainer}>
        <View style={styles.commissionContainer}>
          <View style={BaseStyles.userInfo}>
            <Text style={BaseStyles.userInfoTxt}>
              {I18n.t('commission.userInfo')}
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
                      size={fontscale(20)}
                      color={Colors.primaryAppColor}
                    />
                  </Text>
                  <Text style={styles.selectedValue}>
                    {this.state.selectedDateRangeValue}
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
                // data={segmentationData}
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
            data={this.state.commissionData}
            renderItem={this.renderCommissionCard}
            keyExtractor={(item, index) => index}
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
  console.log('state from commission page ....', state);
  return {
    dateFilter: state.commission.dateFilter,
  };
};

const mapDispatchToProps = dispatch => ({
  getDateFilter: (onSuccesscallback, onErrocallback) =>
    dispatch(getDateFilter(onSuccesscallback, onErrocallback)),
  getCommissionList: (
    SelectedDateRange,
    TxnStatusType,
    onSuccesscallback,
    onErrocallback,
  ) =>
    dispatch(
      getCommissionList(
        SelectedDateRange,
        TxnStatusType,
        onSuccesscallback,
        onErrocallback,
      ),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommissionPage);

// export default CommissionPage;
