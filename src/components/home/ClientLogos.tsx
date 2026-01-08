const clients = [
  { name: "iCIMS", initials: "iC" },
  { name: "Mitratech", initials: "MT" },
  { name: "Cognitus", initials: "CG" },
  { name: "SHI", initials: "SH" },
  { name: "RESCOM", initials: "RC" },
  { name: "Prolifics", initials: "PF" },
  { name: "Houlihan Lokey", initials: "HL" },
];

export function ClientLogos() {
  return (
    <section className="py-12 bg-muted/50 border-y border-border overflow-hidden">
      <div className="container">
        <p className="text-center text-sm font-semibold text-primary mb-2">
          Our Trusted Clients
        </p>
        <p className="text-center text-xs text-muted-foreground mb-8">
          Trusted by Leading Corporates
        </p>
        
        <div className="relative">
          <div className="flex gap-12 items-center justify-center flex-wrap">
            {clients.map((client, index) => (
              <div 
                key={client.name}
                className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm border border-primary/20">
                  {client.initials}
                </div>
                <span className="text-foreground font-medium">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}