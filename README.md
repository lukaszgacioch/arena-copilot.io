# Tibia Fan Page

Statyczna strona internetowa poświęcona grze MMORPG Tibia, stworzona w czystym HTML, CSS i JavaScript.

## 🎮 O projekcie

To nowoczesna, responsywna strona typu "landing page" prezentująca klasyczną grę MMORPG Tibia. Strona została zaprojektowana z myślą o fanach gry oraz nowych graczach chcących poznać świat Tibii.

## ✨ Funkcjonalności

- **Responsywny design** - działa na wszystkich urządzeniach (desktop, tablet, mobile)
- **Animacje i efekty** - płynne przejścia, animacje scroll, efekty hover
- **Interaktywna nawigacja** - sticky navbar, smooth scroll, mobile menu
- **Sekcje informacyjne**:
  - Hero section z CTA buttons
  - O grze z animowanymi licznikami
  - 4 klasy postaci (vocations) z opisami
  - Cechy gry (8 feature boxes)
  - Miasta świata Tibia
  - Bestiariusz z filtrowaniem i wyszukiwaniem
  - FAQ z accordion
  - Sekcja community z social media
- **Newsletter** - formularz zapisu z walidacją
- **Back to top** - przycisk powrotu na górę strony

## 🛠️ Technologie

- HTML5 (semantic markup)
- CSS3 (Grid, Flexbox, animations, transitions)
- Vanilla JavaScript (ES6+)
- Google Fonts (Cinzel, Roboto)

## 📁 Struktura projektu

```
arena-copilot.io/
├── index.html          # Główny plik HTML
├── css/
│   ├── style.css       # Główne style
│   └── animations.css  # Animacje i efekty
├── js/
│   └── main.js         # Funkcjonalności JavaScript
└── images/             # Folder na obrazy
```

## 🚀 Uruchomienie

### Krok 1: Dodaj obrazek tła

**WAŻNE:** Aby strona wyglądała poprawnie, musisz dodać obrazek tła Tibii:

1. Zapisz obrazek przedstawiający Tibię (z załącznika lub własny) jako `images/tibia-hero.jpg`
2. Zalecana rozdzielczość: minimum 1920x1080px
3. Alternatywnie: otwórz `save-image.html` w przeglądarce dla szczegółowych instrukcji

### Krok 2: Otwórz stronę

Możesz otworzyć `index.html` bezpośrednio w przeglądarce lub użyć lokalnego serwera:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve

# VS Code - Live Server extension
```

Następnie otwórz: `http://localhost:8000`

## 🎨 Paleta kolorów

- **Primary Dark**: `#1a1a2e` - główne tło
- **Secondary Dark**: `#16213e` - tło sekcji
- **Accent Gold**: `#ffd700` - złoty akcent
- **Accent Orange**: `#f39c12` - pomarańczowy akcent
- **Text Light**: `#f5f5f5` - jasny tekst
- **Text Gray**: `#b8b8b8` - szary tekst

## 📱 Responsive Breakpoints

- Mobile: 320px - 768px
- Tablet: 769px - 1024px
- Desktop: 1025px+

## 🎯 Kluczowe funkcje JavaScript

- Sticky navigation z scroll detection
- Mobile hamburger menu
- Smooth scrolling do sekcji
- Animowane liczniki (counters)
- Intersection Observer dla scroll animations
- Accordion FAQ
- Filtry i wyszukiwarka bestiariusza
- Walidacja formularza newsletter
- Back to top button
- Parallax effect na hero section

## ♿ Dostępność

- Semantic HTML5 tags
- ARIA labels
- Keyboard navigation
- Focus states
- Alt text dla obrazów
- Reduced motion support

## 🔧 Optymalizacja

- Lazy loading obrazów
- Passive scroll listeners
- RequestAnimationFrame dla animacji
- BEM naming convention
- Minifikacja CSS/JS (opcjonalnie)

## 📄 Licencja

Ten projekt to nieoficjalna strona fanowska. Wszystkie prawa do gry Tibia należą do CipSoft GmbH.

## 🤝 Kontakt

Projekt stworzony jako demo strony o Tibii.

---

**Uwaga**: To strona fanowska stworzona w celach edukacyjnych. Nie jest oficjalnie powiązana z CipSoft GmbH ani grą Tibia.
