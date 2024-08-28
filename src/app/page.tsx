import Head from 'next/head';
import Visualizer from '@/components/Visualizer';

const SortingVisualizerPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex items-center justify-center w-full h-full">
        <Visualizer />
      </div>
    </main>
  );
};

export default SortingVisualizerPage;