import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        padding: SIZES.small,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: COLORS.white
    },
    likeBtn: fav => ({
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: fav ? COLORS.white : COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: fav ? COLORS.tertiary : COLORS.white
    }),
    likeBtnImage: fav => ({
        width: '40%',
        height: '40%',
        tintColor: !fav ? COLORS.tertiary : COLORS.white
    }),
    applyBtn: {
        flex: 1,
        backgroundColor: '#FE7654',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: SIZES.medium,
        borderRadius: SIZES.medium
    },
    applyBtnText: {
        fontSize: SIZES.medium,
        color: COLORS.white,
        fontWeight: 'bold'
    }
});

export default styles;
