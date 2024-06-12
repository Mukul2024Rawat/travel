// app/root.tsx
import { LinksFunction, MetaFunction, Outlet, Links, LiveReload, Meta, ScrollRestoration, Scripts } from "remix";
import styles from "./styles/tailwind.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => {
  return { title: "Uttarakhand Travel Destinations" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
