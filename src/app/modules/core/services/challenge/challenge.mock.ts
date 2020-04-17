export const CHALLENGES = [
    {
        id: 'feed-the-heroes',
        type: 'internal',
        title: 'Feed the Heroes',
        status: 'OPEN',
        home_image: '../../../assets/img/feed-a-hero.png',
        home_background: '../../../assets/img/feed-a-hero-background.png',
        image: '../../../assets/img/feed-a-hero.png',
        background: '../../../assets/img/feed-a-hero-background.png',
        description: `A website to allow individuals and organizations to
            purchase meals for hospital departments or entire medical facilities.`,
        long_description: `<h3>Healthcare professionals around the world work long hours in difficult conditions
            to care for COVID-19 patients.<br/> And they need our help.</h3>
            <p>During a 12-24 hour shift, workers often cannot stop to eat a real meal so <strong>Feed The Heroes </strong> is dedicated
            to keeping valuable medical teams fed. With the this initiative, some economically-challenged restaurants could
            rehire laid-off staff to prepare the food necessary to keep medical professionals healthy and working.</p>
`,
        points: [
            'Database of available hospitals, nursing units and clinics in a geographic region',
            'Start with cities that are most deeply affected by COVID19 today',
            'How to purchase food and schedule delivery (morning, afternoon and night shifts)',
            'How to determine headcount and delivery location',
            'Arrange for delivery with a partnership, for example UberEats, DoorDash or other platforms',
            'The website is easily translatable into different languages'
        ]
    },
    {
        id: 'healthcare-system-data',
        type: 'internal',
        title: 'Healthcare System Data',
        status: 'OPEN',
        home_image: '../../../assets/img/healthcare-system-data.png',
        home_background: '../../../assets/img/healthcare-system-data-background.png',
        image: '../../../assets/img/healthcare-system-data.png',
        background: '../../../assets/img/healthcare-system-data-background.png',
        description: `Building a data collection platform`,
        long_description: `
        <p><strong>The COVID-19 pandemic revealed key data
        shortages in healthcare systems, whether in
        locating equipment or sharing resources.
        In the US, the CDC* anticipates a second wave
        of the virus so we must act now to supply
        healthcare professionals with resources
        needed to treat and save patients.</strong></p>`,
        points: [
            'Hospital supply chains are in disarray, forcing buyers to source supplies from the internet or unapproved vendors, where quality and effectiveness are not necessarily guaranteed.',
            'Build an online tool to connect hospital procurement departments with suppliers ',
            'Includes a feature where hospitals post supplies needed and how quickly they are required, and vendors respond with availability',
        ],
    },
    {
        id: 'covent-19',
        type: 'external',
        title: 'CoVent-19 Challenge',
        home_image: '../../../assets/img/covent-19.png',
        home_background: '../../../assets/img/covent-19-background.png',
        url: 'https://www.coventchallenge.com/',
        image: '',
        background: '',
        description: `An Open Innovation Effort to Design a Rapidly Deployable Mechanical Ventilator`,
    }
];