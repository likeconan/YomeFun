import { StyleSheet } from 'react-native'
import Colors from './Colors';

export default Styles = StyleSheet.create({
    view: {
        width: '100%',
    },
    fieldCon: {
        paddingHorizontal: 5,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: Colors.grey400,
        borderBottomWidth: 1,
    },
    iconCon: {
        flex: 1,
    },
    textInputStyle: {
        marginLeft: 10,
        borderBottomColor: Colors.grey400,
        borderBottomWidth: 1,
        flex: 9
    },
    errorText: {
        color: Colors.errorColor,
        marginTop: 5
    }
})