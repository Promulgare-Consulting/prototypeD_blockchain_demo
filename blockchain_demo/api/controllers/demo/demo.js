module.exports = {


  friendlyName: 'User',


  description: 'Get the user info based on the ID.',


  extendedDescription:
`This action attempts to look up the user record in the database with the
specified user id.  Then, if such a user exists, returns the email.`,


  inputs: {

    userId: {
      description: 'userId for user table in database".',
      type: 'number',
      required: true
    },

  },


  exits: {

    success: {
      description: 'The requesting user email returned.',
      extendedDescription: 'Lookup userId in user table and return email address',

    },

    noID: {
      description: `The provided userId does not exist.`,
      responseType: 'error'
    }

  },


  fn: async function (inputs, exits) {

  	sails.log("Lookup user email");
    // Look up by the userId.
    // (note that we lowercase it to ensure the lookup is always case-insensitive,
    // regardless of which database we're using)
    var userRecord = await User.findOne({
      id: inputs.userId,
    });

    // If there was no matching user, respond thru the "badCombo" exit.
    if(!userRecord) {
	 	sails.log("Could not find userId ", inputs.userId);
    	throw 'noID';
    }

    return exits.success({email: userRecord.emailAddress});


  }

};
