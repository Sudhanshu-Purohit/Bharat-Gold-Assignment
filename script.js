const form = document.getElementById('customizationForm');
const outfitImage = document.getElementById('outfit-image');
const previewImage = document.getElementById('preview-image');

// Preview outfit image
outfitImage.addEventListener('change', () => {
    const file = outfitImage.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        previewImage.src = reader.result;
        previewImage.style.display = 'block';
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        previewImage.src = '#';
        previewImage.style.display = 'none';
    }
});

// Form validation
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const occasion = document.getElementById('occasion').value;
    const purchase = document.querySelector('input[name="purchase"]:checked');
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.querySelector('input[name="age"]:checked');
    const religion = document.getElementById('religion').value;
    const jewellery = Array.from(document.querySelectorAll('input[name="jewellery"]:checked')).map(input => input.value);
    const budget = document.getElementById('budget').value;

    if (!occasion || !purchase || !gender || !age || !jewellery.length || !budget) {
        alert('Please fill in all required fields.');
        return;
    }

    // Form data object
    const formData = {
        occasion,
        purchase: purchase.value,
        gender: gender.value,
        age: age.value,
        religion,
        jewellery,
        budget,
        outfitImage: outfitImage.files[0] || null
    };

    console.log(formData);

    form.reset();
    previewImage.src = '#';
    previewImage.style.display = 'none';
});