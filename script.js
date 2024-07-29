document.addEventListener('DOMContentLoaded', () => {
    // selection des données besoin
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('totalPrix');
// declaration
    cartItems.forEach(item => {
        const quantityElement = item.querySelector('.quantity');
        const prix = parseInt(item.getAttribute('prix'));
        const likeButton = item.querySelector('.like-btn');
        const deleteButton = item.querySelector('.delete-btn');
        const quantityButtons = item.querySelectorAll('.quantity-btn');
// changement couleur pour bouton like
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
        });

        deleteButton.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });
// nombre de quantité en cliquant sur le plus ou moins
        quantityButtons.forEach(button => {
            button.addEventListener('click', () => {
                let quantity = parseInt(quantityElement.textContent);
                const action = button.getAttribute('action');

                if (action === 'plus') {
                    quantity += 1;
                } else if (action === 'moins' && quantity > 1) {
                    quantity -= 1;
                }

                quantityElement.textContent = quantity;
                updateTotalPrice();
            });
        });
    });
//fonction calcul des prix viala quantité
    function updateTotalPrice() {
        let totalPrice = 0;

        document.querySelectorAll('.cart-item').forEach(item => {
            const prix = parseInt(item.getAttribute('prix'));
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            totalPrice += prix * quantity;
        });

        totalPriceElement.textContent = totalPrice;
    }

    updateTotalPrice();
});
