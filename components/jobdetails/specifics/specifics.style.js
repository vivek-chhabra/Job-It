import { StyleSheet } from 'react-native';

import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.large,
        backgroundColor: '#FFF',
        borderRadius: SIZES.medium,
        padding: SIZES.medium
    },
    title: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontWeight: 'bold'
    },
    pointsContainer: {
        marginVertical: SIZES.small
    },
    pointWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: SIZES.small - 6
    },
    pointDot: {
        width: 6,
        height: 6,
        borderRadius: 6,
        backgroundColor: COLORS.gray2,
    },
    pointText: {
        fontSize: SIZES.medium - 2,
        color: COLORS.gray,
        marginLeft: SIZES.small,
        bottom: 6,
    }
});

export default styles;
