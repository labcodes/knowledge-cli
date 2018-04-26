const Helpers = {
  validateFields(value, message) {
    if (value.length) {
      return true;
    }

    return message;
  },
};

// ====

module.exports = Helpers;
