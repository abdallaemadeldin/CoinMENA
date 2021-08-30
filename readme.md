## Get Started
To get started you can run the app in development

```
git clone https://github.com/abdallaemadeldin/CoinMENA.git
cd CoinMENA
yarn
cd ios && pod install && cd ..
yarn start
yarn android | yarn ios
```

## File Structure

```
CoinMENA
├─ App.tsx
├─ src
│  ├─ assets
│  │  ├─ logo.png
│  │  └─ logo.svg
│  ├─ components
│  │  └─ Card
│  │     ├─ Card.tsx
│  │     ├─ style.ts
│  │     └─ types.ts
│  ├─ hooks
│  │  ├─ countries.hook.ts
│  │  ├─ home.hook.ts
│  │  ├─ index.ts
│  │  └─ splash.hook.ts
│  ├─ lib
│  │  └─ windowStack.tsx
│  └─ screens
│     ├─ CountriesList
│     │  ├─ CountriesList.tsx
│     │  └─ style.ts
│     ├─ Home
│     │  ├─ Home.tsx
│     │  └─ style.ts
│     └─ Splash
│        ├─ Splash.tsx
│        └─ style.ts

```

- `assets` images, fonts, ...etc
- `components` All components should be in one folder, with no nesting! Each component has its own folder, it contains the jsx component itself as well as styles, tests, storybook, ...etc.
- `hooks` All hooks should be in one folder, with no nesting! Each hook is refered to component or screen.
- `lib`
- `screens` A page is what simply what get passed to routes, each page folder should be same as a component folder.

## Stack
This app is built with react-native cli, react-navigation, react-native-chart-kit, react-query,react-native-svg, React-Testing-Library & Jest for testing.
