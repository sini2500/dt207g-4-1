## DT207G - backend-baserad webbutveckling

Det här är ett projekt för kursen backend-baserad webbutveckling, VT 2026.

API publicerat på Render: https://sini2500-dt207g-3.onrender.com

Front-end publicerad på Netlify: https://dt207g-3-sini2500.netlify.app

---

För den här uppgiften skulle vi skapa ett litet API för att hantera arbetserfarenheter, för ett CV, i en databas.

MongoDB har använts för databasen, Express för API:et och en separat front-end gjordes i ett annat git-repo.

Tjänsten MongoDB Atlas har använts för databasen, och Mongoose för att kommunicera med den.

CORS-kontroll har satts upp mellan API och front-end eftersom de är på separata domäner.

## Installation

1. Klona ner källkodsfilerna

2. Kör kommando `npm install` för att installera nödvändiga npm-paket

Mongoose-schemat förväntar sig följande fält:

|Schema-namn|Fält  |
|--|--|
|WorkExperience  | **companyname** (string), **jobtitle** (string), **location** (string), **startdate** (date), **enddate** (date), **description** (string),  |

## Användning

Nedan finns beskrivet hur man nå APIet på olika vis:

|Metod  |Ändpunkt                |Beskrivning                                                                  |
|-------|------------------------|-----------------------------------------------------------------------------|
|GET    |/api/workexperience     | Hämtar alla tillgängliga poster.                                            |
|GET    |/api/workexperience/:id | Hämtar en specifik post med angivet ID.                                     |
|POST   |/api/workexperience     | Lagrar en ny post. Kräver att alla fält skickas med.                        |
|PUT    |/api/workexperience/:id | Uppdaterar en existerande post med angivet ID.                              |
|DELETE |/api/workexperience/:id | Raderar en post med angivet ID.                                             |

En post returneras som JSON med följande struktur:
```
{
    "companyname": "Stugan",
    "jobtitle": "Kapten",
    "location": "Taket",
    "startdate": "2022-01-01",
    "enddate": "2033-12-12",
    "description": "Världens bästa karlsson..."
}
```