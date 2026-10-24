import { categories } from "../lib/features";

export default function Home() {
  return (
    <main style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h1>One Tools</h1>
      <p>Semua alat bantu dalam satu website.</p>

      {categories.map((cat) => (
        <section key={cat.id} style={{ marginTop: 28 }}>
          <h2>{cat.name}</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 12,
            }}
          >
            {cat.features.map((f) => (
              <div
                key={f.name}
                style={{ border: "1px solid #ccc", borderRadius: 10, padding: 12 }}
              >
                <strong>{f.name}</strong>
                <p style={{ margin: "6px 0", fontSize: 14 }}>{f.desc}</p>
                <small>
                  {f.saveData ? "Menyimpan data" : "Tanpa simpan data"} · Segera hadir
                </small>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
