export const general_travel_tips = {
  title: "Essential Gold Coast Travel Details",
  icon: "info",
  tips: [
    {
      heading: "Flight Itinerary",
      icon: "plane",
      content: `
        <strong>Departure</strong><br/>
        Melbourne (MEL) → Gold Coast (OOL)<br/>
        <em>Mon, Jun 9 · 2h 5min · Non-stop</em><br/>
        Virgin Australia VA739<br/>
        Departure: 11:10 AM (Terminal 3) · Arrival: 1:15 PM (Terminal 1)<br/>
        Aircraft: Boeing 737-800<br/><br/>

        <strong>Return</strong><br/>
        Gold Coast (OOL) → Melbourne (MEL)<br/>
        <em>Fri, Jun 13 · 2h 25min · Non-stop</em><br/>
        Virgin Australia VA744<br/>
        Departure: 3:55 PM (Terminal 1) · Arrival: 6:20 PM (Terminal 3)<br/>
        Aircraft: Boeing 737-800<br/><br/>

        <strong>Tickets:</strong><br/>
        <ul>
      <li><a href="https://drive.proton.me/urls/M5CMK2CRDR#sKpy0UzvOe1p" target="_blank" rel="noopener">Dana's Ticket</a></li>
      <li><a href="https://drive.proton.me/urls/B0BKMHXM4R#jKoJMbUbF7Hh" target="_blank" rel="noopener">Adam's Ticket</a></li>
      <li><a href="https://drive.proton.me/urls/H8TTX5FKG4#mY1AhOcC6XAx" target="_blank" rel="noopener">Yousef's Ticket</a></li>
      <li><a href="https://drive.proton.me/urls/K0SFVA6BVW#WmdRjsxXaQu9" target="_blank" rel="noopener">Thomas's Ticket</a></li>
    </ul>
      `
    },
    {
      heading: "Car Rental Details",
      icon: "car-front",
      content: `
        <strong>Reservation Info</strong><br/>
        Reservation #: ENJ-57752111<br/>
        Local Ref #: WXX002DF76<br/>
        Driver: Ahmad Deeb<br/>
        Dates: Jun 9 (12:00) – Jun 13 (12:00)<br/>
        Duration: 4 days · Cost: 140.32 AUD (payable at counter)<br/><br/>

        <strong>Pickup & Drop-off</strong><br/>
        Gold Coast Airport · Open Daily 07:00–19:00<br/>
        Vehicle: Subaru XV or similar<br/>
        Group: Intermediate Elite · Auto · 5 seats · A/C<br/><br/>

        <strong>Shuttle Instructions</strong><br/>
        Location: 12 Rivendell Drive, Tweed Heads South<br/>
        Call <a href="tel:131381">131 381</a> to arrange pickup<br/>
        Follow signage to the northern “Coaches” end of the terminal<br/><br/>

        <strong>Fees Included</strong><br/>
        Tax: $12.76 · Premium Location Fee: $16.64<br/><br/>

        <strong>Documents & Insurance</strong><br/>
        Rental Confirmation: <a href="[rentalDoc]" target="_blank" rel="noopener">Available here</a><br/>
        Insurance Coverage: <a href="[insuranceLink]" target="_blank" rel="noopener">View policy</a>
      `.replace("[rentalDoc]", "https://drive.proton.me/urls/ZMFMXVNJKM#47NvtSzK7vSl")
       .replace("[insuranceLink]", "https://www.rentalcover.com/en/pds/4XB8-BMGM-INS")
    }
  ]
};



