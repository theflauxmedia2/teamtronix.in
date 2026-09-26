import { clients } from "@/lib/products";

export function Clients() {
  const loop = [...clients, ...clients];

  return (
    <div className="clients-bar" id="clients">
      <div className="container">
        <div className="clients-bar-inner">
          <span className="clients-label">Trusted By 4000+ Leading Companies</span>
          <div className="clients-track">
            <div className="clients-scroll">
              {loop.map((client, index) => (
                <span className="client-logo" key={`${client.alt}-${index}`}>
                  <img src={client.src} alt={index < clients.length ? client.alt : ""} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
