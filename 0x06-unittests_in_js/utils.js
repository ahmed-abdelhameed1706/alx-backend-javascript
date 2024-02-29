const Utils = {
  calculateNumber: (type, a, b) => {
    ra = Math.round(a);
    rb = Math.round(b);
    if (type === "SUM") {
      return ra + rb;
    } else if (type === "SUBTRACT") {
      return ra - rb;
    } else if (type === "DIVIDE") {
      if (rb === 0) {
        return "Error";
      } else {
        return ra / rb;
      }
    }
  },
};

module.exports = Utils;
