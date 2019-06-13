const nextSPSend = () => {
  if (
    location.href.includes("/edit") &&
    !!document.querySelector("#shave_plan_last_sent")
  ) {
    init();
  }
};

const init = () => {
  const lastSent = document.getElementById("shave_plan_last_sent");
  const lastSentDate = new Date(lastSent.value);
  const lastSentDateInDays = lastSentDate.getTime();

  const interval = document.getElementById("shave_plan_interval");

  const nextSendListItem = document.getElementById(
    "shave_plan_next_send_input"
  );

  const nextSendSuggestionEl = document.createElement("li");

  const calculateNextSendSuggestion = () => {
    const intervalDays = parseInt(interval.value);
    const nextSendSuggestionInMS =
      lastSentDateInDays + intervalDays * 24 * 60 * 60 * 1000;
    return new Date(nextSendSuggestionInMS);
  };

  const showNextSendSuggestion = nextSendDateSuggestion => {
    nextSendSuggestionEl.setAttribute("id", "next-send-suggestion-li");
    nextSendSuggestionEl.innerHTML = `<div class='date-suggestor-next-send'>
      <p>Next send date would be:</p>
      <p>${nextSendDateSuggestion.toDateString()}</p>
      </div>`;
    nextSendListItem.appendChild(nextSendSuggestionEl);
  };

  const run = () => {
    const nextSendDateSuggestion = calculateNextSendSuggestion();
    showNextSendSuggestion(nextSendDateSuggestion);
  };

  interval.addEventListener("change", event => {
    run();
  });

  run();
};

export default nextSPSend;
