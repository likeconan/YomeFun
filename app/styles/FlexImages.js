import { StyleSheet } from 'react-native'
import CommonStyle from './CommonStyle';
import Matrix from './Matrix';
import Colors from './Colors';
export default Styles = StyleSheet.create(
    {
        view: {
            flex: 1,
            flexWrap: 'wrap',
            flexDirection: 'row',
            height: 175,
            ...CommonStyle.marginV10
        },
        imgCon: {
            padding: 5
        },
        view_3: {
            flexDirection: 'column'
        },
        imgStyle: {
            ...CommonStyle.all100p
        },
        flex_1_0: {
            ...CommonStyle.all100p
        },
        flex_2_0: {
            width: '50%',
            height: '100%',
        },
        flex_2_1: {
            width: '50%',
            height: '100%',
        },
        flex_3_0: {
            width: '50%',
            height: '100%'
        },
        flex_3_1: {
            width: '50%',
            height: '50%'
        },
        flex_3_2: {
            width: '50%',
            height: '50%',
        },
        flex_4_0: {
            width: '50%',
            height: '50%'
        },
        flex_4_1: {
            width: '50%',
            height: '50%'
        },
        flex_4_2: {
            width: '50%',
            height: '50%',
        },
        flex_4_3: {
            width: '50%',
            height: '50%',
        },
        image_1_0: {
            borderRadius: 10,
        },
        image_2_0: {
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
        },
        image_2_1: {
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
        },
        image_3_0: {
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
        },
        image_3_1: {
            borderTopRightRadius: 10,
        },
        image_3_2: {
            borderBottomRightRadius: 10,
        },
        image_4_0: {
            borderTopLeftRadius: 10,
        },
        image_4_1: {
            borderTopRightRadius: 10,

        },
        image_4_2: {
            borderBottomLeftRadius: 10,
        },
        image_4_3: {
            borderBottomRightRadius: 10,
        },


    }
)