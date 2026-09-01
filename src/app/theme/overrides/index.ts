import Button from './button'
import MuiIconButton from './iconButton'
import navTabs from './navTabs'
import surfaces from './surfaces'
import MuiTypography from './typography'

const Overrides = () =>
  ({
    ...MuiIconButton,
    ...MuiTypography,
    ...Button,
    ...navTabs(),
    ...surfaces
  } as any)

export default Overrides
