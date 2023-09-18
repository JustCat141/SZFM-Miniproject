# Áttekintés
Egy olyan játékot készítünk, amellyel a fiatalok játékosan gyarapíthatják földrajzi tudásukat. Ennek egy hatékony eszköze a kvíz. Ez egyben az oktató számára is hasznos lesz, ugyanis ki lehet szakadni a szürke hétköznapokból és megfelelve a mai kor követelményeinek, a számítógép mellett telefonon és tableten is elérhető lesz online platformunk. Ez a rendszer teljesen ingyenes lesz, bárki le tudja majd tölteni, vagy az interneten keresztül beregisztrál és máris hozzáfér. Az elérhető témák között lesznek majd városok, nevezetességek Magyarországról is, de szerte a világból. A kvíz végeztével az adott személy láthatja mennyi pontot szerzett, ez százalékos formában is megtalálható lesz, ezáltal kap egy visszaigazolást hogy mennyire sikerült elsajátítania az adott témakört.

# Jelenlegi helyzet

# Követelménylista

# Jelenlegi üzleti folyamatok modellje

# Igényelt üzleti folyamatok modellje

# Használati esetek

# Képernyő tervek
A projektünkhöz csak számítógépes megjelenítést tervezünk, ebből látható pár terv. A GUI-t letisztult, könnyen kezelhetőre terveztük.

Kép a kvíz megjelenéséről

![Kép a kvíz megjelenéséről](./img/quiz_example_1.png)

Válaszadás után a kép mellett megjelenik egy gomb, amellyel a következő kérdést tudjuk betölteni.
Ha a felhasználó helyesen válaszol egy adott kérdésre, akkor a válasz gombja zöldre változik.

![A GUI helyes válasz esetén](./img/quiz_ingame_correct.png)

Helytelen válasz esetén a választott válasz gombja pirosta változik, és a helyes válasz gombja zöldre.

![A GUI helytelen válasz esetén](./img/quiz_ingame_incorrect.png)

# Forgatókönyv

A felhasználó a menübe lépést követően kiválaszt egy kvíz sorozatot. Betöltődik a kérdés, a kép, illetve a négy válaszlehetőség. A játékosnak a válaszadásra nincs időlimitje. A felhasználó válaszol a kérdésre a négy opció közül, majd a helyes válasz gombja zöldre vált. Emellett megjelenik a *tovább gomb* amellyel a következő kérdés töltődik be. Ha helyesen válaszol kap egy pontot, ha helytelenül 0 pontot kap, emellett a GUI-n a válasza piros színre vált.

# Fogalomszótár