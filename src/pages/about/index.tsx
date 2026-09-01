import Seo from 'src/app/components/seo'
import About from 'src/feature/About'

const AboutPage = () => (
  <>
    <Seo
      title="Sobre mim | Eugênio Araújo, Desenvolvedor Full-Stack"
      description="Estudante de Sistemas de Informação na UFRPE e desenvolvedor full-stack. Interfaces com React e Next.js, APIs REST com Node.js, Prisma e PostgreSQL."
      path="/about"
    />
    <About />
  </>
)

export default AboutPage
