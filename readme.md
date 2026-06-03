## DT207G - backend-baserad webbutveckling

Det här är ett projekt för kursen backend-baserad webbutveckling, VT 2026.

API publicerat på Render: https://sini2500-dt207g-4.onrender.com

Front-end publicerad på Netlify: https://dt207g-4-sini2500.netlify.app

---

För den här uppgiften skulle vi skapa ett litet API för att hantera registrering och inloggning av användare med hjälp av JWT.

Jag har valt att skapa en liten tjänst där varje användare får en kattbild tilldelad från https://cataas.com.

MongoDB har använts för databasen, Express för API:et och en separat front-end gjordes i ett annat git-repo.

Tjänsten MongoDB Atlas har använts för databasen, och Mongoose för att kommunicera med den.

CORS-kontroll har satts upp mellan API och front-end eftersom de är på separata domäner.

Routes har gjorts direkt i app.js, JWT-tokens verifieras med auth.js och schema.js har databasmodellen. 

## API-Användning

Nedan finns beskrivet hur man når APIet på olika vis:

|Metod  |Ändpunkt                |Beskrivning                                                                  |
|-------|------------------------|-----------------------------------------------------------------------------|
|POST   |/api/login              | Tar emot användarnamn och lösenord och jämför dem med användare i databasen |
|POST   |/api/register           | Tar emot användarnamn och lösenord och lagrar nya användare i databasen     |
|GET    |/api/dashboard          | Tar emot en JWT-token, verifierar den och hämtar data om en användare       |

Från /api/dashboard returneras följande struktur om den autentiserade användaren:
```
{
    "username": "demo",
    "cat": "http://cataas.com/cat/catID123",
}
```