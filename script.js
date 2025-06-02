import { itinerary, general_travel_tips } from './itinerary_data.js';
import { animate, stagger, inView } from "https://esm.run/framer-motion";

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    renderTravelTips(general_travel_tips);
    renderItinerary();
    setupAnimations();
});

function renderTravelTips(tipsData) {
    const container = document.getElementById('travel-tips-container');
    if (!container || !tipsData) return;

    let tipsHtml = tipsData.tips.map(tip => `
        <div class="tip-item">
            <h3 class="text-lg font-semibold flex items-center mb-1">
                ${tip.icon ? `<i data-lucide="${tip.icon}" class="mr-2 h-5 w-5 text-amber-600"></i>` : ''}
                ${tip.heading}
            </h3>
            <p class="text-gray-600 leading-relaxed">${tip.content}</p>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="travel-tips-card">
            <h2 class="text-3xl font-bold mb-6 flex items-center">
                ${tipsData.icon ? `<i data-lucide="${tipsData.icon}" class="mr-3 text-sky-600"></i>` : ''}
                ${tipsData.title}
            </h2>
            <div class="space-y-4">
                ${tipsHtml}
            </div>
        </div>
    `;
    lucide.createIcons();
}


function renderItinerary() {
    const container = document.getElementById('itinerary-container');
    if (!container) return;

    itinerary.forEach(dayData => {
        const dayElement = document.createElement('div');
        dayElement.className = 'day-container';

        let activitiesHtml = dayData.activities.map(activity => {
            let detailsHtml = '';
            if (activity.details) {
                detailsHtml += activity.details.location ? `<p class="detail-item flex items-start"><i data-lucide="map-pin" class="mr-2 mt-1 h-4 w-4"></i><strong>Location:</strong> ${activity.details.location}</p>` : '';
                detailsHtml += activity.details.hours ? `<p class="detail-item flex items-start"><i data-lucide="clock" class="mr-2 mt-1 h-4 w-4"></i><strong>Hours:</strong> ${activity.details.hours}</p>` : '';
                if (activity.details.hours_note) {
                     detailsHtml += `<p class="detail-note text-xs text-amber-700 ml-6 flex items-start"><i data-lucide="alert-circle" class="mr-1 mt-px h-3 w-3"></i>${activity.details.hours_note}</p>`;
                }
                detailsHtml += activity.details.price ? `<p class="detail-item flex items-start"><i data-lucide="dollar-sign" class="mr-2 mt-1 h-4 w-4"></i><strong>Price:</strong> ${activity.details.price}</p>` : '';
                detailsHtml += activity.details.duration ? `<p class="detail-item flex items-start"><i data-lucide="hourglass" class="mr-2 mt-1 h-4 w-4"></i><strong>Duration:</strong> ${activity.details.duration}</p>` : '';
                if (activity.details.notes && Array.isArray(activity.details.notes)) {
                    activity.details.notes.forEach(note => {
                        detailsHtml += `<div class="mt-2 p-3 bg-sky-50 rounded-md border border-sky-200 text-sm text-sky-700 flex items-start"><i data-lucide="info" class="mr-2 mt-1 h-4 w-4 flex-shrink-0"></i><div>${note}</div></div>`;
                    });
                } else if (activity.details.notes) {
                     detailsHtml += `<div class="mt-2 p-3 bg-sky-50 rounded-md border border-sky-200 text-sm text-sky-700 flex items-start"><i data-lucide="info" class="mr-2 mt-1 h-4 w-4 flex-shrink-0"></i><div>${activity.details.notes}</div></div>`;
                }

            }
            
            return `
            <div class="activity-card p-6 mb-6">
                <h4 class="text-2xl font-semibold mb-3 flex items-center">
                    ${activity.icon ? `<i data-lucide="${activity.icon}" class="mr-3 text-2xl" style="color: var(--gc-primary-blue);"></i>` : ''}
                    ${activity.name}
                </h4>
                ${activity.time_slot ? `<p class="text-sm text-gray-500 mb-3 font-medium">${activity.time_slot}</p>` : ''}
                <p class="text-gray-600 mb-4 leading-relaxed">${activity.description}</p>
                <div class="space-y-2 text-sm text-gray-700">
                    ${detailsHtml}
                </div>
                ${activity.details && activity.details.website ? `<div class="mt-4"><a href="${activity.details.website}" target="_blank" class="btn-link">Official Website <i data-lucide="external-link" class="inline-block ml-1 h-4 w-4"></i></a></div>` : ''}
            </div>
        `}).join('');

        let diningSuggestionsHtml = '';
        if (dayData.dining_suggestions) {
            diningSuggestionsHtml = `
                <div class="activity-card p-6 mb-6 bg-sky-50/50 border-sky-200">
                    <h4 class="text-xl font-semibold text-sky-700 mb-3 flex items-center"><i data-lucide="utensils" class="mr-2"></i>Dining Suggestions</h4>
                    <ul class="list-disc list-inside text-gray-600 space-y-1">
                        ${dayData.dining_suggestions.breakfast ? `<li><strong>Breakfast:</strong> ${dayData.dining_suggestions.breakfast}</li>` : ''}
                        ${dayData.dining_suggestions.lunch ? `<li><strong>Lunch:</strong> ${dayData.dining_suggestions.lunch}</li>` : ''}
                        ${dayData.dining_suggestions.dinner ? `<li><strong>Dinner:</strong> ${dayData.dining_suggestions.dinner}</li>` : ''}
                    </ul>
                </div>
            `;
        }
        
        let alternativesHtml = '';
        if (dayData.alternatives && dayData.alternatives.length > 0) {
            alternativesHtml = `
                <div class="alternatives-section activity-card p-6 bg-amber-50/50 border-amber-200">
                    <h5 class="text-xl font-semibold text-amber-700 mb-3 flex items-center"><i data-lucide="lightbulb" class="mr-2"></i>Alternative Options</h5>
                    <ul class="space-y-1 text-gray-600">
                        ${dayData.alternatives.map(alt => `<li><strong>${alt.name}:</strong> ${alt.description}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        dayElement.innerHTML = `
            <div class="day-header">
                <h3 class="text-3xl font-bold day-title flex items-center">
                    <i data-lucide="calendar-days" class="mr-3"></i>Day ${dayData.day}: ${dayData.date}
                </h3>
                <p class="text-lg text-white/80 mt-1">${dayData.title}</p>
            </div>
            <div class="p-0 md:p-6">
                ${activitiesHtml}
                ${diningSuggestionsHtml}
                ${alternativesHtml}
            </div>
        `;
        container.appendChild(dayElement);
    });

    lucide.createIcons();
}

function setupAnimations() {
    document.querySelectorAll('.day-container').forEach(dayContainer => {
        inView(dayContainer, (entry) => {
            animate(entry.target, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, ease: "easeOut" });

            const activityCardsInThisDay = Array.from(entry.target.querySelectorAll('.activity-card'));
            if (activityCardsInThisDay.length > 0) {
                animate(
                    activityCardsInThisDay,
                    { opacity: [0, 1], scale: [0.93, 1] },
                    { duration: 0.5, delay: stagger(0.1, { startDelay: 0.2, ease: "easeOut" }) }
                );
            }
            
        }, { amount: 0.1 }); // Trigger when 10% of day-container is visible
    });


    const travelTipsCard = document.querySelector('.travel-tips-card');
    if (travelTipsCard) {
        inView(travelTipsCard, (entry) => {
            animate(entry.target, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, ease: "easeOut" });
        }, { amount: 0.1 });
    }
}
