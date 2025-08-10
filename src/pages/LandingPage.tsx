import AvailCoursesSection from '../components/AvailCoursesSection'
import SuccessStoriesSection from '../components/SuccessStoriesSection'
import MeetOurExpertsSection from '../components/MeetExpertsSection'
import DesignThinkingHub from '../components/DesignThinkingHub'
import ProgramTracks from '../components/ProgramTracks'
import ImpactStats from '../components/ImpactStats'
import NewsletterSignup from '../components/NewsletterSignup'

const LandingPage = () => {
    return (
        <div className='bg-white'>
            <DesignThinkingHub />
            <ProgramTracks />
            <AvailCoursesSection />
            <MeetOurExpertsSection />
            <SuccessStoriesSection />
            <ImpactStats />
            <NewsletterSignup />
        </div>
    )
}

export default LandingPage