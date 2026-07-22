import { LegalPage } from "@/components/LegalPage";
import { business } from "@/lib/data";

export const metadata = {
  title: "Confidențialitate — Car Wash Pipera",
};

export default function ConfidentialitatePage() {
  return (
    <LegalPage title="Politica de confidențialitate">
      <p>
        Această pagină descrie modul în care {business.name} tratează
        informațiile pe care le poți furniza prin intermediul site-ului web
        (de exemplu, dacă ne contactezi telefonic sau ne vizitezi pe baza
        datelor publicate aici).
      </p>
      <p>
        <strong className="text-chrome">Date de contact publicate:</strong>{" "}
        telefon, adresă, program și linkuri către Google Maps / Instagram. Aceste
        date sunt publice și destinate clienților.
      </p>
      <p>
        <strong className="text-chrome">Date colectate de site:</strong> acest
        site nu are formular de contact și nu creează conturi de utilizator. Pot
        exista jurnale tehnice de server (IP, tip browser) generate automat de
        infrastructura de hosting, folosite pentru securitate și funcționare.
      </p>
      <p>
        <strong className="text-chrome">Cookie-uri:</strong> vezi pagina{" "}
        <a href="/cookies" className="text-aqua hover:underline">
          Cookies
        </a>
        .
      </p>
      <p>
        Pentru întrebări legate de date personale, contactează-ne la{" "}
        <a href={`tel:${business.phone}`} className="text-aqua hover:underline">
          {business.phoneDisplay}
        </a>
        .
      </p>
    </LegalPage>
  );
}
