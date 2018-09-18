const yargs= require('yargs');
const geocode= require('./geocode');

const argv= yargs
	.options({
		a: {
			alias: 'address',
			demand: true,
			describe: 'Address to fatch the weather and nearby hotel',
			string: true
		}
	})
	.help()
	.alias('help','h')
	.argv;

	geocode.getAddress(argv.a);