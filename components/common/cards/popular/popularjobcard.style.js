import { StyleSheet } from 'react-native';

import { COLORS, FONT, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 240,
    padding: SIZES.xSmall,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : '#FFF',
    borderRadius: SIZES.large,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: COLORS.gray2,
    marginTop: SIZES.small
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? '#FFF' : COLORS.gray3,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  logoImage: {
    width: '70%',
    height: '70%',
    borderRadius: SIZES.xSmall
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: '#B3AEC6'
  },
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
    textTransform: 'capitalize',
    fontSize: 18,
  }),
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  publisher: selectedJob => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: '#B3AEC6'
  },
  topRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.small,
    marginBottom: 10,
  }
});

export default styles;
