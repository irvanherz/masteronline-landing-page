import Hero from '@/app/components/Hero'
import StdLayout from '@/components/StdLayout'
import Achievements from './components/Achievements'
import Features from './components/Features'
import Integrations from './components/Integrations'
import Testimonial from './components/Testimonial'

export default function Home() {
  return (
    <StdLayout showNavbar={false} activeKey="home">
      <Hero />
      <Features />
      <Integrations />
      <Achievements />
      <Testimonial />
    </StdLayout>
  )
}
