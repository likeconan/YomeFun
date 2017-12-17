import { StyleSheet } from 'react-native'
import CommonStyle from './CommonStyle';
import Matrix from './Matrix';
import Colors from './Colors';
export default Styles = StyleSheet.create(
    {
        view: {
            alignItems: 'center'
        },
        iconConStyle: {
            flex: 2,
        },
        inputView: {
            width: 220,
            marginTop: 10,
            ...CommonStyle.allCenterFlex
        },
        imageStyle: {
            width: 200,
            height: 125,
        },
        infoCon: {
            ...CommonStyle.allCenterFlex
        },
        title: {
            fontSize: 24,
            color: Colors.blueGrey700,
            ...CommonStyle.marginV10
        },
        description: {
            color: Colors.blueGrey300
        },
        viewStyle: {
            borderBottomColor: Colors.blueGrey500,
            borderBottomWidth: 1,
        },
        textInput: {
            fontSize: 22,
            borderBottomWidth: 0,
            color: Colors.blueGrey700
        },
        smallTextInput: {
            fontSize: 16,
            borderBottomWidth: 0,
            color: Colors.blueGrey700
        }

    }
)