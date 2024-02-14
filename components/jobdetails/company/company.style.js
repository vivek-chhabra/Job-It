import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        marginVertical: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        gap: 30
    },
    jobDetails: {
        gap: 5,
    },
    logoBox: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.gray3,
        borderRadius: SIZES.large
    },
    logoImage: {
        width: '80%',
        height: '80%',
        borderRadius: SIZES.small,
        resizeMode: 'contain'
    },
    jobTitleBox: {
        marginTop: SIZES.small
    },
    jobTitle: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontFamily: FONT.bold,
        fontWeight: 'bold',
        width: 150
    },
    companyInfoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 250,
        flexWrap: 'wrap',
        gap: 5
    },
    companyName: {
        fontSize: SIZES.medium - 2,
        color: COLORS.primary,
        fontFamily: FONT.medium
    },
    locationBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: SIZES.xSmall - 4,
        backgroundColor: COLORS.gray3
    },
    locationImage: {
        width: 14,
        height: 14,
        tintColor: COLORS.gray
    },
    locationName: {
        fontSize: SIZES.medium - 2,
        color: COLORS.gray,
        fontFamily: FONT.regular,
        marginLeft: 2
    }
});

export default styles;
