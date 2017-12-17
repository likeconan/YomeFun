import { StyleSheet } from 'react-native'
import CommonStyle from './CommonStyle';
import Matrix from './Matrix';
export default Styles = StyleSheet.create(
    {
        view: {
            ...CommonStyle.allCenterFlex,
        },
        imageStyle: {
            width: 70,
            height: 70,
            borderRadius: 35
        },
        titleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center'
        }
    }
)