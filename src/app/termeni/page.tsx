import { LegalPage } from "@/components/LegalPage";
import { business } from "@/lib/data";

export const metadata = {
  title: "Termeni — Car Wash Pipera",
};

export default function TermeniPage() {
  return (
    <LegalPage title="Termeni și condiții">
      <p>
        Site-ul prezintă informații despre {business.name}, spălătorie auto
        situată la {business.address.full}.
      </p>
      <p>
        Serviciile (tipuri de spălare, detailing etc.) și prețurile se confirmă
        la fața locului, în funcție de tipul vehiculului și de starea acestuia.
        Informațiile de pe site au caracter orientativ.
      </p>
      <p>
        Programul publicat: {business.hours[0].days}, {business.hours[0].time}.
        Pot exista modificări ocazionale; pentru confirmare, sună la{" "}
        <a href={`tel:${business.phone}`} className="text-aqua hover:underline">
          {business.phoneDisplay}
        </a>
        .
      </p>
      <p>
        Linkurile către Google Maps și Instagram te duc pe platforme terțe,
        guvernate de politicile proprii ale acelor servicii.
      </p>
    </LegalPage>
  );
}
