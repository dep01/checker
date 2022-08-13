// HOW TO IMPORT ?
// const Convert = require('location/plagiarismModel.js'); 
// OR
// import Convert from 'location/plagiarismModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOfplagiarismModel(data)
// FOR ARRAY
// const data = Convert.listOfplagiarismModel(data)
const modelOfDataplagiarismModel = {
	isQueriesFinished: '',
	sources: [modelOfDatasources],
	totalQueries: 0,
	plagPercent: 0,
	paraphrasePercent: 0,
	uniquePercent: 0,
	excludeURL: null,
	details: [modelOfDatadetails]
};
function listOfplagiarismModel(data = []) {
  var listData = [modelOfDataplagiarismModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				isQueriesFinished: val.isQueriesFinished ?? null,
				sources: listOfsources(val.sources ?? []),
				totalQueries: val.totalQueries ?? null,
				plagPercent: val.plagPercent ?? null,
				paraphrasePercent: val.paraphrasePercent ?? null,
				uniquePercent: val.uniquePercent ?? null,
				excludeURL: val.excludeURL ?? null,
				details: listOfdetails(val.details ?? [])
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOfplagiarismModel(data = null) {
  var objectData = modelOfDataplagiarismModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.isQueriesFinished = data.isQueriesFinished ?? null;
		objectData.sources = listOfsources(data.sources ?? []);
		objectData.totalQueries = data.totalQueries ?? null;
		objectData.plagPercent = data.plagPercent ?? null;
		objectData.paraphrasePercent = data.paraphrasePercent ?? null;
		objectData.uniquePercent = data.uniquePercent ?? null;
		objectData.excludeURL = data.excludeURL ?? null;
		objectData.details = listOfdetails(data.details ?? []);
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOfplagiarismModel: listOfplagiarismModel,
  objectOfplagiarismModel: objectOfplagiarismModel,
};

const modelOfDatasources = {
	link: '',
	count: 0,
	percent: 0
};
function listOfsources(data = []) {
  var listData = [modelOfDatasources];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				link: val.link ?? null,
				count: val.count ?? null,
				percent: val.percent ?? null
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
const modelOfDatadetails = {
	unique: '',
	query: '',
	version: 0,
	display: modelOfDatadisplay,
	paraphrase: ''
};
function listOfdetails(data = []) {
  var listData = [modelOfDatadetails];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				unique: val.unique ?? null,
				query: val.query ?? null,
				version: val.version ?? null,
				display: objectOfdisplay(val.display ?? null),
				paraphrase: val.paraphrase ?? null
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}

const modelOfDatadisplay = {
	query: '',
	url: '',
	des: ''
}
function objectOfdisplay(data = null) {
  var objectData = modelOfDatadisplay;
  if (data == null) {
    return null;
  };
  try {
		objectData.query = data.query ?? null;
		objectData.url = data.url ?? null;
		objectData.des = data.des ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}


  