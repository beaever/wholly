'use client';

import { MapHeader } from './MapHeader';
import { Timeline } from './Timeline';
import { NavBar } from '@/components/common';

export function RoadmapScreen() {
  return (
    <div className='min-h-screen bg-bg pb-[100px]'>
      <MapHeader />
      <Timeline />
      <NavBar />
    </div>
  );
}
