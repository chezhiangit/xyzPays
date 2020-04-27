import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Image,
  TextInput,
  Animated,
  Easing,
} from 'react-native';
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
import I18n from '../localization/i18n';
import Header from '../common/UIComponents/Header';
import Footer from '../common/UIComponents/Footer';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import {heightAdapter, widthAdapter} from '../uttils/adapterUtil';
import PaymentStatusComponent from '../common/UIComponents/PaymentStatusContainer/PaymentStatusComponent';
import SliderView from '../common/UIComponents/SliderView';
import Images from '../Assets/index';
import moment from 'moment';
import WarningDialog from '../common/UIComponents/warningDialog';

const payoutData = [
  {
    payoutStatus: 'SUCCESS',
    paymentDate: moment().format('MM/DD/YYYY'),
    paymentTime: moment().format('HH:MM:SS'),
    amount: '6.00',
  },
  {
    payoutStatus: 'PENDING',
    paymentDate: moment().format('MM/DD/YYYY'),
    paymentTime: moment().format('HH:MM:SS'),
    amount: '6.00',
  },
  {
    payoutStatus: 'SUCCESS',
    paymentDate: moment().format('MM/DD/YYYY'),
    paymentTime: moment().format('HH:MM:SS'),
    amount: '6.00',
  },
  {
    payoutStatus: 'PENDING',
    paymentDate: moment().format('MM/DD/YYYY'),
    paymentTime: moment().format('HH:MM:SS'),
    amount: '6.00',
  },
  {
    payoutStatus: 'SUCCESS',
    paymentDate: moment().format('MM/DD/YYYY'),
    paymentTime: moment().format('HH:MM:SS'),
    amount: '6.00',
  },
  {
    payoutStatus: 'PENDING',
    paymentDate: moment().format('MM/DD/YYYY'),
    paymentTime: moment().format('HH:MM:SS'),
    amount: '6.00',
  },
  {
    payoutStatus: 'SUCCESS',
    paymentDate: moment().format('MM/DD/YYYY'),
    paymentTime: moment().format('HH:MM:SS'),
    amount: '6.00',
  },
  {
    payoutStatus: 'PENDING',
    paymentDate: moment().format('MM/DD/YYYY'),
    paymentTime: moment().format('HH:MM:SS'),
    amount: '6.00',
  },
  {
    payoutStatus: 'SUCCESS',
    paymentDate: moment().format('MM/DD/YYYY'),
    paymentTime: moment().format('HH:MM:SS'),
    amount: '6.00',
  },
  {
    payoutStatus: 'PENDING',
    paymentDate: moment().format('MM/DD/YYYY'),
    paymentTime: moment().format('HH:MM:SS'),
    amount: '6.00',
  },
  {
    payoutStatus: 'SUCCESS',
    paymentDate: moment().format('MM/DD/YYYY'),
    paymentTime: moment().format('HH:MM:SS'),
    amount: '6.00',
  },
  {
    payoutStatus: 'PENDING',
    paymentDate: moment().format('MM/DD/YYYY'),
    paymentTime: moment().format('HH:MM:SS'),
    amount: '6.00',
  },
];
const segmentationData = [
  I18n.t('commission.dropdownAll'),
  I18n.t('commission.dropdown7Days'),
  I18n.t('commission.dropdownLast2Weeks'),
  I18n.t('commission.dropdownLast3Weeks'),
  I18n.t('commission.dropdownLast1Month'),
  I18n.t('commission.dropdownLast3Months'),
];
class PayoutHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payoutStatus: 'SUCCESS',
      amount: '6.00',
      payoutDate: moment().format('MM/DD/YYYY'),
      payoutTime: moment().format('hh:mm:ss'),
      selectedValue: segmentationData[4],
      selectedIndex: 4,
      isSegmentVisible: false,
      segmentBorder: 0,
      availableAmount: 0,
      emailId: 'chezhian.p@gmail.com',
      payoutData: [...payoutData],
      notEnoughAmountTxt:
        'Cannot Tranfer To PayPal Account. Pending Amount is less than Minimum Withdraw Amount',
      showDlg: false,
      dlgMsg: '',
    };
    this.translate = new Animated.Value(0);
  }

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

  onSegmentItemSelected = (item, index) => {
    this.toggleDropdown(false);
    this.setState({selectedValue: item, selectedIndex: index});
  };

  renderSegmentItem = ({item, index}) => (
    <TouchableOpacity onPress={() => this.onSegmentItemSelected(item, index)}>
      <View style={styles.segmentItemRow}>
        <Text style={styles.segmentItemText}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  renderPayoutCard = ({item, index}) => {
    return (
      <View style={styles.payoutItemContainer}>
        <View style={styles.payoutStatusRow}>
          <View style={styles.payoutLeftView}>
            <Text style={styles.payoutStatusLabel}>Payout Status: </Text>
            <Text style={styles.payoutStatus}>{item.payoutStatus}</Text>
          </View>
          <View style={styles.payoutRightView}>
            <Text style={[styles.payoutStatusLabel, {color: 'green'}]}>$</Text>
          </View>
        </View>
        <View style={styles.dateTimeAmountRow}>
          <View style={styles.payoutLeftView}>
            <View style={styles.dateRow}>
              <Image style={styles.imageStyle} source={''} />
              <Text style={styles.dateTimeTxt}>{item.paymentDate}</Text>
            </View>
            <View style={[styles.dateRow, {marginLeft: widthAdapter(30)}]}>
              <Image style={styles.imageStyle} source={''} />
              <Text style={styles.dateTimeTxt}>{item.paymentTime}</Text>
            </View>
          </View>
          <View style={styles.payoutRightView}>
            <Text style={styles.payoutStatusLabel}>{item.amount}</Text>
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

  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        <View style={styles.payoutHistoryContainer}>
          <View style={BaseStyles.userInfo}>
            <Text style={BaseStyles.userInfoTxt}>
              {I18n.t('payoutHistory.userInfo')}
            </Text>
          </View>
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]} />
          <View style={styles.availableAmount}>
            <Text style={styles.availableAmountTxt}>
              {`$ ${this.state.availableAmount}`}
            </Text>
            <View
              style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]}
            />
            <TextInput
              style={styles.notEnoughAmountTxt}
              value={this.state.notEnoughAmountTxt + ' $1'}
              multiline
              editable={false}
            />
          </View>
          {this.state.availableAmount > 0 && (
            <>
              <View
                style={[BaseStyles.emptyHView, {height: heightAdapter(70)}]}
              />
              <PrimaryButton
                btnStyle={styles.transferBtn}
                onSubmit={this.onPressTaskButton}
                btnName={I18n.t('payoutHistory.transferBtnName')}
              />
              <View
                style={[BaseStyles.emptyHView, {height: heightAdapter(70)}]}
              />
              <View style={styles.logedInUserInfo}>
                <Text style={styles.logedInUserHelloText}>
                  {I18n.t('payoutHistory.emailId')}
                </Text>
                {/* <Text style={[styles.logedInUserHelloText, styles.primaryColor]}>
              {' Harry'}
            </Text> */}
                <Text style={styles.logedInUserHelloText}>
                  {this.state.emailId}
                </Text>
              </View>
            </>
          )}
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(70)}]} />
          <View style={styles.dropdownContainer}>
            <TouchableWithoutFeedback
              style={styles.selectionBox}
              onPress={() => this.toggleDropdown(!this.state.isSegmentVisible)}>
              <View style={styles.selectionBox}>
                <Image style={styles.image} source={''} />
                <Text style={styles.selectedValue}>
                  {this.state.selectedValue}
                </Text>
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
                data={segmentationData}
                renderItem={this.renderSegmentItem}
                keyExtractor={(item, index) => index}
              />
            </Animated.View>
          </View>
          {this.state.isSegmentVisible && (
            <TouchableOpacity
              style={styles.transparentView}
              onPress={() => this.toggleDropdown(false)}>
              <View style={styles.transparentView} />
            </TouchableOpacity>
          )}
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.payoutList}
            data={this.state.payoutData}
            renderItem={this.renderPayoutCard}
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
      </View>
    );
  }
}

export default PayoutHistory;
