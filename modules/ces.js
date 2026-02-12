const CES = {
  process(action = {}) {
    if (action.type === "help") return { mood: "positive" };
    if (action.type === "spam") return { mood: "alert" };
    return { mood: "neutral" };
  },
};

export default CES;
