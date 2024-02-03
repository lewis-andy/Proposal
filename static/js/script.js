function toggleNav() {
  var navList = document.getElementById("navList");
  navList.classList.toggle("show");
}
  // Function to open the file input when the edit icon is clicked
        function openFileInput() {
            document.getElementById('fileInput').click();
        }

        // Function to display the selected image in the profile container
        function displayImage(input) {
            const profileImage = document.getElementById('profileImage');

            if (input.files && input.files[0]) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    profileImage.src = e.target.result;
                };

                reader.readAsDataURL(input.files[0]);
            }
        }