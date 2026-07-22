import { LegalPage } from "@/components/LegalPage";

export const metadata = {
  title: "Cookies — Car Wash Pipera",
};

export default function CookiesPage() {
  return (
    <LegalPage title="Politica de cookies">
      <p>
        Acest site folosește un număr minim de cookie-uri și tehnologii
        similare, necesare pentru funcționarea tehnică (de exemplu, cookie-uri
        ale platformei de hosting / CDN).
      </p>
      <p>
        Nu folosim în prezent cookie-uri de marketing sau de urmărire
        publicitară. Dacă în viitor vom adăuga analitice (ex. măsurarea
        traficului), vom actualiza această pagină.
      </p>
      <p>
        Poți controla cookie-urile din setările browserului. Blocarea unor
        cookie-uri esențiale poate afecta afișarea corectă a site-ului.
      </p>
    </LegalPage>
  );
}
