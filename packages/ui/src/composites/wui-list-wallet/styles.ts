import { BorderRadius, Spacing, createStyleSheet } from '../../utils/ThemeUtil';

export const stylesheet = createStyleSheet(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    width: '100%',
    borderRadius: BorderRadius.xs,
    paddingHorizontal: Spacing.xs,
    backgroundColor: theme['accent-100']
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1
  },
  name: {
    marginHorizontal: Spacing['4xs']
  },
  rightIcon: {
    marginHorizontal: Spacing.xs
  },
  image: {
    marginRight: Spacing.xs
  },
  imageDisabled: {
    opacity: 0.4
  }
}));
