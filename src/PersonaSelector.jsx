export default function PersonaSelector({ onSelect }) {
  const personas = ['Jenna', 'Riley', 'Nina', 'Farrah', 'Lexi', 'Coco'];
  return (
    <div className="flex overflow-x-auto gap-4 p-4">
      {personas.map((name) => (
        <button
          key={name}
          className="px-4 py-2 bg-darkglass text-glow font-seduction rounded-2xl shadow-soft backdrop-blur hover:bg-velvet"
          onClick={() => onSelect(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
