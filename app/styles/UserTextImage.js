import { StyleSheet } from 'react-native'
import CommonStyle from './CommonStyle';
import Colors from './Colors';
import Matrix from './Matrix';
export default Styles = StyleSheet.create(
    {
        view: {
            borderBottomWidth: 1,
            borderColor: Colors.blueGrey100,
            flexDirection: 'row',
            backgroundColor: 'white',
            ...CommonStyle.paddingV10
        },
        userCon: {
            flex: 1.3,
            alignItems: 'center',
        },
        contentCon: {
            flex: 3.7,
            ...CommonStyle.paddingH10
        },
        description: {
            fontSize: 18
        }
    }
)