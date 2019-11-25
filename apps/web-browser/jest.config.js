module.exports = {
  name: 'web-browser',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-browser',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
