module.exports = {
  extends: ['plugin:astro/recommended', 'plugin:tailwindcss/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
  },
  settings: {
    tailwindcss: {
      whitelist: [
        'fb-share-button',
        'fb-xfbml-parse-ignore',
        'markdown',
        'twitter-follow-button',
        'twitter-share-button',
      ],
    },
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        // The script of Astro components uses ESM.
        sourceType: 'module',
      },
    },
  ],
};
