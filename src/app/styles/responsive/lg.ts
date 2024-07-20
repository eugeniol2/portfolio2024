import defaultStyles from './default'

const lgStyles = {
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  box: {
    width: '100%'
  },
  image: {
    ...defaultStyles.image,
    homeImage: '400px'
  }
}

export default lgStyles
