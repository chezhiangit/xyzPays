import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
// import {Dropdown} from 'react-native-material-dropdown';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import NoRecordsFoundView from '../common/UIComponents/NoRecordsFoundView/noRecordsFoundView';
// import TextInputComponent from '../common/UIComponents/TextInputComponent';
// import CheckBoxComponent from '../common/UIComponents/CheckBox/CheckBox';
// import RadioButton from '../common/UIComponents/RadioButtom/radioButton';
// import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
// import PrimaryButton from '../common/UIComponents/PrimaryButton';
// import Images from '../Assets/index';
import styles from './styles';
import {widthAdapter, fontscale} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import WarningDialog from '../common/UIComponents/warningDialog';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import RoundButton from '../common/UIComponents/RoundButton';
import {
  getEventBasedTaskList,
  getFilterForEventBasedTaskList,
  loadLastFiveTransactions,
  getTxnDetail,
} from '../AppStore/eventBasedTaskActions';
import ReadOnlyView from '../common/UIComponents/readOnlyView/ReadOnlyView';
// import moment from 'moment';

class TaskSummaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDlg: false,
      dlgMsg: '',
      isLoading: true,
      isFilter: false,
      isTaskList: false,
    };
  }

  componentDidMount() {
    this.props.loadLastFiveTransactions(
      this.props.stepInfo.FormKey,
      this.onLoadLastFiveTransactionsSuccess,
      this.onLoadLastFiveTransactionsFailed,
    );
  }

  onLoadLastFiveTransactionsSuccess = () => {
    this.setState({isLoading: false});
  };

  onLoadLastFiveTransactionsFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
  };

  onLeadBtnSelect = (item, index) => {
    console.log('onLeadBtnSelect ......', item);
    this.setState({isLoading: true, selectedStepName: item.StepName});
    this.props.getFilterForEventBasedTaskList(
      item.FormKey,
      this.onGetFilterForEventBasedTaskListSuccess,
      this.onGetFilterForEventBasedTaskListFailed,
    );
    this.props.getEventBasedTaskList(
      item.FormKey,
      item.StepKey,
      this.onGetEventBasedTaskListSuccess,
      this.onGetEventBasedTaskListFailed,
    );
  };

  onGetEventBasedTaskListFilterSuccess = () => {
    this.setState({isLoading: false});
    // this.state.isTaskList &&
    // this.props.navigation.navigate('TaskTransactionList');
  };

  onGetEventBasedTaskListFilterFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
  };

  onGetEventBasedTaskListSuccess = () => {
    this.setState({isLoading: false, isTaskList: true});
    // this.state.isFilter &&
    this.props.navigation.navigate('TaskTransactionList', {
      selecteLead: this.state.selectedStepName,
    });
  };

  onGetEventBasedTaskListFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  renderRountBtn = (item, index) => {
    return (
      <View style={styles.roundBtnView}>
        <RoundButton
          onSubmit={() => this.onLeadBtnSelect(item, index)}
          btnName={item.Txns}
          btnStyle={styles.roundBtnStyle}
          textStyle={styles.countText}
        />
        <Text style={styles.rountBtnCaption}>{item.StepName}</Text>
      </View>
    );
  };

  onAddEntries = () => {
    this.props.navigation.goBack();
  };

  taksItemSelected = (item, index) => {
    this.setState({isLoading: true});
    this.props.getTxnDetail(
      item.TxnKey,
      this.onGetTransactionDetailsSuccess,
      this.onGetTransactionDetailsFailed,
    );
  };

  onGetTransactionDetailsSuccess = () => {
    this.setState({isLoading: false});
    this.props.navigation.navigate('TransactionDetails');
  };
  onGetTransactionDetailsFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
  };

  renderNoRecordsFound = () => {
    return <NoRecordsFoundView />;
  };

  renderLatestTransaction = (item, index) => {
    return (
      <TouchableOpacity onPress={() => this.taksItemSelected(item, index)}>
        <View style={styles.transTaskItemContainer}>
          <View style={styles.transTopView}>
            <View style={styles.tranIdContainer}>
              <ReadOnlyView
                viewStyle={styles.transIdLabel}
                label={'TransId:'}
                labelStyle={styles.transLeadLabel}
              />
              <ReadOnlyView
                viewStyle={styles.transId}
                label={item.TxnSeq}
                labelStyle={styles.tansValue}
              />
              <ReadOnlyView
                viewStyle={styles.transLead}
                label={item.StepName}
                labelStyle={styles.transLeadLabel}
              />
            </View>
            <View style={styles.tranStatus}>
              <ReadOnlyView
                viewStyle={styles.tranStatusView}
                label={item.Status}
                labelStyle={styles.transPendinglabel}
              />
            </View>
          </View>
          <View style={styles.dateTimeAmountRow}>
            <View style={styles.payoutLeftView}>
              <View style={styles.dateRow}>
                <Text>
                  <Icon name="calendar" size={fontscale(12)} color={'gray'} />
                </Text>
                <Text style={styles.dateTimeTxt}>{item.TxnDate}</Text>
              </View>
              <View style={[styles.dateRow, {marginLeft: widthAdapter(30)}]}>
                <Text>
                  <Icon name="clock-o" size={fontscale(12)} color={'gray'} />
                </Text>
                <Text style={styles.dateTimeTxt}>{item.TxnTime}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollContainer}>
            <View style={styles.totalAddRow}>
              <View style={styles.toalEntriesView}>
                <Text>
                  {I18n.t('TaskSummaryPage.totalEntries')}(
                  {this.props.totalEntries})
                </Text>
              </View>
              <View style={styles.addView}>
                <View style={styles.addBtnIcon}>
                  <Text>
                    <Icon
                      name="plus-circle"
                      size={fontscale(20)}
                      color={Colors.linkBtnColor}
                    />
                  </Text>

                  <LinkBtnComponent
                    onClick={this.onAddEntries}
                    btnName={I18n.t('TaskSummaryPage.addBtn')}
                    containerStyle={styles.addBtnContainer}
                    btnTextStyle={styles.addBtnTextStyle}
                  />
                </View>
              </View>
            </View>
            <View style={styles.leadCountBtnRow}>
              {this.props.taskSummary.map((item, index) =>
                this.renderRountBtn(item, index),
              )}
            </View>
            <View style={styles.transHeaderView}>
              <Text style={styles.headerTxt}>
                {I18n.t('TaskSummaryPage.transHeader')}
              </Text>
            </View>
            {this.props.lastFiveTransaction.length > 0 ? (
              <View style={styles.transListView}>
                {this.props.lastFiveTransaction.map(
                  this.renderLatestTransaction,
                )}
              </View>
            ) : (
              this.renderNoRecordsFound()
            )}
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
    totalEntries: state.products.totalEntries[0].TotalEntries,
    taskSummary: state.products.taskSummary,
    stepInfo: state.products.StepInfo[0],
    lastFiveTransaction: state.products.lastFiveTransaction,
  };
};

const mapDispatchToProps = dispatch => ({
  getFilterForEventBasedTaskList: (
    FormKey,
    onSuccesscallback,
    onErrocallback,
  ) =>
    dispatch(
      getFilterForEventBasedTaskList(
        FormKey,
        onSuccesscallback,
        onErrocallback,
      ),
    ),
  getEventBasedTaskList: (
    FormKey,
    StepKey,
    onSuccesscallback,
    onErrocallback,
  ) =>
    dispatch(
      getEventBasedTaskList(
        FormKey,
        StepKey,
        onSuccesscallback,
        onErrocallback,
      ),
    ),
  loadLastFiveTransactions: (FormKey, onSuccesscallback, onErrocallback) =>
    dispatch(
      loadLastFiveTransactions(FormKey, onSuccesscallback, onErrocallback),
    ),
  getTxnDetail: (TxnKey, onSuccesscallback, onErrocallback) =>
    dispatch(getTxnDetail(TxnKey, onSuccesscallback, onErrocallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskSummaryPage);
