import * as React from 'react';
import {View, Text, TextInput, NativeModules} from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
import styles from './styles';
import BaseStyles from '../../BaseStyles';

var ImagePicker = NativeModules.ImageCropPicker;

class ImagePickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderImagePicker = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      mediaType: 'photo',
      includeBase64: true,
      // includeExif: true,
      cropperChooseText: 'Save',
    }).then(image => {
      console.log('image taken...', image);
      ImagePicker.openCropper({
        path: image.path,
        width: 50, //image.cropRect.width,
        height: 50, //image.cropRect.height,
        cropperCircleOverlay: false,
        cropperToolbarTitle: 'Move and Scale',
        freeStyleCropEnabled: true,
        enableRotationGesture: true,
        borderCornerThickness: 2,
        guidelinesThickness: 1,
        snapRadius: 3,
        initialCropWindowPaddingRatio: 0.2,
        fixAspectRatio: true,
        mediaType: 'photo',
        showCropFrame: true,
        smartAlbums: true,
        compressImageQuality: 0.5,
        showsSelectedCount: true,
        showCropGuidelines: true,
        cropperChooseText: 'Save',

      }).then(imageCroped => {
        console.log('imageCropped', imageCroped);
      });
    });
  };

  componentDidMount() {
    // this.renderImagePicker();
  }

  render() {
    console.log('render Image picker');
    return (
      <View style={BaseStyles.baseContainer}>{this.renderImagePicker()}</View>
    );
  }
}

export default ImagePickerComponent;
