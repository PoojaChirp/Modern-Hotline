exports.handler = async (context, event, callback) => {
  try {
    const twilioClient = context.getTwilioClient();
    const {to, from, parameters, STUDIO_FLOW_SID} = event;
    const result = await twilioClient.studio
      .flows(STUDIO_FLOW_SID)
      .executions
      .create({to, from, parameters});
    
    return callback(null, result);
  } catch (e) {
    return callback(e);
  }
};