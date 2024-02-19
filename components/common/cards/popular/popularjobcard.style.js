import { StyleSheet } from 'react-native';

import { COLORS, FONT, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
    container: (selectedJob, item) => ({
        width: 240,
        padding: SIZES.xSmall,
        backgroundColor: selectedJob === item.job_id ? COLORS.primary : '#FFF',
        borderRadius: SIZES.large,
        justifyContent: 'space-between',
        marginTop: SIZES.small
    }),
    logoContainer: (selectedJob, item) => ({
        width: 42,
        height: 42,
        backgroundColor: selectedJob === item.job_id ? '#FFF' : COLORS.gray3,
        borderRadius: SIZES.small + 1,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    logoImage: {
        width: '80%',
        height: '80%',
        borderRadius: SIZES.xSmall,
        backgroundColor: COLORS.white
    },
    companyName: {
        fontSize: SIZES.medium - 1,
        color: COLORS.white,
        width: 140,
        flexWrap: 'wrap'
    },
    jobName: (selectedJob, item) => ({
        fontSize: SIZES.large,
        color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
        textTransform: 'capitalize',
        fontSize: 15
    }),
    infoWrapper: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    publisher: selectedJob => ({
        fontSize: SIZES.medium - 2,
        fontWeight: 'bold',
        color: selectedJob === item.job_id ? COLORS.white : COLORS.primary
    }),
    location: {
        fontSize: SIZES.small,
        color: '#B3AEC6'
    },
    topRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SIZES.small,
        marginBottom: 10,
        backgroundColor: COLORS.gray,
        borderRadius: SIZES.medium + 1,
        padding: 5
    }
});

export default styles;
