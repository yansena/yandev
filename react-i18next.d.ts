// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import en from './src/internationalization/en.json';
import ptBR from './src/internationalization/pt-BR.json';



// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    en: typeof en;
    ptBR: typeof ptBR;
  }
}

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'en';
    // custom resources type
    resources: {
      en: typeof en;
      ptBR: typeof ptBR;
    };
  }
}