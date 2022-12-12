# [Grow Your Knowledge] - Advanced Routing

## Užduotys

### Užduotis #1 - Feature Moduliai

- Kiekvienam route sukurkite po 'Feature Module'.
- Perkelkite puslapių komponentus į naujai sukurtus modulius ir deklaruokite juos ten.
- Nepamirškite importuoti modulių į `app.module.ts`

Pvz:

```bash
npx ng g m news
```

Branch: `task-1`

### Užduotis #2 - Lazy Loading

- Pakeiskite savo routing mechanizmą taip, kad kiekvienas feature modulis būtų "lazy loaded".
- Nepamirškite viduje Feature Module aprašyti navigacijos `RouterModule.forChild()`

Branch: `task-2`

### Užduotis #3 - /movies/:id servisas

- Sukurkite naują metodą `MovieSearchService.getMovie`, kur, padavus filmo `id`, gausime informaciją apie filmą.
- Kvieskite `https://api.themoviedb.org/3/movie/{id}` savo su id, paduotu iš išorės.
- API dokumentacija: https://developers.themoviedb.org/3/movies/get-movie-details

Branch: `task-3`

### Užduotis #4 - /movies/:id route

- Grąžinkite `/movies/:id` route.
- Route bus užkraunamas paspaudus ant filmo iš sąrašo `/movies` puslapyje.
- Užėjus į puslapį, naudokite servisą gauti filmo info pagal id, kuris buvo gautas iš URL.
- Parodykite informaciją lange.

Branch: `task-4`

### Užduotis #5 - Vartotojo autentikacija

- Norime apsaugoti savo `/movies/` URL nuo neprisijungusių vartotojų.
- Sukurkite naują `AuthService`, kurį naudosite autentifikuoti vartotojams.
- Sukurkite metodus, kurie prijungia/atjungia vartotoją.
- Sukurkite mygtukus, kuriais vartotojas gali prisijungti/atsijungti ir pridėkite juos.

- Papildomai: Saugokite autorizacijos būseną [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage), kad ji išliktų tarp puslapio perkrovimų.

```bash
npx ng g s auth 
```

Branch: `task-5`

### Užduotis #6 - AuthGuard

- Sukurkite Angular guard, kuris gauną prisijungimo būseną iš `AuthService`.
- Naudokite naują guard `/movies` URL ir neįleiskite neprisijungusių vartotojų.

```bash
npx ng g guard auth 
```

Branch: `task-6`
