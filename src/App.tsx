/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CareerMap from './components/CareerMap';
import TalentPool from './components/TalentPool';
import Blog from './components/Blog';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CareerMap />
        <TalentPool />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
