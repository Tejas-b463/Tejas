export default function AboutCard() {
  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900/80 to-slate-800 shadow-2xl min-h-[36rem]">
      {/* Background coding image */}
      <div className="absolute inset-0">
        <img 
          src="/coding-pov.png" 
          alt="Coding background" 
          className="w-full h-full object-cover rounded-2xl opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-2xl"></div>
      </div>

      {/* Decorative dots in top right */}
      <div className="absolute top-6 right-6 flex space-x-1.5 z-10">
        <div className="w-2.5 h-2.5 bg-white/50 rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-white/40 rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
      </div>

      {/* Content positioned at bottom left */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white leading-tight">
            Hi, I&apos;m Tejas Banait
          </h2>
          <p className="text-slate-200 text-base leading-relaxed max-w-md">
            I developed my frontend and backend dev skills
            to deliver dynamic and responsive software and web applications.
          </p>
        </div>
      </div>

      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
    </div>
  );
}
