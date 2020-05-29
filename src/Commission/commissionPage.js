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
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
import moment from 'moment';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import NoRecordsFoundView from '../common/UIComponents/NoRecordsFoundView/noRecordsFoundView';
import {heightAdapter, fontscale} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import Images from '../Assets/index';
import {getDateFilter, getCommissionList} from '../AppStore/commissionActions';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import WarningDialog from '../common/UIComponents/warningDialog';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import SliderView from '../common/UIComponents/SliderView';

const bgClore = {
  backgroundColor: '#FF6600',
};

class CommissionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDateRangeValue: this.props.dateFilter[4]?.Text,
      selectedDateRangeIndex: 4,
      isSegmentVisible: false,
      // commissionData: [],
      dateFilterServiceDone: false,
      commissionListServiceDone: false,
      showDlg: false,
      dlgMsg: '',
      showFilter: false,
      selectedFilterIndex: '', // All
      isLoading: false,
    };
    // this.show=false;
    this.translate = new Animated.Value(0);
  }

  static getDerivedStateFromProps(props, state) {
    // if (!state.dateFilterServiceDone || state.commissionListServiceDone) {
    //   return {
    //     isLoading: true,
    //   };
    // }
    return {};
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      this.setState({
        isLoading: true,
        selectedFilterIndex:
          this.props.route.params?.paymentStatus === undefined
            ? ''
            : this.props.route.params?.paymentStatus,
      });
      this.props.getDateFilter(
        this.onGetDateFilterSuccess,
        this.onGetDateFilterFailed,
      );
      const payload = {
        SelectedDateRange: this.state.selectedDateRangeIndex,
        TxnStatusType:
          this.props.route.params?.paymentStatus === undefined
            ? ''
            : this.props.route.params?.paymentStatus,
      };
      this.props.getCommissionList(
        payload.SelectedDateRange,
        payload.TxnStatusType,
        this.onGetCommissionLisSuccess,
        this.onGetCommissionLisFailed,
      );
    });
  }

  onGetDateFilterSuccess = () => {
    console.log('getDateFilter success');
    this.setState({
      isLoading: false,
      dateFilterServiceDone: true,
      selectedDateRangeValue: this.props.dateFilter[
        this.state.selectedDateRangeIndex
      ]?.Text,
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
      SelectedDateRange: this.state.selectedDateRangeIndex,
      TxnStatusType: this.state.selectedFilterIndex,
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
        isLoading: true,
      },
      () => this.getCommissionListData(),
    );
  };
  renderSegmentItem = ({item, index}) => (
    <TouchableWithoutFeedback
      onPress={() => this.onSegmentItemSelected(item, index)}>
      <View
        style={[
          styles.segmentItemRow,
          this.state.selectedDateRangeIndex === index && bgClore,
        ]}>
        <Text
          style={[
            styles.segmentItemText,
            this.state.selectedDateRangeIndex === index && {color: 'white'},
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
          <View style={styles.commissionType}>
            <Text style={styles.commissionTypeTxt}>{item.ProductName}</Text>
          </View>
          <View style={styles.amountStatusContainer}>
            <Text style={styles.amountLabel}>
              {I18n.t('commission.amount')}{' '}
            </Text>
            <Text style={styles.dollar}>
              {I18n.t('commission.currencySymbol')}
            </Text>
            <Text style={styles.amount}>{item.Amount}, </Text>
          </View>
          <View style={styles.amountStatusContainer}>
            <Text style={styles.statusLabel}>
              {I18n.t('commission.status')}{' '}
            </Text>
            <Text style={styles.status}>{item.Status}</Text>
          </View>
          {/* <View style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]} /> */}
          <View style={styles.paymentDateContainer}>
            <Text style={styles.paymentDateLabel}>
              {I18n.t('commission.paymentDate')}
            </Text>
            <Text style={styles.paymentDate}>
              {moment(item['Payment Date']).format('MM/DD/YYYY')}
            </Text>
          </View>
          <View style={styles.accountNoContainer}>
            <Text style={styles.accountNoLabel}>
              {I18n.t('commission.accountNo')}
            </Text>
            <Text style={styles.accountNo}>{item['Acc No']}</Text>
          </View>
          {item.Status === 'Denied' && (
            <View style={styles.reasonContainer}>
              <Text style={styles.reasonLabel}>
                {I18n.t('commission.reason')}
              </Text>
              <Text style={styles.reasonLabel}>{item['Denial Reason']}</Text>
            </View>
          )}
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

  onFilterSelected = selectedFilterIndex => {
    this.setState(
      {
        selectedFilterIndex,
        showFilter: false,
        commissionListServiceDone: true,
        isLoading: true,
      },
      () => this.getCommissionListData(),
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
              {I18n.t('commission.userInfo')}
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
          {this.props.commissionList.length > 0 ? (
            <FlatList
              style={styles.commissionList}
              data={this.props.commissionList}
              renderItem={this.renderCommissionCard}
              keyExtractor={(item, index) => index}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            this.renderNoRecordsFound()
          )}
          {(this.state.isSegmentVisible || this.state.showFilter) && (
            <TouchableOpacity
              style={styles.transparentView}
              onPress={() => {
                this.toggleDropdown(false);
                this.toggleFilter(false);
              }}>
              <View style={styles.transparentView} />
            </TouchableOpacity>
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
          height={heightAdapter(400)}
          width="100%">
          <View style={styles.sliderContainer}>
            <View
              style={[
                styles.sliderBtnContainer,
                this.state.selectedFilterIndex === '' && bgClore,
              ]}>
              <PrimaryButton
                btnStyle={[
                  styles.sliderBtnStyle,
                  this.state.selectedFilterIndex === '' && bgClore,
                ]}
                onSubmit={() => this.onFilterSelected('')}
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
                this.state.selectedFilterIndex === 2 && bgClore,
              ]}>
              <PrimaryButton
                btnStyle={[
                  styles.sliderBtnStyle,
                  this.state.selectedFilterIndex === 2 && bgClore,
                ]}
                onSubmit={() => this.onFilterSelected(2)}
                btnName={I18n.t('commission.filterApproved')}
                btnTexStyle={styles.sliderBtnTxtStyle}
              />
            </View>
            <View
              style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]}
            />
            <View
              style={[
                styles.sliderBtnContainer,
                this.state.selectedFilterIndex === 4 && bgClore,
              ]}>
              <PrimaryButton
                btnStyle={[
                  styles.sliderBtnStyle,
                  this.state.selectedFilterIndex === 4 && bgClore,
                ]}
                onSubmit={() => this.onFilterSelected(4)}
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
                this.state.selectedFilterIndex === 1 && bgClore,
              ]}>
              <PrimaryButton
                btnStyle={[
                  styles.sliderBtnStyle,
                  this.state.selectedFilterIndex === 1 && bgClore,
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
                this.state.selectedFilterIndex === 5 && bgClore,
              ]}>
              <PrimaryButton
                btnStyle={[
                  styles.sliderBtnStyle,
                  this.state.selectedFilterIndex === 5 && bgClore,
                ]}
                onSubmit={() => this.onFilterSelected(5)}
                btnName={I18n.t('commission.filterDenied')}
                btnTexStyle={styles.sliderBtnTxtStyle}
              />
            </View>
          </View>
        </SliderView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state from commission page ....', state);
  return {
    dateFilter: state.commission.dateFilter,
    commissionList: state.commission.commissionList,
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
