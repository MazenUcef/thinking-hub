import AboutSection from './components/DesignThinkingHub'
import ImpactStats from './components/ImpactStats'
import NewsletterSignup from './components/NewsletterSignup'
import ProgramTracks from './components/ProgramTracks'
import MeetOurExpertsSection from './components/MeetExpertsSection'
import MeetOurExpertsPage from './pages/MeetOurExpertsPage'

const App = () => {
  return (
    <>
      <AboutSection />
      <MeetOurExpertsSection />
      <MeetOurExpertsPage/>
      <ProgramTracks />
      <ImpactStats />
      <NewsletterSignup />
    </>
  )
}

export default App