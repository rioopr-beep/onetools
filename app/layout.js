export const metadata = {
  title: "One Tools",
  description: "Semua alat bantu dalam satu website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
