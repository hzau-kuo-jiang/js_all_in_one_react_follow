function Message({ messageType, message }) {
  let messageEl;
  if (messageType === "error") {
    messageEl = (
      <p className="rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
        {message}
      </p>
    );
  } else {
    messageEl = (
      <p className="rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700">
        {message}
      </p>
    );
  }
  return messageEl;
}

export default Message;
