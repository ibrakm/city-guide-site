document.addEventListener('DOMContentLoaded', function() {
    const guidesContainer = document.getElementById('guides-container');
    guidesContainer.innerHTML = '';
    // Example of static content (replace with Airtable fetch)
    const sampleGuides = [
        {
            CityName: "Rabat",
            ShortBlurb: "Capital of Morocco and one of AFCON 2025 host cities.",
            CoverImageURL: "https://source.unsplash.com/300x200/?rabat,morocco",
            CityTag: "AFCON 2025",
            GumroadLink: "https://gumroad.com",
            BitlyLink: "",
            IsCityOfTheWeek: true
        },
        {
            CityName: "Istanbul",
            ShortBlurb: "Where East meets West, a historic gem.",
            CoverImageURL: "https://source.unsplash.com/300x200/?istanbul",
            CityTag: "Trending",
            GumroadLink: "https://gumroad.com",
            BitlyLink: "",
            IsCityOfTheWeek: false
        }
    ];

    sampleGuides.forEach(fields => {
        const guideCard = `
            <div class="guide-card">
                <img src="${fields.CoverImageURL}" alt="A view of ${fields.CityName}">
                <div class="card-content">
                    <span class="city-tag">${fields.CityTag}</span>
                    <h3>${fields.CityName}</h3>
                    <p>${fields.ShortBlurb}</p>
                    <div class="price">$1</div>
                    <a href="${fields.BitlyLink || fields.GumroadLink}" target="_blank" class="cta-button small-button">Get The Guide</a>
                </div>
            </div>`;
        guidesContainer.innerHTML += guideCard;
    });
});