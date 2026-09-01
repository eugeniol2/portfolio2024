import Seo from 'src/app/components/seo'
import Contact from 'src/feature/Contact'

const ContactPage = () => (
  <>
    <Seo
      title="Contato | Eugênio Araújo, Desenvolvedor Full-Stack"
      description="Fale comigo por WhatsApp ou e-mail, e baixe meu currículo em português ou inglês. Disponível para estágio ou posição júnior, remoto."
      path="/contact"
    />
    <Contact />
  </>
)

export default ContactPage
