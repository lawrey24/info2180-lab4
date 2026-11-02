document.addEventListener('DOMContentLoaded',()=> {
    const searchBtn = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const resultDiv = document.getElementById('result');

    searchBtn.addEventListener('click',()=> {

        const query = searchInput.value.trim();
        //const url = `superheroes.php?query=${encodeURIComponent(query)}`;

        fetch('superheroes.php').then(response => {
            if(!response.ok){
                throw new Error("Network response was not ok");
            }

            return response.text();
        })
        .then(data => {
            resultDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            resultDiv.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
        })


    })
})