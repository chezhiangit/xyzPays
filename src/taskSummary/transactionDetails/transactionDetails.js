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
import {getTxnHistory} from '../../AppStore/eventBasedTaskActions';
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

  componentDidMount() {
    this.props.getTxnHistory(this.props.taskTransactionDetails[0].TxnKey);
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
          <Text style={styles.transIdLabel}>
            {I18n.t('TransactionDetails.TransId')}
          </Text>
          <Text style={styles.transIdTxt}>
            {this.props.taskTransactionDetails[0].TxnSeq}
          </Text>
        </View>
        <View style={styles.dateTimeAmountRow}>
          <View style={styles.dateTimeLeftView}>
            <View style={styles.dateRow}>
              <Text>
                <Icon name="calendar" size={fontscale(12)} color={'gray'} />
              </Text>
              <Text style={styles.dateTimeTxt}>
                {this.props.taskTransactionDetails[0].PaymentDate}
              </Text>
            </View>
            <View style={[styles.dateRow, {marginLeft: widthAdapter(30)}]}>
              {/* <Image style={styles.imageStyle} source={''} /> */}
              <Text>
                <Icon name="clock-o" size={fontscale(12)} color={'gray'} />
              </Text>
              <Text style={styles.dateTimeTxt}>
                {this.props.taskTransactionDetails[0].PaymentTime}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rightView}>
        <Text style={styles.amountTxt}>
          {'$' + this.props.taskTransactionDetails[0].ComAmount}
        </Text>
        <View style={styles.statusView}>
          <Text>
            <Icon
              name="exclamation-circle"
              size={fontscale(15)}
              color={'white'}
            />
          </Text>
          <Text style={styles.statusTxt}>
            {this.props.taskTransactionDetails[0].PaymentStatus}
          </Text>
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

  renderProductDetails = item => (
    <View style={styles.productView}>
      <View style={styles.imageView}>
        <Image
          source={{
            isStatic: true,
            uri: item?.ProductPicture,
            method: 'GET',
            // headers: {
            //   clubId: NetTool.clubId,
            //   'Ocp-Apim-Subscription-Key': NetTool.subscriptionKey,
            // },
          }}
          style={styles.imageStyle}
        />
      </View>
      {this.renderProductRow(
        I18n.t('TransactionDetails.product'),
        item.ProductName,
        {},
      )}
      {this.renderProductRow(
        I18n.t('TransactionDetails.Amount'),
        '$' + item.ComAmount,
        {
          backgroundColor: 'white',
        },
      )}
      {this.renderProductRow(I18n.t('TransactionDetails.SKU'), item.SKU, {})}
      {this.renderProductRow(
        I18n.t('TransactionDetails.Type'),
        item.ProductTypeName,
        {
          backgroundColor: 'white',
        },
      )}
      <View style={styles.productDetails} />
    </View>
  );

  logRefresView = () => {
    this.props.getTxnHistory(this.props.taskTransactionDetails.TxnKey);
  };

  renderLogs = item => (
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
        <Text style={styles.logTitle}>{item.PaymentLog}</Text>
        <Text style={styles.logDetails}>
          on {item.PaymentDate} {item.PaymentTime}
        </Text>
        <Text style={styles.logDetails}>{item.StatusChangedBy}</Text>
      </View>
    </View>
  );
  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollContainer}>
            {this.renderTopRow()}
            {this.props.taskTransactionDetails.map(
              this.renderProductDetails,
            )}

            <View style={styles.logRefresView}>
              <TouchableOpacity
                onPress={this.onRefreshLog}
                style={{flexDirection: 'row'}}>
                <Text>
                  <Icon name="history" size={fontscale(20)} color={'gray'} />
                </Text>
                <Text style={styles.logTxt}>
                  {I18n.t('TransactionDetails.Log')}
                </Text>
              </TouchableOpacity>
            </View>

            {this.props.taskTransactionHistory.map(this.renderLogs)}
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
    taskTransactionDetails: state.products.taskTransactionDetails.tbl,
    taskTransactionHistory: state.products.taskTransactionHistory,
    // taskSummary: state.products.taskSummary,
    // stepInfo: state.products.StepInfo[0],
  };
};

const mapDispatchToProps = dispatch => ({
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
  getTxnHistory: TxnKey => dispatch(getTxnHistory(TxnKey)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionDetails);
