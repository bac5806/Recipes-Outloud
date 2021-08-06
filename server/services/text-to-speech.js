// Import Watson
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

// require('dotenv').config();

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.TEXT_TO_SPEECH_APIKEY,
  }),
  serviceUrl: process.env.TEXT_TO_SPEECH_URL,
});

textToSpeech.method(params)
  .catch(err => {
    console.log('error:', err);
  });

const getVoiceParams = {
  voice: 'en-US_AllisonV3Voice',
};

// List of available US Voices
// en-US_AllisonVoice,
// en-US_AllisonV3Voice,
// en-US_EmilyV3Voice,
// en-US_HenryV3Voice,
// en-US_KevinV3Voice,
// en-US_LisaVoice,
// en-US_LisaV3Voice,
// en-US_MichaelVoice,
// en-US_MichaelV3Voice,
// en-US_OliviaV3Voice,
// es-US_SofiaVoice,
// es-US_SofiaV3Voice,

textToSpeech.getVoice(getVoiceParams)
  .then(voice => {
    console.log(JSON.stringify(voice, null, 2));
  })
  // Successful Example
  // {
  //   "url": "{url}/v1/voices/en-US_AllisonV3Voice",
  //   "name": "en-US_AllisonV3Voice",
  //   "language": "en-US",
  //   "customizable": true,
  //   "gender": "female",
  //   "supported_features": {
  //     "voice_transformation": false,
  //     "custom_pronunciation": true
  //   },
  //   "description": "Allison: American English female voice."
  // }

  .catch(err => {
    console.log('error:', err);
  });

  const synthesizeParams = {
    text: 'Hello world',
    accept: 'audio/wav',
    // voice: 'en-US_AllisonV3Voice', (voice should be established, will find out later)
  };
  
  textToSpeech.synthesize(synthesizeParams)
    .then(response => {
      // only necessary for wav formats,
      // otherwise `response.result` can be directly piped to a file
      return textToSpeech.repairWavHeaderStream(response.result);
    })
    .then(buffer => {
      fs.writeFileSync('hello_world.wav', buffer);
    })
    .catch(err => {
      console.log('error:', err);
    });




