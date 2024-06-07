export default function FlipCard({ aspectRatio, front, back }) {
  return (
    <div className={`perspective-1000 group ${aspectRatio} bg-transparent`}>
      <div className="transform-style-3d group-hover:flip-effect relative h-full w-full cursor-pointer bg-transparent transition-all duration-500">
        <div
          className={`backface-hidden flip-card-front absolute flex h-full w-full ${aspectRatio} flex-col bg-stone-700 opacity-85 shadow-lg shadow-stone-400`}
        >
          {front}
        </div>
        <div
          className={`rotate-y-180 backface-hidden flip-card-back absolute flex ${aspectRatio} flex-col bg-stone-950 opacity-85 shadow-lg shadow-stone-400`}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
