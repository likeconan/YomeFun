import { StyleSheet } from 'react-native'
import CommonStyle from './CommonStyle';
import Matrix from './Matrix';

export default Styles = StyleSheet.create(
    {
        touch: {

            borderRadius: 5
        },
        view: {
            ...CommonStyle.padding10,
            ...CommonStyle.paddingH20,
            borderRadius: 10
        },
        textStyle: {
            fontSize: 18
        }
    }
)