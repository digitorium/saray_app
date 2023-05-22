import React from 'react';

import TopBanner from '../components/TopBanner';
import WorkoutsTeaser from '../components/WorkoutsTeaser';
import GoalTeaser from '../components/GoalTeaser';
import WorkoutsLevelFilter from '../components/WorkoutsLevelFilter';
import ExercisesCTA from '../components/ExercisesCTA';
import DietsList from '../components/DietsList';
import PremiumCTA from '../components/PremiumCTA';

const Home = () => {
  
  return (
    <main>
      <TopBanner />
      <WorkoutsTeaser />
      <GoalTeaser />
      <WorkoutsLevelFilter />
      <ExercisesCTA />
      <DietsList />
      <PremiumCTA />
    </main>
  )
}

export default Home