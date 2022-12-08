export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="relative overflow-hidden">{children}</body>
    </html>
  );
}
