import { StyleSheet } from 'react-native';

import { COLORS, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.small,
    borderRadius: SIZES.large,
    backgroundColor: COLORS.gray3,
    marginTop: SIZES.small
  },
  logoContainer: {
    width: 45,
    height: 45,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xSmall,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    width: '70%',
    height: '70%',
    borderRadius: SIZES.xxSmall,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium
  },
  jobName: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.primary
  },
  jobType: {
    fontSize: SIZES.small + 2,
    color: COLORS.gray,
    marginTop: 3,
    textTransform: 'capitalize'
  }
});

export default styles;
