exports.handler = async (event, context) => {
  const startTime = context.getRemainingTimeInMillis();

  return { ...event, startTime };
};
