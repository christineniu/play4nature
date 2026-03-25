import { ScrollViewStyleReset } from 'expo-router/html';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Play4Nature</title>
        <meta name="description" content="Gamified wildlife conservation app" />
        <ScrollViewStyleReset />
        <style dangerouslySetInnerHTML={{
          __html: `
            body { background-color: #C8DFC9; margin: 0; padding: 0; }
            * { box-sizing: border-box; }
          `
        }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
