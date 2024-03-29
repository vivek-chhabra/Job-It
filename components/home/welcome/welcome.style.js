import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const searchInput = {
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.gray3,
    fontSize: SIZES.medium,
    borderRadius: SIZES.xSmall,
    color: COLORS.primary,
};

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    userName: {
        fontSize: SIZES.large,
        color: COLORS.gray,
        fontWeight: 'bold'
    },
    welcomeMessage: {
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        marginTop: 2,
        fontWeight: 'bold'
    },
    searchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: SIZES.large,
        height: 50
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.gray4,
        marginRight: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.xSmall,
        height: 45
    },
    searchInput,
    errorInput: {
        ...searchInput, 
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: COLORS.white,
        fontSize: 14
    },
    searchBtn: {
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    searchBtnImage: {
        tintColor: COLORS.white,
        width: 28,
        height: 28,
        tintColor: 'white'
    },
    tabsContainer: {
        width: '100%',
        marginTop: SIZES.medium,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tab: (activeJobType, item) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        width: 100,
        borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2
    }),
    tabText: (activeJobType, item) => ({
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
        fontWeight: activeJobType === item ? 'bold' : 'normal',
        textAlign: 'center'
    })
});

export default styles;
