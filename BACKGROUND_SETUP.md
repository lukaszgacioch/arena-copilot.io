# Instrukcja dodania obrazka tła

## Jak dodać obrazek Tibii jako tło

1. **Pobierz obrazek** z załącznika w czacie (obraz przedstawiający ulicę w Tibii z postacią)

2. **Zapisz obrazek** do folderu `images/` pod nazwą `tibia-hero.jpg`

3. **Alternatywnie** możesz użyć dowolnego obrazka z gry Tibia:
   - Znajdź obrazek w Internecie
   - Zapisz go jako `images/tibia-hero.jpg`
   - Zalecana rozdzielczość: minimum 1920x1080px

## Opcja z kodem Base64 (jeśli nie możesz zapisać pliku)

Jeśli wolisz, możesz osadzić obrazek bezpośrednio w CSS używając Base64:

1. Skonwertuj obrazek na Base64 (np. na stronie base64-image.de)
2. W pliku `css/style.css` znajdź sekcję `.hero`
3. Zamień `url('../images/tibia-hero.jpg')` na `url('data:image/jpeg;base64,TWOJ_KOD_BASE64')`

## Co zostało zmienione w stylach

- ✅ Dodano obrazek jako tło hero section
- ✅ Dodano `background-attachment: fixed` dla efektu parallax
- ✅ Wzmocniono cienie tekstów dla lepszej czytelności
- ✅ Dodano `backdrop-filter: blur()` dla lepszego kontrastu
- ✅ Zwiększono intensywność efektów świetlnych (glow)
- ✅ Poprawiono przyciski z lepszymi cieniami
- ✅ Dodano semi-transparentne tło dla scroll indicator

## Wynik

Po dodaniu obrazka, hero section będzie wyglądał jak na obrazku z Tibii z półprzezroczystą nakładką i złotym, świecącym napisem "Welcome to Tibia".
