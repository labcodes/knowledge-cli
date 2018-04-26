const Helpers = {
  validateFields(value = null, message = '') {
    if (value && value.length) {
      return true;
    }

    return message;
  },
};

// ====

module.exports = Helpers;
