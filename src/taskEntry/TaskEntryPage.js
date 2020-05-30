import * as React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {Dropdown} from 'react-native-material-dropdown';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import TextInputComponent from '../common/UIComponents/TextInputComponent';
import CheckBoxComponent from '../common/UIComponents/CheckBox/CheckBox';
import RadioButton from '../common/UIComponents/RadioButtom/radioButton';
// import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
// import Images from '../Assets/index';
import styles from './styles';
import {widthAdapter, fontscale, heightAdapter} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import WarningDialog from '../common/UIComponents/warningDialog';
import {
  getFormDefenitionDetailsData,
  postEntry,
} from '../AppStore/taskEntryActions';
// import { checkPhone } from '../uttils/UtilityFunctions';

class TaskEntryPage extends React.Component {
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
    this.props.navigation.addListener('focus', () => {
      this.setState({isLoading: true});
      Image.getSize(
        this.props.productDetails?.ProductPicture,
        (width, height) => {
          this.setState({width, height});
        },
      );

      this.props.getFormDefenitionDetailsData(
        this.props.FormKey,
        this.getFormDefenitionDetailsSuccess,
        this.getFormDefenitionDetailsFailed,
      );
    });
  }

  getFormDefenitionDetailsSuccess = () => {
    this.setState({isLoading: false}, () => {
      const components = this.parseFormDefenition();
      this.setState({components});
    });
  };

  getFormDefenitionDetailsFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
  };

  constructPayload = () => {
    const payload = [];
    try {
      this.state.components.forEach(item => {
        if (item.ControlType === 'text' || item.ControlType === 'textarea') {
          if (item.ControlReq === true && item.inputValue.length === 0) {
            throw {msg: 'Pls enter ' + item.ControlLabel};
          }
          const textObj = {
            ControlColumn: item.ControlColumn,
            ControlValue: item.inputValue,
          };
          payload.push(textObj);
        } else if (item.ControlType === 'checkbox') {
          let isFilled = false;
          const checkboxObj = {};
          item.checkBoxGroup.forEach(el => {
            if (el.status) {
              isFilled = true;
              checkboxObj.ControlColumn = item.ControlColumn;
              checkboxObj.ControlValue = el.value;
              payload.push(checkboxObj);
            }
          });
          if (item.ControlReq === true && isFilled === false) {
            throw {msg: 'Pls select ' + item.ControlLabel};
          }
        } else if (item.ControlType === 'radio') {
          let isFilled = false;
          const selectObj = {};
          item.radioButtomGroup.forEach(el => {
            if (el.status) {
              isFilled = true;
              selectObj.ControlColumn = item.ControlColumn;
              selectObj.ControlValue = el.value;
              payload.push(selectObj);
            }
          });
          if (item.ControlReq === true && isFilled === false) {
            throw {msg: 'Pls select ' + item.ControlLabel};
          }
        } else if (item.ControlType === 'select') {
          const selectObj = {};

          if (
            item.ControlReq === true &&
            (item.selectedValue === undefined ||
              item.selectedValue?.length === 0)
          ) {
            throw {msg: 'Pls select ' + item.ControlLabel};
          }
          selectObj.ControlColumn = item.ControlColumn;
          selectObj.ControlValue = item.selectedValue;
        }
      });
      return payload;
    } catch (e) {
      this.setState({
        showDlg: true,
        dlgMsg: e.msg,
      });
      return null;
    }
    // return payload;
  };

  onSave = () => {
    const payload = this.constructPayload();
    console.log('payload .........', payload);
    payload &&
      this.props.postEntry(
        payload,
        this.props.FormKey,
        this.props.TaskKey,
        this.onPostEntrySuccess,
        this.onPostEntryFailed,
      );
    payload && this.setState({isLoading: true});
  };

  onPostEntrySuccess = msg => {
    // this.setState({isLoading: false, postEntry: true});
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: msg,
      postEntry: true,
    });
  };

  onPostEntryFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
  };

  // onNoPressed = () => {
  //   this.setState({selectedIndex: 2});
  // };

  // onYesPressed = () => {
  //   this.setState({selectedIndex: 1});
  // };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    if (this.state.postEntry === true) {
      this.props.navigation.goBack();
    }
    this.setState({showDlg: false});
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

    // components[groupIndex].dropDownGroup.forEach(item => {
    //   if (item.itemId === selectedIndex) {
    //     components[groupIndex].dropDownGroup[item.itemId].status = true;
    //   } else {
    //     components[groupIndex].dropDownGroup[item.itemId].status = false;
    //   }
    // });

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
    const components = [];
    this.props.formDefenition?.FormDefinition?.forEach((el, index) => {
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
        const checkBoxGroup = this.props.formDefenition[el.ControlColumn].map(
          (checkboxObj, checkboxObjIndex) =>
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
        ].map((selectionObj, selectionObjIndex) =>
          this.parseSelectionControl(selectionObj, selectionObjIndex, index),
        );
        returnObj = {
          radioButtomGroup: [...radioButtomGroup],
          ...returnObj,
        };
        components.push(returnObj);
      } else if (el.ControlType === 'select') {
        const dropDownGroup = this.props.formDefenition[el.ControlColumn].map(
          (dropDownObj, dropDownObjIndex) =>
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
    return components;
  };

  createComponentsDynamically = () => {
    const FormView = this.state.components.map((item, index) => {
      if (item.ControlType === 'text' || item.ControlType === 'textarea') {
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
                <Text style={{fontSize: fontscale(12)}}>
                  {'\u2B51'}
                </Text>
              )}
            </View>
            <TextInputComponent
              placeholder={item.placeholder}
              autoFocus={false}
              inputValue={this.state.components[index].inputValue}
              onTextChange={text => this.onTextChange(text, index)}
            />
          </View>
        );
      }
      if (item.ControlType === 'checkbox') {
        const CheckBox = () =>
          item.checkBoxGroup.map((el, id) => {
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
                <Text style={{fontSize: fontscale(12)}}>
                  {'\u2B51'}
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
          item.radioButtomGroup.map((el, id) => {
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
              {item.ControlReq && <Text>{'\u2B51'}</Text>}
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
                item.ControlLabel + (item.ControlReq === false ? '' : '\u2B51')
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
                // borderColor: 'blue',
                // borderWidth: 1,
                // height: heightAdapter(100),
                // width: widthAdapter(300),
              }}
              overlayStyle={
                {
                  // flexDirection: 'row',
                  // borderColor: 'blue',
                  // borderWidth: 1,
                  // height: heightAdapter(100),
                  // width: '100%',
                }
              }
              containerStyle={
                {
                  // flexDirection: 'row',
                  // borderColor: 'red',
                  // borderWidth: 1,
                  // height: heightAdapter(100),
                }
              }
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

  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        <KeyboardAwareScrollView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.scrollContainer}>
              <View style={BaseStyles.emptyHView} />
              <View style={styles.taskItemContainer}>
                <View style={styles.taskDetailsContainer}>
                  <View style={styles.taskEntryProduct}>
                    <View style={styles.dotWithTick}>
                      <Text>
                        <Icon
                          name="check-circle"
                          size={fontscale(20)}
                          color={Colors.primaryAppColor}
                        />
                      </Text>
                    </View>
                    <Text style={styles.taskEntryProductTxt}>
                      {this.props.productDetails.ProductName}
                    </Text>
                  </View>
                  <View style={styles.activeContainer}>
                    <Text style={styles.statusTxt}>
                      {this.props.productDetails['Product Status']}
                    </Text>
                  </View>
                  <View style={styles.skuContainer}>
                    <Text style={styles.skuLabel}>
                      {I18n.t('taskEntryPage.sku')}
                      {': '}
                    </Text>
                    <Text style={styles.skuTxt}>
                      {this.props.productDetails.SKU}
                    </Text>
                  </View>
                </View>
                <View style={styles.taskEntryImageContainer}>
                  <Image
                    source={{
                      isStatic: true,
                      uri: this.props.productDetails?.ProductPicture,
                      method: 'GET',
                    }}
                    style={[
                      styles.productImage,
                      // {width: this.state.width, height: this.state.height},
                    ]}
                  />
                </View>
              </View>

              {this.createComponentsDynamically()}
              <View style={BaseStyles.emptyHView} />
              {this.state.components.length > 0 && (
                <PrimaryButton
                  btnName={I18n.t('taskEntryPage.saveBtnName')}
                  onSubmit={this.onSave}
                />
              )}
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
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
    // dashboardData: state.dashboard.dashboardData,
    productDetails: state.taskEntry.productDetails[0],
    FormKey: state.taskEntry.productDetails.FormKey,
    TaskKey: state.taskEntry.productDetails.TaskKey,
    formDefenition: state.taskEntry.formDefenition,
  };
};

const mapDispatchToProps = dispatch => ({
  getFormDefenitionDetailsData: (FormKey, onSuccesscallback, onErrocallback) =>
    dispatch(
      getFormDefenitionDetailsData(FormKey, onSuccesscallback, onErrocallback),
    ),
  postEntry: (payload, FormKey, TaskKey, onSuccesscallback, onErrocallback) =>
    dispatch(
      postEntry(payload, FormKey, TaskKey, onSuccesscallback, onErrocallback),
    ),
  // getProductDetailsData: (onSuccesscallback, onErrocallback) =>
  //   dispatch(getProductDetailsData(onSuccesscallback, onErrocallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskEntryPage);

// export default TaskEntryPage;
