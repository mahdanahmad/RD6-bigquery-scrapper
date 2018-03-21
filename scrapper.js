const BigQuery = require('@google-cloud/bigquery');

const projectId = "hardy-notch-196607";

// Creates a client
const bigquery = new BigQuery({
	projectId: projectId,
});

let query	= "SELECT" +
	"V2Locations, V2Themes, DocumentIdentifier, DATE" +
"FROM" +
	"[gdelt-bq:gdeltv2.gkg]" +
"WHERE" +
	"V2Locations LIKE '%Indonesia%'" +
	"AND DATE >= 20160132000000" +
	"AND DATE < 20160133000000";

let options	= { query, useLegacySql: false };

bigquery
	.query(options)
	.then(results => {
		const rows = results[0];
		printResult(rows);
	})
	.catch(err => {
		console.error('ERROR:', err);
	});
