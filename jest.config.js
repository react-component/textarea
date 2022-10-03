module.exports = {
  setupFilesAfterEnv: ['./tests/setupFilesAfterEnv.ts'],
  snapshotSerializers: [require.resolve('enzyme-to-json/serializer')],
};
