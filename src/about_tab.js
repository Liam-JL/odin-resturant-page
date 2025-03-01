export function constructAbout(parent) {
    parent.classList.add("about-layout");
   
    // Create and append the first h3 and paragraph for "About Us"
    const aboutHeader1 = document.createElement('h3');
    aboutHeader1.classList.add('about-header');
    aboutHeader1.textContent = 'About Us';
    parent.appendChild(aboutHeader1);

    const aboutParagraph1 = document.createElement('p');
    aboutParagraph1.classList.add('about-paragraph');
    aboutParagraph1.textContent = 'Welcome to Odin Restaurant, where timeless elegance meets modern cuisine. Nestled in the heart of Mayfair, London, our restaurant offers a refined yet welcoming atmosphere, perfect for intimate dinners, business lunches, and special celebrations.';
    parent.appendChild(aboutParagraph1);

    // Create and append the second h3 and paragraph for "Our Story"
    const aboutHeader2 = document.createElement('h3');
    aboutHeader2.classList.add('about-header');
    aboutHeader2.textContent = 'Our Story';
    parent.appendChild(aboutHeader2);

    const aboutParagraph2 = document.createElement('p');
    aboutParagraph2.classList.add('about-paragraph');
    aboutParagraph2.textContent = 'Founded in 2015 by kind of mid chef Charles Lunchmaker, Odin Restaurant was born from a passion for blending classic European flavors with contemporary innovation. Inspired by the bustling cafés of Paris, the rustic charm of Tuscany, and the refined dining culture of London, we set out to create a space where food is more than just a meal—it’s an experience.';
    parent.appendChild(aboutParagraph2);

    const aboutParagraph3 = document.createElement('p');
    aboutParagraph3.classList.add('about-paragraph');
    aboutParagraph3.textContent = 'From our handmade pasta and aged steaks to our seasonal tasting menus, every dish is crafted with precision and care. Over the years, Odin Restaurant has grown into a beloved dining destination, earning a reputation for exceptional service, an exquisite wine selection, and a warm, sophisticated ambiance.';
    parent.appendChild(aboutParagraph3);

    // Create and append the third h3 and paragraph for "Our Philosophy"
    const aboutHeader3 = document.createElement('h3');
    aboutHeader3.classList.add('about-header');
    aboutHeader3.textContent = 'Our Philosophy';
    parent.appendChild(aboutHeader3);

    const aboutParagraph4 = document.createElement('p');
    aboutParagraph4.classList.add('about-paragraph');
    aboutParagraph4.textContent = 'At Odin Restaurant, we believe that great food starts with great ingredients. We source the freshest produce from local British farms, ensuring our menu remains seasonal and sustainable. Whether you’re here for a leisurely lunch, an indulgent dinner, or just a glass of wine at our bar, our goal is to make every visit unforgettable.';
    parent.appendChild(aboutParagraph4);

    const aboutParagraph5 = document.createElement('p');
    aboutParagraph5.classList.add('about-paragraph');
    aboutParagraph5.textContent = 'Come and discover the art of fine dining at Odin Restaurant—where every plate tells a story.';
    parent.appendChild(aboutParagraph5);

    // Create and append the div for "Opening Times"
    const aboutInfoDiv = document.createElement('div');
    aboutInfoDiv.classList.add('about-info');
    parent.appendChild(aboutInfoDiv);

    const aboutHeader4 = document.createElement('h3');
    aboutHeader4.classList.add('about-header');
    aboutHeader4.textContent = 'Opening Times';
    aboutInfoDiv.appendChild(aboutHeader4);

    const aboutParagraph6 = document.createElement('p');
    aboutParagraph6.classList.add('about-paragraph');
    aboutParagraph6.textContent = 'Monday - Thursday: 12:00 PM – 10:00 PM';
    aboutInfoDiv.appendChild(aboutParagraph6);

    const aboutParagraph7 = document.createElement('p');
    aboutParagraph7.classList.add('about-paragraph');
    aboutParagraph7.textContent = 'Friday - Saturday: 12:00 PM – 11:30 PM';
    aboutInfoDiv.appendChild(aboutParagraph7);

    const aboutParagraph8 = document.createElement('p');
    aboutParagraph8.classList.add('about-paragraph');
    aboutParagraph8.textContent = 'Sunday: 12:00 PM – 9:00 PM';
    aboutInfoDiv.appendChild(aboutParagraph8);

    const aboutAddress = document.createElement('p');
    aboutAddress.classList.add('about-info__address');
    aboutAddress.textContent = '45 Kensington High Street, Mayfair, London W1J 7NT';
    aboutInfoDiv.appendChild(aboutAddress);

    const aboutPhone = document.createElement('p');
    aboutPhone.classList.add('about-info__number');
    aboutPhone.textContent = '+44 20 7946 0123';
    aboutInfoDiv.appendChild(aboutPhone);
}