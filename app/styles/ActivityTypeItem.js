import { StyleSheet } from 'react-native'
import CommonStyle from './CommonStyle';
import Matrix from './Matrix';
export default Styles = StyleSheet.create(
    {
        view: {
            flex: 1,
        },
        imageStyle: {
            ...CommonStyle.padding20,
            ...CommonStyle.all100p,
            ...CommonStyle.allCenterFlex,
        },
        titleCon: {
            ...CommonStyle.rowFlexAround,
        },
        fontStyle: {
            color: 'white',
            fontSize: 28
        },
        countStyle: {
            color: 'white',
            fontSize: 16,
            marginLeft: 25,
            alignSelf: 'center'
        }

    }
)