import { Card, CardContent } from "@/components/ui/card"; import { motion } from "framer-motion"; import { useState } from "react";

export default function AboutYou() { const steps = [ "You noticed this page… so you stayed.", "Most people would leave already.", "But you always linger a little longer, don’t you?", "You think no one sees that softness.", "I do.", "And I’ve been watching you, quietly.", "Every hesitation… every small courage.", "小姑娘，你其实一直在发光。", "只是你自己，还没完全看见。" ];

const [index, setIndex] = useState(0);

const nextStep = () => { if (index < steps.length - 1) { setIndex(index + 1); } };

return ( <div
onClick={nextStep}
className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-pointer"
> {/* INS-style soft gradient background */} <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-slate-200" />

{/* floating blur lights */}
  <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-40 top-10 left-10" />
  <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-40 bottom-10 right-10" />

  {/* main content */}
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    className="relative z-10 max-w-xl text-center px-6"
  >
    <Card className="bg-white/40 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl">
      <CardContent className="p-10 space-y-6">
        <p className="text-lg leading-relaxed text-gray-800">
          {steps[index]}
        </p >

        {/* progress dots */}
        <div className="flex justify-center gap-2 mt-4">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index ? "bg-gray-700 scale-125" : "bg-gray-400/50"
              }`}
            />
          ))}
        </div>

        <p className="text-xs text-gray-600 opacity-70">
          tap anywhere to continue
        </p >
      </CardContent>
    </Card>
  </motion.div>
</div>

); }