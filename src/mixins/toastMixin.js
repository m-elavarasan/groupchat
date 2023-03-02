export default {
  methods: {
    displayErrorMessage(msg, variant) {
      this.$bvModal.msgBoxOk(msg, {
        title: 'Error',
        headerClass: `bg-${variant} text-light`,
        footerClass: 'd-flex justify-content-center',
        okVariant: variant,
        centered: true,
        size: 'sm'
      })
    },     
    displayConfirmation(msg, variant) {
      return new Promise((resolve, reject) => {
        this.$bvModal
          .msgBoxConfirm(`${msg}`, {
            title: "Please Confirm",
            size: "sm",
            buttonSize: "sm",
            okVariant: variant,
            okTitle: "YES",
            cancelTitle: "NO",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true,
          })
          .then((value) => {
            resolve(value);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
