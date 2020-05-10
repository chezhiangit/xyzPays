Follow the fix given in the below link to fix react-native-mateiral-dropdown issues

https://github.com/n4kz/react-native-material-dropdown/issues/220

Commenting itemTextStyle: Text.propTypes.style in
..\node_modules\react-native-material-dropdown\src\components\dropdown file.
And remove Animated in Animated.Text.propTypes.style in

affix/index
helper/index
label/index
of react-native-material-textfield.

And added import { Animated, Text} from 'react-native'; in each of above three files.