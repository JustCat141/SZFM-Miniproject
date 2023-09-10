<h1>Place Detective - követelményspecifikáció</h1>

<h3> 1. Jelenlegi helyzet:</h3> 
A "Place Detective" játék a már jól megszokott stratégiát követi. Megjelenik egy kép egy nevezetes épületről és négy válaszlehetőség. A felhasználó ki kell válassza azt a várost és országot melyben az adott nevezetesség megtalálható. A válaszok közül egy helyes, többi helytelen. A játék célja a lehető legtöbb pont megszerzése és számunkra fontos a diákok edukálása, ezért minden válaszadás után az adott nevezetességről érdekességeket olvashatnak. Megfelelve a mai kor követelményeinek, az oldal okostelefonon is megfelelően kell működjön.

<h2>Megrendelői igényspecifikáció</h2>

<h3>2. Vágyálom rendszer: </h3>
Szükség van egy webes felületre ahol a legyen lehetőség a fent említett játékra. A webes terület tartalmazzon egy kép megjelenítésére alkamas mezőt, illetve négy gombot, amellyel a felhasználó választ adhat. Válaszadás után indikálja a felhasználóval a válasz helyességét. Mindemellett még elengedhetetlen egy json fájl, mely az adott képeket tárolja, illetve az adatokat.
Fontos, hogy a webes platform minden felhasználó számára a megfelelő élményt legyen képes nyújtani, ennek érdekében az oldal reszponzív kell legyen.

<h3>3. Jelenlegi folyamatok: </h3>

- 3.1 Képek véletlenszerű kiválasztása

- 3.2 Képekhez tartozó válaszlehetőségek véletlenszerű kiválasztása

- 3.3 Leadott válasz kiértékelése

- 3.4 Pontok összesítése

- 3.5 A játék végeztével a pontok százalékos formátumban jelenjenek meg

<h3>4. Igényelt folyamatok:</h3>

- 4.1 Online megjelenés

- 4.2 Nevezetességek, valamint a válaszok JSON dokumentumban való eltárolása

<h3>5. Rendszerre vonatkozó szabályok:</h3>

- 5.1 A web felület szabványos eszközökkel készüljön, html/css/javascript.

- 5.2 Minden kérdésre legyen pontosan négy válaszlehetőség.

- 5.3 Minden kérdésre pontosan egy helyes válasz legyen, ne legyen lehetőség több választ megjelölni.

- 5.4 Az oldal legyen moduláris - legyen lehetőség másféle kvízek megjelenítésére.

- 5.5 A képek jpeg vagy png formátumúak lehetnek.

- 5.6 A képek egységes méretarányúak legyenek.

- 5.7 A képek és a válaszok sorrendjüket tekintve véletlenszerűen jelenjenek meg.