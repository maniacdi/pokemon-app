const { createObjectCsvStringifier } = require('csv-writer');

exports.convertToCsv = (data) => {
  const csvStringifier = createObjectCsvStringifier({
    header: [
      { id: 'name', title: 'name' },
      { id: 'base_experience', title: 'base_experience' },
      { id: 'height', title: 'height' },
      { id: 'weight', title: 'weight' },
    ],
  });
  return (
    csvStringifier.getHeaderString() + csvStringifier.stringifyRecords(data)
  );
};
