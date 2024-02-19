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
        resizeMode: 'contain',
        backgroundColor: COLORS.white
    },
    jobTitleBox: {
        marginTop: SIZES.small
    },
    jobTitle: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontWeight: 'bold',
        width: 250
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
        marginLeft: 2
    }
});

export default styles;
