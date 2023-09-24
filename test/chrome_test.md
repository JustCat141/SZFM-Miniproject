# Google Chrome

Tesztelő: Pósán Róbert

| **Place Detective test** |  |  |  |  |  |  |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  |  |  |  |  |  |  |
| Böngésző | Teszt eset | Lépés | Leírás | Státusz | Várt eredmény | Kapott eredmény |
| Chrome | Megjelenés | 1 | főmenü | passed | A menü helyesen jelenik meg a Google Chrome böngésző ablakában webes nézetben | A menü helyesen jelenik meg a Google Chrome böngésző ablakában webes nézetben |
|  |  | 2 | topic | passed | A topic nevére kattintva, a megfelelő oldalra jutunk és megjelenik az 1. kérdés | A topic nevére kattintva, a megfelelő oldalra jutunk és megjelenik az 1. kérdés |
|  |  | 3 | kép megjelenése | passed | A  kérdéshez tartozó kép méretarányosan megjelenik | A  kérdéshez tartozó kép méretarányosan megjelenik |
|  |  | 4 | válaszok megjelenése | passed | 4 db válasz megjelenik | 4 db válasz megjeleni |
|  |  | 5 | kérdés számláló | passed | A kép felett az adott kérdés számát megjeleníti | A kérdés szám a megfelelő helyen megjelent |
|  |  | 6 | eredmény kijelzése | passed | Az utolsó kérdés megválaszolása után megjelenik az eredmény, a helyes válaszok száma / összkérdés | Az eredmény megjelent és jól lett számolva|
|  |  | 7 | result menu | passed | Az utolsó kérdés után: eredmény,retry,Main Menu  | Az utolsó kérdés után: eredmény,retry,Main Menu |
|  | Funkciók | 1 | válaszlehetőség | passed | A helyes, helytelen választ jól jelzi. | 3 db helytelen és 1 db helyes  |
|  |  | 2 | jó válasz | passed | A jó válasz nem mindig egy adott helyen van, rossz adott válasz esetén nem érzékeli jónak. | A jó válasz esetén:eredmény+1 , rossz válasz esetén: eredmény változatlan  |
|  |  | 3 | kérdés számláló | passed | 0-ról indul, kérdésenként 1-gyel növekszik, a végén pontosan egyenlő a kérdések számával. | Minden kérdés után +1-et ad a számlálóhoz, amit a végén láthatunk |
|  |  | 4 | eredmény számláló | passed | 0-ról indul, Helyes válaszlehetőség esetén 1-gyel növekszik, ellenkező esetben marad az előző állapotban | A kvíz végén minden esetben a helyes eredmény jelent meg, helytelen válasz esetén nem ad hozzá pontot |
|  |  | 5 | Retry, Main Menu button | passed | A retry gombra kattintva újból kezdhetünk játszani, a Main Menu-re kattintva a főmenübe kerülünk, ahol választhatunk topicot | A retry gombra kattintva a kvíz újrakezdődött, a Main Menu-re kattintva a kezdő menübe kerültem. |