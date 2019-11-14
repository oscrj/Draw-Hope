UppgiftsBeskrivning - Inlämningsuppgift 1

I denna uppgift skall ni arbeta med JavaScript och skapa en simpliferad version av ett Black Jack spel. Detta kallar vi för Draw&Hope. I grunden är Black Jack är ett kortspel där det går ut på att dra kort och hamna på 21 eller så nära som möjligt utan att få över 21. Man spelar emot en dealer som också drar kort. Får du kort som tillsammans blir högre än dealern så vinner du. Hamnar man över 21 så förlorar man direkt. I vårt fall är dealern datorn.

Korten som finns med i leken har poäng 1 - 11.
Vårt Draw&Hope spel skall fungera som följande:

    Vid start av spel så drar spelaren 1st kort, sedan drar datorn 2st kort.
    Vid varje dragning skall det kort som spelare eller dator drar samt dennes totala poäng loggas.
    Nu får spelare välja på att dra ett nytt kort eller stanna.
    Dra ett nytt kort görs genom att trycka på tangenten D och stanna görs genom att trycka på tangenten S.
    Stannar spelare så kommer datorn att dra ETT kort om denna har under 17.

Utfall:

    Datorn hamnar på över 21 = vinst spelare (omedelbart).
    Spelare hamnar på över 21 = vinst dator (omedelbart).
    Dator hamnar på exakt 21 = vinst dator (omedelbart).
    Spelare hamnar på exakt 21 = vinst spelare (omedelbart).
    Spelare och dator hamnar på exakt samma poäng = oavgjort.
    Spelare och dator har under 21, poäng jämförs och den med högst poäng vinner.

När någon vinner eller vid oavgjort så visar ni resultat samt både spelare och dators poäng i en alert.