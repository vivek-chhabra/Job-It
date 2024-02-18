import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../constants';

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    searchTitle: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
        textAlign: 'center',
        marginBottom: 10
    },
    searchResultContainer: {
        padding: SIZES.medium,
        rowGap: SIZES.small,
        paddingBottom: SIZES.large
    },
    noOfSearchedJobs: {
        marginTop: 2,
        fontFamily: FONT.medium,
        fontSize: SIZES.small + 4,
        padding: SIZES.small,
        borderRadius: SIZES.small,
        color: COLORS.primary,
        textAlign: 'center',
        color: COLORS.white,
        backgroundColor: COLORS.primary
    },
    loaderContainer: {
        marginTop: SIZES.medium
    },
    footerContainer: {
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        gap: 10,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: COLORS.white
    },
    paginationButton: {
        width: 35,
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary
    },
    paginationImage: {
        width: '60%',
        height: '60%',
        tintColor: COLORS.white
    },
    paginationTextBox: {
        width: 30,
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    paginationText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.primary,
        fontSize: 18,
        fontWeight: 'bold'
    },
    error: {
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20,
        color: 'red',
    }
});

export default styles;
