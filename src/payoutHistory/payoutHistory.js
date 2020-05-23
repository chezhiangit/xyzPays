import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  // TouchableWithoutFeedback,
  FlatList,
  Image,
  TextInput,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
import I18n from '../localization/i18n';
// import Header from '../common/UIComponents/Header';
import Footer from '../common/UIComponents/Footer';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import {heightAdapter, widthAdapter, fontscale} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
// import PaymentStatusComponent from '../common/UIComponents/PaymentStatusContainer/PaymentStatusComponent';
// import SliderView from '../common/UIComponents/SliderView';
// import Images from '../Assets/index';
// import moment from 'moment';
import WarningDialog from '../common/UIComponents/warningDialog';
import {
  getPayoutDateFilter,
  getPayoutHistoryList,
  getPayoutDetails,
  transferToPaypal,
} from '../AppStore/payoutActions';

const bgClore = {
  backgroundColor: '#FF6600',
};

class PayoutHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payoutStatus: 'SUCCESS',
      amount: '6.00',
      selectedValue: '',
      selectedIndex: 4,
      isSegmentVisible: false,
      segmentBorder: 0,
      availableAmount: 0,
      notEnoughAmountTxt: I18n.t('payoutHistory.notEnoughAmountTxt'),
      showDlg: false,
      dlgMsg: '',
      isLoading: false,
      selectedPayoutItemIndex: -1,
    };
    this.translate = new Animated.Value(0);
    this.totalAmount = 0;
  }

  static getDerivedStateFromProps(props, state) {
    // if (props.dateFilter.length === 0) {
    //   return {
    //     isLoading: true,
    //   };
    // } else if (state.selectedValue === '') {
    //   return {selectedValue: props.dateFilter[4]?.Text};
    // }
    return {};
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      this.setState({isLoading: true});
      this.props.getPayoutDateFilter(
        this.onPayoutDateFilterSuccess,
        this.onPayoutDateFilterFailed,
      );
    });
  }

  onPayoutDetailsSuccess = () => {
    console.log('PayoutDetails success');
    this.setState({isLoading: false});
  };

  onPayoutDetailsFailed = errorMsg => {
    console.log('PayoutDetails failed');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  onPayoutHistoryListSuccess = () => {
    console.log('PayoutHistoryList success');
    // this.setState({isLoading: false});
    this.props.getPayoutDetails(
      this.onPayoutDetailsSuccess,
      this.onPayoutDetailsFailed,
    );
  };

  onPayoutHistoryListFailed = errorMsg => {
    console.log('PayoutHistoryList failed');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  onPayoutDateFilterSuccess = () => {
    console.log('payout date filter success');
    // this.setState({isLoading: false});
    this.props.getPayoutHistoryList(
      0,
      this.onPayoutHistoryListSuccess,
      this.onPayoutHistoryListFailed,
    );

    this.setState({selectedValue: this.props.dateFilter[4]?.Text});
  };

  onPayoutDateFilterFailed = errorMsg => {
    console.log('payout date filter failed');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

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
      }).start();
    } else {
      Animated.timing(this.translate, {
        toValue: 0,
        duration: 400,
        easing: Easing.linear,
      }).start(() => this.setState({segmentBorder: 0}));
    }
  };

  onSegmentItemSelected = (item, index) => {
    console.log('selected item ...', item);
    this.toggleDropdown(false);
    this.setState(
      {selectedValue: item.Text, selectedIndex: item.Value, isLoading: true},
      () =>
        this.props.getPayoutHistoryList(
          item.Value,
          this.onPayoutHistoryListSuccess,
          this.onPayoutHistoryListFailed,
        ),
    );
  };

  renderSegmentItem = ({item, index}) => (
    <TouchableWithoutFeedback
      onPress={() => this.onSegmentItemSelected(item, index)}>
      <View
        style={[
          styles.segmentItemRow,
          this.state.selectedIndex === index && bgClore,
        ]}>
        <Text
          style={[
            styles.segmentItemText,
            this.state.selectedIndex === index && {color: 'white'},
          ]}>
          {item.Text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );

  renderPayoutHistoryItemDetails = (item, index) => {
    this.totalAmount = this.totalAmount + Number(item.ComAmount);
    console.log('renderPayoutHistoryItemDetails .....', item);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <View style={styles.leftViewContainer}>
            <View style={styles.productView}>
              <View style={styles.dotWithTick}>
                <Text>
                  <Icon
                    name="check-circle"
                    size={fontscale(20)}
                    color={Colors.primaryAppColor}
                  />
                </Text>
              </View>
              <Text style={styles.productNameTxt}>{item.ProductName}</Text>
            </View>
            <View style={styles.amountStatusContainer}>
              <Text style={styles.amount}>{I18n.t('trending.amount')}</Text>
              <Text style={styles.amount}>
                {I18n.t('trending.currencySymbol')}
              </Text>
              <Text style={styles.amount}>{item.ComAmount}</Text>
            </View>
            <View style={styles.skuContainer}>
              <Text style={styles.skuLabel}>{I18n.t('trending.sku')}</Text>
              <Text style={styles.skuLabel}>{item.SKU}</Text>
            </View>
          </View>
          <View style={styles.rightViewContainer}>
            <Image
              source={{
                isStatic: true,
                uri: item.ProductPicture,
                method: 'GET',
                // headers: {
                //   clubId: NetTool.clubId,
                //   'Ocp-Apim-Subscription-Key': NetTool.subscriptionKey,
                // },
              }}
              style={styles.trendingImage}
            />
          </View>
        </View>
        <View style={styles.transMessageContainer}>
          <Text style={styles.transMessage}>
            {I18n.t('trending.txnMessage')} {item.TxnMessage}
          </Text>
        </View>
      </View>
    );
  };

  onPayoutItemSelected = index => {
    if (this.state.selectedPayoutItemIndex === index) {
      this.setState({selectedPayoutItemIndex: -1});
    } else {
      this.setState({selectedPayoutItemIndex: index});
    }
  };

  renderPayoutCard = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity onPress={() => this.onPayoutItemSelected(index)}>
          <View style={styles.payoutItemContainer}>
            <View style={styles.payoutStatusRow}>
              <View style={styles.payoutLeftView}>
                <Text style={styles.payoutStatusLabel}>
                  {I18n.t('payoutHistory.payoutStatus')}{' '}
                </Text>
                <Text style={styles.payoutStatus}>{item.PayoutStatus}</Text>
              </View>
              <View style={styles.payoutRightView}>
                <Text style={[styles.payoutStatusLabel, {color: 'green'}]}>
                  $
                </Text>
              </View>
            </View>
            <View style={styles.dateTimeAmountRow}>
              <View style={styles.payoutLeftView}>
                <View style={styles.dateRow}>
                  {/* <Image style={styles.imageStyle} source={''} /> */}
                  <Text>
                    <Icon name="calendar" size={fontscale(12)} color={'gray'} />
                  </Text>
                  <Text style={styles.dateTimeTxt}>{item.PayoutDate}</Text>
                </View>
                <View style={[styles.dateRow, {marginLeft: widthAdapter(30)}]}>
                  {/* <Image style={styles.imageStyle} source={''} /> */}
                  <Text>
                    <Icon name="clock-o" size={fontscale(12)} color={'gray'} />
                  </Text>
                  <Text style={styles.dateTimeTxt}>{item.PayoutTime}</Text>
                </View>
              </View>
              <View style={styles.payoutRightView}>
                <Text style={styles.payoutStatusLabel}>
                  {item.PayoutAmount}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {this.state.selectedPayoutItemIndex === index && (
          <View style={styles.payoutItemDetails}>
            {item.PayoutProducts.map(this.renderPayoutHistoryItemDetails)}
            <View style={styles.payoutItemDetailsTotalView}>
              <Text style={styles.payoutItemDetailsTotal}>
                {I18n.t('payoutHistory.totalAmount')}{' '}
              </Text>
              <Text style={styles.payoutItemDetailsTotalAmount}>
                ${this.totalAmount.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  onTransferMoney = () => {
    this.setState({isLoading: true});
    this.props.transferToPaypal(
      this.onTransferToPaypalSuccess,
      this.onTransferToPapalFailed,
    );
  };

  onTransferToPaypalSuccess = () => {
    this.setState({isLoading: false});
  };

  onTransferToPapalFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
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
              {`$ ${this.props.payoutDetails.TotalPayoutAmount}`}
            </Text>
            {Number(this.props.payoutDetails.TotalPayoutAmount) === 0 && (
              <>
                <View
                  style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]}
                />

                <TextInput
                  style={styles.notEnoughAmountTxt}
                  value={this.state.notEnoughAmountTxt + ' $1'}
                  multiline
                  editable={false}
                />
              </>
            )}
          </View>
          {Number(this.props.payoutDetails.TotalPayoutAmount) > 0 && (
            <>
              <View
                style={[BaseStyles.emptyHView, {height: heightAdapter(70)}]}
              />
              <PrimaryButton
                btnStyle={styles.transferBtn}
                onSubmit={this.onTransferMoney}
                btnName={I18n.t('payoutHistory.transferBtnName')}
              />
              {/* <View
                style={[BaseStyles.emptyHView, {height: heightAdapter(70)}]}
              /> */}
              <View style={styles.logedInUserInfo}>
                <Text style={styles.logedInUserHelloText}>
                  {I18n.t('payoutHistory.emailId')}
                </Text>
                <Text style={styles.logedInUserHelloText}>
                  {this.props.payoutDetails.PayPalEmail}
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
            <TouchableOpacity
              style={styles.transparentView}
              onPress={() => this.toggleDropdown(false)}>
              <View style={styles.transparentView} />
            </TouchableOpacity>
          )}
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.payoutList}
            data={this.props.payoutHistoryList}
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
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state from payout page ....', state);
  return {
    dateFilter: state.payout.dateFilter,
    payoutHistoryList: state.payout.payoutHistoryList,
    payoutDetails: state.payout.payoutDetails,
  };
};

const mapDispatchToProps = dispatch => ({
  transferToPaypal: (onSuccesscallback, onErrocallback) =>
    dispatch(transferToPaypal(onSuccesscallback, onErrocallback)),
  getPayoutDetails: (onSuccesscallback, onErrocallback) =>
    dispatch(getPayoutDetails(onSuccesscallback, onErrocallback)),
  getPayoutDateFilter: (onSuccesscallback, onErrocallback) =>
    dispatch(getPayoutDateFilter(onSuccesscallback, onErrocallback)),
  getPayoutHistoryList: (
    SelectedDateRange,
    onSuccesscallback,
    onErrocallback,
  ) =>
    dispatch(
      getPayoutHistoryList(
        SelectedDateRange,
        onSuccesscallback,
        onErrocallback,
      ),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PayoutHistory);

// export default PayoutHistory;
