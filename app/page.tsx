// pages/index.tsx or app/page.tsx
import AnimationControls from '@/components/AnimationControls';
import Gestures from '@/components/Gestures';
import ScrollBasedAnimations from '@/components/ScrollBasedAnimations';
import ViewBasedAnimations from '@/components/ViewBasedAnimations';
import dynamic from 'next/dynamic';

// Dynamically import the BasicsOfMotion component with SSR disabled
const BasicsOfMotion = dynamic(() => import('@/components/BasicsOfMotion'), {
    ssr: false
});

export default function Home() {
  return (
    <main>
        Next - Framer Motion
        {/* <BasicsOfMotion/> */}
        {/* <Gestures/> */}
        {/* <AnimationControls/> */}
        {/* <ViewBasedAnimations/> */}
        <ScrollBasedAnimations/>
    </main>
  );
}
