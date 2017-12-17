import { StyleSheet } from 'react-native'
import CommonStyle from './CommonStyle';
import Colors from './Colors';
import Matrix from './Matrix';
export default Styles = StyleSheet.create(
    {
        view: {
            position: 'absolute',
            height: 56,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 12,
            zIndex: 99,
            width: '100%',
        },
        navigationView: {
            flex: 1
        },
        title: {
            flex: 3,
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            textShadowOffset: {
                width: 3,
                height: 2
            },
            textShadowRadius: 15,
            textShadowColor: Colors.grey800
        },
        profileHeader: {
            flex: 1
        },
        fontStyle: {
            color: 'white',
            fontSize: 28
        }

    }
)