import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {Dropdown} from 'react-native-material-dropdown';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import TextInputComponent from '../common/UIComponents/TextInputComponent';
import CheckBoxComponent from '../common/UIComponents/CheckBox/CheckBox';
import RadioButton from '../common/UIComponents/RadioButtom/radioButton';
// import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import Images from '../Assets/index';
import styles from './styles';
import {widthAdapter, fontscale, heightAdapter} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import WarningDialog from '../common/UIComponents/warningDialog';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import RoundButton from '../common/UIComponents/RoundButton';
import {
  getEventBasedTaskList,
  getFilterForEventBasedTaskList,
  loadLastFiveTransactions,
} from '../AppStore/eventBasedTaskActions';
import ReadOnlyView from '../common/UIComponents/readOnlyView/ReadOnlyView';
import moment from 'moment';

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
    this.setState({isLoading: true});
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
    // this.props.navigation.navigate('TaskTransactionList');
  };

  onGetEventBasedTaskListFilterSuccess = () => {
    this.setState({isLoading: false, isFilter: true});
    // this.state.isTaskList &&
    this.props.navigation.navigate('TaskTransactionList');
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
    this.props.navigation.navigate('TaskTransactionList');
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

  taksItemSelected = () => {
    this.props.navigation.navigate('TransactionDetails');
  };

  renderLatestTransaction = () => {
    return (
      <TouchableOpacity onPress={() => this.taksItemSelected()}>
        <View style={styles.transTaskItemContainer}>
          <View style={styles.transTopView}>
            <View style={styles.tranIdContainer}>
              <ReadOnlyView
                viewStyle={styles.transLabelViewStyle}
                label={'TransId:'}
                labelStyle={styles.transLeadLabel}
              />
              <ReadOnlyView
                viewStyle={styles.transLabelViewStyle}
                label={'12345'}
                labelStyle={styles.tansValue}
              />
              <ReadOnlyView
                viewStyle={styles.transLabelViewStyle}
                label={'Lead'}
                labelStyle={styles.transLeadLabel}
              />
            </View>
            <View style={styles.tranStatus}>
              <ReadOnlyView
                viewStyle={styles.tranStatusView}
                label={'Pending'}
                labelStyle={styles.transPendinglabel}
              />
            </View>
          </View>
          <View style={styles.dateTimeAmountRow}>
            <View style={styles.payoutLeftView}>
              <View style={styles.dateRow}>
                {/* <Image style={styles.imageStyle} source={''} /> */}
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
                <LinkBtnComponent
                  onClick={this.onAddEntries}
                  btnName={I18n.t('TaskSummaryPage.addBtn')}
                  containerStyle={{
                    alignItems: 'flex-end',
                  }}
                  btnTextStyle={{
                    marginLeft: 0,
                    fontWeight: 'bold',
                    fontSize: fontscale(17),
                  }}
                />
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
            <View style={styles.transListView}>
              {this.renderLatestTransaction()}
            </View>
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskSummaryPage);
