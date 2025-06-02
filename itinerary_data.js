export const general_travel_tips = {
    title: "Essential Gold Coast Travel Details",
    icon: "info",
    tips: [
        {
            heading: "Flight Itinerary",
            icon: "plane",
            content: `**Departure (Confirmed)**  
MEL Melbourne, Australia → OOL Gold Coast, Australia  
Mon, Jun 9 · 2h 5min · Non-stop  
Virgin Australia, VA 739  
Departure: 11:10 AM, Terminal 3  
Arrival: 1:15 PM, Terminal 1  
Aircraft: Boeing 737-800  

**Return**  
OOL Gold Coast, Australia → MEL Melbourne, Australia  
Fri, Jun 13 · 2h 25min · Non-stop  
Virgin Australia, VA 744  
Departure: 3:55 PM, Terminal 1  
Arrival: 6:20 PM, Terminal 3  
Aircraft: Boeing 737-800  

**Ticket Links:**  
Dana: [Link](https://drive.proton.me/urls/M5CMK2CRDR#sKpy0UzvOe1p)  
Adam: [Link](https://drive.proton.me/urls/B0BKMHXM4R#jKoJMbUbF7Hh)  
Yousef: [Link](https://drive.proton.me/urls/H8TTX5FKG4#mY1AhOcC6XAx)  
Thomas: [Link](https://drive.proton.me/urls/K0SFVA6BVW#WmdRjsxXaQu9)`
        },
        {
            heading: "Car Rental Details",
            icon: "car-front",
            content: `**Reservation Number:** ENJ-57752111  
**Local Partner Ref #:** WXX002DF76  
**Driver Name:** Ahmad Deeb  
**Start:** 09 June 2025, 12:00 PM  
**End:** 13 June 2025, 12:00 PM  
**Duration:** 4 days  
**Cost:** 140.32 AUD (Payable locally, excluding extras)  
**Phone:** 0416509455  

**Pickup & Drop-off:**  
Gold Coast Airport (Mon–Sun: 07:00–19:00)  
Vehicle: Subaru XV or similar  
Type: Intermediate Elite  
Transmission: Automatic  
Seats: 5 | Doors: 4–5 | A/C: Yes  

**Shuttle Info:**  
Location: 12 Rivendell Drive, Tweed Heads South, Gold Coast  
Call **131 381** to arrange pickup  
Follow signage to the “coaches” area at the building’s north end  
More info: [Everything Fleet](https://everythingfleet.com.au/car-truck-rentals-aus/)  

**Included Fees:**  
- Tax: $12.76  
- Premium Location Surcharge: $16.64  

**Rental Document:** [View here](https://drive.proton.me/urls/ZMFMXVNJKM#47NvtSzK7vSl)  
**Insurance Cover:** [RentalCover Account](https://www.rentalcover.com/en/account?language=en&utm_medium=email&utm_source=transactional&utm_content=enjoytravel&utm_campaign=singletrip-receipt&booking=4XB8-BMGM-INS&cor=AU&vehicle=car)  
[Policy Wording](https://www.rentalcover.com/en/pds/4XB8-BMGM-INS)`
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
                time_slot: "Morning / Early Afternoon",
                icon: "plane-landing",
                description: "Arrive at Gold Coast Airport (OOL). Proceed to collect your pre-booked rental car (allow approx. 1-1.5 hours for collection). Drive to your accommodation in Surfers Paradise, check-in, and settle in.",
                details: {
                    location: "Gold Coast Airport (OOL) & Surfers Paradise",
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
                name: "Sea World Cruises Buffet Dinner Sightseeing Cruise",
                time_slot: "Evening (e.g., 6:30 PM - 8:30 PM)",
                icon: "wind",
                description: "Enjoy a relaxing 2.5-hour cruise along the Gold Coast waterways aboard the 'Spirit of Elston', featuring stunning views of the Surfers Paradise skyline at night. Includes a buffet dinner with local produce and live entertainment.",
                details: {
                    location: "Sea World Cruises Terminal, Seaworld Dr, Main Beach",
                    hours: "Approximately 2 hours 30 minutes",
                    hours_note: "Verify specific session times for June 2025 and book in advance.",
                    website: "",
                    price: "From ~$129 AUD per person (based on direct operator pricing). Note: Aggregator sites may show prices from ~$85 USD due to promotional rates or currency conversion; verify current pricing when booking.",
                    duration: "Approx. 2 hours (including briefing and flights)."
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
            }
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
                name: "Jet Boat Extreme",
                time_slot: "Morning (e.g., 10:00 AM - 11:00 AM)",
                icon: "boat",
                description: "An adrenaline-pumping 55-minute jet boat ride with spins, slides, and power-break stops on the Gold Coast Broadwater.",
                details: {
                    location: "Behind Vibe Hotel, Ferny Ave, Surfers Paradise, QLD",
                    hours: "Typical Hours: Rides operate daily, typically 8:15 AM - 4:15 PM.",
                    hours_note: "Confirm specific ride times for June 2025 and book in advance.",
                    website: "https://www.jetboatextreme.com.au/",
                    price: "Adults approx. $89. Booking essential.",
                    duration: "55 mins ride; allow 1.5 hours total."
                }
            },
            {
                name: "Escape Room Challenge",
                time_slot: "Afternoon (e.g., 2:00 PM - 3:30 PM)",
                icon: "key-round",
                description: "Test your wits and teamwork in an immersive escape room. Choose from various themes.",
                details: {
                    location: "Options: Padlock'd (Surfers Paradise Blvd or Paradise Centre) or Eclipse Escape (Chevron Renaissance).",
                    hours: "Generally 10:00 AM - 10:00 PM/11:30 PM.",
                    hours_note: "Operating hours vary by venue. Booking essential for your chosen time slot in June 2025.",
                    website: "Padlock'd: https://padlockd.com.au/, Eclipse: https://www.eclipseescape.com.au/",
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
        day: 4,
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
            { name: "Relaxed Final Day", description: "If NRL is not preferred, enjoy a relaxed day: revisit a spot, beach time, or explore an area missed." },
            { name: "Q1 Resort & Spa Options", description: "If not climbing, enjoy Q1 facilities (if staying) or a leisurely brunch with views."}
        ]
    }
];
