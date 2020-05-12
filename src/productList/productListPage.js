import * as React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
// import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';
// import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import {heightAdapter, fontscale, widthAdapter} from '../uttils/adapterUtil';
// import Images from '../Assets/index';
import {getProductsList} from '../AppStore/productsActions';
import WarningDialog from '../common/UIComponents/warningDialog';
import PrimaryButton from '../common/UIComponents/PrimaryButton';

class ProductsListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      showDlg: false,
      dlgMsg: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      this.setState({isLoading: true});
      this.props.getProductsList(this.onSuccess, this.onFailed);
    });
  }

  onStartEarning = () => {
    console.log('On start earning');
  };

  onSuccess = () => {
    console.log('GetProductsList success');
    this.setState({isLoading: false});
  };

  onFailed = errorMsg => {
    console.log('GetProductsList failes');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  renderTrendingCard = (item, index) => {
    return (
      <View style={styles.trendingItemContainer}>
        <View style={styles.productRow}>
          <View style={styles.trendingProduct}>
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
              style={styles.trendingImage}
            />
            <Text style={styles.trendingProductTxt}>{item?.ProductName}</Text>
          </View>
          <PrimaryButton
            btnName={I18n.t('productsList.earningBtnName')}
            onSubmit={this.onStartEarning}
            btnStyle={styles.btnStyle}
          />
        </View>
        <View style={styles.taskInfo}>
          <View style={styles.taskDescription}>
            <Text style={styles.taskDescriptionTxt}>{item?.ProductDesc}</Text>
          </View>
          <View style={styles.leadCommission}>
            <Text>{`$${item?.leadCommission} `}</Text>
            <Text style={styles.leadCommissionTxt}>for each Lead</Text>
          </View>
          <View style={styles.confirmCommission}>
            <Text>{`$${item.confirmationCommission} `}</Text>
            <Text style={styles.confirmCommissionTxt}>
              for each confirmed Lead
            </Text>
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
      <View style={BaseStyles.baseContainer}>
        <View style={styles.trendingContainer}>
          <View style={BaseStyles.userInfo}>
            <Text style={BaseStyles.userInfoTxt}>
              {I18n.t('trending.userInfo')}
            </Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.trendingList}>
            {this.props.productsList?.map((item, index) =>
              this.renderTrendingCard(item, index),
            )}
            <View style={styles.referEarnContainer}>
              <View style={styles.titleRow}>
                <Text style={styles.titlTextRefer}>Refer</Text>
                <Text style={styles.titlTextEarn}>{'& Earn'}</Text>
              </View>
              <View
                style={[
                  styles.taskDescription,
                  {
                    paddingLeft: widthAdapter(40),
                    paddingRight: widthAdapter(40),
                  },
                ]}>
                <Text style={styles.taskDescriptionTxt}>
                  Start getting commission for referring new users to XYZPays
                </Text>
              </View>
              <View style={BaseStyles.emptyHView} />
              <PrimaryButton
                btnName={I18n.t('productsList.referBtnName')}
                onSubmit={this.onStartEarning}
                btnStyle={styles.btnStyle}
              />
            </View>
          </ScrollView>
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
  console.log('state from products list page ... ', state);
  return {
    productsList: state.products.productsList,
  };
};
const mapDispatchToProps = dispatch => ({
  getProductsList: (onSuccesscallback, onErrorcallback) =>
    dispatch(getProductsList(onSuccesscallback, onErrorcallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsListPage);
