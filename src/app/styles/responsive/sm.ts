import defaultStyles from './default'

const smStyles = {
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginX: '16px'
  },
  typography: {
    wordBreak: 'break-word'
  },
  box: {
    width: '100%'
  },
  image: {
    aboutImage: '250px',
    homeImage: '300px'
  }
}

export default smStyles
