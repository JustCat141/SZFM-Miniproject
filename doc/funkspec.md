# Áttekintés
Egy olyan játékot készítünk, amellyel a fiatalok játékosan gyarapíthatják földrajzi tudásukat. Ennek egy hatékony eszköze a kvíz. Ez egyben az oktató számára is hasznos lesz, ugyanis ki lehet szakadni a szürke hétköznapokból és az elektronikus eszközök segítségével izgalmasabbá tenni az órákat. Megfelelve a mai kor követelményeinek, a számítógép mellett telefonon és tableten is elérhető lesz online platformunk. Ez a rendszer teljesen ingyenes lesz, bárki le tudja majd tölteni, vagy az interneten keresztül beregisztrál és máris hozzáfér. Az elérhető témák között lesznek majd városok, nevezetességek Magyarországról is, de szerte a világból. A kvíz végeztével az adott személy láthatja mennyi pontot szerzett, ez százalékos formában is megtalálható lesz, ezáltal kap egy visszaigazolást hogy mennyire sikerült elsajátítania az adott témakört.

# Jelenlegi helyzet
A megrendelő célja, hogy bővítse az általa nyújtott oktatási szolgáltatásokat. Egy új rendszer lefejlesztését rendelte meg, amely interneten keresztül modern megoldásokat használva működik, és a XXI. század követelményei szerint elérhető számítógépen és mobilon is. Az online platform segítséget fog nyújtani földrajz tárgyból, hogy a diákok szélesebb körben megismerkedjenek a világ érdekességeivel játékos módon. Mindeddig csak matematika tárgyból használtak hasonló alkalmazást, de annyira tetszett a diákoknak, hogy a megrendelő felismerte, hogy ezzel a játékos oktatóprogrammal sokkal eredményesebbé teheti az oktatást, szemben a hagyományos táblára írással. Ezért megkért minket, hogy készítsük el számára a kívánt alkalmazást, ami sokkal aktívabbá és szórakoztatóbbá tudják tenni az oktatást.

# Követelménylista
|Modul|ID|Név|Verzió|Kifejtés|
|-----|--|---|------|--------|
|Jogosultság|K1|Bejelentkezési felület|1.0|A felhasználó bejelentkezhet e-mail címe és jelszava segítségével. Ha valamelyik nem megfelelő, akkor a felhasználó hibaüzenetet kap.|
|Jogosultság|K2|Regisztráció|1.0|A felhasználó a nevének, e-mail címének és jelszavának megadásával regisztrálhatja magát. Ha valamelyik adat hiányzik, hibaüzenetet kap.
|Jogosultság|K3|Jogosultsági szintek|1.0|Admin: új feladat feltöltése. Felhasználó: feladatok kitöltése, eredmények megtekintése, jelszó módosítása.|
|Feladattípus|K4|Kvíz|1.0|Több kérdésből áll, 4 válaszlehetőségből pontosan 1 válasz helyes. A kvíz végén megkapja az elért pontszámot a felhasználó.|

# Jelenlegi üzleti folyamatok modellje
A mai gyorsan változó technológiai világot nem tudta lekövetni még az oktatás. A diákok egyre kevésbé hajlandóak a tradícionális módon tanulni, mindenki a telefonját használja. Jelenleg a diákok tankönyvből tanulnak és papír alapú dolgozatokat írnak, amely nem csak hogy elavultnak számít, de nem is túl környezetbarát és az oktatóknak rengeteg idejük elmegy az egyesével történő javítással. Online platformunk erre fog egy kiváló megoldást biztosítani első körben földrajz tantárgyból.

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