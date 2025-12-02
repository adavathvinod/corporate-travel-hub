const clients = [
  { name: "TechCorp", initials: "TC" },
  { name: "InfoSys", initials: "IS" },
  { name: "DataWorks", initials: "DW" },
  { name: "CloudNet", initials: "CN" },
  { name: "FinServe", initials: "FS" },
  { name: "MediaHub", initials: "MH" },
  { name: "BuildPro", initials: "BP" },
  { name: "GreenTech", initials: "GT" },
];

export function ClientLogos() {
  return (
    <section className="py-12 bg-muted/50 border-y border-border overflow-hidden">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading corporations across India
        </p>
        
        <div className="relative">
          <div className="flex gap-12 items-center justify-center flex-wrap">
            {clients.map((client, index) => (
              <div 
                key={client.name}
                className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-muted-foreground/10 flex items-center justify-center text-muted-foreground font-semibold text-sm">
                  {client.initials}
                </div>
                <span className="text-muted-foreground font-medium">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
