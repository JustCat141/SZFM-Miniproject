# Rendszer célja
A tájékozottság és tudás folyamatos fejlesztése fontos szempont mindannyiunk számára. A tudásszint ellenőrzésére és gyarapításár aegy hatékony eszköz a kvíz, ami nemcsak megméretteti velünk a tudásunkat, hanem motivál a tanulásban is. Ezen elvek mentén építkezve, célunk egy olyan online platform létrehozása, ahol a felhasználók képesek kibővíteni földrajzi ismereteiket, illetve tudásukat próbára tenni. Az oldalunkon több kategóriában is találhatóak kvízek. Az elérhető témák között szerepelnek városok, természeti nevezetességek. Az oldalunk nem csupán szórakoztat, hanem lehetőséget kínál az ismeretek elmélyítésére és a világ felfedezésére.

A játék során kérdésekre kell válaszolni. Minden esetben 4 válaszlehetőség áll rendelkezésre, és ezekből pontosan egy válasz helyes. Minden helyes válaszért egy pot jár, helytelenért pedig 0 pont. Cél a minnél több pont megszerzése (minnél több helyes válasz megadása). A játék végén egy oldalon jelenik meg a felhasználó által megadott helyes válaszok száma.

# Projekt terv

# Üzleti folyamatok modellje

# Követelmények

# Funkcionális terv

# Fizikai környezet

# Absztrakt domain modell

# Architekturális terv

# Adattárolás
A projektünk nem adatbázist használ az adatok tárolására, hanem JSON fájlokat. Minden kvíz egy külön mappában találhazó, amely tartalmaz pontosan egy data.json nevű fájlt, valamint egy img nevű mappát amelyben a kvízhez szülséges képek tárolódnak.

## Az adattárolás módja
Az adatok ezen struktúra alapján tárolüdnak:

![Ábra az adatstruktúráról](./img/adat_struktura.png)

Minden data.json fájl a következőképpen épül fel:
```json
{
    "id": 1,
    "quiz_name": "Magyarország Épületei",
    "questions": [
        {
            "id": 1,
            "question": "Melyik híres magyar épület látható a képen?",
            "image": "img/parlament.png",
            "correct": 3,
            "answers":
            [
                "Budai Várnegyed",
                "Halászbástya",
                "Parlament",
                "Felcsúti stadion",
            ]
        },
        // Többi kérdés...
    ]
}
```

## Adatok jelentése:
- **id**: A kvíz azonosítója
 - **quiz_name**: A kvíz neve
 - **questions**: A kvízhez tartozó kérdéseket tárolja
    - **id**: A kérdés azonosítója
    - **question**: Maga a kérdés
    - **image**: A kérdéshez tartozó képet útvonalát tárolja
    - **correct**: A kérdéshez tartozó helyes válasz sorszámát tárolja
    - **answers**: A kérdéshez tartozó válaszokat tárolja

# Implementációs terv