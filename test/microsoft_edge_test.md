# Microsoft Edge

Tesztelő: Somogyi Patrik

Tesztelés ideje: 2023.09.24, 23:41

| Teszt eset | Lépés | Leírás                        | Státusz | Várt eredmény                                                                                            | Kapott eredmény                                                                 |
| ---------- | ----- | ----------------------------- | ------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Megjelenés | 1.    | menü megjelenése              | passed  | A menü helyesen jelenik meg Microsoft Edge böngészőben                                                   | A menü helyesen jelenik meg                                                     |
|            | 2.    | kvíz választás                | passed  | A menüben a választott téma jelenik meg                                                                  | A menüben a választott téma jelenik meg                                         |
|            | 3.    | kérdés megjelenés             | failed  | Az adott kérdéshez tartozó kérdés jelenik meg                                                            | Az adott kérdéshez tartozó kérdés nem jelent meg                                |
|            | 4.    | kép megjelenése               | passed  | Az adott kérdéshez tartozó kép helyesen jelenik meg                                                      | A megfelelő kép jelent meg                                                      |
|            | 5.    | válaszlehetőségek megjelenése | passed  | Az adott kérdéshez tartozó válaszlehetőségek helyesen megjelennek                                        | A válaszlehetőségek helyesen jelennek meg                                       |
|            | 6.    | kérdés számláló               | passed  | Helyesen jelenik meg az adott kérdés sorszáma                                                            | Helyesen jelenik meg az adott kérdés sorszáma                                   |
|            | 7.    | eredmény megjelenítés         | passed  | Az utolsó kérdés megválaszolása után megjelenik az elért eredmény oldal                                  | Megjelent                                                                       |
|            | 8.    | befejező menü                 | passed  | Az utolsó kérdés megválaszolása után megjelenik az eredmény, egy Retry gomb és a Main Menu gomb          | Mind a 3 menüpont megfelelően megjelent                                         |
| Funkciók   | 1.    | válaszlehetőség               | failed  | Az utolsó kérdés megválaszolása után helyesen jelenik meg az elért pontszám                              | Nem jól érzékeli a rendszer!                                                    |
|            | 2.    | helyes válaszlehetőség        | failed  | A helyes válasz nem mindig egy adott helyen van, rossz adott válasz esetén nem érzékeli jónak.           | A rossz választ is jónak érzékeli.                                              |
|            | 3.    | kérdés számláló               | passed  | 0-ról indul, minden kérdés után a számláló 1-el növekszik, a végén pontosan egyenlő a kérdések számával. | Minden kérdés után +1-et ad a számlálóhoz, helyesen működik.                    |
|            | 4.    | eredmény számlálás            | failed  | 0-ról indul, Helyes válaszlehetőség esetén 1-el növekszik, ellenkező esetben marad az előző állapotban   | A kvíz végén nem a helyes eredmény jelent meg. A rossz válaszokra is pontot ad. |
|            | 5.    | Retry                         | passed  | A retry gombra kattintva a kvíz újrakezdődik, a pontszám nullázódik                                      | A retry gombra kattintva a kvíz újrakezdődik, a pontszám nullázódik             |
|            | 6.    | Main menu                     | passed  | A main menu gombra kattintva a kezdőmenü jelenik meg                                                     | A main menu gombra kattintva a kezdőmenü jelenik meg                            |