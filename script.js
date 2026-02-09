// Firefox Club Registration popup using SweetAlert2
document.getElementById("registerBtn").addEventListener("click", () => {
  Swal.fire({
    title: 'Mozilla Firefox Club Registration',
    html: `
      <input type="text" id="name" class="swal2-input" placeholder="Name">
      <input type="email" id="email" class="swal2-input" placeholder="Email">
      <input type="tel" id="phone" class="swal2-input" placeholder="Phone Number">
    `,
    confirmButtonText: 'Join Club',
    background: '#1c1b22',
    color: '#fff',
    confirmButtonColor: '#ff7139',
    focusConfirm: false,
    preConfirm: () => {
      const name = Swal.getPopup().querySelector('#name').value;
      const email = Swal.getPopup().querySelector('#email').value;
      const phone = Swal.getPopup().querySelector('#phone').value;
      if (!name || !email || !phone) {
        Swal.showValidationMessage(`Please enter name, email, and phone number`);
      }
      return { name, email, phone };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: 'Registration Complete!',
        html: `
          <p><strong>Name:</strong> ${result.value.name}</p>
          <p><strong>Email:</strong> ${result.value.email}</p>
          <p><strong>Phone:</strong> ${result.value.phone}</p>
        `,
        confirmButtonColor: '#ff7139'
      });
    }
  });
});