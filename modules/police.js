const POLICE = {
  scan(action = {}, mood = {}) {
    if (mood.mood === "alert") return { status: "watch", reason: "city_alert" };
    if (action.type === "exploit") return { status: "block", reason: "exploit_detected" };
    return { status: "clear" };
  },
};

export default POLICE;
