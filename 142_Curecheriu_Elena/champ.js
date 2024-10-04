fetch('http://localhost:5000/champ.json')
    .then(response => response.json())
    .then(data => {
        const randomMatch = data[Math.floor(Math.random() * data.length)];

        const homeFlag = document.createElement('img');
        homeFlag.src = randomMatch.homeflag;
        document.body.appendChild(homeFlag);

        const guestFlag = document.createElement('img');
        guestFlag.src = randomMatch.guestflag;
        document.body.appendChild(guestFlag);

        const matchDetails = document.createElement('p');
        matchDetails.textContent = `Match date and time: ${randomMatch.date} ${randomMatch.time}`;
        document.body.appendChild(matchDetails);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    const flags = document.querySelectorAll('img');

    flags.forEach(flag => {
        flag.addEventListener('mouseover', () => {
            const country = flag.getAttribute('src') === randomMatch.homeflag ? randomMatch.homecountry : randomMatch.guestcountry;
            const countryInfo = document.createElement('p');
            countryInfo.textContent = `Country: ${country}`;
            document.body.appendChild(countryInfo);
        });

        flag.addEventListener('mouseout', () => {
            const countryInfo = document.querySelector('p');
            if (countryInfo) {
                document.body.removeChild(countryInfo);
            }
        });
    });