export const itinerary = [
    {
        day: 1,
        date: "June 9th, Monday",
        title: "Arrival & Urban Adventure",
        activities: [
            {
                name: "Arrive, Collect Car & Check-in",
                time_slot: "Afternoon (Arrival: 1:15 PM at the airport)",
                icon: "plane-landing",
                description: "Arrive at Gold Coast Airport (OOL). Proceed to collect your pre-booked rental car (allow approx. 1-1.5 hours for collection). Drive to your accommodation in Surfers Paradise, check-in, and settle in.",
                details: {
                    location: "Meriton Suites Surfers Paradise",
                    address: "86 Esplanade, Surfers Paradise QLD 4217",
                    phone: "(07) 5620 0888",
                    check_in: "Monday, June 9, 2025 (Suite will be available from 3:00 pm)",
                    check_out: "Friday, June 13, 2025 (Suite should be vacated prior to 10:00 am)",
                    nights: 4,
                    suite_type: "1 x 3 Bedroom Ocean Suite (Levels 26-31 ~ Ocean front ~ Enclosed Balcony)",
                    suite_details: "Three separate bedrooms, two full bathrooms, full kitchen and laundry. Enclosed balcony with table and chairs. (Full Ocean views)",
                    parking: "Offsite open-air car parking available adjacent to the hotel at $20 per vehicle per night (4-minute walk). Onsite car parking available at $25.00 per vehicle per night (clearance: 2.1 metres).",
                    map_link: "https://www.google.com/maps/dir//86+Esplanade,+Surfers+Paradise+QLD+4217/@-27.9961353,153.3479507,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6b9105faef614eb1:0x803be4f82483d5b0!2m2!1d153.4303234!2d-27.9961555?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                }
            },
            {
                name: "SkyPoint Observation Deck",
                time_slot: "Late Afternoon (e.g., 2:30 PM - 4:30 PM)",
                icon: "tower-control",
                description: "Ascend the Q1 Building for 360-degree views of the Gold Coast from Australia's only beachside observation deck as the sun begins to set.",
                details: {
                    location: "Level 77, Q1 Building, 9 Hamilton Ave, Surfers Paradise, QLD 4217",
                    hours: "Typical Hours: 7:30 AM – 9:00 PM daily (last entry 8:30 PM).",
                    hours_note: "Confirm hours for June 2025 as they can vary, and check for private event closures.",
                    website: "https://www.skypoint.com.au/",
                    price: "Adults from $31. Check for family passes or bundles.",
                    duration: "1-2 hours."
                }
            },
            {
                name: "Shisha Night at Cavill Park",
                time_slot: "Evening (e.g., 6:30 PM - 8:30 PM)",
                icon: "wind",
                description: "Enjoy a relaxing evening with shisha at Cavill Park in Surfers Paradise.",
                details: {
                    location: "Shisha Surfers Paradise, Cavill Park, 42 Cavill Ave, Surfers Paradise QLD 4217",
                    hours: "5:00 PM – 11:30 PM",
                    map_link: "https://www.google.com/maps/dir/Meriton+Suites+Surfers+Paradise,+Esplanade,+Surfers+Paradise+QLD/Cavill+Park,+42+Cavill+Ave,+Surfers+Paradise+QLD+4217/@-27.9976358,153.423269,16z/data=!3m2!4b1!5s0x6b910572969ae4e5:0x8888afb4b9aab613!4m13!4m12!1m5!1m1!1s0x6b9105faef614eb1:0x803be4f82483d5b0!2m2!1d153.4303234!2d-27.9961555!1m5!1m1!1s0x6b9105732d8c27e3:0x76a3b73771cdd8bf!2m2!1d153.4275746!2d-28.0018891?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                }
            },
            {
                name: "OPTIONAL Explore Cavill Avenue & Dinner",
                time_slot: "Evening",
                icon: "shopping-bag",
                description: "Stroll down vibrant Cavill Avenue, the heart of Surfers Paradise, with its shops, eateries, and street performers. Choose a restaurant for dinner.",
                details: {
                    location: "Cavill Avenue, Surfers Paradise, QLD 4217",
                    hours: "Shops generally 9 AM - 8 PM; dining/entertainment later.",
                    price: "Free to explore; costs vary for shopping/dining."
                }
            },
            {
                name: "Board Game Night: Fox Experience",
                time_slot: "Evening (After Dinner)",
                icon: "gamepad-2", // or "dice" if you prefer
                description: "Family game night featuring the Fox Experience board game in the comfort of your suite.",
                details: {
                    location: "Meriton Suites Surfers Paradise",
                    game: "Fox Experience",
                    duration: "As long as you want to play!",
                    notes: "Perfect relaxed evening activity with beautiful ocean views from your suite"
                }
            },
        ],
        dining_suggestions: {
            breakfast: "Cafe near your accommodation post check-in.",
            lunch: "Casual bite in Surfers Paradise.",
            dinner: "Diverse options on Cavill Avenue or nearby streets (e.g., Italian, Asian, Modern Australian)."
        },
        alternatives: [
            { name: "Timezone Surfers Paradise", description: "Large indoor arcade for evening fun if preferred over Cavill Ave exploration." }
        ]
    },
 

    {
        day: 2,
        date: "June 10th, Tuesday",
        title: "Thrills, Puzzles & Strikes",
        activities: [
            {
                name: "Gold Coast: Sightseeing Cruise with Buffet Lunch",
                time_slot: "Tuesday, June 10, 2025 at 12:00 PM",
                icon: "ship",
                description: "Enjoy a scenic cruise along the Gold Coast waterways with a delicious buffet lunch included. The cruise offers stunning views of the Surfers Paradise skyline and waterfront mansions.",
                details: {
                    location: "Ferry Wharf, Appel Park, Surfers Paradise (Nerang River-end of Cavill Ave)",
                    address: "10 Ferny Ave, Surfers Paradise QLD 4217, Australia",
                    meeting_point: "Look for the SEA WORLD CRUISES vessel at the Ferry Wharf",
                    parking: "Bruce Bishop Car Park, Beach Road, Surfers Paradise",
                    transport: "Short walk from Cavill Avenue Light Rail Station and major hotels",
                    hours: "Please arrive 30 minutes before departure (by 11:30 AM)",
                    seating: "Inside Seating",
                    website: "https://www.seaworldcruises.com.au/",
                    price: "Price included in your GYGG46FKX3KN booking",
                    duration: "Approximately 2 hours"
                  }
            },
            {
                name: "Escape Room Challenge",
                time_slot: "Afternoon (e.g., 4:00 PM - 5:30 PM)",
                icon: "key-round",
                description: "Test your wits and teamwork in an immersive escape room. Choose from various themes.",
                details: {
                    location: "Eclipse Escape (Chevron Renaissance).",
                    hours: "Generally 10:00 AM - 10:00 PM/11:30 PM.",
                    hours_note: "Operating hours vary by venue. Booking essential for your chosen time slot in June 2025.",
                    website: "https://www.eclipseescape.com.au/",
                    price: "Approx. $39-$49 per person.",
                    duration: "Approx. 1-hour game + briefing."
                }
            },
            {
                name: "Holey Moley Golf or Strike Bowling",
                time_slot: "Evening",
                icon: "gamepad-2",
                description: "Choose your fun: quirky mini-golf at Holey Moley or bowling at Strike Bowling, both in the same entertainment hub.",
                details: {
                    location: "Level 1, Galaxy Centre, Cnr 3197 Surfers Paradise Blvd & Elkhorn Ave, Surfers Paradise",
                    hours: "Holey Moley (Tue): Approx. 10AM-10PM. Strike Bowling (Tue): Approx. 12PM-9PM.",
                    hours_note: "Confirm exact hours for June 2025 and book, especially for groups.",
                    website: "Holey Moley: https://holeymoley.com.au/locations/surfers-paradise, Strike: https://strikebowling.com.au/locations/strike-surfers-paradise",
                    price: "Holey Moley (9 Holes $18-$20). Strike Bowling (1 Game $22).",
                    duration: "1-2 hours per activity."
                }
            }
        ],
        dining_suggestions: {
            breakfast: "Local cafe in Surfers Paradise.",
            lunch: "Near Main Beach/Surfers after jet boating, or central Surfers.",
            dinner: "Casual dinner at Holey Moley/Strike venue or nearby eateries."
        },
        alternatives: [
            { name: "Infinity Attraction", description: "A mind-bending maze of special effects and illusions (if not chosen later)." }
        ]
    },
    {
        day: 3,
        date: "June 12th, Thursday",
        title: "Sunrise & Hinterland Delights",
        activities: [
             {
                name: "Gold Coast Hot Air Balloon with Breakfast and Return Transfer",
                time_slot: "Morning",
                icon: "infinity",
                description: "Experience a magical sunrise hot air balloon flight over the Gold Coast Hinterland with professional pilots. After landing, enjoy a gourmet hot breakfast with sparkling wine at O'Reilly's Grand Homestead & Vineyard, meet alpacas, and have access to wine tasting. Includes return transfers and a digital photo package",
                details: {
                    location: "The entire experience, including transfers, flight, breakfast, and return, takes approximately 6-7 hours (from early morning pickup to return)",
                    hours: "Typical Hours: Daily 10:00 AM - 10:00 PM.",
                    hours_note: "Confirm hours for June 2025.",
                    website: "https://www.overtheplanet.com/en-US/unique-experiences-with-buy-1-get-1-freegold-coast-hot-air-balloon-with-breakfast-and-return-transfer.a207864?utm_source=gttd&utm_medium=organic&s=search&f=cat&option_id=493715&currency=KWD",
                    Operator: "Typically facilitated by 'Over The Planet' or similar, operating with local balloon companies",
                    price: "Adults approx. $324 per person.",
                    duration: "Very early morning hotel pickup (between 3:25 AM and 4:20 AM, depending on the season/sunrise). Flight around 7:00 AM. Breakfast around 8:00 AM. Return transfer completes between 9:45 AM and 10:30 AM."
                }
            },
            {
                name: "Surfers Paradise River Cruise",
                time_slot: "Late Morning / Lunchtime (e.g. 12:30 PM)",
                icon: "ship",
                description: "Relax on a calm water cruise along the Nerang River. See celebrity homes and iconic landmarks.",
                details: {
                    location: "Departs river end of Cavill Ave (63 Cavill Ave), Surfers Paradise",
                    hours: "Various cruises typically 9 AM - 5 PM.",
                    hours_note: "Departure times vary. Confirm specific cruise times for June 2025 and book.",
                    website: "https://surfersparadiserivercruises.com.au/",
                    price: "From $15-$25 per adult for sightseeing.",
                    duration: "1 - 1.5 hours."
                }
            },
            {
                name: "Relax or Shop",
                time_slot: "Afternoon",
                icon: "coffee",
                description: "Enjoy free time: relax on the beach, browse shops at Paradise Centre, or revisit a favourite spot.",
                details: {
                    location: "Surfers Paradise",
                }
            },
            {
                name: "Dracula's Cabaret Dinner & Show",
                time_slot: "Evening (Doors open ~6:30 PM)",
                icon: "star",
                description: "A night of thrilling entertainment: 3-course dinner with comedy, rock, burlesque, and circus acts. (MA15+).",
                details: {
                    location: "1 Hooker Blvd, Broadbeach, QLD 4218 (Short drive/taxi from Surfers)",
                    hours: "Show nights typically Tue-Sat. Thursday June 12th is usually a show night.",
                    hours_note: "Confirm specific show dates/times for June 2025 and book well in advance as tickets sell out.",
                    website: "https://draculas.com.au/",
                    price: "From $119-$159 per person (includes dinner & show). Booking essential.",
                    duration: "Full evening experience (approx. 4-5 hours)."
                }
            }
        ],
        dining_suggestions: {
            breakfast: "Cafe in Surfers Paradise.",
            lunch: "Onboard river cruise (if available) or casual cafe in Surfers. Paradise Centre has options.",
            dinner: "Included at Dracula's Cabaret."
        },
        alternatives: [
            { name: "Shopping at Pacific Fair", description: "Visit Pacific Fair in Broadbeach for upscale shopping." },
            { name: "Explore Broadbeach", description: "Spend the afternoon exploring Broadbeach before Dracula's." }
        ]
    },
    {
        day: 4,
        date: "June 11th, Wednesday",
        title: "Tamborine Mountain High Ropes Adventure",
        activities: [
            {
                name: "Drive to Tamborine Mountain",
                time_slot: "Morning",
                icon: "mountain",
                description: "Enjoy a scenic drive (~1 hour) from Surfers Paradise to Tamborine Mountain.",
                details: {}
            },
            {
                name: "TreeTop Challenge High Ropes Course",
                time_slot: "Mid-morning to Early Afternoon (e.g. 10:00 AM start)",
                icon: "trees",
                description: "Conquer Australia's largest high ropes adventure park with ziplines and suspension bridges in the rainforest canopy.",
                details: {
                    location: "Inside Thunderbird Park, Cnr Tamborine Mountain Rd & Cedar Creek Falls Rd, North Tamborine",
                    hours: "Sessions typically start from 9:30 AM or 10:00 AM.",
                    hours_note: "Bookings essential. Confirm exact session availability for June 2025 on their website.",
                    website: "https://www.treetopchallenge.com.au/tamborine-mtn-adventure",
                    price: "Approx. $60-$100+ per adult. Check website.",
                    duration: "3-4 hours for the main course."
                }
            },
            {
                name: "Explore Gallery Walk (Optional)",
                time_slot: "Afternoon",
                icon: "store",
                description: "If time permits, stroll Tamborine Mountain's Gallery Walk, browsing art, crafts, and cafes.",
                details: {
                    location: "Long Road, Tamborine Mountain, QLD 4272",
                    hours: "Shops typically 10 AM - 4 PM.",
                    hours_note: "Individual shop hours may vary."
                }
            },
            {
                name: "Return to Surfers Paradise",
                time_slot: "Late Afternoon",
                icon: "undo-2",
                description: "Drive back to Surfers Paradise.",
                details: {}
            }
        ],
        dining_suggestions: {
            breakfast: "Grab something quick before heading to Tamborine Mountain.",
            lunch: "Cafe at Thunderbird Park or on Gallery Walk.",
            dinner: "Relaxed dinner in Surfers Paradise."
        },
        alternatives: [
            { name: "Burleigh Heads Coastal Walk & James St", description: "Opt for a coastal day exploring Burleigh Heads, its scenic walk, and trendy James Street." },
            { name: "Currumbin Alley Watersports", description: "Enjoy kayaking or stand-up paddleboarding in Currumbin Alley." }
        ]
    },
    
    {
        day: 5,
        date: "June 13th, Friday",
        title: "Shopping & Departure",
        activities: [
            {
                name: "Breakfast, Last Minute Souvenirs / Pack / Lunch",
                time_slot: "Mornign until derparture)",
                icon: "luggage",
                description: " Breakfast at Paddock Bakery https://www.paddockbakery.com/. Grab lunch, do some last-minute souvenir shopping https://www.pacificfair.com.au/, pack, and check out of accommodation if not already done. Plan this time efficiently.",
                details: {
                    notes: "<strong>Time Management:</strong> This day has multiple transitions. Plan your time carefully to enjoy all activities and manage travel to Robina and the airport without stress."
                }
            },
            {
                name: "Prepare for Departure & Airport Transfer",
                time_slot: "Late Evening / Night (Post-NRL Game, e.g., 10:30 PM onwards)",
                icon: "plane-takeoff",
                description: "After the game, drive to Gold Coast Airport (OOL) for your car rental return and flight departure.",
                details: {
                    location: "Gold Coast Airport (OOL), Bilinga",
                    notes: [
                        "<strong>Car Rental Return (OOL):</strong> Follow signs for 'Rental Car Returns'. Most agencies are near the terminals. Allow at least 30-45 minutes for vehicle inspection and paperwork. Confirm return procedures and after-hours drop-off options with your rental company.",
                        "<strong>Airport Check-in:</strong> For domestic flights, aim to be at check-in 1.5-2 hours before departure. Factor this in after car return. Confirm your airline's specific recommendations.",
                        "<strong>Final Check:</strong> Ensure all belongings are collected from the rental car before returning it."
                    ]
                }
            }
        ],
        dining_suggestions: {
            breakfast: "Final Gold Coast breakfast at a favourite cafe.",
            lunch: "Casual lunch in Surfers Paradise or near Robina Town Centre before heading to the game.",
            dinner: "Quick bite near Cbus Super Stadium or stadium food. Alternatively, an earlier dinner in Surfers/Robina."
        },
        alternatives: [
            { name: "Q1 Resort & Spa Options", description: "If not climbing, enjoy Q1 facilities (if staying) or a leisurely brunch with views."}
        ]
    }
];
