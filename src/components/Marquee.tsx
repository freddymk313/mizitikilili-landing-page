const items = [
  "Piano Live",
  "Location d'Instruments",
  "Instrumentistes Professionnels",
  "Événements",
  "Mariages",
  "Conférences",
  "Galas",
];

const MarqueeBand = () => {
  const text = items.map((t) => `${t} · `).join("");

  return (
    <div className="bg-primary overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1].map((i) => (
          <span key={i} className="text-primary-foreground text-sm md:text-base font-medium tracking-widest uppercase font-body mx-4">
            {text}{text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBand;
