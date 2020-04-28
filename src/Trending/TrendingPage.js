import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  Image,
  Easing,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import {heightAdapter, fontscale} from '../uttils/adapterUtil';
import Images from '../Assets/index';
import {getProductsList} from '../AppStore/productsActions';
import WarningDialog from '../common/UIComponents/warningDialog';
import Colors from '../uttils/Colors';

const trending = [
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
  {
    productName: 'Spectrum - TV - Installed',
    Amount: '6.00',
    Status: 'InAction Commission',
    Sales: 3,
  },
];
// const segmentationData = [
//   I18n.t('commission.dropdownAll'),
//   I18n.t('commission.dropdown7Days'),
//   I18n.t('commission.dropdownLast2Weeks'),
//   I18n.t('commission.dropdownLast3Weeks'),
//   I18n.t('commission.dropdownLast1Month'),
//   I18n.t('commission.dropdownLast3Months'),
// ];
class TrendingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingData: [...trending],
      productsServiceDone: false,
      isLoading: false,
      showDlg: false,
      dlgMsg: '',
    };
    // this.show=false;
    this.translate = new Animated.Value(0);
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.productsServiceDone) {
      return {isLoading: true};
    }
    return {};
  }

  componentDidMount() {
    this.props.getProductsList(
      this.onGetProductListSuccess,
      this.onGetProductListFailed,
    );
  }

  onGetProductListSuccess = () => {
    this.setState({isLoading: false, productsServiceDone: true});
  };

  onGetProductListFailed = errorMsg => {
    this.setState({
      isLoading: false,
      productsServiceDone: true,
      showDlg: true,
      dlgMsg: errorMsg,
    });
  };

  renderTrendingCard = ({item, index}) => {
    return (
      <View style={styles.trendingItemContainer}>
        <View style={styles.trendingDetailsContainer}>
          <View style={styles.trendingProduct}>
            {/* <View style={styles.dotWithTick} /> */}
            <View style={styles.dotWithTick}>
              <Text>
                <Icon
                  name="check-circle"
                  size={fontscale(20)}
                  color={Colors.primaryAppColor}
                />
              </Text>
            </View>
            <Text style={styles.trendingProductTxt}>{item.productName}</Text>
          </View>
          <View style={styles.amountStatusContainer}>
            <Text style={styles.amountLabel}>{I18n.t('trending.amount')} </Text>
            <Text style={styles.dollar}>
              {I18n.t('trending.currencySymbol')}
            </Text>
            <Text style={styles.amount}>{item.Amount}, </Text>
            {/* <Text style={styles.statusLabel}>{I18n.t('trending.status')} </Text>
            <Text style={styles.status}>{item.Status}</Text> */}
          </View>
          <View style={styles.trendingStatusContainer}>
            <Text style={styles.statusLabel}>{I18n.t('trending.status')} </Text>
            <Text style={styles.status}>{item.Status}</Text>
          </View>
          <View style={styles.trendingSalesContainer}>
            <Text style={styles.trendingSalesLabel}>
              {I18n.t('trending.sales')}{' '}
            </Text>
            <Text style={styles.trendingSalesCount}>{item.Sales}</Text>
          </View>
        </View>
        <View style={styles.trendingImageContainer}>
          <Image style={styles.trendingImage} source={Images.productBox} />
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
          <FlatList
            style={styles.trendingList}
            data={this.state.trendingData}
            renderItem={this.renderTrendingCard}
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
  console.log('state from trending page ... ', state);
  return {
    // productsList: state.products.productList,
  };
};

const mapDispatchToProps = dispatch => ({
  getProductsList: (onSuccesscallback, onErrorcallback) =>
    dispatch(getProductsList(onSuccesscallback, onErrorcallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrendingPage);
