exports.handler = async (context, event, callback) => {
  try {
    const twilioClient = context.getTwilioClient();
    const {SYNC_SERVICE_SID, documentName} = event;
    const result = await  twilioClient.sync
      .services(SYNC_SERVICE_SID)
      .documents(documentName)
      .fetch();
    
    return callback(null, result);
  } catch (e) {
    return callback(e);
  }
};