export default function FlipCard({ aspectRatio, front, back, onClick }) {
  return (
    <div
      className={`group perspective-1000 ${aspectRatio} bg-transparent`}
      onClick={onClick}
    >
      <div className="group-hover:flip-effect relative h-full w-full cursor-pointer bg-transparent transition-all duration-500 transform-style-3d">
        <div
          className={`flip-card-front absolute flex h-full w-full backface-hidden ${aspectRatio} flex-col bg-stone-700 opacity-85 shadow-lg shadow-stone-400`}
        >
          {front}
        </div>
        <div
          className={`flip-card-back absolute flex rotate-y-180 backface-hidden ${aspectRatio} flex-col bg-stone-950 opacity-85 shadow-lg shadow-stone-400`}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
