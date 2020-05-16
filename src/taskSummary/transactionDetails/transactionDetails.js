import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
// import {Dropdown} from 'react-native-material-dropdown';
import BaseStyles from '../../common/BaseStyles';
import I18n from '../../localization/i18n';
import Footer from '../../common/UIComponents/Footer';
// import TextInputComponent from '../common/UIComponents/TextInputComponent';
// import CheckBoxComponent from '../common/UIComponents/CheckBox/CheckBox';
// import RadioButton from '../common/UIComponents/RadioButtom/radioButton';
// import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
// import PrimaryButton from '../common/UIComponents/PrimaryButton';
import Images from '../../Assets/index';
import styles from './styles';
import {widthAdapter, fontscale, heightAdapter} from '../../uttils/adapterUtil';
import Colors from '../../uttils/Colors';
import WarningDialog from '../../common/UIComponents/warningDialog';
import LinkBtnComponent from '../../common/UIComponents/LinkBtn/LinkBtn';
import RoundButton from '../../common/UIComponents/RoundButton';
import {
  getEventBasedTaskList,
  getFilterForEventBasedTaskList,
  loadLastFiveTransactions,
} from '../../AppStore/eventBasedTaskActions';
import ReadOnlyView from '../../common/UIComponents/readOnlyView/ReadOnlyView';
import moment from 'moment';

class TransactionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDlg: false,
      dlgMsg: '',
      isLoading: false,
      isFilter: false,
      isTaskList: false,
    };
  }

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  renderTopRow = () => (
    <View style={styles.topView}>
      <View style={styles.leftView}>
        <View style={styles.transIdView}>
          <Text style={styles.transIdLabel}>Trans Id</Text>
          <Text style={styles.transIdTxt}>12345</Text>
        </View>
        <View style={styles.dateTimeAmountRow}>
          <View style={styles.dateTimeLeftView}>
            <View style={styles.dateRow}>
              <Text>
                <Icon name="calendar" size={fontscale(12)} color={'gray'} />
              </Text>
              <Text style={styles.dateTimeTxt}>
                {moment().format('MM/DD/YYYY')}
              </Text>
            </View>
            <View style={[styles.dateRow, {marginLeft: widthAdapter(30)}]}>
              {/* <Image style={styles.imageStyle} source={''} /> */}
              <Text>
                <Icon name="clock-o" size={fontscale(12)} color={'gray'} />
              </Text>
              <Text style={styles.dateTimeTxt}>
                {moment().format('MM/DD/YYYY')}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rightView}>
        <Text style={styles.amountTxt}>$11.00</Text>
        <View style={styles.statusView}>
          <Text>
            <Icon
              name="exclamation-circle"
              size={fontscale(15)}
              color={'white'}
            />
          </Text>
          <Text style={styles.statusTxt}>Not Paid</Text>
        </View>
      </View>
    </View>
  );

  renderProductRow = (label, value, bgm) => (
    <View style={styles.labelContainer}>
      <ReadOnlyView
        viewStyle={{...styles.viewStyle, ...bgm}}
        label={label}
        labelStyle={styles.label}
      />
      <ReadOnlyView
        viewStyle={{...styles.viewStyle, ...bgm}}
        label={value}
        labelStyle={styles.value}
      />
    </View>
  );

  renderProductDetails = () => (
    <View style={styles.productView}>
      <View style={styles.imageView}>
        <Image style={styles.imageView} />
      </View>
      {this.renderProductRow('Product', 'Vonage Lead', {})}
      {this.renderProductRow('Amount', '$11.00', {backgroundColor: 'white'})}
      {this.renderProductRow('SKU', 'NewVonabgeLead', {})}
      {this.renderProductRow('Type', 'Event Based', {backgroundColor: 'white'})}
      <View style={styles.productDetails} />
    </View>
  );

  renderLogs = () => (
    <View style={styles.logContainer}>
      <View style={styles.logLeftView}>
        <Text>
          <Icon
            name="bullseye"
            size={fontscale(20)}
            color={Colors.primaryAppColor}
          />
        </Text>
      </View>
      <View style={styles.logRightView}>
        <Text style={styles.logTitle}>Transaction</Text>
        <Text style={styles.logDetails}>
          on {moment().format('MM/DD/YYYY')}
        </Text>
        <Text style={styles.logDetails}>by Jose Fraga</Text>
      </View>
    </View>
  );
  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollContainer}>
            {this.renderTopRow()}
            {this.renderProductDetails()}
            <View style={styles.logRefresView}>
              <Text>
                <Icon name="history" size={fontscale(20)} color={'gray'} />
              </Text>
              <Text style={styles.logTxt}>Log</Text>
            </View>
            {this.renderLogs()}
          </View>
        </ScrollView>
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
  console.log('state from task entry page ....', state);
  return {
    // totalEntries: state.products.totalEntries[0].TotalEntries,
    // taskSummary: state.products.taskSummary,
    // stepInfo: state.products.StepInfo[0],
  };
};

const mapDispatchToProps = dispatch => ({
  // getFilterForEventBasedTaskList: (
  //   FormKey,
  //   onSuccesscallback,
  //   onErrocallback,
  // ) =>
  //   dispatch(
  //     getFilterForEventBasedTaskList(
  //       FormKey,
  //       onSuccesscallback,
  //       onErrocallback,
  //     ),
  //   ),
  // getEventBasedTaskList: (
  //   FormKey,
  //   StepKey,
  //   onSuccesscallback,
  //   onErrocallback,
  // ) =>
  //   dispatch(
  //     getEventBasedTaskList(
  //       FormKey,
  //       StepKey,
  //       onSuccesscallback,
  //       onErrocallback,
  //     ),
  //   ),
  // loadLastFiveTransactions: (FormKey, onSuccesscallback, onErrocallback) =>
  //   dispatch(
  //     loadLastFiveTransactions(FormKey, onSuccesscallback, onErrocallback),
  //   ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionDetails);
