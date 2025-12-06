import React from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { ChatInterface } from './components/ChatInterface';
import { 
  Activity, 
  Brain, 
  MessageSquare, 
  ShieldCheck, 
  Lock, 
  UserCheck, 
  Fingerprint, 
  HeartPulse, 
  Smartphone 
} from 'lucide-react';

// Subcomponents defined here for simplicity in file structure, 
// ensuring functional components are strictly separated.

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: string }) => (
  <div className={`group p-8 rounded-2xl bg-card border border-slate-800 hover:border-slate-600 transition-all duration-500 hover:-translate-y-1`} style={{ transitionDelay: delay }}>
    <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="font-serif text-xl text-white mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const TimelineItem = ({ number, title, desc, align = 'left' }: { number: string, title: string, desc: string, align?: 'left' | 'right' }) => (
  <div className={`relative flex items-center justify-between mb-12 md:mb-24 w-full ${align === 'right' ? 'flex-row-reverse' : ''}`}>
    <div className="w-full md:w-5/12"></div>
    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark border-2 border-slate-700 text-[10px] flex items-center justify-center font-bold text-slate-500 z-10">
      {number}
    </div>
    <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${align === 'right' ? 'md:text-right' : ''}`}>
      <h4 className="font-serif text-white text-lg mb-2">{title}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  </div>
);

const PhoneMockup = ({ src, label }: { src: string, label: string }) => (
  <div className="flex-shrink-0 w-64 snap-center">
    <div className="relative rounded-[2rem] border-4 border-slate-800 bg-black overflow-hidden aspect-[9/19] shadow-2xl">
      <img src={src} alt={label} className="w-full h-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
        <span className="text-white font-medium text-sm">{label}</span>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-dark overflow-x-hidden selection:bg-white/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-medium text-slate-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Accepting early access
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-8">
              Your own <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">AI Doctor</span> <br />
              built around <br />
              your body.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              Your AI Doctor understands your medical history, visualizes your vitals, and helps you make decisions between visits. It spots patterns, senses deviations, and helps you connect the dots.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Join Waitlist</Button>
              <Button variant="outline" size="lg">Watch Demo</Button>
            </div>
          </div>
          
          <div className="relative">
            {/* Abstract representation of AI analysis */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900/50 aspect-[4/3] group">
              <img 
                src="https://picsum.photos/800/600?grayscale" 
                alt="AI Analysis" 
                className="w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
              
              {/* Floating UI Elements mocking AI interface */}
              <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md border border-slate-700 p-4 rounded-xl max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-slate-700">
                    <img src="https://picsum.photos/50/50" className="w-full h-full rounded-full object-cover" alt="Doctor" />
                  </div>
                  <div className="text-xs">
                    <div className="text-white font-serif">Dr. AI</div>
                    <div className="text-slate-400">Analysis complete</div>
                  </div>
                </div>
                <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-white"></div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8">
                 <div className="font-serif text-2xl text-white mb-1">98.4%</div>
                 <div className="text-xs text-slate-400 uppercase tracking-wider">Accuracy Metric</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-3">How it works</h2>
            <p className="font-serif text-3xl md:text-4xl text-white max-w-2xl">
              Your AI Doctor combines three essential functions to provide continuous, intelligent care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Activity}
              title="It learns your body"
              desc="It observes your daily patterns — sleep, activity, routines — and understands how your body uniquely behaves."
              delay="0ms"
            />
            <FeatureCard 
              icon={Brain}
              title="It thinks clinically"
              desc="It looks for the 'why' in a way a clinical doctor would — and flags anything important early."
              delay="100ms"
            />
            <FeatureCard 
              icon={MessageSquare}
              title="It talks like a doctor"
              desc="You get clear explanations and simple steps — not charts, not jargon, not confusion."
              delay="200ms"
            />
          </div>
        </div>
      </section>

      {/* Safeguards */}
      <section id="safeguards" className="py-24 px-6 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-3">Safeguards you deserve</h2>
            <p className="font-serif text-3xl text-white mb-12">Designed with multiple layers of protection to ensure safety, privacy, and the highest standard of care.</p>
            
            <div className="space-y-8">
              {[
                { title: "Human doctors stand behind every action", desc: "AI Doctor is never alone. It works alongside real clinicians who monitor safety, review complex situations, and support your care whenever needed." },
                { title: "Military-grade encryption", desc: "Your health data is encrypted at rest and in transit. Only you decide who sees your information." },
                { title: "Clinically validated models", desc: "Our models are trained on validated medical literature and fine-tuned by board-certified physicians." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="font-serif text-2xl text-slate-600 group-hover:text-white transition-colors">0{idx + 1}</div>
                  <div>
                    <h4 className="text-white text-lg font-medium mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            {/* Visual representation of Safeguards */}
            <div className="relative w-full aspect-square max-w-md">
               <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_60s_linear_infinite]">
                 <circle cx="100" cy="100" r="90" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 4" />
                 <circle cx="100" cy="100" r="70" fill="none" stroke="#1e293b" strokeWidth="1" />
                 <circle cx="100" cy="100" r="50" fill="none" stroke="#334155" strokeWidth="1" />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center">
                 <ShieldCheck size={64} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
               </div>
               
               {/* Orbiting elements */}
               <div className="absolute top-1/2 left-1/2 w-[140px] h-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-700 animate-[spin_10s_linear_infinite_reverse]">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark p-1">
                   <Lock size={16} className="text-slate-400" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Trust */}
      <section className="py-20 bg-card border-y border-slate-800">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
               <img src="https://picsum.photos/600/400?grayscale&blur=2" alt="Trust" className="rounded-xl opacity-80" />
            </div>
            <div className="order-1 md:order-2">
               <h3 className="font-serif text-3xl text-white mb-6">Built for Trust</h3>
               <p className="text-slate-400 mb-6 leading-relaxed">
                 We understand that trust is earned through transparency, consistency, and results. Your AI Doctor is not a replacement for your healthcare team — it is a tool that works alongside them to give you better visibility. Every aspect of our platform is designed to keep you safe, informed, and in control.
               </p>
               <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <UserCheck size={16} /> Human Oversight
                  </div>
                   <div className="flex items-center gap-2 text-white text-sm">
                    <Fingerprint size={16} /> Privacy First
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-3">Your Journey with Chronic AI</h2>
            <p className="font-serif text-3xl text-white">Continuous care that evolves with you.</p>
          </div>
          
          <div className="relative">
             {/* Center Line */}
             <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800 md:-translate-x-1/2"></div>
             
             <TimelineItem 
               number="01" 
               title="We get to know your history" 
               desc="Share your health history, goals, and what matters most to you. A real clinician reviews everything to ensure we understand your unique needs."
               align="left"
             />
             <TimelineItem 
               number="02" 
               title="Your health signals connect automatically" 
               desc="We connect with your wearables and health apps to create a baseline picture of your daily health."
               align="right"
             />
             <TimelineItem 
               number="03" 
               title="Your personal AI Doctor begins learning" 
               desc="It starts spotting patterns in your sleep, stress, and activity that might affect your condition."
               align="left"
             />
             <TimelineItem 
               number="04" 
               title="Daily guidance, weekly check-ins" 
               desc="Receive actionable insights each morning and a comprehensive summary of your progress every week."
               align="right"
             />
             <TimelineItem 
               number="05" 
               title="A human clinician watches over everything" 
               desc="Our clinical team is alerted to any significant changes or concerns, ensuring you're never managing it alone."
               align="left"
             />
          </div>
        </div>
      </section>

      {/* Outcomes / App Screens */}
      <section id="outcomes" className="py-24 bg-card px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
           <div className="mb-12">
            <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-3">Real Clinical Outcomes</h2>
            <p className="font-serif text-3xl text-white mb-4">Felt in your everyday life.</p>
            <p className="text-slate-400 max-w-2xl">
              You choose one or more improvement programs. Your AI Doctor works in the background every day — helping you feel the changes in ways that matter.
            </p>
           </div>

           {/* Horizontal Scroll Area */}
           <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x">
             <PhoneMockup src="https://picsum.photos/300/600?random=1" label="Glucose Stability" />
             <PhoneMockup src="https://picsum.photos/300/600?random=2" label="Blood Pressure" />
             <PhoneMockup src="https://picsum.photos/300/600?random=3" label="Weight & Metabolic" />
             <PhoneMockup src="https://picsum.photos/300/600?random=4" label="Heart Health" />
             <PhoneMockup src="https://picsum.photos/300/600?random=5" label="Sleep Patterns" />
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="pricing" className="py-20 px-6 border-t border-slate-800 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h3 className="font-serif text-2xl text-white mb-2">No Surprises. No Fine Print. Just the Truth.</h3>
             <p className="text-slate-500 text-sm">We believe in complete transparency. Here's exactly what you get.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <h4 className="font-serif text-white mb-6">Included with Chronic AI</h4>
              <ul className="space-y-4">
                {['Your own AI Doctor', 'Daily guidance & weekly check-ins', '24/7 Monitoring & Support', 'Continuous learning of patterns', 'Integration with your existing wearables'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <div className="mt-1 min-w-[16px]"><HeartPulse size={14} className="text-slate-500" /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <h4 className="font-serif text-white mb-6">Covered by Your Insurance</h4>
              <ul className="space-y-4">
                {['Routine lab tests', 'Imaging and results', 'Prescription medication', 'In-person doctor visits', 'Many telehealth visits with clinicians'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <div className="mt-1 min-w-[16px]"><ShieldCheck size={14} className="text-slate-500" /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <h4 className="font-serif text-white mb-6">User Choice</h4>
              <ul className="space-y-4">
                {['Additional specialty sensors', 'Non-standard lab panels', 'Extra in-person services', 'Any external devices not included in base kit'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <div className="mt-1 min-w-[16px]"><Smartphone size={14} className="text-slate-500" /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-white">ChronicGPT</span>
             </div>
             <div className="flex gap-6 text-xs text-slate-500">
               <a href="#" className="hover:text-white">Privacy Policy</a>
               <a href="#" className="hover:text-white">Terms of Service</a>
               <a href="#" className="hover:text-white">Contact</a>
             </div>
             <div className="text-xs text-slate-600">
               © 2024 ChronicGPT AI Inc. All rights reserved.
             </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button and Interface */}
      <ChatInterface />
    </div>
  );
}

export default App;