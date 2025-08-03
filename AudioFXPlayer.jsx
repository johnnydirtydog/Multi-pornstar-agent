export default function AudioFXPlayer() {
  const sounds = ['Moan', 'Whisper', 'Spank', 'Climax'];
  const play = (sound) => new Audio(`/${sound.toLowerCase()}.mp3`).play();

  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {sounds.map(s => (
        <button key={s} onClick={() => play(s)} className="bg-velvet text-glow p-3 rounded-xl font-bold hover:scale-105 transition">
          {s}
        </button>
      ))}
    </div>
  );
}
