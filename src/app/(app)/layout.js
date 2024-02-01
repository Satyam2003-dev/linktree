
export const metadata = {
  title: "Linktree",
  description: "Linktree",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Link Tree</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
