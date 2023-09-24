# Mozilla Firefox

Tesztelő: Barta Bence

| Place Detective rendszer tesztelése |            |       |                               |
| ----------------------------------- | ---------- | ----- | ----------------------------- |
|                                     |            |       |                               |  |  |  |
| Böngésző                            | Teszt eset | Lépés | Leírás                        | Státusz | Várt eredmény | Kapott eredmény |
| Firefox                             | Megjelenés | 1     | menü megjelenése              | passed | A menü helyesen jelenik meg a Mozilla Firefox böngésző ablakában | A menü helyesen jelenik meg a Mozilla Firefox böngésző ablakában |
|                                     |            | 2     | kvíz választás                | passed | A kvíz nevére kattintva, a megfelelő oldalra jutunk és megjelenik az 1. kérdés | A kvíz nevére kattintva, a megfelelő oldalra jutunk és megjelenik az 1. kérdés |
| Tesztelő:                           |            | 3     | kép megjelenése               | passed | Az adott kérdéshez tartozó kép helyesen megjelenik | A megfelelő kép helyesen megjelent |
| Barta Bence                         |            | 4     | válaszlehetőségek megjelenése | passed | Az adott kérdéshez tartozó válaszlehetőségek helyesen megjelennek | A válaszlehetőségek az adott kérdéshez megfelelően megjelentek |
|                                     |            | 5     | kérdés számláló               | passed | A kép felett az adott kérdés számát megjeleníti | A kérdés szám a megfelelő helyen megjelent |
|                                     |            | 6     | eredmény megjelenítés         | passed | Az utolsó kérdés megválaszolása után megjelenik az eredmény | Az eredmény megjelent |
|                                     |            | 7     | befejező menü                 | passed | Az utolsó kérdés megválaszolása után megjelenik az eredmény, egy Retry gomb és a Main Menu gomb | Mind a 3 menüpont megfelelően megjelent |
|                                     |            |       |                               |  |  |  |
|                                     | Funkciók   | 1     | válaszlehetőség               | passed | A helyes választ jól érzékeli a rendszer és a helytelent is. | A helyes választ jól érzékelte, a helytelent is, minden esetben csak 1 jó válasz volt. |
|                                     |            | 2     | helyes válaszlehetőség        | passed | A helyes válasz nem mindig egy adott helyen van, rossz adott válasz esetén nem érzékeli jónak. | A helyes választ érzékelte, ekkor hozzáadott 1-et az eredmény ponthoz, ellenkező esetben maradt a szám az előző állapotban |
|                                     |            | 3     | kérdés számláló               | passed | 0-ról indul, minden kérdés után a számláló 1-el növekszik, a végén pontosan egyenlő a kérdések számával. | Minden kérdés után +1-et ad a számlálóhoz, helyesen működik. |
|                                     |            | 4     | eredmény számlálás            | passed | 0-ról indul, Helyes válaszlehetőség esetén 1-el növekszik, ellenkező esetben marad az előző állapotban | A kvíz végén minden esetben a helyes eredmény jelent meg, helytelen válasz esetén nem ad hozzá pontot |
|                                     |            | 5     | Retry, Main Menu gomb         | passed | A retry gombra kattintva a kvíz újrakezdődik, a Main Menu-re kattintva a kezdő menübe kerülünk. | A retry gombra kattintva a kvíz újrakezdődött, a Main Menu-re kattintva a kezdő menübe kerültem. |