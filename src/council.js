import FLS from "../modules/fls.js";
import CES from "../modules/ces.js";
import POLICE from "../modules/police.js";
import MAYOR from "../modules/mayor.js";

const Council = {
  dispatch(action = {}) {
    const log = { action, at: new Date().toISOString() };

    const finance = FLS.evaluate(action);
    log.fls = finance;
    if (!finance.allowed) return log;

    const mood = CES.process(action);
    log.ces = mood;

    const police = POLICE.scan(action, mood);
    log.police = police;

    const mayor = MAYOR.adjust(action, police);
    log.mayor = mayor;

    return log;
  },
};

export default Council;
