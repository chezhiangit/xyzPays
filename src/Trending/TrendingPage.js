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
import BaseStyles from '../common/BaseStyles';
import styles from './styles';
import moment from 'moment';
import I18n from '../localization/i18n';
import Footer from '../common/UIComponents/Footer';
import {heightAdapter} from '../uttils/adapterUtil';
import Images from '../Assets/index';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

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
    };
    // this.show=false;
    this.translate = new Animated.Value(0);
  }
  renderTrendingCard = ({item, index}) => {
    return (
      <View style={styles.trendingItemContainer}>
        <View style={styles.trendingDetailsContainer}>
          <View style={styles.trendingProduct}>
            <Text style={styles.trendingProductTxt}>{item.productName}</Text>
          </View>
          <View style={styles.amountStatusContainer}>
            <Text style={styles.amountLabel}>{I18n.t('trending.amount')} </Text>
            <Text style={styles.dollar}>
              {I18n.t('trending.currencySymbol')}
            </Text>
            <Text style={styles.amount}>{item.Amount}, </Text>
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

  render() {
    return (
      <View style={BaseStyles.baseContainer}>
        <View style={styles.trendingContainer}>
          <FlatList
            style={styles.trendingList}
            data={this.state.trendingData}
            renderItem={this.renderTrendingCard}
            keyExtractor={(item, index) => index}
          />
        </View>
        <Footer />
      </View>
    );
  }
}

export default TrendingPage;
