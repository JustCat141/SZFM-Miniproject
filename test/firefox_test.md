# Mozilla Firefox

Tesztelő: Barta Bence

Tesztelés ideje: 2023.09.24, 23:20

  **Place Detective rendszer tesztelése** ||||||| 
---|---|---|---|---|---|---
 Böngésző | Teszt eset | Lépés | Leírás | Státusz | Várt eredmény | Kapott eredmény 
 Firefox | Megjelenés | 1 | menü megjelenése | passed | A menü helyesen jelenik meg a Mozilla Firefox böngésző ablakában | A menü helyesen jelenik meg a Mozilla Firefox böngésző ablakában 
  | | | 2 | kvíz választás | passed | A kvíz nevére kattintva, a megfelelő oldalra jutunk és megjelenik az 1. kérdés | A kvíz nevére kattintva, a megfelelő oldalra jutunk és megjelenik az 1. kérdés 
  | | | 3 | kép megjelenése | passed | Az adott kérdéshez tartozó kép helyesen megjelenik | A megfelelő kép helyesen megjelent 
  | | | 4 | válaszlehetőségek megjelenése | passed | Az adott kérdéshez tartozó válaszlehetőségek helyesen megjelennek | A válaszlehetőségek az adott kérdéshez megfelelően megjelentek 
  | | | 5 | kérdés számláló | passed | A kép felett az adott kérdés számát megjeleníti | A kérdés szám a megfelelő helyen megjelent 
  | | | 6 | eredmény megjelenítés | passed | Az utolsó kérdés megválaszolása után megjelenik az eredmény | Az eredmény megjelent 
  | | | 7 | befejező menü | passed | Az utolsó kérdés megválaszolása után megjelenik az eredmény, egy Retry gomb és a Main Menu gomb | Mind a 3 menüpont megfelelően megjelent 
  | | Funkciók | 1 | válaszlehetőség | failed | A helyes választ jól érzékeli a rendszer és a helytelent is. | Nem jól érzékeli a rendszer, mindig csak a jobb felső választ fogadja el. 
  | | | 2 | helyes válaszlehetőség | failed | A helyes válasz nem mindig egy adott helyen van, rossz adott válasz esetén nem érzékeli jónak. | Az eredményhez csak akkor ad +1 pontot ha a jobb felső válaszra kattintok. A rossz választ is jónak érzékeli esetenként. 
  | | | 3 | kérdés számláló | passed | 0-ról indul, minden kérdés után a számláló 1-el növekszik, a végén pontosan egyenlő a kérdések számával. | Minden kérdés után +1-et ad a számlálóhoz, helyesen működik. 
  | | | 4 | eredmény számlálás | failed | 0-ról indul, Helyes válaszlehetőség esetén 1-el növekszik, ellenkező esetben marad az előző állapotban | A kvíz végén nem a helyes eredmény jelent meg. A rossz válaszokra is pontot ad. 
  | | | 5 | Retry, Main Menu gomb | passed | A retry gombra kattintva a kvíz újrakezdődik, a Main Menu-re kattintva a kezdő menübe kerülünk. | A retry gombra kattintva a kvíz újrakezdődött, a Main Menu-re kattintva a kezdő menübe kerültem. 

