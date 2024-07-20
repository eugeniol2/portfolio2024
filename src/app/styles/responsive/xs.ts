import defaultStyles from './default'

const xsStyles = {
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    flexDirection: 'column',
    marginX: '16px',
    justifyContent: 'center'
  },
  box: {
    width: '100%'
  },
  image: {
    aboutImage: '0',
    homeImage: '0'
  }
}

export default xsStyles
