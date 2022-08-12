import { typeNames } from 'cz-emoji/lib/types.json';

module.exports = {
  extends: ['@commitlint/config-conventional', 'gitmoji'],
  rules: {
    'type-enum': [
      2,
      'always',
      // declare emoji type names by copying them from commitizen-emoji
      [...typeNames],
    ],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(:\w*:)(?:\s)(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
      headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
    },
  },
};
