import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  Image,
  Easing,
  TouchableOpacity,
  TouchableWithoutFeedback,
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
import {
  getTrendingProducts,
  getProductDetailsData,
} from '../AppStore/trendingProductsActions';
import WarningDialog from '../common/UIComponents/warningDialog';
import Colors from '../uttils/Colors';

class TrendingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // trendingData: [...trending],
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
    this.props.navigation.addListener('focus', () => {
      this.setState({isLoading: true});
      this.props.getTrendingProducts(
        this.onGetTrendingProductListSuccess,
        this.onGetTrendingProductListFailed,
      );
    });
  }

  onGetTrendingProductListSuccess = () => {
    this.setState({isLoading: false, productsServiceDone: true});
  };

  onGetTrendingProductListFailed = errorMsg => {
    this.setState({
      isLoading: false,
      productsServiceDone: true,
      showDlg: true,
      dlgMsg: errorMsg,
    });
  };

  onProductCardSelected = index => {
    this.setState({isLoading: true}, () =>
      this.props.getProductDetailsData(
        this.props.trendingProductList[index].ProductKey,
        this.onGetProductDetailsDataSuccess,
        this.onGetProductDetailsDataFailed,
      ),
    );
  };

  onGetProductDetailsDataSuccess = () => {
    console.log('pending task success');
    this.setState({isLoading: false}, () =>
      this.props.navigation.navigate('ProductDetailsPage'),
    );
  };

  onGetProductDetailsDataFailed = errorMsg => {
    console.log('pending task failes');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  renderTrendingCard = ({item, index}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.onProductCardSelected(index)}>
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
              <Text style={styles.trendingProductTxt}>{item.ProductName}</Text>
            </View>
            <View style={styles.amountStatusContainer}>
              <Text style={styles.amountLabel}>
                {I18n.t('trending.amount')}{' '}
              </Text>
              <Text style={styles.dollar}>
                {I18n.t('trending.currencySymbol')}
              </Text>
              <Text style={styles.amount}>{item.ComAmount}</Text>
              {/* <Text style={styles.statusLabel}>{I18n.t('trending.status')} </Text>
            <Text style={styles.status}>{item.Status}</Text> */}
            </View>
            <View style={styles.trendingStatusContainer}>
              <Text style={styles.statusLabel}>
                {I18n.t('trending.status')}{' '}
              </Text>
              <Text style={styles.status}>{item.ComStatus}</Text>
            </View>
            <View style={styles.trendingSalesContainer}>
              <Text style={styles.trendingSalesLabel}>
                {I18n.t('trending.sales')}{' '}
              </Text>
              <Text style={styles.trendingSalesCount}>{item.Trending}</Text>
            </View>
          </View>
          <View style={styles.trendingImageContainer}>
            {/* <Image style={styles.trendingImage} source={Images.productBox} /> */}
            <Image
              source={{
                isStatic: true,
                uri: item.ProductPicture,
                method: 'GET',
                // headers: {
                //   clubId: NetTool.clubId,
                //   'Ocp-Apim-Subscription-Key': NetTool.subscriptionKey,
                // },
              }}
              style={styles.trendingImage}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
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
            // data={this.state.trendingData}
            data={this.props.trendingProductList}
            renderItem={this.renderTrendingCard}
            keyExtractor={(item, index) => index}
            showsVerticalScrollIndicator={false}
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
    trendingProductList: state.trending.trendingProductList,
  };
};

const mapDispatchToProps = dispatch => ({
  getTrendingProducts: (onSuccesscallback, onErrorcallback) =>
    dispatch(getTrendingProducts(onSuccesscallback, onErrorcallback)),
  getProductDetailsData: (ProductKey, onSuccesscallback, onErrorcallback) =>
    dispatch(
      getProductDetailsData(ProductKey, onSuccesscallback, onErrorcallback),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrendingPage);
