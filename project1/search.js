<script>
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    const menuCards = document.querySelectorAll('.menu-card');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        const query = searchInput.value.toLowerCase(); // Get the search query

        menuCards.forEach(card => {
            const dishName = card.querySelector('.card-info h4').textContent.toLowerCase();
            if (dishName.includes(query)) {
                card.style.display = 'block'; // Show the card if it matches
            } else {
                card.style.display = 'none'; // Hide the card if it doesn't match
            }
        });
    });
});
</script>
