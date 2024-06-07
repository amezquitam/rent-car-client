export default function CarIcon({ icon, alt }) {
  return (
    <img
      className="h-4/5 w-full bg-gradient-to-tr from-stone-700 to-stone-400 object-cover"
      src={icon}
      alt={alt}
    />
  );
}
