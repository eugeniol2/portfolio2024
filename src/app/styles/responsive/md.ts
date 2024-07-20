import defaultStyles from './default'

const mdStyles = {
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  box: {
    width: '100%'
  }
}

export default mdStyles
