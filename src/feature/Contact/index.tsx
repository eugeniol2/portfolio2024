import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {
  Box,
  Button,
  Link,
  Stack,
  type SvgIconProps,
  Typography
} from '@mui/material'
import React from 'react'

import Reveal from 'src/app/components/reveal'
import Section from 'src/app/components/section'
import { fonts, layout, tokens, transitions } from 'src/app/theme/tokens'
import { hexToRGBA } from 'src/app/utils/hexToRGBA'

const CHANNEL_VALUE_CLASS = 'channel-value'
const CHANNEL_LABEL_COLUMN_WIDTH = '10rem'
const ROW_HOVER_OPACITY = 0.05
const SOCIAL_BUTTON_SIZE = '3rem'
const SOCIAL_GLOW_OPACITY = 0.9

const CONTACT_CHANNELS = [
  {
    label: 'WhatsApp',
    value: '(81) 9 8286-6285',
    href: 'https://wa.me/5581982866285'
  },
  {
    label: 'E-mail',
    value: 'Eugeniodornelesl2@gmail.com',
    href: 'mailto:Eugeniodornelesl2@gmail.com'
  }
]

const RESUME_FILES = [
  {
    label: 'Português',
    href: '/curriculo/Curriculo_Eugenio_Araujo_PT.pdf'
  },
  {
    label: 'English',
    href: '/curriculo/Resume_Eugenio_Araujo_EN.pdf'
  }
]

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eugenio-dorneles-araujo/',
    Icon: LinkedInIcon
  },
  {
    label: 'GitHub',
    href: 'https://github.com/eugeniol2',
    Icon: GitHubIcon
  }
]

interface ContactChannelRowProps {
  label: string
  value: string
  href: string
  hasTopBorder: boolean
}

const ContactChannelRow: React.FC<ContactChannelRowProps> = ({
  label,
  value,
  href,
  hasTopBorder
}) => (
  <Box
    component="a"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: '1fr',
        sm: `${CHANNEL_LABEL_COLUMN_WIDTH} 1fr`
      },
      gap: { xs: 1, sm: 4 },
      alignItems: 'baseline',
      paddingX: { xs: 5, md: 6 },
      paddingY: 5,
      textDecoration: 'none',
      borderTop: hasTopBorder ? '1px solid' : 'none',
      borderColor: 'divider',
      transition: `background-color ${transitions.fast}`,
      '&:hover': {
        backgroundColor: hexToRGBA(tokens.accent, ROW_HOVER_OPACITY)
      },
      [`&:hover .${CHANNEL_VALUE_CLASS}`]: { color: 'primary.main' }
    }}
  >
    <Typography variant="overline" sx={{ color: 'text.disabled' }}>
      {label}
    </Typography>
    <Typography
      className={CHANNEL_VALUE_CLASS}
      component="span"
      sx={{
        fontFamily: fonts.mono,
        fontSize: '1rem',
        color: 'text.primary',
        transition: `color ${transitions.fast}`,
        wordBreak: 'break-word'
      }}
    >
      {value}
    </Typography>
  </Box>
)

interface SocialLinkProps {
  label: string
  href: string
  Icon: React.ComponentType<SvgIconProps>
}

const SocialLink: React.FC<SocialLinkProps> = ({ label, href, Icon }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: SOCIAL_BUTTON_SIZE,
      height: SOCIAL_BUTTON_SIZE,
      color: 'text.secondary',
      border: '1px solid',
      borderColor: 'divider',
      transition: `color ${transitions.fast}, border-color ${transitions.fast}, box-shadow ${transitions.fast}`,
      '&:hover': {
        color: 'primary.main',
        borderColor: 'primary.main',
        textDecoration: 'none',
        boxShadow: `0 0 24px -10px ${hexToRGBA(
          tokens.accent,
          SOCIAL_GLOW_OPACITY
        )}`
      }
    }}
  >
    <Icon fontSize="medium" />
  </Link>
)

const Contact = () => {
  return (
    <Stack gap={{ xs: 16, md: 24 }}>
      <Box>
        <Reveal>
          <Typography variant="overline">Contato</Typography>
        </Reveal>
        <Reveal order={1}>
          <Typography variant="h1" sx={{ marginTop: 3 }}>
            Vamos conversar!
          </Typography>
        </Reveal>
        <Reveal order={2}>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ marginTop: 6, maxWidth: layout.leadMaxWidth }}
          >
            Tenho sempre tempo para uma boa conversa ou para responder a
            perguntas sobre projetos. Sinta-se à vontade para me chamar no
            WhatsApp ou por e-mail.
          </Typography>
        </Reveal>
      </Box>

      <Section order={1} title="Canais">
        <Box sx={{ border: '1px solid', borderColor: 'divider' }}>
          {CONTACT_CHANNELS.map((channel, index) => (
            <Reveal key={channel.label} order={index}>
              <ContactChannelRow
                label={channel.label}
                value={channel.value}
                href={channel.href}
                hasTopBorder={index > 0}
              />
            </Reveal>
          ))}
        </Box>

        <Reveal order={2}>
          <Stack direction="row" gap={4} sx={{ marginTop: 8 }}>
            {SOCIAL_LINKS.map(social => (
              <SocialLink
                key={social.label}
                label={social.label}
                href={social.href}
                Icon={social.Icon}
              />
            ))}
          </Stack>
        </Reveal>
      </Section>

      <Section order={2} title="Currículo">
        <Reveal>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ marginBottom: 6, maxWidth: layout.leadMaxWidth }}
          >
            Mesmo conteúdo nos dois idiomas, em PDF.
          </Typography>
        </Reveal>
        <Reveal order={1}>
          <Stack direction="row" flexWrap="wrap" gap={4}>
            {RESUME_FILES.map(resume => (
              <Button
                key={resume.href}
                variant="outlined"
                href={resume.href}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DescriptionOutlinedIcon fontSize="small" />}
              >
                {resume.label}
              </Button>
            ))}
          </Stack>
        </Reveal>
      </Section>
    </Stack>
  )
}

export default Contact
