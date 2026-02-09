// Registration popup using SweetAlert2
document.getElementById("registerBtn").addEventListener("click", () => {
  Swal.fire({
    title: 'Register',
    html: `
      <input type="text" id="name" class="swal2-input" placeholder="Name">
      <input type="email" id="email" class="swal2-input" placeholder="Email">
    `,
    confirmButtonText: 'Submit',
    focusConfirm: false,
    preConfirm: () => {
      const name = Swal.getPopup().querySelector('#name').value;
      const email = Swal.getPopup().querySelector('#email').value;
      if (!name || !email) {
        Swal.showValidationMessage(`Please enter both name and email`);
      }
      return { name: name, email: email };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(`
        Registered!
        Name: ${result.value.name}
        Email: ${result.value.email}
      `);
    }
  });
});