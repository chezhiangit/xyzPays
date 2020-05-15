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
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import Images from '../Assets/index';
import styles from './styles';
import {widthAdapter, fontscale, heightAdapter} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import WarningDialog from '../common/UIComponents/warningDialog';
import {
  postCustomerDetails,
  getEventBasedTaskSummary,
} from '../AppStore/eventBasedTaskActions';
import ReadOnlyView from '../common/UIComponents/readOnlyView/ReadOnlyView';

class LeadTransactionDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: 'Cable Protal Products',
      selectedIndex: 0,
      showDlg: false,
      dlgMsg: '',
      answer1: '',
      answer2: '',
      width: 100,
      height: 100,
      components: [],
      postEntry: false,
    };
  }

  componentDidMount() {
    // console.log('this.props.formDefenition ....', this.props.formDefenition);
    this.props.formDefenition?.length > 0 && this.parseFormDefenition();
  }

  // constructPayload = () => {
  //   const payload = [];
  //   try {
  //     this.state.components.forEach(item => {
  //       if (item.ControlType === 'text' || item.ControlType === 'textarea') {
  //         if (item.ControlReq === true && item.inputValue.length === 0) {
  //           throw {msg: 'Pls enter ' + item.ControlLabel};
  //         }
  //         const textObj = {
  //           ControlColumn: item.ControlColumn,
  //           ControlValue: item.inputValue,
  //         };
  //         payload.push(textObj);
  //       } else if (item.ControlType === 'checkbox') {
  //         let isFilled = false;
  //         const checkboxObj = {};
  //         item.checkBoxGroup.forEach(el => {
  //           if (el.status) {
  //             isFilled = true;
  //             checkboxObj.ControlColumn = item.ControlColumn;
  //             checkboxObj.ControlValue = el.value;
  //             payload.push(checkboxObj);
  //           }
  //         });
  //         if (item.ControlReq === true && isFilled === false) {
  //           throw {msg: 'Pls select ' + item.ControlLabel};
  //         }
  //       } else if (item.ControlType === 'radio') {
  //         let isFilled = false;
  //         const selectObj = {};
  //         item.radioButtomGroup.forEach(el => {
  //           if (el.status) {
  //             isFilled = true;
  //             selectObj.ControlColumn = item.ControlColumn;
  //             selectObj.ControlValue = el.value;
  //             payload.push(selectObj);
  //           }
  //         });
  //         if (item.ControlReq === true && isFilled === false) {
  //           throw {msg: 'Pls select ' + item.ControlLabel};
  //         }
  //       } else if (item.ControlType === 'select') {
  //         const selectObj = {};

  //         if (
  //           item.ControlReq === true &&
  //           (item.selectedValue === undefined ||
  //             item.selectedValue?.length === 0)
  //         ) {
  //           throw {msg: 'Pls select ' + item.ControlLabel};
  //         }
  //         selectObj.ControlColumn = item.ControlColumn;
  //         selectObj.ControlValue = item.selectedValue;
  //       }
  //     });
  //     return payload;
  //   } catch (e) {
  //     this.setState({
  //       showDlg: true,
  //       dlgMsg: e.msg,
  //     });
  //     return null;
  //   }
  //   // return payload;
  // };

  onSave = () => {
    // const payload = this.constructPayload();
    // console.log('payload .........', payload);
    // payload &&
    //   this.props.postCustomerDetails(
    //     payload,
    //     this.props.stepInfo.FormKey,
    //     this.props.stepInfo.ProductKey,
    //     this.props.stepInfo.StepKey,
    //     this.onPostEntrySuccess,
    //     this.onPostEntryFailed,
    //   );
    // payload && this.setState({isLoading: true});
  };

  onPostEntrySuccess = msg => {
    // // this.setState({isLoading: false, postEntry: true});
    // this.setState({
    //   isLoading: false,
    //   showDlg: true,
    //   dlgMsg: msg,
    //   postEntry: true,
    // });
  };

  onPostEntryFailed = errorMsg => {
    // this.setState({
    //   isLoading: false,
    //   showDlg: true,
    //   dlgMsg: errorMsg,
    // });
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    // if (this.state.postEntry === true) {
    //   this.props.navigation.goBack();
    // }
    // this.setState({showDlg: false});
  };

  onTextChange = (text, index) => {
    const components = this.state.components;
    components[index].inputValue = text;
    this.setState({components});
  };

  onChecBoxSelected = (itemId, groupIndex) => {
    const components = this.state.components;
    components[groupIndex].checkBoxGroup[itemId].status = !components[
      groupIndex
    ].checkBoxGroup[itemId].status;
    this.setState({components: components});
  };

  onDropDownChanges(value, selectedIndex, data, groupIndex) {
    const components = [...this.state.components];
    components[groupIndex].selecteIndex = selectedIndex;
    components[groupIndex].selectedValue = value;

    this.setState({components: components});
  }

  onRadioOptionSelected = (itemId, groupIndex) => {
    const components = [...this.state.components];
    components[groupIndex].radioButtomGroup.forEach(item => {
      if (item.itemId === itemId) {
        components[groupIndex].radioButtomGroup[item.itemId].status = true;
      } else {
        components[groupIndex].radioButtomGroup[item.itemId].status = false;
      }
    });
    this.setState({components: components});
  };

  parseCheckBox = (el, itemId, groupIndex) => {
    return {
      label: el.Text,
      value: el.Value,
      itemId,
      status: false,
    };
  };

  parseSelectionControl = (el, itemId, groupIndex) => {
    return {
      label: el.Text,
      value: el.Value,
      itemId,
      status: false,
    };
  };

  parseFormDefenition = () => {
    try {
      console.log(
        'this.props.formDefenition parseFormDefenition ....',
        this.props.formDefenition,
      );
      const components = [];
      this.props.formDefenition?.forEach((el, index) => {
        let returnObj = {
          ...el,
        };
        if (el.ControlType === 'text' || el.ControlType === 'textarea') {
          returnObj = {
            inputValue: el.DefaultValue === null ? '' : el.DefaultValue,
            index,
            placeholder: el.HelpText === null ? '' : el.HelpText,
            ...returnObj,
          };
          components.push({...returnObj});
        } else if (el.ControlType === 'checkbox') {
          const checkBoxGroup = this.props.formDefenition[
            el.ControlColumn
          ]?.map((checkboxObj, checkboxObjIndex) =>
            this.parseCheckBox(checkboxObj, checkboxObjIndex, index),
          );
          returnObj = {
            checkBoxGroup: [...checkBoxGroup],
            ...returnObj,
          };
          components.push(returnObj);
        } else if (el.ControlType === 'radio') {
          const radioButtomGroup = this.props.formDefenition[
            el.ControlColumn
          ]?.map((selectionObj, selectionObjIndex) =>
            this.parseSelectionControl(selectionObj, selectionObjIndex, index),
          );
          returnObj = {
            radioButtomGroup: [...radioButtomGroup],
            ...returnObj,
          };
          components.push(returnObj);
        } else if (el.ControlType === 'select') {
          const dropDownGroup = this.props.formDefenition[
            el.ControlColumn
          ]?.map((dropDownObj, dropDownObjIndex) =>
            this.parseSelectionControl(dropDownObj, dropDownObjIndex, index),
          );
          returnObj = {
            dropDownGroup: [...dropDownGroup],
            ...returnObj,
          };
          components.push(returnObj);
        }
      });
      console.log('components ......', components);
      this.setState({components});
      // return components;
    } catch (e) {
      this.setState({
        isLoading: false,
        showDlg: true,
        dlgMsg: 'Unable to process your request.',
      });
    }
  };

  createComponentsDynamically = () => {
    const FormView = this.state.components?.map((item, index) => {
      if (item.ControlType === 'text' || item.ControlType === 'textarea') {
        return (
          <View>
            {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text style={{fontSize: fontscale(16)}}>{item.ControlLabel}</Text>
              {item.ControlReq && (
                <Text style={{fontSize: fontscale(12), color: 'red'}}>
                  (Mandatory)
                </Text>
              )}
            </View> */}
            <TextInputComponent
              placeholder={
                item.placeholder + (item.ControlReq ? '(Mandatory)' : '')
              }
              autoFocus={false}
              inputValue={this.state.components[index].inputValue}
              onTextChange={text => this.onTextChange(text, index)}
            />
          </View>
        );
      }
      if (item.ControlType === 'checkbox') {
        const CheckBox = () =>
          item.checkBoxGroup?.map((el, id) => {
            return (
              <CheckBoxComponent
                btnName={el.label}
                onClick={() => this.onChecBoxSelected(id, index)}
                isSelected={el.status}
                // btnTextStyle={{color: 'gray'}}
              />
            );
          });
        return (
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text style={{fontSize: fontscale(16)}}>{item.ControlLabel}</Text>
              {item.ControlReq && (
                <Text style={{fontSize: fontscale(12), color: 'red'}}>
                  (Mandatory)
                </Text>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: heightAdapter(100),
              }}>
              {CheckBox()}
            </View>
          </View>
        );
      }
      if (item.ControlType === 'radio') {
        const RadioBtn = () =>
          item.radioButtomGroup?.map((el, id) => {
            return (
              <RadioButton
                btnName={el.label}
                onClick={() => this.onRadioOptionSelected(id, index)}
                status={el.status}
              />
            );
          });
        return (
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text>{item.ControlLabel}</Text>
              {item.ControlReq && <Text>(Mandatory)</Text>}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: heightAdapter(100),
              }}>
              {RadioBtn()}
            </View>
          </View>
        );
      }
      if (item.ControlType === 'select') {
        return (
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            />
            <Dropdown
              label={
                item.ControlLabel +
                (item.ControlReq === false ? '' : '(Mandatory)')
              }
              data={item.dropDownGroup}
              inputContainerStyle={{width: widthAdapter(700)}}
              dropdownOffset={{
                top: heightAdapter(10),
                // borderWidth: 1,
                width: widthAdapter(700),
              }}
              // dropdownMargins={{
              //   width: widthAdapter(300),
              //   height: heightAdapter(100),
              // }}
              itemTextStyle={
                {
                  // borderColor: 'green',
                  // borderWidth: 1,
                }
              }
              pickerStyle={{
                flexDirection: 'row',
              }}
              //   overlayStyle={
              //     {
              //       // flexDirection: 'row',
              //       // borderColor: 'blue',
              //       // borderWidth: 1,
              //       // height: heightAdapter(100),
              //       // width: '100%',
              //     }
              //   }
              //   containerStyle={
              //     {
              //       // flexDirection: 'row',
              //       // borderColor: 'red',
              //       // borderWidth: 1,
              //       // height: heightAdapter(100),
              //     }
              //   }
              onChangeText={(value, selectedIndex, data) =>
                this.onDropDownChanges(value, selectedIndex, data, index)
              }
            />

            {/* </View> */}
          </View>
        );
      }
    });
    return FormView;
  };

  onViewAllEntries = () => {
    this.setState({isLoading: true});
    this.props.getEventBasedTaskSummary(
      this.props.stepInfo.FormKey,
      this.onGetEventBaseTaskSummarySuccess,
      this.onGetEventBaseTaskSummaryFailed,
    );
  };

  onGetEventBaseTaskSummarySuccess = () => {
    this.setState({isLoading: false});
    this.props.navigation.navigate('TaskSummaryPage');
  };

  onGetEventBaseTaskSummaryFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
  };

  renderConfirmedLeadDetails = (item, index) => {
    return (
      <>
        <View style={styles.labelContainer}>
          <ReadOnlyView
            viewStyle={styles.labelViewStyle}
            label={item.Form}
            labelStyle={styles.label}
          />
        </View>
        <View style={styles.labelContainer}>
          <ReadOnlyView
            viewStyle={styles.valueViewStyle}
            label={item.Value}
            labelStyle={styles.value}
          />
        </View>
      </>
    );
  };

  renderTaskTransactionDetails = (item, index) => {
    return (
      <>
        <View style={styles.labelContainer}>
          <ReadOnlyView
            viewStyle={styles.labelViewStyle}
            label={item.Form}
            labelStyle={styles.label}
          />
        </View>
        <View style={styles.labelContainer}>
          <ReadOnlyView
            viewStyle={styles.valueViewStyle}
            label={item.Value}
            labelStyle={styles.value}
          />
        </View>
      </>
    );
  };

  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollContainer}>
            {/* <View style={BaseStyles.emptyHView} /> */}
            <View style={styles.topContainer}>
              <View stye={styles.productNameRow}>
                <Text style={styles.productName}>
                  {this.props.formInfo.ProductName}
                </Text>
              </View>
              <View style={styles.userInfo}>
                <Text style={styles.userInfoTxt}>
                  {this.props.formInfo.FormDesc}
                </Text>
              </View>
              <View style={styles.linkBtnRow}>
                <LinkBtnComponent
                  btnName={I18n.t('LeadTaskEntry.videlink')}
                  containerStyle={styles.videoLinkContainer}
                  btnTextStyle={{marginLeft: 0}}
                />
                <LinkBtnComponent
                  onClick={this.onViewAllEntries}
                  btnName={I18n.t('LeadTaskEntry.viewAll')}
                  containerStyle={styles.viewAllLinkContainer}
                />
              </View>
            </View>

            {/* {this.createComponentsDynamically()} */}
            <View style={styles.leadContainer}>
              <Text style={styles.leadText}>Lead</Text>
              {this.props.Lead.map(this.renderTaskTransactionDetails)}
            </View>
            {this.props.ConfirmedLead.length > 0 && (
              <View
                style={[styles.leadContainer, {marginTop: heightAdapter(40)}]}>
                <Text style={styles.leadText}>Confirmed Lead</Text>
                {this.props.ConfirmedLead.map(this.renderConfirmedLeadDetails)}
              </View>
            )}
            {this.props.formDefenition?.length > 0 && (
              <View
                style={[styles.leadContainer, {marginTop: heightAdapter(40)}]}>
                <Text style={styles.leadText}>Confirmed Lead</Text>
                {this.createComponentsDynamically()}
              </View>
            )}
            <View style={BaseStyles.emptyHView} />
            {this.state.components.length > 0 && (
              <PrimaryButton
                btnName={I18n.t('LeadTaskEntry.submitBtnName')}
                onSubmit={this.onSave}
              />
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
  console.log('state from new customer details page ....', state);
  return {
    formDefenition: state.products.leadTransaction.formDefenition,
    formInfo: state.products.leadTransaction.formInfo[0],
    stepInfo: state.products.leadTransaction.StepInfo[0],
    Lead: state.products.leadTransaction.Lead,
    ConfirmedLead: state.products.leadTransaction.ConfirmedLead,
  };
};

const mapDispatchToProps = dispatch => ({
  getEventBasedTaskSummary: (FormKey, onSuccesscallback, onErrocallback) =>
    dispatch(
      getEventBasedTaskSummary(FormKey, onSuccesscallback, onErrocallback),
    ),
  postCustomerDetails: (
    payload,
    FormKey,
    LeadKey,
    StepKey,
    onSuccesscallback,
    onErrocallback,
  ) =>
    dispatch(
      postCustomerDetails(
        payload,
        FormKey,
        LeadKey,
        StepKey,
        onSuccesscallback,
        onErrocallback,
      ),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeadTransactionDetails);
