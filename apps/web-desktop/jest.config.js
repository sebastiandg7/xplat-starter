module.exports = {
  name: 'web-desktop',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/web-desktop',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
