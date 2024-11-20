document.addEventListener('DOMContentLoaded', function() {
    const barGraph = document.querySelector('.bar-category-graph'); 
    const bars = document.querySelectorAll('.bar-category');       
    const totalWidth = barGraph.offsetWidth;

    bars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        if (percentage) {
            const barWidth = (percentage / 100) * totalWidth;
            bar.style.width = `${barWidth}px`;
        }
    });

    window.addEventListener('resize', function() {
        const newTotalWidth = barGraph.offsetWidth;

        bars.forEach(bar => {
            const percentage = bar.getAttribute('data-percentage');
            if (percentage) {
                const newBarWidth = (percentage / 100) * newTotalWidth;
                bar.style.width = `${newBarWidth}px`;
            }
        });
    });
});

const platforms = [
    {
        lessons: 8,
        name: 'Google Meet',
        link:'https://meet.google.com',
        hours: 12.5,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48"><rect width="16" height="16" x="16" y="16" fill="#fff" transform="rotate(-90 20 24)"></rect><polygon fill="#1e88e5" points="3,17 3,31 8,32 13,31 13,17 8,16"></polygon><path fill="#4caf50" d="M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z"></path><path fill="#fbc02d" d="M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z"></path><path fill="#1565c0" d="M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z"></path><polygon fill="#e53935" points="13,7 13,17 3,17"></polygon><polygon fill="#2e7d32" points="38,24 37,32.45 27,24 37,15.55"></polygon><path fill="#4caf50" d="M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z"></path></svg>`
    },
    {
        lessons: 5,
        name: 'Skype',
        link:'https://www.skype.com',
        hours: 6.8,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><radialGradient id="u5YTW6YS6KxJF_jR8TBP1a" cx="17.827" cy="18.369" r="13.945" gradientUnits="userSpaceOnUse"><stop offset=".528" stop-color="#007ec4"/><stop offset=".878" stop-color="#00a0de"/><stop offset="1" stop-color="#00ade8"/></radialGradient><path fill="url(#u5YTW6YS6KxJF_jR8TBP1a)" d="M16,5C9.925,5,5,9.925,5,16s4.925,11,11,11s11-4.925,11-11S22.075,5,16,5z"/><radialGradient id="u5YTW6YS6KxJF_jR8TBP1b" cx="28.168" cy="33.743" r="15.353" gradientUnits="userSpaceOnUse"><stop offset=".441" stop-color="#0868b3"/><stop offset=".581" stop-color="#0770b8"/><stop offset=".798" stop-color="#0486c4"/><stop offset="1" stop-color="#00a0d3"/></radialGradient><path fill="url(#u5YTW6YS6KxJF_jR8TBP1b)" d="M32,21c-6.075,0-11,4.925-11,11s4.925,11,11,11s11-4.925,11-11S38.075,21,32,21z"/><linearGradient id="u5YTW6YS6KxJF_jR8TBP1c" x1="11.272" x2="36.728" y1="11.272" y2="36.728" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00b3ee"/><stop offset="1" stop-color="#0082d8"/></linearGradient><path fill="url(#u5YTW6YS6KxJF_jR8TBP1c)" d="M24,6C14.059,6,6,14.059,6,24s8.059,18,18,18s18-8.059,18-18S33.941,6,24,6L24,6z"/><path fill="#fff" d="M16.97,31.316c0-1.037,1.089-1.624,1.832-1.624s2.816,1.451,4.803,1.451	c1.054,0,3.421-0.103,3.421-2.29c0-3.585-10.115-3.308-10.115-9.274c0-1.038,0.285-5.795,7.784-5.795c2.016,0,5.71,0.577,5.71,2.493	c0,1.406-0.958,1.769-1.6,1.769c-1.244,0-1.745-1.123-4.285-1.123c-3.508,0-3.421,2.102-3.421,2.408	c0,3.017,10.073,3.017,10.073,9.255c0,6.141-7.491,5.814-8.58,5.814C21.474,34.4,16.97,33.856,16.97,31.316z"/></svg>`
    },
    {
        lessons: 3,
        name: 'Zoom',
        link:'https://www.zoom.com',
        hours: 4.2,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><circle cx="24" cy="24" r="20" fill="#2196f3"/><path fill="#fff" d="M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z"/><polygon fill="#fff" points="37,31 31,27 31,21 37,17"/></svg>`
    },
    {
        lessons: 2,
        name: 'Facebook',
        link:'https://www.facebook.com',
        hours: 2.5,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>`
    }
];

const container = document.getElementById('platform-details-container');

platforms.forEach(platform => {
    const platformDetail = document.createElement('div');
    platformDetail.classList.add('platform-details');

    platformDetail.innerHTML = `
        <div class="img-bg">${platform.svg}</div>
        <div class="platform-txt">
            <div class="platform-txt-lessons">
                <p>${platform.lessons} lessons</p>
                <a href=${platform.link} class="nav-link">${platform.name}</a>
            </div>
            <div class="platform-txt-end">
                <span style="color:black;">${platform.hours}</span>
                <p>h</p>
            </div>
        </div>
    `;

    container.appendChild(platformDetail);
});

function toggleDropdown(event) {
    event.preventDefault();
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
}

document.addEventListener('click', (event) => {
if (!event.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
    menu.classList.remove('show');
    });
}
});
  

