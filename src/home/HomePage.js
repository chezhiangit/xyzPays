import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
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
import Images from '../Assets';

const taskListData = [
  {
    productName: 'Cable protal',
  },
  {
    productName: 'Customer Lead',
  },
  {
    productName: 'Cable protal',
  },
  {
    productName: 'Customer Lead',
  },
  {
    productName: 'Cable protal',
  },
  {
    productName: 'Customer Lead',
  },
  {
    productName: 'Cable protal',
  },
  {
    productName: 'Customer Lead',
  },
];

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showTask: false,
      taskCount: 10,
      taskListData: [...taskListData],
      approvedAmt: 100,
      paidAmt: 50,
      pendingAmt: 75,
      deniedAmt: 25,
      visibleTaskIndex: 0,
    };

    this.viewabilityConfig = {
      waitForInteraction: true,
      viewAreaCoveragePercentThreshold: 50,
    };
  }

  onPressTaskButton = () => {
    // this.setState({showTask: true});
  };
  onPressStartTaskButton = () => {
    this.props.navigation.navigate('TaskEntryPage');
  };
  getTaskButtonName = taskCount => {
    const taskBtnPrefix = I18n.t('homePage.taskBtnPrefixText');
    const taskBtnPostfix = I18n.t('homePage.taskBtnPostfixText');
    const taskBtnText = `${taskBtnPrefix} ${taskCount} ${taskBtnPostfix}`;
    return taskBtnText;
  };
  onPressApprovedButton = () => {
    this.props.navigation.navigate('CommissionPage');
  };
  onPressPaidButton = () => {
    this.props.navigation.navigate('CommissionPage');
  };
  onPressPendingButton = () => {
    this.props.navigation.navigate('CommissionPage');
  };
  onPressDeniedButton = () => {
    this.props.navigation.navigate('CommissionPage');
  };

  onViewableItemsChanged = ({viewableItems, changed}) => {
    console.log("Visible items are", viewableItems);
    console.log("Changed in this iteration", changed);
    this.setState({visibleTaskIndex: viewableItems[0].index});
  };

  renderDots = () => this.state.taskListData.map((e,index) => <View style={[styles.dot, this.state.visibleTaskIndex === index && {backgroundColor: 'gray'}]} />);

  renderTaskCard = ({item, index}) => {
    return (
      <View style={styles.taskItemContainer}>
        <View style={styles.taskItemCardContainer}>
          <View style={styles.taskDetailRow}>
            <View style={styles.taskNameRow}>
              <Text style={styles.productName}>{item.productName}</Text>
            </View>
            <View style={styles.productImageContainer}>
              <Image style={styles.productImage} source={Images.productBox} />
            </View>
          </View>
        </View>
        <PrimaryButton
          btnStyle={styles.taskStartBtn}
          onSubmit={this.onPressStartTaskButton}
          btnName={I18n.t('homePage.taskBtnName')}
        />
      </View>
    );
  };

  render() {
    const {navigation} = this.props;
    const taskBtnName = this.getTaskButtonName(this.state.taskCount);
    return (
      <View style={[BaseStyles.baseContainer]}>
        {/* <Header headerName={I18n.t('homePage.headerTitle')} /> */}
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.logedInUserInfo}>
            <Text style={styles.logedInUserHelloText}>
              {I18n.t('homePage.hello')}
            </Text>
            <Text style={[styles.logedInUserHelloText, styles.primaryColor]}>
              {' Harry'}
            </Text>
            <Text style={styles.logedInUserHelloText}>{' Harish'}</Text>
          </View>
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(20)}]} />
          <PrimaryButton
            btnStyle={styles.taskBtn}
            onSubmit={this.onPressTaskButton}
            btnName={taskBtnName}
          />

          <View style={[BaseStyles.emptyHView, {height: heightAdapter(70)}]} />

          <View style={styles.taskListContainer}>
            <FlatList
              pagingEnabled={true}
              onViewableItemsChanged={this.onViewableItemsChanged}
              viewabilityConfig={this.viewabilityConfig}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={styles.taskList}
              data={this.state.taskListData}
              renderItem={this.renderTaskCard}
              keyExtractor={(item, index) => index}
            />
            <View style={styles.scrollIndicator}>
              {this.renderDots()}
              {/* <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} /> */}
            </View>
          </View>

          <View style={[BaseStyles.emptyHView, {height: heightAdapter(140)}]} />

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <PaymentStatusComponent
              onSubmit={this.onPressApprovedButton}
              btnName={this.state.approvedAmt}
              btnStyle={styles.approveBtnStyle}
              textStyle={styles.amountText}
              paymentStatus={I18n.t('homePage.paymentApproved')}
              paymentDescription1={I18n.t(
                'homePage.paymentApprovedDescription1',
              )}
              paymentDescription2={I18n.t(
                'homePage.paymentApprovedDescription2',
              )}
              paymentDescription3={I18n.t(
                'homePage.paymentApprovedDescription3',
              )}
              paymentDescription4={I18n.t(
                'homePage.paymentApprovedDescription4',
              )}
            />
            <PaymentStatusComponent
              onSubmit={this.onPressPaidButton}
              btnName={this.state.paidAmt}
              btnStyle={styles.paidBtnStyle}
              textStyle={styles.amountText}
              paymentStatus={I18n.t('homePage.paymentPaid')}
              paymentDescription1={I18n.t('homePage.paymentPaidDescription1')}
              paymentDescription2={I18n.t('homePage.paymentPaidDescription2')}
              paymentDescription3={I18n.t('homePage.paymentPaidDescription3')}
              paymentDescription4={I18n.t('homePage.paymentPaidDescription4')}
            />
          </View>
          <View style={[BaseStyles.emptyHView, {height: heightAdapter(150)}]} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <PaymentStatusComponent
              onSubmit={this.onPressPendingButton}
              btnName={this.state.pendingAmt}
              btnStyle={styles.pendingBtnStyle}
              textStyle={styles.amountText}
              paymentStatus={I18n.t('homePage.paymentPending')}
              paymentDescription1={I18n.t(
                'homePage.paymentPendingDescription1',
              )}
              paymentDescription2={I18n.t(
                'homePage.paymentPendingDescription2',
              )}
              paymentDescription3={I18n.t(
                'homePage.paymentPendingDescription3',
              )}
              paymentDescription4={I18n.t(
                'homePage.paymentPendingDescription4',
              )}
            />
            <PaymentStatusComponent
              onSubmit={this.onPressDeniedButton}
              btnName={this.state.deniedAmt}
              btnStyle={styles.deniedBtnStyle}
              textStyle={styles.amountText}
              paymentStatus={I18n.t('homePage.paymentDenied')}
              paymentDescription1={I18n.t('homePage.paymentDeniedDescription1')}
              paymentDescription2={I18n.t('homePage.paymentDeniedDescription2')}
              paymentDescription3={I18n.t('homePage.paymentDeniedDescription3')}
              paymentDescription4={I18n.t('homePage.paymentDeniedDescription4')}
            />
          </View>
        </ScrollView>
        <Footer />
        {/* <SliderView
          visible={this.state.showTask}
          animateFrom="right"
          height="100%"
          width={widthAdapter(600)}>
          <View />
        </SliderView> */}
        {/* {this.state.showTask && (
          <TouchableOpacity
            style={styles.transparentView}
            onPress={() => this.setState({showTask: false})}>
            <View style={styles.transparentView} />
          </TouchableOpacity>
        )} */}
      </View>
      // <View style={BaseStyles.baseContainer}>
      //   <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      //     <Text>{I18n.t('homeScreen')}</Text>
      //   </TouchableOpacity>
      // </View>
    );
  }
}

export default HomePage;
