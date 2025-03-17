# River Camping Canada

A React Native mobile application designed to help users discover and explore river camping locations across Canada. The app provides an interactive map interface, location bookmarking, safety information, and a comprehensive blog section for camping enthusiasts.

## Features

- **Interactive Map**: Browse and discover river camping locations across Canada
- **Location Bookmarking**: Save your favorite camping spots for quick access
- **Safety Information**: Access important safety guidelines and tips
- **Blog Section**: Read and explore camping-related articles
- **Offline Support**: Access saved locations and information without internet connection
- **Welcome Guide**: Interactive onboarding experience for new users

## Tech Stack

- [React Native](https://reactnative.dev/)
- TypeScript
- [Jotai](https://jotai.org/) for state management
- [React Native AsyncStorage](https://react-native-async-storage.github.io/async-storage/) for persistent storage
- [NativeWind](https://www.nativewind.dev/) for styling

## Prerequisites

- Node.js (recommended version)
- [React Native development environment](https://reactnative.dev/docs/environment-setup)
- Xcode (for iOS development)
- Android Studio (for Android development)

## Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
cd river_camping_canada
```

2. Install dependencies:

```bash
npm install
```

3. Install iOS dependencies:

```bash
cd ios
pod install
cd ..
```

4. Start the development server:

```bash
npm start
```

5. Run the application:

For iOS:

```bash
npm run ios
```

For Android:

```bash
npm run android
```

## Project Structure

```
src/
├── assets/         # Static assets (fonts, icons, images)
├── components/     # Reusable UI components
├── data/          # Static data files (blog, safety info)
├── navigation/     # Navigation configuration
├── screens/       # Application screens
├── store/         # State management
├── theme/         # Theme configuration
└── utils/         # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
