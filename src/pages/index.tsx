import Seo from 'src/app/components/seo'
import Home from 'src/feature/Home'

const HomePage = () => (
  <>
    <Seo
      title="Eugênio Araújo | Desenvolvedor Full-Stack"
      description="Desenvolvedor full-stack em Carpina, PE, disponível para remoto. React, Next.js e TypeScript no front-end; Node.js, Prisma e PostgreSQL no back-end."
      path="/"
    />
    <Home />
  </>
)

export default HomePage
